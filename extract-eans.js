const fs = require('fs');
const path = require('path');
const https = require('https');

const dataDir = path.join(__dirname, 'src', 'data');
const files = ['daktenten.json', 'dakdragers.json', 'fietsendragers.json', 'power.json', 'accessoires.json'];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          redirectUrl = 'https://www.bol.com' + redirectUrl;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function decodeBolUrl(affiliateLink) {
  try {
    const parsed = new URL(affiliateLink);
    const targetUrl = parsed.searchParams.get('url');
    return targetUrl ? decodeURIComponent(targetUrl) : affiliateLink;
  } catch (e) {
    return affiliateLink;
  }
}

function extractEanFromHtml(html) {
  // Method 1: JSON-LD gtin13 / gtin / ean
  const gtinMatch = html.match(/"gtin13"\s*:\s*"(\d{13})"/i) || 
                    html.match(/"gtin"\s*:\s*"(\d{13})"/i) || 
                    html.match(/"ean"\s*:\s*"(\d{13})"/i);
  if (gtinMatch) return gtinMatch[1];

  // Method 2: Meta tags
  const metaMatch = html.match(/itemprop="gtin13"\s+content="(\d{13})"/i) ||
                    html.match(/content="(\d{13})"\s+itemprop="gtin13"/i);
  if (metaMatch) return metaMatch[1];

  // Method 3: Specs table (EAN)
  const specMatch = html.match(/EAN[\s\S]*?(\d{13})/i);
  if (specMatch) return specMatch[1];

  return null;
}

function extractFirstProductUrlFromSearch(html) {
  const match = html.match(/href="(\/nl\/nl\/p\/[^"]+)"/i);
  if (match) {
    return 'https://www.bol.com' + match[1];
  }
  return null;
}

async function processProduct(product) {
  if (product.ean) {
    console.log(`[SKIP] ${product.name} has EAN: ${product.ean}`);
    return product;
  }

  const targetUrl = decodeBolUrl(product.link);
  console.log(`[PROCESSING] ${product.name} -> ${targetUrl}`);

  try {
    let html = await fetchUrl(targetUrl);
    let ean = extractEanFromHtml(html);

    // If it's a search page, get the first product page URL and fetch that
    if (!ean && targetUrl.includes('/s/')) {
      console.log(`  -> Search page detected. Resolving first product URL...`);
      const productPageUrl = extractFirstProductUrlFromSearch(html);
      if (productPageUrl) {
        console.log(`  -> Found product page: ${productPageUrl}`);
        html = await fetchUrl(productPageUrl);
        ean = extractEanFromHtml(html);
      }
    }

    if (ean) {
      console.log(`  ✓ SUCCESS: EAN ${ean}`);
      product.ean = ean;
    } else {
      console.log(`  ✗ FAILED: EAN not found for ${product.name}`);
    }
  } catch (err) {
    console.error(`  ! ERROR fetching ${product.name}: ${err.message}`);
  }

  // Sleep 1 sec to avoid hammering Bol
  await new Promise(r => setTimeout(r, 1000));
  return product;
}

async function run() {
  for (const file of files) {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) continue;

    console.log(`\n--- Processing ${file} ---`);
    const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const updatedProducts = [];

    for (const product of products) {
      const updated = await processProduct(product);
      updatedProducts.push(updated);
    }

    fs.writeFileSync(filePath, JSON.stringify(updatedProducts, null, 2), 'utf-8');
    console.log(`Updated ${file}`);
  }
  console.log('\nFinished EAN Extraction!');
}

run();
