import fs from 'fs';

const f1 = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/cinelove_styles.css', 'utf8');

const matches = [...f1.matchAll(/([^{}]*3557960200[^{}]*\{[^}]+\})/g)].map(m => m[0]);
console.log('Total rules for jsx-3557960200:', matches.length);
matches.forEach(m => console.log(m));
