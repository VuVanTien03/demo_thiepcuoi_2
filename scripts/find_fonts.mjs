import fs from 'fs';

const content = fs.readFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\.system_generated\\steps\\7\\content.md', 'utf8');

const fontUrls = content.match(/https:\/\/[^"')\s]+\.(?:woff2?|ttf|otf)/g);
console.log("Font URLs in content.md:", fontUrls);
