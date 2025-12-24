
import os
try:
    with open('debug_output.txt', 'w', encoding='utf-8') as out:
        if os.path.exists('app/page.tsx'):
            out.write("File exists\n")
            try:
                with open('app/page.tsx', 'rb') as f:
                    content = f.read()
                    out.write(f"Read {len(content)} bytes\n")
                    # Try to decode
                    try:
                        text = content.decode('utf-8')
                        lines = text.splitlines(keepends=True)
                        for i, line in enumerate(lines):
                            if 570 <= i+1 <= 580:
                                out.write(f"{i+1}: {repr(line)}\n")
                    except Exception as e:
                        out.write(f"Decode failed: {e}\n")
            except Exception as e:
                out.write(f"Read failed: {e}\n")
        else:
            out.write("File not found\n")
except Exception as e:
    print(f"Outer error: {e}")
