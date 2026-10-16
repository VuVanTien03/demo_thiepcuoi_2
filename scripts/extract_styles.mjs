import fs from 'fs';

const content = fs.readFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\.system_generated\\steps\\7\\content.md', 'utf8');

const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
let styles = '';
let match;
while ((match = styleRegex.exec(content)) !== null) {
  styles += '\n/* --- STYLE BLOCK --- */\n' + match[1];
}

fs.writeFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\scratch\\cinelove_styles.css', styles);
console.log("Extracted styles length:", styles.length);

// Also extract font families referenced in styles
const fontMatches = styles.match(/font-family:[^;]+/g);
console.log("Fonts referenced:", Array.from(new Set(fontMatches || [])));
