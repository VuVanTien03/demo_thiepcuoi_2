import https from 'https';

const options = {
  hostname: 'cinelove.me',
  path: '/template/thiep-cuoi-28',
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    console.log('Mobile response length:', data.length);
    console.log('Includes pc-container?', data.includes('pc-container'));
    // If not pc-container, what does it have?
    const nextIdx = data.indexOf('<div id="__next">');
    console.log(data.slice(nextIdx, nextIdx + 600));
  });
});
