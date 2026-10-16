import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // Find scripts
    const scriptSrcs = data.match(/\/(_next\/static\/chunks\/[^\"]+\.js)/g) || [];
    console.log(`Found ${scriptSrcs.length} chunks`);
    for (const src of scriptSrcs) {
      https.get('https://cinelove.me' + src, cres => {
        let js = '';
        cres.on('data', c => js += c);
        cres.on('end', () => {
          if (js.includes('blessing-message') || js.includes('blessing-box')) {
            console.log('Found in', src);
            const idx = js.indexOf('blessing-message');
            console.log(js.slice(Math.max(0, idx - 200), idx + 400));
          }
        });
      });
    }
  });
});
