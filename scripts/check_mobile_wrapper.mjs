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
    const jsonEnd = data.indexOf('</script>', data.indexOf('ld+json'));
    const rtIdx = data.indexOf('data-node-id="Rt6oRNzg5p"');
    console.log('Mobile structure before canvas:');
    console.log(data.slice(jsonEnd + 9, rtIdx));
  });
});
