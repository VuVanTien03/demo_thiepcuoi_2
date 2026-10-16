import fs from 'fs';

const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_pristine_canvas.html', 'utf8');

const regex = /data-node-id="([^"]+)" style="position:absolute;top:([0-9.]+)px;left:([0-9.]+)px;width:([0-9.]+)px;height:([^;"]+);/g;
let m;
while ((m = regex.exec(html)) !== null) {
  const top = parseFloat(m[2]);
  if (top > 5700 && top < 6400) {
    const idx = html.indexOf(`data-node-id="${m[1]}"`);
    const snippet = html.slice(idx, idx + 500).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    console.log(m[1], 'top:', m[2], 'h:', m[5], 'w:', m[4], 'text:', snippet.substring(0, 100));
  }
}
