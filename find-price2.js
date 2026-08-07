const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\hzuid\\.gemini\\antigravity\\brain\\a0ca0dec-0c4e-4f12-9436-0a134dbf34ec\\.system_generated\\steps\\546\\content.md', 'utf-8');

const matches = content.match(/\d+[\.,]\d{2}/g);
console.log(matches ? matches.slice(0, 30) : 'Geen prijzen gevonden');
