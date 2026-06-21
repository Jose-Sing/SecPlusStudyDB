# 📋 CertifyHero - Security+ Hub Project Log

This file serves as a persistent log and documentation of all modifications, system architecture details, and features implemented in the **CertifyHero Security+ Hub** project. It should be updated whenever changes are introduced to the codebase.

---

## 🏗️ System Architecture & Codebase Overview

The project is structured as a lightweight, performant, static client-side web application for studying CompTIA Security+ SY0-701 content.

### File Map
- [index.html](index.html) — Core UI & Application State (Dashboard, Library, Practice Lab/Flashcards, Exam Simulator). Uses Tailwind CSS (via local config injection).
- [parse_summaries.py](parse_summaries.py) — Python parsing utility. Converts study guide Markdowns (`S2_*.md` to `S12_*.md`) into JSON structured data.
- [data.js](data.js) — The compiled output database containing structured study concepts, definitions, analogies, and tables.
- [questions.js](questions.js) — Exam simulator database containing structured multiple-choice questions, options, correct answers, and explanations.

---

## 🪵 Changelog & Version History

### [v1.6.0] — 2026-06-20 (Level-4 Heading Support & Search Enhancements)
#### Added
- **Level-4 Heading (####) Support**: Integrated parsing and rendering support for level-4 headings (`####`) as sub-subheadings (`<h5>`) in both `parse_summaries.py` (for automatic definition fallbacks) and `index.html`'s markdown renderer. This ensures sections like Section 15 (Security Architecture), which employ sub-concepts with `####` headers (e.g., *Responsibility Matrix*, *Network Segmentation*), display correctly without displaying raw markdown symbols on the dashboard or study views.
- **Deep Content Search (Local & Global)**: Extended both the local Library search and the Global header search to check the `raw_content` of concepts. This ensures terms located in subheadings (such as `### Idempotence` or `#### Network Segmentation`), bullet lists, and tables are discoverable, resolving the issue where internal concept keywords were not matched.
- **Visual Distinction & Theme Color System**: Removed bottom borders from subheadings and implemented a structured color-coded typography hierarchy:
  - **H1 (Section Title)**: Pure White (`#FFFFFF`)
  - **H2 (Concept Title / Macro)**: Pastel Yellow/Gold (`#FDE047`)
  - **H3 (Sub-concept)**: Mint Green/Neon (`#4ADE80`)
  - **H4 (Detail/Matrix)**: Cyan/Turquoise (`#2DD4BF`)
  - **H5 (Support Labels/Analogies)**: Pastel Pink/Coral (`#FB7185`)
  - **H6 (Additional/Future use)**: Light Violet/Lavender (`#C084FC`)
  - **Inline Bold Text**: Pure White (`#FFFFFF`) to ensure key glossary terms pop out cleanly.




### [v1.5.0] — 2026-06-13 (CompTIA Exam Simulator Question Bank Expansion)
#### Added
- **Minimum 20 Questions per Syllabus Section**: Expanded the exam simulator question bank (`questions.js`) to ensure all 11 syllabus sections (Sections 2 through 12) have a minimum of 20 high-quality, psychometrically-sound CompTIA Security+ questions, totaling 220 questions (an increase of 160 questions).
- **CompTIA Psychometric Alignment**: Formulated all new questions to mirror the Security+ certification exam layout, utilizing:
  - Scenario-based practical situations (avoiding direct theoretical questions).
  - Upper-case critical modifiers (e.g., FIRST, BEST, MOST likely, LEAST, EXCEPT).
  - Plausible distractor anatomy (1 correct choice, 1 close distractor, 1 conceptual error, 1 invented technical term/acronym).
  - Zero-based answer index mapping.
  - Comprehensive, English explanations detailing the correct option justification and key distractor dismissal.
- **Database Consistency & Verification Audit**: Executed automated validation checks to verify structural consistency, key presence, unique sequential IDs, options integrity, and value ranges for all 220 items.

### [v1.4.0] — 2026-06-13 (Portability, UI Responsive Polish & Full Syllabus Integration)
#### Added
- **Full Syllabus Integration (Sections 9-12)**: Compiled and integrated S9 (Risk Management), S10 (Third-Party Vendor Risks), S11 (Governance and Compliance), and S12 (Asset and Change Management) into `data.js` via the parser.
- **New Exam Questions (Sections 9-12)**: Appended 20 new high-quality, exam-aligned multiple choice questions for Sections 9 through 12 to `questions.js`, ensuring they are fully covered in the Exam Simulator.
- **Retractable Main Sidebar (Collapsible Drawer)**:
  - Enabled desktop sidebar collapsing (from `w-64` to an icon-only `w-18` bar) using a global hamburger toggle button, expanding vertical reading space.
  - Implemented responsive mobile drawer navigation with a smooth slide transition, a semi-transparent blur backdrop overlay, and auto-dismissal upon section selection.
- **Sticky Library Navigation (Syllabus Menu)**:
  - Redesigned the sub-sidebar in the Library view to stick to the top on scroll on both mobile and desktop.
  - On desktop, it sticks as a floating vertical panel (`md:sticky md:top-20 md:self-start`), allowing quick section changes without scrolling back up.
  - On mobile, it condenses into a sticky horizontal pills bar just below the header (`sticky top-16 z-30`), hiding administrative headers (`hidden md:block`) and rendering responsive active indicators (`border-b-2` on mobile, `border-l-2` on desktop).
- **Cross-Platform Portability**: Modified `parse_summaries.py` and `download_assets.py` to resolve paths dynamically based on script location, removing all hardcoded Windows absolute paths.
- **Relative Documentation Links**: Converted all file path references in `REDME.md` and `PROJECT_LOG.md` from absolute Windows paths to relative URLs, allowing seamless local browsing on Linux, Windows, or external drives.

#### Fixed
- **Mobile Sidebar Drawer Rendering Bug**: Resolved an issue in mobile viewports where clicking the main hamburger menu while in the Library view only shifted content slightly to the right without displaying the sidebar drawer. This was fixed by:
  - Changing the `<body>` element's layout style from `flex` to `block`, which prevents browsers from incorrectly treating the `position: fixed` sidebar as a flex item (causing clipping/invisible layout offsets when toggled).
  - Updating `toggleSidebar()` and `closeMobileSidebar()` in `index.html` to automatically clear any desktop `.sidebar-collapsed` state class from the `<body>` on viewport widths under 768px.

### [v1.3.0] — 2026-06-05 (Latest Modifications)
#### Added
- **Dynamic Dashboard Progress Tracker**: Converted the static "6 / 6 Sections Loaded" and progress bar into a dynamic tracker that shows "X / Y Sections Completed" based on checklist state and total loaded sections count.
- **Dynamic "Resume Study Section"**: Replaced the static Section 2 recommendation card. It now dynamically recommends the next uncompleted section with a preview of its first 3 concepts, or invites the user to take a mock exam if everything is completed.

#### Fixed
- **Section 10 Alphabetical Sorting Bug**: Fixed sorting in `parse_summaries.py` to sort files numerically by section number. Previously, default alphabetical sorting caused `S10` to come before `S2` and appear at the beginning of the application menus.
- **Multi-line Blockquote Fragmentation**: Refactored the markdown parser in `index.html` to group consecutive blockquote lines (lines starting with `>`) and parse them recursively, allowing complex blockquotes (such as those containing nested code blocks) to render beautifully within a single container box instead of being fragmented into separate individual boxes.

### [v1.2.0] — 2026-06-01
#### Added
- **Dynamic Exam Simulator Checklist**: Replaced hardcoded topic options (Sections 2–7) with dynamic rendering based on `STUDY_DATA`. This automatically integrates Section 8 and any future sections.
- **Select All / Clear Functionality**: Fully implemented the `selectSimAllTopics(checked)` handler to check or uncheck all checkboxes at once.
- **Count-up Timer support**: Added support for count-up timer in the simulator when "No Time Limit" is selected.

#### Fixed
- **S0 Ghost Section Removal**: Updated file filtering in `parse_summaries.py` to use a strict regex match (`r'^S\d+_[a-zA-Z0-9_ -]+\.md$'`), preventing non-summary files (like `SUMMARY_STRUCTURE_GUIDE.md`) from generating an invalid `S0: Unknown Section` entry in the Library.
- **questions.js Syntax Error**: Removed duplicate `];` closing tag at the end of the file that broke script compilation in browsers.

---

### [v1.1.0] — 2026-06-01 (Section 8 Integration & Fallbacks)
#### Added
- **Implicit Definition Fallback**: Added JavaScript parsing logic in `index.html`'s `loadPracticeDeck()` to extract the first clean sentence/paragraph from `raw_content` if a concept's `definition` field is empty. This acts as a fallback for flashcard decks.

#### Fixed
- **Bold Paragraph Parser Heuristic**: Corrected the line skipping heuristics in `parse_summaries.py`'s `extract_auto_definition()`. The parser now allows lines starting with bold markup (`**bold**`), resolving a bug where Section 8's definitions were skipped because the parser mistook them for list items.

---

### [v1.0.0] — Initial Release
#### Added
- **Dashboard & Checklist Tracker**: Tracks reading completion percentage per section and calculates a weighted "overall readiness" score.
- **Markdown Library Viewer**: Renders structured concepts, analogies, formatted tables, lists, and code blocks directly from summaries.
- **Practice Lab (Flashcards)**: Allows users to flip cards to reveal definitions/analogies and rate their confidence (Easy, Medium, Hard).
- **Exam Simulator**: Custom practice exam builder supporting question counts, custom timers, progress grids, flagging questions for review, performance breakdown reports, and detailed review grids with explanation blocks.
