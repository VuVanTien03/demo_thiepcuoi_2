import fs from 'fs';

let html = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_root_html.html', 'utf8');
html = html.normalize('NFC');

const urlReplacements = [
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/d76cd534-2619-4246-b37e-4abe5626cc8c.png', '/assets/dec_header_ornament.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/6cd485eb-cc48-4d0e-8bbc-496309c757da.png', '/assets/dec_top_left.png'],
  ['https://assets.cinelove.me/resources/cropShapes/061_eheay43znau.png', '/assets/061_eheay43znau.png'],
  [/https:\/\/img\.cinelove\.me\/templates\/assets\/248881a1-7da2-4232-b69b-c39d393f0b91\/be247aef-e232-461e-b60e-5b0f0c3a9bca\.jpeg(\?crop=[0-9,]+)?/g, '/assets/groom_avatar.jpeg'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/585ff6a5-270d-4581-8187-b1edd61d2614.png', '/assets/dec_yen_nhi.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/54d66d8f-a155-4178-8e9f-90c75fc517df.png', '/assets/dec_hai_dang.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/885e7a8c-fbea-458c-929b-cdddff1d6111.png', '/assets/dec_heart_ornament.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/73d311dd-a3e4-456f-99ca-5528bcc6c07e.jpeg', '/assets/couple_arch.jpeg'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/cba9d9d0-7917-40c8-8d94-d2167d40332e.png', '/assets/dec_date_bar.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/228e0564-4f66-49d8-a40c-79e481e2d514.png', '/assets/dec_banner.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/4d7ad601-b22f-404e-aeb7-6c41e82b3473.png', '/assets/dec_we_get_married.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/6506359f-c462-44ff-aa6c-17b96366de72.png', '/assets/dec_mini_flower.png'],
  ['https://assets.cinelove.me/resources/cropShapes/072_y6myfwhzrlk.png', '/assets/072_y6myfwhzrlk.png'],
  [/https:\/\/img\.cinelove\.me\/templates\/assets\/248881a1-7da2-4232-b69b-c39d393f0b91\/c5a9d832-82e5-4e02-ae82-1fe6131eaf3f\.jpeg(\?crop=[0-9,]+)?/g, '/assets/bride_avatar.jpeg'],
  [/https:\/\/img\.cinelove\.me\/templates\/assets\/248881a1-7da2-4232-b69b-c39d393f0b91\/b0609278-0380-4211-966a-2d9f30978903\.jpeg(\?crop=[0-9,]+)?/g, '/assets/couple_thumb_1.jpeg'],
  [/https:\/\/img\.cinelove\.me\/templates\/assets\/248881a1-7da2-4232-b69b-c39d393f0b91\/adc2407c-7c61-4d1b-9231-a1560eb10aa1\.jpeg(\?crop=[0-9,]+)?/g, '/assets/couple_thumb_2.jpeg'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/24d25d06-8949-4d27-ad67-3cfc2d1a21db.png', '/assets/dec_extra_flower.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/2c95649b-88d9-420f-a69f-2e0e06d38342.jpeg', '/assets/fall_in_love.jpeg'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/87d8cc74-ef22-4cdf-851b-7b4d4ed75427.jpeg', '/assets/hero_cover.jpeg'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/757e5ae8-7917-46e9-bf4d-169a4df5be94.png', '/assets/dec_vintage_label.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/be0c3917-956a-4ccf-8908-edb0e843a3ed.jpeg', '/assets/poem_portrait.jpeg'],
  ['https://assets.cinelove.me/assets/plugins/calen_heart_1.png', '/assets/calen_heart.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/aca62364-8dcb-49a9-9231-c29272a053c5.png', '/assets/dec_ribbon.png'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/6af38105-8e2d-4e95-8e05-80040c4e5b8a.jpeg', '/assets/gallery_1.jpeg'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/828d3b59-ed10-422f-97e1-7a6933defba4.jpeg', '/assets/gallery_2.jpeg'],
  ['https://assets.cinelove.me/templates/assets/248881a1-7da2-4232-b69b-c39d393f0b91/4640e33f-421f-4fcf-bcf4-4ba47a7c563f.png', '/assets/dec_bottom_leaf.png']
];

for (const [from, to] of urlReplacements) {
  if (typeof from === 'string') {
    html = html.split(from).join(to);
  } else {
    html = html.replace(from, to);
  }
}

// Fix font-family inside style attribute: font-family:&quot;Mallong&quot; -> font-family:'Mallong'
html = html.replace(/font-family:&quot;([^&]+)&quot;/g, "font-family:'$1',serif");
html = html.replace(/font-family:&quot;([^&]+)/g, "font-family:'$1',serif");
html = html.replace(/font-family:"([^"]+)"/g, "font-family:'$1',serif");

// Find start tag of inner canvas
const startTag = '<div style="position:relative;user-select:auto;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:500px;height:7523px;min-width:50px;min-height:50px">';
const startIndex = html.indexOf(startTag);
if (startIndex === -1) {
  console.error("Could not find start tag");
  process.exit(1);
}

let canvasHtml = html.slice(startIndex);
// Clean trailing </div>
if (canvasHtml.endsWith('</div></div>')) {
  canvasHtml = canvasHtml.slice(0, -12);
} else if (canvasHtml.endsWith('</div>')) {
  canvasHtml = canvasHtml.slice(0, -6);
}

fs.writeFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_pristine_canvas.html', canvasHtml);

console.log('Pristine canvas HTML generated, length:', canvasHtml.length);
console.log('Remaining cinelove assets urls:', [...canvasHtml.matchAll(/https?:\/\/[^'"()\s]+/g)].map(m => m[0]));
