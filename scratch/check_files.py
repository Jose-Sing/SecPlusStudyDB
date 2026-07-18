import os
import glob

d = r"c:\Users\LENOVO\.gemini\antigravity\scratch\SecPlusStudyDB\scratch\new_questions"
files = glob.glob(os.path.join(d, "*.json"))
files = [os.path.basename(f) for f in files]
print("Files:", sorted(files))
