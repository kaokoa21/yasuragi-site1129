
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'page.tsx');

try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split(/\r?\n/);

    console.log("Found lines:");
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('小鹿')) {
            console.log(`${i + 1}: ${lines[i].trim()}`);
        }
    }

} catch (err) {
    console.error("Error:", err);
}
