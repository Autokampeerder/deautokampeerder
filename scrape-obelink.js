const cheerio = require('cheerio');
const https = require('https');

const url = 'https://www.obelink.nl/dutch-mountains-fold-2-daktent.html';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const img = $('img').first().attr('src');
    console.log("Image:", img);
    
    // print all large images
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.includes('media/catalog')) {
        console.log(src);
      }
    });
  });
}).on('error', (e) => {
  console.error(e);
});
