import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const fonts = [...html.matchAll(/https?:\/\/[^"')\s]+\.(?:woff2?|ttf|otf)/gi)].map(m => m[0]);
    console.log('Fonts in HTML:', fonts);
    const linkFonts = [...html.matchAll(/<link[^>]+(?:font|stylesheet)[^>]+>/gi)].map(m => m[0]);
    console.log('Link tags:', linkFonts);
  });
}).on('error', console.error);
