import fs from 'fs';

const html = fs.readFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\scratch\\template28_root_html.html', 'utf8');

console.log("Root HTML length:", html.length);
// Check occurrences of data-node-id
const nodeIds = html.match(/data-node-id="([^"]+)"/g);
console.log("Total data-node-id matches:", nodeIds ? nodeIds.length : 0);
