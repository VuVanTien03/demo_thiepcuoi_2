import https from 'https';
import fs from 'fs';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const css1 = await fetchUrl('https://cinelove.me/_next/static/css/4456bc88e19c483a.css');
  const css2 = await fetchUrl('https://cinelove.me/_next/static/css/bdc5aa70fb679b30.css');
  fs.writeFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\scratch\\cinelove_ext1.css', css1);
  fs.writeFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\scratch\\cinelove_ext2.css', css2);
  
  const allCss = css1 + '\n' + css2;
  const fontFaces = allCss.match(/@font-face\s*\{[^}]+\}/g);
  console.log("Found font-faces:", fontFaces);
}

run();
