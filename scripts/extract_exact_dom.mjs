import fs from 'fs';

const content = fs.readFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\.system_generated\\steps\\7\\content.md', 'utf8');

// Find the start of #root-page-container
const rootStart = content.indexOf('<div id="root-page-container"');
if (rootStart === -1) {
  console.log("Not found root-page-container");
  process.exit(1);
}

// Find blessing-box and toolbar
const blessingStart = content.indexOf('<div id="blessing-box"');
const toolbarStart = content.indexOf('<div id="cinelove-toolbar"');

console.log("Root start:", rootStart);
console.log("Blessing start:", blessingStart);
console.log("Toolbar start:", toolbarStart);

const rootHtml = content.slice(rootStart, blessingStart);
fs.writeFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\scratch\\template28_root_html.html', rootHtml);
console.log("Saved root HTML length:", rootHtml.length);
