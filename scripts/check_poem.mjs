import fs from 'fs';

const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_pristine_canvas.html', 'utf8');

const regex = /data-node-id="([^"]+)" style="position:absolute;top:([0-9.]+)px;left:([0-9.]+)px;width:([0-9.]+)px;height:([^;"]+);/g;
let match;
while ((match = regex.exec(html)) !== null) {
  const top = parseFloat(match[2]);
  if (top > 3400 && top < 4100) {
    console.log(match[1], 'top:', match[2], 'height:', match[5]);
  }
}
