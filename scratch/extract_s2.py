import json
import re
import os

filepath = r"c:\Users\LENOVO\.gemini\antigravity\scratch\SecPlusStudyDB\assets\questions.js"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("const EXAM_QUESTIONS = ", "").strip()
if content.endswith(";"):
    content = content[:-1]

try:
    questions = json.loads(content)
    s2_questions = [q for q in questions if q.get("section") == "S2"]
    
    out_path = r"c:\Users\LENOVO\.gemini\antigravity\scratch\SecPlusStudyDB\scratch\s2_questions.json"
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(s2_questions, f, indent=2)
    print(f"Extracted {len(s2_questions)} questions for S2")
except Exception as e:
    print(f"Error parsing JSON: {e}")
