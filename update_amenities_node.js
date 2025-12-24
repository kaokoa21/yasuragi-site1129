
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'page.tsx');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    const target = "トイレ・浴室・洗面：2ヶ所";
    const replacement = "トイレ・浴室：2ヶ所";

    if (content.includes(target)) {
        const newContent = content.split(target).join(replacement);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log("Successfully updated amenities.");
    } else {
        console.log("Target string not found.");
    }

} catch (err) {
    console.error("Error:", err);
    process.exit(1);
}
