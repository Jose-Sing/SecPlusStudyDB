import json
import os
import re

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    questions_path = os.path.join(script_dir, "..", "assets", "questions.js")
    new_questions_dir = os.path.join(script_dir, "..", "scratch", "new_questions")

    if not os.path.exists(questions_path):
        print(f"Error: questions.js not found at {questions_path}")
        return

    # 1. Read existing questions.js
    with open(questions_path, 'r', encoding='utf-8') as f:
        content = f.read().strip()

    # Extract JSON array
    match = re.search(r'const EXAM_QUESTIONS\s*=\s*(\[.*\])\s*;?', content, re.DOTALL)
    if not match:
        print("Error: Could not parse EXAM_QUESTIONS array from questions.js")
        return

    try:
        existing_questions = json.loads(match.group(1))
    except json.JSONDecodeError as e:
        print(f"Error: JSON decode failed: {e}")
        return

    print(f"Successfully loaded {len(existing_questions)} questions from questions.js.")

    # 2. Revert any additions beyond ID 1020 to ensure clean slate
    clean_questions = [q for q in existing_questions if q.get("id", 0) <= 1020]
    reverted_count = len(existing_questions) - len(clean_questions)
    if reverted_count > 0:
        print(f"Reverted {reverted_count} duplicate/unsupported questions. Database restored to ID 1020.")
    
    # Starting ID for new questions
    next_id = 1021

    # 3. Read and merge S16 through S22 questions from JSON files
    sections = ["S16", "S17", "S18", "S19", "S20", "S21", "S22"]
    merged_count = 0

    if not os.path.exists(new_questions_dir):
        print(f"Note: new_questions directory not found at {new_questions_dir}. Creating it.")
        os.makedirs(new_questions_dir, exist_ok=True)

    for section in sections:
        section_file = os.path.join(new_questions_dir, f"{section}.json")
        if not os.path.exists(section_file):
            print(f"Warning: {section}.json not found. Skipping.")
            continue

        with open(section_file, 'r', encoding='utf-8') as f:
            try:
                sec_questions = json.load(f)
            except json.JSONDecodeError as e:
                print(f"Error: JSON decode failed for {section}.json: {e}")
                continue

        print(f"Loading {len(sec_questions)} questions from {section}.json...")

        for q in sec_questions:
            # Validate required fields
            required = ["section", "question", "options", "answer", "explanation"]
            if not all(k in q for k in required):
                print(f"Error: Question is missing required keys in {section}.json: {q}")
                continue

            # Ensure answer and correctAnswer are synchronized
            q["id"] = next_id
            q["correctAnswer"] = q["answer"]
            
            clean_questions.append(q)
            next_id += 1
            merged_count += 1

    print(f"Merged {merged_count} new questions. Total questions in database: {len(clean_questions)}")

    # 4. Format and save back as questions.js
    formatted_js = f"const EXAM_QUESTIONS = {json.dumps(clean_questions, indent=2, ensure_ascii=False)};"
    with open(questions_path, 'w', encoding='utf-8') as f:
        f.write(formatted_js)

    print("Successfully updated questions.js")

if __name__ == '__main__':
    main()
