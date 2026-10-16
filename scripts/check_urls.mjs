import fs from 'fs';

const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_root_html.html', 'utf8');
const urls = [...html.matchAll(/https?:\/\/[^'"()\s]+/g)].map(m => m[0]);
console.log('Total URLs:', urls.length);
console.log(JSON.stringify(Array.from(new Set(urls)), null, 2));
