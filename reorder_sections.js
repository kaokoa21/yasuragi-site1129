
const fs = require('fs');
const path = 'app/page.tsx';

try {
    const content = fs.readFileSync(path, 'utf8');
    // Detect line ending
    const isCRLF = content.includes('\r\n');
    const splitChar = isCRLF ? '\r\n' : '\n';

    const lines = content.split(splitChar);

    let greetingIdx = -1;
    let blockStartIdx = -1;
    let recruitIdx = -1;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("{/* ごあいさつ */}")) greetingIdx = i;
        if (lines[i].includes("{/* 施設紹介ヘッダー */}")) blockStartIdx = i;
        if (lines[i].includes("{/* 採用情報 */}")) recruitIdx = i;
    }

    if (greetingIdx === -1 || blockStartIdx === -1 || recruitIdx === -1) {
        console.error(`Markers not found: Greeting=${greetingIdx}, Block=${blockStartIdx}, Recruit=${recruitIdx}`);
        // Fallback search
        console.log("Dumping first 10 lines containing identifiers:");
        lines.forEach((l, i) => {
            if (l.includes('{/*')) console.log(`${i}: ${l}`);
        });
        process.exit(1);
    }

    console.log(`Indices: Greeting=${greetingIdx}, BlockStart=${blockStartIdx}, Recruit=${recruitIdx}`);

    const part1 = lines.slice(0, greetingIdx);
    const block = lines.slice(blockStartIdx, recruitIdx);
    const middle = lines.slice(greetingIdx, blockStartIdx);
    const part4 = lines.slice(recruitIdx);

    const newLines = [...part1, ...block, ...middle, ...part4];
    const newContent = newLines.join(splitChar);

    fs.writeFileSync(path, newContent, 'utf8');
    console.log("Successfully reordered sections.");

} catch (e) {
    console.error(e);
    process.exit(1);
}
