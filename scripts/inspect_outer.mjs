import https from 'https';

https.get('https://cinelove.me/template/thiep-cuoi-28', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const nextIdx = data.indexOf('<div id="__next">');
    const rtIdx = data.indexOf('data-node-id="Rt6oRNzg5p"');
    console.log('Structure between __next and canvas:');
    console.log(data.slice(nextIdx, rtIdx));

    // Also let's check what comes after the last data-node-id
    const lastNodeIdx = data.lastIndexOf('data-node-id=');
    console.log('\nStructure after last data-node-id:');
    console.log(data.slice(lastNodeIdx, lastNodeIdx + 1500));
  });
});
