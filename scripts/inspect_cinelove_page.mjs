import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const bodyTag = data.match(/<body[^>]*>/i)?.[0];
    console.log('Body tag:', bodyTag);

    // Let's find the main container hierarchy
    const mainWrapper = data.match(/<div id="__next">([\s\S]*?)<\/div>/i)?.[0];
    console.log('__next exists:', !!mainWrapper);

    // Let's print the outer structure
    const lines = data.split('\n');
    for (let i = 0; i < Math.min(lines.length, 120); i++) {
      if (lines[i].includes('class=') || lines[i].includes('id=')) {
        console.log(`L${i}:`, lines[i].slice(0, 140));
      }
    }
  });
}).on('error', err => {
  console.error(err);
});
