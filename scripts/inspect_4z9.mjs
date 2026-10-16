import fs from 'fs';

const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_pristine_canvas.html', 'utf8');

const idx = html.indexOf('data-node-id="4Z9APOIBot"');
console.log(html.slice(idx, idx + 1200));
