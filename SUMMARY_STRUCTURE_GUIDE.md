Summary Structure Guide — CertifyHero Web App
=============================================

> This guide defines the exact structure that all summaries must follow to integrate correctly with the study web app via `parse_summaries.py`.

* * *

File Naming Rules
-----------------

The filename determines the section number and the title that appears in the app:
    S{number}_{Title_With_Underscores}.md

**Valid examples:**
    S2_Fundamentals_of_Security.md
    S8_Cryptographic_Solutions.md
    S12_Identity_and_Access_Management.md

* * *

File Structure
--------------

    # 🛡️ {Course Path} — {Course Name}
    
    ## {Section Name} | Study Summary
    
    > **Keywords:** keyword1 · keyword2 · keyword3
    
    ---
    
    ## 1. Concept Name
    
    concept content...
    
    ---
    
    ## 2. Next Concept Name
    
    content...

* * *

Elements Supported by the Renderer
----------------------------------

### ✅ `##` — Main Concept (Required)

Each `##` creates a **separate card** in the Library. It is the primary unit of study.
    ## Concept Name

* The leading number (`## 1.`, `## 2.`) is automatically removed from the visible title.
* Emojis at the start of the title are also stripped.
* Avoid placing important content in the level-1 `#` heading — the parser ignores it.

* * *

### ✅ `###` — Sub-Heading (Internal Section)

Creates a secondary heading **inside** the concept card.
    ### Sub-Section Name

Rendered as an uppercase label with a separator line. Ideal for dividing tables or content groups within the same concept.

* * *

### ✅ Plain Text Paragraphs

Any line that is not a special element is rendered as a paragraph.
    This is a normal paragraph with **bold text** and `inline code`.

**Supported inline formatting:**

* `**bold**` → bold text
* `` `code` `` → code badge with dark background
* `*italic*` → italic text
* `→` → arrow highlighted in primary color

* * *

### ✅ `>` — Analogy / Blockquote

Rendered as a special card with a lightbulb icon and the label "Analogy / Context".
    > *Analogy text in Spanish.*

* Only the **first** occurrence of `>` in each concept is taken as the main analogy for the flashcard.
* Additional ones are also rendered as blockquotes.
* It is recommended to use italics with `*text*` for analogies.

* * *

### ✅ Markdown Tables

    | Column A     | Column B     | Column C     |
    | ------------ | ------------ | ------------ |
    | **Value 1**  | Value 2      | Value 3      |
    | Value 4      | Value 5      | Value 6      |

* The separator row (`|---|---|`) is detected and skipped automatically.
* Cells support **bold** and `` `code` ``.
* Multiple tables per concept are valid.

* * *

### ✅ Unordered Lists (`*` or `-`)

Both styles are compatible:
    * Item with asterisk
    - Item with hyphen
    * **Bold item**

Rendered as a disc-bullet list. You can mix `*` and `-` within the same concept.

* * *

### ✅ Ordered Lists

    1. First step
    2. Second step
    3. Third step

Each item is rendered with the number highlighted in the primary color.

* * *

### ✅ Code Blocks

Rendered as `<pre><code>` with a dark background and monospaced font. Ideal for flows, cheatsheets, and commands.
        Symmetric  → DES, 3DES, AES
        Asymmetric → Diffie-Hellman, RSA, ECC

* No syntax highlighting is applied — it is plain text with a mono font.
* Useful for quick references, step-by-step flows, and text-based comparisons.

* * *

### ✅ `---` — Horizontal Rule

Completely ignored by the parser. Use it freely to visually separate concepts in the `.md` without any effect in the app.
    ---

* * *

Unsupported Elements (Ignored)
------------------------------

| Element                                     | Behavior                                        |
| ------------------------------------------- | ----------------------------------------------- |
| `# Level 1 heading`                         | Ignored                                         |
| `## Study Summary` / `## Table of Contents` | Ignored (filtered by name)                      |
| `![image](path)`                            | **Ignored and removed** — do not include images |
| Inline HTML `<br>`, `<span>`                | Rendered as plain text (not interpreted)        |
| Tables without separator row `\|---`        | Not parsed as a table                           |

* * *

Concept Structure — Full Template
---------------------------------

    ## Concept Name
    
    Introduction paragraph with **key terms** in bold and `code` where applicable.
    
    > *Analogy in Spanish that connects the concept to something everyday.*
    
    ### Optional Sub-section
    
    | Column 1    | Column 2    | Column 3    |
    | ----------- | ----------- | ----------- |
    | **Value A** | Description | Notes       |
    | **Value B** | Description | Notes       |
    
    ### Another Sub-section
    
    - List item one
    - List item two with **emphasis**
    - Item with `inline code`
    
    > *Second analogy or additional context note.*
    
    ⚠️ **Important warning** in plain paragraph with emoji at the start.
    
    ---

* * *

Minimal Working Example
-----------------------

    # 🛡️ CompTIA Security+ — Section 9
    
    ## Access Control Models | Study Summary
    
    > **Keywords:** DAC · MAC · RBAC · Access Control
    
    ---
    
    ## 1. DAC — Discretionary Access Control
    
    The resource **owner** decides who has access. Most flexible but least secure model.
    
    > *It's like owning your apartment: you decide who gets a copy of the key.*
    
    ### Key Properties
    
    | Property        | Value                         |
    | --------------- | ----------------------------- |
    | **Owner**       | Sets permissions              |
    | **Flexibility** | High                          |
    | **Security**    | Low (owner can make mistakes) |
    
    ---
    
    ## 2. MAC — Mandatory Access Control
    
    Access is controlled by the **system** based on classification labels, not the owner.
    
    > *It's like military classification: Top Secret, Secret, Confidential. The system decides who can see what, not the document owner.*
    
    - Used in government and military environments
    - Labels: Top Secret, Secret, Confidential, Unclassified
    - Users cannot override the policy
    
    ---

* * *

Final Notes
-----------

* **One concept = one `##`** — do not split a concept across multiple `##` headings.
* Sections are added to the `data.js` file by running `parse_summaries.py` in the directory containing the `.md` files.
* The order of concepts in the Library respects the order in the `.md` file.
* The visible name in flashcards and the Library is the `##` text without the leading number or emoji.
