
import os
import re

def update_file():
    file_path = 'app/page.tsx'
    
    # Read file
    content = ""
    encoding = 'utf-8'
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open(file_path, 'r', encoding='utf-8-sig') as f:
            content = f.read()
            encoding = 'utf-8-sig'

    lines = content.splitlines(keepends=True)
    new_lines = []
    
    i = 0
    in_sanbancho = False
    in_shikichi = False
    
    # New content lists
    new_list_content = [
        '                    <li>全室鍵付き個室</li>\n',
        '                    <li>エアコン・ベッド・布団一式完備</li>\n',
        '                    <li>トイレ・浴室・洗面：2ヶ所</li>\n',
        '                    <li>冷蔵庫・洗濯機・レンジ：各2台</li>\n',
        '                    <li>Wi-Fi完備</li>\n'
    ]

    while i < len(lines):
        line = lines[i]
        
        # Detect sections
        if 'id="sanbancho-detail"' in line:
            in_sanbancho = True
            in_shikichi = False
        elif 'id="shikiji-detail"' in line:
            in_shikichi = True
            in_sanbancho = False
            
        # Check for facility list start
        # <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
        if (in_sanbancho or in_shikichi) and '<ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">' in line:
            # Check if this is the "Main Facilities" list (detected by context of previous header?)
            # The structure is specific enough. 
            # We need to make sure we are not editing Oshika or Nakata (which are not flagged).
            # But we only set flags for sanbancho/shikichi.
            
            # Write the UL start tag
            new_lines.append(line)
            i += 1
            
            # Skip until </ul>
            while i < len(lines) and '</ul>' not in lines[i]:
                i += 1
            
            # Insert new content
            new_lines.extend(new_list_content)
            
            # Write the closing tag (current line)
            if i < len(lines):
                new_lines.append(lines[i])
            i += 1
            
            # Reset flags to prevent double replacement if nested (unlikely) or just safety
            if in_sanbancho: in_sanbancho = False
            if in_shikichi: in_shikichi = False
            
        else:
            new_lines.append(line)
            i += 1

    # Write back
    with open(file_path, 'w', encoding=encoding) as f:
        f.writelines(new_lines)
    print("Successfully updated facilities.")

if __name__ == "__main__":
    update_file()
