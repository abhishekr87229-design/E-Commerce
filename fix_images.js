const fs = require('fs');
let content = fs.readFileSync('src/context/ProductContext.jsx', 'utf8');
content = content.replace(/image: 'https:\/\/images\.unsplash\.com[^']+'/g, (match, offset) => {
    const lines = content.substring(0, offset).split('\n');
    const line = lines[lines.length -1];
    const m = line.match(/id: (\d+)/);
    const id = m ? m[1] : '';
    return `image: 'https://placehold.co/400x500/e0e0e0/333333?text=Product+${id}'`;
});
fs.writeFileSync('src/context/ProductContext.jsx', content);
