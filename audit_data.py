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
    
    print("--- CONCEPTS AUDIT ---")
    no_def_count = 0
    short_def_count = 0
    duplicate_defs = {}
    
    for s in data:
        print(f"Section {s['sectionId']}: {s['sectionTitle']}")
        for c in s['concepts']:
            name = c['name']
            definition = c.get('definition', '')
            analogy = c.get('analogy', '')
            
            # Check if definition is empty
            if not definition:
                print(f"  [MISSING DEF] Concept: {name}")
                no_def_count += 1
                continue
                
            # Check if definition is very short
            if len(definition) < 15:
                print(f"  [SHORT DEF] Concept: {name} -> {definition}")
                short_def_count += 1
                
            # Track duplicates to see if definitions are shared (mixed up)
            norm_def = definition.strip().lower()
            if norm_def in duplicate_defs:
                duplicate_defs[norm_def].append((s['sectionId'], name))
            else:
                duplicate_defs[norm_def] = [(s['sectionId'], name)]
                
    print("\n--- DUPLICATE DEFINITIONS (POSSIBLE MIX-UPS) ---")
    dup_count = 0
    for d, occurrences in duplicate_defs.items():
        if len(occurrences) > 1:
            print(f"Definition: \"{d[:60]}...\" is shared by:")
            for occ in occurrences:
                print(f"  - Section {occ[0]}: {occ[1]}")
            dup_count += 1
            
    print(f"\nSummary:")
    print(f"Missing definitions: {no_def_count}")
    print(f"Short definitions: {short_def_count}")
    print(f"Duplicate definitions: {dup_count}")

if __name__ == '__main__':
    main()
