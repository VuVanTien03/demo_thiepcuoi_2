import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // Find zoom or scale or root-page-container in style tags
    const styleMatches = data.match(/<style[^>]*id=\"__jsx-[\s\S]*?<\/style>/g) || [];
    for (const s of styleMatches) {
      if (s.includes('root-page-container') || s.includes('app-view-index') || s.includes('mobile-view')) {
        console.log('--- Found style tag: ---');
        console.log(s);
      }
    }
  });
});
