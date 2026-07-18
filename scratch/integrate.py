import json
import os
import glob

# Paths
input_dir = r"c:\Users\LENOVO\.gemini\antigravity\scratch\SecPlusStudyDB\scratch\new_questions"
output_file = r"c:\Users\LENOVO\.gemini\antigravity\scratch\SecPlusStudyDB\assets\questions.js"

# Find all generated json files
files = glob.glob(os.path.join(input_dir, "*generated*.json"))

# Sort files to try and maintain S2, S3, S4... order
def sort_key(filepath):
    basename = os.path.basename(filepath)
    # Extracts the first number found (e.g. 2 from S2_generated or S2_S3_generated)
    num = ''.join(filter(str.isdigit, basename.split('_')[0]))
    return int(num) if num else 0

files.sort(key=sort_key)

all_questions = []
current_id = 1

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        print(f"{os.path.basename(file_path)}: {len(data)} questions")
        for item in data:
            # Map fields to required format
            formatted_item = {
                "id": current_id,
                "section": item["section"],
                "question": item["question"],
                "options": item["options"],
                "answer": item["correctAnswer"],
                "explanation": item["explanation"]
            }
            all_questions.append(formatted_item)
            current_id += 1

print(f"Total questions integrated: {len(all_questions)}")

# Write to questions.js
js_content = "const EXAM_QUESTIONS = " + json.dumps(all_questions, indent=2, ensure_ascii=False) + ";\n"
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully wrote {output_file}")
