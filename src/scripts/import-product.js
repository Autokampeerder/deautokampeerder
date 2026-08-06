const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const SITE_ID = '1536170';
const PRODUCTS_FILE = path.join(__dirname, '../data/products.json');

async function importProduct(url) {
  try {
    console.log(`🔍 Fetching data from: ${url}`);
    
    // Simulate browser headers to prevent getting blocked
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'nl-NL,nl;q=0.9',
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Parse Data
    let title = $('h1[data-test="title"]').text().trim();
    if (!title) title = $('title').text().split('|')[0].trim();

    let price = $('.promo-price').text().trim().replace(/\s+/g, '');
    if (!price) {
      // Fallback: search for meta price
      price = $('meta[itemprop="price"]').attr('content') || 'Onbekend';
    } else {
      // Clean up the price (e.g. "1.199-" -> "€ 1.199,-")
      price = `€ ${price.replace('-', ',-')}`;
    }

    let image = $('meta[property="og:image"]').attr('content');
    if (!image) {
      // Fallback
      image = $('img[data-test="product-image"]').attr('src');
    }

    // Generate Bol.com Affiliate Link
    const affiliateUrl = `https://partner.bol.com/click/click?p=2&t=url&s=${SITE_ID}&url=${encodeURIComponent(url)}`;

    console.log('\n✅ Gegevens gevonden:');
    console.log(`Naam: ${title}`);
    console.log(`Prijs: ${price}`);
    console.log(`Afbeelding: ${image}`);
    console.log(`Link: ${affiliateUrl}`);

    // Update products.json
    let products = [];
    if (fs.existsSync(PRODUCTS_FILE)) {
      products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));
    }

    // Assign a unique ID
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

    // We make a guess for category, can be changed manually later
    const newProduct = {
      id: newId,
      name: title,
      price: price,
      category: "Daktenten",
      image: image,
      link: affiliateUrl,
      badges: ["Nieuw"],
      specs: ["Bekijk details op Bol.com"]
    };

    products.push(newProduct);
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8');

    console.log(`\n🎉 Product succesvol toegevoegd aan products.json!`);

  } catch (error) {
    console.error('❌ Error tijdens importeren:', error.message);
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Gebruik: node import-product.js <bol.com-url>');
} else {
  importProduct(args[0]);
}
