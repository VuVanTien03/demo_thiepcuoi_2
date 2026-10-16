import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const qrIdx = data.indexOf('Quét mã QR');
    if (qrIdx !== -1) {
      console.log('QR widget snippet:');
      console.log(data.slice(qrIdx - 300, qrIdx + 400));
    } else {
      console.log('Quét mã QR not found in raw html (maybe injected by script)');
    }
  });
});
