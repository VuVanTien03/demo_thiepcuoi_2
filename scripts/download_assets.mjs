import fs from 'fs';
import path from 'path';
import https from 'https';

const assetsDir = path.resolve('public/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const assets = [
  // Audio
  { url: 'https://assets.cinelove.me/mp3/d525d3a7-334b-4bef-847f-23a0c5abbac6.mp3', filename: 'wedding_music.mp3' },
  
  // Photos
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/87d8cc74-ef22-4cdf-851b-7b4d4ed75427.jpeg', filename: 'hero_cover.jpeg' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/73d311dd-a3e4-456f-99ca-5528bcc6c07e.jpeg', filename: 'couple_arch.jpeg' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/2c95649b-88d9-420f-a69f-2e0e06d38342.jpeg', filename: 'fall_in_love.jpeg' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/be0c3917-956a-4ccf-8908-edb0e843a3ed.jpeg', filename: 'poem_portrait.jpeg' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/6af38105-8e2d-4e95-8e05-80040c4e5b8a.jpeg', filename: 'gallery_1.jpeg' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/828d3b59-ed10-422f-97e1-7a6933defba4.jpeg', filename: 'gallery_2.jpeg' },
  
  // Avatars
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/be247aef-e232-461e-b60e-5b0f0c3a9bca.jpeg', filename: 'groom_avatar.jpeg' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/c5a9d832-82e5-4e02-ae82-1fe6131eaf3f.jpeg', filename: 'bride_avatar.jpeg' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/b0609278-0380-4211-966a-2d9f30978903.jpeg', filename: 'couple_thumb_1.jpeg' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/adc2407c-7c61-4d1b-9231-a1560eb10aa1.jpeg', filename: 'couple_thumb_2.jpeg' },

  // Graphics & Ornaments
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/6cd485eb-cc48-4d0e-8bbc-496309c757da.png', filename: 'dec_top_left.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/d76cd534-2619-4246-b37e-4abe5626cc8c.png', filename: 'dec_header_ornament.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/585ff6a5-270d-4581-8187-b1edd61d2614.png', filename: 'dec_yen_nhi.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/54d66d8f-a155-4178-8e9f-90c75fc517df.png', filename: 'dec_hai_dang.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/885e7a8c-fbea-458c-929b-cdddff1d6111.png', filename: 'dec_heart_ornament.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/cba9d9d0-7917-40c8-8d94-d2167d40332e.png', filename: 'dec_date_bar.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/228e0564-4f66-49d8-a40c-79e481e2d514.png', filename: 'dec_banner.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/4d7ad601-b22f-404e-aeb7-6c41e82b3473.png', filename: 'dec_we_get_married.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/6506359f-c462-44ff-aa6c-17b96366de72.png', filename: 'dec_mini_flower.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/757e5ae8-7917-46e9-bf4d-169a4df5be94.png', filename: 'dec_vintage_label.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/aca62364-8dcb-49a9-9231-c29272a053c5.png', filename: 'dec_ribbon.png' },
  { url: 'https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/4640e33f-421f-4fcf-bcf4-4ba47a7c563f.png', filename: 'dec_bottom_leaf.png' },
  { url: 'https://assets.cinelove.me/assets/plugins/calen_heart_1.png', filename: 'calen_heart.png' }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`Failed with status code: ${response.statusCode} for ${url}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const asset of assets) {
    const dest = path.join(assetsDir, asset.filename);
    try {
      await downloadFile(asset.url, dest);
      console.log(`✓ Downloaded: ${asset.filename}`);
    } catch (err) {
      console.warn(`✗ Failed to download ${asset.filename}:`, err.message);
    }
  }
  console.log('Download complete!');
}

run();
