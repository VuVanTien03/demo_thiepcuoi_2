import https from 'https';

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

async function main() {
  const html = await fetchText('https://cinelove.me/template/thiep-cuoi-28');
  
  // Search inline styles
  const inlineStyles = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  console.log(`Checking ${inlineStyles.length} inline styles...`);
  for (const s of inlineStyles) {
    if (s.includes('pc-content') || s.includes('pc-container')) {
      const ms = s.match(/[^{}]*pc-content[^{}]*\{[^}]*\}/g) || [];
      console.log('Inline match:', ms);
    }
  }

  // Search CSS files
  const cssLinks = [...new Set(html.match(/\/(_next\/static\/css\/[^\"]+\.css)/g) || [])];
  console.log('Unique CSS links:', cssLinks);
  for (const link of cssLinks) {
    const css = await fetchText('https://cinelove.me' + link);
    if (css.includes('pc-content') || css.includes('pc-container')) {
      const ms = css.match(/[^{}]*pc-content[^{}]*\{[^}]*\}/g) || [];
      console.log('CSS file match from', link, ms);
    }
  }
}

main();
