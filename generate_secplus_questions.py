import json
import os

new_questions = [
    # --- SECTION S2 (10 Questions, IDs 221-230) ---
    {
        "section": "S2",
        "question": "A system administrator grants a database analyst read-only access to the customer tables, but blocks them from modifying any records. What security principle is being enforced?",
        "options": [
            "Implicit Allow",
            "Least Privilege",
            "Separation of Duties",
            "Non-repudiation"
        ],
        "answer": 1,
        "explanation": "Least Privilege ensures that users are granted only the minimum permissions necessary to complete their job tasks. Allowing read-only access but preventing modification satisfies this principle."
    },
    {
        "section": "S2",
        "question": "An enterprise security architect designs a network utilizing physical guards at the perimeter, firewall filtering at the edge, and host-based antivirus software on all workstations. What concept does this BEST represent?",
        "options": [
            "Deperimeterization",
            "Zero Trust Architecture",
            "Defense in Depth",
            "Single Point of Failure"
        ],
        "answer": 2,
        "explanation": "Defense in Depth is the practice of layering multiple security controls (physical, technical, and administrative) so that if one control fails, others are in place to block the threat."
    },
    {
        "section": "S2",
        "question": "During a routine audit, an administrator wants to trace which employee authorized a critical configuration change on a core switch at 3:00 AM. Which element of the AAA model does this track?",
        "options": [
            "Authentication",
            "Authorization",
            "Accounting",
            "Association"
        ],
        "answer": 2,
        "explanation": "Accounting involves tracking and logging user actions to provide accountability and a detailed audit trail of who performed what action and when."
    },
    {
        "section": "S2",
        "question": "A web application requires developers to test new features using customer databases. The database team replaces customer credit card numbers with format-preserving random strings that do not map back to a vault. What is this technique called?",
        "options": [
            "Tokenization",
            "Data Masking",
            "Full Disk Encryption",
            "Hashing"
        ],
        "answer": 1,
        "explanation": "Data Masking (or obfuscation) replaces sensitive data with realistic but fake values for non-production environments like testing, without using a secure vault mapping (which would be Tokenization)."
    },
    {
        "section": "S2",
        "question": "An organization is transitioning to a Zero Trust architecture. When configuring the Policy Decision Point (PDP) and Policy Enforcement Point (PEP), which device functions as the PEP?",
        "options": [
            "The policy engine analyzing the threat telemetry",
            "The database storing the access rules",
            "The firewall or gateway that intercepts and blocks traffic",
            "The identity provider validating user credentials"
        ],
        "answer": 2,
        "explanation": "The Policy Enforcement Point (PEP) is the component (such as a firewall, gateway, or agent) that actually executes the allow/deny decision made by the Policy Decision Point (PDP)."
    },
    {
        "section": "S2",
        "question": "An administrator wants to ensure that if a power outage occurs in a facility, the electronic security locks on emergency exit doors automatically unlock to allow employees to evacuate safely. What lock configuration must be implemented?",
        "options": [
            "Fail-secure",
            "Fail-safe",
            "Biometric bypass",
            "Implicit Deny"
        ],
        "answer": 1,
        "explanation": "Fail-safe locks automatically unlock when power is lost to prioritize human life safety. Fail-secure locks remain locked during power loss to protect assets."
    },
    {
        "section": "S2",
        "question": "A security analyst runs a script that compares the cryptographic hash digests of critical operating system binaries against a known good baseline every hour. What is this control verifying?",
        "options": [
            "Confidentiality of the binaries",
            "Availability of the services",
            "Integrity of the system files",
            "Non-repudiation of updates"
        ],
        "answer": 2,
        "explanation": "Hashing is the primary mechanism for verifying Integrity. Comparing current file hashes against a known baseline immediately reveals if the files have been tampered with or modified."
    },
    {
        "section": "S2",
        "question": "A cybersecurity consultant is conducting a technical gap analysis for an organization. What is the PRIMARY output of this assessment?",
        "options": [
            "A standard operating procedure for incident response",
            "A list of physical controls to install",
            "A comparison of the current security state against a baseline/desired state",
            "A quantitative risk registry with financial estimates"
        ],
        "answer": 2,
        "explanation": "A Technical Gap Analysis evaluates the current security posture of an organization, compares it against a desired standard or baseline, and identifies the gaps that need remediation."
    },
    {
        "section": "S2",
        "question": "An IT department is tracking their remediation progress for gaps identified during a recent security audit. Which document should they use to document tasks, assign resources, and track completion milestones?",
        "options": [
            "Acceptable Use Policy (AUP)",
            "Plan of Action and Milestones (POA&M)",
            "Master Services Agreement (MSA)",
            "Key Risk Indicators (KRI)"
        ],
        "answer": 1,
        "explanation": "A Plan of Action and Milestones (POA&M) is a structured document that lists vulnerabilities/gaps, planned corrective actions, required resources, and target completion dates."
    },
    {
        "section": "S2",
        "question": "A security policy mandates that employees must complete cybersecurity awareness training annually. What category of security control is this?",
        "options": [
            "Physical control",
            "Technical control",
            "Managerial control",
            "Operational control"
        ],
        "answer": 3,
        "explanation": "Operational controls are security measures implemented and executed by people (rather than systems), such as daily operations, training, and configuration procedures."
    },

    # --- SECTION S3 (10 Questions, IDs 231-240) ---
    {
        "section": "S3",
        "question": "A military logistics network is compromised by an attacker who silently maintains access, monitors communication channels, and exfiltrates coordinates over several months without disrupting any services. What type of threat actor is this?",
        "options": [
            "Unskilled Attacker (Script Kiddie)",
            "Hacktivist group",
            "Advanced Persistent Threat (APT)",
            "Shadow IT installation"
        ],
        "answer": 2,
        "explanation": "Advanced Persistent Threats (APTs) are highly skilled, well-funded threat actors (often state-sponsored) characterized by their capability, stealth, and patience to maintain long-term access to a target."
    },
    {
        "section": "S3",
        "question": "A group defaces a commercial retail website, replacing the shopping page with a banner protesting the company's labor policies. What is the primary motivation of this threat actor?",
        "options": [
            "Financial Gain",
            "Corporate Espionage",
            "Ideological / Political",
            "Nuisance / Chaos"
        ],
        "answer": 2,
        "explanation": "Defacing websites to protest political or ideological issues is a classic indicator of hacktivism, which is driven by political, environmental, or social motivations."
    },
    {
        "section": "S3",
        "question": "A marketing employee installs an unapproved cloud-based file synchronization service on their corporate laptop to share files with external clients. What risk does this action introduce?",
        "options": [
            "Malicious Insider threat",
            "Shadow IT vulnerability",
            "Social engineering vector",
            "Physical threat access"
        ],
        "answer": 1,
        "explanation": "Shadow IT is the use of unauthorized systems, software, or hardware within an organization without approval from the IT or security department, bypassing standard controls."
    },
    {
        "section": "S3",
        "question": "An IT manager wants to reduce the organization's attack surface. Which action would BEST achieve this?",
        "options": [
            "Disable all unnecessary services, close unused ports, and restrict remote access",
            "Conduct a qualitative risk analysis on all legacy servers",
            "Deploy more physical CCTV cameras around the data center",
            "Increase the backup retention period to 10 years"
        ],
        "answer": 0,
        "explanation": "Reducing the attack surface involves minimizing the sum of all potential entry points and vulnerabilities (closing ports, disabling unused software/protocols, restricting access)."
    },
    {
        "section": "S3",
        "question": "A security analyst gathers intelligence on a threat group by analyzing publicly available social media profiles, government filings, and public forums. What intelligence source is being used?",
        "options": [
            "Closed-Source Intelligence",
            "Open-Source Intelligence (OSINT)",
            "Dark Web Analytics",
            "Proprietary Threat Feeds"
        ],
        "answer": 1,
        "explanation": "Open-Source Intelligence (OSINT) is the collection, analysis, and dissemination of information compiled from publicly available data sources."
    },
    {
        "section": "S3",
        "question": "A security team wants to ingest machine-readable threat intelligence feeds from industry partners automatically. Which standardized format and exchange protocol combination should they implement?",
        "options": [
            "JSON-LD over SAML",
            "STIX format over TAXII protocol",
            "YAML format over Syslog",
            "XML format over WPA3"
        ],
        "answer": 1,
        "explanation": "STIX (Structured Threat Information eXpression) defines the format for sharing threat intelligence, while TAXII (Trusted Automated eXchange of Intelligence Information) is the transport protocol."
    },
    {
        "section": "S3",
        "question": "A cyber intelligence report indicates that an attack against a European defense contractor was designed to leave logs pointing to a known Chinese APT group, though forensic indicators suggest it was executed by an Eastern European syndicate. What type of operation is this?",
        "options": [
            "Watering Hole attack",
            "False Flag Attack",
            "Pretexting operation",
            "Honeynet diversion"
        ],
        "answer": 1,
        "explanation": "A False Flag Attack is deliberately designed to mislead investigators and attribute the incident to a different country or threat actor group."
    },
    {
        "section": "S3",
        "question": "A security department proactively searches through process memory, endpoint events, and network connection logs to identify threat actors that have already bypassed existing perimeter firewalls. What is this activity called?",
        "options": [
            "Vulnerability Scanning",
            "Penetration Testing",
            "Threat Hunting",
            "Risk Assessment"
        ],
        "answer": 2,
        "explanation": "Threat Hunting is a proactive, analyst-led search for undetected threats or malware lurking within an organization's network that have bypassed automated security controls."
    },
    {
        "section": "S3",
        "question": "An employee inadvertently plugs a malicious USB drive into a workstation after finding it in the lobby, launching malware that exposes the local network. How should the threat actor role of this employee be classified?",
        "options": [
            "Malicious Insider",
            "Negligent Insider",
            "Script Kiddie",
            "External threat vector"
        ],
        "answer": 1,
        "explanation": "A Negligent Insider is an employee who unintentionally causes a security incident or compromises security policies due to careless behavior, lack of awareness, or bypassing guidelines."
    },
    {
        "section": "S3",
        "question": "An attacker targets a developer at an enterprise by compromising a popular online forum frequented by developers in that organization, injecting exploit scripts into the site's code. What attack vector is this?",
        "options": [
            "Spear Phishing",
            "Watering Hole Attack",
            "Supply Chain Attack",
            "Typosquatting"
        ],
        "answer": 1,
        "explanation": "A Watering Hole Attack involves compromising a third-party website known to be frequented by targets from a specific organization or industry, aiming to infect them when they visit."
    },

    # --- SECTION S4 (10 Questions, IDs 241-250) ---
    {
        "section": "S4",
        "question": "A data center manager wants to prevent tailgating and unauthorized access at the server room entrance. Which physical security control is the BEST choice?",
        "options": [
            "CCTV PTZ cameras",
            "Bollards",
            "Access Control Vestibule (Mantrap)",
            "Faraday Cages"
        ],
        "answer": 2,
        "explanation": "An Access Control Vestibule (or mantrap) uses a double-door system where the second door cannot open until the first door closes and authentication is validated, physically preventing tailgating."
    },
    {
        "section": "S4",
        "question": "A security engineer wants to prevent wireless network signals from leaking outside the physical boundaries of a secure command facility to block external eavesdropping. What should be installed?",
        "options": [
            "An Access Control Vestibule",
            "Faraday Cage shielding / materials",
            "Passive Infrared sensors",
            "Fail-safe magnetic door locks"
        ],
        "answer": 1,
        "explanation": "A Faraday Cage (or electromagnetic shielding) blocks electromagnetic fields, preventing wireless signals from leaking out of the room or external interference from entering."
    },
    {
        "section": "S4",
        "question": "A security manager is evaluating three biometric systems. System X has a CER of 0.4%, System Y has a CER of 1.5%, and System Z has a CER of 3.2%. Which system is the MOST accurate?",
        "options": [
            "System Z",
            "System Y",
            "System X",
            "They are all equally secure"
        ],
        "answer": 2,
        "explanation": "The Crossover Error Rate (CER) is the point where the False Acceptance Rate (FAR) equals the False Rejection Rate (FRR). A lower CER indicates a more accurate biometric system."
    },
    {
        "section": "S4",
        "question": "An architect is designing the physical security of a bank headquarters. They want to prevent vehicles from ramming into the front glass doors of the lobby. What physical control should they install?",
        "options": [
            "Fences",
            "Bollards",
            "Security Lighting",
            "Access Control Vestibule"
        ],
        "answer": 1,
        "explanation": "Bollards are heavy concrete or steel posts designed to control or block vehicle access and absorb vehicle impacts, protecting buildings from ramming attacks."
    },
    {
        "section": "S4",
        "question": "A facility manager wants to optimize the cooling and airflow of a large server room to prevent thermal damage to hardware. Which server rack design should they implement?",
        "options": [
            "Faraday containment configuration",
            "Hot and cold aisles layout",
            "Integrated mantrap zones",
            "Seismic dampening isolation"
        ],
        "answer": 1,
        "explanation": "Hot and cold aisles layouts separate the cold air intakes of servers from their hot exhaust flows, optimizing cooling efficiency and server reliability."
    },
    {
        "section": "S4",
        "question": "A facility manager wants a physical security control that acts as a visual deterrent to potential intruders at night while ensuring that perimeter security cameras can capture clear footage. Which control should they implement?",
        "options": [
            "PTZ dome cameras",
            "Security Lighting (Illumination)",
            "Access control vestibule",
            "Proximity sensors"
        ],
        "answer": 1,
        "explanation": "Security lighting (illumination) acts as an active deterrent by making intruders visible, and provides the light needed for security cameras to capture high-quality recordings."
    },
    {
        "section": "S4",
        "question": "A security guard monitors lobby activity. They want to replace a stationary camera with one that can be controlled remotely to follow individuals moving through the facility. What camera type should they request?",
        "options": [
            "Fixed Dome Camera",
            "Pan-Tilt-Zoom (PTZ) Camera",
            "Infrared Sensor",
            "Lidar Scanner"
        ],
        "answer": 1,
        "explanation": "A Pan-Tilt-Zoom (PTZ) camera allows security operators to remotely control the direction, angle, and zoom of the lens to follow targets."
    },
    {
        "section": "S4",
        "question": "A data center needs a fire suppression system for its main server room. Using water-based sprinklers would destroy the electronic equipment. What system is the BEST choice?",
        "options": [
            "Class A Water Sprinklers",
            "Gaseous / Clean Agent suppression system (e.g., FM-200)",
            "Dry-pipe water sprinkler system",
            "Chemical foam extinguishers"
        ],
        "answer": 1,
        "explanation": "Gaseous or clean agent suppression systems (like FM-200 or carbon dioxide) extinguish fires by removing oxygen or heat, without leaving residue or water that would destroy server electronics."
    },
    {
        "section": "S4",
        "question": "A bank vault needs a sensor that can detect if an intruder is attempting to drill through the concrete walls of the vault. Which sensor type is the BEST choice?",
        "options": [
            "Passive Infrared (PIR) sensor",
            "Seismic / Vibration sensor",
            "Photoelectric beam sensor",
            "Ultrasonic motion detector"
        ],
        "answer": 1,
        "explanation": "Seismic or vibration sensors detect low-frequency structural vibrations caused by drilling, hammering, or sawing, making them ideal for vault structural monitoring."
    },
    {
        "section": "S4",
        "question": "An attacker uses a wireless scanning tool close to an employee's pocket in a coffee shop to copy the RFID credentials of their corporate ID badge. What physical security threat is this, and how can it be prevented?",
        "options": [
            "Access badge cloning; prevented using RFID-shielding sleeves",
            "Shoulder surfing; prevented using privacy filters",
            "Door lock shimming; prevented using deadbolts",
            "Vishing vector; prevented using voice authentication"
        ],
        "answer": 0,
        "explanation": "RFID credentials can be skimmed and cloned by attackers close to the card. Keeping cards in RFID-shielding sleeves blocks electromagnetic signals and prevents cloning."
    },

    # --- SECTION S5 (10 Questions, IDs 251-260) ---
    {
        "section": "S5",
        "question": "A CEO receives a highly customized email that includes their full name, job title, and details about a recent acquisition, urging them to click a link to resolve a tax discrepancy. What type of social engineering is this?",
        "options": [
            "Vishing",
            "Whaling",
            "Spamming",
            "Tailgating"
        ],
        "answer": 1,
        "explanation": "Whaling is a specific type of spear phishing that targets high-profile executives (such as CEOs, CFOs, or government officials) with highly customized, targeted messages."
    },
    {
        "section": "S5",
        "question": "A security analyst receives a phone call from an individual claiming to be a technician from the IT support team, asking for the analyst's password to troubleshoot an account lock out. What type of attack is this?",
        "options": [
            "Phishing",
            "Vishing",
            "Pretexting",
            "Shoulder Surfing"
        ],
        "answer": 1,
        "explanation": "Vishing (Voice Phishing) is social engineering conducted over telephone calls or VoIP systems to solicit sensitive information or credentials."
    },
    {
        "section": "S5",
        "question": "An unauthorized individual swiped their badge at the door, and then held the door open for another person who claimed to have forgotten their badge. What is this security breach called?",
        "options": [
            "Tailgating",
            "Piggybacking",
            "Pretexting",
            "Shoulder Surfing"
        ],
        "answer": 1,
        "explanation": "Piggybacking occurs when an authorized person knowingly allows an unauthorized person to follow them through a checkpoint. Tailgating is when it occurs without the employee's knowledge or consent."
    },
    {
        "section": "S5",
        "question": "A user is working on a laptop at a local coffee shop. An individual at the next table is observing the user's keystrokes to learn their password. What threat does this represent, and what is the mitigation?",
        "options": [
            "Shoulder surfing; mitigated using privacy screens",
            "Tailgating; mitigated using mantraps",
            "Credential harvesting; mitigated using RFID sleeves",
            "Watering hole; mitigated using firewalls"
        ],
        "answer": 0,
        "explanation": "Shoulder surfing is visually observing a user's screen or keyboard to capture sensitive data. It is mitigated by using privacy filters (screens) that block side-angle viewing."
    },
    {
        "section": "S5",
        "question": "An attacker searches through a company's external trash bins and finds discarded papers containing customer phone numbers and server IP addresses. What is this activity called, and what is the BEST control to prevent it?",
        "options": [
            "Dumpster diving; prevented using document shredding and locked shred bins",
            "Shoulder surfing; prevented using privacy filters",
            "Watering hole; prevented using web filters",
            "Social engineering; prevented using MFA"
        ],
        "answer": 0,
        "explanation": "Dumpster diving is searching through trash to find information. It is prevented by enforcing document shredding policies and discarding files in locked shred bins."
    },
    {
        "section": "S5",
        "question": "An email arrives: 'IMMEDIATE ACTION REQUIRED: The CEO has ordered an audit of all accounts. Send your credentials in 10 minutes or face suspension.' The email exploits which motivational triggers?",
        "options": [
            "Consensus and Scarcity",
            "Authority and Urgency",
            "Likability and Social Proof",
            "Familiarity and Trust"
        ],
        "answer": 1,
        "explanation": "The email leverages 'Authority' (claiming to represent the CEO/audit) and 'Urgency' (10-minute limit and threat of suspension) to bypass the recipient's critical evaluation."
    },
    {
        "section": "S5",
        "question": "An attacker calls a customer support representative and claims, 'Everyone in the finance department has already updated their portals, you are the only one left to do it.' Which motivational trigger is being exploited?",
        "options": [
            "Authority",
            "Consensus / Social Proof",
            "Scarcity",
            "Urgency"
        ],
        "answer": 1,
        "explanation": "Consensus (or Social Proof) is a trigger that exploits the human tendency to follow the crowd or conform to what others are doing ('Everyone else has done it')."
    },
    {
        "section": "S5",
        "question": "An attacker compromises a local restaurant's online ordering menu, which is frequently used by employees of a neighboring defense contractor, to deliver malware to the employees' browsers. What type of attack is this?",
        "options": [
            "Spear Phishing",
            "Watering Hole Attack",
            "Typosquatting",
            "Vishing"
        ],
        "answer": 1,
        "explanation": "A Watering Hole Attack targets specific organizations by compromising a website that the employees frequently visit, exploiting their trust in that site."
    },
    {
        "section": "S5",
        "question": "An organization discovers that an attacker has registered the domain 'diontra1ning.com' (replacing the letter 'i' with the number '1') to host a cloned login portal. What technique is this?",
        "options": [
            "Typosquatting / URL hijacking",
            "Pretexting",
            "Spear Phishing",
            "Watering Hole"
        ],
        "answer": 0,
        "explanation": "Typosquatting (or URL hijacking) involves registering domain names that are common misspellings or visual similarities of legitimate sites to deceive users."
    },
    {
        "section": "S5",
        "question": "An attacker creates a fake login page that matches the corporate single sign-on (SSO) portal and sends a phishing email to employees directing them to sign in. What is this attack called?",
        "options": [
            "Vishing",
            "Credential Harvesting",
            "Piggybacking",
            "Shoulder Surfing"
        ],
        "answer": 1,
        "explanation": "Credential Harvesting is the collection of user login credentials (usernames and passwords), typically achieved using cloned login pages and phishing emails."
    },

    # --- SECTION S6 (10 Questions, IDs 261-270) ---
    {
        "section": "S6",
        "question": "A user's workstation screen is locked with a message stating that their files are encrypted and will be deleted in 24 hours unless a payment of 0.5 Bitcoin is made. What type of malware is this?",
        "options": [
            "Spyware",
            "Ransomware",
            "Trojan",
            "Logic Bomb"
        ],
        "answer": 1,
        "explanation": "Ransomware is malware designed to encrypt a victim's files or lock their system, demanding a ransom payment in exchange for the decryption key."
    },
    {
        "section": "S6",
        "question": "A user notices that their browser search engine has changed, and they are constantly redirected to advertisement pages. Forensic analysis reveals a process that logs all keystrokes and sends them to an external server. What malware type is this?",
        "options": [
            "Worm",
            "Spyware / Keylogger",
            "Rootkit",
            "Logic Bomb"
        ],
        "answer": 1,
        "explanation": "Spyware is designed to gather information about a user's activities (including logging keystrokes via a keylogger) without their consent and transmit it to external actors."
    },
    {
        "section": "S6",
        "question": "A system administrator who was terminated last week is suspected of planting code that deleted the production databases at 9:00 AM on Monday, which was the first business hour after their access keys were revoked. What type of malware is this?",
        "options": [
            "Rootkit",
            "Logic Bomb",
            "Trojan",
            "Worm"
        ],
        "answer": 1,
        "explanation": "A Logic Bomb is malicious code inserted into a program that lies dormant until triggered by a specific event (such as a date, time, or administrative action like user deletion)."
    },
    {
        "section": "S6",
        "question": "A user downloads a free system optimization utility from an online forum. After running it, their computer performance degrades and an unauthorized remote desktop connection is established. What malware category does this represent?",
        "options": [
            "Worm",
            "Trojan Horse",
            "Rootkit",
            "Spyware"
        ],
        "answer": 1,
        "explanation": "A Trojan Horse is malware disguised as legitimate, useful software that executes hidden malicious actions behind the scenes."
    },
    {
        "section": "S6",
        "question": "A security analyst is investigating a compromised server and notices that system utilities (like 'ls' or 'ps') have been replaced to hide specific running processes from the operating system's kernel. What type of malware is this?",
        "options": [
            "Trojan",
            "Rootkit",
            "Worm",
            "Logic Bomb"
        ],
        "answer": 1,
        "explanation": "A Rootkit is malware that modifies core operating system binaries or kernel components to hide its presence and secure privileged administrative access (root/system)."
    },
    {
        "section": "S6",
        "question": "An incident responder analyzes an active infection and finds that the malware runs entirely in the workstation's RAM, utilizing legitimate system utilities like PowerShell to execute commands. What type of malware is this?",
        "options": [
            "Boot sector virus",
            "Fileless Malware",
            "Worm",
            "Trojan"
        ],
        "answer": 1,
        "explanation": "Fileless Malware operates directly in the computer's volatile memory (RAM) and hijacks legitimate system tools (like PowerShell) to avoid writing files to the disk, escaping file-based antivirus scanners."
    },
    {
        "section": "S6",
        "question": "A network security tool detects a program that is scanning the local subnet and automatically duplicating itself to exploit vulnerabilities on adjacent systems without any user interaction. What type of malware is this?",
        "options": [
            "Virus",
            "Worm",
            "Trojan",
            "Spyware"
        ],
        "answer": 1,
        "explanation": "A Worm is self-replicating malware that spreads across networks automatically by exploiting system vulnerabilities, without requiring human interaction or file execution."
    },
    {
        "section": "S6",
        "question": "A security analyst observes thousands of compromised computers worldwide attacking a single web server simultaneously, directed by a central command server. What resource is being used?",
        "options": [
            "A honeynet",
            "A botnet",
            "Shadow IT",
            "A logic bomb"
        ],
        "answer": 1,
        "explanation": "A Botnet is a network of compromised, internet-connected devices (bots) controlled by a central Command and Control (C2) server to execute distributed attacks like DDoS."
    },
    {
        "section": "S6",
        "question": "A virus compromises a workstation by modifying the Master Boot Record (MBR) on the hard drive, ensuring it runs before the operating system loaded. What is this type of virus?",
        "options": [
            "Fileless malware",
            "Boot Sector Virus",
            "Trojan",
            "Spyware"
        ],
        "answer": 1,
        "explanation": "A Boot Sector Virus infects the system's Master Boot Record (MBR) or partition table, executing during the boot process before the OS and security software start."
    },
    {
        "section": "S6",
        "question": "Which of the following describes the PRIMARY difference between a Virus and a Worm?",
        "options": [
            "A virus requires human execution to propagate; a worm propagates automatically across networks.",
            "A virus is a technical control; a worm is an administrative control.",
            "A virus is always fileless; a worm always writes to disk.",
            "A virus targets endpoints; a worm only targets routers."
        ],
        "answer": 0,
        "explanation": "A virus requires a host file and human action (executing a program, opening a file) to run and replicate. A worm is autonomous and spreads over networks automatically without human interaction."
    },

    # --- SECTION S7 (10 Questions, IDs 271-280) ---
    {
        "section": "S7",
        "question": "An employee tries to copy a database file containing customer Social Security Numbers to an external USB drive. The transfer is blocked, and the security team receives a high-severity alert. What system intercepted the transfer?",
        "options": [
            "File Integrity Monitor (FIM)",
            "Data Loss Prevention (DLP)",
            "Full Disk Encryption (FDE)",
            "Intrusion Detection System (IDS)"
        ],
        "answer": 1,
        "explanation": "Data Loss Prevention (DLP) systems monitor, detect, and block unauthorized transfers of sensitive data (like PII) in transit, in use, or at rest."
    },
    {
        "section": "S7",
        "question": "A corporate laptop is stolen from an employee's car. The laptop has BitLocker enabled on the primary drive. What security goal is met, and what data state is protected?",
        "options": [
            "Confidentiality; Data in Transit",
            "Confidentiality; Data at Rest",
            "Integrity; Data in Use",
            "Availability; Data at Rest"
        ],
        "answer": 1,
        "explanation": "Full Disk Encryption (FDE) like BitLocker enforces Confidentiality for Data at Rest (stored on the physical drive) by rendering it unreadable if the device is stolen."
    },
    {
        "section": "S7",
        "question": "An e-commerce site replaces customer credit card numbers with random alphanumeric keys that map back to the real numbers in a highly secure database vault. What is this technique?",
        "options": [
            "Data Masking",
            "Tokenization",
            "Hashing",
            "Homomorphic Encryption"
        ],
        "answer": 1,
        "explanation": "Tokenization replaces sensitive data elements with non-sensitive equivalents (tokens) that refer back to the real data stored in a secure database vault."
    },
    {
        "section": "S7",
        "question": "A security analyst is configuring database auditing. They categorize data as: (1) active customer query records in RAM, (2) database backup files on tape, and (3) HTTPS session packets crossing the firewall. What are these data states?",
        "options": [
            "In use, at rest, in transit",
            "In transit, in use, at rest",
            "At rest, in transit, in use",
            "In use, in transit, at rest"
        ],
        "answer": 0,
        "explanation": "Data in use is in RAM/CPU cache; data at rest is stored on storage media (tapes/hard drives); data in transit is moving across a network."
    },
    {
        "section": "S7",
        "question": "A healthcare provider must comply with regulations protecting patient medical histories. What category of data does this represent, and which US law governs it?",
        "options": [
            "PII; GDPR",
            "PHI; HIPAA",
            "PCI DSS; GLBA",
            "IP; Sarbanes-Oxley"
        ],
        "answer": 1,
        "explanation": "Protected Health Information (PHI) is health status, care provision, or payment details linked to an individual, governed by the Health Insurance Portability and Accountability Act (HIPAA)."
    },
    {
        "section": "S7",
        "question": "An organization wants to restrict a sensitive PDF file so that recipients can read it but cannot copy text, print the document, or forward it to external email addresses. What technology should they implement?",
        "options": [
            "Data Loss Prevention (DLP)",
            "Digital Rights Management (DRM) / Information Rights Management (IRM)",
            "Secure Sockets Layer (SSL) encryption",
            "File Integrity Monitoring (FIM)"
        ],
        "answer": 1,
        "explanation": "Digital Rights Management (DRM) or IRM controls file usage permissions (preventing copying, printing, or forwarding) even after the file is delivered to the recipient."
    },
    {
        "section": "S7",
        "question": "A company wants to buy hard drives that automatically encrypt all written data at the controller level, requiring no software-based configuration on the host operating system. What should they request?",
        "options": [
            "RAID 5 Arrays",
            "Self-Encrypting Drives (SED)",
            "Trusted Platform Modules (TPM)",
            "Secure Enclaves"
        ],
        "answer": 1,
        "explanation": "Self-Encrypting Drives (SEDs) utilize a hardware cryptographic controller embedded in the drive to automatically encrypt all data written to the media."
    },
    {
        "section": "S7",
        "question": "An enterprise categorizes its document directories into 'Public', 'Proprietary', and 'Confidential'. What process is being executed?",
        "options": [
            "Data Sanitization",
            "Data Classification",
            "Data Minimization",
            "Data Sovereignty"
        ],
        "answer": 1,
        "explanation": "Data Classification is the process of organizing data into categories based on sensitivity levels to determine appropriate security controls."
    },
    {
        "section": "S7",
        "question": "A security policy states that the server logs must be deleted after 30 days unless a legal hold is active, ensuring that the organization does not store unnecessary data. What principle does this support?",
        "options": [
            "Data Sovereignty",
            "Data Minimization",
            "Data Transference",
            "Data Integrity"
        ],
        "answer": 1,
        "explanation": "Data Minimization involves collecting and retaining only the minimum data necessary for business operations, reducing the blast radius of a breach."
    },
    {
        "section": "S7",
        "question": "A security technician is preparing old servers for disposal. They want to ensure that no data can be recovered from the drives, but they want to reuse the hard drives in a test lab. Which sanitization method should they use?",
        "options": [
            "Physical Shredding",
            "Degaussing",
            "Data Wiping / Purging",
            "Sanitization Certification"
        ],
        "answer": 2,
        "explanation": "Data Wiping (Purging/Overwriting) uses software to overwrite sectors with random patterns, sanitizing the drive while leaving the hardware functional. Shredding destroys the drive; degaussing demagnetizes it, rendering it unusable."
    },

    # --- SECTION S8 (10 Questions, IDs 281-290) ---
    {
        "section": "S8",
        "question": "A backup server needs to encrypt 10 Terabytes of database files every night. The administrator wants the fastest possible encryption speed and low CPU utilization. What encryption type is the BEST choice?",
        "options": [
            "Asymmetric Encryption (RSA)",
            "Symmetric Encryption (AES)",
            "Diffie-Hellman Key Exchange",
            "Hashing (SHA-512)"
        ],
        "answer": 1,
        "explanation": "Symmetric encryption (such as AES) is 100 to 1,000 times faster than asymmetric encryption and requires significantly less computational power, making it ideal for bulk data encryption."
    },
    {
        "section": "S8",
        "question": "A client browser wants to establish a secure HTTPS connection with a web server. The browser uses asymmetric encryption to send a key, and then both parties use symmetric encryption for bulk traffic. What is this approach called?",
        "options": [
            "Symmetric streaming",
            "Hybrid Encryption",
            "Hash-Message Authentication",
            "Key stretches"
        ],
        "answer": 1,
        "explanation": "Hybrid encryption combines the key-distribution benefits of asymmetric cryptography (to share a session key) with the speed of symmetric cryptography (to encrypt bulk data)."
    },
    {
        "section": "S8",
        "question": "A smart watch developer is selecting a cryptographic algorithm to secure data-at-rest. The device has very limited battery capacity and processing power. What asymmetric algorithm provides the best security per key bit?",
        "options": [
            "RSA",
            "Elliptic Curve Cryptography (ECC)",
            "Diffie-Hellman",
            "AES-GCM"
        ],
        "answer": 1,
        "explanation": "Elliptic Curve Cryptography (ECC) offers equivalent cryptographic strength to RSA but with much smaller key sizes (e.g., 256-bit ECC ≈ 3072-bit RSA), saving CPU and battery power."
    },
    {
        "section": "S8",
        "question": "Two systems need to establish a shared secret key over an unsecure network connection without transmitting the key itself. Which cryptographic algorithm should they use?",
        "options": [
            "RSA",
            "Diffie-Hellman (DH)",
            "AES",
            "MD5"
        ],
        "answer": 1,
        "explanation": "The Diffie-Hellman (DH) algorithm is specifically designed for secure key exchange, allowing two parties to establish a shared secret key over an insecure channel."
    },
    {
        "section": "S8",
        "question": "An administrator discovers that a legacy hashing algorithm has allowed two different input files to generate the same hash digest. What is this vulnerability called, and which algorithm is vulnerable?",
        "options": [
            "Pass-the-Hash; SHA-256",
            "Collision; MD5",
            "Downgrade; AES",
            "Rainbow; RIPEMD"
        ],
        "answer": 1,
        "explanation": "A collision occurs when two different inputs produce the same hash digest. MD5 is highly vulnerable to collision attacks and is obsolete for security purposes."
    },
    {
        "section": "S8",
        "question": "A security administrator is storing user passwords in a database. They want to prevent attackers from using precomputed hashes (Rainbow Tables) to crack the passwords. What technique should they use?",
        "options": [
            "Symmetric AES encryption",
            "Salting the passwords before hashing",
            "Digital Signatures",
            "Key Escrow"
        ],
        "answer": 1,
        "explanation": "Salting adds a random value to the plaintext password before hashing. This makes each hash unique (even if passwords are the same) and completely defeats precomputed Rainbow Tables."
    },
    {
        "section": "S8",
        "question": "A company hosts several services under subdomains: `mail.dion.com`, `vpn.dion.com`, and `portal.dion.com`. They want to secure all of them using a single digital certificate. What certificate type should they request?",
        "options": [
            "Standard X.509 Certificate",
            "Wildcard Certificate (*.dion.com)",
            "Subject Alternative Name (SAN) Certificate",
            "Self-signed Certificate"
        ],
        "answer": 1,
        "explanation": "A Wildcard Certificate secures a domain and an unlimited number of its first-level subdomains using a single wildcard character (*.domain.com)."
    },
    {
        "section": "S8",
        "question": "A security analyst is configuring a web server and wants to eliminate the latency caused when client browsers query the Certificate Authority's revocation list (CRL) during the TLS handshake. What should they enable?",
        "options": [
            "OCSP Stapling",
            "Public Key Pinning",
            "Key Escrow recovery",
            "Root CA hierarchy"
        ],
        "answer": 0,
        "explanation": "OCSP Stapling allows the web server to periodically query the CA and 'staple' a time-stamped OCSP revocation status response to the TLS handshake, saving the client from making a separate query."
    },
    {
        "section": "S8",
        "question": "An attacker intercepts a client's TLS handshake and forces the negotiation down to SSL 3.0, allowing them to exploit known vulnerabilities in the older protocol. What is this attack?",
        "options": [
            "Collision Attack",
            "Downgrade Attack",
            "Replay Attack",
            "Birthday Attack"
        ],
        "answer": 1,
        "explanation": "A Downgrade Attack forces a connection to fall back to an older, weaker, or deprecated protocol version to exploit known flaws in that older version."
    },
    {
        "section": "S8",
        "question": "A logistics firm wants to implement an immutable transaction ledger to trace items across multiple independent suppliers without relying on a central authority. What technology fits this requirement?",
        "options": [
            "Centralized database",
            "Blockchain / Distributed Ledger Technology",
            "Public Key Infrastructure (PKI)",
            "Key Management System (KMS)"
        ],
        "answer": 1,
        "explanation": "Blockchain uses a decentralized, peer-to-peer ledger network where transactions are cryptographically linked and immutable, eliminating the need for a central clearinghouse."
    },

    # --- SECTION S9 (10 Questions, IDs 291-300) ---
    {
        "section": "S9",
        "question": "A company has an asset valued at $100,000. An earthquake is estimated to cause a 30% loss of the asset once every 10 years. What is the ALE for this risk?",
        "options": [
            "$3,000",
            "$30,000",
            "$10,000",
            "$333"
        ],
        "answer": 0,
        "explanation": "SLE = Asset Value ($100,000) * EF (0.3) = $30,000. ARO = 1 / 10 years = 0.1. ALE = SLE ($30,000) * ARO (0.1) = $3,000 per year."
    },
    {
        "section": "S9",
        "question": "An organization determines that the financial risk of a potential data breach is too high to absorb. They purchase a cybersecurity insurance policy from a third-party broker. What risk strategy is this?",
        "options": [
            "Avoidance",
            "Transference",
            "Mitigation",
            "Acceptance"
        ],
        "answer": 1,
        "explanation": "Risk Transference (or sharing) shifts the financial consequences of a risk to a third party (such as an insurance company or outsourcer) without necessarily eliminating the threat itself."
    },
    {
        "section": "S9",
        "question": "A company discovers that a legacy operating system contains critical zero-day vulnerabilities. Because the vendor has stopped issuing updates, the company decides to shut down and retire the system entirely. What risk response is this?",
        "options": [
            "Transference",
            "Mitigation",
            "Avoidance",
            "Acceptance"
        ],
        "answer": 2,
        "explanation": "Risk Avoidance is the strategy of eliminating a risk by discontinuing the activity, service, or system that introduces the risk."
    },
    {
        "section": "S9",
        "question": "A security audit finds a minor compliance issue on a non-critical server. The cost of fixing it ($5,000) is greater than the maximum potential fine ($500). The CISO signs a documented exception acknowledging the risk without implementing controls. What is this?",
        "options": [
            "Risk Avoidance",
            "Risk Transference",
            "Risk Acceptance",
            "Risk Mitigation"
        ],
        "answer": 2,
        "explanation": "Risk Acceptance is the strategy of identifying a risk and deliberately taking no corrective action, typically chosen when the cost of mitigation outweighs the potential loss."
    },
    {
        "section": "S9",
        "question": "A security analyst is conducting a risk assessment. They rate risks on a scale of 'Low', 'Medium', and 'High' based on surveys and discussions with system owners. What type of risk analysis is this?",
        "options": [
            "Quantitative Risk Analysis",
            "Qualitative Risk Analysis",
            "Gap Analysis",
            "Business Impact Analysis"
        ],
        "answer": 1,
        "explanation": "Qualitative risk analysis uses descriptive, categorical scales (such as Low, Medium, High) and expert opinion to prioritize risks rather than numerical, financial calculations."
    },
    {
        "section": "S9",
        "question": "During a BIA workshop, the database team states that the ERP system cannot lose more than 2 hours of transaction data without causing severe financial damage. What metric is being defined?",
        "options": [
            "Recovery Time Objective (RTO)",
            "Recovery Point Objective (RPO)",
            "Mean Time to Repair (MTTR)",
            "Mean Time Between Failures (MTBF)"
        ],
        "answer": 1,
        "explanation": "Recovery Point Objective (RPO) is the maximum acceptable amount of data loss measured in time (i.e. the age of files that must be recovered from backup)."
    },
    {
        "section": "S9",
        "question": "An industrial machine fails 4 times over a year, and it takes an average of 3 hours for the maintenance team to restore it to service. How should these metrics be labeled?",
        "options": [
            "MTBF = 90 days; MTTR = 3 hours",
            "MTTR = 90 days; MTBF = 3 hours",
            "RTO = 3 hours; RPO = 90 days",
            "MTBF = 4; MTTR = 3"
        ],
        "answer": 0,
        "explanation": "MTBF is the average time between system failures (365 days / 4 failures = ~91.25 days). MTTR is the average time required to repair a failed system (3 hours)."
    },
    {
        "section": "S9",
        "question": "A financial firm monitors the daily count of failed database logins. A spike in this metric serves as an early warning sign of a potential brute-force attack. What is this metric?",
        "options": [
            "Plan of Action and Milestones (POA&M)",
            "Key Risk Indicator (KRI)",
            "Single Loss Expectancy (SLE)",
            "Annualized Rate of Occurrence (ARO)"
        ],
        "answer": 1,
        "explanation": "Key Risk Indicators (KRIs) are forward-looking metrics used to monitor risk exposure changes and provide early warning signals before a risk escalates into an incident."
    },
    {
        "section": "S9",
        "question": "A company policy states that the board is willing to accept up to $50,000 in operational losses annually from new ventures, but must halt operations if losses reach $100,000. What are these thresholds?",
        "options": [
            "Risk Appetite is $50,000; Risk Tolerance is $100,000",
            "Risk Tolerance is $50,000; Risk Appetite is $100,000",
            "Risk Mitigation is $50,000; Risk Avoidance is $100,000",
            "ALE is $50,000; SLE is $100,000"
        ],
        "answer": 0,
        "explanation": "Risk Appetite is the broad amount of risk an organization is willing to pursue ($50,000). Risk Tolerance is the maximum acceptable risk level before action is required ($100,000)."
    },
    {
        "section": "S9",
        "question": "An administrator applies security updates to a firewall. However, because new exploits are developed, the firewall's protection becomes less effective over time. What type of risk is being monitored?",
        "options": [
            "Inherent Risk",
            "Residual Risk",
            "Control Risk",
            "Quantitative Risk"
        ],
        "answer": 2,
        "explanation": "Control Risk is the risk that a security control will fail to prevent, detect, or mitigate a threat, often because the control degrades or becomes less effective over time."
    },

    # --- SECTION S10 (10 Questions, IDs 301-310) ---
    {
        "section": "S10",
        "question": "An attacker compromises a third-party software library used by an application, allowing them to execute code on thousands of client systems that update the application. What type of attack is this?",
        "options": [
            "Spear Phishing",
            "Supply Chain Attack",
            "Watering Hole Attack",
            "Man-in-the-Middle"
        ],
        "answer": 1,
        "explanation": "A Supply Chain Attack compromises a weaker upstream component (such as software libraries, updates, or third-party contractors) to target down-stream customers."
    },
    {
        "section": "S10",
        "question": "An organization wants to evaluate the security controls of a potential cloud service provider. Which document should they request to review the provider's independent audit report on security, availability, and confidentiality?",
        "options": [
            "Service Level Agreement (SLA)",
            "SOC 2 Type II Report",
            "Master Services Agreement (MSA)",
            "Non-Disclosure Agreement (NDA)"
        ],
        "answer": 1,
        "explanation": "A SOC 2 Type II report is an independent audit evaluating a service organization's controls over security, availability, processing integrity, confidentiality, and privacy over a period of time."
    },
    {
        "section": "S10",
        "question": "A legal team is drafting a contract that establishes the general terms, payment conditions, and overall framework for all future projects with a specific consulting firm. What document is this?",
        "options": [
            "Service Level Agreement (SLA)",
            "Master Services Agreement (MSA)",
            "Request for Proposal (RFP)",
            "Non-Disclosure Agreement (NDA)"
        ],
        "answer": 1,
        "explanation": "A Master Services Agreement (MSA) is a contract that defines the governing framework, terms, and conditions for all ongoing and future transactions between two parties."
    },
    {
        "section": "S10",
        "question": "An enterprise contracts a web host. The agreement states that the host must maintain 99.99% uptime for the website, and must pay financial penalties if downtime exceeds 4.3 minutes per month. What document is this?",
        "options": [
            "Master Services Agreement (MSA)",
            "Service Level Agreement (SLA)",
            "Request for Quote (RFQ)",
            "Statement of Work (SOW)"
        ],
        "answer": 1,
        "explanation": "A Service Level Agreement (SLA) is a contract component that defines specific, measurable performance metrics (like uptime/response time) and penalties for service failures."
    },
    {
        "section": "S10",
        "question": "An organization allows a marketing vendor to access their cloud environment. The vendor accidentally leaves their API key in a public code repository, exposing the company's databases. What vendor risk does this represent?",
        "options": [
            "Supply chain physical risk",
            "Third-party integration and credential risk",
            "Non-disclosure violation",
            "Onboarding verification failure"
        ],
        "answer": 1,
        "explanation": "Third-party integration risk occurs when external entities are granted system access, making the organization vulnerable to the vendor's credential handling and key management practices."
    },
    {
        "section": "S10",
        "question": "A company is sharing proprietary source code with a third-party developer for review. Which legal document must be signed to prevent the developer from sharing this information with competitors?",
        "options": [
            "Service Level Agreement (SLA)",
            "Non-Disclosure Agreement (NDA)",
            "Master Services Agreement (MSA)",
            "Request for Quote (RFQ)"
        ],
        "answer": 1,
        "explanation": "A Non-Disclosure Agreement (NDA) is a legally binding contract that prevents parties from sharing confidential information, trade secrets, or proprietary data."
    },
    {
        "section": "S10",
        "question": "Which of the following processes should a security manager enforce FIRST during vendor onboarding to assess risk?",
        "options": [
            "Perform a security assessment of the vendor's network controls",
            "Revoke the vendor's admin credentials",
            "Decommission the vendor's backup systems",
            "Purchase cybersecurity insurance for the vendor"
        ],
        "answer": 0,
        "explanation": "During vendor onboarding, conducting a vendor assessment (security questionnaire, control review, SOC audit) is the FIRST step to evaluate the risk of the partnership."
    },
    {
        "section": "S10",
        "question": "A consulting contract is terminated. Which step is the MOST critical to execute during the vendor offboarding process?",
        "options": [
            "Archive the vendor's marketing brochures",
            "Revoke all physical access badges and digital accounts assigned to the vendor",
            "Update the SLA performance metrics",
            "Update the vendor's profile in the CMDB"
        ],
        "answer": 1,
        "explanation": "To prevent unauthorized persistent access and backdoors, revoking all accounts, credentials, and physical access badges is the most critical step in vendor offboarding."
    },
    {
        "section": "S10",
        "question": "A motherboard manufacturer puts tamper-evident stickers and unique serial barcodes on all component packaging to ensure items are not altered in transit. What is this protecting?",
        "options": [
            "Software bill of materials (SBOM)",
            "Hardware supply chain integrity",
            "Virtualization escape",
            "Data sovereignty"
        ],
        "answer": 1,
        "explanation": "Hardware supply chain integrity controls protect physical items from modification, counterfeiting, or interception during shipping and distribution."
    },
    {
        "section": "S10",
        "question": "An organization wants to catalog all software dependencies, libraries, and open-source packages integrated into their core application to check for vulnerabilities. What should they produce?",
        "options": [
            "Master Services Agreement (MSA)",
            "Software Bill of Materials (SBOM)",
            "Service Level Agreement (SLA)",
            "Risk Register"
        ],
        "answer": 1,
        "explanation": "A Software Bill of Materials (SBOM) is a comprehensive nested inventory of all software components, libraries, and dependencies used to build an application."
    },

    # --- SECTION S11 (10 Questions, IDs 311-320) ---
    {
        "section": "S11",
        "question": "A European regulator fines an international firm 4% of their global annual revenue for failing to protect customer data privacy. What type of compliance penalty is this?",
        "options": [
            "Contractual penalty",
            "Regulatory / Legal fine under GDPR",
            "SLA violation penalty",
            "Operational control audit"
        ],
        "answer": 1,
        "explanation": "GDPR (General Data Protection Regulation) is a regulatory framework in the EU that imposes severe financial penalties (up to 4% of global turnover) for data protection non-compliance."
    },
    {
        "section": "S11",
        "question": "A retail merchant must implement firewall security and encrypt cardholder data during transmission to comply with credit card industry rules. What standard must they follow?",
        "options": [
            "ISO 27001",
            "PCI DSS",
            "HIPAA",
            "GDPR"
        ],
        "answer": 1,
        "explanation": "PCI DSS (Payment Card Industry Data Security Standard) is a mandatory security standard for any organization that stores, processes, or transmits credit card data."
    },
    {
        "section": "S11",
        "question": "A security officer is drafting two documents: one defines the high-level security objectives of the company (the 'why'), and the other defines step-by-step technical instructions for firewalls (the 'how'). How are these classified?",
        "options": [
            "Policy; Procedure",
            "Standard; Policy",
            "Procedure; Standard",
            "Guideline; Policy"
        ],
        "answer": 0,
        "explanation": "A Policy defines the high-level security goals and commitments (the 'what' and 'why'). A Procedure provides step-by-step tactical instructions (the 'how') to execute it."
    },
    {
        "section": "S11",
        "question": "An employee uses a corporate computer to download copyrighted music files, violating the policy defining acceptable use of company assets. What document was violated?",
        "options": [
            "Non-Disclosure Agreement (NDA)",
            "Acceptable Use Policy (AUP)",
            "Statement of Work (SOW)",
            "Master Services Agreement (MSA)"
        ],
        "answer": 1,
        "explanation": "An Acceptable Use Policy (AUP) defines the rules, behavior, and constraints that employees must follow when using corporate networks, hardware, and assets."
    },
    {
        "section": "S11",
        "question": "To prevent fraud, a bank mandates that the employee who creates a new vendor account cannot be the same employee who approves payments to that account. What security principle is this?",
        "options": [
            "Least Privilege",
            "Separation of Duties",
            "Implicit Deny",
            "Job Rotation"
        ],
        "answer": 1,
        "explanation": "Separation of Duties splits a critical process into multiple steps executed by different people to prevent collusion, fraud, or single-user compromise."
    },
    {
        "section": "S11",
        "question": "A company requires all accounting employees to take a consecutive five-day leave every year, during which another employee assumes their responsibilities. What is the PRIMARY security objective of this policy?",
        "options": [
            "Increase employee satisfaction",
            "Detect and uncover fraudulent activities or accounting discrepancies",
            "Reduce licensing costs",
            "Enforce least privilege"
        ],
        "answer": 1,
        "explanation": "Mandatory Vacations are designed to detect internal fraud, as unauthorized transactions or discrepancies are likely to be uncovered when another employee takes over their duties."
    },
    {
        "section": "S11",
        "question": "A security analyst is rotated from network monitoring to firewall configuration for six months, while a colleague moves to audit logs. What is the PRIMARY benefit of this practice?",
        "options": [
            "Decreases employee training costs",
            "Reduces single points of failure and prevents collusion / fraud",
            "Eliminates the need for MFA",
            "Reduces the attack surface of firewalls"
        ],
        "answer": 1,
        "explanation": "Job Rotation increases redundancy (cross-training employees to eliminate single points of failure) and acts as an administrative control to detect collusion or fraud."
    },
    {
        "section": "S11",
        "question": "A security incident occurs. The responder opens a document that outlines the pre-planned, step-by-step playbook to block a specific malware variant. What type of document is this?",
        "options": [
            "Policy",
            "Procedure / Playbook",
            "Standard",
            "Guideline"
        ],
        "answer": 1,
        "explanation": "A playbook or incident response procedure is a checklist of tactical, step-by-step actions designed to handle a specific security scenario consistently and rapidly."
    },
    {
        "section": "S11",
        "question": "A security analyst is preparing a summary report on recent compliance gaps. Which document contains the prioritized list of tasks, assigned risk owners, and target completion dates?",
        "options": [
            "Risk Register",
            "Plan of Action and Milestones (POA&M)",
            "Acceptable Use Policy (AUP)",
            "Standard Operating Procedure (SOP)"
        ],
        "answer": 1,
        "explanation": "The POA&M (Plan of Action and Milestones) tracks the remediation of identified security gaps and compliance issues, defining tasks, risk owners, and deadlines."
    },
    {
        "section": "S11",
        "question": "An external audit team reviews the company's firewall policies and identifies several outdated rules. The company registers these findings to track the remediation process. What is this phase called?",
        "options": [
            "Audit planning",
            "Audit remediation and tracking",
            "Risk acceptance",
            "Vulnerability scanning"
        ],
        "answer": 1,
        "explanation": "Audit remediation and tracking is the post-audit phase where organizations implement changes to fix identified audit findings and track progress."
    },

    # --- SECTION S12 (10 Questions, IDs 321-330) ---
    {
        "section": "S12",
        "question": "A security engineer is updating the configuration item (CI) records in a central database to track server software versions and hardware connections. What database is this?",
        "options": [
            "Risk Register",
            "Configuration Management Database (CMDB)",
            "POA&M",
            "Software Bill of Materials (SBOM)"
        ],
        "answer": 1,
        "explanation": "A Configuration Management Database (CMDB) stores configuration records for all hardware and software assets (Configuration Items) and defines their relationships."
    },
    {
        "section": "S12",
        "question": "A network engineer wants to modify a core switch configuration. Which group must review the proposed change, evaluate its technical impact, and authorize the execution?",
        "options": [
            "Risk Management Committee",
            "Change Advisory Board (CAB)",
            "Audit Committee",
            "Red Team"
        ],
        "answer": 1,
        "explanation": "The Change Advisory Board (CAB) is the committee responsible for evaluating, prioritizing, scheduling, and approving or rejecting proposed changes to minimize risk."
    },
    {
        "section": "S12",
        "question": "A change is executed on a web server. However, users immediately report database connection errors. The administrator executes a pre-planned script to restore the server back to its original state. What is this plan called?",
        "options": [
            "Request for Change",
            "Backout Plan / Rollback Plan",
            "Post-change verification",
            "Sanitization Plan"
        ],
        "answer": 1,
        "explanation": "A Backout (or Rollback) Plan is a detailed set of instructions that describes how to undo a change and restore systems to their original state if a change fails."
    },
    {
        "section": "S12",
        "question": "An enterprise provides employees with corporate-owned smartphones. Employees are permitted to use the phones for personal calls, but the company retains full management control via MDM. What deployment model is this?",
        "options": [
            "BYOD",
            "COPE (Corporate Owned, Personally Enabled)",
            "CYOD",
            "COBO"
        ],
        "answer": 1,
        "explanation": "COPE (Corporate Owned, Personally Enabled) is a model where the organization purchases and owns the device, but allows the employee to use it for personal tasks."
    },
    {
        "section": "S12",
        "question": "An organization is disposing of 50 decommissioned hard drives. They receive a document from a third-party contractor confirming that all data was overwritten and verified under cryptographic standards. What is this document?",
        "options": [
            "Non-Disclosure Agreement (NDA)",
            "Sanitization Certificate / Certificate of Destruction",
            "Service Level Agreement (SLA)",
            "Software Bill of Materials (SBOM)"
        ],
        "answer": 1,
        "explanation": "A Sanitization Certificate (or Certificate of Destruction) is a formal document proving that data or storage media has been securely wiped or destroyed, providing audit trails."
    },
    {
        "section": "S12",
        "question": "A security policy mandates that customer transaction histories must be stored for exactly 7 years to meet tax laws, and then securely shredded. What policy is this?",
        "options": [
            "Acceptable Use Policy",
            "Data Retention Policy",
            "SLA Agreement",
            "Sanitization Certificate"
        ],
        "answer": 1,
        "explanation": "A Data Retention Policy defines how long different data types must be retained for business or compliance reasons, and specifies disposal requirements."
    },
    {
        "section": "S12",
        "question": "An administrator wants to remotely wipe a lost company smartphone to prevent data exposure. Which platform allows the administrator to execute this command?",
        "options": [
            "Software Bill of Materials (SBOM)",
            "Mobile Device Management (MDM)",
            "Configuration Management Database (CMDB)",
            "Plan of Action and Milestones (POA&M)"
        ],
        "answer": 1,
        "explanation": "Mobile Device Management (MDM) is a centralized software platform used to secure, monitor, manage, and remotely control (e.g. wipe) mobile assets."
    },
    {
        "section": "S12",
        "question": "A developer wants to revert a code modification on a production web app because it introduced a vulnerability. Which control enables them to review previous code versions and execute a clean rollback?",
        "options": [
            "Configuration Management Database (CMDB)",
            "Version Control System (e.g., Git)",
            "Software Bill of Materials (SBOM)",
            "Service Level Agreement (SLA)"
        ],
        "answer": 1,
        "explanation": "Version Control Systems (like Git) track incremental changes to code files, allowing developers to review history, audit changes, and roll back to previous stable versions."
    },
    {
        "section": "S12",
        "question": "An IT technician is auditing a storage room and scans physical barcodes attached to server racks to compare them against the asset registry. What is this audit verifying?",
        "options": [
            "Technical configurations",
            "Asset Tagging and Inventory tracking",
            "Data sanitization compliance",
            "SLA performance"
        ],
        "answer": 1,
        "explanation": "Asset Tagging involves attaching physical markers (like barcodes or RFID tags) to hardware to facilitate tracking, location audits, and inventory management."
    },
    {
        "section": "S12",
        "question": "During a change management audit, which phase is executed immediately AFTER the change is applied to confirm system stability?",
        "options": [
            "Request for Change",
            "Post-Implementation Verification / Verification Testing",
            "Backout planning",
            "CAB review"
        ],
        "answer": 1,
        "explanation": "Post-Implementation Verification involves running test procedures immediately after a change is applied to verify the systems are functional and stable."
    },

    # --- SECTION S13 (30 Questions, IDs 331-360) ---
    {
        "id": 331,
        "section": "S13",
        "question": "A financial company is preparing for an annual review by a regulatory agency to verify compliance with national financial protection laws. The firm hires an independent accounting and advisory firm to evaluate their security controls. What is this evaluation called?",
        "options": [
            "Internal Audit",
            "External Audit",
            "Vulnerability Scan",
            "Self-Assessment"
        ],
        "answer": 1,
        "explanation": "An External Audit is a systematic evaluation of security controls conducted by an independent, third-party entity to verify compliance, accuracy, and effectiveness."
    },
    {
        "id": 332,
        "section": "S13",
        "question": "A security analyst is performing a periodic review of database access permissions internally to verify that only authorized employees have access to HR files. What type of activity is this?",
        "options": [
            "External Audit",
            "Internal Assessment / Audit",
            "Penetration Test",
            "Regulatory Examination"
        ],
        "answer": 1,
        "explanation": "Internal assessments or audits are evaluations conducted by an organization's own staff to verify compliance with internal policies, standards, or controls."
    },
    {
        "id": 333,
        "section": "S13",
        "question": "An organization's board of directors wants to appoint a governing body to oversee all compliance initiatives, internal audit activities, and coordinate with external auditors. What should they establish?",
        "options": [
            "Change Advisory Board (CAB)",
            "Audit Committee",
            "Policy Enforcement Point (PEP)",
            "Risk Management Committee"
        ],
        "answer": 1,
        "explanation": "An Audit Committee is a subgroup of the board of directors responsible for overseeing the financial reporting process, internal controls, and audit activities."
    },
    {
        "id": 334,
        "section": "S13",
        "question": "A compliance team conducts a simulated questionnaire review internally to prepare for a formal HIPAA audit, assigning scorecards based on documentation findings. What is this process called?",
        "options": [
            "External Examination",
            "Self-Assessment",
            "Penetration Testing",
            "Vulnerability Scanning"
        ],
        "answer": 1,
        "explanation": "A self-assessment is an internal evaluation conducted by the organization itself to assess compliance posture, prepare for external audits, and identify gaps."
    },
    {
        "id": 335,
        "section": "S13",
        "question": "A security technician uses the Metasploit framework to simulate an active threat actor, attempting to compromise a local database and pivot to adjacent servers. What is this type of assessment?",
        "options": [
            "Vulnerability Scan",
            "Penetration Test",
            "Internal Audit",
            "Static Code Analysis"
        ],
        "answer": 1,
        "explanation": "A Penetration Test is a simulated active attack designed to exploit vulnerabilities and verify security posture by attempting to bypass controls."
    },
    {
        "id": 336,
        "section": "S13",
        "question": "During a penetration test, the tester attempts to bypass physical lobby badge gates by closely walking behind an employee who swiped their credential. What type of penetration test is this?",
        "options": [
            "Technical penetration test",
            "Physical Penetration Test",
            "Logical penetration test",
            "Administrative audit"
        ],
        "answer": 1,
        "explanation": "Physical Penetration Testing evaluates the physical security barriers and controls (locks, mantraps, gates, guards) of a facility."
    },
    {
        "id": 337,
        "section": "S13",
        "question": "A penetration testing team is hired to act as the active adversary, attempting to compromise systems using realistic hacking tactics. What team role are they playing?",
        "options": [
            "Blue Team",
            "Red Team",
            "White Team",
            "Purple Team"
        ],
        "answer": 1,
        "explanation": "The Red Team represents the active adversary in a security simulation, using offensive tactics to test defensive controls."
    },
    {
        "id": 338,
        "section": "S13",
        "question": "An internal security operations team monitors network traffic, blocks firewall alerts, and mitigates active compromises during a simulation. What team role is this?",
        "options": [
            "Red Team",
            "Blue Team",
            "White Team",
            "Purple Team"
        ],
        "answer": 1,
        "explanation": "The Blue Team is the defensive security team responsible for protecting assets, detecting threats, and executing incident response."
    },
    {
        "id": 339,
        "section": "S13",
        "question": "A consulting firm conducts a cooperative engagement where the offensive team shares exploit methods in real time with the defensive team to help them configure better detection rules. What is this approach called?",
        "options": [
            "Double-blind engagement",
            "Purple Teaming",
            "Black box pentesting",
            "External auditing"
        ],
        "answer": 1,
        "explanation": "Purple Teaming is a collaborative security model where red (offensive) and blue (defensive) teams work together to share feedback and improve overall detection capabilities."
    },
    {
        "id": 340,
        "section": "S13",
        "question": "A penetration tester searches WHOIS records, public IP registries, and DNS zone files to identify target IP ranges without sending packets to the target network. What type of reconnaissance is this?",
        "options": [
            "Active Reconnaissance",
            "Passive Reconnaissance",
            "Physical Reconnaissance",
            "Post-Exploitation analysis"
        ],
        "answer": 1,
        "explanation": "Passive Reconnaissance gathers information on a target using publicly available resources (OSINT, DNS, WHOIS) without directly interacting with the target's systems."
    },
    {
        "id": 341,
        "section": "S13",
        "question": "A pentester runs a port scanner (Nmap) directly against the target organization's external IP addresses. How should this activity be classified?",
        "options": [
            "Passive Reconnaissance",
            "Active Reconnaissance",
            "Social Engineering",
            "Physical Testing"
        ],
        "answer": 1,
        "explanation": "Active Reconnaissance involves directly interacting with the target system (e.g., port scanning, ping sweeps) to gather intelligence, which carries a higher risk of detection."
    },
    {
        "id": 342,
        "section": "S13",
        "question": "A penetration testing firm completes an engagement and provides the client's board of directors with a formal document signed by the lead assessor confirming the test was executed. What is this document?",
        "options": [
            "Non-Disclosure Agreement (NDA)",
            "Attestation of Findings / Letter of Attestation",
            "Plan of Action and Milestones (POA&M)",
            "Master Services Agreement (MSA)"
        ],
        "answer": 1,
        "explanation": "An Attestation of Findings (or Letter of Attestation) is an official document signed by assessors validating that an assessment occurred and verifying its outcomes."
    },
    {
        "id": 343,
        "section": "S13",
        "question": "An auditor wants to verify that the organization has implemented the security standards outlined in the NIST Cybersecurity Framework. What is the auditor assessing?",
        "options": [
            "Regulatory compliance",
            "Framework Compliance",
            "Contractual compliance",
            "Physical compliance"
        ],
        "answer": 1,
        "explanation": "Framework Compliance is the alignment of an organization's security practices with a structured, non-regulatory security framework or standard (like NIST CSF or ISO 27001)."
    },
    {
        "id": 344,
        "section": "S13",
        "question": "A penetration tester uses Metasploit to exploit a vulnerability on a target web server. Once completed, they want to establish a persistent command shell to continue their analysis. What is this active connection called?",
        "options": [
            "A wrapper",
            "A Session",
            "An enclave",
            "A cookie"
        ],
        "answer": 1,
        "explanation": "In Metasploit and penetration testing, a Session is an active, established communication channel between the attacker's framework and the compromised host."
    },
    {
        "id": 345,
        "section": "S13",
        "question": "Which of the following describes the primary purpose of a HIPAA compliance checklist during an external audit?",
        "options": [
            "To choose which symmetric algorithms to deploy",
            "To validate that the organization meets specific health information privacy regulations with documented evidence",
            "To run automated exploits using Metasploit",
            "To schedule vulnerability scans on a continuous basis"
        ],
        "answer": 1,
        "explanation": "Regulatory compliance checklists (like a HIPAA checklist) are used to systematically evaluate and document evidence that an organization meets specific regulatory requirements."
    },
    {
        "id": 346,
        "section": "S13",
        "question": "A penetration tester discovers a database vulnerability and executes a script to dump user records, then copies them to a local folder. What phase of the penetration test is this?",
        "options": [
            "Reconnaissance",
            "Exploitation",
            "Audit Remediation",
            "Attestation"
        ],
        "answer": 1,
        "explanation": "Exploitation involves executing code or commands against an identified vulnerability to bypass security controls and gain unauthorized access to target assets."
    },
    {
        "id": 347,
        "section": "S13",
        "question": "An auditor wants to verify that all accounting staff are following password rotation rules. They request a random sample of login event logs from the SIEM. What audit method is this?",
        "options": [
            "Active Reconnaissance",
            "Evidence Gathering / Audit Verification",
            "Penetration Testing",
            "Tabletop Exercise"
        ],
        "answer": 1,
        "explanation": "Evidence Gathering involves collecting logs, screenshots, and configuration records to verify that a security control is operating as designed."
    },
    {
        "id": 348,
        "section": "S13",
        "question": "An organization is undergoing a federal financial examination. The regulators require access to all internal risk assessments. What must the organization provide to demonstrate compliance?",
        "options": [
            "The software bill of materials (SBOM)",
            "The completed risk registers and assessment logs",
            "The Metasploit payload code",
            "The network routing tables"
        ],
        "answer": 1,
        "explanation": "Providing documented risk registers and risk assessments is standard evidence required to satisfy regulatory audit examinations."
    },
    {
        "id": 349,
        "section": "S13",
        "question": "A security operations manager wants to configure rules to detect when a penetration tester is running active Nmap scans against the subnet. What tool should they use?",
        "options": [
            "Intrusion Detection System (IDS)",
            "Software Bill of Materials (SBOM)",
            "Configuration Management Database (CMDB)",
            "Trusted Platform Module (TPM)"
        ],
        "answer": 0,
        "explanation": "An Intrusion Detection System (IDS) analyzes network traffic and matches signatures to detect scans, exploit attempts, and other anomalous behavior."
    },
    {
        "id": 350,
        "section": "S13",
        "question": "A company completes a penetration test and receives a report showing 15 critical vulnerabilities. What should the security team do NEXT?",
        "options": [
            "Sign a letter of attestation ignoring the findings",
            "Formulate a Plan of Action and Milestones (POA&M) to prioritize and remediate the findings",
            "Run an active Nmap scan against the testing firm's servers",
            "Decommission the firewall controls"
        ],
        "answer": 1,
        "explanation": "Once vulnerabilities are identified, the next step is to log them in a remediation plan (POA&M) to track tasks, resources, and deadlines for correction."
    },
    {
        "id": 351,
        "section": "S13",
        "question": "What is the key difference between a Vulnerability Assessment and a Penetration Test?",
        "options": [
            "Vulnerability assessments only identify potential weaknesses; penetration tests actively exploit those weaknesses to confirm impact.",
            "Vulnerability assessments are done by the Red Team; penetration tests are done by the Blue Team.",
            "Vulnerability assessments are qualitative; penetration tests are quantitative.",
            "Vulnerability assessments require a physical site visit; penetration tests are always remote."
        ],
        "answer": 0,
        "explanation": "A vulnerability assessment scans and lists potential vulnerabilities, whereas a penetration test goes a step further by actively attempting to exploit them to verify their existence and severity."
    },
    {
        "id": 352,
        "section": "S13",
        "question": "A pentester wants to extract hash credentials from memory on a compromised Windows workstation. Which tool is commonly used for post-exploitation credential extraction?",
        "options": [
            "Nmap",
            "Mimikatz",
            "Wireshark",
            "BitLocker"
        ],
        "answer": 1,
        "explanation": "Mimikatz is a popular post-exploitation tool used to extract plain-text passwords, hashes, PINs, and Kerberos tickets from the memory of a Windows system."
    },
    {
        "id": 353,
        "section": "S13",
        "question": "A security operations team uses a honeypot to attract and study hackers. What category of control does this represent?",
        "options": [
            "Technical, preventative control",
            "Technical, detective control",
            "Managerial, corrective control",
            "Physical, deterrent control"
        ],
        "answer": 1,
        "explanation": "A honeypot is a decoy server configured to attract hackers, acting as a technical, detective control that alerts administrators to unauthorized activity."
    },
    {
        "id": 354,
        "section": "S13",
        "question": "An auditor is evaluating the organization's physical access controls. Which of the following provides the BEST detective evidence of entry?",
        "options": [
            "The visitor sign-in sheet at the front desk",
            "Electronic badge access logs integrated with timestamped CCTV footage",
            "A locked mantrap door at the lobby",
            "An administrative password policy"
        ],
        "answer": 1,
        "explanation": "Correlating electronic badge swiping logs with CCTV video recordings provides definitive visual and electronic evidence verifying who entered a secure zone."
    },
    {
        "id": 355,
        "section": "S13",
        "question": "A tester performs a black-box penetration test. What information does the tester have about the target system before beginning?",
        "options": [
            "Full source code and network diagrams",
            "No prior knowledge or documentation of the architecture",
            "Only IP addresses and host operating system versions",
            "Admin credentials for the primary active directory server"
        ],
        "answer": 1,
        "explanation": "In a black-box penetration test, the tester is given no prior information about the target system's architecture, configurations, or source code, mimicking an external attacker."
    },
    {
        "id": 356,
        "section": "S13",
        "question": "A tester performs a white-box penetration test. What is the primary characteristic of this engagement?",
        "options": [
            "The tester has complete access to source code, configurations, and internal documentation",
            "The tester has no information and must perform extensive passive reconnaissance",
            "The tester only targets wireless interfaces and IoT hubs",
            "The tester is guided by the Blue Team in real time"
        ],
        "answer": 0,
        "explanation": "In a white-box test (or crystal-box test), the tester is provided with full documentation, source code, and network diagrams, allowing for comprehensive internal analysis."
    },
    {
        "id": 357,
        "section": "S13",
        "question": "An auditor wants to ensure that a security patch has been applied to all company laptops. What should they perform to verify compliance?",
        "options": [
            "A penetration test using Metasploit",
            "A vulnerability scan or configuration audit on the endpoints",
            "A tabletop incident response exercise",
            "A physical sweep of the laptop storage room"
        ],
        "answer": 1,
        "explanation": "A configuration audit or vulnerability scan query is the most efficient and compliant way to verify that a software patch is present on all assets."
    },
    {
        "id": 358,
        "section": "S13",
        "question": "An organization is undergoing a PCI DSS audit. The auditor demands proof that external vulnerability scans are conducted quarterly. What evidence should the organization present?",
        "options": [
            "A master services agreement signed by a scanning vendor",
            "The actual dated scan reports from the last four quarters signed by an Approved Scanning Vendor (ASV)",
            "The source code of the vulnerability scanner",
            "A backup file of the database containing the scan records"
        ],
        "answer": 1,
        "explanation": "Showing signed, quarterly reports from an ASV is the specific compliance evidence required to satisfy PCI DSS quarterly scanning requirements."
    },
    {
        "id": 359,
        "section": "S13",
        "question": "During an audit, which of the following represents a 'non-conformity' or audit finding?",
        "options": [
            "A control operates exactly as designed in the policy",
            "A critical server lacks the required patch, violating the security standard",
            "The team has updated the risk register with new threats",
            "The CAB has approved a network change scheduled for Sunday"
        ],
        "answer": 1,
        "explanation": "An audit finding or non-conformity represents a failure to meet a standard, policy requirement, or regulatory rule."
    },
    {
        "id": 360,
        "section": "S13",
        "question": "An organization wants to hire an external firm to assess if their financial transaction processing system is secure, but does not want a full exploit phase. What should they contract?",
        "options": [
            "A double-blind penetration test",
            "A security assessment / audit",
            "A Red Team engagement",
            "A Metasploit session"
        ],
        "answer": 1,
        "explanation": "A security assessment or audit evaluates controls using checklists, policies, and configuration checks without executing exploits, making it less disruptive than penetration testing."
    },

    # --- SECTION S14 (30 Questions, IDs 361-390) ---
    {
        "id": 361,
        "section": "S14",
        "question": "A network architect wants to ensure that a web service remains continuously available even during a hardware server crash. What should they implement?",
        "options": [
            "Full Disk Encryption (FDE)",
            "High Availability (HA) cluster with load balancing",
            "Point-in-time snapshots",
            "Fail-secure electronic door locks"
        ],
        "answer": 1,
        "explanation": "High Availability (HA) utilizes redundant systems, clustering, and load balancing to eliminate single points of failure, ensuring services remain operational during hardware crashes."
    },
    {
        "id": 362,
        "section": "S14",
        "question": "An online store experiences a massive traffic spike during a sales event. A device automatically distributes incoming HTTP requests across a pool of ten web servers to optimize performance. What is this device?",
        "options": [
            "A firewall gateway",
            "A Load Balancer",
            "A hypervisor",
            "A TPM chip"
        ],
        "answer": 1,
        "explanation": "A Load Balancer distributes network traffic or workloads across a pool of servers to optimize resource utilization, prevent overloads, and increase availability."
    },
    {
        "id": 363,
        "section": "S14",
        "question": "A database system uses three servers grouped together. If the primary active server crashes, one of the passive servers automatically assumes the workload without user intervention. What is this architecture?",
        "options": [
            "A screened subnet",
            "A Server Cluster (Failover Cluster)",
            "A Faraday cage",
            "An air-gapped network"
        ],
        "answer": 1,
        "explanation": "A failover cluster groups multiple servers (nodes) together, allowing secondary nodes to automatically take over operations (failover) if the primary node fails."
    },
    {
        "id": 364,
        "section": "S14",
        "question": "An organization hosts their critical application across AWS, Azure, and a local private cloud environment to ensure that if one cloud provider suffers an outage, the system remains operational. What is this model?",
        "options": [
            "On-premise deployment",
            "Multi-Cloud redundancy",
            "Centralized architecture",
            "Software-Defined Networking"
        ],
        "answer": 1,
        "explanation": "Multi-cloud architectures distribute services across multiple different cloud provider platforms to avoid vendor lock-in and increase resilience against provider-level outages."
    },
    {
        "id": 365,
        "section": "S14",
        "question": "A storage array writes data across two hard drives in a striped configuration to optimize read/write performance. What RAID level is this, and what fault tolerance does it provide?",
        "options": [
            "RAID 1; can survive one drive failure",
            "RAID 0; provides zero fault tolerance",
            "RAID 5; can survive one drive failure",
            "RAID 6; can survive two drive failures"
        ],
        "answer": 1,
        "explanation": "RAID 0 (striping) splits data across disks for speed, but provides no data redundancy. If any single drive in a RAID 0 array fails, all data is lost."
    },
    {
        "id": 366,
        "section": "S14",
        "question": "An administrator wants to secure a critical database server against a single hard drive failure. They write identical data to two mirrored drives simultaneously. What RAID level is this?",
        "options": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 10"
        ],
        "answer": 1,
        "explanation": "RAID 1 (mirroring) writes duplicate copies of data to two or more drives, providing fault tolerance since the system can continue operating if one drive fails."
    },
    {
        "id": 367,
        "section": "S14",
        "question": "A database administrator configures a RAID array using 3 disks. Data is striped across the disks along with parity information. What RAID level is this?",
        "options": [
            "RAID 1",
            "RAID 5",
            "RAID 6",
            "RAID 10"
        ],
        "answer": 1,
        "explanation": "RAID 5 (striping with parity) stripes data and parity across a minimum of 3 disks, providing fault tolerance for a single drive failure and optimized capacity."
    },
    {
        "id": 368,
        "section": "S14",
        "question": "A storage engineer wants a RAID configuration that can survive the simultaneous failure of two hard drives. What RAID level should they implement?",
        "options": [
            "RAID 1",
            "RAID 5",
            "RAID 6",
            "RAID 0"
        ],
        "answer": 2,
        "explanation": "RAID 6 (striping with double parity) writes two separate parity blocks across the array, requiring a minimum of 4 disks and allowing the system to survive up to two simultaneous drive failures."
    },
    {
        "id": 369,
        "section": "S14",
        "question": "A database system requires high read/write performance and complete fault tolerance. The administrator configures a striped array of mirrored arrays using 4 disks. What is this RAID level?",
        "options": [
            "RAID 0",
            "RAID 5",
            "RAID 6",
            "RAID 10 (RAID 1+0)"
        ],
        "answer": 3,
        "explanation": "RAID 10 combines RAID 1 (mirroring) and RAID 0 (striping) to provide both high performance and robust fault tolerance, requiring a minimum of 4 disks."
    },
    {
        "id": 370,
        "section": "S14",
        "question": "An IT department is auditing their capacity constraints. They forecast future CPU, memory, and storage utilization trends to determine when new hardware purchases are required. What planning process is this?",
        "options": [
            "Business Impact Analysis (BIA)",
            "Capacity Planning",
            "Disaster Recovery Planning",
            "Incident Response Planning"
        ],
        "answer": 1,
        "explanation": "Capacity Planning is the strategic process of forecasting and managing the resources (CPU, storage, memory, infrastructure) needed to support future business operations."
    },
    {
        "id": 371,
        "section": "S14",
        "question": "A data center experiences minor voltage fluctuations and sags from the municipal power grid. Which device should they install to smooth out the power signal before it reaches server racks?",
        "options": [
            "Diesel Generator",
            "Line Conditioner",
            "Mantraps",
            "Bollards"
        ],
        "answer": 1,
        "explanation": "A line conditioner (or power conditioner) adjusts voltage fluctuations, spikes, and sags, delivering clean and stable electrical signals to sensitive hardware."
    },
    {
        "id": 372,
        "section": "S14",
        "question": "During a sudden power grid failure, a device instantly transitions server racks to battery backup power, keeping systems running without interruption. What is this device?",
        "options": [
            "Diesel Generator",
            "Uninterruptible Power Supply (UPS)",
            "Line Conditioner",
            "Fail-safe lock"
        ],
        "answer": 1,
        "explanation": "An Uninterruptible Power Supply (UPS) provides near-instantaneous battery power during a blackout, protecting systems from sudden shutdowns and data corruption."
    },
    {
        "id": 373,
        "section": "S14",
        "question": "A data center suffers a major blackout that is expected to last for three days. Which device is responsible for providing long-term backup electrical power to keep the cooling and servers running?",
        "options": [
            "UPS battery pack",
            "Diesel Generator",
            "Line Conditioner",
            "Power Distribution Center"
        ],
        "answer": 1,
        "explanation": "Generators convert mechanical energy (fuel-powered) to electricity, providing long-term backup power during extended blackouts after the UPS batteries are depleted."
    },
    {
        "id": 374,
        "section": "S14",
        "question": "A system administrator is designing a backup strategy. They configure the backups to run daily at midnight, saving only the blocks that have changed since the previous night's backup. What backup type is this?",
        "options": [
            "Full Backup",
            "Incremental Backup",
            "Differential Backup",
            "Snapshot"
        ],
        "answer": 1,
        "explanation": "An Incremental Backup saves only the data that has modified since the last backup (of any type), resulting in fast backup speeds and minimal storage consumption."
    },
    {
        "id": 375,
        "section": "S14",
        "question": "A virtualization administrator wants to capture a consistent, point-in-time state of a virtual machine before applying a software update, allowing a rapid rollback if the patch fails. What should they capture?",
        "options": [
            "Full backup tape",
            "Snapshot",
            "RAID 0 array",
            "Line conditioner log"
        ],
        "answer": 1,
        "explanation": "Snapshots capture the exact state and configuration of a virtual machine at a specific point in time, enabling rapid restoration to that state."
    },
    {
        "id": 376,
        "section": "S14",
        "question": "An organization wants to mirror all data updates in real time to a secondary database hosted in a different region, ensuring that both databases are always identical. What process is this?",
        "options": [
            "Incremental Backup",
            "Data Replication",
            "Data sanitization",
            "Snapshot archiving"
        ],
        "answer": 1,
        "explanation": "Data Replication is the process of copying data in real time or near-real time to a secondary location to maintain synchronization between two storage nodes."
    },
    {
        "id": 377,
        "section": "S14",
        "question": "A database system maintains a running log of all database transactions to disk before writing them to the actual table structure. What is this mechanism called?",
        "options": [
            "Replication",
            "Journaling / Change Tracking",
            "Incremental backup",
            "Degaussing"
        ],
        "answer": 1,
        "explanation": "Journaling (or transaction logging) keeps a sequential log of all database changes, allowing the system to recover gracefully to a consistent state after a crash."
    },
    {
        "id": 378,
        "section": "S14",
        "question": "An IT department is drafting a plan that outlines how key business processes and personnel will relocate to a temporary facility and resume operations if a fire destroys the corporate headquarters. What plan is this?",
        "options": [
            "Disaster Recovery Plan (DRP)",
            "Continuity of Operations Plan (COOP) / Business Continuity Plan (BCP)",
            "Incident Response Plan (IRP)",
            "Acceptable Use Policy (AUP)"
        ],
        "answer": 1,
        "explanation": "The BCP/COOP focuses on keeping critical business operations running during a disruption or disaster, outlining non-technical relocation and business survival workflows."
    },
    {
        "id": 379,
        "section": "S14",
        "question": "A server room is flooded. The IT team retrieves the backup tapes and begins configuring new server hardware at a secondary location to restore database access. What plan are they executing?",
        "options": [
            "Business Continuity Plan (BCP)",
            "Disaster Recovery Plan (DRP)",
            "Acceptable Use Policy (AUP)",
            "Security standard"
        ],
        "answer": 1,
        "explanation": "The Disaster Recovery Plan (DRP) is a technical subset of the BCP that focuses on the step-by-step restoration of IT systems, networks, and data after a disaster."
    },
    {
        "id": 380,
        "section": "S14",
        "question": "A financial firm maintains a secondary facility that has active, mirrored databases, identical server hardware running continuously, and network connections established. In a disaster, operations switch to this facility instantly. What redundant site is this?",
        "options": [
            "Hot Site",
            "Warm Site",
            "Cold Site",
            "Mobile Site"
        ],
        "answer": 0,
        "explanation": "A Hot Site is a fully operational, mirrored recovery facility ready for immediate failover during an emergency, minimizing downtime and data loss."
    },
    {
        "id": 381,
        "section": "S14",
        "question": "An organization rents a disaster recovery room that has power, air conditioning, and network cabling, but contains no servers or workstations. Bringing this site online will take several weeks. What redundant site is this?",
        "options": [
            "Hot Site",
            "Warm Site",
            "Cold Site",
            "Mobile Site"
        ],
        "answer": 2,
        "explanation": "A Cold Site provides physical space, power, and utilities, but has no pre-configured hardware, software, or network lines, requiring weeks to set up during a disaster."
    },
    {
        "id": 382,
        "section": "S14",
        "question": "To secure their network against a single software flaw compromising all systems, a company uses Windows servers for active directory, Linux servers for database hosting, and Cisco switches for routing. What design concept does this represent?",
        "options": [
            "High Availability",
            "Platform Diversity",
            "Geographic Dispersion",
            "Zero Trust"
        ],
        "answer": 1,
        "explanation": "Platform Diversity is the use of different operating systems, hardware platforms, and software vendors across the network to prevent a single exploit from compromising the entire infrastructure."
    },
    {
        "id": 383,
        "section": "S14",
        "question": "A company distributes its data centers across three separate seismic zones in the United States to ensure that a localized natural disaster (like an earthquake or hurricane) cannot disrupt all sites. What is this design called?",
        "options": [
            "Platform Diversity",
            "Geographic Dispersion",
            "Clustering",
            "Load Balancing"
        ],
        "answer": 1,
        "explanation": "Geographic Dispersion distributes critical systems and data centers across different physical locations to mitigate the risk of localized disasters causing total system failures."
    },
    {
        "id": 384,
        "section": "S14",
        "question": "A security manager gathers department heads in a conference room to walk through a hypothetical ransomware scenario, evaluating each stakeholder's response and checking communication lists without affecting live systems. What testing method is this?",
        "options": [
            "Failover Test",
            "Tabletop Exercise",
            "Parallel Processing",
            "Simulation"
        ],
        "answer": 1,
        "explanation": "A Tabletop Exercise is a discussion-based simulation where key personnel meet to walk through an emergency scenario, validating roles and plans in a low-risk environment."
    },
    {
        "id": 385,
        "section": "S14",
        "question": "An IT department validates their DRP by cutting off the power supply to the primary database server during scheduled maintenance, verifying that the failover cluster automatically redirects users to the secondary server. What test is this?",
        "options": [
            "Tabletop Exercise",
            "Failover Test",
            "Parallel Processing",
            "Simulation"
        ],
        "answer": 1,
        "explanation": "A Failover Test actively triggers a system failure under controlled conditions to verify that secondary systems successfully assume the workload as designed."
    },
    {
        "id": 386,
        "section": "S14",
        "question": "During a disaster recovery test, an organization runs the restored database alongside the active production database, checking that both systems process the same transactions and yield matching results. What test is this?",
        "options": [
            "Tabletop Exercise",
            "Parallel Processing / Parallel Testing",
            "Failover Test",
            "Vulnerability Scan"
        ],
        "answer": 1,
        "explanation": "Parallel Processing (or parallel testing) involves running a secondary system simultaneously with the primary system to compare outputs and verify stability before a formal cutover."
    },
    {
        "id": 387,
        "section": "S14",
        "question": "An administrator is setting up daily backups. They want a backup type that saves all blocks that have modified since the last FULL backup, which speeds up restoration since only the full backup and one incremental/differential tape are needed. What backup type is this?",
        "options": [
            "Incremental Backup",
            "Differential Backup",
            "Snapshot",
            "Journaling"
        ],
        "answer": 1,
        "explanation": "A Differential Backup saves all data that has changed since the last full backup. Restoration requires only the last full backup and the latest differential backup."
    },
    {
        "id": 388,
        "section": "S14",
        "question": "A data center designer wants to protect server racks from sudden voltage surges caused by lightning strikes. Which power control is the BEST choice?",
        "options": [
            "UPS battery",
            "Line Conditioner / Surge Protector",
            "Diesel Generator",
            "Power Distribution Center"
        ],
        "answer": 1,
        "explanation": "Line conditioners and surge protectors suppress voltage spikes and surges, protecting electronic equipment from damage."
    },
    {
        "id": 389,
        "section": "S14",
        "question": "Which BIA metric is directly used by a backup administrator to determine how often backups must be scheduled?",
        "options": [
            "Recovery Time Objective (RTO)",
            "Recovery Point Objective (RPO)",
            "Mean Time to Repair (MTTR)",
            "Mean Time Between Failures (MTBF)"
        ],
        "answer": 1,
        "explanation": "The Recovery Point Objective (RPO) defines the maximum tolerable data loss window, which directly determines the required backup frequency (e.g. 4-hour RPO requires backups at least every 4 hours)."
    },
    {
        "id": 390,
        "section": "S14",
        "question": "A company wants to deliver a temporary recovery workspace to a remote disaster area quickly. They contract a service that provides a trailer equipped with generators, workstations, and satellite links. What redundant site type is this?",
        "options": [
            "Hot Site",
            "Cold Site",
            "Mobile Site",
            "Virtual Site"
        ],
        "answer": 2,
        "explanation": "A Mobile Site is a self-contained, portable recovery workspace housed in a trailer or container that can be towed to a disaster area to resume operations."
    },

    # --- SECTION S15 (30 Questions, IDs 391-420) ---
    {
        "id": 391,
        "section": "S15",
        "question": "An IT department keeps its primary database servers in local server racks, but hosts their email and customer CRM portals in public cloud environments. What deployment model is this?",
        "options": [
            "On-premise deployment",
            "Public Cloud deployment",
            "Hybrid Solutions",
            "Decentralized Architecture"
        ],
        "answer": 2,
        "explanation": "Hybrid solutions combine on-premise infrastructure (or private cloud) with public cloud services, allowing organizations to keep sensitive workloads local while leveraging cloud scale for others."
    },
    {
        "id": 392,
        "section": "S15",
        "question": "An organization is migrating a system to a PaaS cloud model. According to the Shared Responsibility Matrix, who is responsible for patching the physical host server operating system?",
        "options": [
            "The customer's security team",
            "The cloud service provider (CSP)",
            "Both the customer and the CSP",
            "Neither, as PaaS does not use physical hosts"
        ],
        "answer": 1,
        "explanation": "In Platform as a Service (PaaS), the cloud service provider manages and patches the physical infrastructure, hypervisors, and host operating systems, while the customer manages applications."
    },
    {
        "id": 393,
        "section": "S15",
        "question": "A security architect wants to host multiple virtual servers on a single physical host. Which software component is responsible for isolating and allocating the hardware resources to each virtual machine?",
        "options": [
            "The container engine",
            "The Hypervisor",
            "The policy enforcement point",
            "The load balancer"
        ],
        "answer": 1,
        "explanation": "A Hypervisor (Type 1 or Type 2) is the software layer that manages and distributes physical server resources (CPU, RAM, storage) among virtual machines, maintaining isolation."
    },
    {
        "id": 394,
        "section": "S15",
        "question": "An attacker compromises a virtual machine and executes an exploit that allows them to bypass VM boundary controls and interact directly with the host hypervisor. What vulnerability was exploited?",
        "options": [
            "VM Sprawl",
            "VM Escape",
            "Resource Reuse",
            "Live Migration vulnerability"
        ],
        "answer": 1,
        "explanation": "VM Escape is a critical vulnerability where an attacker breaks out of the guest VM's isolated environment to execute code directly on the host hypervisor or other guest VMs."
    },
    {
        "id": 395,
        "section": "S15",
        "question": "A security administrator discovers that developers are launching virtual machines in the cloud test environment without registering them or applying patches, creating an unmonitored security risk. What is this concern?",
        "options": [
            "VM Escape",
            "VM Sprawl",
            "Resource reuse",
            "Decentralization"
        ],
        "answer": 1,
        "explanation": "VM Sprawl occurs when virtual machines are created and deployed without proper oversight, change control, or lifecycle tracking, leading to unpatched and orphaned assets."
    },
    {
        "id": 396,
        "section": "S15",
        "question": "A software team packages an application along with all of its dependencies and libraries into an isolated user-space engine that shares the host system's OS kernel. What technology is being used?",
        "options": [
            "Type 1 Hypervisor virtualization",
            "Containerization",
            "Serverless Computing",
            "Microservices"
        ],
        "answer": 1,
        "explanation": "Containerization isolates applications in containers that share the host's operating system kernel, making them lightweight and highly portable compared to full virtual machines."
    },
    {
        "id": 397,
        "section": "S15",
        "question": "A developer deploys a series of single-purpose code functions that are triggered by event API calls. The cloud provider dynamically manages all server allocations, and the developer is charged only for CPU cycles used. What model is this?",
        "options": [
            "SaaS model",
            "Serverless Computing / FaaS",
            "Microservices",
            "SDN Control Plane"
        ],
        "answer": 1,
        "explanation": "Serverless Computing (Function as a Service) is an execution model where the cloud provider manages server provisioning, dynamically scaling compute resources to execute code blocks on-demand."
    },
    {
        "id": 398,
        "section": "S15",
        "question": "An application is redesigned from a single large monolithic code block into a collection of twenty small, autonomous services that communicate over APIs. What is this architecture?",
        "options": [
            "Centralized architecture",
            "Microservices Architecture",
            "Serverless execution",
            "SDN architecture"
        ],
        "answer": 1,
        "explanation": "Microservices structure applications as a collection of small, independent, loosely-coupled services organized around specific business capabilities."
    },
    {
        "id": 399,
        "section": "S15",
        "question": "To protect a highly secure database containing weapon designs, the military disconnects all physical and wireless network cables from the database server, completely isolating it from the network. What is this control?",
        "options": [
            "Logical Separation",
            "Physical Separation / Air Gapping",
            "Network Segmentation",
            "Software-Defined Networking"
        ],
        "answer": 1,
        "explanation": "Air Gapping (physical separation) isolates a system or network from other networks (including the internet), preventing remote cyberattacks."
    },
    {
        "id": 400,
        "section": "S15",
        "question": "A network administrator configures VLANs on a core switch to segregate finance traffic from guest traffic crossing the same physical network interfaces. What security control is this?",
        "options": [
            "Physical Separation",
            "Logical Separation",
            "Air Gapping",
            "IaC deployment"
        ],
        "answer": 1,
        "explanation": "Logical Separation uses software-based configurations, firewalls, and VLANs to segment traffic and restrict access within shared physical network devices."
    },
    {
        "id": 401,
        "section": "S15",
        "question": "A network architect wants to programmatically reconfigure network routing rules across one hundred routers from a single centralized software panel. What technology should they implement?",
        "options": [
            "Infrastructure as Code (IaC)",
            "Software-Defined Networking (SDN)",
            "Virtualization",
            "Microservices"
        ],
        "answer": 1,
        "explanation": "Software-Defined Networking (SDN) decouples the network control plane (routing logic) from the data plane (forwarding hardware), enabling centralized, programmatic management."
    },
    {
        "id": 402,
        "section": "S15",
        "question": "An engineer uses an SDN controller to configure the paths that packets will take across the network. Which plane of the SDN is the engineer interacting with?",
        "options": [
            "Data Plane",
            "Control Plane",
            "Forwarding Plane",
            "Physical Plane"
        ],
        "answer": 1,
        "explanation": "The Control Plane in SDN is the centralized decision-making engine that determines routing paths and traffic rules across the network infrastructure."
    },
    {
        "id": 403,
        "section": "S15",
        "question": "A developer writes a Terraform script (HCL format) that defines three virtual servers, a firewall rule, and a subnet, automatically launching them in the cloud when run. What is this technique?",
        "options": [
            "Serverless provisioning",
            "Infrastructure as Code (IaC)",
            "Microservice architecture",
            "Virtualization escape"
        ],
        "answer": 1,
        "explanation": "Infrastructure as Code (IaC) involves managing and provisioning IT infrastructure (servers, networks, firewalls) using machine-readable configuration files and automation scripts."
    },
    {
        "id": 404,
        "section": "S15",
        "question": "An IaC deployment script is designed so that running it multiple times always results in the exact same infrastructure configuration, regardless of the system's starting state. What is this property called?",
        "options": [
            "Snowflake prevention",
            "Idempotence",
            "Virtualization",
            "Orchestration"
        ],
        "answer": 1,
        "explanation": "Idempotence is the property of an operation producing the same outcome every time it is run, which is critical for consistent IaC configuration baselines."
    },
    {
        "id": 405,
        "section": "S15",
        "question": "An audit team discovers that several servers have unique, manual configurations that were applied ad-hoc by administrators over time, making them inconsistent with corporate templates. What are these systems called?",
        "options": [
            "Idempotent systems",
            "Snowflake Systems",
            "Microservices",
            "Air-gapped systems"
        ],
        "answer": 1,
        "explanation": "Snowflake Systems are servers or configurations that are uniquely configured and maintained manually, making them inconsistent, difficult to replicate, and prone to security drift."
    },
    {
        "id": 406,
        "section": "S15",
        "question": "An organization relies on smart thermometers, connected cameras, and wireless light switches throughout its facility. What network category do these devices represent?",
        "options": [
            "ICS/SCADA",
            "Internet of Things (IoT)",
            "Microservices",
            "SDN"
        ],
        "answer": 1,
        "explanation": "The Internet of Things (IoT) is a network of physical devices embedded with sensors, software, and connectivity that collect and exchange data."
    },
    {
        "id": 407,
        "section": "S15",
        "question": "A security engineer is configuring a network to protect the corporate intranet from compromised smart appliances. What mitigation should they implement?",
        "options": [
            "Disable encryption on all IoT devices",
            "Isolate all IoT devices on a separate, segmented network / VLAN",
            "Use Type 2 hypervisors on all IoT hubs",
            "Register all IoT devices in the CMDB"
        ],
        "answer": 1,
        "explanation": "IoT devices often have weak security controls. Placing them on a separate, segmented network (VLAN) prevents a compromised device from pivoting to corporate assets."
    },
    {
        "id": 408,
        "section": "S15",
        "question": "An engineer monitors electrical generation turbines and water valves across ten cities from a centralized, geographically dispersed control center. What category of system is this?",
        "options": [
            "Local DCS",
            "SCADA (Supervisory Control and Data Acquisition)",
            "IoT Hub",
            "Hypervisor cluster"
        ],
        "answer": 1,
        "explanation": "SCADA is a subset of Industrial Control Systems (ICS) used to monitor and control geographically dispersed industrial processes (like power grids or pipelines)."
    },
    {
        "id": 409,
        "section": "S15",
        "question": "A medical device manufacturer designs a pacemaker with an embedded processor running a specialized OS that must process biometric telemetry instantly with zero delay or buffering. What operating system type is this?",
        "options": [
            "Standard server OS",
            "Real-Time Operating System (RTOS)",
            "Type 2 Hypervisor",
            "Serverless runtime"
        ],
        "answer": 1,
        "explanation": "A Real-Time Operating System (RTOS) is designed to process data as it arrives without buffering delays, providing highly predictable and timely execution for critical applications."
    },
    {
        "id": 410,
        "section": "S15",
        "question": "A security engineer wraps legacy embedded device traffic inside an IPsec tunnel because the device hardware lacks the ability to encrypt data natively. What is this security mechanism?",
        "options": [
            "Network segmentation",
            "A Wrapper",
            "Firmware code control",
            "An air gap"
        ],
        "answer": 1,
        "explanation": "Wrappers are protective protocols (like IPsec or SSL/TLS) used to encapsulate and encrypt data in transit for systems (like legacy embedded systems) that cannot secure their traffic natively."
    },
    {
        "id": 411,
        "section": "S15",
        "question": "Which of the following represents a primary security risk associated with embedded systems in industrial settings?",
        "options": [
            "High virtualization escape rate",
            "Inability to patch or update due to hard-to-reach physical locations or downtime constraints",
            "Excessive use of serverless architectures",
            "Lack of physical cables"
        ],
        "answer": 1,
        "explanation": "Embedded systems are often difficult or impossible to patch due to long operational lifespans, physical isolation, or the risk of introducing downtime in critical environments."
    },
    {
        "id": 412,
        "section": "S15",
        "question": "A security manager wants to ensure that only cryptographically signed updates can be installed on the corporate smart locks. What control should they enforce?",
        "options": [
            "Network segmentation",
            "Firmware Code Control / Secure Boot",
            "Qualitative risk analysis",
            "Air gapping"
        ],
        "answer": 1,
        "explanation": "Firmware code control and secure boot mechanisms verify the cryptographic signature of updates and bootloaders before execution, ensuring only authorized code runs."
    },
    {
        "id": 413,
        "section": "S15",
        "question": "An architect is selecting a hypervisor to run enterprise databases. They want a bare-metal hypervisor that runs directly on the server's physical hardware for maximum performance. What should they choose?",
        "options": [
            "Type 2 Hypervisor",
            "Type 1 Hypervisor",
            "Docker Container",
            "Serverless function"
        ],
        "answer": 1,
        "explanation": "Type 1 hypervisors (bare-metal) run directly on the physical host hardware, providing high performance, efficiency, and security for enterprise virtualization."
    },
    {
        "id": 414,
        "section": "S15",
        "question": "Which cloud computing security threat is characterized by residual data remaining on storage media after deletion, potentially exposing it to another tenant sharing the same hardware?",
        "options": [
            "VM Escape",
            "Data Remnants",
            "Typosquatting",
            "Downgrade attack"
        ],
        "answer": 1,
        "explanation": "Data remnants are the residual physical representations of data that remain on storage drives even after deletion, creating data disclosure risks in shared, multi-tenant cloud systems."
    },
    {
        "id": 415,
        "section": "S15",
        "question": "An application is composed of small, independent services. One service handles payment, one handles user signup, and one handles catalogs. If the catalog service fails, payments continue working. What benefit of microservices does this show?",
        "options": [
            "Scalability",
            "Resilience",
            "Flexibility",
            "Idempotence"
        ],
        "answer": 1,
        "explanation": "Microservices enhance resilience because services run autonomously. The failure of one non-critical service does not result in a total system outage."
    },
    {
        "id": 416,
        "section": "S15",
        "question": "An organization is migrating from a traditional server room to a public cloud PaaS model. Which task is the CSP responsible for under this model?",
        "options": [
            "Managing customer database user credentials",
            "Managing and securing the physical data center facility",
            "Configuring application input validation rules",
            "Classifying data sensitivity"
        ],
        "answer": 1,
        "explanation": "In all public cloud service models (IaaS, PaaS, SaaS), the Cloud Service Provider (CSP) is fully responsible for the physical security of the host facilities and data centers."
    },
    {
        "id": 417,
        "section": "S15",
        "question": "Which plane of a Software-Defined Network (SDN) is responsible for physically routing and forwarding packets based on rules received from the controller?",
        "options": [
            "Control Plane",
            "Data Plane / Forwarding Plane",
            "Application Plane",
            "Management Plane"
        ],
        "answer": 1,
        "explanation": "The Data Plane (or forwarding plane) is the hardware and software layer that actually moves packets across the network based on the instructions of the Control Plane."
    },
    {
        "id": 418,
        "section": "S15",
        "question": "A system administrator manually installs software patches on one server, but forgets to do it on five other identical servers. What issue does this introduce?",
        "options": [
            "VM Escape",
            "System configuration drift / Snowflake Systems",
            "Downgrade attack",
            "Inherent risk escalation"
        ],
        "answer": 1,
        "explanation": "Manual, inconsistent changes cause configuration drift, creating unique 'snowflake' systems that introduce risks due to their lack of standardization."
    },
    {
        "id": 419,
        "section": "S15",
        "question": "What is the primary security concern associated with using a Type 2 hypervisor in an enterprise environment?",
        "options": [
            "It runs directly on bare-metal hardware.",
            "It runs within a standard host operating system, making its security dependent on the host OS security.",
            "It cannot host virtual machines.",
            "It does not support network bridging."
        ],
        "answer": 1,
        "explanation": "Type 2 hypervisors run on top of a host operating system. If the host OS is compromised, all guest virtual machines running on the hypervisor are compromised as well."
    },
    {
        "id": 420,
        "section": "S15",
        "question": "An organization implements over-the-air (OTA) updates for their smart building HVAC controllers. Which of the following is the MOST critical security control for this process?",
        "options": [
            "Use of Type 2 hypervisors on controllers",
            "Cryptographic signature validation on all received update files",
            "Reducing the database backup frequency",
            "Performing qualitative risk analysis ad-hoc"
        ],
        "answer": 1,
        "explanation": "Cryptographic signature verification ensures that updates received remotely (OTA) are authentic and have not been tampered with by an attacker, preventing malicious firmware deployment."
    }
]

def main():
    filepath = "questions.js"
    if not os.path.exists(filepath):
        print("questions.js not found")
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read().strip()
        
    if content.startswith('const EXAM_QUESTIONS ='):
        content = content[len('const EXAM_QUESTIONS ='):].strip()
    if content.endswith(';'):
        content = content[:-1].strip()
        
    existing_questions = json.loads(content)
    print(f"Loaded {len(existing_questions)} existing questions.")
    
    # We want to merge the new questions.
    # To avoid duplicate IDs, we will verify the existing question IDs.
    # The existing questions have IDs up to 220. We will map new questions starting from 221.
    next_id = max(q.get("id", 0) for q in existing_questions) + 1
    if next_id < 221:
        next_id = 221
        
    print(f"Appending new questions starting with ID {next_id}...")
    
    for q in new_questions:
        q["id"] = next_id
        next_id += 1
        existing_questions.append(q)
        
    print(f"Total questions after merging: {len(existing_questions)}")
    
    # Format and save back as JS
    formatted_js = f"const EXAM_QUESTIONS = {json.dumps(existing_questions, indent=2, ensure_ascii=False)};"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(formatted_js)
        
    print("Successfully updated questions.js")

if __name__ == '__main__':
    main()
