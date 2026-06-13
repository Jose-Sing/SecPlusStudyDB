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
    for line in raw_lines:
        s = line.strip()
        if not s:
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

    # 3. First ### sub-heading
    for line in raw_lines:
        s = line.strip()
        if s.startswith('### '):
            return strip_md_inline(s[4:])

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

    concepts = []
    current_concept = None
    collecting_table = False
    table_lines = []
    in_code_block = False

    for line in lines:
        # Skip bare horizontal rules
        if re.match(r'^-{3,}$', line.strip()):
            continue

        # Track code blocks so we don't misparse their contents
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            if current_concept is not None:
                current_concept['raw_lines'].append(line)
            continue

        # New ## concept heading
        if line.startswith('## ') and not in_code_block:
            if current_concept and table_lines:
                current_concept['tables'].append(parse_table(table_lines))
                table_lines = []
            collecting_table = False

            concept_name = line.replace('## ', '').strip()
            # Strip leading "N. " numbering and leading emoji/symbols
            concept_name = re.sub(r'^\d+\.\s*', '', concept_name).strip()
            concept_name = re.sub(r'^[^\w(]+', '', concept_name).strip()

            # Skip structural headings that are not real study concepts
            skip = ["Study Summary", "Section", "Table of Contents",
                    "Quick Reference", "Cheatsheet", "My Notes"]
            if any(t in concept_name for t in skip):
                continue

            current_concept = {
                "name": concept_name,
                "definition": "",
                "analogy": "",
                "tables": [],
                "raw_lines": [],
                "list_items": [],
                "spanish_words": []
            }
            concepts.append(current_concept)
            continue

        if current_concept is None:
            continue

        current_concept['raw_lines'].append(line)

        if in_code_block:
            continue

        # Explicit definition (format used by S2-S7)
        def_match = re.match(r'^\*\s+\*\*Definition:\*\*\s*(.*)', line)
        if def_match:
            current_concept['definition'] = def_match.group(1).strip()
            continue

        # Analogy / blockquote — keep only first occurrence per concept
        analogy_match = re.match(r'^>\s*(.*)', line)
        if analogy_match and not current_concept['analogy']:
            current_concept['analogy'] = analogy_match.group(1).strip()

        # Table rows
        if line.strip().startswith('|'):
            collecting_table = True
            table_lines.append(line)
        else:
            if collecting_table:
                current_concept['tables'].append(parse_table(table_lines))
                table_lines = []
                collecting_table = False

            # List items: both * and - styles
            list_match = re.match(r'^[\*\-]\s+(.*)', line)
            if list_match and not line.startswith('* **Definition:**'):
                current_concept['list_items'].append(list_match.group(1).strip())

    # Save last running table
    if current_concept and table_lines:
        current_concept['tables'].append(parse_table(table_lines))

    # Auto-definition fallback for concepts that don't have an explicit Definition line
    for c in concepts:
        if not c['definition']:
            c['definition'] = extract_auto_definition(c['raw_lines'], c['tables'])

    # Finalize: build raw_content string, remove raw_lines list
    for c in concepts:
        c['raw_content'] = '\n'.join(c['raw_lines']).strip()
        del c['raw_lines']

    return {
        "sectionId": f"S{section_num}",
        "sectionTitle": f"Section {section_num}: {section_name}",
        "concepts": concepts
    }

def main():
    directory = os.path.dirname(os.path.abspath(__file__))
    files = [f for f in os.listdir(directory) if re.match(r'^S\d+_[a-zA-Z0-9_ -]+\.md$', f)]
    # Sort files numerically by section number to avoid 'S10' coming before 'S2'
    files.sort(key=lambda x: int(re.match(r'^S(\d+)_', x).group(1)))

    parsed_sections = []
    for filename in files:
        filepath = os.path.join(directory, filename)
        print(f"Parsing {filename}...")
        parsed_sections.append(parse_file(filepath))

    js_content = f"const STUDY_DATA = {json.dumps(parsed_sections, indent=2, ensure_ascii=False)};"
    output_path = os.path.join(directory, "data.js")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Successfully generated data.js at {output_path}")

if __name__ == "__main__":
    main()
