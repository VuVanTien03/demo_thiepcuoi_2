import https from 'https';
import fs from 'fs';

const files = [
  'https://cinelove.me/_next/static/css/4456bc88e19c483a.css',
  'https://cinelove.me/_next/static/css/bdc5aa70fb679b30.css'
];

for (let i = 0; i < files.length; i++) {
  https.get(files[i], (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const fonts = [...data.matchAll(/@font-face\s*\{[^}]+\}/g)].map(m => m[0]);
      console.log(`File ${i} @font-face count:`, fonts.length);
      fonts.forEach(f => console.log(f));
    });
  });
}
