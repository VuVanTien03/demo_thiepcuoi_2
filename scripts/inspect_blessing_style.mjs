import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // Find blessing-box in style tags
    const styleMatches = data.match(/<style[^>]*id=\"__jsx-[\s\S]*?<\/style>/g) || [];
    for (const s of styleMatches) {
      if (s.includes('blessing-box') || s.includes('blessing-message') || s.includes('3895218497')) {
        console.log('--- Found blessing style: ---');
        console.log(s);
      }
    }
  });
});
