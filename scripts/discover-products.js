const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const clientId = process.env.BOL_CLIENT_ID;
const clientSecret = process.env.BOL_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.log('Skipping product discovery: BOL_CLIENT_ID or BOL_CLIENT_SECRET missing.');
  process.exit(0);
}

const dataDir = path.join(__dirname, '..', 'src', 'data');

// Explicit Keyword-to-Category File Mapping
const discoveryMap = [
  {
    file: 'power.json',
    categoryName: 'Powerstation & Solar',
    queries: ['zonnepaneel opvouwbaar', 'bluetti solar', 'ecoflow solar', 'powerstation 12v']
  },
  {
    file: 'accessoires.json',
    categoryName: 'Outdoor Accessoires',
    queries: ['anti condensmat daktent', 'waterdichte autoluifel', 'cadac carri chef', 'campingstoel lichtgewicht', '270 luifel auto']
  },
  {
    file: 'daktenten.json',
    categoryName: 'Daktenten',
    queries: ['hardshell daktent', 'softshell daktent', 'trekker daktent']
  },
  {
    file: 'dakdragers.json',
    categoryName: 'Dakdragers',
    queries: ['thule wingbar evo', 'menabo jackson', 'dakkoffer auto', 'bagage dakkoffer']
  },
  {
    file: 'fietsendragers.json',
    categoryName: 'Fietsendragers',
    queries: ['prouser amber iv', 'thule easyfold']
  }
];

function formatPrice(num) {
  if (typeof num !== 'number') return '0,00';
  return num.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

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
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.access_token) resolve(parsed.access_token);
          else reject(new Error(`OAuth Error: ${JSON.stringify(parsed)}`));
        } catch (e) { reject(e); }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function searchCatalog(token, query) {
  return new Promise((resolve) => {
    const encodedQuery = encodeURIComponent(query);
    const options = {
      hostname: 'api.bol.com',
      path: `/marketing/catalog/v1/products/search?q=${encodedQuery}&country-code=NL&limit=3`,
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
          const parsed = JSON.parse(data);
          resolve(parsed.products || []);
        } catch (e) { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });
}

function selectImage(productData) {
  if (!productData || !productData.images || productData.images.length === 0) return null;
  const primaryImg = productData.images.find(img => img.order === 1) || productData.images[0];
  if (!primaryImg || !primaryImg.renditions) return null;
  const preferred = primaryImg.renditions.find(r => r.width >= 500 && r.width <= 1000) || primaryImg.renditions[0];
  return preferred ? preferred.url : null;
}

async function run() {
  console.log('==================================================');
  console.log('  BOL.COM API AUTOMATED PRODUCT DISCOVERY  ');
  console.log('==================================================\n');

  try {
    const token = await getAccessToken(clientId, clientSecret);
    console.log('✓ Token obtained.\n');

    let totalDiscovered = 0;

    // Pick a random mapping category to discover 1 product per run
    const targetCategory = discoveryMap[Math.floor(Math.random() * discoveryMap.length)];
    const randomQuery = targetCategory.queries[Math.floor(Math.random() * targetCategory.queries.length)];

    console.log(`Searching Bol.com for query: "${randomQuery}" -> Destination: ${targetCategory.file}`);
    const results = await searchCatalog(token, randomQuery);

    const filePath = path.join(dataDir, targetCategory.file);
    if (!fs.existsSync(filePath)) return;

    const existingProducts = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const existingEans = existingProducts.map(p => p.ean);

    for (const item of results) {
      if (!item.ean || existingEans.includes(item.ean)) continue;

      const title = item.title || 'Outdoor Product';
      const brand = item.brand || targetCategory.categoryName;
      const price = item.specs ? '0,00' : '0,00';
      const image = selectImage(item) || 'https://images.unsplash.com/photo-1504280741562-fd0e12315105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
      const searchEncoded = encodeURIComponent(`${brand} ${title}`);
      const link = `https://partner.bol.com/click/click?p=2&t=url&s=1536170&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F%3Fsearchtext%3D${searchEncoded}`;

      const newId = existingProducts.length > 0 ? Math.max(...existingProducts.map(p => p.id || 0)) + 1 : 1;

      const newProduct = {
        id: newId,
        name: title,
        category: brand,
        price: price,
        image: image,
        link: link,
        ean: item.ean
      };

      existingProducts.push(newProduct);
      fs.writeFileSync(filePath, JSON.stringify(existingProducts, null, 2), 'utf-8');

      console.log(`  ✓ Discovered & added new product: "${title}" (EAN: ${item.ean}) to ${targetCategory.file}`);
      totalDiscovered++;
      break; // Add max 1 product per execution for natural growth
    }

    if (totalDiscovered === 0) {
      console.log('No new unique products found for this run (already in catalog or no results).');
    }

  } catch (err) {
    console.error('Discovery Error:', err.message);
  }
}

run();
