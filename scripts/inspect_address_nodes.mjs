import fs from 'fs';

const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_pristine_canvas.html', 'utf8');

for (const id of ['4Z9APOIBot', '6Tgbfoeqon']) {
  const idx = html.indexOf(`data-node-id="${id}"`);
  console.log(`=== ${id} ===`);
  console.log(html.slice(idx, idx + 600));
}
