const https = require('https');
const url = 'https://html.duckduckgo.com/html/?q=dutch+mountains+daktent+fold2+image';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const regex = /img src="(.*?)"/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      console.log(match[1]);
    }
  });
}).on('error', (console.error));
