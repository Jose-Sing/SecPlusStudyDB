const EXAM_QUESTIONS = [
  {
    "id": 1,
    "section": "S2",
    "question": "A financial institution is implementing a new customer service portal where agents must verify a caller's identity using their Social Security Number (SSN). However, to comply with strict privacy regulations, the agents should never see the full nine digits on their screens, while still being able to verify the caller. Which of the following is the BEST technique to achieve this?",
    "options": [
      "Data Masking",
      "Full Disk Encryption",
      "Hashing",
      "Digital Signatures"
    ],
    "answer": 0,
    "explanation": "Data Masking (Option A) is the best technique because it obscures specific data (like showing only the last 4 digits of an SSN) while keeping the application usable for authorized agents. Hashing (Option C) verifies integrity, not partial viewing. Encryption (Option B) hides data entirely until decrypted. Digital signatures (Option D) provide non-repudiation."
  },
  {
    "id": 2,
    "section": "S2",
    "question": "The IT director of a hospital wants to ensure that patients' electronic health records (EHR) cannot be altered by unauthorized malware while stored on the central servers. The solution must immediately flag any unauthorized modifications to the file's contents. Which of the following is the FIRST technology the director should implement?",
    "options": [
      "Hashing",
      "Encryption",
      "Server Redundancy",
      "Checksums"
    ],
    "answer": 0,
    "explanation": "Hashing (Option A) creates a digital fingerprint of the data. Any modification to the original data produces a completely different hash digest, immediately signaling tampering, which is the primary tool for enforcing data integrity at rest. Checksums (Option D) are typically used for integrity during data transmission, not at rest. Encryption (Option B) provides confidentiality, and Redundancy (Option C) provides availability."
  },
  {
    "id": 3,
    "section": "S2",
    "question": "A global e-commerce company operates its main database from a single datacenter in London. During a critical sales event, a power failure takes the datacenter offline, rendering the database inaccessible for 4 hours. Which of the following is the BEST approach to prevent this specific issue from causing future downtime?",
    "options": [
      "Implement data and power redundancy across multiple locations.",
      "Deploy fail-safe electronic locks to ensure staff can access generators.",
      "Configure automated data masking on all active database instances.",
      "Enable non-repudiation mechanisms for all database transactions."
    ],
    "answer": 0,
    "explanation": "Availability is primarily achieved through redundancy (Option A). By duplicating critical components (power) and functions (data) across multiple locations, the system can failover without service interruption. Fail-safe locks (Option B) address human safety during emergencies, not system availability. Data masking (Option C) addresses confidentiality, and non-repudiation (Option D) addresses accountability."
  },
  {
    "id": 4,
    "section": "S2",
    "question": "A defense contractor must securely send sensitive design documents to a government agency. The agency requires mathematical proof that the documents were not altered in transit and a guarantee of the sender's identity so the sender cannot later deny transmitting them. Which of the following cryptographic concepts BEST satisfies both requirements?",
    "options": [
      "Digital Signatures",
      "Symmetric Encryption",
      "Hashing",
      "Checksums"
    ],
    "answer": 0,
    "explanation": "Digital Signatures (Option A) combine hashing (for integrity) and asymmetric encryption (encrypting the hash with the sender's private key for authenticity), providing non-repudiation. Symmetric Encryption (Option B) provides confidentiality, not non-repudiation. Hashing (Option C) and Checksums (Option D) only provide integrity, not authenticity or non-repudiation."
  },
  {
    "id": 5,
    "section": "S2",
    "question": "An IT manager is classifying the organization's security controls. They recently installed a biometric fingerprint scanner on the server room door and implemented a mandatory quarterly security awareness training program for all employees. Under which control categories do these fall, respectively?",
    "options": [
      "Physical and Operational",
      "Technical and Managerial",
      "Physical and Technical",
      "Operational and Managerial"
    ],
    "answer": 0,
    "explanation": "The biometric scanner is a tangible real-world barrier (Physical control). The security awareness training is a day-to-day procedure governed by people (Operational control). Therefore, Option A is correct. Technical controls involve hardware/software mechanisms like firewalls, and Managerial controls involve strategic governance."
  },
  {
    "id": 6,
    "section": "S2",
    "question": "During a network architecture review, a security engineer recommends placing a firewall at the network perimeter to block unauthorized incoming traffic, and an Intrusion Detection System (IDS) inside the network to alert on malicious activity that bypasses the firewall. Based on their functional roles, how should these two controls be classified respectively?",
    "options": [
      "Preventative and Detective",
      "Deterrent and Corrective",
      "Directive and Compensating",
      "Preventative and Corrective"
    ],
    "answer": 0,
    "explanation": "A firewall blocks threats before they occur, making it a Preventative control. An IDS detects and alerts on malicious activity as it occurs, making it a Detective control. Option A is correct. Corrective controls mitigate damage after an incident (like antivirus removal), and Deterrent controls discourage attackers (like warning signs)."
  },
  {
    "id": 7,
    "section": "S2",
    "question": "An organization is migrating its traditional perimeter-based network to a Zero Trust architecture. When a user requests access to an internal application from a remote location, which component is responsible for evaluating the user's identity, behavior, and device health to make the access decision?",
    "options": [
      "Control Plane",
      "Data Plane",
      "Subject/System",
      "Policy Enforcement Point"
    ],
    "answer": 0,
    "explanation": "In Zero Trust, the Control Plane (Option A) is the overarching framework (Policy Engine) responsible for defining, managing, and making the decision to grant or deny access based on real-time context. The Data Plane (Option B) executes that decision via the Policy Enforcement Point (Option D)."
  },
  {
    "id": 8,
    "section": "S2",
    "question": "A newly hired Chief Information Security Officer (CISO) wants to understand the organization's current security posture compared to the ISO 27001 standard. They hire an external firm to evaluate the infrastructure and identify missing controls. What is the PRIMARY output of this evaluation process?",
    "options": [
      "Plan of Action and Milestones (POA&M)",
      "Zero Trust Architecture",
      "System Accounting Log",
      "Threat Vector Analysis"
    ],
    "answer": 0,
    "explanation": "A Gap Analysis compares the current posture to a desired state, and its primary output is typically documented in a Plan of Action and Milestones (POA&M) (Option A), which prioritizes fixes. Zero Trust (Option B) is an architecture model. Accounting logs (Option C) track user actions. Threat Vector Analysis (Option D) looks at attack paths, not standard compliance gaps."
  },
  {
    "id": 9,
    "section": "S2",
    "question": "An employee attempts to access a restricted financial database. The system first prompts for a username and password, then sends a one-time passcode (OTP) to the employee's corporate smartphone. Once verified, the system checks the employee's role and permits them to read, but not modify, the database records. Which component of the AAA model enforces the read-only restriction?",
    "options": [
      "Authorization",
      "Authentication",
      "Accounting",
      "Auditing"
    ],
    "answer": 0,
    "explanation": "Authorization (Option A) determines what actions or resources an already-authenticated user is permitted to access or perform (e.g., read-only vs. modify). Authentication (Option B) verifies the identity (username/password + OTP). Accounting/Auditing (Option C/D) logs the actions for review later."
  },
  {
    "id": 10,
    "section": "S2",
    "question": "A regional bank operates in a hurricane-prone area. While the bank cannot stop a hurricane from striking, it has failed to install backup power generators for its primary datacenter. In risk management terminology, what does the lack of backup generators represent?",
    "options": [
      "Vulnerability",
      "Threat",
      "Risk",
      "Exploit"
    ],
    "answer": 0,
    "explanation": "A Vulnerability (Option A) is a weakness or flaw in the design or implementation (like lacking backup power) that is internal and controllable. The hurricane is the Threat (Option B), which is external and uncontrollable. The intersection of the two is the Risk (Option C)."
  },
  {
    "id": 11,
    "section": "S2",
    "question": "A software development team is transmitting large log files over a reliable internal network for archiving. They need a fast way to verify that the files did not suffer from accidental corruption during transmission. They do not require cryptographic proof against malicious tampering. Which of the following is the MOST efficient mechanism to use?",
    "options": [
      "Checksums",
      "Digital Signatures",
      "Symmetric Encryption",
      "Multi-Factor Authentication"
    ],
    "answer": 0,
    "explanation": "Checksums (Option A) are a simple, fast integrity verification method used during data transmission to detect accidental corruption. While Hashing or Digital Signatures (Option B) provide stronger cryptographic proof against malicious tampering, they are computationally heavier and unnecessary here. Encryption (Option C) provides confidentiality."
  },
  {
    "id": 12,
    "section": "S2",
    "question": "An organization requires users to authenticate using a smart card and a PIN. A security audit recommends adding a fingerprint scan to the login process to increase security. If implemented, what type of authentication does this represent?",
    "options": [
      "Multi-Factor Authentication (MFA)",
      "Single Sign-On (SSO)",
      "Zero Trust Data Plane",
      "Implicit Deny"
    ],
    "answer": 0,
    "explanation": "Using a smart card (possession), a PIN (knowledge), and a fingerprint (inherence) involves three independent verification factors, making it Multi-Factor Authentication (MFA) (Option A). SSO (Option B) allows one login for multiple apps. Zero Trust (Option C) is a broader architecture model."
  },
  {
    "id": 13,
    "section": "S2",
    "question": "During a routine audit, a compliance officer reviews the logs generated by a SIEM system to trace exactly which administrator deleted a critical configuration file the previous night. What security function does the SIEM provide in this scenario?",
    "options": [
      "Accounting",
      "Authorization",
      "Authentication",
      "Availability"
    ],
    "answer": 0,
    "explanation": "Accounting (Option A) is the monitoring and logging of all user actions to provide an audit trail and user accountability. A SIEM is a core tool for this function. Authorization (Option B) grants permissions, Authentication (Option C) verifies identity, and Availability (Option D) ensures uptime."
  },
  {
    "id": 14,
    "section": "S2",
    "question": "A corporate executive is traveling internationally and connects to a hotel's public Wi-Fi. To ensure that their emails and web traffic cannot be intercepted and read by other guests on the same network, which security concept must be applied to the data in transit?",
    "options": [
      "Encryption",
      "Hashing",
      "Redundancy",
      "Data Masking"
    ],
    "answer": 0,
    "explanation": "Encryption (Option A) is the process of converting plaintext into unreadable ciphertext, and is the primary method for ensuring the Confidentiality of data in transit against interception. Hashing (Option B) provides integrity. Redundancy (Option C) provides availability. Data Masking (Option D) obscures specific database fields, not network traffic."
  },
  {
    "id": 15,
    "section": "S2",
    "question": "An e-commerce company experiences a severe data breach because they were using outdated firewall rules. In response, they hire a managed security service provider (MSSP) to assume all liability and operational responsibility for their perimeter security. What risk management strategy has the company adopted?",
    "options": [
      "Transfer",
      "Mitigate",
      "Accept",
      "Avoid"
    ],
    "answer": 0,
    "explanation": "Risk Transfer (Option A) involves shifting the financial or operational burden of a risk to a third party, such as purchasing insurance or outsourcing to an MSSP. Mitigation (Option B) would be fixing the rules themselves. Acceptance (Option C) would be ignoring the risk. Avoidance (Option D) would be shutting down the e-commerce site entirely."
  },
  {
    "id": 16,
    "section": "S3",
    "question": "A global manufacturing company notices that an unknown entity has been silently extracting proprietary blueprints from their R&D servers over the past eight months without causing any service disruptions. The security team discovers custom, highly sophisticated malware used in the breach. Which of the following threat actors is MOST likely responsible for this attack?",
    "options": [
      "Nation-State Actor",
      "Hacktivist",
      "Unskilled Attacker",
      "Insider Threat"
    ],
    "answer": 0,
    "explanation": "Nation-State actors (Option A) are characterized by their high sophistication, resources, and patience, often engaging in espionage to steal intellectual property over extended periods (APT behavior). Hacktivists (Option B) seek public attention for ideological causes, not silent data theft. Unskilled attackers (Option C) lack the capability for custom malware. An Insider Threat (Option D) typically has legitimate access and wouldn't need custom malware to bypass perimeter defenses."
  },
  {
    "id": 17,
    "section": "S3",
    "question": "The IT department discovers that several marketing employees have been storing sensitive client data in a personal, unapproved cloud storage application because the official corporate VPN is too slow. What security risk does this BEST describe?",
    "options": [
      "Shadow IT",
      "BYOD",
      "Insider Threat",
      "Advanced Persistent Threat"
    ],
    "answer": 0,
    "explanation": "Shadow IT (Option A) refers to the use of IT systems or services without explicit organizational approval, often driven by a desire for convenience when official processes are restrictive. BYOD (Option B) is the practice of using personal devices, not necessarily unauthorized cloud services. While these employees act as unintentional Insider Threats (Option C), Shadow IT is the specific term for this unapproved IT usage."
  },
  {
    "id": 18,
    "section": "S3",
    "question": "A security analyst is reviewing a recent incident where a group defaced the homepage of an oil company to display environmental protest messages. The attackers used a publicly available script to exploit a known vulnerability. What is the PRIMARY motivation of these attackers?",
    "options": [
      "Philosophical / Political Beliefs",
      "Financial Gain",
      "Service Disruption",
      "Revenge"
    ],
    "answer": 0,
    "explanation": "Hacktivists are motivated by philosophical or political beliefs (Option A), using techniques like website defacement to promote their ideological agendas or protest perceived injustices. While they caused some disruption, their primary motivation is not Service Disruption (Option C) for its own sake, nor Financial Gain (Option B) or Revenge (Option D)."
  },
  {
    "id": 19,
    "section": "S3",
    "question": "During a forensic investigation, the incident response team identifies that the malware used in a recent attack against their financial institution was specifically designed to mimic the well-known Tactics, Techniques, and Procedures (TTPs) of a North Korean threat group. However, intelligence reveals the attack actually originated from a Russian syndicate. What type of attack does this represent?",
    "options": [
      "False Flag Attack",
      "Advanced Persistent Threat",
      "Doxxing",
      "Evil Twin"
    ],
    "answer": 0,
    "explanation": "A False Flag Attack (Option A) is deliberately orchestrated to appear as if it originated from a different source or threat actor, to mislead investigators and misattribute the attack. APT (Option B) refers to the prolonged nature of an attack, not the misattribution. Doxxing (Option C) is the release of private info, and Evil Twin (Option D) is a rogue Wi-Fi access point."
  },
  {
    "id": 20,
    "section": "S3",
    "question": "A hospital administrator wants to detect if any of their clinical staff are snooping into the medical records of high-profile celebrities. They create a dummy patient record for a famous actor, filled with fake data and no legitimate clinical use, and configure the system to alert if this record is accessed. What deception technique has the administrator implemented?",
    "options": [
      "Honeytoken",
      "Honeypot",
      "Honeynet",
      "Bogus DNS entries"
    ],
    "answer": 0,
    "explanation": "A Honeytoken (Option A) is a fake piece of data or resource—such as a dummy database record—with no legitimate use. Any interaction with it signals a likely breach or unauthorized access, making it effective for detecting insider threats. A Honeypot (Option B) is an entire decoy system or server, not just a single data record."
  },
  {
    "id": 21,
    "section": "S3",
    "question": "Which of the following is the BEST strategy for an organization to reduce its attack surface?",
    "options": [
      "Uninstalling unnecessary software and disabling unused network protocols.",
      "Deploying a honeynet in a screened subnet to monitor attacker TTPs.",
      "Implementing an acceptable use policy (AUP) for all employees.",
      "Creating a false flag operation to misdirect potential attackers."
    ],
    "answer": 0,
    "explanation": "The attack surface is the sum of all potential entry points. Uninstalling unnecessary software and disabling unused protocols (Option A) directly reduces these entry points. Deploying a honeynet (Option B) studies attackers but doesn't reduce the actual attack surface of the production environment. An AUP (Option C) is a directive control, not a direct reduction of technical attack surface."
  },
  {
    "id": 22,
    "section": "S3",
    "question": "An attacker sits in a coffee shop and sets up a rogue wireless access point with the exact same SSID as the coffee shop's legitimate public Wi-Fi. When customers connect to the attacker's network, the attacker intercepts their credentials. What type of attack is this?",
    "options": [
      "Evil Twin",
      "BlueBorne",
      "Vishing",
      "Shadow IT"
    ],
    "answer": 0,
    "explanation": "An Evil Twin (Option A) is a rogue wireless access point set up to mimic a legitimate Wi-Fi network to intercept and capture user traffic. BlueBorne (Option B) targets Bluetooth vulnerabilities. Vishing (Option C) uses voice calls to extract information, and Shadow IT (Option D) involves unapproved corporate IT systems."
  },
  {
    "id": 23,
    "section": "S3",
    "question": "A security operations center (SOC) detects that an attacker has gained access to a corporate workstation by dropping an infected USB drive in the company parking lot, which an employee then plugged into their laptop. In this scenario, what does the USB drive represent?",
    "options": [
      "Threat Vector",
      "Threat Actor",
      "Attack Surface",
      "Vulnerability"
    ],
    "answer": 0,
    "explanation": "A Threat Vector (Option A) is the pathway or means through which an attacker gains unauthorized access or delivers a malicious payload (the \"how\"). The Threat Actor (Option B) is the person who dropped the drive. The Attack Surface (Option C) includes the workstation's USB ports, and the Vulnerability (Option D) is the lack of policy or technical control preventing USB usage."
  },
  {
    "id": 24,
    "section": "S3",
    "question": "Which of the following threat actors is PRIMARILY motivated by financial gain, operates with a highly structured hierarchy, and often utilizes advanced tools like custom ransomware?",
    "options": [
      "Organized Crime",
      "Nation-State Actor",
      "Hacktivist",
      "Script Kiddie"
    ],
    "answer": 0,
    "explanation": "Organized Crime (cybercrime) groups (Option A) conduct attacks primarily for financial gain and operate with defined roles and advanced tools. Nation-State actors (Option B) are typically motivated by espionage or geopolitical objectives. Hacktivists (Option C) are motivated by ideology, and Script Kiddies (Option D) lack advanced custom tools."
  },
  {
    "id": 25,
    "section": "S3",
    "question": "A disgruntled former IT administrator uses their still-active credentials to log into the corporate network and delete critical customer databases out of revenge. Which threat actor attribute makes this attack particularly dangerous compared to an external attacker?",
    "options": [
      "Intimate knowledge of the infrastructure and existing access.",
      "High level of funding and sophisticated zero-day exploits.",
      "Ability to remain undetected for years as an Advanced Persistent Threat.",
      "Use of hacktivism techniques like website defacement."
    ],
    "answer": 0,
    "explanation": "An Insider Threat (Option A) is dangerous because they have legitimate access and intimate knowledge of the organization's infrastructure, systems, and security procedures, allowing them to bypass perimeter defenses easily. They do not necessarily have high funding (Option B) or operate as an APT (Option C)."
  },
  {
    "id": 26,
    "section": "S3",
    "question": "A cyber research firm observes an attacker targeting Bluetooth-enabled mobile devices in a crowded airport. The attacker successfully takes over several devices and spreads malware without the device owners ever clicking a link, downloading a file, or pairing with the attacker's device. What specific vulnerability is MOST likely being exploited?",
    "options": [
      "BlueBorne",
      "BlueSmack",
      "Evil Twin",
      "Doxxing"
    ],
    "answer": 0,
    "explanation": "BlueBorne (Option A) is a set of Bluetooth vulnerabilities that allows an attacker to take over devices and spread malware without any user interaction or pairing required. BlueSmack (Option B) is a Denial of Service attack against Bluetooth, not a takeover/malware spread. Evil Twin (Option C) targets Wi-Fi."
  },
  {
    "id": 27,
    "section": "S3",
    "question": "To improve their defensive posture, a security team studies the high-level goals, general methods, and specific step-by-step implementations used by a known ransomware gang. What cybersecurity concept is the team analyzing?",
    "options": [
      "Tactics, Techniques, and Procedures (TTPs)",
      "Threat Vectors",
      "Plan of Action and Milestones (POA&M)",
      "Zero Trust Control Plane"
    ],
    "answer": 0,
    "explanation": "TTPs (Option A) refer to the specific methods, behaviors, and patterns of activity associated with a threat actor. Tactics are the high-level goals, Techniques are the general methods, and Procedures are the step-by-step implementations. Threat Vectors (Option B) are just the pathways of attack, not the full behavioral profile."
  },
  {
    "id": 28,
    "section": "S3",
    "question": "An organization wants to study the methods of attackers who attempt to breach their web servers. They deploy a decoy web server in a screened subnet, loaded with fake data and vulnerable services, specifically designed to be compromised so the security team can log the attackers' actions. What type of control has been deployed?",
    "options": [
      "Honeypot",
      "Honeyfile",
      "Honeynet",
      "Compensating Control"
    ],
    "answer": 0,
    "explanation": "A Honeypot (Option A) is a decoy system or server configured to appear vulnerable to attract attackers, allowing defenders to log and study their TTPs. A Honeyfile (Option B) is just a single file. A Honeynet (Option C) is a network of multiple honeypots simulating an entire environment, not just a single web server."
  },
  {
    "id": 29,
    "section": "S3",
    "question": "An attacker gathers the personal home address, private phone numbers, and family details of a company's CEO and publishes them on a public forum, urging followers to harass the CEO to protest the company's environmental policies. What specific technique is the attacker using?",
    "options": [
      "Doxxing",
      "Vishing",
      "False Flag",
      "BlueSmack"
    ],
    "answer": 0,
    "explanation": "Doxxing (Option A) is the public release of private personal information about an individual with the intent to expose them or incite real-world action against them, frequently used by hacktivists. Vishing (Option B) is voice phishing. False Flag (Option C) is misattribution."
  },
  {
    "id": 30,
    "section": "S3",
    "question": "A teenager downloads a pre-compiled DDoS tool from a hacker forum and uses it to take down their school's website to avoid taking an online exam. The teenager does not understand how the tool's code actually works. Which category BEST describes this threat actor?",
    "options": [
      "Unskilled Attacker",
      "Hacktivist",
      "Insider Threat",
      "Advanced Persistent Threat"
    ],
    "answer": 0,
    "explanation": "An Unskilled Attacker or Script Kiddie (Option A) is an individual with limited technical knowledge who relies on pre-made scripts and tools developed by others without understanding the underlying principles. They are often motivated by thrill or personal convenience rather than ideology (Hacktivist - Option B)."
  },
  {
    "id": 31,
    "section": "S4",
    "question": "A data center manager wants to install a physical barrier around the building's main entrance to prevent a truck filled with explosives from ramming through the glass facade. Which of the following is the BEST control to implement?",
    "options": [
      "Bollards",
      "Fencing",
      "Access Control Vestibule",
      "Pressure Sensors"
    ],
    "answer": 0,
    "explanation": "Bollards (Option A) are sturdy vertical posts specifically designed to control or prevent vehicular access and stop ramming attacks. Fencing (Option B) controls people, not heavy vehicles. An Access Control Vestibule (Option C) prevents tailgating of individuals, and Pressure Sensors (Option D) detect presence but don't physically stop vehicles."
  },
  {
    "id": 32,
    "section": "S4",
    "question": "An employee holds the door open for a person carrying two large boxes, assuming they are a delivery driver. The person does not scan a badge but thanks the employee and enters the secure facility. What type of physical security breach has occurred?",
    "options": [
      "Piggybacking",
      "Tailgating",
      "Shoulder Surfing",
      "Baiting"
    ],
    "answer": 0,
    "explanation": "Piggybacking (Option A) is an unauthorized entry technique where an authorized individual intentionally allows an unauthorized person to pass alongside them, often through manipulation (like carrying boxes). Tailgating (Option B) is uncooperative, where the unauthorized person sneaks in without the authorized person's consent. Shoulder Surfing (Option C) and Baiting (Option D) are unrelated to physical entry through a door."
  },
  {
    "id": 33,
    "section": "S4",
    "question": "A high-security government facility relies on retinal scanners for access to its most sensitive rooms. The security director complains that the system is incorrectly denying access to authorized executives on a daily basis, causing frustration. To resolve this without installing a different system, which metric should the security team adjust?",
    "options": [
      "Decrease the False Rejection Rate (FRR) by lowering the system's sensitivity.",
      "Decrease the False Acceptance Rate (FAR) by increasing the system's sensitivity.",
      "Increase the Crossover Error Rate (CER) to maximum.",
      "Replace the retinal scanner with a less secure fingerprint scanner."
    ],
    "answer": 0,
    "explanation": "The system is too strict, incorrectly denying authorized users, which is a high False Rejection Rate (FRR). The team should lower the sensitivity to decrease the FRR (Option A). Decreasing FAR (Option B) makes it even stricter. CER (Option C) is the balance point (lower is better). Option D involves hardware replacement, which violates the constraint."
  },
  {
    "id": 34,
    "section": "S4",
    "question": "A bank wants to detect intruders moving in the main vault after hours when all lights are completely turned off. Which type of sensor is the BEST choice for this specific environment?",
    "options": [
      "Infrared",
      "Microwave",
      "Ultrasonic",
      "Pressure"
    ],
    "answer": 0,
    "explanation": "Infrared sensors (Option A) detect changes in heat (infrared radiation) emitted by warm bodies, making them highly effective in low-light or dark environments. While Microwave and Ultrasonic (Options B, C) detect motion, they rely on reflection, and Infrared is the classic choice for dark environments detecting human heat. Pressure (Option D) requires the intruder to step on a specific spot."
  },
  {
    "id": 35,
    "section": "S4",
    "question": "An attacker uses a Flipper Zero to capture the unencrypted signal from a security guard's access badge as they walk past each other in the cafeteria. Later that night, the attacker uses the captured data to open the main server room door. What specific attack was executed?",
    "options": [
      "Access Badge Cloning",
      "BlueBorne",
      "Piggybacking",
      "Physical Brute Force"
    ],
    "answer": 0,
    "explanation": "Access Badge Cloning (Option A) involves capturing data from an RFID or NFC badge (often using tools like Flipper Zero) and copying it to impersonate the user. BlueBorne (Option B) targets Bluetooth vulnerabilities. Piggybacking (Option C) requires a cooperative authorized person. Physical Brute Force (Option D) involves breaking the door or lock."
  },
  {
    "id": 36,
    "section": "S4",
    "question": "A security engineer must design an entrance for a research laboratory that guarantees absolutely no more than one person can enter per badge swipe. Which of the following is the BEST solution?",
    "options": [
      "Access Control Vestibule",
      "Biometric Door Lock",
      "Security Guard",
      "PTZ Camera"
    ],
    "answer": 0,
    "explanation": "An Access Control Vestibule (Option A), formerly known as a mantrap, is a double-door system where only one door can be open at a time, physically preventing both piggybacking and tailgating. A biometric lock (Option B) or PTZ Camera (Option D) cannot physically prevent two people from walking through an open door. A security guard (Option C) can make mistakes."
  },
  {
    "id": 37,
    "section": "S4",
    "question": "When evaluating two different biometric fingerprint scanners for purchase, a security manager notices that Scanner A has a Crossover Error Rate (CER) of 1%, while Scanner B has a CER of 3%. What is the MOST accurate conclusion to draw from this data?",
    "options": [
      "Scanner A is more accurate and effective overall than Scanner B.",
      "Scanner B will have fewer false rejections than Scanner A.",
      "Scanner A will have a higher false acceptance rate than Scanner B.",
      "Both scanners are equally secure, but Scanner A is faster."
    ],
    "answer": 0,
    "explanation": "The Crossover Error Rate (CER) is the primary benchmark for measuring the overall effectiveness of a biometric system, and a lower CER indicates a better, more accurate system (Option A). Therefore, Scanner A (1%) is superior to Scanner B (3%). Options B, C, and D misinterpret how CER functions as an overall quality indicator."
  },
  {
    "id": 38,
    "section": "S4",
    "question": "During a penetration test, a red team member approaches a secure fence but realizes they cannot climb it because of barbed wire. Instead, they use bolt cutters to snip a hole through the chain-link mesh and crawl through. Which category of physical attack does this represent?",
    "options": [
      "Forcible Entry",
      "Tampering with Security Devices",
      "Confronting Security Personnel",
      "Piggybacking"
    ],
    "answer": 0,
    "explanation": "Cutting a fence with bolt cutters, breaking windows, or kicking doors are examples of Forcible Entry (Option A), a direct physical brute-force approach. Tampering with devices (Option B) involves disabling sensors or blinding cameras. Confronting personnel (Option C) and Piggybacking (Option D) involve human interaction."
  },
  {
    "id": 39,
    "section": "S4",
    "question": "To secure a remote, unstaffed electrical substation, the utility company needs a camera system that can monitor the perimeter, zoom in on license plates of suspicious vehicles, and follow individuals moving along the fence line, controlled from a central headquarters miles away. Which technology is required?",
    "options": [
      "PTZ Camera",
      "Fixed CCTV",
      "Infrared Sensor",
      "Cipher Lock"
    ],
    "answer": 0,
    "explanation": "Pan-Tilt-Zoom (PTZ) cameras (Option A) allow operators to remotely adjust the direction (pan/tilt) and magnification (zoom) in real-time, making them perfect for remote monitoring. Fixed CCTV (Option B) cannot move. Sensors (Option C) and Locks (Option D) do not provide video capabilities."
  },
  {
    "id": 40,
    "section": "S4",
    "question": "A hospital wants to upgrade its internal pharmacy door locks so that they do not rely on electrical power, batteries, or network connectivity, but still require a specific multi-digit combination to open. Which of the following is the BEST option?",
    "options": [
      "Cipher Lock",
      "Wireless RFID Lock",
      "Biometric Scanner",
      "Electronic Access System"
    ],
    "answer": 0,
    "explanation": "A Cipher Lock (Option A) is a mechanical push-button combination lock that does not require any electronic dependency (power or network). Wireless, Biometric, and Electronic systems (Options B, C, D) all require electrical power or batteries to function."
  },
  {
    "id": 41,
    "section": "S4",
    "question": "An attacker wants to disable an outdoor security camera before breaking into a warehouse. They use a high-powered laser pointer aimed directly into the camera's lens from a distance to overload the image sensor. Which method is the attacker using to bypass the surveillance system?",
    "options": [
      "Blinding Sensors/Cameras",
      "Visual Obstruction",
      "Electromagnetic Interference (EMI)",
      "Acoustic Interference"
    ],
    "answer": 0,
    "explanation": "Using lasers or bright flashlights to overload the lens is known as Blinding Sensors/Cameras (Option A). Visual Obstruction (Option B) involves physically covering the lens with paint or tape. EMI (Option C) attacks the wireless signal. Acoustic Interference (Option D) targets microphones."
  },
  {
    "id": 42,
    "section": "S4",
    "question": "A corporate office implements a policy requiring all employees to use their RFID badge combined with a 4-digit PIN to open the main entrance door. Which of the following BEST describes the primary security benefit of this configuration over using just the badge?",
    "options": [
      "It mitigates the risk of an attacker using a cloned badge.",
      "It prevents tailgating during busy morning hours.",
      "It lowers the False Acceptance Rate (FAR) of the RFID reader.",
      "It provides non-repudiation for physical access logs."
    ],
    "answer": 0,
    "explanation": "Combining an RFID badge with a PIN implements Multi-Factor Authentication (MFA), meaning that even if an attacker successfully clones the badge (Option A), they cannot gain access without the PIN. It does not prevent tailgating (Option B) or affect FAR (Option C), nor does it provide strict non-repudiation (Option D) like a biometric or digital signature would."
  },
  {
    "id": 43,
    "section": "S4",
    "question": "An unauthorized person closely follows an employee through a secure door at a datacenter right before it latches shut. The employee never noticed the person behind them. What kind of physical security breach occurred?",
    "options": [
      "Tailgating",
      "Piggybacking",
      "Shoulder Surfing",
      "Bypassing"
    ],
    "answer": 0,
    "explanation": "Tailgating (Option A) occurs when an unauthorized person sneaks in closely behind an authorized person without their knowledge or consent. Piggybacking (Option B) happens when the authorized person intentionally allows the unauthorized person in."
  },
  {
    "id": 44,
    "section": "S4",
    "question": "An organization relies heavily on a wireless CCTV system to monitor its perimeter. An attacker parks a van nearby and uses a strong localized jamming device operating on the 2.4 GHz frequency, causing all cameras to lose connection with the monitoring station. Which method was used to bypass the surveillance?",
    "options": [
      "Electromagnetic Interference (EMI)",
      "Physical Environment Attack",
      "Acoustic Interference",
      "Blinding Cameras"
    ],
    "answer": 0,
    "explanation": "Jamming wireless signals (like Wi-Fi used by cameras) is a form of Electromagnetic Interference (EMI) (Option A). A physical environment attack (Option B) would involve cutting power cables. Acoustic interference (Option C) targets sound, and blinding (Option D) targets the lens."
  },
  {
    "id": 45,
    "section": "S4",
    "question": "Which of the following physical security controls is PRIMARILY designed to serve as a visual deterrent, define property boundaries, and delay unauthorized entry by forcing attackers to climb or cut?",
    "options": [
      "Fencing",
      "Bollards",
      "Access Control Vestibule",
      "Lighting"
    ],
    "answer": 0,
    "explanation": "Fencing (Option A) serves to define boundaries (visual deterrent), prevent people from entering easily, and delay their progress so guards can respond. Bollards (Option B) stop vehicles. Access control vestibules (Option C) stop tailgating/piggybacking at doors. Lighting (Option D) deters but does not physically delay entry."
  },
  {
    "id": 46,
    "section": "S5",
    "question": "An employee receives an email that appears to be from the company's CEO, stating: 'I am in a meeting and cannot be reached. I need you to urgently purchase $500 in gift cards for client presentations and email me the codes within the next 10 minutes.' The email threatens disciplinary action if the request is ignored. Which TWO motivational triggers is the attacker primarily exploiting?",
    "options": [
      "Authority and Urgency",
      "Social Proof and Scarcity",
      "Likability and Social Proof",
      "Fear and Scarcity"
    ],
    "answer": 0,
    "explanation": "The attacker impersonates the CEO (Authority) and imposes a strict 10-minute deadline (Urgency) to force the employee to bypass normal verification procedures (Option A). While fear is involved, Authority and Urgency are the most direct triggers used in CEO fraud/gift card scams."
  },
  {
    "id": 47,
    "section": "S5",
    "question": "A finance manager receives an email from what appears to be the company's primary vendor, requesting that all future payments be sent to a new bank account. The email uses the vendor's actual logo, formatting, and a display name of the vendor's CFO, but the actual sender address is slightly altered. What specific type of attack is occurring?",
    "options": [
      "Business Email Compromise (BEC)",
      "Whaling",
      "Watering Hole Attack",
      "Vishing"
    ],
    "answer": 0,
    "explanation": "Business Email Compromise (BEC) (Option A) targets finance or HR departments by spoofing or compromising executive/vendor emails to authorize fraudulent wire transfers or redirect payments. Whaling (Option B) targets high-level executives themselves, whereas BEC targets the finance staff who process payments. Watering hole (Option C) compromises websites."
  },
  {
    "id": 48,
    "section": "S5",
    "question": "A cybersecurity consultant is hired to test an organization's physical security. They dress up as an IT support technician, wait near the building entrance, and ask an employee to hold the door open because their hands are full with a stack of servers. What combination of techniques is the consultant using?",
    "options": [
      "Impersonation and Piggybacking",
      "Pretexting and Tailgating",
      "Brand Impersonation and Shoulder Surfing",
      "Baiting and Eavesdropping"
    ],
    "answer": 0,
    "explanation": "The consultant assumes a false identity (Impersonation) and intentionally convinces an authorized employee to let them through the secure door (Piggybacking). This combination (Option A) relies on social manipulation. Tailgating (Option B) would mean sneaking in without the employee's consent."
  },
  {
    "id": 49,
    "section": "S5",
    "question": "An attacker wants to compromise the executives of a defense contracting firm. Instead of sending phishing emails, the attacker discovers that many executives frequent a specific online golf forum. The attacker injects malware into the forum's login page and waits for the executives to visit. What type of attack is this?",
    "options": [
      "Watering Hole Attack",
      "Spear Phishing",
      "Typosquatting",
      "Diversion Theft"
    ],
    "answer": 0,
    "explanation": "A Watering Hole Attack (Option A) is a passive, targeted attack where the attacker compromises a trusted third-party website that the intended victims are known to visit, rather than attacking the victims directly. Spear Phishing (Option B) relies on email. Typosquatting (Option C) relies on misspelled domains."
  },
  {
    "id": 50,
    "section": "S5",
    "question": "Several employees report receiving automated phone calls claiming to be from the IRS, stating that a warrant will be issued for their arrest unless they immediately pay back taxes over the phone using a credit card. Which type of phishing attack is this?",
    "options": [
      "Vishing",
      "Smishing",
      "Spear Phishing",
      "Whaling"
    ],
    "answer": 0,
    "explanation": "Vishing (Voice Phishing) (Option A) is conducted over voice calls, impersonating trusted entities to extract information or money. Smishing (Option B) uses SMS text messages. Spear phishing (Option C) uses targeted emails."
  },
  {
    "id": 51,
    "section": "S5",
    "question": "A user intends to visit `linkedin.com` to check their messages but accidentally types `1inkedin.com`. They are taken to a fake website that looks identical to the real login page, which captures their credentials when they try to log in. What specific technique did the attacker use to register the malicious domain?",
    "options": [
      "Typosquatting",
      "Brand Impersonation",
      "Diversion Theft",
      "Watering Hole Attack"
    ],
    "answer": 0,
    "explanation": "Typosquatting (Option A), or URL hijacking, occurs when an attacker registers a domain name containing deliberate typographical errors that closely resemble a legitimate site, anticipating users will mistype the URL. While it involves Brand Impersonation (Option B) visually, Typosquatting is the specific technique used for the domain registration."
  },
  {
    "id": 52,
    "section": "S5",
    "question": "During the holiday season, an employee receives a text message stating: 'USPS: Your package is stuck at the distribution center. Click here to pay the $1.50 redelivery fee or it will be returned to sender.' Which type of attack is the employee experiencing?",
    "options": [
      "Smishing",
      "Vishing",
      "Hoax",
      "Baiting"
    ],
    "answer": 0,
    "explanation": "Smishing (SMS Phishing) (Option A) delivers malicious links or fraudulent requests via text messages. Vishing (Option B) involves voice calls. A Hoax (Option C) spreads false warnings (like viruses), and Baiting (Option D) typically involves leaving physical infected media like USB drives."
  },
  {
    "id": 53,
    "section": "S5",
    "question": "An attacker calls a company's help desk and claims to be a new remote employee who forgot their password. Before asking for a reset, the attacker spends ten minutes chatting with the help desk agent about their shared love of a local sports team, gaining the agent's trust. Which motivational trigger is the attacker primarily utilizing?",
    "options": [
      "Likability",
      "Authority",
      "Scarcity",
      "Social Proof"
    ],
    "answer": 0,
    "explanation": "Likability (Option A) is used when the attacker builds rapport, finds common ground, and creates a friendly interaction to lower the victim's guard so they are more willing to bypass security protocols. Authority (Option B) relies on power/seniority, not friendliness."
  },
  {
    "id": 54,
    "section": "S5",
    "question": "An organization wants to test its employees' susceptibility to social engineering. The security team sends a fake email offering a free iPad to the first 50 people who click a link. When employees click, they are redirected to a training video. What is the BEST description of this activity?",
    "options": [
      "Anti-Phishing Campaign",
      "Influence Campaign",
      "Pretexting Simulation",
      "Vulnerability Scan"
    ],
    "answer": 0,
    "explanation": "An Anti-Phishing Campaign (Option A) combines simulated phishing attacks with immediate remedial training for users who fall for the trick. It is a proactive security awareness tool. An Influence Campaign (Option B) is used to affect public perception (e.g., via social media)."
  },
  {
    "id": 55,
    "section": "S5",
    "question": "A nation-state actor creates hundreds of fake social media accounts to spread fabricated news stories about a political candidate right before an election. The attacker knows the stories are false but spreads them to manipulate voter behavior. What is this an example of?",
    "options": [
      "Disinformation",
      "Misinformation",
      "Hoax",
      "Typosquatting"
    ],
    "answer": 0,
    "explanation": "Disinformation (Option A) is the deliberate creation and distribution of false information with the intent to deceive and manipulate. Misinformation (Option B) is sharing false information without harmful intent (e.g., an honest mistake). A Hoax (Option C) is usually a viral prank or fake warning, not a coordinated political campaign."
  },
  {
    "id": 56,
    "section": "S5",
    "question": "An attacker researches a company's Chief Financial Officer (CFO) on social media, discovers the CFO is attending a specific conference in Paris, and sends a highly crafted email appearing to be from the conference organizers with an infected PDF itinerary attached. What specific type of attack is this?",
    "options": [
      "Whaling",
      "Watering Hole",
      "Vishing",
      "Dumpster Diving"
    ],
    "answer": 0,
    "explanation": "Whaling (Option A) is a specialized form of spear phishing that specifically targets high-value individuals, such as CEOs or CFOs. Because the attacker researched the specific executive and tailored the email, it fits whaling perfectly. Watering hole (Option B) compromises a website, not an email attachment."
  },
  {
    "id": 57,
    "section": "S5",
    "question": "An employee finds a brand-new USB drive lying on the floor in the company breakroom. The drive has a label that says 'Q3 Layoff Plans - CONFIDENTIAL'. The employee plugs the drive into their workstation to see who is getting fired, which secretly installs a backdoor. What type of social engineering attack is this?",
    "options": [
      "Baiting",
      "Pretexting",
      "Tailgating",
      "Phishing"
    ],
    "answer": 0,
    "explanation": "Baiting (Option A) involves leaving a physical device (like a USB drive) in a location where a target is likely to find it, relying on curiosity to trick the victim into connecting it to a system. Pretexting (Option B) involves a fabricated scenario or conversation. Phishing (Option D) is done via communication channels (email)."
  },
  {
    "id": 58,
    "section": "S5",
    "question": "An attacker calls a company's receptionist, poses as an IT support technician, and claims they need to verify the version of Windows running on the CEO's computer to 'prepare for an urgent mandatory update.' The receptionist provides the information. Which technique did the attacker use?",
    "options": [
      "Pretexting",
      "Smishing",
      "Shoulder Surfing",
      "Eavesdropping"
    ],
    "answer": 0,
    "explanation": "Pretexting (Option A) involves creating a fabricated scenario (the urgent update) to manipulate a target into divulging information. The attacker provides a believable context so the victim willingly complies. Smishing (Option B) is SMS phishing. Shoulder surfing (Option C) and Eavesdropping (Option D) are passive observation techniques."
  },
  {
    "id": 59,
    "section": "S5",
    "question": "An attacker obtains a list of valid customer emails from a leaked database. They send an email to all addresses claiming to be from a popular streaming service, asking users to update their credit card information. The email is not customized to the individual recipients. Which type of attack is this?",
    "options": [
      "Phishing",
      "Spear Phishing",
      "Whaling",
      "Watering Hole"
    ],
    "answer": 0,
    "explanation": "General Phishing (Option A) is untargeted (spray and pray) and mass-distributed. Because the attacker did not customize the emails for specific individuals beyond having their address, it is standard phishing. Spear Phishing (Option B) requires specific targeting and customization."
  },
  {
    "id": 60,
    "section": "S5",
    "question": "A security analyst recommends installing privacy screens on all monitors in the HR and Finance departments, as well as enforcing a 'clean desk' policy where no documents are left out overnight. Which TWO social engineering techniques are these controls PRIMARILY designed to mitigate?",
    "options": [
      "Shoulder Surfing and Dumpster Diving",
      "Eavesdropping and Vishing",
      "Shoulder Surfing and Piggybacking",
      "Dumpster Diving and Baiting"
    ],
    "answer": 0,
    "explanation": "Privacy screens mitigate Shoulder Surfing (observing screens to steal data). A clean desk policy (along with shredding) helps mitigate physical theft and Dumpster Diving (searching trash/desks for sensitive info). Therefore, Option A is correct. Neither control addresses voice calls (Vishing) or physical entry (Piggybacking)."
  },
  {
    "id": 61,
    "section": "S6",
    "question": "A network administrator notices that a legitimate background process (svchost.exe) is consuming an unusual amount of memory and establishing an outbound connection to an unknown IP address in Russia. The administrator stops the process, but it immediately restarts. An antivirus scan finds no malicious files on the hard drive. Which of the following malware techniques is MOST likely being used?",
    "options": [
      "Process Hollowing",
      "Macro Virus",
      "Hardware Keylogger",
      "Logic Bomb"
    ],
    "answer": 0,
    "explanation": "Process Hollowing (Option A) involves launching a legitimate process, clearing its memory, and injecting malicious code. This allows the malware to hide behind a trusted process name (like svchost.exe) and evade file-based antivirus since the malicious code runs in memory. A Macro Virus (Option B) infects documents. A Hardware Keylogger (Option C) is physical. A Logic Bomb (Option D) triggers on an event, but doesn't specifically explain the process impersonation and fileless evasion."
  },
  {
    "id": 62,
    "section": "S6",
    "question": "During a post-incident review, a forensics team discovers that an attacker gained initial access to a user's workstation by tricking them into opening a malicious PDF (Stage 1). The PDF then silently reached out to an external server and downloaded a Remote Access Trojan (RAT) to establish persistent control (Stage 2). Which term BEST describes the role of the malicious PDF in this attack model?",
    "options": [
      "Dropper",
      "Rootkit",
      "Botnet C2 Node",
      "Worm"
    ],
    "answer": 0,
    "explanation": "In a two-stage malware deployment, the initial lightweight payload designed to initiate or install the heavier, secondary malware (the RAT) is called a Dropper (Option A). A Rootkit (Option B) hides access. A C2 Node (Option C) controls botnets. A Worm (Option D) self-replicates without user action, whereas the user had to open the PDF."
  },
  {
    "id": 63,
    "section": "S6",
    "question": "A hospital's IT department is dealing with a severe malware infection. The malware spread to 500 computers across three different network segments within 15 minutes, causing significant network congestion. The security logs confirm that no users interacted with or clicked on any malicious links or files during the time of infection. What type of malware is this?",
    "options": [
      "Worm",
      "Trojan",
      "Virus",
      "Spyware"
    ],
    "answer": 0,
    "explanation": "A Worm (Option A) is malware that self-replicates and spreads rapidly across networks by exploiting vulnerabilities without requiring any user interaction. A Trojan (Option B) disguised as legitimate software requires user installation. A Virus (Option C) requires a user action (like opening a file) to execute and spread. Spyware (Option D) monitors activity."
  },
  {
    "id": 64,
    "section": "S6",
    "question": "A disgruntled employee writes a script that will delete the entire customer database if the employee's username is removed from the active directory. Three months after the employee is fired and their account is deleted, the database is wiped. What type of malicious code was used?",
    "options": [
      "Logic Bomb",
      "Ransomware",
      "Polymorphic Virus",
      "Rootkit"
    ],
    "answer": 0,
    "explanation": "A Logic Bomb (Option A) is malicious code inserted into a system that remains dormant until specific trigger conditions are met (in this case, the deletion of the user account). Ransomware (Option B) encrypts for financial gain. A Polymorphic Virus (Option C) changes its signature to evade detection. A Rootkit (Option D) provides undetected administrative access."
  },
  {
    "id": 65,
    "section": "S6",
    "question": "An attacker wants to compromise a secure server that relies on a traditional signature-based antivirus. To bypass the AV, the attacker uses a malware strain that encrypts its payload and changes its decryption module every single time it infects a new file. What type of virus is the attacker utilizing?",
    "options": [
      "Polymorphic",
      "Metamorphic",
      "Multipartite",
      "Armored"
    ],
    "answer": 0,
    "explanation": "A Polymorphic virus (Option A) changes its decryption module (or signature) each time it executes, making it difficult for signature-based AV to detect. A Metamorphic virus (Option B) is more advanced and rewrites its entire code, not just the decryption module. A Multipartite virus (Option C) infects both boot sectors and files. An Armored virus (Option D) uses obfuscation to stop reverse-engineering."
  },
  {
    "id": 66,
    "section": "S6",
    "question": "An organization is hit by a massive Distributed Denial of Service (DDoS) attack. The security team traces the attack traffic and discovers it is originating from thousands of compromised IoT security cameras located around the world. What is the overarching term for this network of compromised devices?",
    "options": [
      "Botnet",
      "Command and Control (C2) Node",
      "Fileless Malware",
      "Zombie"
    ],
    "answer": 0,
    "explanation": "A Botnet (Option A) is the entire network of compromised devices (zombies) controlled remotely by an attacker to perform coordinated actions like DDoS attacks. The C2 Node (Option B) is the server controlling them. Fileless malware (Option C) operates in memory. A Zombie (Option D) refers to a single compromised device within the botnet."
  },
  {
    "id": 67,
    "section": "S6",
    "question": "A user downloads what appears to be a free system optimization tool from a third-party website. The tool successfully cleans up temporary files, but in the background, it also silently installs a keylogger and opens a persistent remote connection for an attacker. Which type of malware did the user install?",
    "options": [
      "Trojan",
      "Worm",
      "Logic Bomb",
      "Ransomware"
    ],
    "answer": 0,
    "explanation": "A Trojan (Option A) is malware disguised as legitimate or desirable software (the optimization tool) that performs a hidden malicious function in the background. It relies on the user to willingly install it. A Worm (Option B) spreads automatically. A Logic Bomb (Option C) waits for a trigger. Ransomware (Option D) encrypts files."
  },
  {
    "id": 68,
    "section": "S6",
    "question": "An advanced persistent threat (APT) infiltrates a corporate network. Instead of downloading custom malware executables that might be caught by the intrusion detection system, the attackers exclusively use built-in Windows administration tools like PowerShell and WMI to move laterally and exfiltrate data. What attack strategy are they employing?",
    "options": [
      "Living off the Land (LotL)",
      "Process Hollowing",
      "DLL Injection",
      "Two-Stage Deployment"
    ],
    "answer": 0,
    "explanation": "Living off the Land (LotL) (Option A) is a strategy where attackers use legitimate, built-in system tools (like PowerShell) to conduct malicious activities, helping them blend into normal administrative behavior and evade detection. Process Hollowing (Option B) and DLL Injection (Option C) are specific memory injection techniques. Two-stage deployment (Option D) involves downloading external payloads."
  },
  {
    "id": 69,
    "section": "S6",
    "question": "A systems administrator suspects that a server has been compromised. Despite running multiple enterprise antivirus scans from within the running Windows operating system, no threats are detected. However, network logs show the server communicating with a known malicious IP at the kernel level (Ring 0). Which malware type is specifically designed to hide at this depth?",
    "options": [
      "Rootkit",
      "Spyware",
      "Boot Sector Virus",
      "Bloatware"
    ],
    "answer": 0,
    "explanation": "A Rootkit (Option A) is designed to gain administrative or kernel-level (Ring 0) control while remaining completely undetected by the operating system and traditional AV tools running on top of that OS. Spyware (Option B) monitors user activity at the application level. Boot Sector Viruses (Option C) infect the MBR, not necessarily the running kernel. Bloatware (Option D) is unwanted, non-malicious software."
  },
  {
    "id": 70,
    "section": "S6",
    "question": "Employees at a manufacturing company arrive at work on Monday to find that they cannot open any Word documents or PDFs. Their desktop backgrounds have been changed to a message demanding $50,000 in Bitcoin for the decryption key. What is the FIRST action the IT security team should take?",
    "options": [
      "Disconnect the infected systems from the network.",
      "Pay the ransom to minimize downtime.",
      "Restore the files from the weekend backup.",
      "Run an antivirus scan to remove the malware."
    ],
    "answer": 0,
    "explanation": "In a Ransomware attack, the absolute FIRST step upon discovery is to disconnect/isolate the infected systems from the network (Option A) to prevent the malware from spreading and encrypting shared network drives. Paying the ransom (Option B) is discouraged. Restoring from backups (Option C) and removing the malware (Option D) happen during the eradication and recovery phases, after containment."
  },
  {
    "id": 71,
    "section": "S6",
    "question": "An attacker discovers that a company's web server has not been patched against a newly published vulnerability. The attacker sends a crafted malicious packet to the server, exploiting the vulnerability to gain a remote shell. In this scenario, what does the unpatched vulnerability represent?",
    "options": [
      "Threat Vector",
      "Attack Vector",
      "Payload",
      "Dropper"
    ],
    "answer": 0,
    "explanation": "The specific weakness or vulnerability being targeted (the unpatched software) is the Threat Vector (Option A) — the 'why it's possible'. The Attack Vector (Option B) would be the complete pathway (sending the crafted packet over the network to gain the shell). The Payload (Option C) is the malicious action (the remote shell). A Dropper (Option D) is an initial malware installer."
  },
  {
    "id": 72,
    "section": "S6",
    "question": "An attacker creates a piece of malware that intercepts the communication between the Windows OS and a trusted system DLL. By sitting in the middle of this communication pathway, the malware alters the data being passed without the OS realizing it has been intercepted. Which specific technique is the attacker using?",
    "options": [
      "Shimming",
      "Process Hollowing",
      "Code Injection",
      "Living off the Land"
    ],
    "answer": 0,
    "explanation": "A Shim (Option A) is a small piece of software placed between two components to intercept and redirect or modify calls between them, commonly used by rootkits. Process Hollowing (Option B) and Code Injection (Option C) involve inserting code directly into a process's memory space, rather than sitting between components as an interceptor."
  },
  {
    "id": 73,
    "section": "S6",
    "question": "A user buys a brand-new laptop. Upon booting it up, they find trial versions of three different antivirus programs, a proprietary media player, and several games already installed. While none of these programs are malicious, they consume 20% of the RAM on startup. What is the cybersecurity term for this software?",
    "options": [
      "Bloatware",
      "Spyware",
      "Trojan",
      "Stealth Virus"
    ],
    "answer": 0,
    "explanation": "Bloatware (Option A) refers to unwanted, pre-installed software on new devices. It is not inherently malicious, but it consumes system resources and expands the attack surface. Spyware (Option B) secretly monitors activity. A Trojan (Option C) is disguised malware. A Stealth Virus (Option D) hides its malicious payload."
  },
  {
    "id": 74,
    "section": "S6",
    "question": "A security analyst is reviewing logs and notices that an executive's account successfully logged in from the company headquarters in New York at 9:00 AM, and then successfully logged into the corporate VPN from an IP address in Tokyo at 9:15 AM. Which malware attack indicator is the analyst observing?",
    "options": [
      "Impossible Travel",
      "Concurrent Session Utilization",
      "Account Lockouts",
      "Out-of-Cycle Logging"
    ],
    "answer": 0,
    "explanation": "Impossible Travel (Option A) indicates that an account was accessed from two geographically distant locations within an impossibly short timeframe, strongly suggesting compromised credentials. Concurrent Session Utilization (Option B) means simultaneous active sessions, but the geographic impossibility is the primary indicator here. Account Lockouts (Option C) indicate failed logins."
  },
  {
    "id": 75,
    "section": "S6",
    "question": "A user connects a mysterious USB drive they found in the parking lot to their workstation. The device registers as a standard keyboard to the operating system, but secretly records all the user's keystrokes and saves them to an internal chip. Why is this specific attack highly effective?",
    "options": [
      "Because software-based antivirus cannot detect it.",
      "Because it executes entirely in the system's RAM.",
      "Because it bypasses Multi-Factor Authentication (MFA).",
      "Because it uses DLL injection to hide from the kernel."
    ],
    "answer": 0,
    "explanation": "A hardware keylogger is highly effective because it is a physical device that the OS sees as a legitimate peripheral (a keyboard), meaning software-based antivirus cannot detect it (Option A). It does not execute in RAM (Option B) or use DLL injection (Option D). While it captures passwords, it does NOT bypass MFA (Option C) — the attacker would still need the second factor."
  },
  {
    "id": 76,
    "section": "S7",
    "question": "A healthcare organization is migrating its patient records to a cloud service provider. The organization determines how the data will be used and collected, while the cloud provider only stores the data according to the organization's instructions. In the event of a privacy breach caused by the cloud provider, who holds the ULTIMATE accountability under data privacy laws?",
    "options": [
      "The Data Controller",
      "The Data Processor",
      "The Data Steward",
      "The Data Custodian"
    ],
    "answer": 0,
    "explanation": "The Data Controller (Option A) is the entity that decides the purpose and method of data processing and holds ultimate accountability for privacy breaches, even if they outsource the work. The cloud provider is the Data Processor (Option B), acting under the controller's direction. The Steward (Option C) ensures data quality/labeling, and the Custodian (Option D) handles technical day-to-day management."
  },
  {
    "id": 77,
    "section": "S7",
    "question": "An employee downloads a spreadsheet containing the salaries of every executive in the company. The employee does not modify or share the file, but stores it unencrypted on their local workstation. Under standard commercial data classification, which tier does this data fall into, and what is the primary risk?",
    "options": [
      "Private; exposure of internal individual data.",
      "Sensitive; exposure of upcoming product plans.",
      "Confidential; exposure of trade secrets.",
      "Critical; exposure of cryptographic keys."
    ],
    "answer": 0,
    "explanation": "Salaries, employee records, and SSNs are classified as Private (Option A) because they are for internal use only and relate to individual privacy. Sensitive data (Option B) usually refers to business operations with minimal impact. Confidential data (Option C) refers to IP or trade secrets with serious business impact. Critical data (Option D) refers to things like credit cards or keys."
  },
  {
    "id": 78,
    "section": "S7",
    "question": "A multinational corporation has a strict policy that all laptops must use BitLocker to protect data if the laptop is lost or stolen. However, the Chief Information Security Officer (CISO) is concerned that an attacker who compromises an active, logged-in session could still access the memory and steal cryptographic keys while they are being processed by an application. Which data state is the CISO concerned about, and what is the BEST protection method?",
    "options": [
      "Data in Use; Secure Enclave",
      "Data at Rest; Full Disk Encryption",
      "Data in Transit; TLS Tunneling",
      "Data in Use; Database Encryption"
    ],
    "answer": 0,
    "explanation": "Data actively being processed in RAM by an application is Data in Use. A Secure Enclave (Option A), such as Intel SGX, creates an isolated processing environment in memory so untrusted processes cannot access it. FDE (Option B) protects Data at Rest (when the laptop is off). TLS (Option C) protects Data in Transit. Database encryption (Option D) protects Data at Rest."
  },
  {
    "id": 79,
    "section": "S7",
    "question": "A company wants to ensure that its customer database administrators can view a user's account details for troubleshooting, but cannot see the user's actual credit card number. Instead, the database should display 'XXXX-XXXX-XXXX-4321' when queried. Which data protection technique should be implemented?",
    "options": [
      "Data Masking",
      "Hashing",
      "Tokenization",
      "Full Disk Encryption"
    ],
    "answer": 0,
    "explanation": "Data Masking (Option A) replaces sensitive data with placeholders (like 'X') to de-identify it while preserving the format for display purposes. Hashing (Option B) is one-way cryptographic scrambling. Tokenization (Option C) replaces the data with a meaningless token stored in a separate vault, usually for backend processing, not just display. FDE (Option D) encrypts the whole drive."
  },
  {
    "id": 80,
    "section": "S7",
    "question": "A financial institution implements a Data Loss Prevention (DLP) system at its network perimeter. The DLP is configured with a rule that looks for any outgoing email containing a 9-digit number formatted as 'XXX-XX-XXXX' (Social Security Number). The DLP is set to immediately drop the email and notify the security team. What is the configuration's 'Condition/Content Match' and 'Action' respectively?",
    "options": [
      "SSN Regex Pattern; Block",
      "Email Application; Audit",
      "All Users Scope; Quarantine",
      "High Confidence Threshold; Alert"
    ],
    "answer": 0,
    "explanation": "The 'Condition/Content Match' is what triggers the rule (the Regex pattern for the SSN). The 'Action' is what happens when triggered (dropping the email is a Block action). Therefore, Option A is correct. The Application is email, but Audit (Option B) doesn't drop the email. Quarantine (Option C) isolates it rather than outright dropping it."
  },
  {
    "id": 81,
    "section": "S7",
    "question": "An e-commerce company must comply with PCI DSS. To reduce the scope of their annual PCI audit, they want to ensure that if a web server is compromised, the attacker cannot pivot to the backend database server where credit card data is stored. Which of the following is the BEST architectural method to achieve this?",
    "options": [
      "Network Segmentation",
      "Data Obfuscation",
      "Endpoint DLP",
      "Access Control Lists (ACLs)"
    ],
    "answer": 0,
    "explanation": "Network Segmentation (Option A) divides the network into isolated segments. By placing the web server and the database server in different, heavily restricted segments, lateral movement is severely limited, reducing the 'blast radius' and the scope of a PCI audit. Obfuscation (Option B) hides code. Endpoint DLP (Option C) prevents data exfiltration. ACLs (Option D) restrict permissions but don't physically isolate network traffic."
  },
  {
    "id": 82,
    "section": "S7",
    "question": "A European citizen creates an account with an online retailer headquartered in the United States, but hosted on servers in Germany. The citizen later demands that the retailer permanently delete all their personal data. The retailer must comply due to the laws of the country where the data was collected and processed. What principle dictates this requirement?",
    "options": [
      "Data Sovereignty",
      "Geofencing",
      "Data Custodianship",
      "Tokenization"
    ],
    "answer": 0,
    "explanation": "Data Sovereignty (Option A) is the principle that digital data is subject to the laws of the country where it is collected or processed. Because the data involves an EU citizen and is processed on German servers, it falls under GDPR jurisdiction. Geofencing (Option B) blocks access by location. Custodianship (Option C) is a role. Tokenization (Option D) is a protection method."
  },
  {
    "id": 83,
    "section": "S7",
    "question": "A defense contractor must securely transmit classified design files across the public internet to a military base. The connection must authenticate and encrypt every single IP packet in the data stream at the network layer to prevent interception. Which protocol is BEST suited for this?",
    "options": [
      "IPSec",
      "SSL",
      "TLS",
      "SGX"
    ],
    "answer": 0,
    "explanation": "IPSec (Option A) secures IP communications by authenticating and encrypting each IP packet in a data stream, operating at the network layer (Layer 3), and is commonly used in VPNs. SSL/TLS (Options B and C) operate higher in the OSI model (Transport/Application) and typically secure specific application traffic (like HTTPS). SGX (Option D) is a secure enclave for data in use."
  },
  {
    "id": 84,
    "section": "S7",
    "question": "A company wants to ensure that its sales team can only access customer data from within the physical borders of the United States. If a salesperson travels to Europe and attempts to log in, the authentication system should automatically deny the request based on their IP address location. Which control should be implemented?",
    "options": [
      "Geofencing",
      "Data Retention Policy",
      "Network Segmentation",
      "Cloud-based DLP"
    ],
    "answer": 0,
    "explanation": "Geofencing (Option A) involves setting virtual boundaries to restrict access based on geographic location, allowing organizations to block access attempts from outside approved regions. Retention policies (Option B) deal with time. Segmentation (Option C) deals with network architecture. DLP (Option D) prevents data exfiltration."
  },
  {
    "id": 85,
    "section": "S7",
    "question": "A software development firm stores its proprietary source code on an internal server. The code is considered a trade secret. The CISO mandates that the storage array itself must be encrypted so that if a physical hard drive is stolen from the data center, the thief cannot read the code. Which data state is being protected?",
    "options": [
      "Data at Rest",
      "Data in Transit",
      "Data in Use",
      "Data in Motion"
    ],
    "answer": 0,
    "explanation": "Data stored on a physical hard drive or storage array that is not actively moving across a network or being processed in memory is Data at Rest (Option A). Therefore, encrypting the drive protects the data while it is at rest. Data in transit/motion (Options B and D) refers to network traffic. Data in use (Option C) is data in RAM."
  },
  {
    "id": 86,
    "section": "S7",
    "question": "An attacker manages to steal a backup tape containing a company's database of user passwords. However, the attacker realizes they cannot use the passwords because they have been converted into fixed-size, one-way values that cannot be reversed back into plaintext. Which data securing method was applied?",
    "options": [
      "Hashing",
      "Encryption",
      "Obfuscation",
      "Tokenization"
    ],
    "answer": 0,
    "explanation": "Hashing (Option A) converts data into a fixed-size value and is strictly one-way (irreversible), which is the standard method for securely storing passwords. Encryption (Option B) is two-way and reversible with a key. Obfuscation (Option C) reduces readability but isn't a cryptographic standard for passwords. Tokenization (Option D) replaces data with a token mapped in a vault."
  },
  {
    "id": 87,
    "section": "S7",
    "question": "A hospital's compliance department is auditing their IT systems to ensure adherence to HIPAA. They find that patient records from 20 years ago belonging to deceased individuals are still being stored on primary servers, increasing storage costs and the attack surface. Which policy should the hospital update and enforce to resolve this?",
    "options": [
      "Data Retention Policy",
      "Access Control List (ACL)",
      "Endpoint DLP",
      "Geofencing"
    ],
    "answer": 0,
    "explanation": "A Data Retention Policy (Option A) defines how long data must be kept before it can be securely destroyed. Keeping data beyond its useful or legally mandated period unnecessarily increases risk. ACLs (Option B) control who can see the data. DLP (Option C) stops it from leaving. Geofencing (Option D) restricts access by location."
  },
  {
    "id": 88,
    "section": "S7",
    "question": "An employee uses their smartphone to take a picture of a printed quarterly earnings report before it is released to the public. They attempt to email the photo to a competitor. The company's Network DLP system intercepts the email, reads the text inside the photograph, and blocks the transmission. Which DLP feature enabled this detection?",
    "options": [
      "Optical Character Recognition (OCR)",
      "File Hashing",
      "Regex Content Matching",
      "Endpoint Agent"
    ],
    "answer": 0,
    "explanation": "Optical Character Recognition (OCR) (Option A) is a technology integrated into advanced DLP solutions that scans images and photographs to extract and analyze text content, preventing users from bypassing DLP by taking screenshots or photos of sensitive text. File hashing (Option B) and Regex (Option C) work on text files, not images directly. Endpoint Agent (Option D) is a deployment type, not the specific image-reading feature."
  },
  {
    "id": 89,
    "section": "S7",
    "question": "Who in the organization is PRIMARILY responsible for determining the classification level of a specific data asset (e.g., deciding whether a project plan is 'Sensitive' or 'Confidential') based on its business value?",
    "options": [
      "The Data Owner",
      "The Data Custodian",
      "The Data Privacy Officer (DPO)",
      "The System Administrator"
    ],
    "answer": 0,
    "explanation": "The Data Owner (Option A) is the senior executive or business leader who understands the context and value of the data and holds ultimate responsibility for its classification and CIA. The Data Custodian/System Administrator (Options B and D) implements the technical controls dictated by the owner. The DPO (Option C) oversees privacy compliance."
  },
  {
    "id": 90,
    "section": "S7",
    "question": "A payment gateway wants to stop storing actual credit card numbers in its local database to reduce its compliance burden. Instead, it sends the credit card number to a highly secure third-party vault, which returns a random, meaningless string of characters. The gateway stores this string and uses it for future billing. What is this technique called?",
    "options": [
      "Tokenization",
      "Hashing",
      "Masking",
      "Full Disk Encryption"
    ],
    "answer": 0,
    "explanation": "Tokenization (Option A) replaces sensitive data with a non-sensitive placeholder (token) while the original data is stored in a separate, secure vault. The token is meaningless without the vault mapping, making it ideal for payment processing. Hashing (Option B) is one-way. Masking (Option C) hides parts of the data for display. FDE (Option D) encrypts the storage drive."
  },
  {
    "id": 91,
    "section": "S8",
    "question": "A web developer is implementing a feature that requires verifying the integrity of large downloaded files. The developer wants to use an algorithm that is computationally fast, widely supported, and resistant to collision attacks, avoiding deprecated standards. Which hashing algorithm is the BEST choice?",
    "options": [
      "SHA-256",
      "MD5",
      "SHA-1",
      "RSA"
    ],
    "answer": 0,
    "explanation": "SHA-256 (Option A) is part of the SHA-2 family and is the current standard for secure hashing, resistant to collisions. MD5 (Option B) and SHA-1 (Option C) are both deprecated due to proven collision vulnerabilities. RSA (Option D) is an asymmetric encryption algorithm, not a hashing algorithm."
  },
  {
    "id": 92,
    "section": "S8",
    "question": "An organization wants to securely exchange a symmetric session key over an insecure public network between a client and a server. Which cryptographic algorithm is specifically designed to facilitate this secure key exchange?",
    "options": [
      "Diffie-Hellman",
      "AES",
      "SHA-3",
      "RC4"
    ],
    "answer": 0,
    "explanation": "Diffie-Hellman (Option A) is an asymmetric algorithm specifically designed for securely exchanging cryptographic keys over a public channel. AES (Option B) and RC4 (Option D) are symmetric algorithms that require the key to already be securely exchanged. SHA-3 (Option C) is a hashing algorithm."
  },
  {
    "id": 93,
    "section": "S8",
    "question": "A company is developing a secure messaging app for low-power IoT devices. The devices have limited CPU and battery life, so the cryptography must provide high security with minimal computational overhead. Which asymmetric algorithm is the MOST appropriate for this scenario?",
    "options": [
      "ECC (Elliptic Curve Cryptography)",
      "RSA (Rivest-Shamir-Adleman)",
      "3DES (Triple DES)",
      "Blowfish"
    ],
    "answer": 0,
    "explanation": "ECC (Option A) provides the same level of security as RSA but with significantly smaller key sizes, making it highly efficient and the standard choice for mobile, IoT, and low-power devices. RSA (Option B) requires much larger keys and more processing power. 3DES and Blowfish (Options C and D) are symmetric block ciphers, not asymmetric."
  },
  {
    "id": 94,
    "section": "S8",
    "question": "A user wants to digitally sign a contract before sending it to a business partner to ensure non-repudiation and integrity. Which cryptographic key MUST the user apply to the hash of the document to create a valid digital signature?",
    "options": [
      "The sender's private key",
      "The sender's public key",
      "The receiver's private key",
      "The receiver's public key"
    ],
    "answer": 0,
    "explanation": "To create a digital signature, the sender must encrypt the hash of the message using their own private key (Option A). This proves that only the sender could have created the signature (non-repudiation). Using the receiver's public key (Option D) is for confidentiality (encryption), not signing."
  },
  {
    "id": 95,
    "section": "S8",
    "question": "An attacker captures a database of user passwords. Instead of brute-forcing the plaintext passwords, the attacker notices several accounts have the exact same hash digest, indicating they use the same password. Which cryptographic defense mechanism did the developers FAIL to implement?",
    "options": [
      "Salting",
      "Key Stretching",
      "Digital Certificates",
      "Symmetric Encryption"
    ],
    "answer": 0,
    "explanation": "Salting (Option A) involves adding a random, unique value to each password before hashing it. This ensures that even if two users have the same password, their resulting hashes will be entirely different. Key stretching (Option B) slows down brute-force attacks but doesn't prevent identical passwords from producing identical hashes if unsalted."
  },
  {
    "id": 96,
    "section": "S8",
    "question": "A corporate web server must support HTTPS for multiple subdomains (e.g., mail.company.com, hr.company.com, and portal.company.com) without purchasing a separate certificate for each one. However, it does not need to support entirely different root domains. Which type of digital certificate is the BEST choice?",
    "options": [
      "Wildcard Certificate",
      "SAN (Subject Alternate Name) Certificate",
      "Self-signed Certificate",
      "Extended Validation (EV) Certificate"
    ],
    "answer": 0,
    "explanation": "A Wildcard Certificate (Option A) is designed to secure a root domain and all of its subdomains (e.g., *.company.com) using a single certificate. A SAN certificate (Option B) is better for securing entirely different root domains (e.g., company.com and organization.org) on the same server."
  },
  {
    "id": 97,
    "section": "S8",
    "question": "A bank requires a highly secure, tamper-proof physical appliance to generate, manage, and store cryptographic keys for its core financial transactions. Which encryption tool is specifically designed for this enterprise-level requirement?",
    "options": [
      "Hardware Security Module (HSM)",
      "Trusted Platform Module (TPM)",
      "Secure Enclave",
      "Key Escrow"
    ],
    "answer": 0,
    "explanation": "A Hardware Security Module (HSM) (Option A) is a dedicated, tamper-resistant hardware appliance used in enterprise environments (like banks) to securely manage, generate, and store cryptographic keys. A TPM (Option B) is a chip embedded on a single motherboard for local device security (like BitLocker). A Secure Enclave (Option C) protects data in use on a local CPU."
  },
  {
    "id": 98,
    "section": "S8",
    "question": "An attacker intercepts a secure connection and manipulates the handshake process, forcing the client and server to communicate using an obsolete, vulnerable protocol (SSL 3.0) instead of the TLS 1.3 protocol they both support. What type of cryptographic attack is this?",
    "options": [
      "Downgrade Attack",
      "Collision Attack",
      "Pass-the-Hash",
      "Replay Attack"
    ],
    "answer": 0,
    "explanation": "A Downgrade Attack (Option A), such as the POODLE attack, forces a system to abandon a modern, secure protocol and revert to an older, weaker cryptographic protocol that the attacker knows how to exploit. A Collision Attack (Option B) targets hashes. Pass-the-Hash (Option C) targets authentication. A Replay Attack (Option D) retransmits captured data."
  },
  {
    "id": 99,
    "section": "S8",
    "question": "A security analyst is investigating a suspected data leak. The analyst discovers that an insider has been hiding sensitive company documents within the pixel data of ordinary company marketing images and emailing them to a personal account. Which obfuscation technique is the insider utilizing?",
    "options": [
      "Steganography",
      "Data Masking",
      "Tokenization",
      "Elliptic Curve Cryptography"
    ],
    "answer": 0,
    "explanation": "Steganography (Option A) is the practice of hiding secret data within an ordinary, non-secret file (such as an image, audio, or video file) so that its very existence is undetected. Data Masking (Option B) replaces data with fake realistic data. Tokenization (Option C) replaces data with a meaningless placeholder. ECC (Option D) is an encryption algorithm."
  },
  {
    "id": 100,
    "section": "S8",
    "question": "An organization relies heavily on RSA for digital signatures and AES-256 for data encryption. In the context of the emerging threat from quantum computing, which algorithm is MOST at risk, and why?",
    "options": [
      "RSA, because quantum computers can rapidly factor the large prime numbers it relies on.",
      "AES-256, because quantum computers can easily reverse symmetric block ciphers.",
      "RSA, because it uses smaller block sizes than AES.",
      "Both are equally at risk because quantum computers bypass all encryption layers simultaneously."
    ],
    "answer": 0,
    "explanation": "Quantum computers use Shor's algorithm to rapidly factor large prime numbers, which breaks asymmetric algorithms like RSA and ECC (Option A). Symmetric algorithms like AES are not broken by factoring; they are only weakened (mitigated by doubling the key size, e.g., AES-256 is still considered quantum-resistant)."
  },
  {
    "id": 101,
    "section": "S8",
    "question": "A Chief Information Security Officer (CISO) is implementing a Public Key Infrastructure (PKI). To protect the organization against the loss of a user's private key, the CISO mandates that a secure backup copy of all private keys be stored with a trusted third party. What PKI concept is being implemented?",
    "options": [
      "Key Escrow",
      "Certificate Revocation List (CRL)",
      "Certificate Signing Request (CSR)",
      "OCSP Stapling"
    ],
    "answer": 0,
    "explanation": "Key Escrow (Option A) is the secure storage of private keys by a trusted third party, allowing for key recovery if the original key is lost, corrupted, or required for legal investigations. A CRL (Option B) lists revoked certificates. A CSR (Option C) is a request for a new certificate. OCSP Stapling (Option D) improves revocation checking performance."
  },
  {
    "id": 102,
    "section": "S8",
    "question": "When securing a legacy wireless network, a security administrator notices that the protocol uses RC4 for encryption. Based on modern cryptographic standards, what is the status of RC4 and its structural type?",
    "options": [
      "It is a weak stream cipher that should be avoided.",
      "It is a strong block cipher that is currently the industry standard.",
      "It is an asymmetric algorithm used for key exchange.",
      "It is a hashing algorithm vulnerable to collision attacks."
    ],
    "answer": 0,
    "explanation": "RC4 (Option A) is a stream cipher (it encrypts data bit-by-bit) that was famously used in WEP and SSL, but is now considered broken and weak. It is not a block cipher (Option B), asymmetric algorithm (Option C), or hashing algorithm (Option D)."
  },
  {
    "id": 103,
    "section": "S8",
    "question": "During a TLS handshake, a web browser receives a digital certificate from a web server. Before trusting the server, the browser must verify that the certificate has not been revoked. Which protocol allows the browser to query the CA in real-time for the status of this single specific certificate?",
    "options": [
      "OCSP (Online Certificate Status Protocol)",
      "CRL (Certificate Revocation List)",
      "CSR (Certificate Signing Request)",
      "IPSec (Internet Protocol Security)"
    ],
    "answer": 0,
    "explanation": "OCSP (Option A) allows a client to query the CA in real-time for the revocation status of a single certificate by its serial number, which is faster and more efficient than downloading the entire CRL (Option B). A CSR (Option C) is for requesting certificates, and IPSec (Option D) secures network traffic."
  },
  {
    "id": 104,
    "section": "S8",
    "question": "Which cryptographic principle ensures that a sender cannot later deny having sent a specific message, because the digital signature attached to the message could only have been generated by their unique cryptographic key?",
    "options": [
      "Non-repudiation",
      "Confidentiality",
      "Obfuscation",
      "Availability"
    ],
    "answer": 0,
    "explanation": "Non-repudiation (Option A) is the cryptographic guarantee that the sender of a message cannot later deny having sent it, usually achieved through digital signatures using the sender's private key. Confidentiality (Option B) keeps data secret. Obfuscation (Option C) hides data. Availability (Option D) ensures data is accessible."
  },
  {
    "id": 105,
    "section": "S8",
    "question": "A supply chain organization is implementing a decentralized, tamper-proof digital ledger to track shipments. The system uses a peer-to-peer network where each block of transaction data is cryptographically linked to the previous block's hash. What technology is being deployed?",
    "options": [
      "Blockchain",
      "Public Key Infrastructure (PKI)",
      "Secure Enclave",
      "Hardware Security Module (HSM)"
    ],
    "answer": 0,
    "explanation": "Blockchain (Option A) is a shared, immutable ledger where transactions are recorded in blocks, and each block contains the cryptographic hash of the previous block, creating a tamper-proof chain across a decentralized network. PKI (Option B) manages certificates. Secure Enclaves (Option C) isolate memory. HSMs (Option D) store keys physically."
  },
  {
    "id": 106,
    "section": "S9",
    "question": "A financial institution decides to implement a new online banking platform. The security team performs a comprehensive review of the new system's architecture to identify threats and vulnerabilities prior to launch. They do not plan to repeat this specific assessment after the platform is live. What is the frequency of this risk assessment?",
    "options": [
      "One-time",
      "Ad-hoc",
      "Recurring",
      "Continuous"
    ],
    "answer": 0,
    "explanation": "A One-time assessment (Option A) is conducted for a specific project or initiative (like launching a new platform) and is not repeated. Ad-hoc (Option B) is triggered by an event and may be repeated if the event happens again. Recurring (Option C) is scheduled (e.g., annually). Continuous (Option D) is ongoing real-time monitoring."
  },
  {
    "id": 107,
    "section": "S9",
    "question": "An IT department is analyzing the impact of a potential server failure. The analysis determines that if the database server goes down, the maximum acceptable downtime before the business suffers severe financial impact is 4 hours. Which Business Impact Analysis (BIA) metric does this 4-hour limit represent?",
    "options": [
      "Recovery Time Objective (RTO)",
      "Recovery Point Objective (RPO)",
      "Mean Time to Repair (MTTR)",
      "Mean Time Between Failures (MTBF)"
    ],
    "answer": 0,
    "explanation": "The Recovery Time Objective (RTO) (Option A) defines the maximum acceptable downtime before severe business impact occurs. The Recovery Point Objective (RPO) (Option B) refers to the maximum acceptable data loss measured in time. MTTR (Option C) is the average time it takes to repair a failure. MTBF (Option D) measures reliability between failures."
  },
  {
    "id": 108,
    "section": "S9",
    "question": "A security analyst is preparing a report for the executive board. The analyst states that an earthquake destroying the primary data center has a 'Low' probability of occurring, but a 'High' impact if it does, resulting in an overall 'Medium' priority. What type of risk analysis did the analyst perform?",
    "options": [
      "Qualitative Risk Analysis",
      "Quantitative Risk Analysis",
      "Continuous Risk Assessment",
      "Risk Avoidance"
    ],
    "answer": 0,
    "explanation": "Qualitative Risk Analysis (Option A) uses descriptive, categorical scales (Low, Medium, High) based on expert judgment to assess and prioritize risks. Quantitative Risk Analysis (Option B) uses hard numerical measurements and financial values (like ALE or SLE). Continuous Risk Assessment (Option C) is a frequency type. Risk Avoidance (Option D) is a strategy."
  },
  {
    "id": 109,
    "section": "S9",
    "question": "An e-commerce company has a web server worth $20,000. Historical data shows that a DDoS attack takes the server offline completely (100% loss of function) once every four years. Using quantitative risk analysis, what is the Annualized Loss Expectancy (ALE) for this risk?",
    "options": [
      "$5,000",
      "$20,000",
      "$10,000",
      "$80,000"
    ],
    "answer": 0,
    "explanation": "First, calculate the Single Loss Expectancy (SLE): Asset Value ($20,000) × Exposure Factor (100% or 1.0) = $20,000. Second, calculate the Annualized Rate of Occurrence (ARO): 1 attack / 4 years = 0.25. Finally, calculate the ALE: SLE ($20,000) × ARO (0.25) = $5,000/year (Option A)."
  },
  {
    "id": 110,
    "section": "S9",
    "question": "A startup decides to launch a new, highly experimental cryptocurrency exchange platform, fully aware that it faces massive regulatory and cyber risks. They believe the potential profit outweighs the risks. How would you categorize this organization's risk appetite?",
    "options": [
      "Expansionary",
      "Conservative",
      "Neutral",
      "Transferred"
    ],
    "answer": 0,
    "explanation": "An Expansionary risk appetite (Option A) indicates a willingness to take on more risk for the chance of higher returns, typical of aggressive, growth-oriented businesses. Conservative (Option B) prefers stability over risk. Neutral (Option C) balances the two. Transferred (Option D) is a mitigation strategy, not an appetite."
  },
  {
    "id": 111,
    "section": "S9",
    "question": "A retail chain identifies that shoplifting costs them $50,000 annually. They decide to hire a security guard company for $60,000 annually, which they estimate will eliminate all shoplifting. However, the executive board rejects the proposal because the cost of the control exceeds the cost of the risk, deciding to simply absorb the $50,000 loss. Which risk management strategy did the board choose?",
    "options": [
      "Risk Acceptance",
      "Risk Mitigation",
      "Risk Avoidance",
      "Risk Transference"
    ],
    "answer": 0,
    "explanation": "Risk Acceptance (Option A) involves acknowledging the risk and taking no action to prevent it, often because the cost of mitigation is higher than the potential loss. Risk Mitigation (Option B) would be hiring the guards. Risk Avoidance (Option C) would be closing the store. Risk Transference (Option D) would be buying insurance."
  },
  {
    "id": 112,
    "section": "S9",
    "question": "An organization relies heavily on a specialized cloud service provider. To manage the risk of the provider experiencing an outage, the organization signs a Service Level Agreement (SLA) that requires the provider to pay a $10,000 penalty for every hour of downtime. Which risk management strategy is the organization employing?",
    "options": [
      "Risk Transference",
      "Risk Acceptance",
      "Risk Mitigation",
      "Risk Avoidance"
    ],
    "answer": 0,
    "explanation": "Risk Transference (Option A) shifts the financial consequences of a risk to another party. By using an SLA with financial penalties (or buying insurance), the organization is transferring the financial risk of downtime to the cloud provider. Mitigation (Option C) would be building a redundant backup system."
  },
  {
    "id": 113,
    "section": "S9",
    "question": "A bank monitors the number of failed login attempts per hour across its customer portal. Historically, the baseline is 500 failed attempts per hour. If the number exceeds 2,000, it triggers an alert to the security team, signaling a potential incoming credential stuffing attack before major damage occurs. In risk management terminology, what is this metric called?",
    "options": [
      "Key Risk Indicator (KRI)",
      "Annualized Rate of Occurrence (ARO)",
      "Recovery Point Objective (RPO)",
      "Risk Threshold"
    ],
    "answer": 0,
    "explanation": "A Key Risk Indicator (KRI) (Option A) is a forward-looking, predictive metric that provides an early warning signal of rising risk exposure before it escalates into a full incident. ARO (Option B) is how often an event occurs annually. RPO (Option C) is tolerable data loss. A Risk Threshold (Option D) is a limit, but the metric itself is the KRI."
  },
  {
    "id": 114,
    "section": "S9",
    "question": "During a risk assessment, a security team identifies that physical theft of unencrypted laptops is a 'High' risk. They implement a policy requiring Full Disk Encryption (FDE) on all devices. However, there is still a small chance that an attacker could steal a laptop while it is powered on and unlocked. What term describes this remaining risk?",
    "options": [
      "Residual Risk",
      "Control Risk",
      "Inherent Risk",
      "Accepted Risk"
    ],
    "answer": 0,
    "explanation": "Residual Risk (Option A) is the amount of risk that remains after mitigation controls have been applied to the inherent risk. Control Risk (Option B) is the risk that the control itself fails or degrades. Inherent Risk (Option C) is the raw risk before any controls are applied."
  },
  {
    "id": 115,
    "section": "S9",
    "question": "A project manager is creating a document that lists all potential threats to a new software deployment, including the likelihood of each threat, the potential impact, the current mitigation strategy, and the person responsible for monitoring it. What is this document called?",
    "options": [
      "Risk Register",
      "Business Impact Analysis (BIA)",
      "Incident Response Plan",
      "Vulnerability Assessment"
    ],
    "answer": 0,
    "explanation": "A Risk Register (Option A) is the central document that records all identified risks, their details (impact, likelihood), mitigation strategies, and the assigned risk owner. A BIA (Option B) focuses specifically on business continuity and recovery metrics (RTO/RPO). An Incident Response Plan (Option C) details how to react to a breach."
  },
  {
    "id": 116,
    "section": "S9",
    "question": "An organization is considering expanding its operations into a region known for extreme political instability and frequent communication blackouts. After conducting a risk analysis, the executive board decides the potential for catastrophic loss is too high and cancels the expansion entirely. Which risk strategy did they apply?",
    "options": [
      "Risk Avoidance",
      "Risk Acceptance",
      "Risk Transference",
      "Risk Mitigation"
    ],
    "answer": 0,
    "explanation": "Risk Avoidance (Option A) involves changing plans to eliminate the risk entirely, usually because the risk is too severe to accept, mitigate, or transfer. Canceling the expansion avoids the risk completely. Acceptance (Option B) would be proceeding anyway. Transference (Option C) would be buying insurance. Mitigation (Option D) would be building redundant communication lines."
  },
  {
    "id": 117,
    "section": "S9",
    "question": "Which phase of the 5-step risk management lifecycle involves creating dashboards or heat maps to communicate risk information to stakeholders and ensure regulatory compliance?",
    "options": [
      "Risk Reporting",
      "Risk Monitoring",
      "Risk Treatment",
      "Risk Identification"
    ],
    "answer": 0,
    "explanation": "Risk Reporting (Option A) is the phase where risk information is communicated to stakeholders (via dashboards or reports) to guide informed decision-making and prove regulatory compliance. Risk Monitoring (Option B) is the ongoing tracking of risks. Risk Treatment (Option C) is applying controls. Identification (Option D) is finding the risks initially."
  },
  {
    "id": 118,
    "section": "S9",
    "question": "An organization implements a strict policy that no employees may use removable USB drives. However, the marketing director requests permission to use a USB drive for one week to transfer large video files for an upcoming conference, arguing that cloud transfer is too slow. The security team approves the request. Which specific risk response was granted?",
    "options": [
      "Exception",
      "Exemption",
      "Mitigation",
      "Transference"
    ],
    "answer": 0,
    "explanation": "An Exception (Option A) is a form of risk acceptance where a party is normally subject to a rule but avoids it temporarily or under specific, defined conditions (e.g., for one week for a specific task). An Exemption (Option B) means the party is completely excluded from the rule permanently. Mitigation (Option C) reduces risk. Transference (Option D) shifts financial liability."
  },
  {
    "id": 119,
    "section": "S9",
    "question": "A manufacturer is analyzing its production line equipment. A specific cutting machine breaks down, on average, once every 120 days. When it breaks down, it takes the maintenance team an average of 6 hours to fix it and get it running again. In this scenario, what does the '120 days' metric represent?",
    "options": [
      "Mean Time Between Failures (MTBF)",
      "Mean Time to Repair (MTTR)",
      "Recovery Time Objective (RTO)",
      "Recovery Point Objective (RPO)"
    ],
    "answer": 0,
    "explanation": "The '120 days' represents the Mean Time Between Failures (MTBF) (Option A), which is the average time between system failures and serves as an indicator of reliability. The '6 hours' represents the Mean Time to Repair (MTTR) (Option B). RTO (Option C) is a target maximum downtime, not a historical average."
  },
  {
    "id": 120,
    "section": "S9",
    "question": "A company is conducting a quantitative risk analysis on a database containing proprietary source code valued at $1,000,000. They determine that a successful exfiltration attack by a competitor would result in a 25% loss of the asset's value. What is the Exposure Factor (EF) in this scenario?",
    "options": [
      "25%",
      "$250,000",
      "$1,000,000",
      "4 (since it would take 4 attacks to lose 100%)"
    ],
    "answer": 0,
    "explanation": "The Exposure Factor (EF) (Option A) is the percentage of the asset lost in a single event, which is explicitly stated as 25%. The Single Loss Expectancy (SLE) would be $250,000 (Option B). The Asset Value is $1,000,000 (Option C). The ARO is not provided."
  },
  {
    "id": 121,
    "section": "S10",
    "question": "A financial firm is outsourcing its customer service portal to a Managed Service Provider (MSP). The firm wants to ensure it can legally inspect the MSP's internal security controls and data handling practices at any time during the contract. Which contractual element MUST be included to enforce this?",
    "options": [
      "Right to Audit Clause",
      "Non-disclosure Agreement (NDA)",
      "Statement of Work (SOW)",
      "Service Level Agreement (SLA)"
    ],
    "answer": 0,
    "explanation": "A Right to Audit Clause (Option A) is a contractual provision granting the organization the right to evaluate the vendor's internal processes and verify compliance with agreed-upon standards. An NDA (Option B) protects confidentiality. An SOW (Option C) details project-specific tasks. An SLA (Option D) defines service standards and penalties."
  },
  {
    "id": 122,
    "section": "S10",
    "question": "During a routine hardware upgrade, a network administrator discovers that a batch of newly purchased, budget-friendly routers contains slightly modified microchips that include an unauthorized remote access backdoor. What specific type of supply chain attack has occurred?",
    "options": [
      "Chip Washing",
      "Software-based Supply Chain Attack",
      "SolarWinds Attack",
      "Denial of Service"
    ],
    "answer": 0,
    "explanation": "Chip Washing (Option A) involves repackaging a microchip with a counterfeit or malware-embedded chip, often found in budget-friendly secondary markets, leading to hardware-based backdoors. A software-based attack (Option B) targets code. The SolarWinds attack (Option C) was software-based. Denial of Service (Option D) is an availability attack."
  },
  {
    "id": 123,
    "section": "S10",
    "question": "Two organizations have decided to form a joint venture to co-develop a new cybersecurity platform. They need a formal document that specifically outlines intellectual property ownership, profit-sharing percentages, and exit strategies if the venture fails. Which agreement is MOST appropriate?",
    "options": [
      "Business Partnership Agreement (BPA)",
      "Memorandum of Understanding (MOU)",
      "Service Level Agreement (SLA)",
      "Non-disclosure Agreement (NDA)"
    ],
    "answer": 0,
    "explanation": "A Business Partnership Agreement (BPA) (Option A) is used when two entities pool resources for mutual benefit and outlines profit sharing, decision-making, ownership of IP, and exit strategies. An MOU (Option B) is a non-binding intent to explore partnership. An SLA (Option C) defines service quality. An NDA (Option D) protects secrets."
  },
  {
    "id": 124,
    "section": "S10",
    "question": "An enterprise is planning a long-term relationship with a cloud provider for multiple upcoming projects. They want to sign a single overarching document that dictates the general terms, payment structures, and confidentiality rules for all future projects, allowing them to issue smaller, project-specific documents later. What is this overarching document called?",
    "options": [
      "Master Service Agreement (MSA)",
      "Statement of Work (SOW)",
      "Memorandum of Agreement (MOA)",
      "Acceptable Use Policy (AUP)"
    ],
    "answer": 0,
    "explanation": "A Master Service Agreement (MSA) (Option A) is a blanket agreement covering general terms across multiple transactions or projects, which is then supplemented by individual Statements of Work (Option B) for each specific project. An MOA (Option C) outlines specific collaboration roles. An AUP (Option D) governs user behavior."
  },
  {
    "id": 125,
    "section": "S10",
    "question": "A threat actor compromises the software update infrastructure of a widely used IT monitoring tool. The attacker injects malicious code into the legitimate update, which is then downloaded and installed by thousands of government and corporate clients, bypassing their perimeter firewalls. Which term BEST describes this incident?",
    "options": [
      "Supply Chain Attack",
      "Inside Threat",
      "Hardware Spoofing",
      "Pre-installed Rootkit"
    ],
    "answer": 0,
    "explanation": "A Supply Chain Attack (Option A), such as the 2021 SolarWinds attack described in the scenario, targets a weaker link (the software vendor's update system) to gain access to a more secure primary target (the clients). An Insider Threat (Option B) comes from within the organization. Hardware attacks (Options C and D) target physical components."
  },
  {
    "id": 126,
    "section": "S10",
    "question": "Before hiring a third-party cybersecurity firm to conduct annual penetration tests, a company requires the firm to sign a document ensuring that any vulnerabilities discovered or proprietary network diagrams shared during the engagement will not be shared with unauthorized parties. Which document MUST be signed?",
    "options": [
      "Non-disclosure Agreement (NDA)",
      "Statement of Work (SOW)",
      "Business Partnership Agreement (BPA)",
      "Service Level Agreement (SLA)"
    ],
    "answer": 0,
    "explanation": "A Non-disclosure Agreement (NDA) (Option A) ensures sensitive information shared during an engagement remains confidential between parties. An SOW (Option B) defines the penetration test's scope. A BPA (Option C) is for joint ventures. An SLA (Option D) guarantees uptime or response times."
  },
  {
    "id": 127,
    "section": "S10",
    "question": "A government defense contractor wants to ensure that the microprocessors used in their advanced radar systems are manufactured securely and perform only their designated functions, free from foreign tampering. Which US government program should the contractor mandate their suppliers adhere to?",
    "options": [
      "Trusted Foundry Program",
      "CHIPS Act",
      "ISO 27001",
      "GDPR"
    ],
    "answer": 0,
    "explanation": "The Trusted Foundry Program (Option A) is used by the DoD to ensure that chips are manufactured securely and perform only their designated functions. The CHIPS Act (Option B) is a funding statute to onshore manufacturing. ISO 27001 (Option C) is an information security standard. GDPR (Option D) is a privacy regulation."
  },
  {
    "id": 128,
    "section": "S10",
    "question": "An organization is evaluating a new vendor for data storage. The vendor provides documentation showing they conduct regular internal security checks. However, the organization requires validation from a neutral entity with no stake in the vendor's operations before signing the contract. What is the organization requesting?",
    "options": [
      "Independent Assessment",
      "Internal Audit",
      "Vendor Questionnaire",
      "Rules of Engagement"
    ],
    "answer": 0,
    "explanation": "An Independent Assessment (Option A) is an evaluation conducted by a neutral third-party entity (like an ISO auditor) with no stake in the organization's operations, providing objective validation. An Internal Audit (Option B) is a self-assessment. Vendor Questionnaires (Option C) are self-reported. Rules of Engagement (Option D) govern interaction terms."
  },
  {
    "id": 129,
    "section": "S10",
    "question": "A company is drafting a contract for a new VoIP phone service. To guarantee business continuity, the contract specifies that the service must maintain 99.99% uptime, and if uptime drops below this metric, the vendor must credit the company's account for the downtime. Which document contains this specific metric and penalty?",
    "options": [
      "Service Level Agreement (SLA)",
      "Master Service Agreement (MSA)",
      "Statement of Work (SOW)",
      "Memorandum of Agreement (MOA)"
    ],
    "answer": 0,
    "explanation": "A Service Level Agreement (SLA) (Option A) defines the standard of service a client can expect (e.g., 99.99% uptime) and specifies the financial or service penalties for non-compliance. An MSA (Option B) sets blanket terms. An SOW (Option C) defines project deliverables. An MOA (Option D) formalizes collaboration roles."
  },
  {
    "id": 130,
    "section": "S10",
    "question": "A procurement officer is choosing between three software vendors. Vendor A is owned by the officer's sibling. To maintain the integrity of the vendor selection process, what issue must the officer disclose immediately?",
    "options": [
      "Conflict of Interest",
      "Due Diligence",
      "Supply Chain Risk",
      "Right to Audit"
    ],
    "answer": 0,
    "explanation": "A Conflict of Interest (Option A) arises when personal or financial relationships could bias the vendor selection process, requiring immediate disclosure and recusal from the decision. Due diligence (Option B) is the evaluation process itself. Supply Chain Risk (Option C) is the security threat. Right to Audit (Option D) is a contract clause."
  },
  {
    "id": 131,
    "section": "S11",
    "question": "A security manager is developing a document that provides step-by-step instructions on exactly how IT staff should wipe and image a laptop when an employee leaves the company. According to governance frameworks, how should this document be classified?",
    "options": [
      "Procedure",
      "Policy",
      "Standard",
      "Guideline"
    ],
    "answer": 0,
    "explanation": "A Procedure (Option A) provides step-by-step, granular instructions that describe exactly how to perform a specific task consistently. A Policy (Option B) is a high-level statement of intent. A Standard (Option C) is a mandatory rule (e.g., 'all drives must use AES-256'). A Guideline (Option D) is a non-mandatory recommendation."
  },
  {
    "id": 132,
    "section": "S11",
    "question": "An employee attempts to install a peer-to-peer file-sharing application on their corporate workstation. The installation is blocked, and the employee receives a warning that this action violates the company's rules regarding the permitted use of IT resources. Which governance document did the employee violate?",
    "options": [
      "Acceptable Use Policy (AUP)",
      "Information Security Policy",
      "Business Continuity Policy",
      "Disaster Recovery Policy"
    ],
    "answer": 0,
    "explanation": "The Acceptable Use Policy (AUP) (Option A) defines the 'do's and don'ts' for users interacting with organizational IT systems, including prohibiting unauthorized software installations. Information Security Policy (Option B) governs asset protection. Business Continuity (Option C) and Disaster Recovery (Option D) deal with resilience and restoration."
  },
  {
    "id": 133,
    "section": "S11",
    "question": "A multinational corporation is designing its data privacy framework. It operates in California, Germany, and Japan. The legal team warns that the privacy laws in Germany directly contradict some of the data retention requirements in California. What governance challenge is the organization facing?",
    "options": [
      "Conflict of Laws",
      "Separation of Duties",
      "Due Diligence",
      "Decentralized Structure"
    ],
    "answer": 0,
    "explanation": "Conflict of laws (Option A) occurs when an organization operates across multiple geographical jurisdictions that have contradictory legal or regulatory requirements. Separation of duties (Option B) prevents one person from having total control. Due diligence (Option C) is risk investigation. Decentralized structure (Option D) refers to distributed decision-making."
  },
  {
    "id": 134,
    "section": "S11",
    "question": "A hospital is required by the HIPAA regulation to implement strong access controls for patient records. The hospital conducts an exhaustive review to identify all systems housing patient data and assess their current vulnerabilities. Which compliance concept does this exhaustive review represent?",
    "options": [
      "Due Diligence",
      "Due Care",
      "Attestation",
      "Acknowledgement"
    ],
    "answer": 0,
    "explanation": "Due Diligence (Option A) is the investigative process of reviewing operations to identify potential compliance risks and vulnerabilities. Due Care (Option B) would be the actual steps taken to fix those vulnerabilities (e.g., installing a firewall). Attestation (Option C) is a formal declaration of compliance. Acknowledgement (Option D) is recognizing the rules."
  },
  {
    "id": 135,
    "section": "S11",
    "question": "A company requires all users to create passwords that are at least 12 characters long, contain numbers and symbols, and are changed every 90 days. Which element of the Governance, Risk, and Compliance (GRC) framework does this specific, mandatory password rule represent?",
    "options": [
      "Standard",
      "Policy",
      "Guideline",
      "Playbook"
    ],
    "answer": 0,
    "explanation": "A Standard (Option A) defines specific, mandatory rules (like exact password length and rotation frequency) that must be followed to implement a higher-level policy. A Policy (Option B) states the goal ('passwords must be secure'). A Guideline (Option C) is optional. A Playbook (Option D) is an incident response checklist."
  },
  {
    "id": 136,
    "section": "S11",
    "question": "Following a major security incident, a Chief Information Security Officer (CISO) formally signs a document declaring that the organization's processes and controls now fully comply with the PCI DSS standard. What compliance component has the CISO provided?",
    "options": [
      "Attestation",
      "Due Diligence",
      "Due Care",
      "Internal Monitoring"
    ],
    "answer": 0,
    "explanation": "Attestation (Option A) is a formal, signed declaration by a responsible party that an organization's processes and controls are compliant with a specific standard or regulation. Due diligence (Option B) is identifying risks. Due care (Option C) is mitigating them. Internal monitoring (Option D) is reviewing operations internally."
  },
  {
    "id": 137,
    "section": "S11",
    "question": "A junior SOC analyst detects a suspected ransomware infection on a user's workstation. To ensure a fast, consistent response, the analyst opens a pre-defined checklist that outlines the exact steps for isolation, eradication, and escalation. What is this document called?",
    "options": [
      "Playbook",
      "Policy",
      "Standard",
      "Due Care"
    ],
    "answer": 0,
    "explanation": "A Playbook (Option A) is a step-by-step guide or checklist designed for detecting and responding to a specific type of incident (like ransomware), ensuring consistency and speed. A Policy (Option B) is high-level intent. A Standard (Option C) is a mandatory technical rule. Due Care (Option D) is the principle of acting responsibly."
  },
  {
    "id": 138,
    "section": "S11",
    "question": "A critical server requires a major OS upgrade. To minimize disruption, the IT team writes a plan, obtains management approval, schedules the upgrade for Sunday at 2 AM, and prepares a rollback plan in case the server fails to boot. Which organizational procedure are they following?",
    "options": [
      "Change Management",
      "Incident Response",
      "Offboarding",
      "Disaster Recovery"
    ],
    "answer": 0,
    "explanation": "Change Management (Option A) is the systematic procedure for requesting, planning, approving, implementing, and reviewing IT changes (including maintenance windows and rollback plans) to minimize disruption. Incident response (Option B) handles security breaches. Offboarding (Option C) handles departing employees. Disaster Recovery (Option D) handles catastrophic failures."
  },
  {
    "id": 139,
    "section": "S11",
    "question": "An e-commerce company suffered a massive data breach involving the credit cards of European customers. The regulatory body determined the company demonstrated negligence and levied a penalty equal to 4% of the company's global annual revenue. Which non-compliance consequence did the company suffer, and under which likely regulation?",
    "options": [
      "Fine / GDPR",
      "Sanction / HIPAA",
      "Loss of License / PCI DSS",
      "Reputational Damage / CCPA"
    ],
    "answer": 0,
    "explanation": "The company suffered a Fine (a monetary penalty), specifically under the EU's GDPR (Option A), which can levy fines up to €20M or 4% of global annual turnover for severe breaches involving EU citizens' data. Sanctions (Option B) are operational bans. Loss of License (Option C) halts business operations. Reputational damage (Option D) is loss of trust."
  },
  {
    "id": 140,
    "section": "S11",
    "question": "To prevent fraud, a financial organization designs its access control model so that the person who submits a purchase order cannot be the same person who approves the payment. Which security principle is being enforced by this governance standard?",
    "options": [
      "Separation of Duties",
      "Least Privilege",
      "Discretionary Access Control",
      "Due Diligence"
    ],
    "answer": 0,
    "explanation": "Separation of Duties (Option A) is the principle that prevents any single individual from having complete control over a critical process, requiring collusion to commit fraud. Least Privilege (Option B) means giving only minimum necessary access. DAC (Option C) lets resource owners set access. Due Diligence (Option D) is risk investigation."
  },
  {
    "id": 141,
    "section": "S10",
    "question": "A manufacturing company relies on a single vendor for its specialized firewall hardware. The security team realizes that if the vendor goes out of business, the company cannot replace broken firewalls and would face prolonged downtime. What type of risk does this scenario primarily describe?",
    "options": [
      "Supply Chain Risk",
      "Insider Threat",
      "Data Exfiltration",
      "Privilege Escalation"
    ],
    "answer": 0,
    "explanation": "Supply Chain Risk (Option A) involves the reliance on third-party vendors and the vulnerabilities that arise if they fail, get compromised, or go out of business. Insider threat (Option B) involves internal employees. Data exfiltration (Option C) is stealing data. Privilege escalation (Option D) involves gaining higher system rights."
  },
  {
    "id": 142,
    "section": "S10",
    "question": "Two cybersecurity organizations agree to share threat intelligence regarding new malware variants. They want to formally document their intention to collaborate but do not want to create a legally binding joint venture or profit-sharing agreement. Which document is MOST appropriate?",
    "options": [
      "Memorandum of Understanding (MOU)",
      "Business Partnership Agreement (BPA)",
      "Statement of Work (SOW)",
      "Master Service Agreement (MSA)"
    ],
    "answer": 0,
    "explanation": "A Memorandum of Understanding (MOU) (Option A) is a formal but generally non-binding agreement outlining the intent of two parties to work together or share information. A BPA (Option B) is for formal profit-sharing joint ventures. An SOW (Option C) defines project deliverables. An MSA (Option D) sets blanket terms for future contracts."
  },
  {
    "id": 143,
    "section": "S10",
    "question": "A healthcare provider mandates that its cloud hosting provider must physically shred all retired hard drives. The hosting provider agrees, but the healthcare provider wants the ability to send its own security personnel quarterly to verify the shredding process on-site. Which contractual clause enables this?",
    "options": [
      "Right to Audit",
      "Non-disclosure Agreement (NDA)",
      "Service Level Agreement (SLA)",
      "Rules of Engagement"
    ],
    "answer": 0,
    "explanation": "The Right to Audit clause (Option A) legally permits an organization to inspect, assess, or audit a third-party vendor's operations to ensure compliance with agreed-upon security controls. An NDA (Option B) protects secrets. An SLA (Option C) defines service uptime. Rules of Engagement (Option D) define boundaries for penetration testing."
  },
  {
    "id": 144,
    "section": "S10",
    "question": "An enterprise is planning to purchase a new SIEM solution. Before signing a contract, the enterprise sends a document to five potential vendors containing 100 questions regarding their data encryption practices, incident response plans, and employee background checks. What is this document?",
    "options": [
      "Vendor Questionnaire",
      "Statement of Work (SOW)",
      "Acceptable Use Policy (AUP)",
      "Master Service Agreement (MSA)"
    ],
    "answer": 0,
    "explanation": "A Vendor Questionnaire (Option A) is a tool used during the due diligence process to assess the security posture and practices of potential third-party vendors. An SOW (Option B) defines project tasks. An AUP (Option C) governs internal employee IT use. An MSA (Option D) sets overarching contract terms."
  },
  {
    "id": 145,
    "section": "S10",
    "question": "An IT contractor is hired to upgrade the corporate network infrastructure. Before granting the contractor administrative access, the company requires them to sign a document that establishes the specific tasks to be performed, the timeline for completion, and the expected deliverables for this upgrade. What is this document?",
    "options": [
      "Statement of Work (SOW)",
      "Service Level Agreement (SLA)",
      "Non-disclosure Agreement (NDA)",
      "Memorandum of Understanding (MOU)"
    ],
    "answer": 0,
    "explanation": "A Statement of Work (SOW) (Option A) is a detailed document that defines specific project tasks, deliverables, timelines, and expectations for a contractor or vendor. An SLA (Option B) dictates service quality metrics like uptime. An NDA (Option C) ensures confidentiality. An MOU (Option D) is a statement of intent to cooperate."
  },
  {
    "id": 146,
    "section": "S11",
    "question": "A company's executive board publishes a high-level document stating: 'All corporate data must be protected from unauthorized access, both at rest and in transit.' According to governance frameworks, how should this document be classified?",
    "options": [
      "Policy",
      "Standard",
      "Procedure",
      "Guideline"
    ],
    "answer": 0,
    "explanation": "A Policy (Option A) is a high-level, overarching statement of management's intent, rules, and goals without specifying the technical details of how to achieve them. A Standard (Option B) sets mandatory technical rules. A Procedure (Option C) provides step-by-step instructions. A Guideline (Option D) offers recommendations."
  },
  {
    "id": 147,
    "section": "S11",
    "question": "To comply with the organization's overarching data protection policy, the IT department publishes a mandatory document stating: 'All employee laptops must use AES-256 bit encryption for their primary storage drives.' What type of document is this?",
    "options": [
      "Standard",
      "Guideline",
      "Procedure",
      "Playbook"
    ],
    "answer": 0,
    "explanation": "A Standard (Option A) defines specific, mandatory technical rules, hardware requirements, or software configurations (like AES-256) that must be followed to support a policy. A Guideline (Option B) is a non-mandatory recommendation. A Procedure (Option C) is a step-by-step how-to. A Playbook (Option D) is an incident response guide."
  },
  {
    "id": 148,
    "section": "S11",
    "question": "A systems administrator writes a technical document detailing the exact sequence of clicks, terminal commands, and configuration menus required to enable BitLocker encryption on a Windows 11 machine. What type of document has the administrator created?",
    "options": [
      "Procedure",
      "Policy",
      "Standard",
      "Attestation"
    ],
    "answer": 0,
    "explanation": "A Procedure (Option A) is a highly detailed, step-by-step set of instructions that describes exactly how to execute a specific task or implement a standard. A Policy (Option B) is high-level intent. A Standard (Option C) dictates mandatory requirements but not the exact clicks to achieve them. Attestation (Option D) is proof of compliance."
  },
  {
    "id": 149,
    "section": "S11",
    "question": "The IT department releases a memo advising employees that they should try to lock their screens when stepping away for short coffee breaks, although screen locking is only strictly enforced at the end of the work day. What type of governance document is this memo?",
    "options": [
      "Guideline",
      "Standard",
      "Procedure",
      "Policy"
    ],
    "answer": 0,
    "explanation": "A Guideline (Option A) provides recommendations, best practices, or advice that is highly encouraged but not strictly mandatory. A Standard (Option B), Procedure (Option C), and Policy (Option D) are all mandatory organizational directives with varying levels of granularity."
  },
  {
    "id": 150,
    "section": "S11",
    "question": "A hospital's board of directors fails to investigate the cybersecurity risks of a newly acquired clinic (lack of Due Diligence). Consequently, they fail to implement necessary firewalls to protect the clinic's network. Which term best describes the failure to implement those firewalls?",
    "options": [
      "Lack of Due Care",
      "Lack of Attestation",
      "Lack of Separation of Duties",
      "Lack of Change Management"
    ],
    "answer": 0,
    "explanation": "Due Care (Option A) is the principle of taking the necessary, responsible actions to mitigate risks (like actually installing a firewall). Due Diligence is the research phase to find the risks. Attestation (Option B) is signing off on compliance. Separation of Duties (Option C) prevents fraud. Change management (Option D) tracks IT changes."
  },
  {
    "id": 151,
    "section": "S12",
    "question": "A hospital is upgrading its fleet of mobile devices for doctors. The hospital wants strict control over the devices to enforce security policies via MDM and ensure HIPAA compliance, but also wants to allow doctors to use the devices for personal phone calls and apps during their breaks. Which mobile deployment model BEST fits these requirements?",
    "options": [
      "COPE (Corporate-Owned, Personally Enabled)",
      "BYOD (Bring Your Own Device)",
      "CYOD (Choose Your Own Device)",
      "COBO (Corporate-Owned, Business Only)"
    ],
    "answer": 0,
    "explanation": "COPE (Option A) provides the organization with full ownership and MDM control over the device (ensuring security and compliance) while still allowing the employee to use it for personal tasks. BYOD (Option B) leaves ownership with the employee, making strict control difficult. CYOD (Option C) generally restricts personal use. COBO (Option D) forbids personal use entirely."
  },
  {
    "id": 152,
    "section": "S12",
    "question": "An IT administrator needs to securely dispose of a hard drive containing highly classified proprietary source code. The administrator must ensure the data is permanently destroyed in a way that makes the drive itself completely unusable for future storage. Which sanitization method MUST be used?",
    "options": [
      "Degaussing",
      "Cryptographic Erase",
      "Overwriting (35 passes)",
      "Secure Erase"
    ],
    "answer": 0,
    "explanation": "Degaussing (Option A) uses a strong magnetic field to disrupt the magnetic domains on a hard drive, permanently destroying both the data and the device's ability to ever store data again. Cryptographic Erase (Option B), Overwriting (Option C), and Secure Erase (Option D) destroy the data but leave the physical drive intact and reusable."
  },
  {
    "id": 153,
    "section": "S12",
    "question": "A system administrator submits a proposal to upgrade the firmware on the core organizational routers. Before the Change Advisory Board (CAB) approves the request, they ask the administrator to detail the exact steps required to return the routers to their previous firmware version if the upgrade causes a network outage. What is the CAB requesting?",
    "options": [
      "Backout Plan",
      "Impact Analysis",
      "Version Control",
      "Standard Operating Procedure (SOP)"
    ],
    "answer": 0,
    "explanation": "A Backout Plan (Option A) is a predetermined rollback strategy designed to restore systems to their previous stable state if a change fails or causes unexpected disruption. An Impact Analysis (Option B) happens before the change to assess risks. Version Control (Option C) tracks changes over time. An SOP (Option D) provides step-by-step instructions for the change itself."
  },
  {
    "id": 154,
    "section": "S12",
    "question": "An organization relies on several legacy applications that are highly sensitive to network changes. To minimize the risk of disrupting business operations, the IT department restricts all system updates and network reconfigurations to occur only between 1:00 AM and 4:00 AM on Sundays. What change management practice is being utilized?",
    "options": [
      "Scheduled Maintenance Windows",
      "Impact Analysis",
      "Version Control",
      "Change Advisory Board (CAB) Approval"
    ],
    "answer": 0,
    "explanation": "Scheduled Maintenance Windows (Option A) are pre-defined time slots set aside specifically for implementing changes when system usage is at its lowest, thereby minimizing disruption to business operations. Impact analysis (Option B) evaluates risks. Version control (Option C) tracks document/code changes. The CAB (Option D) approves the changes."
  },
  {
    "id": 155,
    "section": "S12",
    "question": "A company is leasing a fleet of laptops for a short-term project. When the lease expires, the company must return the laptops, but wants to ensure all sensitive data is sanitized in the fastest way possible (under 60 seconds) so the hardware can be safely returned intact. Which sanitization method is the BEST choice?",
    "options": [
      "Cryptographic Erase (CE)",
      "Degaussing",
      "Overwriting",
      "Pulverizing"
    ],
    "answer": 0,
    "explanation": "Cryptographic Erase (Option A) is the fastest method (often taking seconds). The data is pre-encrypted on the drive, and the disposal process simply destroys the encryption keys, instantly rendering the data unreadable while leaving the drive intact for repurposing/return. Degaussing (Option B) and Pulverizing (Option D) destroy the hardware. Overwriting (Option C) is very slow."
  },
  {
    "id": 156,
    "section": "S12",
    "question": "Following a successful migration of the company's email server to the cloud, the IT director requires the project lead to formally close the change ticket and update the organizational network diagrams to reflect the new architecture. What is the primary purpose of this final change management step?",
    "options": [
      "Documenting Changes",
      "Impact Analysis",
      "Creating a Vision",
      "Backout Planning"
    ],
    "answer": 0,
    "explanation": "Documenting Changes (Option A) is the final step in the change management process. It ensures accountability, provides an accurate historical record (closing the ticket), and prevents future misconfigurations by ensuring reference materials (like network diagrams) reflect the current state. The other options occur before or during the change."
  },
  {
    "id": 157,
    "section": "S12",
    "question": "An employee loses their company-issued smartphone while traveling. The IT department uses a centralized platform to remotely lock the device and wipe all corporate data from it before it can be compromised. What technology enabled the IT department to perform this action?",
    "options": [
      "Mobile Device Management (MDM)",
      "Version Control",
      "Asset Enumeration",
      "Change Management"
    ],
    "answer": 0,
    "explanation": "Mobile Device Management (MDM) (Option A) is a centralized platform that allows organizations to securely manage mobile devices, enforce policies, and perform remote actions such as locking or wiping a lost or stolen device. Version Control (Option B) manages document changes. Asset Enumeration (Option C) counts connected devices. Change Management (Option D) governs IT changes."
  },
  {
    "id": 158,
    "section": "S12",
    "question": "A department manager needs to urgently purchase printer ink and paper to finish a report due by the end of the day. The total cost is $45. Which acquisition method is the MOST appropriate for this low-cost, urgent scenario?",
    "options": [
      "Company Credit Card",
      "Purchase Order (PO)",
      "Request for Proposal (RFP)",
      "Master Service Agreement (MSA)"
    ],
    "answer": 0,
    "explanation": "A Company Credit Card (Option A) is the most appropriate method for low-cost, urgent, day-to-day items, as it avoids the lengthy approval process of formal procurement. A Purchase Order (Option B) is a formal, legally binding document used for large or expensive acquisitions. RFP (Option C) and MSA (Option D) are formal vendor selection and contracting documents."
  },
  {
    "id": 159,
    "section": "S12",
    "question": "During an asset management audit, a security team uses network scanning tools to identify and count every device currently connected to the corporate network, discovering several unauthorized personal tablets. Which specific asset management process did the team perform?",
    "options": [
      "Enumeration",
      "Classification",
      "Sanitization",
      "Procurement"
    ],
    "answer": 0,
    "explanation": "Enumeration (Option A) is the process of identifying and counting all connected assets (often using scanners) to maintain an accurate inventory and detect unauthorized devices. Classification (Option B) categorizes assets by value. Sanitization (Option C) destroys data. Procurement (Option D) is the process of acquiring assets."
  },
  {
    "id": 160,
    "section": "S12",
    "question": "A third-party vendor has just finished securely destroying a batch of old servers for a financial institution. The institution requests documented proof that the hardware was properly destroyed according to regulatory standards so they can maintain their audit trail. What is the institution requesting?",
    "options": [
      "Certification",
      "Attestation",
      "A Purchase Order",
      "A Backout Plan"
    ],
    "answer": 0,
    "explanation": "Certification (Option A) is the documented proof (often a certificate of destruction) that data or hardware has been securely sanitized or destroyed, creating an essential audit trail for regulatory compliance. Attestation (Option B) is a broader declaration of compliance. A Purchase Order (Option C) is for buying. A Backout Plan (Option D) is for change management."
  },
  {
    "id": 161,
    "section": "S12",
    "question": "Before authorizing a major update to the company's firewall rules, the Change Advisory Board (CAB) requires the network engineer to submit a report detailing what could go wrong, which departments would be affected by downtime, and the long-term effects on remote workers. What change management process is the engineer completing?",
    "options": [
      "Impact Analysis",
      "Version Control",
      "Asset Classification",
      "Sanitization"
    ],
    "answer": 0,
    "explanation": "An Impact Analysis (Option A) is performed before a change is implemented to evaluate potential risks, determine what could go wrong, and assess the immediate and long-term effects on operations and users. Version control (Option B) tracks file changes. Asset classification (Option C) groups assets by value. Sanitization (Option D) destroys data."
  },
  {
    "id": 162,
    "section": "S12",
    "question": "Which of the following is the PRIMARY security benefit of maintaining a strict, up-to-date IT asset management program?",
    "options": [
      "It ensures all connected devices are known, reducing the attack surface by identifying unauthorized or unpatched systems.",
      "It allows the IT department to accurately calculate hardware depreciation for tax purposes.",
      "It prevents employees from utilizing Bring Your Own Device (BYOD) deployment models.",
      "It automates the process of rolling back failed software updates on legacy systems."
    ],
    "answer": 0,
    "explanation": "The primary security benefit of asset management (Option A) is visibility. You cannot secure what you do not know exists. A strict inventory ensures all devices are known, allowing administrators to enforce security protocols and identify rogue devices. Depreciation (Option B) is a financial benefit. Asset management supports BYOD (Option C) via MDM. Change management handles rollbacks (Option D)."
  },
  {
    "id": 163,
    "section": "S12",
    "question": "An organization is migrating its customer database. The engineer executing the change realizes the new database schema is causing application crashes. The engineer immediately references a predetermined strategy to restore the original database from a snapshot and revert the application code. What change management artifact is the engineer executing?",
    "options": [
      "Backout Plan",
      "Standard Operating Procedure (SOP)",
      "Impact Analysis",
      "Version Control"
    ],
    "answer": 0,
    "explanation": "A Backout Plan (Option A) is the predetermined rollback strategy used to return systems to their previous stable state when a change fails. While an SOP (Option B) provides step-by-step instructions for the change itself, the backout plan specifically handles the failure recovery. Impact analysis (Option C) is done beforehand. Version control (Option D) is a tool that facilitates the rollback."
  },
  {
    "id": 164,
    "section": "S12",
    "question": "A legal firm determines that all client communication records must be stored for exactly seven years to comply with industry regulations, after which they must be securely deleted to reduce liability and storage costs. What type of policy is the firm enforcing?",
    "options": [
      "Data Retention Policy",
      "Acceptable Use Policy (AUP)",
      "Change Management Policy",
      "Mobile Device Management (MDM) Policy"
    ],
    "answer": 0,
    "explanation": "A Data Retention Policy (Option A) defines exactly how long specific types of data must be stored before disposal, balancing regulatory requirements with storage costs and security risks. An AUP (Option B) governs user behavior. Change Management (Option C) controls system modifications. MDM (Option D) controls mobile devices."
  },
  {
    "id": 165,
    "section": "S12",
    "question": "An organization adopts a deployment model where employees are provided a list of pre-approved, company-owned smartphones. Employees must select a device from this list, and the devices are heavily restricted to business use only. Which mobile deployment model is this?",
    "options": [
      "CYOD (Choose Your Own Device)",
      "COPE (Corporate-Owned, Personally Enabled)",
      "BYOD (Bring Your Own Device)",
      "VDI (Virtual Desktop Infrastructure)"
    ],
    "answer": 0,
    "explanation": "In a CYOD (Option A) model, the organization owns the device and allows the employee to choose from a pre-approved list, but typically restricts the device heavily (limiting or forbidding personal use). COPE (Option B) allows personal use. BYOD (Option C) means the employee owns the device. VDI (Option D) is a virtualization technology, not a mobile deployment model."
  },
  {
    "id": 166,
    "section": "S13",
    "question": "A financial organization hires a third-party cybersecurity firm to simulate a real-world cyberattack against their infrastructure. The external team is given zero prior knowledge about the organization's network, IP ranges, or internal systems. Which type of penetration testing environment is this?",
    "options": [
      "Unknown Environment",
      "Known Environment",
      "Partially Known Environment",
      "Internal Assessment"
    ],
    "answer": 0,
    "explanation": "An Unknown Environment (Option A), formerly known as black-box testing, occurs when testers receive minimal or no information about the target, simulating a real external attacker who must perform extensive reconnaissance. A Known Environment (Option B) provides full details. Partially Known (Option C) provides some details. An Internal Assessment (Option D) is conducted by internal staff."
  },
  {
    "id": 167,
    "section": "S13",
    "question": "During a penetration testing engagement, the testing team uses tools like WHOIS, searches social media for employee information, and reviews public job postings to identify the target's technology stack. At no point do they send any packets directly to the target's servers. Which phase of the engagement are they performing?",
    "options": [
      "Passive Reconnaissance",
      "Active Reconnaissance",
      "Initial Exploitation",
      "Post-Exploitation"
    ],
    "answer": 0,
    "explanation": "Passive Reconnaissance (Option A) involves gathering information without directly engaging or sending traffic to the target systems, making it highly stealthy. Active Reconnaissance (Option B) involves direct engagement, like port scanning with Nmap. Initial Exploitation (Option C) is the actual attack. Post-Exploitation (Option D) happens after a breach."
  },
  {
    "id": 168,
    "section": "S13",
    "question": "An organization wants to improve its overall security posture by having its internal defensive team work directly alongside an external offensive team during a live engagement. The offensive team will explain their attacks as they happen, allowing the defensive team to tune their sensors in real-time. Which type of engagement is being requested?",
    "options": [
      "Purple Team",
      "Red Team",
      "Blue Team",
      "White Team"
    ],
    "answer": 0,
    "explanation": "A Purple Team (Option A) is an integrated approach where the offensive (Red) and defensive (Blue) teams work collaboratively in a single engagement to maximize learning and improve defenses in real-time. Red Team (Option B) acts independently as attackers. Blue Team (Option C) acts independently as defenders. White Team (Option D) usually acts as referees in exercises."
  },
  {
    "id": 169,
    "section": "S13",
    "question": "An IT department is preparing for an upcoming regulatory audit. To ensure they are ready, the IT director tasks a group of internal employees to review the password policies, examine access rights, and verify least privilege enforcement using a standardized checklist. Which activity is the IT department performing?",
    "options": [
      "Internal Assessment / Self-Assessment",
      "External Audit",
      "Penetration Test",
      "Hardware Attestation"
    ],
    "answer": 0,
    "explanation": "An Internal Assessment or Self-Assessment (Option A) is an in-depth analysis conducted by an organization's own staff to identify gaps and prepare for formal audits. An External Audit (Option B) is conducted by an independent third party. A Penetration Test (Option C) simulates an attack. Hardware Attestation (Option D) verifies physical component integrity."
  },
  {
    "id": 170,
    "section": "S13",
    "question": "A penetration tester successfully exploits a vulnerability on a Windows server using Metasploit. The exploit delivers code that forces the target server to connect back to the tester's listening machine on port 443, successfully bypassing the target's inbound firewall rules. What type of payload was utilized?",
    "options": [
      "Reverse Shell",
      "Bind Shell",
      "Auxiliary Module",
      "Encoder"
    ],
    "answer": 0,
    "explanation": "A Reverse Shell (Option A) payload forces the compromised target to initiate an outbound connection back to the attacker's machine, which typically bypasses inbound firewall restrictions. A Bind Shell (Option B) opens a port on the target and waits for the attacker to connect inward. An Auxiliary Module (Option C) is for scanning. An Encoder (Option D) obfuscates code."
  },
  {
    "id": 171,
    "section": "S13",
    "question": "Following a comprehensive security review by an independent cybersecurity firm, a healthcare provider requests an official document proving that the test occurred during a specified timeframe and that the findings are authentic. This document will be shown to regulators to prove HIPAA compliance. What is the provider requesting?",
    "options": [
      "Letter of Attestation",
      "Penetration Test Report",
      "Vulnerability Scan Results",
      "Business Impact Analysis (BIA)"
    ],
    "answer": 0,
    "explanation": "A Letter of Attestation (Option A) is a formal validation provided by the assessing firm proving that the test actually occurred, serving as an official record for third parties and regulators. A Penetration Test Report (Option B) contains the technical findings and remediation steps, which are often too sensitive to share broadly. Vulnerability Scans (Option C) and BIA (Option D) do not serve as formal proof of an independent test."
  },
  {
    "id": 172,
    "section": "S13",
    "question": "An organization relies heavily on the Metasploit framework for internal security testing. An analyst wants to execute a port scan against a subnet without actually delivering a malicious payload or attempting an exploit. Which Metasploit module category should the analyst use?",
    "options": [
      "Auxiliary",
      "Exploit",
      "Post",
      "Payload"
    ],
    "answer": 0,
    "explanation": "Auxiliary modules (Option A) in Metasploit include tools like scanners, sniffers, and fuzzers that perform tasks such as port scanning or vulnerability checking without actually executing an exploit. Exploits (Option B) deliver attacks. Post modules (Option C) run after a compromise. Payloads (Option D) are the code executed upon successful exploitation."
  },
  {
    "id": 173,
    "section": "S13",
    "question": "A regulatory body mandates that a nuclear power plant undergo an exhaustive inspection every three years. This inspection includes technical assessments of ICS/SCADA equipment, policy reviews, and knowledge-based testing of personnel to validate they know how to respond to emergencies. Which term BEST describes this comprehensive evaluation?",
    "options": [
      "Examination",
      "Vulnerability Assessment",
      "Internal Audit",
      "Passive Reconnaissance"
    ],
    "answer": 0,
    "explanation": "An Examination (Option A) is a highly detailed external inspection that goes beyond technical scanning to include personnel knowledge testing, policy review, and certification verification (common in highly regulated sectors like nuclear energy). A Vulnerability Assessment (Option B) focuses only on technical flaws. Internal Audits (Option C) are not external. Reconnaissance (Option D) is info gathering."
  },
  {
    "id": 174,
    "section": "S13",
    "question": "During an authorized physical penetration test, an assessor successfully enters a secure data center by dressing as a delivery driver and walking closely behind an employee who just unlocked the main door with their badge. Which vulnerability did the assessor exploit?",
    "options": [
      "Tailgating",
      "Shoulder Surfing",
      "Card Cloning",
      "Lock Picking"
    ],
    "answer": 0,
    "explanation": "Tailgating (Option A) is the physical security vulnerability where an unauthorized person follows an authorized person into a secure area without providing their own credentials. Shoulder Surfing (Option B) involves looking at someone's screen. Card Cloning (Option C) requires copying an RFID badge. Lock picking (Option D) involves manipulating a physical lock."
  },
  {
    "id": 175,
    "section": "S13",
    "question": "Which group within a corporate governance structure is typically composed of board members and is ultimately responsible for overseeing the performance of internal and external audits, as well as ensuring organizational compliance with legal requirements?",
    "options": [
      "Audit Committee",
      "Change Advisory Board (CAB)",
      "Red Team",
      "Incident Response Team"
    ],
    "answer": 0,
    "explanation": "The Audit Committee (Option A) is a subgroup of the board of directors that oversees audit and compliance activities, ensuring executive-level accountability. The CAB (Option B) approves IT changes. The Red Team (Option C) performs offensive testing. The Incident Response Team (Option D) handles security breaches."
  },
  {
    "id": 176,
    "section": "S13",
    "question": "A retail company that processes thousands of credit card transactions daily must ensure its payment processing systems are secure. To avoid heavy fines and maintain the ability to process payments, which specific regulatory standard MUST the company's external audits prove compliance with?",
    "options": [
      "PCI DSS",
      "HIPAA",
      "GDPR",
      "HITECH"
    ],
    "answer": 0,
    "explanation": "PCI DSS (Payment Card Industry Data Security Standard) (Option A) is the mandatory standard for any organization that handles, stores, or transmits credit card data. HIPAA (Option B) and HITECH (Option D) apply to healthcare. GDPR (Option C) applies to the privacy of EU citizens' data."
  },
  {
    "id": 177,
    "section": "S13",
    "question": "A security analyst is using Metasploit and has successfully exploited a target, opening a Meterpreter shell. The analyst now wants to interact with a different target without losing the connection to the first one. Which command allows the analyst to place the current active communication channel into the background?",
    "options": [
      "Ctrl+Z",
      "sessions -l",
      "run",
      "set LHOST"
    ],
    "answer": 0,
    "explanation": "In Metasploit, pressing Ctrl+Z (Option A) backgrounds the current active session, allowing the user to return to the msfconsole prompt while keeping the connection to the compromised host open. `sessions -l` (Option B) lists the active sessions. `run` (Option C) starts an exploit. `set LHOST` (Option D) configures a variable."
  },
  {
    "id": 178,
    "section": "S13",
    "question": "A penetration tester is configuring an exploit in Metasploit. They need to specify the IP address of their own machine so the compromised server knows where to send the reverse shell connection back to. Which Metasploit variable must the tester configure?",
    "options": [
      "LHOST",
      "RHOST",
      "RPORT",
      "NOP"
    ],
    "answer": 0,
    "explanation": "LHOST (Local Host) (Option A) is the Metasploit variable that defines the IP address of the attacker's machine, crucial for reverse payloads. RHOST (Remote Host) (Option B) defines the target's IP. RPORT (Option C) defines the target's port. NOP (Option D) is a no-operation CPU instruction used in payload generation."
  },
  {
    "id": 179,
    "section": "S13",
    "question": "An organization wants to validate the integrity of its hardware components during the boot process to ensure no firmware rootkits have been installed. They rely on a dedicated microchip that stores cryptographic measurements of the boot sequence. What type of attestation is being utilized?",
    "options": [
      "Hardware Attestation",
      "Software Attestation",
      "System Attestation",
      "Letter of Attestation"
    ],
    "answer": 0,
    "explanation": "Hardware Attestation (Option A) validates the physical integrity of a device, typically using a Trusted Platform Module (TPM) to store and check cryptographic measurements during boot. Software attestation (Option B) checks code integrity (like digital signatures on updates). System attestation (Option C) checks overall compliance. A Letter of Attestation (Option D) is a document proving an audit occurred."
  },
  {
    "id": 180,
    "section": "S13",
    "question": "A security consultant is hired to evaluate a company's network defenses. The consultant acts exactly like a malicious hacker, actively seeking out vulnerabilities, deploying exploits, and attempting to exfiltrate data without alerting the company's internal IT staff. What specific role is the consultant performing?",
    "options": [
      "Red Team",
      "Blue Team",
      "Purple Team",
      "Audit Committee"
    ],
    "answer": 0,
    "explanation": "A Red Team (Option A) performs offensive penetration testing, simulating real-world attackers to proactively find and exploit vulnerabilities. A Blue Team (Option B) defends against these attacks. A Purple Team (Option C) is a collaborative effort between Red and Blue. The Audit Committee (Option D) is a governance body."
  },
  {
    "id": 181,
    "section": "S14",
    "question": "A global e-commerce company experiences a massive surge in web traffic during an annual holiday sale. To prevent any single server from becoming overwhelmed and crashing, the network is configured to distribute incoming user requests evenly across a pool of twenty active web servers. Which high availability concept is being utilized?",
    "options": [
      "Load Balancing",
      "Clustering",
      "Redundant Power",
      "Geographic Dispersion"
    ],
    "answer": 0,
    "explanation": "Load Balancing (Option A) distributes incoming network traffic or workloads across multiple computing resources to optimize resource use, maximize throughput, and prevent any single server from overloading. Clustering (Option B) ties servers together so one takes over if another fails, focusing on fault tolerance rather than traffic distribution. Power (Option C) and Dispersion (Option D) don't manage traffic."
  },
  {
    "id": 182,
    "section": "S14",
    "question": "A video editing studio needs a local storage array that provides the absolute highest read and write speeds possible to handle uncompressed 8K video files. The studio does not care about redundancy, as all files are backed up nightly to the cloud. Which RAID configuration BEST meets this requirement?",
    "options": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 10"
    ],
    "answer": 0,
    "explanation": "RAID 0 (Option A), or striping, splits data evenly across two or more disks purely to maximize read/write performance. It provides zero redundancy or fault tolerance; if one disk fails, all data is lost. RAID 1 (Option B) provides mirroring. RAID 5 (Option C) and 10 (Option D) provide fault tolerance but have overhead that makes them slightly slower for pure raw performance compared to RAID 0."
  },
  {
    "id": 183,
    "section": "S14",
    "question": "A database administrator is configuring a storage array that requires fault tolerance. The administrator wants the array to survive the failure of any single drive without downtime, but needs a more cost-effective solution than full mirroring. The administrator has three identical hard drives available. Which RAID configuration should be implemented?",
    "options": [
      "RAID 5",
      "RAID 0",
      "RAID 1",
      "RAID 6"
    ],
    "answer": 0,
    "explanation": "RAID 5 (Option A) uses striping with parity across a minimum of three disks. It survives the loss of one disk (fault tolerance) and is more cost-effective (less storage overhead) than RAID 1 (mirroring). RAID 0 (Option B) has no fault tolerance. RAID 1 (Option C) requires an even number of disks for mirroring. RAID 6 (Option D) requires a minimum of four disks."
  },
  {
    "id": 184,
    "section": "S14",
    "question": "An organization is updating its Continuity of Operations Plan (COOP). They decide that their primary web application cannot tolerate more than 30 minutes of data loss under any circumstances. Based on this requirement, the IT team configures database snapshots to run every 15 minutes. What metric did the organization define?",
    "options": [
      "Recovery Point Objective (RPO)",
      "Recovery Time Objective (RTO)",
      "Mean Time to Repair (MTTR)",
      "Maximum Tolerable Downtime (MTD)"
    ],
    "answer": 0,
    "explanation": "The Recovery Point Objective (RPO) (Option A) defines the maximum acceptable amount of data loss (measured in time) before the loss severely impacts the organization. It dictates backup frequency. RTO (Option B) is the target time to restore a system. MTTR (Option C) is the average repair time. MTD (Option D) is the maximum time a business can survive a process being down."
  },
  {
    "id": 185,
    "section": "S14",
    "question": "A company situated in a hurricane-prone region is establishing a redundant backup site. Budget constraints are tight. They decide to lease an empty warehouse in a neighboring state, equipping it only with basic utilities (power, water, restrooms). In a disaster, they plan to ship servers and desks to the site, expecting it to take three weeks to become operational. Which type of redundant site did they choose?",
    "options": [
      "Cold Site",
      "Hot Site",
      "Warm Site",
      "Mobile Site"
    ],
    "answer": 0,
    "explanation": "A Cold Site (Option A) is an empty facility with only basic utilities. It has no computing hardware or active network connections and takes the longest time (weeks or months) to bring online, but it is the cheapest option. A Hot Site (Option B) is fully equipped and ready instantly. A Warm Site (Option C) is partially equipped. A Mobile Site (Option D) is a portable trailer/tent."
  },
  {
    "id": 186,
    "section": "S14",
    "question": "During a severe thunderstorm, a data center experiences a total loss of power from the municipal grid. The facility's diesel generators take approximately 45 seconds to spin up and begin providing power. Which critical device prevents the servers from shutting down during those 45 seconds?",
    "options": [
      "Uninterruptible Power Supply (UPS)",
      "Line Conditioner",
      "Power Distribution Center (PDC)",
      "Surge Protector"
    ],
    "answer": 0,
    "explanation": "An Uninterruptible Power Supply (UPS) (Option A) provides immediate emergency battery power when the main source fails, bridging the critical gap until long-term generators come online. A Line Conditioner (Option B) regulates minor voltage fluctuations but cannot sustain power during a blackout. A PDC (Option C) distributes power. A Surge Protector (Option D) only blocks voltage spikes."
  },
  {
    "id": 187,
    "section": "S14",
    "question": "A financial institution's security team meets in a conference room. A facilitator presents a fictional scenario where a ransomware attack has encrypted their primary file servers. The team members then verbally discuss their roles, how they would communicate, and the steps they would take according to their incident response plan, without touching any actual keyboards. What type of test is this?",
    "options": [
      "Tabletop Exercise",
      "Failover Test",
      "Parallel Processing",
      "Simulation"
    ],
    "answer": 0,
    "explanation": "A Tabletop Exercise (Option A) is a discussion-based session where team members meet to discuss their roles and responses to a hypothetical emergency scenario. It is low-cost and does not involve actual system deployment or cutovers. A Failover Test (Option B) involves actual system transitions. Parallel Processing (Option C) runs two systems at once. A Simulation (Option D) involves hands-on virtual environments."
  },
  {
    "id": 188,
    "section": "S14",
    "question": "To ensure maximum fault tolerance, a systems engineer deploys a web application across three different public cloud providers (AWS, Azure, and Google Cloud). If one provider experiences a regional outage, the traffic automatically routes to the other two. What concept does this architecture BEST represent?",
    "options": [
      "Multi-Cloud Systems",
      "High Availability Clustering",
      "Virtual Warm Site",
      "Infrastructure as Code (IaC)"
    ],
    "answer": 0,
    "explanation": "Multi-Cloud Systems (Option A) involve distributing data, applications, and services across several different cloud-based environments as an additional layer of redundancy, mitigating the risk of a single vendor's outage (avoiding single points of failure and vendor lock-in). Clustering (Option B) usually refers to local server nodes. A Virtual Warm Site (Option C) is for disaster recovery, not active multi-cloud load."
  },
  {
    "id": 189,
    "section": "S14",
    "question": "A network architect is designing a backup solution for an organization that cannot tolerate any downtime. The architect implements a system where data written to the primary database in New York is instantly copied over a high-speed fiber link to a secondary database in London, keeping both locations perfectly synchronized in real-time. Which concept is being implemented?",
    "options": [
      "Replication",
      "Journaling",
      "Snapshotting",
      "Offsite Tape Backup"
    ],
    "answer": 0,
    "explanation": "Replication (Option A) involves making real-time or near real-time copies of data to a secondary location, keeping systems perfectly synchronized so a failover can happen instantly. Journaling (Option B) logs data changes. Snapshotting (Option C) captures data at a specific point in time (not continuously). Offsite Tape Backup (Option D) is a slow, manual/batch process."
  },
  {
    "id": 190,
    "section": "S14",
    "question": "The IT director of a rapidly growing hospital is analyzing the current data center's square footage, cooling capacity, and maximum power draw. The director determines they will run out of physical space for new servers in 18 months, prompting a proposal to migrate non-critical systems to the cloud. Which specific capacity planning aspect is the director addressing?",
    "options": [
      "Infrastructure",
      "People",
      "Process",
      "Redundancy"
    ],
    "answer": 0,
    "explanation": "Infrastructure capacity planning (Option A) focuses on the physical space, utilities, power, cooling, and facilities needed to support ongoing operations. People (Option B) focuses on workforce/skills. Process (Option C) focuses on workflows and automation. Redundancy (Option D) is a separate concept related to failovers."
  },
  {
    "id": 191,
    "section": "S14",
    "question": "An enterprise storage administrator implements a RAID 10 configuration using four hard drives. What combination of RAID levels is utilized in RAID 10 to provide both speed and redundancy?",
    "options": [
      "Striping and Mirroring",
      "Striping and Parity",
      "Mirroring and Double Parity",
      "Striping and Double Parity"
    ],
    "answer": 0,
    "explanation": "RAID 10 (Option A) combines RAID 1 (Mirroring) and RAID 0 (Striping). Data is mirrored across pairs of drives for fault tolerance, and those mirrored pairs are then striped for increased read/write performance. Striping and parity (Option B) is RAID 5. Double parity (Option D) is RAID 6."
  },
  {
    "id": 192,
    "section": "S14",
    "question": "A major online retailer's primary payment processing vendor unexpectedly revokes their merchant account. The retailer's IT team immediately activates a secondary, pre-configured payment gateway, allowing customer transactions to continue with minimal disruption. Which specific plan did the IT team execute?",
    "options": [
      "Business Continuity Plan (BCP)",
      "Disaster Recovery Plan (DRP)",
      "Capacity Plan",
      "Impact Analysis"
    ],
    "answer": 0,
    "explanation": "A Business Continuity Plan (BCP) (Option A) covers processes to respond to disruptive events (technical or non-technical, like losing a vendor) so the business can keep operating. A Disaster Recovery Plan (DRP) (Option B) specifically handles recovery from catastrophic physical disasters (hurricanes, fires). The capacity plan (Option C) and impact analysis (Option D) are planning tools, not incident response plans."
  },
  {
    "id": 193,
    "section": "S14",
    "question": "An organization relies on older industrial control hardware that is sensitive to minor electrical voltage drops. Even a 5% drop in voltage for a few seconds causes the controllers to reboot. Which power protection device should be installed to regulate the power signal and prevent these reboots?",
    "options": [
      "Line Conditioner",
      "Diesel Generator",
      "Surge Protector",
      "Load Balancer"
    ],
    "answer": 0,
    "explanation": "A Line Conditioner (Option A) regulates minor voltage fluctuations (sags, swells, and minor spikes), delivering a clean, consistent power signal to sensitive equipment. A Diesel Generator (Option B) provides long-term power during blackouts but takes time to start. A Surge Protector (Option C) only stops spikes, not sags. A Load Balancer (Option D) manages network traffic."
  },
  {
    "id": 194,
    "section": "S14",
    "question": "A development team wants to ensure they can easily roll back a database to a known-good state if a new software update corrupts the data. Instead of performing a slow, full backup of the 5TB database, they capture a rapid, point-in-time copy that only records subsequent changes. What did the team create?",
    "options": [
      "Snapshot",
      "Journal",
      "Mirror",
      "Clone"
    ],
    "answer": 0,
    "explanation": "A Snapshot (Option A) is a point-in-time copy of data that captures a consistent, frozen state. It is highly efficient because it typically only records the changes made after the snapshot was taken, allowing for rapid rollbacks. A journal (Option B) is a continuous log of every transaction. A mirror (Option C) is a full, real-time copy. A clone (Option D) is a full, independent copy."
  },
  {
    "id": 195,
    "section": "S14",
    "question": "An organization decides to test its disaster recovery plan by shifting its entire production workload from its primary data center in New York to its redundant hot site in Texas. The IT team executes the cutover, verifies the Texas site is handling live traffic properly, and then shifts traffic back to New York. What type of test was performed?",
    "options": [
      "Failover Test",
      "Tabletop Exercise",
      "Parallel Processing",
      "Simulation"
    ],
    "answer": 0,
    "explanation": "A Failover Test (Option A) involves actually transitioning live systems or applications from a primary environment to a backup component or redundant site to prove that the disaster recovery mechanics work under real conditions. A Tabletop Exercise (Option B) is a discussion. Parallel Processing (Option C) runs both sites at once without cutting over. A Simulation (Option D) uses virtual/fake traffic in a lab."
  },
  {
    "id": 196,
    "section": "S15",
    "question": "An enterprise relies on a legacy customer management application that must run on an older, unpatched version of Windows Server. To reduce the risk of a network-wide compromise while still allowing customer service reps to access the application, the security team places the server on a dedicated VLAN with strict firewall rules blocking its access to the internet and the rest of the corporate network. What architectural security concept is being utilized?",
    "options": [
      "Logical Separation",
      "Physical Separation (Air Gapping)",
      "Containerization",
      "Microservices"
    ],
    "answer": 0,
    "explanation": "Logical Separation (Option A) uses rule-based network devices (like VLANs and firewalls) to create boundaries within a shared physical network, isolating vulnerable systems like legacy apps. Physical Separation/Air Gapping (Option B) involves completely removing physical network connections, which is too restrictive for an app that reps need to access. Containerization (Option C) and Microservices (Option D) are software architectures, not network separation methods."
  },
  {
    "id": 197,
    "section": "S15",
    "question": "A startup company develops a new web application using AWS Lambda. The developers upload their code functions, and AWS automatically provisions the servers, scales the resources based on user demand, and charges the company only for the exact milliseconds the code is executing. Which computing model does this represent?",
    "options": [
      "Serverless Computing",
      "Infrastructure as Code (IaC)",
      "Containerization",
      "On-Premise Deployment"
    ],
    "answer": 0,
    "explanation": "Serverless Computing (Option A), or Function-as-a-Service (FaaS), is a model where the cloud provider completely manages the server provisioning and scaling, allowing developers to focus solely on writing code that executes in response to events. Infrastructure as Code (Option B) automates deployment via scripts. Containerization (Option C) packages apps, but the developers still manage the containers. On-Premise (Option D) involves physical hardware."
  },
  {
    "id": 198,
    "section": "S15",
    "question": "A water treatment facility uses specialized controllers to manage the opening and closing of physical valves throughout the plant. These systems were installed two decades ago and are highly vulnerable to modern network attacks. What type of system is being described?",
    "options": [
      "Industrial Control System (ICS)",
      "Internet of Things (IoT) Device",
      "Software-Defined Network (SDN)",
      "Microservice"
    ],
    "answer": 0,
    "explanation": "Industrial Control Systems (ICS) (Option A), including PLCs, are specialized systems used to manage industrial processes like water treatment, power generation, and manufacturing. They often rely on legacy hardware highly vulnerable to cyber threats. IoT devices (Option B) are consumer/commercial smart devices. SDN (Option C) manages IT networks. Microservices (Option D) are software architectures."
  },
  {
    "id": 199,
    "section": "S15",
    "question": "An IT team is tasked with deploying identical development, testing, and production environments for a new application. To ensure perfect consistency and avoid manual configuration errors, the team writes a YAML script that automatically provisions the required virtual machines, networks, and databases when executed. What practice is the team adopting?",
    "options": [
      "Infrastructure as Code (IaC)",
      "Software-Defined Networking (SDN)",
      "Virtual Machine Escape Mitigation",
      "Containerization"
    ],
    "answer": 0,
    "explanation": "Infrastructure as Code (IaC) (Option A) involves automating the provisioning and management of IT infrastructure through machine-readable definition files (like YAML), ensuring consistency, speed, and auditability. SDN (Option B) specifically separates network control and data planes. VM Escape Mitigation (Option C) involves patching hypervisors. Containerization (Option D) packages software dependencies."
  },
  {
    "id": 200,
    "section": "S15",
    "question": "A cloud customer is reviewing their Service Level Agreement (SLA) and a document outlining that the cloud provider is responsible for patching the physical servers, while the customer is responsible for patching the guest operating systems and configuring the firewalls. What specific concept does this document describe?",
    "options": [
      "Responsibility Matrix (Shared Responsibility Model)",
      "Infrastructure as Code (IaC)",
      "Software Attestation",
      "Capacity Planning"
    ],
    "answer": 0,
    "explanation": "The Responsibility Matrix or Shared Responsibility Model (Option A) clearly defines the dividing line between the cloud service provider's security responsibilities (typically the underlying physical infrastructure) and the customer's responsibilities (typically data, OS, and access controls). The other options do not define security boundaries between providers and tenants."
  },
  {
    "id": 201,
    "section": "S15",
    "question": "A large enterprise network replaces its traditional routers with a system where a centralized server application acts as the 'brain,' dictating traffic rules to all the physical switches on the network. This allows administrators to reconfigure the entire network routing instantly via software. Which technology enables this?",
    "options": [
      "Software-Defined Networking (SDN)",
      "Virtual Private Network (VPN)",
      "Microservices",
      "High Availability Clustering"
    ],
    "answer": 0,
    "explanation": "Software-Defined Networking (SDN) (Option A) decouples the network's control plane (the brain) from the data plane (the forwarding hardware), allowing administrators to programmatically and centrally manage network traffic. A VPN (Option B) encrypts traffic. Microservices (Option C) break down software. Clustering (Option D) provides hardware redundancy."
  },
  {
    "id": 202,
    "section": "S15",
    "question": "A security researcher discovers a vulnerability that allows an attacker, who has compromised a single virtual machine, to execute arbitrary code directly on the host server's VMware ESXi software, subsequently gaining access to all other virtual machines on that server. What type of vulnerability did the researcher discover?",
    "options": [
      "VM Escape",
      "Privilege Escalation",
      "VM Sprawl",
      "Data Remnant Exposure"
    ],
    "answer": 0,
    "explanation": "A VM Escape (Option A) occurs when an attacker breaks out of the isolation of a virtual machine to interact directly with the underlying hypervisor (like ESXi), potentially compromising the entire host and all other VMs on it. Privilege Escalation (Option B) involves gaining higher rights within a single OS. VM Sprawl (Option C) is unmanaged VM growth. Data Remnants (Option D) involve un-deleted data."
  },
  {
    "id": 203,
    "section": "S15",
    "question": "A hospital uses a specialized, implanted pacemaker that must process data and send electrical pulses without any buffering delay to keep a patient alive. The software running on the pacemaker is designed specifically for time-sensitive, predictable execution. What type of operating system does the pacemaker use?",
    "options": [
      "Real-Time Operating System (RTOS)",
      "Type 1 Hypervisor",
      "Software-Defined Network (SDN)",
      "Type 2 Hypervisor"
    ],
    "answer": 0,
    "explanation": "A Real-Time Operating System (RTOS) (Option A) is designed to process data as it arrives with zero or minimal buffering delays, making it critical for life-safety embedded systems (like medical devices or automotive brakes) where predictable execution is mandatory. Hypervisors (Options B and D) run virtual machines. SDN (Option C) manages network traffic."
  },
  {
    "id": 204,
    "section": "S15",
    "question": "A software development team decides to refactor a massive, monolithic application into dozens of small, independent services. Each service handles a specific business function (e.g., billing, user profiles), can be written in a different programming language, and can be updated without affecting the rest of the application. Which architectural style is the team adopting?",
    "options": [
      "Microservices",
      "Centralized Architecture",
      "Virtualization",
      "On-Premise Deployment"
    ],
    "answer": 0,
    "explanation": "Microservices (Option A) architecture structures an application as a collection of small, autonomous services that communicate over a network, providing massive scalability and flexibility compared to monolithic designs. Centralized Architecture (Option B) relies on a single point of control. Virtualization (Option C) abstracts hardware. On-Premise (Option D) refers to hardware location."
  },
  {
    "id": 205,
    "section": "S15",
    "question": "An organization is executing an Infrastructure as Code (IaC) script. The administrator notices that no matter how many times the script is run against the production environment, the end result is exactly the same, and no duplicate resources are accidentally created. Which property of IaC ensures this predictable behavior?",
    "options": [
      "Idempotence",
      "Air Gapping",
      "Containerization",
      "Microservices"
    ],
    "answer": 0,
    "explanation": "Idempotence (Option A) is the property of an operation that guarantees the end result will always be the same no matter how many times it is executed, regardless of the system's starting state. This is a core benefit of robust IaC scripts. Air gapping (Option B) is physical separation. Containerization (Option C) and Microservices (Option D) are software architectures."
  },
  {
    "id": 206,
    "section": "S15",
    "question": "A financial firm maintains a highly secure internal network. To provide employees access to email and HR tools from home, the firm relies heavily on cloud services. The firm keeps its trading databases strictly on local, privately owned servers, but uses AWS for web hosting. Which deployment model is the firm using?",
    "options": [
      "Hybrid Cloud",
      "Public Cloud Only",
      "Private Cloud Only",
      "Decentralized Architecture"
    ],
    "answer": 0,
    "explanation": "A Hybrid Cloud (Option A) architecture combines on-premise infrastructure (or private cloud) for sensitive/compliant workloads with public cloud services for flexibility and cost-effectiveness. Public cloud only (Option B) would mean no on-premise servers. Private cloud only (Option C) would mean no AWS. Decentralized Architecture (Option D) refers to distributed control nodes."
  },
  {
    "id": 207,
    "section": "S15",
    "question": "An organization decides to deploy an application using Docker. The developers package the application code alongside its libraries and dependencies so it can run consistently on any developer's laptop or cloud server. All deployed instances will share the host machine's OS kernel to save resources. What technology is being used?",
    "options": [
      "Containerization",
      "Type 1 Virtualization",
      "Serverless Computing",
      "Air Gapping"
    ],
    "answer": 0,
    "explanation": "Containerization (Option A) (e.g., Docker) encapsulates an application and its dependencies into a lightweight container that shares the host OS kernel, making it highly portable and efficient. Type 1 Virtualization (Option B) involves heavy VMs with independent OSes. Serverless (Option C) abstracts the server entirely. Air Gapping (Option D) is physical network isolation."
  },
  {
    "id": 208,
    "section": "S15",
    "question": "A manufacturing company operates a fleet of autonomous robotic arms on the assembly line. The manufacturer discovers a critical vulnerability in the robots' firmware. Because taking the robots offline manually is too expensive, the manufacturer pushes a cryptographic patch securely over the wireless network directly to the robots. What patching method was used?",
    "options": [
      "Over-the-Air (OTA) Update",
      "Infrastructure as Code (IaC)",
      "Live VM Migration",
      "Data-in-Transit Encryption"
    ],
    "answer": 0,
    "explanation": "Over-the-Air (OTA) Updates (Option A) are used to remotely deliver and install firmware patches to embedded systems, IoT devices, or vehicles without requiring physical access to the hardware. IaC (Option B) manages server infrastructure. Live VM Migration (Option C) moves running virtual machines. Encryption (Option D) protects data, but is not the update mechanism itself."
  },
  {
    "id": 209,
    "section": "S15",
    "question": "Which of the following is the PRIMARY security concern associated with the rapid proliferation of consumer Internet of Things (IoT) devices on corporate networks?",
    "options": [
      "IoT devices often have weak default settings, hardcoded passwords, and lack regular patch support.",
      "IoT devices require excessive bandwidth, leading to Denial of Service (DoS) attacks.",
      "IoT devices natively encrypt all traffic, making network monitoring impossible.",
      "IoT devices use Type 1 hypervisors that are susceptible to VM Escape."
    ],
    "answer": 0,
    "explanation": "The primary security concern with IoT devices (Option A) is their historically poor security posture—many ship with weak/hardcoded credentials, open ports, and no mechanism for patching, making them easy targets for botnets. Bandwidth (Option B) is rarely the primary security issue. Most IoT devices actually lack encryption (Option C). IoT devices do not typically run hypervisors (Option D)."
  },
  {
    "id": 210,
    "section": "S15",
    "question": "A system administrator spins up a new virtual machine to test a suspicious executable file. To ensure maximum efficiency, the virtualization software is installed directly onto the bare metal hardware of a dedicated server, completely bypassing any standard operating system like Windows or Linux. Which technology is the administrator using?",
    "options": [
      "Type 1 Hypervisor",
      "Type 2 Hypervisor",
      "Containerization",
      "Software-Defined Networking (SDN)"
    ],
    "answer": 0,
    "explanation": "A Type 1 Hypervisor (Option A), or bare-metal hypervisor (e.g., VMware ESXi), runs directly on the host hardware without requiring an underlying host operating system, providing maximum efficiency and performance. A Type 2 Hypervisor (Option B) runs on top of a standard OS. Containerization (Option C) shares the OS kernel. SDN (Option D) manages networking, not virtualization."
  },
  {
    "id": 211,
    "section": "S16",
    "question": "A security analyst configures a new firewall and needs to block unencrypted remote administration traffic from reaching a critical switch, while allowing secure remote administration. Which port should the analyst block?",
    "options": [
      "Port 23",
      "Port 22",
      "Port 443",
      "Port 3389"
    ],
    "answer": 0,
    "explanation": "Port 23 (Option A) is used by Telnet, which transmits data (including credentials) in plaintext and is considered insecure for remote administration. Port 22 (Option B) is used by SSH, which provides secure, encrypted remote administration. Port 443 (Option C) is for secure web traffic (HTTPS). Port 3389 (Option D) is for encrypted Remote Desktop Protocol (RDP) sessions."
  },
  {
    "id": 212,
    "section": "S16",
    "question": "A company wants to inspect HTTP and HTTPS traffic specifically to block SQL injection and Cross-Site Scripting (XSS) attacks aimed at their customer portal. Which type of firewall is BEST suited for this specific task?",
    "options": [
      "Web Application Firewall (WAF)",
      "Packet Filtering Firewall",
      "Stateful Firewall",
      "Unified Threat Management (UTM)"
    ],
    "answer": 0,
    "explanation": "A Web Application Firewall (WAF) (Option A) specifically inspects HTTP/HTTPS traffic at Layer 7 to identify and block web-specific attacks like SQL injection and XSS. A Packet Filtering Firewall (Option B) only looks at IP headers and ports. A Stateful Firewall (Option C) tracks connection states but doesn't perform deep web payload inspection. A UTM (Option D) is a broad all-in-one appliance, whereas a WAF is the specialized tool for web attacks."
  },
  {
    "id": 213,
    "section": "S16",
    "question": "An administrator is configuring a firewall Access Control List (ACL) to permit web traffic from a specific partner IP, but block all other incoming connections. Where should the 'deny all' rule be placed to ensure the web traffic rule is evaluated correctly?",
    "options": [
      "At the bottom of the ACL",
      "At the top of the ACL",
      "Immediately before the web traffic rule",
      "It does not matter; rules are evaluated simultaneously"
    ],
    "answer": 0,
    "explanation": "ACL rules are processed top-down, and the first matching rule wins. Therefore, the 'deny all' (implicit or explicit deny) must be placed at the bottom (Option A). If it were at the top (Option B) or before the specific rule (Option C), it would block everything immediately, and the firewall would never evaluate the web traffic rule. Rules are not evaluated simultaneously (Option D)."
  },
  {
    "id": 214,
    "section": "S16",
    "question": "A network security team installs a device connected to a SPAN port on the core switch. The device analyzes traffic patterns and compares them to a baseline, generating alerts when deviations occur, but it does not block any traffic. What type of device is this?",
    "options": [
      "Anomaly-based NIDS",
      "Signature-based NIPS",
      "Application-Level Proxy",
      "Web Application Firewall (WAF)"
    ],
    "answer": 0,
    "explanation": "An Anomaly-based Network Intrusion Detection System (NIDS) (Option A) connects to a SPAN/mirror port (passive/tap), monitors traffic by comparing it to a baseline (anomaly-based), and generates alerts without blocking (detection, not prevention). A NIPS (Option B) actively blocks traffic. A Proxy (Option C) and a WAF (Option D) are inline devices that actively process and block traffic."
  },
  {
    "id": 215,
    "section": "S16",
    "question": "A systems administrator needs to manage servers located in a highly secure network segment. To minimize the attack surface, the administrator must first connect to a hardened gateway server, which then provides access to the secure servers and centrally logs all administrative commands. What is this gateway server called?",
    "options": [
      "Jump Server",
      "Load Balancer",
      "Proxy Server",
      "RADIUS Server"
    ],
    "answer": 0,
    "explanation": "A Jump Server (Option A), or jump box, is a dedicated, highly secured gateway server used by administrators to access devices in different security zones. It acts as a single, auditable choke point for administrative access. A Load Balancer (Option B) distributes traffic. A Proxy Server (Option C) brokers client web requests. A RADIUS server (Option D) handles authentication."
  },
  {
    "id": 216,
    "section": "S16",
    "question": "A company wants to prevent visitors in the lobby from unplugging the lobby printer and connecting their personal laptops to the network jack. The network administrator configures the switch to only allow the MAC address of the printer on that specific port. What feature was implemented?",
    "options": [
      "Port Security",
      "802.1x Authentication",
      "Logical Separation (VLAN)",
      "Access Control List (ACL)"
    ],
    "answer": 0,
    "explanation": "Port Security (Option A) is a switch feature that restricts access to a specific port based on the MAC address of the connecting device. 802.1x (Option B) is a framework that requires user credentials or certificates before granting access, rather than just locking a MAC address. VLANs (Option C) segment networks logically. ACLs (Option D) filter traffic by IP/port, not typically by physical switch port MAC bindings."
  },
  {
    "id": 217,
    "section": "S16",
    "question": "An organization is deploying an 802.1x authentication framework for its wireless network. Which component acts as the centralized server that actually validates the user credentials and returns the accept or reject decision?",
    "options": [
      "Authentication Server",
      "Authenticator",
      "Supplicant",
      "Extensible Authentication Protocol (EAP)"
    ],
    "answer": 0,
    "explanation": "In 802.1x, the Authentication Server (Option A), typically a RADIUS or TACACS+ server, contains the user database and makes the actual accept/reject decision. The Authenticator (Option B) is the switch or Wireless Access Point (WAP) that passes the credentials. The Supplicant (Option C) is the client device requesting access. EAP (Option D) is the authentication framework used, not a component."
  },
  {
    "id": 218,
    "section": "S16",
    "question": "A network engineer is configuring an IPsec VPN for remote workers connecting from public Wi-Fi at coffee shops. To prevent attackers on the local public Wi-Fi from pivoting into the corporate network through the remote worker's laptop, which VPN configuration MUST the engineer use?",
    "options": [
      "Full Tunnel",
      "Split Tunnel",
      "Site-to-Site VPN",
      "Transport Mode"
    ],
    "answer": 0,
    "explanation": "A Full Tunnel VPN (Option A) forces all traffic from the remote device, including general Internet traffic, to route through the corporate VPN, securing the device from local network threats. A Split Tunnel (Option B) allows Internet traffic to bypass the VPN, leaving the laptop exposed to local attackers who could then pivot into the corporate tunnel. Site-to-Site (Option C) connects entire offices. Transport mode (Option D) is an IPsec setting, not a routing topology."
  },
  {
    "id": 219,
    "section": "S16",
    "question": "Two branch offices are connected via an IPsec VPN. The network administrator needs to ensure that the data payload is encrypted during transit over the internet to prevent eavesdropping. Which IPsec protocol provides this confidentiality?",
    "options": [
      "Encapsulating Security Payload (ESP)",
      "Authentication Header (AH)",
      "Internet Key Exchange (IKE)",
      "Transport Layer Security (TLS)"
    ],
    "answer": 0,
    "explanation": "Encapsulating Security Payload (ESP) (Option A) provides confidentiality (encryption) for the data payload in an IPsec VPN, as well as authentication and integrity. Authentication Header (AH) (Option B) provides integrity and authentication but does NOT encrypt the data. IKE (Option C) establishes the security associations. TLS (Option D) is a different protocol used for HTTPS and clientless VPNs, not standard IPsec."
  },
  {
    "id": 220,
    "section": "S16",
    "question": "A multinational corporation replaces its traditional centralized WAN architecture with a solution that dynamically routes traffic over broadband and cellular connections directly to cloud applications, optimizing performance for remote branches without sending all traffic back to headquarters. Which technology is the corporation adopting?",
    "options": [
      "SD-WAN",
      "Site-to-Site VPN",
      "Screened Subnet",
      "Unified Threat Management (UTM)"
    ],
    "answer": 0,
    "explanation": "A Software-Defined Wide Area Network (SD-WAN) (Option A) dynamically routes traffic across multiple WAN connections based on application needs, bypassing the latency of backhauling all cloud traffic to a central headquarters. A Site-to-Site VPN (Option B) typically creates the very hub-and-spoke topology SD-WAN aims to improve. A Screened Subnet (Option C) hosts public services. UTM (Option D) is a security appliance."
  },
  {
    "id": 221,
    "section": "S16",
    "question": "An organization adopts a cloud-native security framework that consolidates VPN, firewall, and Zero Trust Network Access (ZTNA) into a single service, delivering security closer to its distributed workforce rather than relying on on-premise hardware. Which architecture does this describe?",
    "options": [
      "SASE",
      "MAC",
      "HIDS",
      "EAP-TLS"
    ],
    "answer": 0,
    "explanation": "Secure Access Service Edge (SASE) (Option A) is a framework that converges networking (like SD-WAN) and network security services (like firewalls, CASB, ZTNA) into a single, cloud-delivered service model. MAC (Option B) is an access control model. HIDS (Option C) is a host intrusion detection system. EAP-TLS (Option D) is an authentication protocol."
  },
  {
    "id": 222,
    "section": "S16",
    "question": "A security architect is designing a network segment specifically to host a public-facing web server and an email gateway. This segment must be isolated from the internal corporate network to limit the impact of a potential compromise. What is this network segment called?",
    "options": [
      "Screened Subnet",
      "Intranet",
      "Air Gap",
      "Private VLAN"
    ],
    "answer": 0,
    "explanation": "A Screened Subnet (Option A), formerly known as a DMZ, is a buffer zone between the untrusted public Internet and the trusted internal corporate network, used to host public-facing services. An Intranet (Option B) is the internal trusted network. An Air Gap (Option C) is complete physical isolation. A Private VLAN (Option D) restricts traffic between ports on a switch, but isn't specifically a boundary zone for public servers."
  },
  {
    "id": 223,
    "section": "S16",
    "question": "To identify potential malicious activity, an analyst deploys a security device that actively blocks known threats in real-time as they cross the network boundary. What is the device's placement attribute?",
    "options": [
      "Inline",
      "Passive",
      "Tap",
      "Out-of-Band"
    ],
    "answer": 0,
    "explanation": "An active device that blocks traffic in real-time, such as an IPS or Firewall, must be placed Inline (Option A), meaning it sits directly in the traffic flow path. Passive (Option B), Tap (Option C), and Out-of-Band (Option D) all refer to devices that receive a copy of the traffic (like an IDS) and can only monitor and alert, but cannot actively block the traffic flow."
  },
  {
    "id": 224,
    "section": "S16",
    "question": "A hospital installs an electronic door locking system to secure the pharmacy. If the building experiences a complete loss of power and the backup batteries fail, the doors must automatically unlock so staff can still access emergency medication. Which failure mode must the system use?",
    "options": [
      "Fail-Open",
      "Fail-Closed",
      "Fail-Safe",
      "Fail-Secure"
    ],
    "answer": 0,
    "explanation": "A Fail-Open (Option A) (also known as fail-safe for human safety) configuration means that if the system fails, it defaults to allowing access (opening the doors) prioritizing availability and safety over security. Fail-Closed (Option B) (or fail-secure) means the system defaults to blocking access, prioritizing security over availability."
  },
  {
    "id": 225,
    "section": "S16",
    "question": "An organization selects security controls based on the principle that if a perimeter firewall fails to block an attacker, an internal Intrusion Prevention System (IPS) and host-based antivirus should still detect and stop the threat. Which principle is being applied?",
    "options": [
      "Defense in Depth",
      "Least Privilege",
      "Separation of Duties",
      "Open Design Principle"
    ],
    "answer": 0,
    "explanation": "Defense in Depth (Option A) is the practice of layering multiple, independent security controls so that if one fails, others are in place to stop the attack. Least Privilege (Option B) restricts user rights. Separation of Duties (Option C) requires multiple people to complete a critical task. Open Design (Option D) means security should not rely on obscurity."
  },
  {
    "id": 226,
    "section": "S17",
    "question": "An HR manager submits a request to the IT department stating that a new employee requires access to the company's internal portal, email system, and shared network drives starting next Monday. What process must IT perform?",
    "options": [
      "Provisioning",
      "Authentication",
      "Accounting",
      "Attestation"
    ],
    "answer": 0,
    "explanation": "Provisioning (Option A) is the process of creating user accounts and assigning appropriate permissions when a new user joins an organization. Authentication (Option B) is proving identity. Accounting (Option C) is tracking user activity. Attestation (Option D) is reviewing existing permissions to ensure they are still correct."
  },
  {
    "id": 227,
    "section": "S17",
    "question": "Every quarter, department heads receive a report listing all employees and their current access rights to financial systems. The department heads must review the list and confirm that each user still requires their current level of access. What process is being performed?",
    "options": [
      "Attestation",
      "Identity Proofing",
      "Deprovisioning",
      "Federation"
    ],
    "answer": 0,
    "explanation": "Attestation (Option A) is the periodic review and validation process where managers confirm that user accounts and access rights are correct and that users only have the minimum access necessary for their current role, combating permission creep. Identity Proofing (Option B) happens before account creation. Deprovisioning (Option C) is removing access. Federation (Option D) shares identities across organizations."
  },
  {
    "id": 228,
    "section": "S17",
    "question": "A company implements a new login system requiring users to enter a password and then provide a fingerprint scan on their laptop. Which two authentication factors are being utilized?",
    "options": [
      "Something you know and something you are",
      "Something you have and something you do",
      "Something you know and something you have",
      "Something you are and somewhere you are"
    ],
    "answer": 0,
    "explanation": "A password is a knowledge factor ('Something you know') and a fingerprint scan is a biometric/inherence factor ('Something you are') (Option A). 'Something you have' would be a physical token or phone. 'Something you do' is a behavioral factor like typing rhythm. 'Somewhere you are' is a location factor like GPS or IP."
  },
  {
    "id": 229,
    "section": "S17",
    "question": "A security policy requires employees connecting from outside the corporate office to establish a VPN connection before they can access internal applications, effectively checking their IP address. Which authentication factor is this enforcing?",
    "options": [
      "Somewhere you are",
      "Something you know",
      "Something you have",
      "Something you do"
    ],
    "answer": 0,
    "explanation": "Restricting access based on network location, IP address, or GPS coordinates utilizes the 'Somewhere you are' (Option A) location factor. Knowledge (Option B) is passwords. Possession (Option C) is tokens. Behavior (Option D) is keystroke dynamics."
  },
  {
    "id": 230,
    "section": "S17",
    "question": "A user authenticates to a web application using a system where their smartphone generates a cryptographic signature based on a public/private key pair. The private key never leaves the secure enclave of the user's phone, and no password is required; the user simply unlocks their phone with a PIN to approve the login. What technology is being used?",
    "options": [
      "Passkeys",
      "OAuth",
      "LDAP",
      "Single Sign-On (SSO)"
    ],
    "answer": 0,
    "explanation": "Passkeys (Option A) use public key cryptography where the private key is tied to the device's secure enclave and protected by the device lock screen (PIN/biometrics), providing strong, passwordless, phishing-resistant authentication. OAuth (Option B) is for delegated authorization. LDAP (Option C) is a directory protocol. SSO (Option D) allows one login for multiple apps but doesn't inherently use device-bound key pairs."
  },
  {
    "id": 231,
    "section": "S17",
    "question": "An attacker attempts to gain access to a corporate network by trying a small list of three common passwords (e.g., 'Welcome1!', 'Password123') against every single user account in the company's active directory, carefully staying below the five-attempt account lockout threshold. Which type of attack is this?",
    "options": [
      "Password Spraying",
      "Brute Force",
      "Dictionary Attack",
      "Hybrid Attack"
    ],
    "answer": 0,
    "explanation": "Password Spraying (Option A) involves trying a few common passwords across a large number of accounts specifically to avoid triggering account lockout policies. Brute Force (Option B) tries every combination on one account. A Dictionary Attack (Option C) tries a massive list of words on one account. A Hybrid attack (Option D) combines dictionary words with appended numbers/symbols."
  },
  {
    "id": 232,
    "section": "S17",
    "question": "An attacker downloads a database of stolen password hashes. The attacker uses a tool that takes a massive list of common words and automatically replaces letters with numbers and symbols (e.g., changing 'password' to 'p@$$w0rd') to see if the resulting hashes match the stolen ones. Which technique is the attacker utilizing?",
    "options": [
      "Leet Speak in a Dictionary Attack",
      "Password Spraying",
      "Just-In-Time Provisioning",
      "Identity Proofing"
    ],
    "answer": 0,
    "explanation": "Substituting letters for numbers or special characters (like 'p@$$w0rd' for 'password') is known as Leet Speak (Option A). Modern dictionary attacks use wordlists that include these common substitutions. Password Spraying (Option B) attacks many accounts with few passwords. JIT (Option C) and Identity Proofing (Option D) are IAM security concepts, not attacks."
  },
  {
    "id": 233,
    "section": "S17",
    "question": "An organization wants to allow its employees to access a third-party travel booking website using their existing corporate credentials, without ever sending their corporate passwords to the travel site. The organization acts as the Identity Provider (IdP) and sends a signed XML assertion to the travel site. Which standard is being used?",
    "options": [
      "SAML",
      "LDAP",
      "OAuth",
      "OpenID Connect"
    ],
    "answer": 0,
    "explanation": "Security Assertion Markup Language (SAML) (Option A) is an XML-based standard used for exchanging authentication data between an Identity Provider (IdP) and a Service Provider (SP), enabling enterprise Single Sign-On (SSO). LDAP (Option B) is an internal directory protocol. OAuth (Option C) uses JSON/tokens for authorization, not XML assertions. OpenID Connect (Option D) uses JSON/JWTs on top of OAuth."
  },
  {
    "id": 234,
    "section": "S17",
    "question": "A web application allows users to 'Log in with Google.' When a user clicks this, they grant the web application permission to read their basic profile information from Google without giving the web application their Google password. Which protocol facilitates this delegated authorization?",
    "options": [
      "OAuth",
      "SAML",
      "LDAPS",
      "TACACS+"
    ],
    "answer": 0,
    "explanation": "Open Authorization (OAuth) (Option A) is a standard for token-based delegated authorization that allows third-party services to access user data (like profile info) without exposing the user's password. SAML (Option B) is XML-based authentication. LDAPS (Option C) is secure directory access. TACACS+ (Option D) is an administrative authentication protocol for network devices."
  },
  {
    "id": 235,
    "section": "S17",
    "question": "A company collaborates with several external partner organizations. Instead of creating new accounts in its own directory for every partner employee, the company establishes a trust relationship allowing partner employees to access shared resources using their own home organization's credentials. What concept does this describe?",
    "options": [
      "Federation",
      "Privileged Access Management (PAM)",
      "Role-Based Access Control (RBAC)",
      "Password Vaulting"
    ],
    "answer": 0,
    "explanation": "Federation (Option A) is a trusted relationship that allows for the sharing of electronic identities across multiple distinct organizations, enabling users to access external systems with their home organization's credentials. PAM (Option B) manages admin accounts. RBAC (Option C) assigns internal permissions. Vaulting (Option D) secures admin passwords."
  },
  {
    "id": 236,
    "section": "S17",
    "question": "A systems administrator needs to perform maintenance on a critical database server. Instead of having permanent administrative rights, the administrator requests temporary elevated privileges. The system grants the rights for exactly two hours, after which the access is automatically revoked. Which Privileged Access Management (PAM) feature is this?",
    "options": [
      "Just-In-Time (JIT) Permissions",
      "Password Vaulting",
      "Temporal Accounts",
      "Attribute-Based Access Control (ABAC)"
    ],
    "answer": 0,
    "explanation": "Just-In-Time (JIT) Permissions (Option A) grant administrative access only when needed for a specific task and for a limited time period, automatically revoking it afterward to minimize the attack surface. Password Vaulting (Option B) securely stores passwords. Temporal Accounts (Option C) are time-limited accounts for contractors, not temporary elevation of an existing admin. ABAC (Option D) is an access model."
  },
  {
    "id": 237,
    "section": "S17",
    "question": "A defense contractor implements an access control system where every document and every user is assigned a strict security classification label (e.g., Secret, Top Secret). Users cannot access a document unless their clearance level matches or exceeds the document's classification, and users cannot change these labels. Which access control model is used?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)",
      "Role-Based Access Control (RBAC)",
      "Rule-Based Access Control"
    ],
    "answer": 0,
    "explanation": "Mandatory Access Control (MAC) (Option A) uses centrally assigned security labels and clearances; it is highly restrictive and common in government/military. Discretionary Access Control (DAC) (Option B) allows the resource owner to decide who gets access. Role-Based (Option C) uses job titles. Rule-Based (Option D) applies rules globally (like firewalls)."
  },
  {
    "id": 238,
    "section": "S17",
    "question": "In a small design agency, a graphic designer creates a new folder for a project and manually grants read and write permissions to three specific colleagues who are helping with the design. Which access control model does this scenario represent?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Mandatory Access Control (MAC)",
      "Attribute-Based Access Control (ABAC)",
      "Role-Based Access Control (RBAC)"
    ],
    "answer": 0,
    "explanation": "Discretionary Access Control (DAC) (Option A) is a model where the owner of the resource (the designer) has the discretion to determine who can access it. MAC (Option B) relies on central labels. ABAC (Option C) relies on multiple context variables. RBAC (Option D) relies on organizational job roles, not the creator's discretion."
  },
  {
    "id": 239,
    "section": "S17",
    "question": "A large hospital manages access by assigning permissions to specific job titles, such as 'Attending Physician', 'Registered Nurse', and 'Billing Specialist'. When a nurse is promoted to a nursing manager, their access rights automatically change to match the new job title. Which access control model is in use?",
    "options": [
      "Role-Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)",
      "Mandatory Access Control (MAC)",
      "Rule-Based Access Control"
    ],
    "answer": 0,
    "explanation": "Role-Based Access Control (RBAC) (Option A) assigns permissions based on a user's job role or group membership within the organization, making it ideal for environments with high turnover or predictable job functions. DAC (Option B) is owner-driven. MAC (Option C) is label-driven. Rule-Based (Option D) is globally applied by admins regardless of role."
  },
  {
    "id": 240,
    "section": "S17",
    "question": "A security architect designs a system that only allows access to highly sensitive financial records if the user is an executive (Role), is currently located within the headquarters building (Environment), and the record was created more than 30 days ago (Resource). Which access control model evaluates all these variables simultaneously?",
    "options": [
      "Attribute-Based Access Control (ABAC)",
      "Role-Based Access Control (RBAC)",
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)"
    ],
    "answer": 0,
    "explanation": "Attribute-Based Access Control (ABAC) (Option A) is the most granular model, making access decisions based on a combination of user attributes (executive), environmental attributes (HQ building), and resource attributes (age of record). RBAC (Option B) only considers the role. MAC (Option C) only considers labels. DAC (Option D) only considers owner preference."
  },
  {
    "id": 241,
    "section": "S18",
    "question": "A hospital relies on an MRI machine running Windows XP, an operating system which Microsoft no longer supports or updates. The hospital cannot upgrade the OS without breaking the proprietary MRI software. What specific type of vulnerability does this represent?",
    "options": [
      "End of Life (EOL) / Legacy System",
      "Zero-Day Vulnerability",
      "Firmware Misconfiguration",
      "Hardware Rootkit"
    ],
    "answer": 0,
    "explanation": "An End of Life (EOL) or Legacy System (Option A) is one that no longer receives vendor support or security patches, leaving known vulnerabilities permanently unaddressed. A Zero-Day (Option B) is a brand new, unknown vulnerability. A Firmware Misconfiguration (Option C) relates to incorrect device settings. A Rootkit (Option D) is malware, not a system classification."
  },
  {
    "id": 242,
    "section": "S18",
    "question": "A user sits in a coffee shop and suddenly receives several unsolicited, anonymous text messages on their smartphone via Bluetooth. The messages contain advertising but no data is stolen from the device. What attack is taking place?",
    "options": [
      "Bluejacking",
      "Bluesnarfing",
      "Bluebugging",
      "Blueborne"
    ],
    "answer": 0,
    "explanation": "Bluejacking (Option A) is the sending of unsolicited messages to a Bluetooth-enabled device without causing serious harm or accessing data. Bluesnarfing (Option B) involves actual theft of data (contacts, messages). Bluebugging (Option C) is taking full control of the device. Blueborne (Option D) is an airborne exploit that spreads device-to-device automatically."
  },
  {
    "id": 243,
    "section": "S18",
    "question": "An employee configures their corporate Android phone to install applications from a third-party website rather than the Google Play Store, bypassing Google's security review process. What practice did the employee engage in?",
    "options": [
      "Sideloading",
      "Jailbreaking",
      "Rooting",
      "Device Spoofing"
    ],
    "answer": 0,
    "explanation": "Sideloading (Option A) is the practice of installing applications from unofficial sources outside the official app store, increasing the risk of malware. Jailbreaking (iOS) and Rooting (Android) (Options B and C) involve escalating privileges to bypass OEM restrictions, which might enable sideloading, but sideloading itself is the act of installing the app. Device Spoofing (Option D) is faking a hardware identity."
  },
  {
    "id": 244,
    "section": "S18",
    "question": "A threat actor discovers a new, critical flaw in a popular web browser and immediately writes an exploit for it. Because the browser vendor is completely unaware of the flaw, there is no patch available to stop the attack. What is this type of vulnerability called?",
    "options": [
      "Zero-Day Vulnerability",
      "Buffer Overflow",
      "Race Condition",
      "Legacy Vulnerability"
    ],
    "answer": 0,
    "explanation": "A Zero-Day Vulnerability (Option A) is a flaw that is unknown to the vendor and has no patch available, giving defenders 'zero days' to prepare. A Buffer Overflow (Option B) and Race Condition (Option C) are specific technical software flaws, which could be zero-days, but the scenario specifically describes the timing of the discovery. A Legacy Vulnerability (Option D) affects EOL systems."
  },
  {
    "id": 245,
    "section": "S18",
    "question": "A web application receives input from a login form. An attacker enters `' OR 1=1; --` into the username field, which causes the backend database query to evaluate to true, granting the attacker administrative access without a valid password. What type of attack occurred?",
    "options": [
      "SQL Injection",
      "XML External Entity (XXE)",
      "Cross-Site Scripting (XSS)",
      "Command Injection"
    ],
    "answer": 0,
    "explanation": "SQL Injection (Option A) involves inserting malicious SQL statements (like `' OR 1=1`) into input fields to manipulate database queries. XXE (Option B) targets XML parsers. XSS (Option C) targets the browser with malicious scripts. Command Injection (Option D) targets the host OS shell."
  },
  {
    "id": 246,
    "section": "S18",
    "question": "An attacker submits a crafted XML file to a web application. The XML file contains a `<!ENTITY>` declaration that points to the server's local `/etc/passwd` file. The server parses the XML and returns the contents of the password file to the attacker. What type of attack is this?",
    "options": [
      "XML External Entity (XXE)",
      "XML Bomb",
      "Cross-Site Request Forgery (CSRF)",
      "Directory Traversal"
    ],
    "answer": 0,
    "explanation": "An XML External Entity (XXE) attack (Option A) embeds a request for a local system resource within an XML payload, forcing the parser to expose the file. An XML Bomb (Option B) causes a denial of service via memory exhaustion, not data theft. CSRF (Option C) forces a user to execute unwanted actions. Directory Traversal (Option D) uses `../` sequences in URLs."
  },
  {
    "id": 247,
    "section": "S18",
    "question": "An attacker leaves a comment on a popular blog containing the payload `<script>alert('Your session has been stolen')</script>`. The comment is saved in the blog's database. Every time any user visits the blog post, the script automatically executes in their browser. What type of attack is this?",
    "options": [
      "Persistent (Stored) XSS",
      "Reflected XSS",
      "DOM-Based XSS",
      "Cross-Site Request Forgery (CSRF)"
    ],
    "answer": 0,
    "explanation": "Persistent (Stored) XSS (Option A) occurs when the malicious script is saved permanently on the target server (like in a database comment) and served to all subsequent visitors. Reflected XSS (Option B) requires clicking a crafted link. DOM-Based XSS (Option C) manipulates the client-side Document Object Model directly. CSRF (Option D) hijacks an authenticated session to perform actions."
  },
  {
    "id": 248,
    "section": "S18",
    "question": "An attacker creates a malicious webpage that contains a hidden form targeting a banking website. When a victim, who is already logged into their bank in another tab, visits the malicious page, the hidden form automatically submits a money transfer request to the bank using the victim's active session. What type of attack is this?",
    "options": [
      "Cross-Site Request Forgery (CSRF / XSRF)",
      "Session Hijacking",
      "Cross-Site Scripting (XSS)",
      "Replay Attack"
    ],
    "answer": 0,
    "explanation": "Cross-Site Request Forgery (CSRF/XSRF) (Option A) exploits an existing authenticated session by tricking the victim's browser into submitting an unauthorized request to a trusted site. Session Hijacking (Option B) involves actually stealing the session token to use later. XSS (Option C) injects scripts into the trusted site itself. A Replay Attack (Option D) captures and resends network traffic."
  },
  {
    "id": 249,
    "section": "S18",
    "question": "A software program accepts a 50-character input for a username. An attacker submits 100 characters, causing the excess data to overflow the allocated memory space and overwrite the adjacent return pointer. The attacker redirects the execution to their own malicious code. What type of vulnerability did the attacker exploit?",
    "options": [
      "Buffer Overflow",
      "Race Condition",
      "Arbitrary Code Execution (ACE)",
      "Memory Leak"
    ],
    "answer": 0,
    "explanation": "A Buffer Overflow (Option A) occurs when a process writes more data to a memory buffer than it can hold, overwriting adjacent memory like return pointers to execute malicious code. A Race Condition (Option B) involves execution timing errors. ACE (Option C) is the *result* of the buffer overflow, but the vulnerability itself is the overflow. A Memory Leak (Option D) is a failure to release memory, causing crashes but not typically code execution."
  },
  {
    "id": 250,
    "section": "S18",
    "question": "An attacker writes a buffer overflow payload that begins with hundreds of `\\x90` instructions. This ensures that even if the CPU does not land exactly on the start of the malicious code, it will slide down into the execution block safely. What is this sequence called?",
    "options": [
      "NOP Sled",
      "Address Space Layout Randomization (ASLR)",
      "Mutex",
      "Entity Expansion"
    ],
    "answer": 0,
    "explanation": "A NOP Sled (Option A) is a sequence of No-Operation instructions that 'slide' the CPU's execution flow into the attacker's malicious payload. ASLR (Option B) is a defensive mitigation that randomizes memory to *prevent* buffer overflows. A Mutex (Option C) prevents race conditions. Entity Expansion (Option D) is used in XML Bomb attacks."
  },
  {
    "id": 251,
    "section": "S18",
    "question": "An attacker initiates an online banking transfer. Between the moment the application checks the account balance (Time-of-Check) and the moment it deducts the funds (Time-of-Use), the attacker initiates a second simultaneous transfer. Due to improper locking, both transfers succeed despite insufficient funds. What type of vulnerability is this?",
    "options": [
      "Race Condition",
      "Buffer Overflow",
      "Session Prediction",
      "SQL Injection"
    ],
    "answer": 0,
    "explanation": "A Race Condition (Option A) occurs when the outcome of an execution depends on the exact timing of events, allowing attackers to manipulate resources during the gap between Time-of-Check (TOC) and Time-of-Use (TOU). Buffer Overflow (Option B) affects memory space. Session Prediction (Option C) guesses auth tokens. SQL Injection (Option D) manipulates database queries."
  },
  {
    "id": 252,
    "section": "S18",
    "question": "To prevent race conditions in a database application, a developer implements a synchronization mechanism that restricts access to a critical section of code to only one thread at a time, locking the resource until the operation is complete. What is this mechanism called?",
    "options": [
      "Mutex",
      "ASLR",
      "Input Validation",
      "Session Token"
    ],
    "answer": 0,
    "explanation": "A Mutex (Option A) (Mutually Exclusive flag) is a locking mechanism that restricts code execution to one thread at a time, preventing concurrent modifications that cause race conditions. ASLR (Option B) prevents buffer overflows. Input Validation (Option C) prevents injections. Session Tokens (Option D) track authenticated users."
  },
  {
    "id": 253,
    "section": "S18",
    "question": "An organization deploys a Mobile Device Management (MDM) solution that prevents users from gaining root-level access to the operating system on their corporate-issued smartphones, ensuring the devices can continue receiving OEM security updates. What vulnerability is the MDM mitigating?",
    "options": [
      "Jailbreaking / Rooting",
      "Sideloading",
      "On-Path Attacks",
      "Bluebugging"
    ],
    "answer": 0,
    "explanation": "Jailbreaking (iOS) and Rooting (Android) (Option A) involve escalating privileges to bypass OEM restrictions, which breaks the device's ability to receive official security updates. Sideloading (Option B) is installing apps from unapproved sources. On-Path attacks (Option C) intercept network traffic. Bluebugging (Option D) is a Bluetooth takeover."
  },
  {
    "id": 254,
    "section": "S18",
    "question": "A security analyst intercepts a Bluetooth attack where the threat actor has gained full, root-level control of a victim's smartphone, using the Bluetooth connection to make unauthorized phone calls and access the internet without the victim knowing. What type of attack is this?",
    "options": [
      "Bluebugging",
      "Bluesnarfing",
      "Bluejacking",
      "Bluesmack"
    ],
    "answer": 0,
    "explanation": "Bluebugging (Option A) goes beyond data theft by allowing the attacker to take full control of the device's functions (making calls, accessing internet). Bluesnarfing (Option B) is only stealing data. Bluejacking (Option C) is sending spam messages. Bluesmack (Option D) is a Bluetooth DoS attack."
  },
  {
    "id": 255,
    "section": "S18",
    "question": "An attacker sends a phishing email with a malicious link. When the victim clicks the link, their browser executes JavaScript that manipulates the `document.cookie` property to steal the victim's session token. The script executes entirely on the client side without being sent to the server. What type of attack is this?",
    "options": [
      "DOM-Based XSS",
      "Reflected XSS",
      "Persistent XSS",
      "XML External Entity (XXE)"
    ],
    "answer": 0,
    "explanation": "DOM-Based XSS (Option A) is a client-side attack that exploits the Document Object Model (DOM) in the victim's browser, indicated by the manipulation of `document.*` properties. Reflected XSS (Option B) bounces off the server. Persistent XSS (Option C) is stored on the server. XXE (Option D) attacks XML parsers."
  },
  {
    "id": 256,
    "section": "S19",
    "question": "A web server is overwhelmed by millions of TCP connection requests originating from thousands of different IP addresses worldwide. The server cannot process legitimate traffic. Which attack is occurring?",
    "options": [
      "Distributed Denial of Service (DDoS)",
      "Single-Source Denial of Service (DoS)",
      "Permanent Denial of Service (PDoS)",
      "Fork Bomb"
    ],
    "answer": 0,
    "explanation": "A Distributed Denial of Service (DDoS) attack (Option A) uses a botnet of compromised machines (thousands of IPs) to simultaneously flood a target. A standard DoS (Option B) comes from a single source. A PDoS (Option C) destroys firmware to permanently brick a device. A Fork Bomb (Option D) is an internal process replication attack, not network-based."
  },
  {
    "id": 257,
    "section": "S19",
    "question": "An attacker sends a small DNS query to an open resolver, spoofing the source IP address to match the victim's server. The resolver sends a massively larger response to the victim, overwhelming its bandwidth. What type of attack is this?",
    "options": [
      "DNS Amplification",
      "DNS Cache Poisoning",
      "DNS Tunneling",
      "Zone Transfer Attack"
    ],
    "answer": 0,
    "explanation": "DNS Amplification (Option A) leverages the size asymmetry between small DNS queries and large DNS responses, reflecting amplified traffic to a spoofed victim IP. DNS Cache Poisoning (Option B) alters records to redirect traffic. DNS Tunneling (Option C) hides data inside DNS traffic to bypass firewalls. A Zone Transfer Attack (Option D) steals the full DNS zone file for reconnaissance."
  },
  {
    "id": 258,
    "section": "S19",
    "question": "An attacker discovers that by appending `../../../../Windows/system32/cmd.exe` to a web application's URL parameter, they can access restricted system files on the host server. What type of vulnerability did the attacker exploit?",
    "options": [
      "Directory Traversal",
      "Remote File Inclusion (RFI)",
      "Cross-Site Scripting (XSS)",
      "Command Injection"
    ],
    "answer": 0,
    "explanation": "Directory Traversal (Option A) uses `../` sequences to navigate out of the intended web root directory and access sensitive local files. RFI (Option B) involves injecting a URL to an external malicious script. XSS (Option C) injects scripts into the browser. Command Injection (Option D) appends OS commands to input fields, rather than navigating directories."
  },
  {
    "id": 259,
    "section": "S19",
    "question": "A security analyst discovers a piece of malware that has embedded itself at Ring 0 of the operating system, allowing it to modify core OS files and hide its processes from antivirus software. What type of malware is this?",
    "options": [
      "Kernel Mode Rootkit",
      "User Mode Rootkit",
      "Fork Bomb",
      "Logic Bomb"
    ],
    "answer": 0,
    "explanation": "A Kernel Mode Rootkit (Option A) embeds itself at Ring 0, granting it the highest level of system privilege to control the OS and evade detection. A User Mode Rootkit (Option B) operates at Ring 3 with admin privileges but cannot directly modify the kernel. A Fork Bomb (Option C) exhausts CPU via process replication. A Logic Bomb (Option D) is triggered by an event."
  },
  {
    "id": 260,
    "section": "S19",
    "question": "An attacker intercepts a legitimate user's authentication token as it is sent over an unencrypted Wi-Fi network. Two hours later, the attacker transmits the exact same token to the server to gain unauthorized access to the user's account. What type of attack is this?",
    "options": [
      "Replay Attack",
      "Session Hijacking",
      "Downgrade Attack",
      "SSL Stripping"
    ],
    "answer": 0,
    "explanation": "In a Replay Attack (Option A), an attacker captures valid network traffic and retransmits it later (without modifying it) to impersonate the user. In Session Hijacking (Option B), the attacker actively steals a live session cookie and takes over the ongoing session in real-time. A Downgrade Attack (Option C) forces a weaker encryption protocol. SSL Stripping (Option D) forces HTTP instead of HTTPS."
  },
  {
    "id": 261,
    "section": "S19",
    "question": "A threat actor positions a rogue Wi-Fi access point in a coffee shop. When a user connects to a banking site, the attacker intercepts the initial HTTPS request and forces the user's browser to connect via unencrypted HTTP, allowing the attacker to capture the login credentials in cleartext. What type of attack is this?",
    "options": [
      "SSL Stripping",
      "DNS Cache Poisoning",
      "Session Prediction",
      "Downgrade Attack"
    ],
    "answer": 0,
    "explanation": "SSL Stripping (Option A) is an on-path technique that intercepts the initial connection and strips away the HTTPS encryption, forcing the victim to communicate in cleartext HTTP. DNS Cache Poisoning (Option B) alters DNS records. Session Prediction (Option C) guesses auth tokens. A Downgrade Attack (Option D) negotiates a weaker protocol (like SSL 2.0 instead of TLS 1.2), but still maintains some encryption, unlike stripping."
  },
  {
    "id": 262,
    "section": "S19",
    "question": "An attacker enters the following string into a web application's IP address search field: `8.8.8.8 && cat /etc/passwd`. The server executes the ping and then outputs the contents of the password file to the web page. What type of attack occurred?",
    "options": [
      "Command Injection",
      "LDAP Injection",
      "Directory Traversal",
      "Process Injection"
    ],
    "answer": 0,
    "explanation": "Command Injection (Option A) occurs when an attacker appends shell commands (like `&& cat /etc/passwd`) to an input field, which the server then executes. LDAP Injection (Option B) targets directory databases. Directory Traversal (Option C) uses `../` sequences to access files. Process Injection (Option D) injects code into running memory spaces."
  },
  {
    "id": 263,
    "section": "S19",
    "question": "A security operations center (SOC) receives an alert that a user successfully logged into the corporate VPN from New York at 8:00 AM, and then successfully logged into the email server from Beijing at 8:30 AM on the same day. Which Indicator of Compromise (IoC) does this represent?",
    "options": [
      "Impossible Travel",
      "Concurrent Session Usage",
      "Account Lockout",
      "Out-of-Cycle Logging"
    ],
    "answer": 0,
    "explanation": "Impossible Travel (Option A) is an IoC that flags authentication events from geographically distant locations within a timeframe that makes physical travel impossible, indicating compromised credentials. While this also involves concurrent sessions (Option B), the defining characteristic is the physical impossibility of the distance. Account Lockout (Option C) indicates failed logins. Out-of-Cycle (Option D) indicates odd hours."
  },
  {
    "id": 264,
    "section": "S19",
    "question": "An organization's firewall logs show massive amounts of outbound traffic over UDP port 53. Upon investigation, the security team realizes an attacker is encapsulating SSH commands within DNS queries to bypass outbound firewall restrictions. What technique is being used?",
    "options": [
      "DNS Tunneling",
      "DNS Cache Poisoning",
      "Zone Transfer Attack",
      "DNS Amplification"
    ],
    "answer": 0,
    "explanation": "DNS Tunneling (Option A) encapsulates non-DNS traffic (like SSH or HTTP) inside DNS queries (Port 53) to bypass firewalls for command-and-control or data exfiltration. Cache Poisoning (Option B) alters DNS records. Zone Transfer (Option C) copies the whole DNS database. Amplification (Option D) is a DDoS attack."
  },
  {
    "id": 265,
    "section": "S19",
    "question": "An attacker compromises a standard user account on a Linux server. The attacker then exploits a kernel vulnerability to grant the compromised account root-level administrative privileges. What type of attack has occurred?",
    "options": [
      "Vertical Privilege Escalation",
      "Horizontal Privilege Escalation",
      "Remote Code Execution (RCE)",
      "Process Hollowing"
    ],
    "answer": 0,
    "explanation": "Vertical Privilege Escalation (Option A) involves a user moving from a lower-privilege level (standard user) to a higher-privilege level (root/admin). Horizontal Privilege Escalation (Option B) involves accessing another user's resources at the same privilege level. RCE (Option C) executes code remotely. Process Hollowing (Option D) is a process injection technique."
  },
  {
    "id": 266,
    "section": "S19",
    "question": "During a forensic investigation, an analyst notices that the server's security logs have a complete gap in events between 2:00 AM and 4:00 AM on Sunday, a time when routine system processes should have generated log entries. What Indicator of Compromise (IoC) does this represent?",
    "options": [
      "Missing Logs",
      "Out-of-Cycle Logging",
      "Resource Inaccessibility",
      "Blocked Content"
    ],
    "answer": 0,
    "explanation": "Missing Logs (Option A) is an IoC indicating an attacker likely deleted log entries to cover their tracks and impede investigation. Out-of-Cycle Logging (Option B) refers to logs occurring at weird times, not missing entirely. Resource Inaccessibility (Option C) implies ransomware. Blocked Content (Option D) implies failed exfiltration attempts."
  },
  {
    "id": 267,
    "section": "S19",
    "question": "A user clicks a malicious link that causes their browser to request a script hosted on the attacker's server (e.g., `http://malware.bad/script.php`) and execute it within the context of the vulnerable web application. What specific type of attack is this?",
    "options": [
      "Remote File Inclusion (RFI)",
      "Local File Inclusion (LFI)",
      "Cross-Site Request Forgery (CSRF)",
      "LDAP Injection"
    ],
    "answer": 0,
    "explanation": "Remote File Inclusion (RFI) (Option A) occurs when an application accepts a URL parameter to fetch and execute an external, remote script. Local File Inclusion (LFI) (Option B) occurs when the attacker references a file already on the local server using directory traversal. CSRF (Option C) hijacks an authenticated session. LDAP Injection (Option D) attacks directories."
  },
  {
    "id": 268,
    "section": "S19",
    "question": "An attacker intercepts a communication session and forces the client and server to negotiate an older, vulnerable version of a security protocol (e.g., SSL 2.0 instead of TLS 1.3) to make the traffic easier to decrypt. What type of attack is this?",
    "options": [
      "Downgrade Attack",
      "SSL Stripping",
      "Replay Attack",
      "Cache Poisoning"
    ],
    "answer": 0,
    "explanation": "A Downgrade Attack (Option A) forces systems to negotiate weaker, older protocols that the attacker knows how to break. SSL Stripping (Option B) completely removes the encryption, downgrading HTTPS to HTTP. A Replay Attack (Option C) retransmits captured traffic. Cache Poisoning (Option D) alters DNS records."
  },
  {
    "id": 269,
    "section": "S19",
    "question": "An attacker injects malicious code directly into the memory space of a legitimate, currently running process (like `explorer.exe`) to hide the malicious activity from endpoint detection tools. What type of attack is this?",
    "options": [
      "Process Injection",
      "Arbitrary Code Execution (ACE)",
      "Command Injection",
      "Buffer Overflow"
    ],
    "answer": 0,
    "explanation": "Process Injection (Option A) executes code within a legitimate process's memory space, inheriting its permissions and evading security tools that trust the legitimate process. ACE (Option B) is the general ability to run code, but Process Injection is the specific stealth technique. Command Injection (Option C) runs OS commands via input fields. Buffer Overflow (Option D) is a memory corruption flaw."
  },
  {
    "id": 270,
    "section": "S19",
    "question": "A malicious script is written to continuously self-replicate new processes within a system's CPU cache until the system exhausts all available memory and crashes. The script does not spread across the network. What type of attack is this?",
    "options": [
      "Fork Bomb",
      "Permanent Denial of Service (PDoS)",
      "SYN Flood",
      "Logic Bomb"
    ],
    "answer": 0,
    "explanation": "A Fork Bomb (Option A) is a DoS attack that creates a rapidly self-replicating number of processes to exhaust local CPU and memory resources; it does not spread via network like a worm. A PDoS (Option B) destroys firmware. A SYN flood (Option C) exhausts network connections. A Logic Bomb (Option D) is triggered by an event, not a process replication technique."
  },
  {
    "id": 271,
    "section": "S20",
    "question": "A new web server is deployed with both HTTP (port 80) and HTTPS (port 443) enabled by default for backward compatibility. The organization's policy requires all web traffic to be encrypted. What is the most appropriate hardening action?",
    "options": [
      "Disable port 80",
      "Disable port 443",
      "Implement an AppLocker rule",
      "Enable File Integrity Monitoring"
    ],
    "answer": 0,
    "explanation": "To enforce encrypted web traffic and eliminate insecure default configurations, port 80 (HTTP) (Option A) must be disabled, leaving only port 443 (HTTPS) active. Disabling port 443 (Option B) would force insecure traffic. AppLocker (Option C) restricts applications, not network ports. FIM (Option D) monitors file changes."
  },
  {
    "id": 272,
    "section": "S20",
    "question": "A system administrator implements a security policy using Windows AppLocker that explicitly lists the 15 approved applications users are allowed to run, blocking all other executables by default. What security principle is this an example of?",
    "options": [
      "Allowlisting",
      "Blocklisting",
      "Sandboxing",
      "Mandatory Access Control"
    ],
    "answer": 0,
    "explanation": "Allowlisting (Option A) is the practice of explicitly defining which applications are permitted to run and denying everything else by default. Blocklisting (Option B) allows everything except explicitly banned items. Sandboxing (Option C) isolates running code. Mandatory Access Control (Option D) is an OS-level permission model, though allowlisting is a form of access control."
  },
  {
    "id": 273,
    "section": "S20",
    "question": "During a security audit, an analyst discovers that a production database server is running the Windows Print Spooler service, even though no printers are connected to the network segment. What hardening practice should the analyst recommend?",
    "options": [
      "Disable unnecessary services",
      "Apply the latest Service Pack",
      "Implement a Trusted Operating System",
      "Enable Full-Disk Encryption"
    ],
    "answer": 0,
    "explanation": "Disabling unnecessary services (Option A) reduces the system's attack surface by eliminating background processes (like the Print Spooler on a DB server) that could be exploited. Service Packs (Option B) patch systems but don't turn off unneeded features. Trusted OS (Option C) and FDE (Option D) are good practices but do not directly address running unnecessary background processes."
  },
  {
    "id": 274,
    "section": "S20",
    "question": "A defense contractor requires an operating system that enforces Mandatory Access Control (MAC) and has been formally evaluated to meet EAL4+ standards under the Common Criteria. What type of operating system are they looking for?",
    "options": [
      "Trusted Operating System (TOS)",
      "Open-Source Operating System",
      "Unmanaged Operating System",
      "Virtualized Operating System"
    ],
    "answer": 0,
    "explanation": "A Trusted Operating System (TOS) (Option A) is one that has undergone rigorous security evaluations (like EAL ratings) and enforces strict security policies like Mandatory Access Control. Open-Source (Option B) just means the code is visible. Unmanaged (Option C) is insecure. Virtualized (Option D) refers to the deployment method, not the security assurance level."
  },
  {
    "id": 275,
    "section": "S20",
    "question": "A critical vulnerability is discovered in an organization's web application framework that is actively being exploited in the wild. The vendor releases an immediate, specific patch to address only this vulnerability. What type of software fix is this?",
    "options": [
      "Hotfix",
      "Service Pack",
      "Feature Update",
      "Secure Baseline"
    ],
    "answer": 0,
    "explanation": "A hotfix (Option A) is an immediate, targeted patch released to address a specific, urgent security vulnerability. A Service Pack (Option B) is a large bundle of hundreds of previous updates. A Feature Update (Option C) adds new capabilities. A Secure Baseline (Option D) is a standardized configuration."
  },
  {
    "id": 276,
    "section": "S20",
    "question": "A system administrator needs to deploy a new Windows security update to 5,000 workstations. To minimize the risk of a bad patch taking down the entire company, they deploy it to the IT department first, then 10% of users, and finally the rest of the company over two weeks. What patch management strategy is this?",
    "options": [
      "Patch Rings",
      "Hotfix Deployment",
      "Automated Rollback",
      "Sandboxing"
    ],
    "answer": 0,
    "explanation": "Patch Rings (Option A) is a staged rollout strategy where patches are deployed to progressively larger groups (rings) to isolate and identify issues before widespread deployment. Hotfix Deployment (Option B) is what is being deployed, not the strategy. Automated Rollback (Option C) uninstalls bad patches. Sandboxing (Option D) tests isolated code."
  },
  {
    "id": 277,
    "section": "S20",
    "question": "A Linux administrator wants to transition a server from Discretionary Access Control (DAC) to a model where access is controlled strictly by system policies that users cannot override, even if they own the files. Which security framework should they enable?",
    "options": [
      "SELinux",
      "AppLocker",
      "Group Policy",
      "BitLocker"
    ],
    "answer": 0,
    "explanation": "SELinux (Security-Enhanced Linux) (Option A) is a framework that implements Mandatory Access Control (MAC) on Linux systems, enforcing system-wide policies that override user discretion. AppLocker and Group Policy (Options B and C) are Windows features. BitLocker (Option D) is Windows full-disk encryption."
  },
  {
    "id": 278,
    "section": "S20",
    "question": "A security team creates a fully patched and hardened Windows 11 installation with all required corporate security agents installed and default passwords changed. They save a snapshot of this system to clone onto all new employee laptops. What is this snapshot called?",
    "options": [
      "Secure Baseline (Disk Image)",
      "Evaluation Assurance Level (EAL)",
      "Hotfix Bundle",
      "System Sandbox"
    ],
    "answer": 0,
    "explanation": "A Secure Baseline or Disk Image (Option A) is a vetted, standardized, and hardened configuration used as the starting point for deploying all new systems to ensure consistency. EAL (Option B) is a security rating. A Hotfix Bundle (Option C) is a service pack. A Sandbox (Option D) is an isolated testing environment."
  },
  {
    "id": 279,
    "section": "S20",
    "question": "An organization wants to protect all data stored on its employee laptops in case the physical devices are lost or stolen while powered off. Which encryption level provides the best protection for this scenario?",
    "options": [
      "Full-Disk Encryption (FDE)",
      "File-Level Encryption",
      "Record-Level Encryption",
      "Database Encryption"
    ],
    "answer": 0,
    "explanation": "Full-Disk Encryption (FDE) (Option A) encrypts the entire storage drive, protecting all OS files, temp files, and user data if a device is stolen while powered off. File-Level (Option B) requires users to manually encrypt files. Record-Level and Database Encryption (Options C and D) apply only to structured SQL databases."
  },
  {
    "id": 280,
    "section": "S20",
    "question": "A database administrator needs to encrypt an entire SQL database at rest without requiring developers to rewrite the web applications that connect to it. What technology should they use?",
    "options": [
      "Transparent Data Encryption (TDE)",
      "BitLocker",
      "VeraCrypt",
      "GPG"
    ],
    "answer": 0,
    "explanation": "Transparent Data Encryption (TDE) (Option A) encrypts an entire SQL database automatically in the background without requiring any changes to the applications accessing it. BitLocker (Option B) is OS-level full-disk encryption. VeraCrypt (Option C) creates encrypted volumes. GPG (Option D) is for individual file encryption."
  },
  {
    "id": 281,
    "section": "S20",
    "question": "A security administrator wants to centrally enforce password complexity rules, disable the Guest account, and deploy AppLocker restrictions across all 500 Windows workstations in the corporate domain. What Windows feature should they use?",
    "options": [
      "Group Policy (GPO)",
      "SELinux",
      "Device Manager",
      "Task Scheduler"
    ],
    "answer": 0,
    "explanation": "Group Policy Objects (GPO) (Option A) allow administrators to centrally manage and enforce security settings, software restrictions, and user rights across all machines in a Windows domain. SELinux (Option B) is for Linux. Device Manager (Option C) manages hardware drivers. Task Scheduler (Option D) runs timed scripts."
  },
  {
    "id": 282,
    "section": "S20",
    "question": "A system administrator is tuning SELinux on a new server. They want SELinux to log all policy violations so they can see what would be blocked, but they do not want SELinux to actually block any processes from executing yet. What mode should SELinux be set to?",
    "options": [
      "Permissive Mode",
      "Enforcing Mode",
      "Disabled Mode",
      "Strict Mode"
    ],
    "answer": 0,
    "explanation": "In Permissive Mode (Option A), SELinux logs policy violations but allows the actions to proceed, which is ideal for troubleshooting and tuning. Enforcing Mode (Option B) actively blocks violations. Disabled Mode (Option C) turns SELinux off entirely. Strict Mode (Option D) is a policy type, not an operational mode."
  },
  {
    "id": 283,
    "section": "S20",
    "question": "An organization decides to prevent known malicious applications from running on employee workstations by adding their file hashes to a restriction list. However, any unrecognized or new executables are allowed to run by default. What application restriction model is this?",
    "options": [
      "Blocklisting",
      "Allowlisting",
      "Sandboxing",
      "Least Privilege"
    ],
    "answer": 0,
    "explanation": "Blocklisting (Option A) allows everything to run by default except items explicitly placed on the denied list. Allowlisting (Option B) is the opposite—blocking everything by default except explicitly approved items. Sandboxing (Option C) isolates code. Least Privilege (Option D) relates to user access rights."
  },
  {
    "id": 284,
    "section": "S20",
    "question": "A security analyst monitors a server for a week to establish what a 'normal' day of network traffic looks like, recording average CPU usage and bandwidth consumption. This allows the analyst to detect anomalous spikes in the future. What is this process called?",
    "options": [
      "Baselining",
      "Hardening",
      "Fuzzing",
      "Patching"
    ],
    "answer": 0,
    "explanation": "Baselining (Option A) is the process of measuring a system's normal performance and security state so that any future deviations can be quickly identified as anomalies. Hardening (Option B) is securing the system. Fuzzing (Option C) is dynamic software testing. Patching (Option D) is updating software."
  },
  {
    "id": 285,
    "section": "S20",
    "question": "A hospital's patient database encrypts only the specific column containing Social Security Numbers, leaving the rest of the database unencrypted to maintain fast read speeds for less sensitive data. What level of encryption is this?",
    "options": [
      "Record-Level Encryption",
      "Database-Level Encryption (TDE)",
      "File-Level Encryption",
      "Partition Encryption"
    ],
    "answer": 0,
    "explanation": "Record-Level Encryption (Option A) encrypts specific rows or columns within a database, providing the most granular protection for highly sensitive fields while leaving the rest of the database fast and accessible. TDE (Option B) encrypts the whole database. File (Option C) and Partition (Option D) encryption operate at the OS/disk level, not within the DB structure."
  },
  {
    "id": 286,
    "section": "S21",
    "question": "A network engineer is designing a wireless network for a large office building. They need to ensure that the access points operating in the 2.4 GHz band do not cause adjacent channel interference with each other. Which channels should they exclusively use?",
    "options": [
      "Channels 1, 6, and 11",
      "Channels 2, 5, and 8",
      "Channels 3, 7, and 10",
      "Channels 4, 8, and 12"
    ],
    "answer": 0,
    "explanation": "In the 2.4 GHz frequency band, there are only three non-overlapping channels available: 1, 6, and 11 (Option A). Any other combination of channels (like Options B, C, or D) will cause the signals to overlap, creating adjacent channel interference and degrading network performance."
  },
  {
    "id": 287,
    "section": "S21",
    "question": "After deploying a new wireless network, a security analyst walks through the building and the surrounding parking lot with specialized software to generate a graphical representation of the wireless signal strength. What did the analyst create?",
    "options": [
      "Heat Map",
      "Site Survey",
      "Packet Capture",
      "Network Topology Diagram"
    ],
    "answer": 0,
    "explanation": "A Heat Map (Option A) is a graphical representation of wireless signal strength and coverage created after installation to identify dead zones or signal leakage. A Site Survey (Option B) is the planning process done before installation. A Packet Capture (Option C) analyzes network traffic. A Topology Diagram (Option D) maps network connections."
  },
  {
    "id": 288,
    "section": "S21",
    "question": "An organization upgrades its wireless network to WPA3. Which new feature of WPA3 protects against offline dictionary attacks by replacing the traditional 4-way handshake with a Diffie-Hellman-based key exchange?",
    "options": [
      "Simultaneous Authentication of Equals (SAE)",
      "Enhanced Open (OWE)",
      "Management Frame Protection (MFP)",
      "Temporal Key Integrity Protocol (TKIP)"
    ],
    "answer": 0,
    "explanation": "Simultaneous Authentication of Equals (SAE) (Option A) replaces the WPA2 Pre-Shared Key (PSK) handshake. It ensures that even if an attacker captures the authentication process, they cannot brute-force the password offline. Enhanced Open (Option B) encrypts open networks. MFP (Option C) protects management frames. TKIP (Option D) is the deprecated protocol used in WPA."
  },
  {
    "id": 289,
    "section": "S21",
    "question": "A network administrator needs to implement a centralized authentication server for router and switch administration. They require a protocol that encrypts the entire authentication payload and completely separates the authentication, authorization, and accounting functions. Which protocol should they choose?",
    "options": [
      "TACACS+",
      "RADIUS",
      "EAP-TLS",
      "Kerberos"
    ],
    "answer": 0,
    "explanation": "TACACS+ (Option A) separates the AAA functions, encrypts the entire authentication payload, and uses TCP, making it ideal for device administration. RADIUS (Option B) combines Authentication and Authorization and only encrypts the password. EAP-TLS (Option C) is an authentication framework for wireless/wired ports. Kerberos (Option D) is an Active Directory authentication protocol."
  },
  {
    "id": 290,
    "section": "S21",
    "question": "A developer configures a session cookie with an attribute that prevents client-side JavaScript from accessing it, significantly reducing the risk of the cookie being stolen via Cross-Site Scripting (XSS). Which attribute did they use?",
    "options": [
      "HttpOnly",
      "Secure",
      "SameSite",
      "Domain"
    ],
    "answer": 0,
    "explanation": "The HttpOnly attribute (Option A) prevents client-side scripts (like JavaScript) from accessing the cookie, mitigating XSS attacks. The Secure attribute (Option B) ensures the cookie is only sent over encrypted HTTPS connections. The SameSite attribute (Option C) restricts cross-origin sending to mitigate CSRF. Domain (Option D) specifies which hosts can receive the cookie."
  },
  {
    "id": 291,
    "section": "S21",
    "question": "A security team uses an automated tool to scan an application's source code for SQL injection vulnerabilities before the application is compiled or executed. What type of testing is this?",
    "options": [
      "Static Application Security Testing (SAST)",
      "Dynamic Application Security Testing (DAST)",
      "Fuzzing",
      "Stress Testing"
    ],
    "answer": 0,
    "explanation": "Static Application Security Testing (SAST) (Option A) involves analyzing the application's source code without executing it. DAST (Option B) analyzes the application while it is running. Fuzzing (Option C) injects random data into a running app. Stress Testing (Option D) tests the application under heavy load."
  },
  {
    "id": 292,
    "section": "S21",
    "question": "A quality assurance team tests a new web application by automatically injecting large volumes of random, malformed, and unexpected data into its input fields to see if the application crashes or exposes memory leaks. What dynamic testing technique is this?",
    "options": [
      "Fuzzing",
      "Input Validation",
      "Static Analysis",
      "Sandboxing"
    ],
    "answer": 0,
    "explanation": "Fuzzing (Option A) is a dynamic testing technique that injects random or malformed data into an application to discover crashes and security flaws. Input Validation (Option B) is a defense mechanism, not a testing technique. Static Analysis (Option C) checks source code without running it. Sandboxing (Option D) isolates running code."
  },
  {
    "id": 293,
    "section": "S21",
    "question": "A university allows students to connect personal laptops to the campus network. Before granting internet access, the network requires the laptop to download a temporary agent that checks if the OS is fully patched. Once the check is complete, the agent deletes itself. What type of NAC agent is this?",
    "options": [
      "Non-Persistent Agent",
      "Persistent Agent",
      "Out-of-Band Agent",
      "Inline Agent"
    ],
    "answer": 0,
    "explanation": "A Non-Persistent Agent (Option A) is downloaded temporarily, performs its compliance scan, and then deletes itself, making it ideal for BYOD and guest environments. A Persistent Agent (Option B) is permanently installed for continuous monitoring on corporate-owned devices. Out-of-Band and Inline (Options C and D) describe network architecture, not the agent software behavior."
  },
  {
    "id": 294,
    "section": "S21",
    "question": "An organization wants to prevent its domain from being used in email spoofing attacks. They configure a DNS record that tells receiving mail servers to reject emails if the domain authenticated by SPF or DKIM does not align with the visible 'From' address. What protocol are they implementing?",
    "options": [
      "DMARC",
      "DKIM",
      "SPF",
      "SMTP"
    ],
    "answer": 0,
    "explanation": "DMARC (Option A) checks for alignment between the authenticated domain and the visible 'From' header, enforces policies (like reject or quarantine) when checks fail, and provides reporting. DKIM (Option B) provides a digital signature. SPF (Option C) validates the sender IP. SMTP (Option D) is the protocol for sending email."
  },
  {
    "id": 295,
    "section": "S21",
    "question": "A security analyst deploys a tool that continuously monitors critical operating system binaries and configuration files by comparing their current cryptographic hashes against a known-good baseline, alerting when unauthorized changes occur. What technology is this?",
    "options": [
      "File Integrity Monitoring (FIM)",
      "Endpoint Detection and Response (EDR)",
      "User Behavior Analytics (UBA)",
      "Network Access Control (NAC)"
    ],
    "answer": 0,
    "explanation": "File Integrity Monitoring (FIM) (Option A) uses cryptographic hashes to detect unauthorized changes to critical files. EDR (Option B) is a broader solution for endpoint threat detection and response (which may include FIM). UBA (Option C) monitors user activity patterns. NAC (Option D) controls network access based on device health."
  },
  {
    "id": 296,
    "section": "S21",
    "question": "A cybersecurity system uses machine learning to learn that a specific employee normally logs in from New York between 9 AM and 5 PM. When that employee's account logs in from Russia at 3 AM, the system flags it as anomalous and automatically suspends the account. What technology generated this alert?",
    "options": [
      "User Behavior Analytics (UBA)",
      "File Integrity Monitoring (FIM)",
      "Extended Detection and Response (XDR)",
      "Data Loss Prevention (DLP)"
    ],
    "answer": 0,
    "explanation": "User Behavior Analytics (UBA) (Option A) establishes a baseline of normal behavior for individual users and triggers alerts when deviations (like an unusual location or time) occur. FIM (Option B) monitors file hashes. XDR (Option C) correlates data across security layers but UBA is the specific technology for user anomalies. DLP (Option D) stops data exfiltration."
  },
  {
    "id": 297,
    "section": "S21",
    "question": "A network administrator needs to securely transfer files to a remote server over the internet. The standard FTP protocol sends data in plaintext, exposing it to interception. Which secure alternative should the administrator use?",
    "options": [
      "SFTP",
      "TFTP",
      "SNMPv3",
      "HTTP"
    ],
    "answer": 0,
    "explanation": "SFTP (Secure File Transfer Protocol) (Option A) uses an SSH tunnel to encrypt file transfers, protecting them from interception. TFTP (Option B) is an insecure, lightweight version of FTP. SNMPv3 (Option C) securely manages network devices. HTTP (Option D) is insecure web traffic."
  },
  {
    "id": 298,
    "section": "S21",
    "question": "A company develops a proprietary software application and wants to ensure that customers can verify the software was genuinely created by them and has not been altered by malware since its release. What technique should the developers use before distributing the executable?",
    "options": [
      "Code Signing",
      "Sandboxing",
      "Obfuscation",
      "Input Validation"
    ],
    "answer": 0,
    "explanation": "Code Signing (Option A) uses a digital signature (hash encrypted with the developer's private key) to prove the software's authenticity and integrity. Sandboxing (Option B) isolates running code. Obfuscation (Option C) hides code logic. Input Validation (Option D) sanitizes user input."
  },
  {
    "id": 299,
    "section": "S21",
    "question": "An organization implements a security control that prevents users from accessing known malicious websites by configuring their servers to refuse to resolve the domain names of those sites into IP addresses. What technique is this?",
    "options": [
      "DNS Filtering",
      "Web Proxy",
      "Network Access Control (NAC)",
      "Email Gateway"
    ],
    "answer": 0,
    "explanation": "DNS Filtering (Option A) blocks access to websites by preventing the DNS server from resolving a blocked domain name into an IP address. A Web Proxy (Option B) sits between the user and the internet to filter traffic, but DNS filtering happens at the resolution stage. NAC (Option C) controls local network access. An Email Gateway (Option D) filters email."
  },
  {
    "id": 300,
    "section": "S21",
    "question": "A video streaming service prioritizes transmission speed over perfect data accuracy, as losing a single frame of video is imperceptible to users, but waiting for retransmissions causes buffering. Which transport layer protocol should they use?",
    "options": [
      "UDP",
      "TCP",
      "IPSec",
      "TLS"
    ],
    "answer": 0,
    "explanation": "UDP (User Datagram Protocol) (Option A) is a connectionless protocol that sends data without error checking or guaranteed delivery, making it faster and ideal for streaming video or VoIP. TCP (Option B) guarantees delivery via acknowledgments, causing overhead/delay. IPSec (Option C) encrypts IP packets. TLS (Option D) encrypts application data."
  },
  {
    "id": 301,
    "section": "S22",
    "question": "A security analyst uses an automated tool to compare an organization's servers against a database of known CVEs. The tool highlights missing patches and misconfigurations. What process is the analyst performing?",
    "options": [
      "Vulnerability Scanning",
      "Dynamic Code Analysis",
      "Penetration Testing",
      "Threat Hunting"
    ],
    "answer": 0,
    "explanation": "Vulnerability scanning (Option A) is the automated process of probing systems to discover known weaknesses by comparing their current state to a database of known vulnerabilities (CVEs). Dynamic analysis (Option B) tests running application code. Penetration testing (Option C) actively exploits vulnerabilities. Threat hunting (Option D) is a manual search for hidden threats."
  },
  {
    "id": 302,
    "section": "S22",
    "question": "A software development team implements a tool in their CI/CD pipeline that automatically checks all third-party libraries for known security flaws before the code is compiled. What type of application security is this?",
    "options": [
      "Package Monitoring",
      "Dynamic Application Security Testing (DAST)",
      "Fuzzing",
      "Penetration Testing"
    ],
    "answer": 0,
    "explanation": "Package monitoring (Option A) ensures that third-party libraries and dependencies used in an application are secure and up to date. DAST (Option B) tests the application while it is running. Fuzzing (Option C) injects random data into an application. Penetration testing (Option D) simulates real-world attacks."
  },
  {
    "id": 303,
    "section": "S22",
    "question": "A bank joins an industry-specific alliance to share and receive actionable threat intelligence regarding cyber attacks targeting the financial sector. What type of organization did the bank join?",
    "options": [
      "Information Sharing and Analysis Center (ISAC)",
      "Open-Source Intelligence (OSINT) Forum",
      "Dark Web Marketplace",
      "Bug Bounty Platform"
    ],
    "answer": 0,
    "explanation": "An ISAC (Option A) is an industry-specific alliance (e.g., FS-ISAC for finance) formed to share threat intelligence and vulnerabilities among members. OSINT (Option B) is public intelligence. The Dark Web (Option C) is used by criminals. A Bug Bounty Platform (Option D) pays researchers to find vulnerabilities."
  },
  {
    "id": 304,
    "section": "S22",
    "question": "A security researcher discovers a critical flaw in a popular web browser. Instead of publishing it online immediately, they privately contact the browser's developer, providing details and agreeing on a 90-day window for a patch to be released before going public. What practice is this?",
    "options": [
      "Responsible Disclosure",
      "Zero-Day Exploitation",
      "Extortion",
      "Public Shaming"
    ],
    "answer": 0,
    "explanation": "Responsible disclosure (Option A) is an ethical practice where a researcher privately informs a vendor of a vulnerability and gives them time to fix it before making it public. Zero-day exploitation (Option B) uses the flaw maliciously. Extortion (Option C) demands payment for silence. Public shaming (Option D) is immediate public release."
  },
  {
    "id": 305,
    "section": "S22",
    "question": "A vulnerability scanner flags a Linux server as vulnerable to a specific Windows SMB flaw (MS17-010). The analyst reviews the finding and determines the flaw cannot affect the Linux operating system. How should this finding be categorized?",
    "options": [
      "False Positive",
      "False Negative",
      "True Positive",
      "True Negative"
    ],
    "answer": 0,
    "explanation": "A False Positive (Option A) occurs when a scanner incorrectly reports a vulnerability that does not exist or does not apply (like a Windows flaw on a Linux machine). A False Negative (Option B) is a missed vulnerability. True Positive (Option C) is a correctly identified vulnerability. True Negative (Option D) is a correctly identified secure state."
  },
  {
    "id": 306,
    "section": "S22",
    "question": "A security administrator is prioritizing vulnerabilities for remediation. They encounter a vulnerability with a severity score of 9.8 based on its attack vector, impact, and exploitability. What scoring framework provides this metric?",
    "options": [
      "Common Vulnerability Scoring System (CVSS)",
      "Common Vulnerabilities and Exposures (CVE)",
      "Common Platform Enumeration (CPE)",
      "Open Vulnerability and Assessment Language (OVAL)"
    ],
    "answer": 0,
    "explanation": "CVSS (Option A) is a standardized framework that assigns a numeric severity score (0-10) to vulnerabilities based on their characteristics. CVE (Option B) provides unique identifiers/names for vulnerabilities. CPE (Option C) identifies platforms. OVAL (Option D) is an XML schema for security states."
  },
  {
    "id": 307,
    "section": "S22",
    "question": "An organization discovers a vulnerability on a legacy server that cannot be patched. Instead, they implement strict firewall rules to block all traffic to the vulnerable service from outside the local subnet. What type of remediation strategy is this?",
    "options": [
      "Compensating Controls",
      "Patching",
      "Risk Transfer",
      "Exception"
    ],
    "answer": 0,
    "explanation": "Compensating Controls (Option A) are alternative security measures put in place when the primary control (like a patch) cannot be applied, mitigating the risk to an acceptable level. Patching (Option B) fixes the flaw directly. Risk transfer (Option C) involves insurance. An exception (Option D) is a policy waiver, not the technical control itself."
  },
  {
    "id": 308,
    "section": "S22",
    "question": "An IT administrator performs a vulnerability scan using a domain administrator account. This allows the scanner to log into the target systems and check for missing registry keys and outdated local software versions. What type of scan is this?",
    "options": [
      "Credentialed Scan",
      "Un-credentialed Scan",
      "Discovery Scan",
      "Dynamic Scan"
    ],
    "answer": 0,
    "explanation": "A Credentialed Scan (Option A) uses valid login credentials, allowing the scanner to deeply inspect the OS, registry, and local file system for vulnerabilities. An Un-credentialed scan (Option B) only sees what is exposed externally. A Discovery Scan (Option C) just finds active IPs. Dynamic scan (Option D) relates to application testing."
  },
  {
    "id": 309,
    "section": "S22",
    "question": "After applying a critical security patch to a web server, what is the most important immediate next step a security analyst should take to ensure the patch worked and no new issues were introduced?",
    "options": [
      "Perform a post-remediation vulnerability rescan",
      "Update the disaster recovery plan",
      "Purchase cybersecurity insurance",
      "Submit the vulnerability to a bug bounty program"
    ],
    "answer": 0,
    "explanation": "Rescanning (Option A) is critical to validate remediation, ensuring the patch successfully removed the vulnerability and didn't inadvertently introduce new ones. Updating plans (Option B) is administrative. Buying insurance (Option C) transfers risk but doesn't validate a fix. Bug bounties (Option D) are for finding new flaws."
  },
  {
    "id": 310,
    "section": "S22",
    "question": "A cybersecurity analyst prepares a summary of recently discovered vulnerabilities for the organization's Board of Directors. The document focuses on the overall security posture and business risk rather than technical patching details. What type of reporting is this?",
    "options": [
      "Vertical Internal Reporting",
      "Horizontal Internal Reporting",
      "External Reporting",
      "Responsible Disclosure"
    ],
    "answer": 0,
    "explanation": "Vertical internal reporting (Option A) involves summarizing security posture and risk for upper management or executives. Horizontal reporting (Option B) provides technical details to peers (like sysadmins) for patching. External reporting (Option C) goes outside the company. Responsible disclosure (Option D) is reporting a flaw to a vendor."
  },
  {
    "id": 311,
    "section": "S22",
    "question": "A company discovers that it would cost $500,000 to completely mitigate a specific security risk, but the potential loss from a breach is only $100,000. They decide to purchase a policy to cover the potential financial loss instead of fixing the issue. What response strategy is this?",
    "options": [
      "Cybersecurity Insurance (Risk Transfer)",
      "Compensating Control",
      "Network Segmentation",
      "Patching"
    ],
    "answer": 0,
    "explanation": "Cybersecurity Insurance (Option A) is a risk transfer strategy used to cover financial losses when the cost of mitigation exceeds the potential loss. Compensating controls (Option B) mitigate risk technically. Segmentation (Option C) isolates networks. Patching (Option D) fixes the vulnerability directly."
  },
  {
    "id": 312,
    "section": "S22",
    "question": "An administrator wants to ensure that a newly discovered vulnerability on an administrative workstation cannot spread to the patient records database. They place the database on a separate, isolated VLAN with strict firewall rules. What remediation technique is this?",
    "options": [
      "Network Segmentation",
      "Risk Acceptance",
      "Patching",
      "Alert Tuning"
    ],
    "answer": 0,
    "explanation": "Network segmentation (Option A) divides a network into isolated zones (like a VLAN), preventing threats in one segment from moving laterally to another. Risk acceptance (Option B) is doing nothing. Patching (Option C) fixes the software flaw. Alert tuning (Option D) adjusts monitoring thresholds."
  },
  {
    "id": 313,
    "section": "S22",
    "question": "A vulnerability scanner fails to detect an actively exploitable flaw on a server because the scanner's definition plugins have not been updated in six months. What type of finding does this result in?",
    "options": [
      "False Negative",
      "False Positive",
      "True Positive",
      "True Negative"
    ],
    "answer": 0,
    "explanation": "A False Negative (Option A) occurs when a scanner misses a real vulnerability, often due to outdated plugins or lack of credentials. This is highly dangerous as it creates a false sense of security. False Positive (Option B) is a fake alert. True Positive (Option C) is a correct alert. True Negative (Option D) is correctly finding no flaw."
  },
  {
    "id": 314,
    "section": "S22",
    "question": "An organization calculates that if a specific database vulnerability is exploited, 40% of the customer records will be compromised. What metric does this 40% represent in quantitative risk analysis?",
    "options": [
      "Exposure Factor (EF)",
      "Single Loss Expectancy (SLE)",
      "Annualized Rate of Occurrence (ARO)",
      "Common Vulnerability Scoring System (CVSS)"
    ],
    "answer": 0,
    "explanation": "The Exposure Factor (Option A) is the percentage of an asset's value that would be lost if a specific risk is realized. SLE (Option B) is the monetary loss of one event. ARO (Option C) is how often it happens per year. CVSS (Option D) scores vulnerability severity, not financial risk."
  },
  {
    "id": 315,
    "section": "S22",
    "question": "A cybersecurity team monitors a hidden, non-indexed part of the internet where cybercriminals sell stolen credentials and discuss new zero-day exploits. What source of threat intelligence is the team utilizing?",
    "options": [
      "Dark Web",
      "Open-Source Intelligence (OSINT)",
      "Information Sharing and Analysis Center (ISAC)",
      "Vulnerability Scanner"
    ],
    "answer": 0,
    "explanation": "The Dark Web (Option A) is the intentionally hidden part of the internet used by threat actors, making it a valuable source of early-warning threat intelligence. OSINT (Option B) uses publicly available internet data. ISACs (Option C) are formal industry sharing alliances. Vulnerability scanners (Option D) probe local systems."
  },
  {
    "id": 316,
    "section": "S23",
    "question": "A system administrator records a server's normal CPU, memory, and network usage over a two-week period. This data will be used to detect abnormal spikes in resource utilization in the future. What did the administrator establish?",
    "options": [
      "Baseline",
      "Benchmark",
      "Threshold",
      "Vulnerability Scan"
    ],
    "answer": 0,
    "explanation": "A Baseline (Option A) establishes the normal, expected performance metrics of a system so that any future deviations can be quickly identified as anomalies. A Benchmark (Option B) is a best-practice configuration standard. A Threshold (Option C) is a specific limit that triggers an alert. A Vulnerability scan (Option D) checks for known flaws."
  },
  {
    "id": 317,
    "section": "S23",
    "question": "A security operations center uses a tool to collect, centralize, and correlate logs from firewalls, servers, and VPNs to detect complex attacks that would be invisible if analyzing the logs individually. What type of tool is this?",
    "options": [
      "Security Information and Event Management (SIEM)",
      "Simple Network Management Protocol (SNMP)",
      "Data Loss Prevention (DLP)",
      "Network Intrusion Prevention System (NIPS)"
    ],
    "answer": 0,
    "explanation": "A SIEM (Option A) aggregates log data from across the enterprise and uses correlation to detect complex threat patterns. SNMP (Option B) manages and monitors network devices. DLP (Option C) prevents data exfiltration. NIPS (Option D) actively blocks malicious network traffic."
  },
  {
    "id": 318,
    "section": "S23",
    "question": "An administrator needs to configure a network device to proactively send an unsolicited alert to a central monitoring server whenever a network interface goes down. Which SNMP message type should be used?",
    "options": [
      "TRAP",
      "SET",
      "GET",
      "POLL"
    ],
    "answer": 0,
    "explanation": "An SNMP TRAP (Option A) is an unsolicited, asynchronous message sent from the agent to the manager to notify it of a significant event (like an interface going down). A SET message (Option B) changes a variable. A GET message (Option C) retrieves a variable. POLL (Option D) is the manager asking the agent for status."
  },
  {
    "id": 319,
    "section": "S23",
    "question": "A network monitoring system receives an SNMP alert containing only a specific Object Identifier (OID) that indicates a state change, without the full context of the event, to save network bandwidth. What type of trap is this?",
    "options": [
      "Granular Trap",
      "Verbose Trap",
      "Stateful Trap",
      "Baseline Trap"
    ],
    "answer": 0,
    "explanation": "A Granular Trap (Option A) sends only a unique OID representing the changed value, making it very bandwidth-efficient since the manager's MIB already knows what the OID means. A Verbose Trap (Option B) sends the full payload of the event context, using more bandwidth. Stateful and Baseline traps (Options C and D) are not standard SNMP trap types."
  },
  {
    "id": 320,
    "section": "S23",
    "question": "A security team wants to monitor network traffic for malicious activity but does not have the storage capacity for Full Packet Capture. They decide to record only traffic metadata, such as source/destination IPs and protocols used. What protocol provides this capability?",
    "options": [
      "NetFlow / IPFIX",
      "Simple Network Management Protocol (SNMP)",
      "Syslog",
      "OVAL"
    ],
    "answer": 0,
    "explanation": "NetFlow and its standardized successor IPFIX (Option A) collect network traffic metadata (flow analysis) rather than full packet contents, providing visibility while saving massive amounts of storage. SNMP (Option B) monitors device health. Syslog (Option C) is for event logs. OVAL (Option D) is an XML schema for vulnerabilities."
  },
  {
    "id": 321,
    "section": "S23",
    "question": "A cybersecurity analyst investigates a potential data breach and uses a tool that combines flow sampling with selective full packet capture, saving the full payload only when traffic matches specific suspicious signatures. What tool matches this description?",
    "options": [
      "Zeek",
      "MRTG",
      "Splunk",
      "Nessus"
    ],
    "answer": 0,
    "explanation": "Zeek (Option A) is a hybrid tool that passively samples traffic metadata (flow analysis) but can also log full packet captures when specific filters or suspicious signatures are triggered. MRTG (Option B) graphs traffic via SNMP. Splunk (Option C) is a SIEM for log analysis. Nessus (Option D) is a vulnerability scanner."
  },
  {
    "id": 322,
    "section": "S23",
    "question": "An organization must comply with HIPAA regulations, which require retaining audit logs for up to six years. The IT team configures their SIEM to automatically move logs older than 90 days to cheap, long-term cloud storage. What activity is this?",
    "options": [
      "Archiving",
      "Reporting",
      "Alert Tuning",
      "Log Aggregation"
    ],
    "answer": 0,
    "explanation": "Archiving (Option A) is the activity of storing logs and data for long-term retention to satisfy compliance requirements or future investigations. Reporting (Option B) summarizes data. Alert tuning (Option C) reduces false positives. Log aggregation (Option D) is collecting active logs into the SIEM."
  },
  {
    "id": 323,
    "section": "S23",
    "question": "A security team implements a dashboard that integrates alerts from the SIEM, vulnerability scanner, and endpoint detection systems into one unified interface, eliminating the need to log into multiple separate tools. What is this concept called?",
    "options": [
      "Single Pane of Glass (SPOG)",
      "Management Information Base (MIB)",
      "Flow Analysis",
      "Unified Threat Management (UTM)"
    ],
    "answer": 0,
    "explanation": "A Single Pane of Glass (SPOG) (Option A) is a centralized dashboard that consolidates information from multiple disparate security tools into one unified view for easier management and faster response. A MIB (Option B) translates SNMP OIDs. Flow analysis (Option C) tracks network metadata. UTM (Option D) is an all-in-one firewall appliance."
  },
  {
    "id": 324,
    "section": "S23",
    "question": "A security architect mandates that all network devices must use a management protocol that supports message integrity, authentication, and encryption to prevent attackers from reading community strings in plaintext. Which version of SNMP must be used?",
    "options": [
      "SNMPv3",
      "SNMPv1",
      "SNMPv2c",
      "SNMPv4"
    ],
    "answer": 0,
    "explanation": "SNMPv3 (Option A) introduces critical security features including message integrity, authentication, and confidentiality (encryption). SNMPv1 and v2c (Options B and C) rely on insecure plaintext community strings. SNMPv4 (Option D) does not exist."
  },
  {
    "id": 325,
    "section": "S23",
    "question": "An organization wants to automate the process of verifying that all Windows 10 workstations comply with the CIS baseline configuration. Which SCAP component provides the XML format for writing these automated configuration checklists?",
    "options": [
      "XCCDF",
      "OVAL",
      "CVE",
      "CVSS"
    ],
    "answer": 0,
    "explanation": "XCCDF (Extensible Configuration Checklist Description Format) (Option A) is the SCAP standard used to write machine-readable configuration checklists and rules for automated auditing. OVAL (Option B) describes system security states. CVE (Option C) lists vulnerabilities. CVSS (Option D) scores vulnerabilities."
  },
  {
    "id": 326,
    "section": "S23",
    "question": "A Data Loss Prevention (DLP) system generates hundreds of alerts a day because it is triggering on every email containing a 9-digit number, most of which are not Social Security Numbers. The analyst modifies the rule to only trigger if the words 'SSN' or 'Social' are nearby. What remediation step is this?",
    "options": [
      "Alert Tuning",
      "Quarantining",
      "Network Segmentation",
      "Baselining"
    ],
    "answer": 0,
    "explanation": "Alert tuning (Option A) involves modifying threshold parameters or conditions to reduce false positives, preventing alert fatigue and improving the relevance of security warnings. Quarantining (Option B) isolates infected systems. Segmentation (Option C) isolates networks. Baselining (Option D) establishes normal performance."
  },
  {
    "id": 327,
    "section": "S23",
    "question": "During a security audit, a scanner needs to identify the exact hardware, operating system, and application versions running on a target device using a standardized machine-readable naming scheme (e.g., cpe:/o:microsoft:windows_10). Which SCAP standard provides this?",
    "options": [
      "Common Platform Enumeration (CPE)",
      "Common Configuration Enumeration (CCE)",
      "Common Vulnerabilities and Exposures (CVE)",
      "Asset Reporting Format (ARF)"
    ],
    "answer": 0,
    "explanation": "CPE (Option A) is the SCAP standard used for assigning unique, machine-readable identifiers to hardware, operating systems, and applications. CCE (Option B) identifies configuration best practices. CVE (Option C) identifies known vulnerabilities. ARF (Option D) is an XML schema for reporting asset data."
  },
  {
    "id": 328,
    "section": "S23",
    "question": "A network administrator uses a tool that actively polls routers via SNMP to create visual graphs of network traffic flow over time, helping to identify unexpected traffic spikes at 3 AM. What tool is this?",
    "options": [
      "Multi Router Traffic Grapher (MRTG)",
      "Wireshark",
      "Nessus",
      "Logstash"
    ],
    "answer": 0,
    "explanation": "MRTG (Option A) creates visual graphs showing network traffic flow by polling router and switch interfaces via SNMP, helping to identify anomalies like unexplained traffic spikes. Wireshark (Option B) is a full packet capture analyzer. Nessus (Option C) is a vulnerability scanner. Logstash (Option D) is part of the ELK SIEM stack for log collection."
  },
  {
    "id": 329,
    "section": "S23",
    "question": "An endpoint detection system suspects a laptop is infected with ransomware. The system automatically isolates the laptop's network connection, allowing it to communicate only with the central security server for investigation. What remediation action is this?",
    "options": [
      "Quarantining",
      "Alert Tuning",
      "Log Aggregation",
      "System Baselining"
    ],
    "answer": 0,
    "explanation": "Quarantining (Option A) is the remediation action of isolating a suspected malicious system or file from the rest of the network to prevent the threat from spreading while it is investigated. Alert tuning (Option B) adjusts trigger parameters. Log aggregation (Option C) centralizes logs. Baselining (Option D) measures normal performance."
  },
  {
    "id": 330,
    "section": "S23",
    "question": "A security analyst configures a SIEM to collect logs directly from network switches and routers using standard protocols like syslog and SNMP, without installing any additional software on the devices themselves. What type of log collection is this?",
    "options": [
      "Agentless Collection",
      "Agent-based Collection",
      "Full Packet Capture",
      "Dynamic Analysis"
    ],
    "answer": 0,
    "explanation": "Agentless collection (Option A) uses standard protocols (like SNMP, syslog, or WMI) to gather logs directly from devices without needing to install or maintain dedicated SIEM software agents on them. Agent-based (Option B) requires software installation. Full packet capture (Option C) records payload contents. Dynamic analysis (Option D) tests running code."
  },
  {
    "id": 331,
    "section": "S24",
    "question": "A cybersecurity analyst notices unusual outbound traffic on a server and isolates the server from the network to prevent a potential data breach from spreading. According to the CompTIA incident response model, which phase is the analyst performing?",
    "options": [
      "Containment",
      "Detection",
      "Eradication",
      "Recovery"
    ],
    "answer": 0,
    "explanation": "Containment (Option A) is the phase where actions are taken to limit the scope and magnitude of an incident, such as isolating an infected server. Detection (Option B) is identifying the incident. Eradication (Option C) is removing the threat. Recovery (Option D) is restoring the system to normal operations."
  },
  {
    "id": 332,
    "section": "S24",
    "question": "Following a major ransomware attack, a company's IT department holds a meeting to discuss what went right and what went wrong during their response. They document these findings to improve future processes. What post-incident activity is this?",
    "options": [
      "Lessons Learned Process",
      "Root Cause Analysis",
      "Preparation",
      "Threat Hunting"
    ],
    "answer": 0,
    "explanation": "The Lessons Learned Process (Option A) documents successes and failures during an incident response to improve future readiness. Root Cause Analysis (Option B) identifies why the incident happened. Preparation (Option C) occurs before an incident. Threat hunting (Option D) is proactive searching for undetected threats."
  },
  {
    "id": 333,
    "section": "S24",
    "question": "An organization decides to proactively search its network for undetected threats that may have bypassed existing security monitoring tools, assuming that a breach has already occurred. What technique is this?",
    "options": [
      "Threat Hunting",
      "Vulnerability Scanning",
      "Penetration Testing",
      "Digital Forensics"
    ],
    "answer": 0,
    "explanation": "Threat Hunting (Option A) is a proactive technique that searches for existing or emerging threats that bypassed normal monitoring. Vulnerability scanning (Option B) checks for known flaws. Penetration testing (Option C) simulates attacks. Digital Forensics (Option D) investigates devices after an incident is confirmed."
  },
  {
    "id": 334,
    "section": "S24",
    "question": "During a forensic investigation, an analyst creates a bit-by-bit copy of a compromised server's hard drive and computes a hash for the copy. The analyst performs all investigations on this copy. What forensic principle is being upheld?",
    "options": [
      "Preserving the integrity of the original evidence",
      "Chain of Custody",
      "Order of Volatility",
      "File Carving"
    ],
    "answer": 0,
    "explanation": "Creating a bit-by-bit copy (disk image) and analyzing only the copy preserves the integrity of the original evidence (Option A), which is a core forensic ethic. Chain of Custody (Option B) tracks who handled it. Order of Volatility (Option C) dictates collection sequence. File carving (Option D) recovers deleted files."
  },
  {
    "id": 335,
    "section": "S24",
    "question": "A company is sued by a former employee. The legal department issues a formal notice instructing the IT department to preserve all emails and documents related to the employee, prohibiting any deletion. What is this notice called?",
    "options": [
      "Legal Hold",
      "E-Discovery",
      "Chain of Custody",
      "Data Acquisition"
    ],
    "answer": 0,
    "explanation": "A Legal Hold (Option A) is a formal notification to preserve all relevant electronic data when litigation is expected. E-Discovery (Option B) is the process of searching and producing that data. Chain of Custody (Option C) tracks evidence handling. Data acquisition (Option D) is creating forensic copies."
  },
  {
    "id": 336,
    "section": "S24",
    "question": "An incident response team gathers around a conference table to verbally discuss how they would handle a hypothetical data breach scenario presented by a facilitator. No actual systems are touched. What type of exercise is this?",
    "options": [
      "Tabletop Exercise",
      "Simulation Exercise",
      "Penetration Test",
      "Root Cause Analysis"
    ],
    "answer": 0,
    "explanation": "A Tabletop Exercise (Option A) is a discussion-based test of an incident response plan conducted verbally. A Simulation Exercise (Option B) is a realistic, hands-on test. A Penetration Test (Option C) is a simulated attack on live systems. Root Cause Analysis (Option D) investigates a real incident."
  },
  {
    "id": 337,
    "section": "S24",
    "question": "An organization experiences a malware infection. After analyzing the incident, they determine the initial vector was an infected USB drive. They conclude the event was caused by a lack of policy enforcement, not by the specific user who plugged it in. What process did they use to reach this conclusion?",
    "options": [
      "Root Cause Analysis using a no-blame approach",
      "Lessons Learned Process",
      "Threat Modeling",
      "E-Discovery"
    ],
    "answer": 0,
    "explanation": "Root Cause Analysis (Option A) identifies the systemic cause of an incident to prevent recurrence, and it must use a no-blame approach to encourage honesty. Lessons learned (Option B) reviews the response itself. Threat modeling (Option C) profiles attackers. E-Discovery (Option D) is for litigation."
  },
  {
    "id": 338,
    "section": "S24",
    "question": "A forensic analyst arrives at a crime scene involving a powered-on computer. According to the order of volatility, which piece of evidence should the analyst collect first before the machine is powered off?",
    "options": [
      "System memory (CPU Cache and RAM)",
      "The physical hard drive",
      "Network routing tables",
      "Remote backup tapes"
    ],
    "answer": 0,
    "explanation": "According to the Order of Volatility, System Memory like CPU cache and RAM (Option A) must be collected first because it is highly volatile and lost when powered off. Hard drives (Option B) are persistent. Routing tables (Option C) are slightly less volatile. Backup tapes (Option D) are the least volatile."
  },
  {
    "id": 339,
    "section": "S24",
    "question": "To ensure that digital evidence is admissible in court, an investigator maintains a detailed log documenting who collected the evidence, where it was stored, and everyone who handled it from collection to trial. What is this documentation called?",
    "options": [
      "Chain of Custody",
      "Legal Hold",
      "After-Action Report",
      "Order of Volatility"
    ],
    "answer": 0,
    "explanation": "Chain of Custody (Option A) is the verifiable record tracking the handling of evidence to prove it was not tampered with. Legal hold (Option B) preserves data. An After-Action Report (Option C) summarizes an incident response. Order of volatility (Option D) dictates collection priority."
  },
  {
    "id": 340,
    "section": "S24",
    "question": "An organization hires an external, specialized incident response team to handle a complex breach. While highly skilled, the team struggles initially because they do not understand the company's specific network architecture. What is this a common disadvantage of?",
    "options": [
      "Outsourced IR Teams",
      "Internal IR Teams",
      "Red Teams",
      "Blue Teams"
    ],
    "answer": 0,
    "explanation": "Outsourced IR Teams (Option A) offer deep expertise but have the disadvantage of being unfamiliar with an organization's specific network environment, requiring time to learn it. Internal teams (Option B) know the network well. Red/Blue teams (Options C/D) are testing constructs, not IR models."
  },
  {
    "id": 341,
    "section": "S24",
    "question": "A security operations center combines internal SIEM logs with external threat intelligence feeds containing known malicious IP addresses to quickly identify compromised hosts on their network. What practice is this?",
    "options": [
      "Intelligence Fusion",
      "Root Cause Analysis",
      "File Carving",
      "Risk Transfer"
    ],
    "answer": 0,
    "explanation": "Intelligence Fusion (Option A) is the practice of combining internal data (like SIEM logs) with external threat intelligence to produce actionable insights. Root Cause Analysis (Option B) investigates the origin of an incident. File carving (Option C) recovers data. Risk transfer (Option D) involves insurance."
  },
  {
    "id": 342,
    "section": "S24",
    "question": "During the recovery phase of an incident, which action is a security team most likely to perform?",
    "options": [
      "Restoring systems from a known-good backup",
      "Disconnecting an infected server from the network",
      "Removing the malicious files from a workstation",
      "Writing the after-action report"
    ],
    "answer": 0,
    "explanation": "Restoring from known-good backups (Option A) is a core action of the Recovery phase. Disconnecting a server (Option B) is Containment. Removing files (Option C) is Eradication. Writing the report (Option D) is Post-Incident Activity."
  },
  {
    "id": 343,
    "section": "S24",
    "question": "A forensic analyst needs to recover deleted files from a corrupted hard drive where the file system metadata is completely destroyed. They use a tool to search for specific file headers and footers to extract the data. What technique is this?",
    "options": [
      "File Carving",
      "Disk Imaging",
      "Data Exfiltration",
      "Threat Hunting"
    ],
    "answer": 0,
    "explanation": "File carving (Option A) extracts files directly from storage media without relying on the file system by looking for recognizable file headers/footers. Disk imaging (Option B) copies the disk. Data exfiltration (Option C) is stealing data. Threat hunting (Option D) is proactive searching."
  },
  {
    "id": 344,
    "section": "S24",
    "question": "In a Windows forensic investigation, why is it critical for an analyst to capture a memory dump before analyzing the physical hard drive?",
    "options": [
      "Because volatile registry hives like HKLM\\HARDWARE exist only in RAM and log connected storage devices",
      "Because the hard drive cannot be imaged if the machine is powered on",
      "Because memory dumps automatically decrypt bitlocker volumes",
      "Because RAM contains the only copy of the Windows event logs"
    ],
    "answer": 0,
    "explanation": "Critical registry hives like HKLM\\HARDWARE (Option A), which log USB device connections, are highly volatile and exist only in RAM. If the system is powered off or only the disk is imaged, this data is lost. Options B, C, and D are factually incorrect."
  },
  {
    "id": 345,
    "section": "S24",
    "question": "According to the CompTIA incident response model, in which phase does the security team create policies, establish communication plans, and assemble incident response kits before an incident even occurs?",
    "options": [
      "Preparation",
      "Detection",
      "Analysis",
      "Containment"
    ],
    "answer": 0,
    "explanation": "Preparation (Option A) is the first phase, focused on getting people, policies, and tools ready before an incident happens. Detection (Option B) is realizing an incident occurred. Analysis (Option C) is understanding it. Containment (Option D) is stopping the spread."
  },
  {
    "id": 346,
    "section": "S25",
    "question": "A security analyst reviews an OS security log and notices 50 failed login attempts on a single account in two seconds. The passwords attempted were 'apple', 'baseball', 'sunshine', and 'password'. What type of attack does this pattern indicate?",
    "options": [
      "Dictionary attack",
      "Brute force attack",
      "Rainbow table attack",
      "Pass-the-hash attack"
    ],
    "answer": 0,
    "explanation": "A Dictionary Attack (Option A) uses common words (like those found in a dictionary) to guess passwords. A Brute Force attack (Option B) uses sequential or random guesses (e.g., 1234, 1235). Rainbow tables (Option C) are precomputed hashes. Pass-the-hash (Option D) uses a stolen hash directly without knowing the plaintext password."
  },
  {
    "id": 347,
    "section": "S25",
    "question": "An analyst reviews a packet capture snippet and sees the same source IP sending SYN packets to a single destination IP, but targeting destination ports 21, 22, 23, 80, and 443 in rapid succession. What activity is occurring?",
    "options": [
      "Port scan",
      "SYN flood (DoS)",
      "Distributed Denial of Service (DDoS)",
      "ARP spoofing"
    ],
    "answer": 0,
    "explanation": "A Port Scan (Option A) is indicated by one source repeatedly probing many different destination ports on a single host to find open services. A SYN flood (Option B) targets one port repeatedly to cause denial of service. DDoS (Option C) involves many sources. ARP spoofing (Option D) involves MAC address manipulation."
  },
  {
    "id": 348,
    "section": "S25",
    "question": "An organization uses a SIEM to collect logs from servers in New York, London, and Tokyo. To ensure the events are sequenced correctly during an investigation, what action must the SIEM perform on the timestamps?",
    "options": [
      "Correlate and standardize them to UTC",
      "Convert them all to local server time",
      "Encrypt the timestamps",
      "Generate new timestamps based on SIEM receipt time"
    ],
    "answer": 0,
    "explanation": "Standardizing timestamps to UTC (Option A) through correlation is critical in a SIEM to ensure that events from different time zones are sequenced correctly. Using local time (Option B) or receipt time (Option D) would ruin the chronological order of a cross-region attack. Encryption (Option C) secures data but doesn't fix sequencing."
  },
  {
    "id": 349,
    "section": "S25",
    "question": "A security team wants to monitor network bandwidth usage and identify which IP addresses are transferring the most data, but they do not need to inspect the actual payload contents. Which protocol should they use?",
    "options": [
      "NetFlow / IPFIX",
      "Full Packet Capture",
      "Syslog",
      "NXLog"
    ],
    "answer": 0,
    "explanation": "NetFlow (and its open standard IPFIX) (Option A) collects flow metadata (who is talking to whom, and volume) without the overhead of full payload inspection. Full Packet Capture (Option B) records everything, requiring massive storage. Syslog and NXLog (Options C and D) are for log management, not flow analysis."
  },
  {
    "id": 350,
    "section": "S25",
    "question": "An analyst reviews a Web Application Firewall (WAF) log and sees a blocked HTTP request with the URI `/login.php?user=' OR '1'='1' --`. What type of attack was prevented?",
    "options": [
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Buffer Overflow",
      "Directory Traversal"
    ],
    "answer": 0,
    "explanation": "The payload `' OR '1'='1' --` is a classic SQL Injection (Option A) attempt, designed to force a true condition in a database query. XSS (Option B) uses scripts (like `<script>`). Buffer overflow (Option C) uses excessive data to crash a service. Directory traversal (Option D) uses `../` to escape web directories."
  },
  {
    "id": 351,
    "section": "S25",
    "question": "During an incident investigation, an analyst must query logs generated by the `systemd` service on a Linux web server. Which command-line tool should the analyst use?",
    "options": [
      "journalctl",
      "ipconfig",
      "netstat",
      "traceroute"
    ],
    "answer": 0,
    "explanation": "`journalctl` (Option A) is the Linux command-line utility used to query and display logs collected by `journald` (the logging service for `systemd`). `ipconfig` (Option B) shows Windows IP info. `netstat` (Option C) shows network connections. `traceroute` (Option D) shows network paths."
  },
  {
    "id": 352,
    "section": "S25",
    "question": "An organization has a mixed environment of Windows and Linux servers. They want to use a single open-source log management tool to collect and forward logs from both operating systems to their SIEM. Which tool is best suited for this?",
    "options": [
      "NXLog",
      "Rsyslog",
      "Syslog-ng",
      "journalctl"
    ],
    "answer": 0,
    "explanation": "NXLog (Option A) is a cross-platform log management tool that works on both Windows and Linux/Unix. Rsyslog and Syslog-ng (Options B and C) are primarily for Linux/Unix systems. `journalctl` (Option D) only queries local `systemd` logs on Linux."
  },
  {
    "id": 353,
    "section": "S25",
    "question": "An analyst is reviewing an Intrusion Prevention System (IPS) log. They see a 'Critical' SQL injection alert that was 'Blocked' and a 'High' data exfiltration alert that was only 'Monitored'. Which event should the analyst prioritize for immediate investigation?",
    "options": [
      "The High data exfiltration alert because it was not blocked",
      "The Critical SQL injection alert because it has a higher severity label",
      "Both equally because they are both serious alerts",
      "Neither, as the IPS handled them automatically"
    ],
    "answer": 0,
    "explanation": "The analyst should prioritize the 'Monitored' High alert (Option A). An event that was 'Blocked' is a mitigated risk, regardless of severity. An event that was only 'Monitored/Alerted' represents an active, unmitigated threat that succeeded and requires immediate attention."
  },
  {
    "id": 354,
    "section": "S25",
    "question": "A packet capture shows hundreds of SYN packets arriving at a web server from many different, randomly changing source IP addresses. The server's connection table is full, causing legitimate traffic to be dropped. What type of attack is this?",
    "options": [
      "Distributed Denial of Service (DDoS)",
      "Denial of Service (DoS - SYN flood from a single source)",
      "Port Scan",
      "ARP Spoofing"
    ],
    "answer": 0,
    "explanation": "Because the source IP addresses are constantly changing (many sources targeting one destination), this is a Distributed Denial of Service (DDoS) (Option A). A single-source SYN flood (Option B) would show only one source IP. A port scan (Option C) targets many ports. ARP spoofing (Option D) alters MAC/IP associations."
  },
  {
    "id": 355,
    "section": "S25",
    "question": "An endpoint log shows a user downloading a small file called `invoice_setup.exe`. The user bypassed an antivirus warning to run it. The file then reached out to the internet, downloaded a larger payload, and disabled the local firewall. What infection pattern is this?",
    "options": [
      "Dropper Infection Chain",
      "Logic Bomb",
      "Ransomware Encryption",
      "Dictionary Attack"
    ],
    "answer": 0,
    "explanation": "This describes a Dropper Infection Chain (Option A), where a small initial file (stage one) is used to download and execute the actual malicious payload (stage two). A logic bomb (Option B) triggers on a specific event. Ransomware (Option C) encrypts files. A dictionary attack (Option D) is a password attack."
  },
  {
    "id": 356,
    "section": "S25",
    "question": "A network log shows the IP address `192.168.1.50` rapidly alternating its associated MAC address between `00:1A:2B:3C:4D:5E` and `AA:BB:CC:DD:EE:FF` in consecutive ARP replies. What attack does this indicate?",
    "options": [
      "ARP Spoofing",
      "DNS Poisoning",
      "MAC Flooding",
      "Port Scanning"
    ],
    "answer": 0,
    "explanation": "Repeatedly associating different MAC addresses with the same IP address in ARP replies is the classic signature of ARP Spoofing (Option A), where an attacker impersonates another host on the local network. DNS poisoning (Option B) corrupts name resolution. MAC flooding (Option C) overwhelms a switch. Port scanning (Option D) probes open ports."
  },
  {
    "id": 357,
    "section": "S25",
    "question": "A vulnerability scanner flags a critical remote code execution flaw on a server. However, the analyst notes that the server is completely isolated from the network and scheduled for physical destruction the next day. How should the analyst evaluate the CVSS score in this context?",
    "options": [
      "The analyst should deprioritize the vulnerability based on the real environmental context and compensating controls",
      "The analyst must patch the server immediately because the scanner marked it as critical",
      "The analyst should change the scanner's CVSS calculation formula permanently",
      "The analyst should report a false positive because isolated servers cannot be vulnerable"
    ],
    "answer": 0,
    "explanation": "CVSS scores must be weighed against real environmental context (Option A). An isolated, soon-to-be-destroyed server poses little actual risk, despite the base score. You don't blindly patch (Option B). You don't change the standard formula (Option C). It's a true vulnerability, just mitigated, so it's not a false positive (Option D)."
  },
  {
    "id": 358,
    "section": "S25",
    "question": "An analyst is investigating a suspicious file named `financial_report.pdf`. Upon examining the file's metadata, the analyst discovers the file header indicates it is actually an executable (`.exe`). What is this an indicator of?",
    "options": [
      "Malicious file type mismatch",
      "Corrupted file system",
      "Routine OS file compression",
      "Accidental file deletion"
    ],
    "answer": 0,
    "explanation": "A file type mismatch (Option A) — where the extension (e.g., .pdf) does not match the actual file header type (e.g., .exe) — is a strong metadata indicator of malicious intent, attempting to trick a user into running malware. The other options do not explain a deliberate file extension mismatch."
  },
  {
    "id": 359,
    "section": "S25",
    "question": "In an application log, an analyst sees routine entries for saving and printing documents. Mixed in, there is an entry showing a macro execution being blocked, followed by a known malware signature match and the file being quarantined. What should the analyst conclude?",
    "options": [
      "The file triggering the block and quarantine actions is the malicious payload",
      "The application is malfunctioning and randomly quarantining files",
      "The printing function caused a buffer overflow",
      "The user accidentally deleted a critical system file"
    ],
    "answer": 0,
    "explanation": "In application logs, routine entries (save, print) are just noise. The presence of block, scan, and quarantine actions (Option A) isolates the specific event that represents the malicious macro infection chain. The other options are incorrect interpretations of standard security alerts."
  },
  {
    "id": 360,
    "section": "S25",
    "question": "To uniquely identify a known malicious file across the entire enterprise network without relying on its easily changeable filename, what file metadata should a security analyst use?",
    "options": [
      "Checksum / Hash (e.g., MD5 or SHA-256)",
      "File creation date",
      "File size",
      "File owner"
    ],
    "answer": 0,
    "explanation": "A checksum or hash (Option A) acts as a unique digital fingerprint for a file's contents. Even if the attacker changes the filename, date, or owner, the hash remains the same as long as the contents are identical, allowing the file to be reliably blocked network-wide. Dates, sizes, and owners (Options B, C, D) are easily manipulated."
  },
  {
    "id": 361,
    "section": "S26",
    "question": "A security team implements a process that automatically isolates an infected workstation, creates a forensic image of its hard drive, formats the drive, reinstalls a secure baseline OS, and returns it to the network. What concept does this sequence describe?",
    "options": [
      "Orchestration",
      "Automation",
      "Continuous Integration",
      "Vulnerability Scanning"
    ],
    "answer": 0,
    "explanation": "Orchestration (Option A) is the coordinated, sequenced execution of multiple automated tasks to achieve a broader workflow (like a full incident response cycle). Automation (Option B) refers to executing a single task without human intervention. Continuous Integration (Option C) relates to software development. Vulnerability scanning (Option D) just finds flaws."
  },
  {
    "id": 362,
    "section": "S26",
    "question": "An organization is deploying a new tool that integrates with their existing SIEM, allowing it not only to generate alerts but also to automatically execute remediation workflows, such as suspending compromised user accounts. What type of tool is this?",
    "options": [
      "Security Orchestration, Automation, and Response (SOAR)",
      "Data Loss Prevention (DLP)",
      "Intrusion Detection System (IDS)",
      "Web Application Firewall (WAF)"
    ],
    "answer": 0,
    "explanation": "SOAR (Option A) acts as 'SIEM 2.0', combining data collection and alerting with orchestration and automation to execute incident response workflows automatically. DLP (Option B) stops data exfiltration. An IDS (Option C) only alerts. A WAF (Option D) protects web applications."
  },
  {
    "id": 363,
    "section": "S26",
    "question": "An incident response team uses a written checklist that details every step an analyst must take when responding to a phishing attack. The steps are performed manually by the analyst. What is this document called?",
    "options": [
      "Playbook",
      "Runbook",
      "Policy",
      "After-Action Report"
    ],
    "answer": 0,
    "explanation": "A Playbook (Option A) is a checklist of manual or automated steps to respond to a specific incident type. A Runbook (Option B) is an automated version of a playbook that leaves defined interaction points for humans. A Policy (Option C) is a high-level rule. An After-Action Report (Option D) is written after an incident."
  },
  {
    "id": 364,
    "section": "S26",
    "question": "A security automation script was written three years ago by a former employee. Because the script was poorly documented and uses outdated API calls, it constantly breaks, forcing the current team to spend hours fixing it instead of doing other work. What concept does this represent?",
    "options": [
      "Technical Debt",
      "Single Point of Failure",
      "Continuous Deployment",
      "Orchestration"
    ],
    "answer": 0,
    "explanation": "Technical Debt (Option A) is the accumulated cost and maintenance burden of suboptimal, outdated, or poorly maintained code/automation that eventually requires significant effort to fix or refactor. A single point of failure (Option B) is a component whose failure stops the whole system. Continuous Deployment (Option C) and Orchestration (Option D) are unrelated."
  },
  {
    "id": 365,
    "section": "S26",
    "question": "A cloud administrator sets up an automated control that continuously monitors the configuration of all Amazon S3 buckets. If an employee accidentally makes a bucket publicly readable, the control immediately reverts the setting to private without human intervention. What is this an example of?",
    "options": [
      "Guardrails",
      "Continuous Integration",
      "User Provisioning",
      "Ticket Escalation"
    ],
    "answer": 0,
    "explanation": "Guardrails (Option A) are automated safety controls that enforce security standards and automatically correct insecure infrastructure configurations (like an open S3 bucket). Continuous Integration (Option B) is a coding practice. User provisioning (Option C) handles accounts. Ticket escalation (Option D) moves support tickets."
  },
  {
    "id": 366,
    "section": "S26",
    "question": "An organization implements a system where new code committed by developers is automatically built and tested multiple times a day to ensure it integrates correctly with the main codebase. However, the final release to production is triggered manually by a manager. What practice is this?",
    "options": [
      "Continuous Delivery",
      "Continuous Deployment",
      "Continuous Integration (CI)",
      "Agile Waterfall"
    ],
    "answer": 0,
    "explanation": "Continuous Delivery (Option A) automates testing and building so software is always ready to deploy, but the final push to production remains a manual decision. Continuous Deployment (Option B) pushes to production automatically. CI (Option C) is just the merge/build/test part. Agile Waterfall (Option D) is a contradictory term."
  },
  {
    "id": 367,
    "section": "S26",
    "question": "A development team needs to integrate two enterprise systems. They require a messaging protocol that provides strong security, transaction compliance, and uses a strict XML format with defined headers and bodies. Which API architecture should they use?",
    "options": [
      "SOAP",
      "REST",
      "Curl",
      "JSON"
    ],
    "answer": 0,
    "explanation": "SOAP (Simple Object Access Protocol) (Option A) uses a strict XML format and provides robust security and transactional compliance suitable for enterprise systems. REST (Option B) is lightweight and typically uses JSON. Curl (Option C) is a command-line tool. JSON (Option D) is a data format, not an API architecture."
  },
  {
    "id": 368,
    "section": "S26",
    "question": "A security analyst needs to quickly test whether a REST API endpoint is responding correctly by sending a simple HTTP POST request with JSON data from a Linux terminal. Which command-line tool is best suited for this?",
    "options": [
      "Curl",
      "Netstat",
      "Journalctl",
      "Ping"
    ],
    "answer": 0,
    "explanation": "Curl (Option A) is a command-line tool used to transfer data over protocols like HTTP/HTTPS, making it ideal for testing API endpoints. Netstat (Option B) shows network connections. Journalctl (Option C) views Linux logs. Ping (Option D) tests network reachability, not API payloads."
  },
  {
    "id": 369,
    "section": "S26",
    "question": "An organization automates the process of generating helpdesk tickets when a user emails support. If a ticket remains unresolved for 4 hours, the system automatically notifies the shift supervisor. What specific process is being executed when the supervisor is notified?",
    "options": [
      "Automated Ticket Escalation",
      "Ticket Creation",
      "Incident Eradication",
      "Continuous Delivery"
    ],
    "answer": 0,
    "explanation": "Automated Ticket Escalation (Option A) ensures that complex or high-priority tickets are addressed by appropriate personnel if predefined criteria (like a 4-hour SLA breach) are met. Ticket creation (Option B) happens initially. Incident eradication (Option C) removes malware. Continuous delivery (Option D) is software deployment."
  },
  {
    "id": 370,
    "section": "S26",
    "question": "A company's HR system is integrated with Active Directory. When a new employee is hired, the system automatically creates their email account, assigns them to the correct distribution lists, and grants them access to the corporate intranet based on their department. What process is this?",
    "options": [
      "User Provisioning",
      "Resource Provisioning",
      "Guardrails",
      "Threat Hunting"
    ],
    "answer": 0,
    "explanation": "User Provisioning (Option A) is the automated creation and management of digital user accounts and access rights during onboarding. Resource Provisioning (Option B) would be assigning them physical laptops or software licenses. Guardrails (Option C) enforce security settings. Threat hunting (Option D) finds attackers."
  },
  {
    "id": 371,
    "section": "S26",
    "question": "A security operations center uses an automated script that performs 90% of the steps required to respond to a malware infection. However, the script pauses and waits for a senior analyst to click 'Approve' before wiping the affected hard drive. What is this script an example of?",
    "options": [
      "Runbook",
      "Playbook",
      "Vulnerability Scan",
      "Service Access Management"
    ],
    "answer": 0,
    "explanation": "A Runbook (Option A) is an automated playbook that leaves clearly defined interaction points for human judgment or approval. A Playbook (Option B) is just the written checklist of steps. A Vulnerability Scan (Option C) finds flaws. Service Access Management (Option D) manages who can use which services."
  },
  {
    "id": 372,
    "section": "S26",
    "question": "What is a key organizational benefit of implementing security automation and orchestration?",
    "options": [
      "It acts as a workforce multiplier, allowing a small team to manage complex environments efficiently",
      "It completely eliminates the need for human security analysts",
      "It guarantees that an organization will never experience a data breach",
      "It allows the organization to bypass legal and compliance regulations"
    ],
    "answer": 0,
    "explanation": "Automation acts as a workforce multiplier (Option A), augmenting existing staff to handle higher volumes of work without expanding the team size. It does not eliminate humans entirely (Option B), cannot guarantee perfect security (Option C), and does not bypass regulations (Option D)."
  },
  {
    "id": 373,
    "section": "S26",
    "question": "In a cloud environment, automation is used to assign virtual firewall rules to new web server instances as soon as they are spun up, controlling exactly what traffic can enter or leave. What are these virtual firewalls commonly called?",
    "options": [
      "Security Groups",
      "Runbooks",
      "Guardrails",
      "Syslogs"
    ],
    "answer": 0,
    "explanation": "Security Groups (Option A) are virtual firewall rule sets applied to cloud instances to manage permitted incoming and outgoing traffic. Runbooks (Option B) are automated procedures. Guardrails (Option C) prevent misconfigurations. Syslogs (Option D) are log files."
  },
  {
    "id": 374,
    "section": "S26",
    "question": "An organization considers automating the process of migrating legacy user accounts. The task takes 30 minutes to do manually and will only need to be performed once every five years. Based on the principles of when to automate, what is the best decision?",
    "options": [
      "Do not automate it, because the upfront cost of automation outweighs the long-term time savings for a rarely performed task",
      "Automate it, because all manual tasks in an IT environment must be automated regardless of frequency",
      "Orchestrate it, because it is a complex task requiring multiple systems",
      "Outsource the task to a third-party SOC"
    ],
    "answer": 0,
    "explanation": "You should not automate a rarely performed, one-off task if the cost and time to build the automation exceed the time saved (Option A). Not everything must be automated (Option B). Orchestration (Option C) is also a waste of resources for this. Outsourcing (Option D) doesn't solve the core automation decision."
  },
  {
    "id": 375,
    "section": "S26",
    "question": "A software team configures their pipeline so that every code change that passes all automated tests is instantly pushed to the live customer-facing environment without any human approval. What methodology is this?",
    "options": [
      "Continuous Deployment",
      "Continuous Delivery",
      "Continuous Integration",
      "Waterfall Development"
    ],
    "answer": 0,
    "explanation": "Continuous Deployment (Option A) automates the entire process, including the final push to production without human intervention. Continuous Delivery (Option B) requires a manual push to production. Continuous Integration (Option C) handles code merging and testing. Waterfall (Option D) is a legacy, slow, manual process."
  },
  {
    "id": 376,
    "section": "S27",
    "question": "A security analyst notices that a junior employee, who earns a modest salary, has recently started driving a luxury sports car and taking expensive international vacations. While there may be a legitimate explanation, what insider threat indicator does this represent?",
    "options": [
      "Lifestyle Incongruence",
      "Emotional Distress",
      "Risky Behavior",
      "Social Engineering"
    ],
    "answer": 0,
    "explanation": "Lifestyle Incongruence (Option A) occurs when an employee's spending habits or assets do not match their known legitimate income, potentially indicating illicit activity like selling corporate secrets. Emotional Distress (Option B) involves psychological turmoil. Risky behavior (Option C) might involve working intoxicated. Social Engineering (Option D) is an external attack method."
  },
  {
    "id": 377,
    "section": "S27",
    "question": "A user employs the same password for their corporate email, their personal banking app, and an online shopping site. If the shopping site is compromised, what specific type of attack will hackers likely use to breach the corporate email?",
    "options": [
      "Credential Replay",
      "Brute Force",
      "Dictionary Attack",
      "Rainbow Table"
    ],
    "answer": 0,
    "explanation": "Because of password reuse, attackers will use Credential Replay (Option A) (or credential stuffing), taking the stolen username/password pair from one site and trying it on others. Brute force (Option B), dictionary attacks (Option C), and rainbow tables (Option D) are password guessing/cracking methods, not reusing already known credentials."
  },
  {
    "id": 378,
    "section": "S27",
    "question": "An organization requires employees to use a tool that securely generates, stores, and autofills unique, complex passwords for all their work-related accounts, protected by a single master password. What tool is this?",
    "options": [
      "Password Manager",
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication (MFA)",
      "Virtual Private Network (VPN)"
    ],
    "answer": 0,
    "explanation": "A Password Manager (Option A) securely stores unique passwords in a vault unlocked by a master password. SSO (Option B) uses one central authentication server, not a stored vault of many passwords. MFA (Option C) requires multiple proofs of identity. A VPN (Option D) encrypts network traffic."
  },
  {
    "id": 379,
    "section": "S27",
    "question": "An attacker follows an employee closely through a secure door that requires a badge swipe, gaining entry to the building without scanning their own badge. What social engineering technique is this?",
    "options": [
      "Piggybacking / Tailgating",
      "Dumpster Diving",
      "Shoulder Surfing",
      "Eavesdropping"
    ],
    "answer": 0,
    "explanation": "Piggybacking or Tailgating (Option A) is the physical act of following an authorized person into a restricted area. Dumpster diving (Option B) is searching trash. Shoulder surfing (Option C) is looking at someone's screen. Eavesdropping (Option D) is listening to private conversations."
  },
  {
    "id": 380,
    "section": "S27",
    "question": "A company implements a rule stating that all documents containing confidential patient data must be destroyed using a cross-cut shredder before disposal. Which specific policy mandates this action?",
    "options": [
      "Data Destruction Policy",
      "Remote Work Policy",
      "Acceptable Use Policy (AUP)",
      "Bring Your Own Device (BYOD) Policy"
    ],
    "answer": 0,
    "explanation": "A Data Destruction Policy (Option A) dictates how physical and digital data must be securely destroyed based on its classification level (e.g., shredding or incinerating). Remote work, AUP, and BYOD policies (Options B, C, D) cover where work is done, how assets are used, and device ownership, respectively."
  },
  {
    "id": 381,
    "section": "S27",
    "question": "An attacker leaves several infected USB drives in a company's parking lot, hoping an employee will pick one up and plug it into a corporate workstation. What type of social engineering attack is this?",
    "options": [
      "Baiting",
      "Phishing",
      "Piggybacking",
      "Pretexting"
    ],
    "answer": 0,
    "explanation": "Baiting (Option A) relies on a victim's curiosity or greed, offering something enticing (like a 'lost' USB drive or malicious charging cable) to trick them into installing malware. Phishing (Option B) uses deceptive emails. Piggybacking (Option C) is physical entry. Pretexting (Option D) involves creating a fabricated scenario or persona."
  },
  {
    "id": 382,
    "section": "S27",
    "question": "An organization provides employees with a comprehensive booklet detailing how to set up a secure home office, tips for recognizing phishing emails, and step-by-step instructions for using the VPN. What type of document is this?",
    "options": [
      "Handbook",
      "Policy",
      "Service Level Agreement (SLA)",
      "Non-Disclosure Agreement (NDA)"
    ],
    "answer": 0,
    "explanation": "A Handbook (Option A) provides practical guidance, explanations, and 'how-to' instructions for employees. A Policy (Option B) dictates the formal, mandatory rules (the 'what'). An SLA (Option C) defines service guarantees with vendors. An NDA (Option D) is a legal confidentiality contract."
  },
  {
    "id": 383,
    "section": "S27",
    "question": "A company transitions to a fully remote workforce. To ensure that all traffic between employee laptops and the corporate network is encrypted and secure when employees use public Wi-Fi, what technology MUST be implemented?",
    "options": [
      "Virtual Private Network (VPN)",
      "Password Manager",
      "Intrusion Detection System (IDS)",
      "Data Loss Prevention (DLP)"
    ],
    "answer": 0,
    "explanation": "A VPN (Option A) creates a secure, encrypted tunnel over a public network, protecting remote workers' traffic from eavesdropping on insecure Wi-Fi. A password manager (Option B) stores credentials. An IDS (Option C) monitors for attacks. DLP (Option D) prevents data exfiltration."
  },
  {
    "id": 384,
    "section": "S27",
    "question": "An employee receives an urgent phone call from someone claiming to be the CEO, demanding that $50,000 be wired to a vendor immediately to prevent a lawsuit. The caller uses fear and time pressure to force the employee to bypass accounting procedures. What social engineering tactic is being used?",
    "options": [
      "Pretexting with Urgency",
      "Shoulder Surfing",
      "Dumpster Diving",
      "Baiting"
    ],
    "answer": 0,
    "explanation": "The attacker is Pretexting (impersonating the CEO) and applying Urgency/Fear (Option A) to pressure the victim into making a mistake. Shoulder surfing (Option B) is viewing screens. Dumpster diving (Option C) is searching trash. Baiting (Option D) offers a physical/digital lure."
  },
  {
    "id": 385,
    "section": "S27",
    "question": "An organization wants to shift its mindset so that every employee views data protection as their personal responsibility, rather than just an IT department rule. They start by securing visible commitment from the CEO and integrating security training into daily workflows. What process are they using?",
    "options": [
      "Organizational Change Management (OCM)",
      "Digital Forensics",
      "Vulnerability Management",
      "Continuous Deployment"
    ],
    "answer": 0,
    "explanation": "Organizational Change Management (OCM) (Option A) is the structured framework used to shift corporate culture, ensuring security becomes embedded in daily operations starting with leadership commitment. Forensics, Vulnerability Management, and Continuous Deployment (Options B, C, D) are technical processes, not cultural shifts."
  },
  {
    "id": 386,
    "section": "S27",
    "question": "A military contractor trains its employees not to post details about their daily commute, work schedules, or project names on social media, because adversaries could piece these minor details together to plan an attack. What protective discipline is this?",
    "options": [
      "Operational Security (OPSEC)",
      "Network Segmentation",
      "Data Classification",
      "Role-Based Access Control (RBAC)"
    ],
    "answer": 0,
    "explanation": "Operational Security (OPSEC) (Option A) is the practice of safeguarding seemingly harmless, unclassified information that could reveal an organization's routines or capabilities to an adversary. Network segmentation, data classification, and RBAC (Options B, C, D) are internal technical/administrative controls."
  },
  {
    "id": 387,
    "section": "S27",
    "question": "An employee going through a difficult divorce begins skipping required security checks and accidentally leaves confidential files exposed on a shared network drive. While the actions were unintentional, what insider threat indicator does this reflect?",
    "options": [
      "Emotional Distress",
      "Lifestyle Incongruence",
      "Malicious Intent",
      "Baiting"
    ],
    "answer": 0,
    "explanation": "Emotional Distress (Option A) can cause employees to lose focus and bypass security controls unintentionally, making it a key insider threat indicator. Lifestyle incongruence (Option B) involves unexplained wealth. Malicious intent (Option C) involves deliberate sabotage/theft. Baiting (Option D) is a social engineering attack."
  },
  {
    "id": 388,
    "section": "S27",
    "question": "To reduce the risk of remote workers introducing malware via their personal laptops, a company purchases laptops, installs monitoring software and firewalls on them, and issues them to employees for both work and limited personal use. What device deployment model is this?",
    "options": [
      "Corporate-Owned, Personally Enabled (COPE)",
      "Bring Your Own Device (BYOD)",
      "Virtual Desktop Infrastructure (VDI)",
      "Software as a Service (SaaS)"
    ],
    "answer": 0,
    "explanation": "In a COPE (Corporate-Owned, Personally Enabled) (Option A) model, the company owns and secures the hardware, but allows the employee to use it for personal tasks. BYOD (Option B) means the employee owns the device. VDI (Option C) virtualizes desktops. SaaS (Option D) is cloud software."
  },
  {
    "id": 389,
    "section": "S27",
    "question": "An attacker sits at a coffee shop next to two executives and listens carefully as they discuss the details of an unannounced corporate merger. What type of attack has occurred?",
    "options": [
      "Eavesdropping",
      "Shoulder Surfing",
      "Dumpster Diving",
      "Phishing"
    ],
    "answer": 0,
    "explanation": "Eavesdropping (Option A) is the act of secretly listening to private conversations. Shoulder surfing (Option B) involves looking at screens visually. Dumpster diving (Option C) involves physical trash. Phishing (Option D) involves deceptive emails."
  },
  {
    "id": 390,
    "section": "S27",
    "question": "An organization creates a formal system that encourages employees to report suspicious behavior anonymously, provides financial counseling, and monitors for unusual after-hours data downloads. What is this system called?",
    "options": [
      "Insider Threat Program",
      "Intrusion Prevention System (IPS)",
      "Security Information and Event Management (SIEM)",
      "Identity and Access Management (IAM)"
    ],
    "answer": 0,
    "explanation": "An Insider Threat Program (Option A) combines human elements (reporting culture, counseling) with technical monitoring (unusual downloads) to mitigate risks from internal staff. An IPS (Option B) blocks network attacks. A SIEM (Option C) aggregates logs. IAM (Option D) manages user accounts."
  }
];
