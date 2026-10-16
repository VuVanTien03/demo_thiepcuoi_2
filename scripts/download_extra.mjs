import fs from 'fs';
import https from 'https';

const url = 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/24d25d06-8949-4d27-ad67-3cfc2d1a21db.png';
const file = fs.createWriteStream('public/assets/dec_extra_flower.png');
https.get(url, (res) => {
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved dec_extra_flower.png');
  });
}).on('error', console.error);
