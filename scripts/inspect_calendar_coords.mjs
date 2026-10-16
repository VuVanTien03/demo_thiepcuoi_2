import fs from 'fs';

const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_pristine_canvas.html', 'utf8');

const regex = /data-node-id="([^"]+)" style="position:absolute;top:([0-9.]+)px;left:([0-9.]+)px;width:([0-9.]+)px;height:([^;"]+);/g;
let m;
while ((m = regex.exec(html)) !== null) {
  const top = parseFloat(m[2]);
  if (top > 4800 && top < 5900) {
    console.log(m[1], 'top:', m[2], 'height:', m[5], 'width:', m[4]);
  }
}
