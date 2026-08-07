const https = require('https');
require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });

const clientId = process.env.BOL_CLIENT_ID;
const clientSecret = process.env.BOL_CLIENT_SECRET;

function getAccessToken(id, secret) {
  return new Promise((resolve, reject) => {
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
      res.on('end', () => resolve(JSON.parse(data).access_token));
    });
    req.write(postData);
    req.end();
  });
}

function fetchMediaByEan(token, ean) {
  return new Promise((resolve, reject) => {
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
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const token = await getAccessToken(clientId, clientSecret);
  const ean = '5903733010115'; // Offlander Fold 4
  const media = await fetchMediaByEan(token, ean);
  console.log('--- MEDIA API RESPONSE FOR EAN ' + ean + ' ---');
  console.log(JSON.stringify(media, null, 2));
}

run();
