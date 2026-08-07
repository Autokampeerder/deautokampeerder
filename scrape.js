const cheerio = require('cheerio');
const fs = require('fs');
const https = require('https');

const url = 'https://www.bol.com/nl/nl/s/?searchtext=daktent&suggestiontype=search_history&suggestFragment=dak&12194=950-4181&page=1';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const products = [];
    
    $('.product-item--row').each((i, el) => {
      if (i >= 4) return;
      const title = $(el).find('.product-title').text().trim();
      let price = $(el).find('.promo-price').text().replace(/\s+/g, '').trim();
      const link = 'https://www.bol.com' + $(el).find('.product-title').attr('href');
      let image = $(el).find('img').attr('src') || $(el).find('img').attr('data-src');
      
      products.push({ title, price, link, image });
    });
    
    console.log(JSON.stringify(products, null, 2));
  });
}).on('error', (e) => {
  console.error(e);
});
