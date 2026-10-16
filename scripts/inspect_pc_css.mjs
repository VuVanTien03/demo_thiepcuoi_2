import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Search for jsx-3147566159 and style tags
    const styleMatches = data.match(/<style[^>]*id="__jsx-[\s\S]*?<\/style>/g) || [];
    console.log(`Found ${styleMatches.length} jsx style tags`);
    for (const st of styleMatches) {
      if (st.includes('pc-container') || st.includes('pc-content') || st.includes('3147566159')) {
        console.log('--- Matching style tag: ---');
        console.log(st);
      }
    }

    // Also look for QR code widget and desktop wrapper elements
    const qrMatch = data.match(/<div[^>]*class=\"[^\"]*\"[^>]*>[\s\S]{0,200}Quét mã QR[\s\S]{0,500}<\/div>/i);
    if (qrMatch) {
      console.log('--- QR widget found: ---', qrMatch[0].slice(0, 300));
    }
  });
});
