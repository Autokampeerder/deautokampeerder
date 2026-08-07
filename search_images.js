const https = require('https');

const photos = {
  daktenten: 'XoM0eYSXWMs',
  dakdragers: '_ZPQL15Wv4I',
  fietsendragers: '3tsU0-xAmDA',
  accu: '6mNwsRWouiU',
  accessoires: 'ET1MgLpkh4E'
};

async function getDownloadRedirect(id) {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'unsplash.com',
      path: `/photos/${id}/download`,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      resolve(res.headers.location || null);
    });
    req.on('error', () => resolve(null));
    req.end();
  });
}

async function run() {
  for (const [key, id] of Object.entries(photos)) {
    const url = await getDownloadRedirect(id);
    console.log(`${key}: ${url}`);
  }
}

run();
