import os
import re
import json

def parse_table(lines):
    headers = []
    rows = []
    for line in lines:
        if not line.strip() or '|' not in line:
            continue
        cols = [c.strip() for c in line.split('|')[1:-1]]
        if not headers:
            headers = cols
        elif all(re.match(r'^[-:]+$', c) for c in cols):
            continue
        else:
            rows.append(cols)
    return {"headers": headers, "rows": rows}

def strip_md_inline(text):
    """Strip bold/italic/code markers to get plain text."""
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    text = re.sub(r'\*([^*]+)\*', r'\1', text)
    text = re.sub(r'`([^`]+)`', r'\1', text)
    # Remove leading emoji/symbol chars
    text = re.sub(r'^[⚠️💡📚✅❌🔮\s]+', '', text)
    return text.strip()

def extract_auto_definition(raw_lines, tables):
    """
    Called only when no explicit '* **Definition:**' line was found.
    Tries in order:
      1. First plain paragraph (not a heading, quote, list, table, or code fence)
      2. First table: name + richest column
      3. First ### sub-heading text
    """
    # 1. First plain paragraph
    in_code_block = False
    for line in raw_lines:
        s = line.strip()
        if not s:
            continue
        if s.startswith('```'):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        if s.startswith(('#', '>', '-', '|', '`')) or (s.startswith('*') and not s.startswith('**')):
            continue
        plain = strip_md_inline(s)
        if len(plain) > 20:
            return plain

    # 2. First table row
    if tables and tables[0]['rows']:
        row = tables[0]['rows'][0]
        if len(row) >= 4:
            # e.g. Tool | Full Name | Analogy | Primary Use  → name + last col
            name = strip_md_inline(row[0])
            desc = strip_md_inline(row[-1])
            if len(desc) > 20:
                return f"{name}: {desc}"
        if len(row) >= 2:
            name = strip_md_inline(row[0])
            desc = strip_md_inline(row[1])
            if len(desc) > 10:
                return f"{name}: {desc}"

    # 3. First ### or #### sub-heading
    for line in raw_lines:
        s = line.strip()
        if s.startswith('### '):
            return strip_md_inline(s[4:])
        elif s.startswith('#### '):
            return strip_md_inline(s[5:])

    return ""

