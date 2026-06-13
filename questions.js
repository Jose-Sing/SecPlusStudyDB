const EXAM_QUESTIONS = [
  {
    "id": 1,
    "section": "S2",
    "question": "Which of the following processes ensures that a transaction or action cannot be denied by the party who performed it, and what is its primary implementation mechanism?",
    "options": [
      "Availability; achieved using redundant RAID arrays and servers.",
      "Non-repudiation; achieved using digital signatures created with the sender's private key.",
      "Confidentiality; achieved using symmetric encryption protocols.",
      "Integrity; achieved by calculating MD5 or SHA-256 hashes of the transmission."
    ],
    "answer": 1,
    "explanation": "Non-repudiation ensures that a party cannot deny sending a message or performing a transaction. It is primary implemented using digital signatures, which are created by hashing the message and encrypting the hash digest with the sender's private key."
  },
  {
    "id": 2,
    "section": "S2",
    "question": "An administrator wants to verify that a downloaded software installer has not been tampered with. Which pillar of the CIA triad is being validated, and what tool is used?",
    "options": [
      "Confidentiality; validated using AES encryption.",
      "Availability; validated using database backups.",
      "Integrity; validated using a hashing algorithm (e.g., SHA-256) to compare checksums.",
      "Authentication; validated using multi-factor credentials."
    ],
    "answer": 2,
    "explanation": "Integrity ensures data remains accurate and unaltered. It is verified using hashing algorithms (like SHA-256) to check that the file's fingerprint (checksum) matches the official source."
  },
  {
    "id": 3,
    "section": "S2",
    "question": "To log into a highly secure server, an employee must enter a PIN sent to their smartphone app, scan their fingerprint, and insert a physical USB security token. How many distinct authentication factors are used in this scenario?",
    "options": [
      "One factor (something you have)",
      "Two factors (something you know + something you are)",
      "Three factors (something you know, something you have, and something you are)",
      "Four factors (something you know, something you have, something you do, and somewhere you are)"
    ],
    "answer": 2,
    "explanation": "In this scenario, three factors are used: (1) Something you know (PIN/password), (2) Something you are (fingerprint biometric), and (3) Something you have (physical USB token / smartphone app). Multi-factor authentication requires multiple independent factors."
  },
  {
    "id": 4,
    "section": "S2",
    "question": "Which component of the Zero Trust Control Plane is responsible for making the ultimate decision to grant or deny an access request?",
    "options": [
      "Policy Enforcement Point (PEP)",
      "Policy Decision Point (PDP) / Policy Engine",
      "Subject/System Layer",
      "Data Plane Gateway"
    ],
    "answer": 1,
    "explanation": "The Policy Engine (within the Control Plane) makes the access decision based on rules and context, functioning as the Policy Decision Point (PDP). The Policy Enforcement Point (PEP) in the Data Plane actually executes that decision."
  },
  {
    "id": 5,
    "section": "S2",
    "question": "A security analyst is reviewing logs in a central SIEM system to track when a specific database administrator accessed a sensitive table at 2:00 AM. Which AAA function is the analyst performing?",
    "options": [
      "Authentication",
      "Authorization",
      "Accounting",
      "Audit Prevention"
    ],
    "answer": 2,
    "explanation": "Accounting is the third component of the AAA model and involves monitoring and logging user actions, creating audit trails, and ensuring user accountability. Reviewing logs in a SIEM is an accounting activity."
  },
  {
    "id": 6,
    "section": "S3",
    "question": "A nation-state actor has compromised a rival government's water treatment plant. Rather than immediately shutting down the pumps, they silently remain in the network for months, mapping connections and exfiltrating telemetry. What type of threat is this?",
    "options": [
      "Unskilled Attacker (Script Kiddie)",
      "Advanced Persistent Threat (APT)",
      "Hacktivist Campaign",
      "Shadow IT Vulnerability"
    ],
    "answer": 1,
    "explanation": "An Advanced Persistent Threat (APT) is characterized by high capability, stealth, and patience. The actor maintains access to a network for an extended period without being detected to monitor systems and steal data, rather than cause immediate disruption."
  },
  {
    "id": 7,
    "section": "S3",
    "question": "During a forensic investigation, it is discovered that the attackers manipulated code signatures to make it appear as if the breach was carried out by a Chinese cybercrime group, whereas the attack actually originated from Eastern Europe. What is this type of operation called?",
    "options": [
      "Honeypot diversion",
      "False Flag Attack",
      "Pretexting campaign",
      "Watering Hole manipulation"
    ],
    "answer": 1,
    "explanation": "A False Flag Attack is deliberately designed to mislead investigators by making it appear as if the attack originated from a different source or threat actor, maintaining plausible deniability for the true attacker."
  },
  {
    "id": 8,
    "section": "S3",
    "question": "An employee connects an unauthorized personal wireless router to the office Ethernet port because the corporate Wi-Fi is too slow. What security risk does this action represent?",
    "options": [
      "Honeynet deployment",
      "Shadow IT",
      "Vishing vector",
      "Evil Twin installation"
    ],
    "answer": 1,
    "explanation": "Shadow IT is the use of hardware, software, or services within an organization without explicit IT department approval. Connecting an unapproved router bypasses corporate controls and opens a backdoor."
  },
  {
    "id": 9,
    "section": "S3",
    "question": "Which of the following definitions best describes an 'Attack Surface'?",
    "options": [
      "The pathway or entry mechanism (like email messages or USB devices) used to deliver malware.",
      "The total sum of all potential entry points, systems, and vulnerabilities open to exploitation across a network.",
      "Decoy servers configured to attract and study hackers.",
      "The specific tactics and procedures preferred by a nation-state actor."
    ],
    "answer": 1,
    "explanation": "The attack surface is the sum of all potential entry points and vulnerabilities where an attacker could attempt to enter or extract data. The threat/attack vector is the pathway ('how'); the attack surface is the boundary ('where')."
  },
  {
    "id": 10,
    "section": "S4",
    "question": "What is the critical distinction between Fencing and Bollards in a physical security program?",
    "options": [
      "Fencing is a preventative control; Bollards are detective controls.",
      "Fencing restricts vehicular entry; Bollards restrict pedestrian entry.",
      "Fencing restricts pedestrian/people entry; Bollards restrict vehicular entry.",
      "Fencing is technical; Bollards are administrative."
    ],
    "answer": 2,
    "explanation": "Fencing acts as a physical barrier and deterrent to control or prevent people from entering a perimeter, while Bollards are heavy concrete/steel posts designed to control or block vehicle access."
  },
  {
    "id": 11,
    "section": "S4",
    "question": "An unauthorized individual slips through a secure badge-controlled door immediately behind an employee who swiped in. The employee is unaware that someone followed them. What is this security breach called?",
    "options": [
      "Piggybacking",
      "Tailgating",
      "Pretexting",
      "Shoulder Surfing"
    ],
    "answer": 1,
    "explanation": "Tailgating occurs when an unauthorized person closely follows an authorized person through a checkpoint without their knowledge or consent. If the employee knowingly allowed them in (e.g., holding the door), it would be piggybacking."
  },
  {
    "id": 12,
    "section": "S4",
    "question": "A security engineer is evaluating biometric door locks. System A has a CER of 0.5%, System B has a CER of 2.1%, and System C has a CER of 5.3%. Which system represents the most effective balance of security and usability?",
    "options": [
      "System C, because it has the highest error tolerance.",
      "System B, because it represents the median threshold.",
      "System A, because a lower Crossover Error Rate (CER) indicates a higher-performing biometric system.",
      "All systems are equal; CER is only used for licensing costs."
    ],
    "answer": 2,
    "explanation": "The Crossover Error Rate (CER), or Equal Error Rate, is the point where the False Acceptance Rate (FAR) equals the False Rejection Rate (FRR). A lower CER indicates a more accurate and efficient biometric authentication system. Therefore, System A (0.5%) is the best choice."
  },
  {
    "id": 13,
    "section": "S4",
    "question": "An attacker stands close to an employee in a coffee shop and uses a Flipper Zero to capture encrypted wireless badge credentials from the employee's ID card. What physical security threat is occurring, and how can it be mitigated?",
    "options": [
      "Door lock shimming; mitigated using deadbolts.",
      "Access badge cloning; mitigated using RFID-shielding wallets or sleeves.",
      "Shoulder surfing; mitigated using privacy screens on laptops.",
      "BlueBorne hijacking; mitigated by disabling Bluetooth pairing."
    ],
    "answer": 1,
    "explanation": "Access badge cloning involves using a scanning tool (like Flipper Zero) to capture RFID or NFC signals from a badge. It is mitigated by keeping badges in RFID-shielding sleeves, using strong encryption, and enforcing multi-factor authentication at doors."
  },
  {
    "id": 14,
    "section": "S5",
    "question": "A customer service representative receives an email: 'URGENT: Executive payroll account lock out. Update bank details in 10 minutes or executive salaries will fail to deposit today.' The email uses the official logo of the payroll company. Which combination of motivational triggers is the attacker exploiting?",
    "options": [
      "Authority and Scarcity",
      "Likability and Social Proof",
      "Urgency and Fear",
      "Consensus and Familiarity"
    ],
    "answer": 2,
    "explanation": "The attack uses 'Urgency' (10 minutes time limit) and 'Fear' (consequence of executive payroll failing) to bypass critical thinking and force a rapid compliance response."
  },
  {
    "id": 15,
    "section": "S5",
    "question": "An attacker registers the domain name 'd10ntraining.com' (replacing the 'o' with a '0') to host a cloned portal that steals customer passwords. What is this social engineering technique called?",
    "options": [
      "Pretexting",
      "Typosquatting / URL Hijacking",
      "Watering Hole Attack",
      "Brand Impersonation"
    ],
    "answer": 1,
    "explanation": "Typosquatting (or URL hijacking) is the registration of domains that are common typographical errors or visual lookalikes (cousin domains) of a legitimate site, hoping users click them by mistake."
  },
  {
    "id": 16,
    "section": "S5",
    "question": "Which social engineering attack targets high-profile executives such as the CEO or CFO, using highly researched and customized emails to authorize financial transactions?",
    "options": [
      "Smishing",
      "Vishing",
      "Whaling",
      "Watering Hole"
    ],
    "answer": 2,
    "explanation": "Whaling is a specific type of spear phishing that targets high-value decision-makers (like CEOs, CFOs, or board members). It requires extensive research and represents a high-effort, high-reward attack."
  },
  {
    "id": 17,
    "section": "S5",
    "question": "An attacker calls a payroll administrator pretending to be from the bank's technical support department. The attacker sets up a story about a 'glitch in the automated system' and asks the admin to read out the codes sent to their phone to 'verify transaction clearance.' What is this technique?",
    "options": [
      "Typosquatting",
      "Doxxing",
      "Pretexting (Voice Phishing / Vishing)",
      "Dumpster Diving"
    ],
    "answer": 2,
    "explanation": "Pretexting is the act of creating a fabricated scenario (pretext) to manipulate a target into giving up information. Conducted over a phone call, it is also referred to as Vishing."
  },
  {
    "id": 18,
    "section": "S5",
    "question": "An attacker compromises a local cafe's Wi-Fi login portal, knowing that developers from a nearby defense contractor visit the cafe every morning. The portal distributes a browser exploit to infect their laptops. What type of attack is this?",
    "options": [
      "Watering Hole Attack",
      "Spear Phishing Campaign",
      "Diversion Theft",
      "Baiting"
    ],
    "answer": 0,
    "explanation": "A Watering Hole attack is a targeted, passive attack where the attacker compromises a trusted third-party website or resource frequently visited by the target group, waiting for them to access it and get infected."
  },
  {
    "id": 19,
    "section": "S6",
    "question": "A system administrator notices that a server is running slower than usual. Further analysis reveals that the CPU utilization is at 99%, and the machine is sending thousands of packets to a single IP address on port 80. The server appears to be executing orders from that address. What type of malware setup is described?",
    "options": [
      "A Worm executing process hollowing.",
      "A Logic Bomb waiting for a trigger.",
      "A Botnet Zombie communicating with a Command and Control (C2) node to perform a DDoS attack.",
      "A Fileless malware using a macro virus."
    ],
    "answer": 2,
    "explanation": "The server has become a Zombie in a Botnet, executing remote instructions from a central Command and Control (C2) node to participate in a Distributed Denial of Service (DDoS) attack, causing high resource consumption."
  },
  {
    "id": 20,
    "section": "S6",
    "question": "What is the primary difference between a Virus and a Worm?",
    "options": [
      "A virus is written in C++, whereas a worm is written in Python.",
      "A virus requires user action to execute and replicate, whereas a worm self-replicates and spreads across networks without any user interaction.",
      "A virus targets Windows systems, while a worm targets Linux servers.",
      "A virus encrypts files (ransomware), while a worm logs keys (keylogger)."
    ],
    "answer": 1,
    "explanation": "The fundamental difference is the requirement of user action. A virus cannot execute or replicate without a user opening an attachment or running a file. A worm exploits system/network vulnerabilities to spread entirely on its own."
  },
  {
    "id": 21,
    "section": "S6",
    "question": "Which advanced malware evasion technique involves the malware rewriting its entire code structure before every subsequent infection, while keeping its functionality identical?",
    "options": [
      "Encrypted Malware",
      "Polymorphic Malware",
      "Metamorphic Malware",
      "Armored Obfuscation"
    ],
    "answer": 2,
    "explanation": "Metamorphic malware completely rewrites its entire code structure (the signature changes entirely) before each new infection, making signature-based AV detection extremely difficult. Polymorphic malware keeps its code body the same but changes its decryption/wrapper module."
  },
  {
    "id": 22,
    "section": "S6",
    "question": "An attacker inserts malicious code into the memory space of a legitimate, active Windows system process (like svchost.exe), running the malware under the guise of that trusted identity. What technique is this?",
    "options": [
      "Process Hollowing",
      "DLL Injection / Code Injection",
      "Shim Manipulation",
      "Easter Egg Activation"
    ],
    "answer": 1,
    "explanation": "Code Injection or DLL Injection involves inserting malicious code directly into the address space of an active, running legitimate process. Process Hollowing involves launching a new suspended process, clearing its code, and replacing it with malware before resuming."
  },
  {
    "id": 23,
    "section": "S6",
    "question": "A software developer leaves an undocumented trigger in the company's accounting software: if the developer's employee ID is marked as 'Terminated', the program deletes all active billing records. What is this threat?",
    "options": [
      "RAT Trojan",
      "Logic Bomb",
      "Easter Egg",
      "Fileless Backdoor"
    ],
    "answer": 1,
    "explanation": "A Logic Bomb is malicious code planted in a system that remains dormant until specific criteria or triggers (such as deletion of a user account or a date) are met, at which point it executes its payload."
  },
  {
    "id": 24,
    "section": "S6",
    "question": "Why are traditional antivirus tools frequently unable to detect Rootkits, and how should an administrator scan for them?",
    "options": [
      "Rootkits are written in encrypted Java; they must be decrypted online.",
      "Rootkits operate at kernel level (Ring 0/1) and can subvert the OS itself to hide. Administrators should boot the system from a clean external medium and scan the internal drive.",
      "Rootkits delete all system logs; administrators must reinstall the OS immediately.",
      "Rootkits run only on network routers; the administrator must scan the network switches."
    ],
    "answer": 1,
    "explanation": "Because rootkits run at the deepest privilege level (Ring 0/Kernel) and hook into system DLLs using shims, they subvert the OS commands that antivirus scanners use to query files. Booting from a clean external drive ensures the rootkit's code is not running and cannot hide from the scanner."
  },
  {
    "id": 25,
    "section": "S7",
    "question": "Which data security role is responsible for categorizing data, assigning labels, and establishing security access requirements, and what business area should they belong to?",
    "options": [
      "Data Custodian; belongs to the IT administration team.",
      "Data Processor; belongs to a third-party analytics company.",
      "Data Owner; should be a senior business manager who understands the data's value.",
      "Data Privacy Officer (DPO); belongs to the legal compliance team."
    ],
    "answer": 2,
    "explanation": "The Data Owner (a business-side executive) is responsible for the overall lifecycle, classification, labeling, and authorization rules of a data asset. The Data Custodian (typically in IT) manages the systems and implements the owners' policies."
  },
  {
    "id": 26,
    "section": "S7",
    "question": "A healthcare provider is configuring a Data Loss Prevention (DLP) system. They want to prevent staff from uploading patient records to personal cloud drives. Where should the DLP agent be installed to intercept this action?",
    "options": [
      "Network DLP at the perimeter firewall.",
      "Storage DLP in the centralized database server.",
      "Endpoint DLP on the staff member's local workstation.",
      "Cloud-based DLP on the public API gateway."
    ],
    "answer": 2,
    "explanation": "Endpoint DLP monitors 'data in use' on individual local workstations and can block actions like copying sensitive files to USB drives or uploading them to unauthorized web portals (personal cloud storage)."
  },
  {
    "id": 27,
    "section": "S7",
    "question": "To secure payment processing, a retailer replaces raw credit card primary account numbers (PAN) with static alphanumeric placeholders. The real credit cards are stored in an isolated, highly secure vault database. What data securing method is this?",
    "options": [
      "Data Hashing",
      "Tokenization",
      "Full Disk Encryption (FDE)",
      "Data Masking"
    ],
    "answer": 1,
    "explanation": "Tokenization replaces sensitive data with non-sensitive placeholders (tokens). The tokens have no algorithmic relationship to the original data, which can only be matched by querying a secure token vault database. Commonly used in payment card systems."
  },
  {
    "id": 28,
    "section": "S7",
    "question": "A user is browsing a secure banking site using HTTPS. Which state is the data in, and what protocol secures it?",
    "options": [
      "Data at Rest; secured using BitLocker.",
      "Data in Use; secured using Intel SGX enclaves.",
      "Data in Transit; secured using SSL/TLS.",
      "Data in Transit; secured using IPSec."
    ],
    "answer": 2,
    "explanation": "Data moving across the internet is 'Data in Transit'. For web browsing (HTTPS), it is secured by SSL/TLS protocols, which construct an encrypted tunnel between the client and server."
  },
  {
    "id": 29,
    "section": "S7",
    "question": "Under the principle of Data Sovereignty, which rules govern the storage and processing of digital information?",
    "options": [
      "Data is subject only to the laws of the country where the corporate headquarters is located.",
      "Data is subject to the laws of the country where it is physically located, collected, or processed.",
      "Data is completely exempt from local laws once it is stored in the public cloud.",
      "Data is governed by international maritime law."
    ],
    "answer": 1,
    "explanation": "Data Sovereignty is the legal principle that digital data is subject to the laws of the country/jurisdiction where it is physically stored, collected, or processed (e.g., EU GDPR rules apply to data stored/collected in the EU)."
  },
  {
    "id": 30,
    "section": "S7",
    "question": "A DLP administrator wants the system to detect screenshots or scanned images of passport documents sent via email attachments. What feature must be enabled in the DLP system?",
    "options": [
      "FDE (Full Disk Encryption)",
      "OCR (Optical Character Recognition)",
      "Endpoint Tokenization",
      "Network Geofencing"
    ],
    "answer": 1,
    "explanation": "Optical Character Recognition (OCR) allows a DLP system to scan images, screenshots, and photos to extract and analyze text, blocking sensitive data leaks that occur in visual formats rather than text formats."
  }
,
  {
    "id": 31,
    "section": "S8",
    "question": "A security engineer claims their AES-256 implementation is secure because the algorithm is kept proprietary and secret. Which cryptographic principle does this violate?",
    "options": [
      "Encryption strength comes from the key, not the algorithm. Algorithms are publicly reviewed — hiding them is 'security through obscurity', which is unreliable.",
      "AES-256 requires a secret algorithm to maintain 256-bit security strength.",
      "Symmetric algorithms are inherently weaker than asymmetric ones regardless of secrecy.",
      "Key rotation is unnecessary when the algorithm itself is confidential."
    ],
    "answer": 0,
    "explanation": "A core principle of modern cryptography is that security must come from the KEY, not the algorithm. Algorithms like AES are publicly documented and peer-reviewed — that transparency is a strength. 'Security through obscurity' is explicitly considered an insecure practice."
  },
  {
    "id": 32,
    "section": "S8",
    "question": "Which of the following CORRECTLY describes the difference between a stream cipher and a block cipher?",
    "options": [
      "Stream ciphers use asymmetric keys; block ciphers use symmetric keys.",
      "Stream ciphers encrypt data bit-by-bit continuously; block ciphers break input into fixed-size chunks before encrypting.",
      "Block ciphers are used only for data in transit; stream ciphers are used only for data at rest.",
      "Stream ciphers are always stronger than block ciphers because they process more data per cycle."
    ],
    "answer": 1,
    "explanation": "A stream cipher encrypts one bit or byte at a time (ideal for real-time communications like audio/video). A block cipher divides the input into fixed-length blocks (e.g., 128-bit) and encrypts each block. RC4 is the notable stream cipher; AES, DES, and 3DES are block ciphers."
  },
  {
    "id": 33,
    "section": "S8",
    "question": "A mobile payment app needs to implement asymmetric encryption but must minimize CPU and battery usage on the device. Which algorithm is the BEST choice?",
    "options": [
      "RSA-4096, because longer keys always provide better security on all platforms.",
      "3DES, because applying encryption three times gives strong protection with minimal overhead.",
      "ECC (Elliptic Curve Cryptography), because a 256-bit ECC key provides security equivalent to a 2048-bit RSA key with far less computational cost.",
      "DES, because it was specifically designed for hardware efficiency."
    ],
    "answer": 2,
    "explanation": "ECC is approximately 6x more efficient than RSA at equivalent security levels. A 256-bit ECC key matches a 2048-bit RSA key in security. This makes ECC the standard for mobile devices, tablets, and any low-power environment where battery and CPU are constrained."
  },
  {
    "id": 34,
    "section": "S8",
    "question": "Alice wants to send Bob an encrypted email that also proves she was the sender. Which key operations achieve BOTH confidentiality AND non-repudiation?",
    "options": [
      "Encrypt the message with Alice's private key; sign the hash with Bob's public key.",
      "Encrypt the message with Bob's public key (only Bob can decrypt); sign the hash digest with Alice's private key (only Alice could have signed it).",
      "Encrypt the message with Alice's public key; sign the hash with Bob's private key.",
      "Use a single symmetric key for both encryption and signing to simplify the process."
    ],
    "answer": 1,
    "explanation": "Confidentiality: encrypt with the RECEIVER's (Bob's) public key — only Bob can decrypt with his private key. Non-repudiation: sign the hash with the SENDER's (Alice's) private key — anyone can verify with Alice's public key, but only Alice could have created the signature. These are two separate, opposite operations."
  },
  {
    "id": 35,
    "section": "S8",
    "question": "A penetration tester extracts NTLM hashes from a compromised Windows host and uses them to authenticate to other servers without cracking the hashes. What technique is being used, and what is the primary defense?",
    "options": [
      "Birthday Attack; defense is to use SHA-256 instead of MD5 for password storage.",
      "Pass-the-Hash; defenses include MFA, patching Windows systems, least privilege, and ensuring only trusted OS connect to servers.",
      "Downgrade Attack; defense is to disable SSL and enforce TLS 1.3.",
      "Key Stretching Attack; defense is to increase the NTLM hash digest length."
    ],
    "answer": 1,
    "explanation": "Pass-the-Hash exploits the fact that Windows NTLM authentication accepts the hash itself as a valid credential — no plaintext password needed. Defenses include MFA (so stolen hashes alone are insufficient), least privilege (limit lateral movement), patching, and requiring trusted OS connections."
  },
  {
    "id": 36,
    "section": "S8",
    "question": "Which PKI component is responsible for making the decision to grant or deny a digital certificate, and what does it check FIRST before issuing the certificate?",
    "options": [
      "The Registration Authority (RA) makes the final decision and checks the Certificate Revocation List (CRL) first.",
      "The Certificate Authority (CA) issues certificates, but first checks that the entity's request and identity are valid via the Certificate Signing Request (CSR).",
      "The OCSP Stapling server issues the certificate and checks key escrow records.",
      "The Root of Trust automatically issues certificates without identity verification."
    ],
    "answer": 1,
    "explanation": "The Certificate Authority (CA) is the trusted third party that issues digital certificates. The entity first submits a Certificate Signing Request (CSR) containing their public key and identity information. The CA validates this, then issues the certificate. The private key is never included in the CSR."
  },
  {
    "id": 37,
    "section": "S8",
    "question": "A company's compliance team asks the difference between OCSP and the Certificate Revocation List (CRL). Which statement is MOST accurate?",
    "options": [
      "CRL checks one certificate at a time using its serial number and is faster; OCSP is the full list of all revoked certificates.",
      "OCSP checks the revocation status of a single certificate by serial number and is faster; CRL is the full historical list of all revoked certificates maintained by the CA.",
      "OCSP Stapling replaces both CRL and OCSP by embedding the revocation check inside the certificate itself permanently.",
      "CRL and OCSP are identical — both check one certificate at a time with the same speed."
    ],
    "answer": 1,
    "explanation": "The CRL is a full, cumulative list of every certificate ever revoked by a CA — downloading it is slower. OCSP queries the status of a single certificate by serial number, making it faster. OCSP Stapling is a further optimization where the server pre-fetches its own OCSP response and includes it in the TLS handshake, eliminating an extra round-trip."
  },
  {
    "id": 38,
    "section": "S8",
    "question": "An attacker intercepts a TLS negotiation between a client and server and manipulates the handshake so both parties agree to use SSL 3.0 instead of TLS 1.3. What type of attack is this, and what real-world attack exploited this exact vulnerability?",
    "options": [
      "Birthday Attack; exploited by the BEAST attack against RC4.",
      "Downgrade Attack (Version Rollback); exploited by the POODLE attack which forced systems back to SSL 3.0.",
      "Pass-the-Hash Attack; exploited by Mimikatz against Windows NTLM.",
      "Collision Attack; exploited by researchers who found MD5 hash collisions."
    ],
    "answer": 1,
    "explanation": "A Downgrade Attack forces two communicating systems to use an older, weaker protocol by manipulating the version negotiation handshake. The POODLE (Padding Oracle On Downgraded Legacy Encryption) attack is the famous real-world example — it exploited SSL 3.0 vulnerabilities by forcing modern systems to fall back to it."
  },
  {
    "id": 39,
    "section": "S8",
    "question": "A company stores sensitive customer data and replaces all credit card numbers in its database with random strings that map back to the real numbers in a separate secured vault. Meanwhile, test environments use data where real names are replaced with fictional but realistic ones. Which techniques are being used, respectively?",
    "options": [
      "Steganography for the payment system; tokenization for the test environment.",
      "Tokenization for the payment system (random token replaces card number, real data in secure vault); data masking for the test environment (fictional but realistic data for safe testing).",
      "Data masking for both — both involve replacing data with fake values.",
      "Encryption for the payment system; tokenization for the test environment."
    ],
    "answer": 1,
    "explanation": "Tokenization substitutes real sensitive data with a meaningless token — the actual data lives in a separate secured vault, so a breach of the main database yields nothing useful. Data masking replaces real data with fictional-but-realistic data for testing — it preserves the data's format and usability without exposing real records."
  },
  {
    "id": 40,
    "section": "S8",
    "question": "NIST completed its post-quantum cryptography standardization in 2022. Which algorithm is NIST's primary recommendation for general encryption, and what mathematical problem does it rely on?",
    "options": [
      "RSA-8192; relies on factoring extremely large prime numbers, which quantum computers cannot factor.",
      "CRYSTALS-Kyber; relies on the difficulty of solving Learning With Errors (LWE) problems over modular lattices, which current quantum algorithms cannot efficiently break.",
      "CRYSTALS-Dilithium; relies on elliptic curve discrete logarithm problems hardened for quantum resistance.",
      "AES-512; relies on symmetric key length doubling, making it the only quantum-safe option."
    ],
    "answer": 1,
    "explanation": "CRYSTALS-Kyber is NIST's recommended algorithm for general encryption in the post-quantum era. It is based on the hardness of Learning With Errors (LWE) problems over lattices — a mathematical problem that quantum computers (including those using Shor's algorithm) cannot efficiently solve. AES-512 does not exist; AES-256 provides partial quantum resistance. CRYSTALS-Dilithium is for digital signatures, not general encryption."
  },
  {
    "id": 41,
    "section": "S9",
    "question": "A company owns a critical database server valued at $50,000. A cybersecurity firm estimates that a ransomware attack has an Exposure Factor (EF) of 80% on this server, and such an attack is likely to occur once every 4 years. What are the Single Loss Expectancy (SLE) and the Annualized Loss Expectancy (ALE) for this risk?",
    "options": [
      "SLE = $40,000; ALE = $10,000",
      "SLE = $50,000; ALE = $12,500",
      "SLE = $10,000; ALE = $2,500",
      "SLE = $40,000; ALE = $40,000"
    ],
    "answer": 0,
    "explanation": "Single Loss Expectancy (SLE) is calculated as Asset Value × Exposure Factor (EF) = $50,000 × 0.80 = $40,000. The Annualized Rate of Occurrence (ARO) is 1 / 4 = 0.25. The Annualized Loss Expectancy (ALE) is SLE × ARO = $40,000 × 0.25 = $10,000 per year."
  },
  {
    "id": 42,
    "section": "S9",
    "question": "During a Business Impact Analysis (BIA), a financial institution determines that it can tolerate a maximum of 15 minutes of transactional data loss in the event of a database corruption, but the database itself must be online and functional within 2 hours to avoid severe business impact. Which of the following metrics represent these two requirements respectively?",
    "options": [
      "RTO of 15 minutes; RPO of 2 hours",
      "RPO of 15 minutes; RTO of 2 hours",
      "MTTR of 15 minutes; MTBF of 2 hours",
      "MTBF of 15 minutes; MTTR of 2 hours"
    ],
    "answer": 1,
    "explanation": "Recovery Point Objective (RPO) measures the maximum acceptable data loss in terms of time (15 minutes). Recovery Time Objective (RTO) measures the maximum acceptable downtime before the service or system must be restored to operation (2 hours)."
  },
  {
    "id": 43,
    "section": "S9",
    "question": "A security analyst is monitoring an old legacy system and notices that the firewall protecting it is becoming increasingly ineffective because the software vendor no longer releases signature updates. Which term best describes the specific risk associated with the degrading effectiveness of this security control?",
    "options": [
      "Inherent Risk",
      "Residual Risk",
      "Control Risk",
      "Sovereign Risk"
    ],
    "answer": 2,
    "explanation": "Control Risk is a measure of how much less effective a security control has become over time (e.g., firewall or antivirus signatures becoming stale/ineffective as threat actors evolve). Residual Risk is the risk that remains after mitigation controls have been applied."
  },
  {
    "id": 44,
    "section": "S9",
    "question": "An organization decides to transition its customer-facing web servers to a cloud hosting provider that guarantees a 99.99% uptime SLA and covers all financial losses resulting from hosting outages. Which risk management strategy has the organization primarily executed?",
    "options": [
      "Risk Avoidance",
      "Risk Mitigation",
      "Risk Transference (Sharing)",
      "Risk Acceptance"
    ],
    "answer": 2,
    "explanation": "Risk Transference (or sharing) shifts the financial consequences of a risk to another party, in this case, the cloud hosting provider through SLA guarantees and financial coverage of outages. Note that operational or reputational risks still remain with the organization."
  },
  {
    "id": 45,
    "section": "S9",
    "question": "A project manager is preparing a central register of project risks. They want to define the amount and type of risk the company is actively willing to pursue to achieve its strategic growth targets. What is this concept called?",
    "options": [
      "Risk Tolerance",
      "Risk Appetite",
      "Risk Avoidance Threshold",
      "Risk Register Baseline"
    ],
    "answer": 1,
    "explanation": "Risk Appetite is the amount and type of risk an organization is willing to pursue or take on in order to achieve its strategic objectives. Risk Tolerance is the maximum limit of risk the organization can accept before action is required."
  },
  {
    "id": 46,
    "section": "S10",
    "question": "An intelligence agency wants to guarantee that the microchips used in its satellite systems are manufactured securely, perform only their designed functions, and contain no hidden backdoors. Which program should they verify the manufacturer participates in?",
    "options": [
      "Trusted Foundry Program",
      "Chips and Science Alliance (CSA)",
      "Common Criteria Certification",
      "ISO/IEC 27001 Vendor Standard"
    ],
    "answer": 0,
    "explanation": "The Trusted Foundry Program is a US Department of Defense (DoD) initiative designed to ensure that chips are manufactured securely, free of unauthorized modifications, and perform exactly as specified. It guards against hardware-based supply chain tampering."
  },
  {
    "id": 47,
    "section": "S10",
    "question": "A defense contractor purchases secondary-market networking switches from an unverified online reseller to save budget. What hardware-based supply chain attack are they exposing themselves to, and what does it involve?",
    "options": [
      "Pre-installed Ransomware; encrypting switch configuration files upon boot.",
      "Chip Washing; repackaging or replacing microchips with counterfeit or malware-embedded versions.",
      "Phishing; sending malicious alerts to network administrators.",
      "Salami Slicing; stealing small fractions of data packets in transit."
    ],
    "answer": 1,
    "explanation": "Chip Washing is a hardware-based supply chain attack that involves repackaging or replacing microchips with less expensive, counterfeit, or malware-embedded variants (such as installing a backdoor). Secondary-market hardware from unverified suppliers carries a high risk of this."
  },
  {
    "id": 48,
    "section": "S10",
    "question": "A company is negotiating a contract with a new security vendor. The company wants to include a provision that allows them to inspect the vendor's internal development processes, review security controls, and verify compliance with standards at any time. Which clause should they insert?",
    "options": [
      "Service Level Agreement (SLA) Clause",
      "Right to Audit Clause",
      "Non-disclosure Agreement (NDA) Clause",
      "Business Partnership Agreement (BPA) Clause"
    ],
    "answer": 1,
    "explanation": "A Right to Audit clause is a contractual provision that grants an organization the legal authority to inspect a vendor's internal processes, security practices, and records to verify compliance with agreed-upon standards."
  },
  {
    "id": 49,
    "section": "S10",
    "question": "An organization wishes to hire an external vendor for a major IT project. They want to sign an overarching agreement establishing general terms, billing frameworks, and confidentiality for the long-term relationship, and then write separate documents specifying the exact deliverables and timelines for individual tasks. Which combination of agreements should they use?",
    "options": [
      "A Business Partnership Agreement (BPA) for general terms; a Memorandum of Understanding (MOU) for specific tasks.",
      "A Master Service Agreement (MSA) for general terms; a Statement of Work (SOW) for specific task deliverables and timelines.",
      "A Service Level Agreement (SLA) for general terms; a Master Service Agreement (MSA) for specific tasks.",
      "A Memorandum of Agreement (MOA) for general terms; a Statement of Work (SOW) for specific tasks."
    ],
    "answer": 1,
    "explanation": "A Master Service Agreement (MSA) sets the overarching, general terms (such as payment, confidentiality, and dispute resolution) for an ongoing relationship. Under this umbrella, individual Statements of Work (SOW) or Scopes of Work are issued to detail specific project tasks, deliverables, and timelines."
  },
  {
    "id": 50,
    "section": "S10",
    "question": "What was the primary method of compromise in the infamous 2021 SolarWinds cyberattack, and how did it affect victim organizations?",
    "options": [
      "A hardware-based Trojan embedded in server motherboards manufactured overseas.",
      "A software-based supply chain attack where attackers infiltrated the update system to distribute malware via legitimate software updates.",
      "A distributed denial-of-service (DDoS) attack that overwhelmed perimeter firewalls.",
      "A credential stuffing campaign targeting administrative accounts on active directories."
    ],
    "answer": 1,
    "explanation": "The SolarWinds attack was a massive software-based supply chain attack where threat actors infiltrated the SolarWinds Orion update system and embedded malware into a legitimate software update, distributing it to thousands of customers and bypassing their perimeter security controls."
  },
  {
    "id": 51,
    "section": "S11",
    "question": "An employee is hired at a financial firm and is asked to sign a document that outlines their responsibilities when using company-owned laptops, internet access, and email systems, as well as the consequences of misuse. What type of document is this?",
    "options": [
      "Information Security Policy",
      "Acceptable Use Policy (AUP)",
      "Service Level Agreement (SLA)",
      "Standard Operating Procedure (SOP)"
    ],
    "answer": 1,
    "explanation": "An Acceptable Use Policy (AUP) defines the rules, do's, and don'ts for users interacting with organizational IT systems and networks, helping prevent security incidents and establishing legal grounds for enforcement."
  },
  {
    "id": 52,
    "section": "S11",
    "question": "A security manager is translating a high-level policy of 'protecting student privacy' into specific, mandatory implementation rules, stating that all databases containing student grades must encrypt data using AES-256 in CBC mode. Which governance component is the manager creating?",
    "options": [
      "Guideline",
      "Standard",
      "Procedure",
      "Committee Charter"
    ],
    "answer": 1,
    "explanation": "A Standard defines specific, mandatory rules or technologies used to enforce a policy. While policies state high-level intentions (what/why), standards define the exact methods and requirements (how, at a systems level)."
  },
  {
    "id": 53,
    "section": "S11",
    "question": "An organization is structuring its security decision-making. The executive team decides to establish a framework where all policy approvals, budget controls, and security configurations are managed centrally by the CISO's office. This ensures consistency but slows down local departments. What type of governance structure is this?",
    "options": [
      "Decentralized Structure",
      "Centralized Structure",
      "Federated Structure",
      "Collaborative Structure"
    ],
    "answer": 1,
    "explanation": "A Centralized Structure concentrates decision-making and policy authority at the top management level. It ensures highly consistent enforcement across the organization but can slow down local response times and innovation."
  },
  {
    "id": 54,
    "section": "S11",
    "question": "A multinational retail company processes online credit card payments. Which of the following compliance standards is the company contractually obligated to follow to protect cardholder data, and who enforces it?",
    "options": [
      "GDPR; enforced by European Union data protection authorities.",
      "PCI-DSS; enforced by a council of credit card brands (Visa, Mastercard, etc.) via merchant contracts.",
      "HIPAA; enforced by the US Department of Health and Human Services.",
      "SOX; enforced by the Securities and Exchange Commission (SEC)."
    ],
    "answer": 1,
    "explanation": "The Payment Card Industry Data Security Standard (PCI-DSS) is a set of security standards designed to protect cardholder data. It is contractually enforced on merchants processing credit card transactions by the major credit card brands."
  },
  {
    "id": 55,
    "section": "S11",
    "question": "A SaaS provider wants to prove to its prospective corporate clients that it maintains high security controls, confidentiality, and data availability. They hire an independent CPA to audit their operations over a 6-month period and issue a report showing operational effectiveness. Which report should they request?",
    "options": [
      "SOC 2 Type I Report",
      "SOC 2 Type II Report",
      "ISO/IEC 27001 Certificate",
      "PCI-DSS Self-Assessment Questionnaire"
    ],
    "answer": 1,
    "explanation": "A SOC 2 Type II report evaluates the design and operational effectiveness of a service provider's controls over a period of time (typically 6-12 months). A SOC 2 Type I report only assesses the design of controls at a single point in time."
  },
  {
    "id": 56,
    "section": "S12",
    "question": "A bank wants to allow employees to check work email on their personal smartphones. To minimize cost, they allow employees to bring their own devices, but require them to install a client that segments company data from personal data. What deployment model is this, and what tool is used to manage it?",
    "options": [
      "COPE; managed using active directory policies.",
      "BYOD (Bring Your Own Device); managed using Mobile Device Management (MDM) software.",
      "CYOD (Choose Your Own Device); managed using firewalls.",
      "COBO (Corporate Owned, Business Only); managed using VPNs."
    ],
    "answer": 1,
    "explanation": "This is a BYOD (Bring Your Own Device) model because employees use their personal smartphones. It is managed using Mobile Device Management (MDM) software, which allows segmenting and securing corporate data on the device without controlling the user's personal files."
  },
  {
    "id": 57,
    "section": "S12",
    "question": "Before a critical database migration can take place, the change management policy requires the database administrator to document the exact steps needed to revert the system to its original state if the migration fails. What is this plan called?",
    "options": [
      "Business Impact Analysis (BIA)",
      "Backout Plan (Rollback Plan)",
      "Standard Operating Procedure (SOP)",
      "Disaster Recovery Runbook"
    ],
    "answer": 1,
    "explanation": "A Backout Plan (or rollback plan) defines the exact procedures to revert a change and restore the system to its previous stable state if the change fails or causes unexpected downtime during implementation."
  },
  {
    "id": 58,
    "section": "S12",
    "question": "An organization wants to retire 50 old servers that stored sensitive patient data. Which sanitization method should they use if they want to reuse the hard drives for non-sensitive data, and which if they want to ensure no possibility of recovery?",
    "options": [
      "Degaussing for reuse; incineration for destruction.",
      "Purging (or overwriting/wiping) for reuse; physical destruction (shredding/incineration) for absolute security.",
      "Formatting for reuse; degaussing for destruction.",
      "Re-partitioning for reuse; encrypting for destruction."
    ],
    "answer": 1,
    "explanation": "Purging (such as cryptographically wiping or overwriting the drive multiple times) sanitizes the drive, making data recovery impossible while allowing the physical drive to be reused. Physical destruction (shredding, incineration, degaussing for magnetic drives) destroys the drive entirely, ensuring no data can ever be recovered."
  },
  {
    "id": 59,
    "section": "S12",
    "question": "Which organizational body is responsible for reviewing, evaluating, and either approving or denying proposed changes to critical production systems in an enterprise?",
    "options": [
      "Board of Directors",
      "Change Advisory Board (CAB)",
      "Policy Decision Point (PDP)",
      "Incident Response Team (IRT)"
    ],
    "answer": 1,
    "explanation": "The Change Advisory Board (CAB) is a committee of stakeholders and technical experts responsible for reviewing and assessing change requests for risk, impact, and scheduling, and either approving or denying them."
  },
  {
    "id": 60,
    "section": "S12",
    "question": "A procurement officer is purchasing 500 new laptops for an enterprise. They send a document to a verified vendor that outlines the technical specifications and is a legally binding promise to pay once the laptops are delivered. What is this document called?",
    "options": [
      "Service Level Agreement (SLA)",
      "Purchase Order (PO)",
      "Master Service Agreement (MSA)",
      "Request for Proposal (RFP)"
    ],
    "answer": 1,
    "explanation": "A Purchase Order (PO) is a formal document issued by a buyer to a seller, indicating types, quantities, and agreed prices for products or services. It constitutes a legally binding promise to pay upon delivery."
  }
];