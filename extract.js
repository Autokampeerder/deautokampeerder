const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\hzuid\\.gemini\\antigravity\\brain\\a0ca0dec-0c4e-4f12-9436-0a134dbf34ec\\.system_generated\\steps\\495\\content.md', 'utf-8');

const regex = /!\[.*?\]\((.*?)\)/g;
let match;
while ((match = regex.exec(content)) !== null) {
  if (match[1].includes('media')) {
    console.log(match[1]);
  }
}
