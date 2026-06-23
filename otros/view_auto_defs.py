import json
import os

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(script_dir, "..", "assets", "data.js")
    if not os.path.exists(filepath):
        print(f"data.js not found at {filepath}")
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
    
    output_report_path = os.path.join(script_dir, "audit_results.txt")
    with open(output_report_path, "w", encoding="utf-8") as f:
        f.write("\n".join(output))
    print(f"Done. Wrote {output_report_path}")

if __name__ == '__main__':
    main()
