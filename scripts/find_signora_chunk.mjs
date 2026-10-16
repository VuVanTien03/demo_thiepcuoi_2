import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', async () => {
    const scripts = [...html.matchAll(/src="(\/_next\/static\/chunks\/[^"]+)"/g)].map(m => m[1]);
    console.log('Script chunks count:', scripts.length);
    for (const s of scripts) {
      const url = 'https://cinelove.me' + s;
      try {
        const content = await new Promise((resolve, reject) => {
          https.get(url, (r) => {
            let data = '';
            r.on('data', d => data += d);
            r.on('end', () => resolve(data));
          }).on('error', reject);
        });
        if (content.includes('Signora') || content.includes('signora')) {
          console.log('FOUND Signora in:', s);
          const idx = content.indexOf('Signora');
          console.log(content.substring(Math.max(0, idx - 150), idx + 250));
        }
      } catch (e) {}
    }
  });
});
