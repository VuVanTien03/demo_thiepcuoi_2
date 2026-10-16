import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const styleMatches = data.match(/<style[^>]*id=\"__jsx-[\s\S]*?<\/style>/g) || [];
    for (const s of styleMatches) {
      if (s.includes('animation-gift-preview-btn') || s.includes('2074202128')) {
        console.log('--- Found style tag: ---');
        console.log(s);
      }
    }
  });
});
