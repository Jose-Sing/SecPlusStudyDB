import json
import os

def main():
    filepath = "data.js"
    if not os.path.exists(filepath):
        print("data.js not found")
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read().strip()
        
    if content.startswith('const STUDY_DATA ='):
        content = content[len('const STUDY_DATA ='):].strip()
    if content.endswith(';'):
        content = content[:-1].strip()
        
    data = json.loads(content)
    
    output = []
    output.append("--- AUTO-EXTRACTED DEFINITIONS ---")
    auto_count = 0
    for s in data:
        for c in s['concepts']:
            name = c['name']
            definition = c.get('definition', '')
            
            section_num = int(s['sectionId'][1:])
            if section_num >= 8:
                output.append(f"[{s['sectionId']}] Concept: \"{name}\"")
                output.append(f"      Def: \"{definition}\"")
                auto_count += 1
                
    output.append(f"\nTotal shown auto/normal definitions: {auto_count}")
    
    with open("audit_results.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(output))
    print("Done. Wrote audit_results.txt")

if __name__ == '__main__':
    main()
