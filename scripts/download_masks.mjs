import https from 'https';
import fs from 'fs';
import path from 'path';

const masks = [
  { url: 'https://assets.cinelove.me/resources/cropShapes/061_eheay43znau.png', filename: '061_eheay43znau.png' },
  { url: 'https://assets.cinelove.me/resources/cropShapes/072_y6myfwhzrlk.png', filename: '072_y6myfwhzrlk.png' },
  { url: 'https://assets.cinelove.me/gifts/thumb/biubiu.png', filename: 'biubiu.png' },
  { url: 'https://assets.cinelove.me/assets/audio-1.png', filename: 'audio-1.png' },
  { url: 'https://cinelove.me/_next/static/media/like.ea5798c7.png', filename: 'like.png' },
  { url: 'https://cinelove.me/_next/static/media/gift-box.f417ec86.png', filename: 'gift-box.png' },
  { url: 'https://cinelove.me/_next/static/media/message.24f9a1e2.png', filename: 'message.png' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => stream.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  for (const m of masks) {
    const dest = path.resolve('public/assets', m.filename);
    try {
      await download(m.url, dest);
      console.log(`Downloaded ${m.filename}`);
    } catch (e) {
      console.log(`Failed ${m.filename}: ${e.message}`);
    }
  }
}

run();
