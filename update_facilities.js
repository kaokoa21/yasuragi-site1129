
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'page.tsx');

try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split(/\r?\n/);
    let newLines = [];

    let inSanbancho = false;
    let inShikichi = false;

    const newListContent = [
        '                    <li>全室鍵付き個室</li>',
        '                    <li>エアコン・ベッド・布団一式完備</li>',
        '                    <li>トイレ・浴室・洗面：2ヶ所</li>',
        '                    <li>冷蔵庫・洗濯機・レンジ：各2台</li>',
        '                    <li>Wi-Fi完備</li>'
    ];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Detect section
        if (line.includes('id="sanbancho-detail"')) {
            inSanbancho = true;
            inShikichi = false;
        } else if (line.includes('id="shikiji-detail"')) {
            inShikichi = true;
            inSanbancho = false;
        }

        // Detect UL
        if ((inSanbancho || inShikichi) && line.includes('<ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">')) {
            newLines.push(line);
            i++; // Move to next line (content)

            // Skip until </ul>
            while (i < lines.length && !lines[i].includes('</ul>')) {
                i++;
            }

            // Insert new content
            newListContent.forEach(l => newLines.push(l));

            // Add the closing tag (current lines[i] is </ul>)
            if (i < lines.length) {
                newLines.push(lines[i]);
            }

            // Reset flags
            if (inSanbancho) inSanbancho = false;
            if (inShikichi) inShikichi = false;

        } else {
            newLines.push(line);
        }
    }

    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    console.log("Successfully updated facilities with Node.js");

} catch (err) {
    console.error("Error:", err);
    process.exit(1);
}
