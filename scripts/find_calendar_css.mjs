import fs from 'fs';

const f1 = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/cinelove_styles.css', 'utf8');
const f2 = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/cinelove_ext1.css', 'utf8');
const all = f1 + f2;

const matches = [...all.matchAll(/([^{}]*(?:template-three|calendar)[^{}]*\{[^}]+\})/g)].map(m => m[0]);
console.log('Total calendar rules:', matches.length);
matches.forEach(m => console.log(m));