def parse_file(filepath):
    filename = os.path.basename(filepath)
    section_match = re.search(r'S(\d+)_(.*)\.md', filename)
    if section_match:
        section_num = int(section_match.group(1))
        section_name = section_match.group(2).replace('_', ' ')
    else:
        section_num = 0
        section_name = "Unknown Section"

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')

    # Step 1: Identify all heading indices and levels (not in code blocks)
    headings = []
    in_code_block = False
    for idx, line in enumerate(lines):
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        m = re.match(r'^(#{2,6})\s+(.*)', line)
        if m:
            level = len(m.group(1))
            name = m.group(2).strip()
            headings.append({
                "line_idx": idx,
                "level": level,
                "name": name
            })

    # Step 2: Slice the lines into heading blocks
    blocks = []
    for i in range(len(headings)):
        start = headings[i]["line_idx"]
        end = headings[i+1]["line_idx"] if i + 1 < len(headings) else len(lines)
        block_lines = lines[start:end]
        blocks.append({
            "level": headings[i]["level"],
            "name": headings[i]["name"],
            "lines": block_lines
        })

    # Step 3: Classify blocks as concepts or merge them
    concepts = []
    flashcards = []
    skip = ["Study Summary", "Section", "Table of Contents",
            "Quick Reference", "Cheatsheet", "My Notes"]
    
    no_flashcard = ["Key Terms", "Glossary"]

    for block in blocks:
        name = block["name"]
        # Clean concept name: strip numbers and emojis
        clean_name = re.sub(r'^\d+\.\s*', '', name).strip()
        clean_name = re.sub(r'^[^\w(]+', '', clean_name).strip()

        if any(t in name for t in skip):
            continue

        # Check if this block has an explicit definition
        has_explicit_def = False
        definition_text = ""
        for line in block["lines"]:
            def_match = re.match(r'^\*\s+\*\*Definition:\*\*\s*(.*)', line.strip())
            if def_match:
                has_explicit_def = True
                definition_text = def_match.group(1).strip()
                break

        analogy_text = ""
        for line in block["lines"]:
            analogy_match = re.match(r'^>\s*(.*)', line.strip())
            if analogy_match:
                analogy_text = analogy_match.group(1).strip()
                break

        is_concept = (block["level"] == 2)
        is_flashcard = (is_concept or has_explicit_def) and not any(t in name for t in no_flashcard)

        if is_flashcard:
            flashcards.append({
                "name": clean_name,
                "definition": definition_text,
                "analogy": analogy_text,
                "raw_content": "\n".join(list(block["lines"])[1:]).strip()
            })

        if is_concept:
            concept = {
                "name": clean_name,
                "level": block["level"],
                "definition": definition_text,
                "analogy": analogy_text,
                "tables": [],
                "list_items": [],
                "raw_lines": list(block["lines"])[1:]  # Skip the heading line to prevent duplicate title in index
            }
            concepts.append(concept)
        else:
            # Find the closest parent/ancestor concept in the hierarchy
            target_concept = None
            for c in reversed(concepts):
                if c["level"] < block["level"]:
                    target_concept = c
                    break
            if target_concept is None and concepts:
                target_concept = concepts[-1]
            
            if target_concept:
                target_concept["raw_lines"].extend(block["lines"])

    # Step 4: Parse elements within each concept
    for c in concepts:
        table_lines = []
        collecting_table = False
        in_code_block = False
        
        for line in c["raw_lines"]:
            if re.match(r'^-{3,}$', line.strip()):
                continue

            if line.strip().startswith('```'):
                in_code_block = not in_code_block
                continue

            if in_code_block:
                continue

            if not c["definition"]:
                def_match = re.match(r'^\*\s+\*\*Definition:\*\*\s*(.*)', line.strip())
                if def_match:
                    c["definition"] = def_match.group(1).strip()
                    continue

            analogy_match = re.match(r'^>\s*(.*)', line.strip())
            if analogy_match and not c["analogy"]:
                c["analogy"] = analogy_match.group(1).strip()

            if line.strip().startswith('|'):
                collecting_table = True
                table_lines.append(line)
            else:
                if collecting_table:
                    c["tables"].append(parse_table(table_lines))
                    table_lines = []
                    collecting_table = False

                list_match = re.match(r'^[\*\-]\s+(.*)', line.strip())
                if list_match and not line.strip().startswith('* **Definition:**'):
                    c["list_items"].append(list_match.group(1).strip())

        if table_lines:
            c["tables"].append(parse_table(table_lines))

        if not c["definition"]:
            c["definition"] = extract_auto_definition(c["raw_lines"], c["tables"])

        c["raw_content"] = "\n".join(c["raw_lines"]).strip()
        del c["raw_lines"]
        if "level" in c:
            del c["level"]

    return {
        "sectionId": f"S{section_num}",
        "sectionTitle": f"Section {section_num}: {section_name}",
        "concepts": concepts,
        "flashcards": flashcards
    }

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    summaries_dir = os.path.join(script_dir, "..", "summaries")
    
    if not os.path.exists(summaries_dir):
        print(f"Summaries directory not found at {summaries_dir}")
        return
        
    files = [f for f in os.listdir(summaries_dir) if re.match(r'^S\d+_[a-zA-Z0-9_ -]+\.md$', f)]
    # Sort files numerically by section number to avoid 'S10' coming before 'S2'
    files.sort(key=lambda x: int(re.match(r'^S(\d+)_', x).group(1)))

    parsed_sections = []
    for filename in files:
        filepath = os.path.join(summaries_dir, filename)
        print(f"Parsing {filename}...")
        parsed_sections.append(parse_file(filepath))

    js_content = f"const STUDY_DATA = {json.dumps(parsed_sections, indent=2, ensure_ascii=False)};"
    output_path = os.path.join(script_dir, "..", "assets", "data.js")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Successfully generated data.js at {output_path}")

if __name__ == "__main__":
    main()
