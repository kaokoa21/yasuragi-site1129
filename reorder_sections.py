
import os

file_path = r"c:\Users\owner\Downloads\やすらぎの家readdyコード\app\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

greeting_idx = -1
block_start_idx = -1
recruit_idx = -1

for i, line in enumerate(lines):
    if "{/* ごあいさつ */}" in line:
        greeting_idx = i
    elif "{/* 施設紹介ヘッダー */}" in line:
        block_start_idx = i
    elif "{/* 採用情報 */}" in line:
        recruit_idx = i

if greeting_idx == -1 or block_start_idx == -1 or recruit_idx == -1:
    print(f"Error: Could not find all markers. Greeting: {greeting_idx}, Block: {block_start_idx}, Recruit: {recruit_idx}")
    exit(1)

print(f"Markers found: Greeting={greeting_idx}, BlockStart={block_start_idx}, Recruit={recruit_idx}")

# Construct new content
# 1. Everything before Greeting
part1 = lines[:greeting_idx]
# 2. Facility Block (From Intro to just before Recruit)
# Note: recruit_idx puts it at the line "{/* 採用情報 */}". We want all lines before that.
# Assuming formatting: empty lines might be captured in the slice.
part2_block = lines[block_start_idx:recruit_idx]
# 3. Middle (From Greeting to just before Facility Intro)
part3_middle = lines[greeting_idx:block_start_idx]
# 4. Rest (From Recruit to end)
part4 = lines[recruit_idx:]

new_lines = part1 + part2_block + part3_middle + part4

with open(file_path, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print("Successfully reordered sections.")
