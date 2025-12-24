
import os

def update_amenities():
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
    
    target_string = "トイレ・浴室・洗面：2ヶ所"
    replacement_string = "トイレ・浴室：2ヶ所"
    
    count = 0
    for line in lines:
        if target_string in line:
            new_line = line.replace(target_string, replacement_string)
            new_lines.append(new_line)
            count += 1
        else:
            new_lines.append(line)

    if count > 0:
        with open(file_path, 'w', encoding=encoding) as f:
            f.writelines(new_lines)
        print(f"Successfully replaced {count} instances.")
    else:
        print("No instances found to replace.")

if __name__ == "__main__":
    update_amenities()
