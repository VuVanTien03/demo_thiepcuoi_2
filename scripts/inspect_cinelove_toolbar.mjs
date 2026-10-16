import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const tIdx = data.indexOf('id="cinelove-toolbar"');
    if (tIdx !== -1) {
      console.log('Toolbar HTML:');
      console.log(data.slice(tIdx, tIdx + 1200));
    }
  });
});
