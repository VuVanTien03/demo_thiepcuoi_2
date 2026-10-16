import fs from 'fs';

let html = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_pristine_canvas.html', 'utf8');

console.log('Before normalize contains "Yê":', html.includes('Yê'));
html = html.normalize('NFC');
console.log('After normalize contains "Yến":', html.includes('Yến'));
console.log('After normalize contains "đầy":', html.includes('đầy'));
console.log('After normalize contains "Miếu":', html.includes('Miếu'));

// Also check if there are any remaining combining acute (0x0301) or grave (0x0300) or horn/circumflex
const combiningRegex = /[\u0300-\u036f]/g;
const matches = [...html.matchAll(combiningRegex)];
console.log('Remaining combining marks:', matches.length);
