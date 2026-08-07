const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

const clientId = process.env.BOL_CLIENT_ID || '28a43565-4680-4276-a204-63e910e1714b';
const clientSecret = process.env.BOL_CLIENT_SECRET;

const dataDir = path.join(__dirname, 'src', 'data');
const files = ['daktenten.json', 'dakdragers.json', 'fietsendragers.json', 'power.json', 'accessoires.json'];

// Step A: Obtain OAuth Access Token from Bol.com
function getAccessToken(id, secret) {
  return new Promise((resolve, reject) => {
    if (!secret) {
      return reject(new Error('BOL_CLIENT_SECRET is missing. Please set it in .env.local'));
    }

    const authHeader = 'Basic ' + Buffer.from(`${id}:${secret}`).toString('base64');
    const postData = 'grant_type=client_credentials';

    const req = https.request('https://login.bol.com/token', {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.access_token) {
            resolve(parsed.access_token);
          } else {
            reject(new Error(`OAuth Error: ${JSON.stringify(parsed)}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Step B: Query Product Data / Price by EAN from Marketing Catalog API
function fetchProductByEan(token, ean) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.bol.com',
      path: `/marketing/catalog/v1/products/${ean}?country-code=NL`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('--- Starting Bol.com Price Synchronization ---');
  if (!clientSecret) {
    console.error('ERROR: BOL_CLIENT_SECRET environment variable is missing.');
    console.log('Please add BOL_CLIENT_SECRET=<your_secret> to .env.local file.');
    return;
  }

  try {
    console.log('1. Authenticating with Bol.com OAuth token endpoint...');
    const token = await getAccessToken(clientId, clientSecret);
    console.log('✓ Access token received successfully!');

    for (const file of files) {
      const filePath = path.join(dataDir, file);
      if (!fs.existsSync(filePath)) continue;

      console.log(`\nUpdating prices for ${file}...`);
      const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      let updatedCount = 0;

      for (const product of products) {
        if (!product.ean) {
          console.log(`  [SKIP] ${product.name} (No EAN code)`);
          continue;
        }

        try {
          console.log(`  Querying API for EAN ${product.ean} (${product.name})...`);
          const apiData = await fetchProductByEan(token, product.ean);
          
          // Try to locate price in API response
          let newPrice = null;
          if (apiData.offers && apiData.offers.length > 0) {
            newPrice = apiData.offers[0].price;
          } else if (apiData.price) {
            newPrice = apiData.price;
          }

          if (newPrice) {
            console.log(`  ✓ Updated price: ${product.price} -> € ${newPrice}`);
            product.price = `${newPrice}`;
            updatedCount++;
          } else {
            console.log(`  ? No offer/price found in API response for EAN ${product.ean}`);
          }
        } catch (err) {
          console.error(`  ! Error querying EAN ${product.ean}: ${err.message}`);
        }

        // Sleep briefly to respect API rate limits
        await new Promise(r => setTimeout(r, 500));
      }

      fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8');
      console.log(`Finished ${file} (${updatedCount} prices updated).`);
    }

    console.log('\n✓ Price synchronization complete!');
  } catch (err) {
    console.error('Fatal API Error:', err.message);
  }
}

run();
