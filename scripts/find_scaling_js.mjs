import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // Find all js script tags
    const scriptSrcs = data.match(/src=\"(\/_next\/static\/chunks\/[^\"]+\.js)\"/g) || [];
    console.log(`Found ${scriptSrcs.length} script chunks`);
    for (const src of scriptSrcs) {
      const url = 'https://cinelove.me' + src.slice(5, -1);
      https.get(url, cres => {
        let js = '';
        cres.on('data', c => js += c);
        cres.on('end', () => {
          if (js.includes('root-page-container') || js.includes('scale(') && js.includes('500')) {
            const idx = js.indexOf('root-page-container');
            if (idx !== -1) {
              console.log('Match in script:', url, js.slice(Math.max(0, idx - 100), idx + 200));
            }
          }
        });
      });
    }
  });
});
