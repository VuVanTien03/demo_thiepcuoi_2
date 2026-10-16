import fs from 'fs';

const raw = JSON.parse(fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_raw.json', 'utf8'));

const node = raw.find(n => n.id === '6dh7_FKkgk');
console.log('Node 6dh7_FKkgk raw:', JSON.stringify(node, null, 2));

const node2 = raw.find(n => n.id === '-0fcPLazdz');
console.log('Node -0fcPLazdz raw:', JSON.stringify(node2, null, 2));

const node3 = raw.find(n => n.id === 'gjDbaemHrj');
console.log('Node gjDbaemHrj raw:', JSON.stringify(node3, null, 2));
