const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

const clientId = process.env.BOL_CLIENT_ID;
const clientSecret = process.env.BOL_CLIENT_SECRET;

const dataDir = path.join(__dirname, 'src', 'data');
const files = ['daktenten.json', 'dakdragers.json', 'fietsendragers.json', 'power.json', 'accessoires.json'];

function formatPrice(num) {
  if (typeof num !== 'number') return num;
  return num.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getAccessToken(id, secret) {
  return new Promise((resolve, reject) => {
    if (!id || !secret) {
      return reject(new Error('BOL_CLIENT_ID or BOL_CLIENT_SECRET is missing in .env.local'));
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

function fetchBestOfferByEan(token, ean) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.bol.com',
      path: `/marketing/catalog/v1/products/${ean}/offers/best?country-code=NL`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Accept-Language': 'nl-NL'
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

function fetchMediaByEan(token, ean) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.bol.com',
      path: `/marketing/catalog/v1/products/${ean}/media?country-code=NL`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Accept-Language': 'nl-NL'
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

function selectBestImage(mediaData) {
  if (!mediaData || !mediaData.images || mediaData.images.length === 0) return null;
  
  // Get primary image (order 1)
  const primaryImg = mediaData.images.find(img => img.order === 1) || mediaData.images[0];
  if (!primaryImg || !primaryImg.renditions || primaryImg.renditions.length === 0) return null;

  // Pick a rendition around 550px - 1200px width
  const preferredRendition = primaryImg.renditions.find(r => r.width >= 500 && r.width <= 1200) ||
                             primaryImg.renditions[primaryImg.renditions.length - 1];
  
  return preferredRendition ? preferredRendition.url : null;
}

async function run() {
  console.log('==================================================');
  console.log('  BOL.COM API LIVE PRICES & IMAGES SYNCHRONIZER  ');
  console.log('==================================================\n');

  try {
    console.log('1. Authenticating with Bol.com OAuth token endpoint...');
    const token = await getAccessToken(clientId, clientSecret);
    console.log('✓ Token obtained successfully!\n');

    let totalUpdatedPrices = 0;
    let totalUpdatedImages = 0;

    for (const file of files) {
      const filePath = path.join(dataDir, file);
      if (!fs.existsSync(filePath)) continue;

      console.log(`Processing category: ${file}`);
      const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      for (const product of products) {
        if (!product.ean) {
          console.log(`  [SKIP] ${product.name} (No EAN)`);
          continue;
        }

        // Fetch price
        const offerData = await fetchBestOfferByEan(token, product.ean);
        if (offerData && typeof offerData.price === 'number') {
          product.price = formatPrice(offerData.price);
          totalUpdatedPrices++;
        }

        // Fetch image
        const mediaData = await fetchMediaByEan(token, product.ean);
        const imageUrl = selectBestImage(mediaData);
        if (imageUrl) {
          product.image = imageUrl;
          totalUpdatedImages++;
        }

        console.log(`  ✓ ${product.name} -> Price: € ${product.price} | Image: ${imageUrl ? 'Synced' : 'Kept current'}`);

        // Rate limit pause
        await new Promise(r => setTimeout(r, 400));
      }

      fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8');
      console.log(`Finished ${file}.\n`);
    }

    console.log('==================================================');
    console.log(`✓ Sync complete! ${totalUpdatedPrices} prices and ${totalUpdatedImages} images synced.`);
    console.log('==================================================');

  } catch (err) {
    console.error('Fatal API Error:', err.message);
  }
}

run();
