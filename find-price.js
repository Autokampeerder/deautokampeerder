const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\hzuid\\.gemini\\antigravity\\brain\\a0ca0dec-0c4e-4f12-9436-0a134dbf34ec\\.system_generated\\steps\\546\\content.md', 'utf-8');

const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('€') || line.includes('1.') || line.includes('2.') || line.includes('OFFLANDER') || line.includes('prijs')) {
    if (line.length < 200) {
      console.log(`L${index}: ${line}`);
    }
  }
});
