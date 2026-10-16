import fs from 'fs';

const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_pristine_canvas.html', 'utf8');

const idx = html.indexOf('calen_heart');
console.log('calen_heart idx:', idx);
if (idx !== -1) {
  console.log(html.slice(Math.max(0, idx - 400), idx + 800));
}
