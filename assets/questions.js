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
    "section": "S2",
    "question": "A development team wants to perform QA testing on database backups containing real customer names and credit card details. Which of the following techniques is the BEST choice to allow testing on realistic data without exposing the actual sensitive information?",
    "options": [
      "Full Disk Encryption (FDE)",
      "Dynamic Data Masking / Tokenization",
      "SHA-256 Hashing",
      "Redundant RAID arrays"
    ],
    "answer": 1,
    "explanation": "Dynamic Data Masking or Tokenization allows developers to test applications using realistic formats without exposing actual sensitive data, resolving the conflict between security and usability. Encryption is for access control, hashing is one-way (unusable for QA formatting), and RAID provides availability.",
    "id": 6
  },
  {
    "section": "S2",
    "question": "An administrator wants to detect if any unauthorized changes have been made to critical system binaries on a Linux web server. Which mechanism should the administrator implement FIRST?",
    "options": [
      "Full Disk Encryption (FDE)",
      "File Integrity Monitoring (FIM) using hashing algorithms",
      "Role-Based Access Control (RBAC)",
      "Virtual Private Network (VPN)"
    ],
    "answer": 1,
    "explanation": "File Integrity Monitoring (FIM) calculates cryptographic hashes of system files and compares them against known baselines. It is the FIRST and most direct control for detecting unauthorized file tampering. FDE protects data at rest, RBAC controls access permissions, and VPN protects data in transit.",
    "id": 7
  },
  {
    "section": "S2",
    "question": "A network engineer is configuring an enterprise firewall. To ensure a secure baseline posture, they want to configure the firewall to block all traffic by default and only permit specifically allowed connections. Which security principle does this BEST represent?",
    "options": [
      "Least Privilege",
      "Implicit Deny",
      "Separation of Duties",
      "Defense in Depth"
    ],
    "answer": 1,
    "explanation": "Implicit Deny is the firewall principle where any traffic that is not explicitly allowed by a rule is blocked by default. Least Privilege applies to user/system permissions; Separation of Duties splits critical tasks; Defense in Depth uses layered controls.",
    "id": 8
  },
  {
    "section": "S2",
    "question": "An organization is migrating its local systems to a Zero Trust architecture. When designing access control rules, what is the MOST critical assumption that the security team must make?",
    "options": [
      "All internal users and devices can be implicitly trusted once they authenticate.",
      "No user or device is trusted by default, regardless of their physical or network location.",
      "External threat actors cannot compromise credentials of trusted employees.",
      "Perimeter firewalls are sufficient to secure all internal resources."
    ],
    "answer": 1,
    "explanation": "The core tenet of a Zero Trust architecture is 'never trust, always verify.' Therefore, the most critical assumption is that no user or device is trusted by default, regardless of whether they are inside or outside the network perimeter.",
    "id": 9
  },
  {
    "section": "S2",
    "question": "A security analyst wants to verify the origin and integrity of a newly released software update before deploying it to production. Which cryptographic mechanism is the BEST choice for this purpose?",
    "options": [
      "Symmetric AES-256 encryption",
      "A digital signature verified using the developer's public key",
      "A salt added to the password hashing function",
      "A simple cyclic redundancy check (CRC)"
    ],
    "answer": 1,
    "explanation": "A digital signature provides both integrity and non-repudiation (origin verification). It is verified using the sender's public key. AES provides confidentiality, salting is for password storage, and CRC only detects accidental transmission errors, not malicious tampering.",
    "id": 10
  },
  {
    "section": "S2",
    "question": "An e-commerce website experiences a server failure during peak holiday traffic. Although the data remains safe and unaltered, customers cannot access the site. Which pillar of the CIA triad is MOST likely compromised?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation"
    ],
    "answer": 2,
    "explanation": "Availability ensures that systems and data are accessible to authorized users when needed. A server crash that prevents customer access is a compromise of availability. Confidentiality and integrity remain intact.",
    "id": 11
  },
  {
    "section": "S2",
    "question": "A system administrator configures a RAID 5 array on a database server to prevent data loss and ensure continuous uptime in the event of a single drive failure. Which security concept does this implementation BEST represent?",
    "options": [
      "Redundancy to support Availability",
      "Cryptography to support Confidentiality",
      "Hashing to support Integrity",
      "Audit trails to support Accounting"
    ],
    "answer": 0,
    "explanation": "A RAID 5 array provides disk redundancy, allowing a system to continue functioning after a drive failure. This directly supports Availability. It does not provide confidentiality, integrity verification, or audit trails.",
    "id": 12
  },
  {
    "section": "S2",
    "question": "An employee must insert a smart card and enter a PIN to log into a secure workstation. Which of the following describes the authentication factors used in this scenario?",
    "options": [
      "Something you know and something you are",
      "Something you have and something you know",
      "Something you have and something you are",
      "Something you do and somewhere you are"
    ],
    "answer": 1,
    "explanation": "Inserting a physical smart card represents 'something you have' (possession factor), and entering a PIN represents 'something you know' (knowledge factor). Together they form multi-factor authentication.",
    "id": 13
  },
  {
    "section": "S2",
    "question": "A security team wants to consolidate security logs from multiple firewalls, routers, and servers to correlate them and identify potential multi-stage attacks. Which solution is BEST suited for this task?",
    "options": [
      "Endpoint Detection and Response (EDR)",
      "Security Information and Event Management (SIEM)",
      "Web Application Firewall (WAF)",
      "Intrusion Prevention System (IPS)"
    ],
    "answer": 1,
    "explanation": "A SIEM (Security Information and Event Management) system consolidates log data from multiple sources and applies correlation rules to identify potential security incidents. EDR monitors endpoints, WAF protects web apps, and IPS blocks network attacks.",
    "id": 14
  },
  {
    "section": "S2",
    "question": "An incident response team wants to automate the process of blocking malicious IP addresses on their perimeter firewalls immediately after a high-severity alert is triggered in the SIEM. Which technology should they implement to achieve this?",
    "options": [
      "Security Orchestration, Automation, and Response (SOAR)",
      "Data Loss Prevention (DLP)",
      "Software-Defined Networking (SDN)",
      "Hardware Security Module (HSM)"
    ],
    "answer": 0,
    "explanation": "SOAR (Security Orchestration, Automation, and Response) tools automate incident response workflows (using playbooks), such as programmatically updating firewall rules. DLP stops data leaks, SDN controls network routing, and HSM manages keys.",
    "id": 15
  },
  {
    "section": "S2",
    "question": "An application requires users to authenticate with a username, password, and a fingerprint scan. The organization wants to enforce the principle of Least Privilege. What is the fundamental difference between Authentication and Authorization in this context?",
    "options": [
      "Authentication validates who the user is; Authorization determines what actions they can perform.",
      "Authentication determines access permissions; Authorization verifies the user's identity.",
      "Authentication is a detective control; Authorization is a preventative control.",
      "Authentication uses symmetric keys; Authorization uses asymmetric keys."
    ],
    "answer": 0,
    "explanation": "Authentication (AuthN) is the process of verifying a claimed identity (e.g., via passwords/biometrics). Authorization (AuthZ) is the process of granting or denying access to resources based on permissions, satisfying Least Privilege.",
    "id": 16
  },
  {
    "section": "S2",
    "question": "A company wants to protect sensitive customer credit card details in a database. They decide to replace the actual credit card numbers with random alphanumeric values (tokens) that map back to the real data in a secure, isolated vault. What is this technique called?",
    "options": [
      "Data Masking",
      "Tokenization",
      "Homomorphic Encryption",
      "Salting"
    ],
    "answer": 1,
    "explanation": "Tokenization replaces sensitive data elements with non-sensitive equivalents (tokens) that have no extrinsic value. The real data is mapped securely in a separate database vault. Data masking obfuscates data but doesn't necessarily use a secure lookup vault; Homomorphic encryption allows math on ciphertext; Salting adds randomness to hashes.",
    "id": 17
  },
  {
    "section": "S2",
    "question": "A network engineer is configuring a Zero Trust architecture. They need to deploy a gateway that intercepts traffic and validates user credentials and device posture before passing the request to the backend server. At which Zero Trust component should this gateway be placed?",
    "options": [
      "Policy Decision Point (PDP)",
      "Policy Enforcement Point (PEP)",
      "Data Plane Gateway",
      "Control Plane Engine"
    ],
    "answer": 1,
    "explanation": "The Policy Enforcement Point (PEP) is the component (like a firewall or gateway) that intercepts, inspects, and blocks or allows traffic based on the decision of the Policy Decision Point (PDP). The PDP makes the decision, and the PEP enforces it.",
    "id": 18
  },
  {
    "section": "S2",
    "question": "An audit team discovers that a database administrator has modified their own permissions to gain access to payroll data. Which security concept was violated, and what should be implemented to prevent this in the future?",
    "options": [
      "Least Privilege; implement Separation of Duties",
      "Non-repudiation; implement digital signatures",
      "Availability; implement RAID 5",
      "Confidentiality; implement full disk encryption"
    ],
    "answer": 0,
    "explanation": "The DBA violating Least Privilege by escalating their own permissions to access payroll data is a conflict of interest. Separation of Duties ensures that no single individual has the authority to execute all steps of a critical transaction or control their own authorization.",
    "id": 19
  },
  {
    "section": "S2",
    "question": "A security policy states that employees must not reuse their previous five passwords. Which control type does this password history policy BEST represent?",
    "options": [
      "Detective control",
      "Preventative control",
      "Corrective control",
      "Physical control"
    ],
    "answer": 1,
    "explanation": "A password history policy prevents users from reusing old, potentially compromised passwords, making it a preventative control. Detective controls find violations post-incident; corrective controls repair damage; physical controls protect hardware.",
    "id": 20
  },
  {
    "id": 21,
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
    "id": 22,
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
    "id": 23,
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
    "id": 24,
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
    "section": "S3",
    "question": "An employee in the accounting department receives an email with an attachment that appears to be a corporate invoice. The employee clicks the link and enters their corporate credentials, which the attacker uses to access the network. What type of threat actor role does this employee represent?",
    "options": [
      "Malicious Insider",
      "Negligent Insider",
      "Hacktivist",
      "Advanced Persistent Threat (APT)"
    ],
    "answer": 1,
    "explanation": "The employee is a negligent insider. They did not intend to harm the company (which would be a malicious insider), but their failure to follow security practices (clicking untrusted links) created a security incident. An APT is an external group.",
    "id": 25
  },
  {
    "section": "S3",
    "question": "A competitor hires a cyber mercenary group to steal proprietary trade secrets from a rival technology firm. The mercenaries are highly funded and utilize custom malware to exfiltrate database records over a six-month period. What is the primary motivation of this threat actor?",
    "options": [
      "Ideological",
      "Financial / Corporate Espionage",
      "Revenge",
      "Chaos / Nuisance"
    ],
    "answer": 1,
    "explanation": "Stealing trade secrets to gain a market advantage is corporate espionage, which is driven by financial and competitive motivations. It is not ideological (hacktivism) or revenge-driven.",
    "id": 26
  },
  {
    "section": "S3",
    "question": "A group of activists compromises a government website and defaces the home page with a message protesting environmental policies. What type of threat actor is MOST likely responsible for this attack?",
    "options": [
      "Hacktivist",
      "Script Kiddie",
      "Insider Threat",
      "State-Sponsored Actor"
    ],
    "answer": 0,
    "explanation": "Hacktivists are driven by ideological or political goals, using hacking to raise awareness or protest. Defacing a website to protest policies is a classic hacktivist action.",
    "id": 27
  },
  {
    "section": "S3",
    "question": "A security team proactively searches through network logs, process lists, and endpoint behavior to identify stealthy threat actors that have bypassed existing security controls. What is this activity called?",
    "options": [
      "Vulnerability Scanning",
      "Threat Hunting",
      "Penetration Testing",
      "Risk Assessment"
    ],
    "answer": 1,
    "explanation": "Threat Hunting is the proactive search for malware or attackers that are already lurking in the network and have bypassed automated security alerts. Vulnerability scanning is automated, and penetration testing is a simulated active attack.",
    "id": 28
  },
  {
    "section": "S3",
    "question": "A security analyst is researching an ongoing campaign and discovers a list of IP addresses, domain names, and file hashes associated with a known cyberespionage group. What are these indicators called?",
    "options": [
      "Vulnerabilities",
      "Indicators of Compromise (IoCs)",
      "Threat Vectors",
      "Attack Surfaces"
    ],
    "answer": 1,
    "explanation": "Indicators of Compromise (IoCs) are artifacts (like IP addresses, domain names, or file hashes) left on a network or host that indicate a security breach has occurred.",
    "id": 29
  },
  {
    "section": "S3",
    "question": "An organization wants to gather threat intelligence from public forums, social media, code repositories, and academic databases. What type of source is this?",
    "options": [
      "Closed-Source Intelligence",
      "Open-Source Intelligence (OSINT)",
      "Dark Web Analytics",
      "Proprietary Feeds"
    ],
    "answer": 1,
    "explanation": "OSINT (Open-Source Intelligence) is data collected from publicly available sources, such as public forums, social media, and web pages, to gather intelligence on threats or targets.",
    "id": 30
  },
  {
    "section": "S3",
    "question": "A disgruntled system administrator who was recently passed over for a promotion installs a logic bomb on the company's production database server. What type of threat actor is this?",
    "options": [
      "Hacktivist",
      "Malicious Insider",
      "Competitor",
      "State-Sponsored Actor"
    ],
    "answer": 1,
    "explanation": "A malicious insider is a current or former employee who has authorized access to an organization's network and systems and uses it to intentionally cause damage or steal data, often motivated by revenge or financial gain.",
    "id": 31
  },
  {
    "section": "S3",
    "question": "A cybercrime syndicate targets a retail chain with ransomware to encrypt their servers and extort money. They threaten to release customer data unless a ransom is paid in cryptocurrency. What is the primary attribute of this group?",
    "options": [
      "Unskilled script kiddies seeking notoriety",
      "Ideologically driven hacktivists",
      "Organized crime group with high capabilities and financial motivation",
      "State-sponsored cyber espionage team seeking intelligence"
    ],
    "answer": 2,
    "explanation": "Cybercrime syndicates are organized crime groups. They are highly structured, capable, and driven by financial profit (extortion). They are not ideologically motivated or script kiddies.",
    "id": 32
  },
  {
    "section": "S3",
    "question": "An attacker sends a spear-phishing email containing a malicious PDF attachment to a high-profile corporate target. What does the email represent in this scenario?",
    "options": [
      "Threat Vector / Attack Vector",
      "Vulnerability",
      "Attack Surface",
      "Indicator of Compromise"
    ],
    "answer": 0,
    "explanation": "An attack vector (or threat vector) is the path or route used by an attacker to gain access to a target system or network. Sending a spear-phishing email is a classic delivery vector.",
    "id": 33
  },
  {
    "section": "S3",
    "question": "An organization wants to share threat intelligence with industry peers using a standardized, machine-readable format. Which protocol should they use?",
    "options": [
      "STIX / TAXII",
      "JSON-LD",
      "SAML 2.0",
      "Syslog over TLS"
    ],
    "answer": 0,
    "explanation": "Structured Threat Information eXpression (STIX) defines the format for threat intel, and Trusted Automated eXchange of Intelligence Information (TAXII) is the protocol used to exchange it over HTTPS. SAML is for federation; Syslog is for logging.",
    "id": 34
  },
  {
    "section": "S3",
    "question": "An attacker intercepts a company's software update distribution and injects a backdoor into the update package before it is signed. Which attack vector is being exploited?",
    "options": [
      "Direct Access",
      "Wireless Vector",
      "Supply Chain",
      "Social Engineering"
    ],
    "answer": 2,
    "explanation": "A supply chain attack targets vulnerable points in the supplier network, such as third-party software updates, to compromise the downstream users of the software.",
    "id": 35
  },
  {
    "section": "S3",
    "question": "A security analyst wants to classify a threat actor based on their ability to develop custom zero-day exploits and maintain stealthy persistence in a network for years. Which attribute is the analyst evaluating?",
    "options": [
      "Motivation",
      "Capability / Sophistication",
      "Funding Source",
      "Attack Vector"
    ],
    "answer": 1,
    "explanation": "Capability (or sophistication) refers to the technical skills, tools, and custom exploits a threat actor has at their disposal to execute complex attacks.",
    "id": 36
  },
  {
    "section": "S3",
    "question": "An attacker drops multiple USB drives pre-loaded with malware in a corporate parking lot, hoping that an employee will pick one up and plug it into a workstation. What type of attack vector is this?",
    "options": [
      "Physical / Removable Media",
      "Wireless Vector",
      "Supply Chain",
      "Cloud Services"
    ],
    "answer": 0,
    "explanation": "A USB drop is a physical delivery vector that exploits human curiosity and physical access to introduce malware via removable media.",
    "id": 37
  },
  {
    "section": "S3",
    "question": "A company's web server is flooded with millions of HTTP requests originating from thousands of compromised IoT devices globally, making it inaccessible to legitimate users. What type of threat actor resource is being utilized, and what is the attack called?",
    "options": [
      "A honeynet; SQL injection",
      "A botnet; Distributed Denial of Service (DDoS)",
      "Shadow IT; Man-in-the-Middle (MitM)",
      "An APT; Ransomware campaign"
    ],
    "answer": 1,
    "explanation": "A botnet is a network of compromised devices (zombies) controlled by a central Command and Control (C2) server. It is commonly used to execute Distributed Denial of Service (DDoS) attacks.",
    "id": 38
  },
  {
    "section": "S3",
    "question": "An intelligence analyst reads a report about a threat group that receives direct funding and directives from a foreign intelligence service. What type of threat actor is this?",
    "options": [
      "Hacktivist group",
      "Nation-State Actor",
      "Competitor",
      "Script Kiddie"
    ],
    "answer": 1,
    "explanation": "Nation-state actors are state-sponsored threat groups that execute cyber operations to support geopolitical, intelligence, or military goals, backed by government funding.",
    "id": 39
  },
  {
    "section": "S3",
    "question": "A security team wants to simulate realistic attacks to test their defenses. They hire a certified third party to act as the active adversary. What is this team called?",
    "options": [
      "Blue Team",
      "Red Team",
      "White Team",
      "Purple Team"
    ],
    "answer": 1,
    "explanation": "The Red Team represents the active adversary in a simulated attack, testing the defensive security controls and response capabilities of the Blue Team.",
    "id": 40
  },
  {
    "id": 41,
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
    "id": 42,
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
    "id": 43,
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
    "id": 44,
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
    "section": "S4",
    "question": "A data center manager wants to prevent tailgating in the main server room. Which physical security control is the BEST choice for this purpose?",
    "options": [
      "Bollards",
      "Access Control Vestibule (Mantrap)",
      "CCTV PTZ cameras",
      "Faraday Cages"
    ],
    "answer": 1,
    "explanation": "An Access Control Vestibule (or mantrap) features two interlocking doors where the second door cannot open until the first door closes and the user is verified, directly preventing tailgating. Bollards block vehicles, cameras detect but do not prevent, and Faraday cages shield radio signals.",
    "id": 45
  },
  {
    "section": "S4",
    "question": "A security engineer is designing a new server room. They need to protect the servers from electromagnetic interference (EMI) and prevent wireless signals from leaking outside the room. What should they install?",
    "options": [
      "Access Control Vestibule",
      "Faraday Cage",
      "PTZ Cameras",
      "Seismic Sensors"
    ],
    "answer": 1,
    "explanation": "A Faraday cage is a metallic enclosure that blocks external electromagnetic fields and prevents internal electromagnetic signals (like Wi-Fi or cellular) from leaking out, protecting against eavesdropping and EMI.",
    "id": 46
  },
  {
    "section": "S4",
    "question": "A company wants to prevent unauthorized access to sensitive paper documents that are discarded in trash bins outside the office. What physical security control should they enforce?",
    "options": [
      "Access Control Vestibules",
      "Document shredding and locked shred bins",
      "PTZ camera surveillance",
      "Passive infrared sensors"
    ],
    "answer": 1,
    "explanation": "Document shredding and using locked shred bins prevents attackers from gathering intelligence via dumpster diving. Cameras and sensors might detect the trash access but do not prevent the readability of discarded files.",
    "id": 47
  },
  {
    "section": "S4",
    "question": "An architect is designing a data center and wants to optimize cooling efficiency for rows of server racks. Which design layout should they implement?",
    "options": [
      "Hot and cold aisles",
      "Faraday cage containment",
      "Access control vestibules",
      "Seismic dampening zones"
    ],
    "answer": 0,
    "explanation": "Hot and cold aisles separate the cold intake air from the hot exhaust air of servers, reducing cooling energy costs and optimizing airflow in a data center.",
    "id": 48
  },
  {
    "section": "S4",
    "question": "A security manager wants to secure a facility at night. They want a physical control that acts as both a deterrent to intruders and ensures that security cameras can capture clear images of the perimeter. Which control is the BEST choice?",
    "options": [
      "PTZ cameras",
      "Security Lighting (Illumination)",
      "Bollards",
      "Tamper sensors"
    ],
    "answer": 1,
    "explanation": "Security lighting (illumination) acts as a physical deterrent by increasing the likelihood of an intruder being seen and provides the lighting necessary for security cameras to capture high-quality footage.",
    "id": 49
  },
  {
    "section": "S4",
    "question": "A security guard monitors a facility. They notice that the surveillance camera in the lobby is fixed and cannot be adjusted. They want to replace it with a camera that can be remotely controlled to follow an intruder's path. What type of camera should they request?",
    "options": [
      "Fixed Dome Camera",
      "Pan-Tilt-Zoom (PTZ) Camera",
      "Lidar Scanner",
      "Infrared Sensor"
    ],
    "answer": 1,
    "explanation": "A Pan-Tilt-Zoom (PTZ) camera allows security operators to remotely control the camera's direction, vertical angle, and focal length to track movement.",
    "id": 50
  },
  {
    "section": "S4",
    "question": "A data center needs a fire suppression system for its server room. Water-based sprinklers would destroy the electronic equipment. What type of fire suppression system is the BEST choice?",
    "options": [
      "Class A Water Sprinklers",
      "Gaseous / Clean Agent suppression system (e.g., FM-200)",
      "Dry-pipe water sprinkler system",
      "Chemical foam extinguishers"
    ],
    "answer": 1,
    "explanation": "Gaseous or clean agent suppression systems (like FM-200 or carbon dioxide) extinguish fires by removing oxygen or heat without depositing water or chemical residues that would ruin server circuitry.",
    "id": 51
  },
  {
    "section": "S4",
    "question": "A security manager wants to detect intruders who step onto a secure outdoor grassy area at night. Which sensor type is BEST suited for this scenario?",
    "options": [
      "Passive Infrared (PIR) / Motion sensors",
      "Seismic sensors",
      "Magnetic contact sensors",
      "HVAC pressure sensors"
    ],
    "answer": 0,
    "explanation": "Passive Infrared (PIR) sensors detect changes in infrared radiation (heat signatures) caused by moving humans, making them highly effective for detecting outdoor intruders at night.",
    "id": 52
  },
  {
    "section": "S4",
    "question": "An office building wants to secure laptops left on desks overnight from quick opportunist theft by cleaners or visitors. What physical control is the BEST fit?",
    "options": [
      "Access Control Vestibules",
      "Cable locks anchored to desks",
      "PTZ cameras",
      "Bollards"
    ],
    "answer": 1,
    "explanation": "Cable locks physically secure laptops to desks, preventing opportunist theft. Vestibules control entry to the building, cameras detect theft but don't prevent it, and bollards block vehicles.",
    "id": 53
  },
  {
    "section": "S4",
    "question": "A company wants to protect a critical remote cellular tower facility. They want to ensure that any physical attempt to open the outer enclosure door is immediately reported. Which sensor should they install on the door?",
    "options": [
      "Seismic sensor",
      "Tamper sensor / Magnetic contact sensor",
      "Ultrasonic sensor",
      "Barometric sensor"
    ],
    "answer": 1,
    "explanation": "A magnetic contact sensor (tamper sensor) detects when a door or cabinet is opened by breaking the magnetic circuit, triggering an immediate alert.",
    "id": 54
  },
  {
    "section": "S4",
    "question": "A bank vault needs to detect attempts to drill through the concrete walls. Which type of sensor is the BEST choice for this threat?",
    "options": [
      "Passive Infrared (PIR) sensor",
      "Seismic / Vibration sensor",
      "Photoelectric beam sensor",
      "Ultrasonic motion detector"
    ],
    "answer": 1,
    "explanation": "Seismic or vibration sensors detect low-frequency vibrations caused by drilling, hammering, or sawing through structural walls, making them ideal for vault security.",
    "id": 55
  },
  {
    "section": "S4",
    "question": "A security team wants to ensure that if a power outage occurs, the electronic door locks in the emergency exit routes automatically unlock so that employees can escape safely. What configuration should these door locks have?",
    "options": [
      "Fail-secure",
      "Fail-safe",
      "Implicit Allow",
      "Biometric bypass"
    ],
    "answer": 1,
    "explanation": "Fail-safe locks automatically unlock when power is lost, prioritizing human safety. Fail-secure locks remain locked when power is lost, prioritizing assets.",
    "id": 56
  },
  {
    "section": "S4",
    "question": "A corporate headquarters uses physical security guards. What is the primary advantage of a human guard over automated physical security controls?",
    "options": [
      "Guards have lower long-term costs.",
      "Guards provide active response and real-time decision-making.",
      "Guards are immune to social engineering.",
      "Guards do not require training."
    ],
    "answer": 1,
    "explanation": "Guards provide active response, adaptability, and real-time decision-making during an incident, which automated sensors and cameras cannot perform.",
    "id": 57
  },
  {
    "section": "S4",
    "question": "A security analyst wants to verify who entered a secure facility at a specific time. Which physical security control provides the BEST detective evidence?",
    "options": [
      "An access control vestibule",
      "Access logs integrated with CCTV video footage",
      "A sign-in sheet at the front desk",
      "Passive infrared sensors"
    ],
    "answer": 1,
    "explanation": "Access logs provide a timestamped record of who swiped in, and CCTV footage provides visual verification that the cardholder was indeed the person who entered (and not someone using a stolen badge).",
    "id": 58
  },
  {
    "section": "S4",
    "question": "A facility manager wants to prevent cars from ramming into the front glass doors of its headquarters. What physical barrier must they install?",
    "options": [
      "Access Control Vestibules",
      "Bollards",
      "PTZ cameras",
      "Fences"
    ],
    "answer": 1,
    "explanation": "Bollards are heavy concrete or steel posts designed to block vehicle access and absorb vehicle impacts, protecting structures from ramming attacks.",
    "id": 59
  },
  {
    "section": "S4",
    "question": "A facility manager wants to ensure that critical servers continue running during a power grid failure. What combination of power controls should they implement?",
    "options": [
      "An Access Control Vestibule and PTZ cameras",
      "A UPS for immediate transition and a Diesel Generator for long-term power",
      "Fail-safe locks and active sensors",
      "Faraday cages and hot/cold aisles"
    ],
    "answer": 1,
    "explanation": "A UPS (Uninterruptible Power Supply) provides immediate battery power to keep servers running without interruption during a blackout, while a diesel generator takes a few minutes to start up but provides long-term power backup.",
    "id": 60
  },
  {
    "id": 61,
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
    "id": 62,
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
    "id": 63,
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
    "id": 64,
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
    "id": 65,
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
    "section": "S5",
    "question": "An attacker calls the IT helpdesk pretending to be a high-ranking executive who is locked out of their account before an important board meeting. The attacker uses a forceful tone and threatens to get the helpdesk agent fired if they do not reset the password immediately. Which motivational triggers is the attacker exploiting?",
    "options": [
      "Familiarity and Trust",
      "Intimidation and Urgency",
      "Consensus and Social Proof",
      "Scarcity and Likability"
    ],
    "answer": 1,
    "explanation": "The attacker uses intimidation (threat of getting the agent fired) and urgency (imminent board meeting) to bypass security procedures and force compliance.",
    "id": 66
  },
  {
    "section": "S5",
    "question": "An employee receives an SMS text message on their personal smartphone: 'Your corporate credit card has been suspended due to suspicious activity. Click here to reactivate it immediately.' What type of social engineering attack is this?",
    "options": [
      "Phishing",
      "Smishing",
      "Vishing",
      "Whaling"
    ],
    "answer": 1,
    "explanation": "Smishing is phishing executed via SMS text messages. Vishing is via voice phone calls, phishing is generic or email, and whaling targets executives.",
    "id": 67
  },
  {
    "section": "S5",
    "question": "A receptionist receives a phone call from someone claiming to be from the local utility company, stating they need to perform an urgent safety inspection of the building's gas pipes and asking for the building's layout. What type of social engineering attack is this?",
    "options": [
      "Spear Phishing",
      "Vishing / Pretexting",
      "Dumpster Diving",
      "Typosquatting"
    ],
    "answer": 1,
    "explanation": "This is a vishing (voice phishing) attack combined with pretexting (creating a false scenario or persona to obtain information).",
    "id": 68
  },
  {
    "section": "S5",
    "question": "An attacker searches through a company's trash bins outside the office building to find discarded documents containing network diagrams and employee names. What is this technique called?",
    "options": [
      "Shoulder Surfing",
      "Dumpster Diving",
      "Pretexting",
      "Watering Hole"
    ],
    "answer": 1,
    "explanation": "Dumpster diving is the practice of searching through trash to find information that can be used to plan an attack or compromise systems.",
    "id": 69
  },
  {
    "section": "S5",
    "question": "A user sits in a public cafe and enters their login credentials. An attacker sitting behind them watches the keyboard inputs to steal the password. What is this technique called?",
    "options": [
      "Dumpster Diving",
      "Shoulder Surfing",
      "Pretexting",
      "Typosquatting"
    ],
    "answer": 1,
    "explanation": "Shoulder surfing is the physical observation of a user's screen or keyboard inputs (often in public places) to steal passwords or sensitive data.",
    "id": 70
  },
  {
    "section": "S5",
    "question": "An attacker sets up a fake Wi-Fi hotspot in a hotel lobby with the name 'Hotel_Guest_Free' to capture the credentials of unsuspecting guests. What type of social engineering/network attack is this?",
    "options": [
      "Rogue Access Point / Evil Twin",
      "Watering Hole",
      "Spear Phishing",
      "Typosquatting"
    ],
    "answer": 0,
    "explanation": "An Evil Twin is a fraudulent Wi-Fi access point that mimics a legitimate, trusted network to trick users into connecting, allowing the attacker to steal traffic.",
    "id": 71
  },
  {
    "section": "S5",
    "question": "A security team wants to train employees to recognize social engineering. What is the BEST way to mitigate the risk of successful phishing attacks?",
    "options": [
      "Deploying full disk encryption",
      "Security awareness training and simulated phishing campaigns",
      "Setting up active-active RAID clusters",
      "Configuring PTZ cameras"
    ],
    "answer": 1,
    "explanation": "Security awareness training and simulated phishing campaigns are the most effective human controls to teach employees how to spot and report social engineering attacks.",
    "id": 72
  },
  {
    "section": "S5",
    "question": "An attacker creates a fake LinkedIn profile of a recruiter. They contact software engineers at a competitor company, building rapport over several weeks before sending a malicious PDF file labeled 'Job_Description.pdf'. What technique is the attacker using?",
    "options": [
      "Spam campaign",
      "Pretexting and Spear Phishing",
      "Watering Hole attack",
      "Smishing"
    ],
    "answer": 1,
    "explanation": "The attacker uses pretexting (creating a fake recruiter persona) and targeted spear phishing (sending a malicious file tailored to a specific job role) to compromise the engineers.",
    "id": 73
  },
  {
    "section": "S5",
    "question": "An employee receives an email stating: 'All your colleagues have already completed the mandatory security survey. Click here to complete yours.' The email uses the trigger of showing that everyone else has done it. Which motivational trigger is being exploited?",
    "options": [
      "Authority",
      "Consensus / Social Proof",
      "Scarcity",
      "Intimidation"
    ],
    "answer": 1,
    "explanation": "Consensus (or Social Proof) is an influence trigger where people look to the behavior of others to determine their own actions. Stating that 'all colleagues have completed it' exploits this trigger.",
    "id": 74
  },
  {
    "section": "S5",
    "question": "An attacker impersonates a building inspector and walks into a corporate office holding a large box. A polite employee holds the security door open for them, allowing them to enter the secure area without badging in. What social engineering tactic did the attacker exploit?",
    "options": [
      "Piggybacking",
      "Tailgating",
      "Shoulder Surfing",
      "Watering Hole"
    ],
    "answer": 1,
    "explanation": "Tailgating occurs when an unauthorized person closely follows an authorized person through a door without their consent or knowledge. (If the employee knew the person was unauthorized but let them in anyway out of politeness, it is piggybacking, but in most exam contexts, tailgating is the default term for following behind).",
    "id": 75
  },
  {
    "section": "S5",
    "question": "A user receives an email that looks like an invoice from a popular shipping service they frequently use. The email says: 'Your package could not be delivered. Click here to update your address.' What type of social engineering attack is this?",
    "options": [
      "Vishing",
      "Brand Impersonation / Phishing",
      "Dumpster Diving",
      "Whaling"
    ],
    "answer": 1,
    "explanation": "This is brand impersonation, a common phishing tactic where the attacker mimics a trusted, recognizable brand to trick the victim into sharing information.",
    "id": 76
  },
  {
    "section": "S5",
    "question": "An attacker calls an employee pretending to be a colleague from the IT department. The attacker asks the employee to verify their password so they can install a system update. What is the BEST way for the employee to verify the caller's identity?",
    "options": [
      "Verify the caller's phone number on the caller ID display.",
      "Hang up and call the IT helpdesk back using the official internal directory number.",
      "Ask the caller to provide their employee ID number.",
      "Trust the caller if they sound professional and know the manager's name."
    ],
    "answer": 1,
    "explanation": "Hanging up and calling back through verified internal channels (the directory) is the only reliable way to authenticate a caller claiming to be an internal support agent.",
    "id": 77
  },
  {
    "section": "S5",
    "question": "A whaling attack is specifically designed to target which of the following individuals?",
    "options": [
      "Entry-level IT helpdesk staff",
      "Chief Executive Officer (CEO) or high-profile executives",
      "System administrators",
      "Customer service representatives"
    ],
    "answer": 1,
    "explanation": "Whaling is a specific type of spear phishing targeted at high-profile executives (like the CEO or CFO) who have access to highly sensitive business information or financial approvals.",
    "id": 78
  },
  {
    "section": "S5",
    "question": "An attacker creates a website that mirrors a popular social media login page. They send an email offering a 'limited-time free subscription' if users log in within the next 5 minutes. Which combination of motivational triggers is the attacker exploiting?",
    "options": [
      "Familiarity and Trust",
      "Scarcity and Urgency",
      "Consensus and Authority",
      "Intimidation and Likability"
    ],
    "answer": 1,
    "explanation": "Offering a 'limited-time' deal (scarcity) and requiring action within '5 minutes' (urgency) forces the victim to act quickly without verifying the email's legitimacy.",
    "id": 79
  },
  {
    "section": "S5",
    "question": "An organization wants to prevent social engineering attacks that exploit trust in external emails. What email authentication protocols should they implement to verify the sender's domain?",
    "options": [
      "SSL, TLS, and HTTPS",
      "SPF, DKIM, and DMARC",
      "SAML, OIDC, and OAuth",
      "IPsec, L2TP, and PPTP"
    ],
    "answer": 1,
    "explanation": "Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication, Reporting, and Conformance (DMARC) are DNS records that verify the authenticity of an email's sending domain, preventing spoofing.",
    "id": 80
  },
  {
    "id": 81,
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
    "id": 82,
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
    "id": 83,
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
    "id": 84,
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
    "id": 85,
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
    "id": 86,
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
    "section": "S6",
    "question": "A security analyst detects that a server is running a process that is consuming 99% CPU. Upon investigation, they find that the server is communicating with an external pool and calculating hashes for cryptocurrency without authorization. What type of malware is this?",
    "options": [
      "Ransomware",
      "Cryptojacking / Crypto-miner",
      "Rootkit",
      "Worm"
    ],
    "answer": 1,
    "explanation": "Cryptojacking (or unauthorized crypto-mining) uses a system's computational resources to mine cryptocurrency without the owner's consent, leading to high CPU usage.",
    "id": 87
  },
  {
    "section": "S6",
    "question": "A user downloads a utility that promises to speed up their PC. The utility runs normally, but in the background, it opens a port allowing remote attackers to run commands. What type of malware is this?",
    "options": [
      "Worm",
      "Trojan",
      "Logic Bomb",
      "Adware"
    ],
    "answer": 1,
    "explanation": "A Trojan masquerades as legitimate software but contains a hidden, malicious payload (in this case, opening a backdoor for remote access).",
    "id": 88
  },
  {
    "section": "S6",
    "question": "An administrator finds that a system was compromised by malware that modified core operating system files and commands (like ls, ps) to hide its own processes from the task list and escape detection by traditional antivirus. What type of malware is this?",
    "options": [
      "Worm",
      "Rootkit",
      "Spyware",
      "Logic Bomb"
    ],
    "answer": 1,
    "explanation": "A rootkit is designed to hide its presence and the presence of other malware by modifying the operating system kernel or system binaries (like ls or ps) to bypass security tools.",
    "id": 89
  },
  {
    "section": "S6",
    "question": "A worm spreads rapidly across an enterprise network, compromising hundreds of Windows workstations in minutes by exploiting an SMB vulnerability without any user action. What is the primary characteristic that distinguishes a Worm from a Virus?",
    "options": [
      "A worm encrypts files; a virus steals passwords.",
      "A worm self-replicates and propagates across the network without user interaction; a virus requires a host file and human execution.",
      "A worm is a hardware Trojan; a virus is fileless.",
      "A worm runs in the kernel; a virus runs in user space."
    ],
    "answer": 1,
    "explanation": "A worm is self-replicating and spreads across network connections using vulnerabilities, requiring no human intervention. A virus requires a host file and human action (like opening an attachment) to execute and spread.",
    "id": 90
  },
  {
    "section": "S6",
    "question": "An analyst is investigating an incident where an attacker used a legitimate PowerShell script to download malware directly into the system's RAM without writing any files to the hard drive. What type of malware is this?",
    "options": [
      "Rootkit",
      "Fileless Malware",
      "Trojan Horse",
      "Logic Bomb"
    ],
    "answer": 1,
    "explanation": "Fileless malware runs entirely in system memory (RAM) and abuses legitimate administrative tools (like PowerShell or WMI) to avoid signature-based detection on the hard drive.",
    "id": 91
  },
  {
    "section": "S6",
    "question": "A security team discovers that an app downloaded from an unofficial app store has bypassed iOS restrictions to gain root-level permissions and access SMS messages. What mobile security vulnerability or process did this app exploit?",
    "options": [
      "Jailbreaking / Rooting",
      "MDM enrollment",
      "Bluejacking",
      "Faraday cage leakage"
    ],
    "answer": 0,
    "explanation": "Jailbreaking (iOS) or rooting (Android) bypasses the operating system's built-in security controls, giving applications full root access, which can be exploited by malware to access private user data.",
    "id": 92
  },
  {
    "section": "S6",
    "question": "A developer leaves a hidden account with a hardcoded password in an application's source code so they can easily access the system for debugging. What is this type of vulnerability called?",
    "options": [
      "Logic Bomb",
      "Backdoor",
      "Trojan",
      "Rootkit"
    ],
    "answer": 1,
    "explanation": "A backdoor is an undocumented method of gaining access to a system or application that bypasses normal authentication mechanisms.",
    "id": 93
  },
  {
    "section": "S6",
    "question": "An organization wants to protect its systems from malware. They want a solution that does not rely on static signatures but instead analyzes the behavior of processes to block zero-day threats. What technology should they deploy?",
    "options": [
      "Signature-based Antivirus",
      "Endpoint Detection and Response (EDR)",
      "Web Application Firewall (WAF)",
      "Active-passive RAID 5 clusters"
    ],
    "answer": 1,
    "explanation": "EDR (Endpoint Detection and Response) uses behavioral analysis, machine learning, and anomaly detection to identify and block zero-day malware that lacks static signatures.",
    "id": 94
  },
  {
    "section": "S6",
    "question": "A user finds that their browser's homepage has been changed without their consent, and they are constantly redirected to advertisement websites with pop-up ads. What type of malware is this?",
    "options": [
      "Worm",
      "Adware / Spyware",
      "Logic Bomb",
      "Ransomware"
    ],
    "answer": 1,
    "explanation": "Adware is malware designed to display advertisements on a screen, often redirecting search results or hijacking the browser's homepage to generate revenue for the attacker.",
    "id": 95
  },
  {
    "section": "S6",
    "question": "A security analyst finds a file on a compromised system containing log data that records every keystroke the user made, including usernames, passwords, and personal messages. What tool or malware was used?",
    "options": [
      "Worm",
      "Keylogger",
      "Rootkit",
      "Cryptojacker"
    ],
    "answer": 1,
    "explanation": "A keylogger is a type of spyware that monitors and records every keystroke made by the user, saving them to a log file for exfiltration.",
    "id": 96
  },
  {
    "section": "S6",
    "question": "An attacker compromises a system and wants to ensure that their access survives a system reboot. What is the BEST term for this objective?",
    "options": [
      "Lateral Movement",
      "Persistence",
      "Privilege Escalation",
      "Obfuscation"
    ],
    "answer": 1,
    "explanation": "Persistence refers to techniques used by malware or attackers to maintain their access to a system across reboots, credential changes, or other interruptions.",
    "id": 97
  },
  {
    "section": "S6",
    "question": "A system administrator notices that multiple computers on the local network are scanning other local hosts on port 445 (SMB) and port 22 (SSH). What type of malware behavior is MOST likely occurring?",
    "options": [
      "Persistence",
      "Lateral Movement / Worm propagation",
      "Privilege Escalation",
      "Data Exfiltration"
    ],
    "answer": 1,
    "explanation": "Scanning other hosts on the local network (internal scanning) is a sign of lateral movement, where an attacker or worm attempts to spread from one compromised system to another.",
    "id": 98
  },
  {
    "section": "S6",
    "question": "An organization is hit by ransomware. The security team shuts down the local network segment. What is the FIRST step they should take to recover the encrypted systems without paying the ransom?",
    "options": [
      "Run a full vulnerability scan on all servers.",
      "Verify and restore files from offline, air-gapped backups.",
      "Decrypt the files using a commercial password cracker.",
      "Format all hard drives and rebuild the systems from scratch without data."
    ],
    "answer": 1,
    "explanation": "Restoring files from offline, air-gapped backups is the fastest and most secure way to recover from a ransomware attack without paying the ransom, assuming the backups have not been compromised.",
    "id": 99
  },
  {
    "section": "S6",
    "question": "A security researcher is analyzing a malware sample in an isolated virtual machine. They notice that the malware immediately shuts down when it detects a debugging tool or hypervisor. What is this malware technique called?",
    "options": [
      "Obfuscation",
      "Sandbox evasion / Anti-analysis",
      "Persistence",
      "Lateral Movement"
    ],
    "answer": 1,
    "explanation": "Sandbox evasion (or anti-analysis) occurs when malware detects it is running in a virtual machine or debugging environment and changes its behavior or halts execution to escape detection.",
    "id": 100
  },
  {
    "id": 101,
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
    "id": 102,
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
    "id": 103,
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
    "id": 104,
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
    "id": 105,
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
    "id": 106,
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
  },
  {
    "section": "S7",
    "question": "A company hires a third-party cloud provider to store and process customer data. In terms of data privacy roles, how is the cloud provider classified under regulations like GDPR?",
    "options": [
      "Data Controller",
      "Data Processor",
      "Data Owner",
      "Data Custodian"
    ],
    "answer": 1,
    "explanation": "The Data Controller determines the purposes and means of processing personal data. The Data Processor processes personal data on behalf of the controller. Here, the cloud provider is the Data Processor.",
    "id": 107
  },
  {
    "section": "S7",
    "question": "A security officer needs to encrypt a hard drive on a laptop to protect data if the laptop is physically stolen. Which encryption method is the BEST choice?",
    "options": [
      "File-level encryption",
      "Full Disk Encryption (FDE)",
      "Database column encryption",
      "IPsec VPN tunnel"
    ],
    "answer": 1,
    "explanation": "Full Disk Encryption (FDE) encrypts the entire storage volume, protecting all data (including the OS, temp files, and user files) at rest if the physical device is lost or stolen.",
    "id": 108
  },
  {
    "section": "S7",
    "question": "A security team wants to prevent employees from emailing sensitive customer credit card details outside the company. They install a gateway that inspects outgoing email traffic for patterns matching credit card numbers. What technology is this?",
    "options": [
      "Host-based Intrusion Detection (HIDS)",
      "Network-based Data Loss Prevention (NDLP)",
      "Virtual Private Network (VPN)",
      "Web Application Firewall (WAF)"
    ],
    "answer": 1,
    "explanation": "Network DLP (NDLP) monitors and inspects traffic in transit (like email or web uploads) leaving the corporate network to prevent unauthorized transfers of sensitive data.",
    "id": 109
  },
  {
    "section": "S7",
    "question": "An application needs to perform calculations on encrypted medical data without decrypting it, to ensure absolute confidentiality during processing. What type of encryption supports this capability?",
    "options": [
      "Symmetric block encryption",
      "Homomorphic Encryption",
      "Asymmetric RSA encryption",
      "Ephemeral key exchange"
    ],
    "answer": 1,
    "explanation": "Homomorphic encryption is a form of encryption that allows mathematical computations to be performed on ciphertext, yielding an encrypted result that, when decrypted, matches the result of operations performed on the plaintext.",
    "id": 110
  },
  {
    "section": "S7",
    "question": "An organization is classifying its data. They want to ensure that files containing trade secrets and patent designs are labeled with the highest level of protection. Which data classification category is the BEST fit?",
    "options": [
      "Public data",
      "Proprietary / Intellectual Property",
      "Regulated data",
      "Sovereign data"
    ],
    "answer": 1,
    "explanation": "Proprietary data (or Intellectual Property) includes trade secrets, patent designs, and source code that give a company its competitive advantage, requiring high protection.",
    "id": 111
  },
  {
    "section": "S7",
    "question": "A database administrator is asked to protect patient names in a test database. They replace all names with fake, randomly generated names that maintain the same format (e.g. 'John Doe' becomes 'Alice Smith'). What is this technique called?",
    "options": [
      "Hashing",
      "Pseudonymization / Data Masking",
      "Full Disk Encryption",
      "Steganography"
    ],
    "answer": 1,
    "explanation": "Pseudonymization replaces private identifiers with fake names (pseudonyms) to protect identity while keeping the data format intact for testing, a form of static data masking.",
    "id": 112
  },
  {
    "section": "S7",
    "question": "An organization needs to comply with regulations regarding where customer data is physically stored and processed. They must ensure that EU customer data does not leave servers located within the EU. What concept does this requirement address?",
    "options": [
      "Data Sovereignty / Data Residency",
      "Data Classification",
      "Data Loss Prevention",
      "Separation of Duties"
    ],
    "answer": 0,
    "explanation": "Data Sovereignty (or Data Residency) refers to the legal requirement that digital data is subject to the laws of the country in which it is physically located.",
    "id": 113
  },
  {
    "section": "S7",
    "question": "A user connects to their bank's website using HTTPS. Which state is the data in during this session, and what protocol secures it?",
    "options": [
      "Data at rest; secured using AES-256",
      "Data in transit; secured using TLS",
      "Data in use; secured using secure enclaves",
      "Data at rest; secured using SHA-256"
    ],
    "answer": 1,
    "explanation": "Data being sent over a network connection is in the 'Data in Transit' state. It is secured using transport-layer security protocols like TLS (HTTPS).",
    "id": 114
  },
  {
    "section": "S7",
    "question": "A security engineer is implementing security controls for a data server. They want to ensure that access to files is restricted based on the user's role and that all access is logged. Who is responsible for defining these access control policies and classifying the data?",
    "options": [
      "Data Custodian",
      "Data Owner / Data Controller",
      "Data Protection Officer",
      "Database Administrator"
    ],
    "answer": 1,
    "explanation": "The Data Owner (or Data Controller) is the business manager responsible for the data's classification, access policies, and legal compliance. The Data Custodian implements these controls.",
    "id": 115
  },
  {
    "section": "S7",
    "question": "A company wants to securely delete data from a hard drive before disposing of it. They want to ensure that the drive can still be used afterwards. Which method is the BEST choice?",
    "options": [
      "Degaussing",
      "Purging / Cryptographic Erase",
      "Incineration",
      "Formatting using OS tools"
    ],
    "answer": 1,
    "explanation": "Purging or cryptographic erasing sanitizes the drive, making data recovery impossible while leaving the physical storage media functional. Degaussing destroys magnetic drives, and incineration physically destroys the drive.",
    "id": 116
  },
  {
    "section": "S7",
    "question": "A health clinic stores patient records in a local database. The database administrator is responsible for maintaining the database backups, ensuring data integrity, and implementing the access controls defined by the clinic manager. What is the database administrator's role?",
    "options": [
      "Data Owner",
      "Data Custodian / Data Steward",
      "Data Processor",
      "Data Controller"
    ],
    "answer": 1,
    "explanation": "The Data Custodian is responsible for the technical implementation and maintenance of security controls, backups, and storage systems as defined by the Data Owner.",
    "id": 117
  },
  {
    "section": "S7",
    "question": "A security analyst discovers that sensitive PII is being displayed on a customer service screen. They want to configure the system to mask the first 12 digits of a 16-digit credit card number only when the screen is viewed by tier-1 support agents. What technique should they use?",
    "options": [
      "Static Data Masking",
      "Dynamic Data Masking",
      "Tokenization",
      "Full Disk Encryption"
    ],
    "answer": 1,
    "explanation": "Dynamic Data Masking (DDM) alters the data on the fly as it is requested from the database, depending on the user's role, without modifying the actual stored data.",
    "id": 118
  },
  {
    "section": "S7",
    "question": "A company's backup policy requires all tapes to be encrypted before they are shipped to an offsite vault. Which state of data does this policy protect?",
    "options": [
      "Data in Transit",
      "Data at Rest",
      "Data in Use",
      "Ephemeral Data"
    ],
    "answer": 1,
    "explanation": "Backup tapes store data statically. Therefore, encrypting the tapes protects 'Data at Rest', even though the tapes are physically moving (transit in the physical sense is not network transit).",
    "id": 119
  },
  {
    "section": "S7",
    "question": "An organization is implementing GDPR compliance. They must appoint an individual who is responsible for overseeing the organization's data protection strategy and ensuring compliance with GDPR requirements. What is this role called?",
    "options": [
      "Data Controller",
      "Data Protection Officer (DPO)",
      "Data Custodian",
      "Chief Information Security Officer (CISO)"
    ],
    "answer": 1,
    "explanation": "Under GDPR, the Data Protection Officer (DPO) is the designated role responsible for compliance oversight, data protection audits, and acting as a liaison with supervisory authorities.",
    "id": 120
  },
  {
    "id": 121,
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
    "id": 122,
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
    "id": 123,
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
    "id": 124,
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
    "id": 125,
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
    "id": 126,
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
    "id": 127,
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
    "id": 128,
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
    "id": 129,
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
    "id": 130,
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
    "section": "S8",
    "question": "A security architect is designing a security protocol for low-power IoT devices. They need an asymmetric algorithm that provides strong security but with smaller key sizes to minimize processing power and memory usage. Which algorithm is the BEST choice?",
    "options": [
      "RSA",
      "Elliptic Curve Cryptography (ECC)",
      "Advanced Encryption Standard (AES)",
      "Diffie-Hellman (DH)"
    ],
    "answer": 1,
    "explanation": "Elliptic Curve Cryptography (ECC) provides the same cryptographic strength as RSA but with much smaller key sizes (e.g., a 256-bit ECC key is equivalent to a 3072-bit RSA key), reducing CPU and memory overhead on low-power devices. AES is symmetric, not asymmetric.",
    "id": 131
  },
  {
    "section": "S8",
    "question": "A developer wants to securely store user passwords in a database. They want to use an algorithm that is computationally expensive to prevent brute-force and dictionary attacks, even if the database is leaked. Which of the following is the BEST algorithm to use?",
    "options": [
      "MD5",
      "bcrypt / Argon2",
      "AES-256",
      "SHA-256"
    ],
    "answer": 1,
    "explanation": "bcrypt and Argon2 are key-stretching algorithms specifically designed for password hashing. They introduce a work factor that makes them computationally slow, defending against brute-force and dictionary attacks. MD5 and SHA-256 are fast hash algorithms, and AES is symmetric encryption.",
    "id": 132
  },
  {
    "section": "S8",
    "question": "An administrator needs to secure data transmission on a network. They want to use a symmetric cipher mode that provides both confidentiality and data integrity/authenticity (authenticated encryption). Which mode should they choose?",
    "options": [
      "Electronic Codebook (ECB)",
      "Galois/Counter Mode (GCM)",
      "Cipher Block Chaining (CBC)",
      "Cipher Feedback (CFB)"
    ],
    "answer": 1,
    "explanation": "Galois/Counter Mode (GCM) is an authenticated encryption mode that provides both confidentiality (using symmetric encryption) and integrity/authenticity (using a message authentication code). ECB and CBC do not natively provide integrity/authenticity verification.",
    "id": 133
  },
  {
    "section": "S8",
    "question": "An attacker wants to find two different input files that produce the exact same MD5 hash value. What type of cryptographic attack is the attacker attempting?",
    "options": [
      "Replay attack",
      "Collision attack",
      "Downgrade attack",
      "Man-in-the-Middle (MitM) attack"
    ],
    "answer": 1,
    "explanation": "A collision attack occurs when an attacker finds two distinct inputs that produce the exact same hash output. Hash functions should be collision-resistant.",
    "id": 134
  },
  {
    "section": "S8",
    "question": "A security specialist wants to hide a secret text file inside a digital photo of a cat so that it is not visible to someone viewing the image. What technique is this?",
    "options": [
      "Hashing",
      "Steganography",
      "Homomorphic Encryption",
      "Tokenization"
    ],
    "answer": 1,
    "explanation": "Steganography is the practice of concealing a message, file, or image within another file, message, or image (like hiding data in the least significant bits of an image file).",
    "id": 135
  },
  {
    "section": "S8",
    "question": "A company needs to request a new digital certificate from a Certificate Authority (CA) for their web server. What is the FIRST step the company's administrator must perform?",
    "options": [
      "Install the certificate on the web server.",
      "Generate a public/private key pair and create a Certificate Signing Request (CSR).",
      "Verify the CA's root certificate.",
      "Publish the CRL to the directory."
    ],
    "answer": 1,
    "explanation": "The first step in obtaining a digital certificate is to generate a public/private key pair on the local system and package the public key with company metadata into a Certificate Signing Request (CSR) to send to the CA.",
    "id": 136
  },
  {
    "section": "S8",
    "question": "A web browser needs to check if a website's digital certificate has been revoked in real time without downloading a large list of all revoked certificates. Which protocol is the BEST choice for this task?",
    "options": [
      "Certificate Revocation List (CRL)",
      "Online Certificate Status Protocol (OCSP)",
      "Certificate Signing Request (CSR)",
      "Simple Network Management Protocol (SNMP)"
    ],
    "answer": 1,
    "explanation": "OCSP (Online Certificate Status Protocol) allows a browser to query a CA's server in real time about the revocation status of a single certificate, saving bandwidth compared to downloading a full CRL.",
    "id": 137
  },
  {
    "section": "S8",
    "question": "An administrator wants to secure a website that has multiple subdomains (e.g., mail.company.com, blog.company.com, portal.company.com). Which type of certificate is the BEST choice to minimize management overhead?",
    "options": [
      "Self-Signed Certificate",
      "Wildcard Certificate",
      "Subject Alternative Name (SAN) Certificate",
      "Domain Validation (DV) Certificate"
    ],
    "answer": 1,
    "explanation": "A Wildcard Certificate secures a single parent domain and all its first-level subdomains (e.g., *.company.com), minimizing the management overhead of purchasing and installing separate certificates. SAN is for distinct domains, and DV is validation level.",
    "id": 138
  },
  {
    "section": "S8",
    "question": "A mobile device application needs to encrypt a continuous live stream of voice data. Which cipher type is BEST suited for encrypting data streams with minimal latency?",
    "options": [
      "Block cipher using CBC mode",
      "Stream cipher (e.g., ChaCha20)",
      "Asymmetric cipher (e.g., RSA)",
      "One-way hash function"
    ],
    "answer": 1,
    "explanation": "Stream ciphers encrypt data bit-by-bit or byte-by-byte, making them much faster and better suited for real-time streams (like audio or video) than block ciphers, which require buffering blocks.",
    "id": 139
  },
  {
    "section": "S8",
    "question": "A security team is reviewing a legacy application and notices that it encrypts database fields using AES in Electronic Codebook (ECB) mode. What is the primary security vulnerability of ECB mode?",
    "options": [
      "It is asymmetric and slow.",
      "Identical plaintext blocks encrypt to identical ciphertext blocks, revealing patterns.",
      "It does not support key sizes above 64 bits.",
      "It requires a hardware security module."
    ],
    "answer": 1,
    "explanation": "ECB mode encrypts each block of plaintext independently. As a result, identical plaintext blocks encrypt to identical ciphertext blocks, which can reveal structural patterns in the encrypted data.",
    "id": 140
  },
  {
    "id": 141,
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
    "id": 142,
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
    "id": 143,
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
    "id": 144,
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
    "id": 145,
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
    "section": "S9",
    "question": "An organization wants to define the maximum acceptable amount of data loss measured in time (e.g. hours or days) that they can tolerate during an outage. Which metric are they defining?",
    "options": [
      "Recovery Time Objective (RTO)",
      "Recovery Point Objective (RPO)",
      "Mean Time to Repair (MTTR)",
      "Mean Time Between Failures (MTBF)"
    ],
    "answer": 1,
    "explanation": "Recovery Point Objective (RPO) defines the maximum tolerable age of data that must be recovered from backups during an outage. RTO is about recovery time, MTTR is repair time, and MTBF is lifetime.",
    "id": 146
  },
  {
    "section": "S9",
    "question": "A company operates a critical web server. They analyze the risk of a SQL injection attack and decide to install a Web Application Firewall (WAF) to block such attacks. Which risk management strategy does this action represent?",
    "options": [
      "Risk Transference",
      "Risk Mitigation",
      "Risk Avoidance",
      "Risk Acceptance"
    ],
    "answer": 1,
    "explanation": "Installing controls (like a WAF) to reduce the likelihood or impact of a threat is risk mitigation. Transference uses insurance or outsourcing; avoidance eliminates the system; acceptance takes no action.",
    "id": 147
  },
  {
    "section": "S9",
    "question": "A retail store calculates that a major power failure occurs once every 5 years (ARO = 0.2). If a power failure occurs, the store will lose $100,000 (SLE). What is the Annualized Loss Expectancy (ALE) for this risk?",
    "options": [
      "500,000 USD",
      "20,000 USD",
      "100,000 USD",
      "5,000 USD"
    ],
    "answer": 1,
    "explanation": "ALE = SLE * ARO. In this case, ALE = $100,000 * 0.2 = $20,000 per year.",
    "id": 148
  },
  {
    "section": "S9",
    "question": "A company wants to purchase a cyber insurance policy to cover the financial costs of potential ransomware attacks. Which risk management strategy are they applying?",
    "options": [
      "Risk Mitigation",
      "Risk Transference",
      "Risk Avoidance",
      "Risk Acceptance"
    ],
    "answer": 1,
    "explanation": "Purchasing insurance transfers the financial risk of an incident to a third party (the insurance company), which is a risk transference strategy.",
    "id": 149
  },
  {
    "section": "S9",
    "question": "An organization's server room is located in a basement that has a high risk of flooding. The executive team decides to relocate the server room to the third floor of the building. Which risk management strategy does this represent?",
    "options": [
      "Risk Mitigation",
      "Risk Avoidance",
      "Risk Transference",
      "Risk Acceptance"
    ],
    "answer": 1,
    "explanation": "Relocating the server room out of the flood zone completely avoids the flood hazard, representing a risk avoidance strategy.",
    "id": 150
  },
  {
    "section": "S9",
    "question": "A security team is creating a document that lists all identified risks, their likelihood and impact, the risk owners, and the planned mitigation steps. What is this document called?",
    "options": [
      "Business Impact Analysis (BIA)",
      "Risk Register",
      "Standard Operating Procedure (SOP)",
      "Security Policy"
    ],
    "answer": 1,
    "explanation": "A Risk Register is a central repository that identifies, tracks, and documents risks and their corresponding owners, responses, and current statuses.",
    "id": 151
  },
  {
    "section": "S9",
    "question": "A manufacturer calculates that a robotic arm fails on average every 10,000 hours of operation. Which metric is being described?",
    "options": [
      "Mean Time to Failure (MTTF)",
      "Mean Time Between Failures (MTBF)",
      "Mean Time to Repair (MTTR)",
      "Recovery Point Objective (RPO)"
    ],
    "answer": 1,
    "explanation": "Mean Time Between Failures (MTBF) measures the average operating time between failures of a repairable system or component.",
    "id": 152
  },
  {
    "section": "S9",
    "question": "An organization determines that the cost of mitigating a minor software glitch is $5,000, while the maximum potential loss from the glitch is $500. The executive team decides to take no action and handle the cost if the glitch occurs. Which risk strategy is this?",
    "options": [
      "Risk Mitigation",
      "Risk Acceptance",
      "Risk Avoidance",
      "Risk Transference"
    ],
    "answer": 1,
    "explanation": "Risk acceptance is the decision to absorb a risk because the cost of mitigation outweighs the potential loss or impact.",
    "id": 153
  },
  {
    "section": "S9",
    "question": "A security officer conducts a risk assessment using a matrix that rates risk likelihood and impact as Low, Medium, or High. What type of risk analysis is this?",
    "options": [
      "Quantitative Risk Analysis",
      "Qualitative Risk Analysis",
      "Threat Modeling",
      "Vulnerability Assessment"
    ],
    "answer": 1,
    "explanation": "Qualitative risk analysis uses subjective and descriptive scales (like Low, Medium, High) to evaluate the likelihood and impact of risks, rather than absolute financial figures (quantitative).",
    "id": 154
  },
  {
    "section": "S9",
    "question": "A critical server crashes. It takes the IT team 3 hours to identify the issue, replace the failed hardware, and restore the operating system to working order. Which metric represents this 3-hour duration?",
    "options": [
      "Recovery Time Objective (RTO)",
      "Mean Time to Repair (MTTR)",
      "Mean Time Between Failures (MTBF)",
      "Maximum Tolerable Downtime (MTD)"
    ],
    "answer": 1,
    "explanation": "Mean Time to Repair (MTTR) is the average time required to troubleshoot, repair, and restore a failed system to operational service.",
    "id": 155
  },
  {
    "section": "S9",
    "question": "During a risk assessment, a security analyst wants to evaluate the level of risk that remains after all security controls have been implemented. What is this risk called?",
    "options": [
      "Inherent Risk",
      "Residual Risk",
      "Qualitative Risk",
      "Accepted Risk"
    ],
    "answer": 1,
    "explanation": "Residual risk is the risk that remains after active security controls and countermeasures have been implemented to mitigate the threat.",
    "id": 156
  },
  {
    "section": "S9",
    "question": "An organization defines their willingness to take on risk to achieve their business objectives. What is this concept called?",
    "options": [
      "Risk Tolerance",
      "Risk Appetite",
      "Risk Register",
      "Risk Exposure"
    ],
    "answer": 1,
    "explanation": "Risk appetite is the high-level description of the amount and type of risk that an organization is willing to pursue or accept in pursuit of its goals.",
    "id": 157
  },
  {
    "section": "S9",
    "question": "A security control like an antivirus scanner is deployed to identify and log malware infections on workstations. What control type is this?",
    "options": [
      "Preventative Control",
      "Detective Control",
      "Corrective Control",
      "Physical Control"
    ],
    "answer": 1,
    "explanation": "Detective controls identify and log security violations or anomalies after they occur (such as logging an infection). Preventative controls block them, and corrective controls fix them.",
    "id": 158
  },
  {
    "section": "S9",
    "question": "A company wants to assess its security posture. They hire a security firm to scan their network for open ports and known software vulnerabilities, but without active exploitation. What type of assessment is this?",
    "options": [
      "Penetration Test",
      "Vulnerability Scan",
      "Risk Audit",
      "BIA"
    ],
    "answer": 1,
    "explanation": "A vulnerability scan is a passive, automated assessment that identifies known vulnerabilities and open ports but does not actively exploit them (unlike a penetration test).",
    "id": 159
  },
  {
    "section": "S9",
    "question": "A risk manager wants to evaluate the impact of a disaster on the organization's business processes and identify the critical systems that must be recovered first. Which process should they conduct?",
    "options": [
      "Vulnerability Scan",
      "Business Impact Analysis (BIA)",
      "Threat Hunt",
      "Penetration Test"
    ],
    "answer": 1,
    "explanation": "A Business Impact Analysis (BIA) is a core component of business continuity planning that identifies business processes and evaluates the potential impact of their disruption, determining recovery order.",
    "id": 160
  },
  {
    "id": 161,
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
    "id": 162,
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
    "id": 163,
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
    "id": 164,
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
    "id": 165,
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
    "section": "S10",
    "question": "An organization is drafting a contract with a cloud service provider. They want to ensure that the vendor maintains a minimum of 99.99% system availability and define financial penalties if this target is not met. Which document should contain these details?",
    "options": [
      "Non-Disclosure Agreement (NDA)",
      "Service Level Agreement (SLA)",
      "Memorandum of Understanding (MOU)",
      "Interconnection Security Agreement (ISA)"
    ],
    "answer": 1,
    "explanation": "A Service Level Agreement (SLA) defines the specific service performance metrics (like uptime) and remedies or penalties if those metrics are missed.",
    "id": 166
  },
  {
    "section": "S10",
    "question": "A software company wants to share proprietary code with a third-party developer. Before sharing the code, they want a legally binding agreement that prevents the developer from sharing this information with competitors. What agreement should they sign?",
    "options": [
      "Memorandum of Understanding (MOU)",
      "Non-Disclosure Agreement (NDA)",
      "Service Level Agreement (SLA)",
      "Purchase Order (PO)"
    ],
    "answer": 1,
    "explanation": "A Non-Disclosure Agreement (NDA) is a legally binding contract that establishes a confidential relationship and prevents parties from sharing protected information.",
    "id": 167
  },
  {
    "section": "S10",
    "question": "A retail company is choosing a vendor to handle payroll processing. Before signing the contract, the company's security team reviews the vendor's independent audit reports, security policies, and financial health. What process is the security team conducting?",
    "options": [
      "Due Care",
      "Due Diligence",
      "Risk Acceptance",
      "Incident Response"
    ],
    "answer": 1,
    "explanation": "Due Diligence is the process of conducting a thorough investigation or review of a third-party vendor's security posture and risk profile before entering a business agreement.",
    "id": 168
  },
  {
    "section": "S10",
    "question": "An organization wants to integrate its network database with a partner organization's system. They want to draft a document that outlines the technical requirements, encryption standards, and connection details for the link. What is this document called?",
    "options": [
      "Service Level Agreement (SLA)",
      "Interconnection Security Agreement (ISA)",
      "Memorandum of Agreement (MOA)",
      "Master Services Agreement (MSA)"
    ],
    "answer": 1,
    "explanation": "An Interconnection Security Agreement (ISA) defines the technical requirements, security parameters, and encryption methods for establishing a direct connection between two networks.",
    "id": 169
  },
  {
    "section": "S10",
    "question": "A company wants to hire a third-party vendor to perform penetration testing. They want to sign a high-level agreement that governs all future projects, detailing payment terms and liability, so that individual projects can be scheduled quickly using smaller work statements. What is this high-level agreement called?",
    "options": [
      "Service Level Agreement (SLA)",
      "Master Services Agreement (MSA)",
      "Memorandum of Understanding (MOU)",
      "Interconnection Security Agreement (ISA)"
    ],
    "answer": 1,
    "explanation": "A Master Services Agreement (MSA) is a contract that governs all future transactions and statements of work between two parties, establishing baseline terms so projects can be scheduled without renegotiating terms.",
    "id": 170
  },
  {
    "section": "S10",
    "question": "A security team wants to ensure they have the legal authority to inspect a third-party vendor's security controls and physical facilities at any time. Which clause must they include in the vendor contract?",
    "options": [
      "Non-disclosure clause",
      "Right to Audit clause",
      "Indemnification clause",
      "SLA penalty clause"
    ],
    "answer": 1,
    "explanation": "A 'Right to Audit' clause in a vendor contract legally permits the client company to inspect the vendor's security controls, logs, and physical facilities to verify compliance.",
    "id": 171
  },
  {
    "section": "S10",
    "question": "A company discovers that a third-party SaaS vendor has suffered a data breach, exposing the company's customer data. The company's legal team reviews the contract to see who is liable. In this scenario, who ultimately retains responsibility for protecting the customer's data?",
    "options": [
      "The SaaS Vendor",
      "The Company (Data Controller)",
      "The Cloud Infrastructure Provider",
      "The individual customers"
    ],
    "answer": 1,
    "explanation": "Although the SaaS vendor suffered the breach, the company (as the Data Controller) ultimately retains legal responsibility and liability for protecting their customers' data under most privacy laws.",
    "id": 172
  },
  {
    "section": "S10",
    "question": "An organization is preparing to collaborate with a government agency on a joint research project. They want to write a non-binding document that expresses their mutual intent to work together and outlines their general roles. What is this document called?",
    "options": [
      "Interconnection Security Agreement (ISA)",
      "Memorandum of Understanding (MOU)",
      "Service Level Agreement (SLA)",
      "Master Services Agreement (MSA)"
    ],
    "answer": 1,
    "explanation": "A Memorandum of Understanding (MOU) is a non-binding agreement that defines the mutual goals, roles, and intents of two or more parties collaborating on a project.",
    "id": 173
  },
  {
    "section": "S10",
    "question": "A manufacturing company uses a third-party component in its assembly line. They discover that the component contains a hardware-based backdoor inserted during the manufacturing process in a foreign country. What type of risk does this scenario represent?",
    "options": [
      "Physical Threat",
      "Supply Chain Risk",
      "Shadow IT",
      "Insider Threat"
    ],
    "answer": 1,
    "explanation": "Supply chain risk refers to the potential vulnerability introduced by third-party suppliers, components, software, or logistics during the lifecycle of a product.",
    "id": 174
  },
  {
    "section": "S10",
    "question": "A company's security policy requires all vendors with access to the corporate network to undergo annual security assessments. A small vendor complains that they do not have the staff to complete a lengthy questionnaire. What should the company's security team do?",
    "options": [
      "Waive the requirement for the vendor to maintain the relationship.",
      "Require the vendor to provide an independent SOC 2 Type II report.",
      "Instruct the vendor to use a self-signed digital certificate.",
      "Run a penetration test against the vendor's home network without permission."
    ],
    "answer": 1,
    "explanation": "An independent SOC 2 Type II report is a standard auditing document that verifies a service organization's controls, serving as an acceptable compensating assessment that does not require the vendor to fill out custom questionnaires.",
    "id": 175
  },
  {
    "section": "S10",
    "question": "An enterprise wants to ensure that a software vendor will support their product for the next 5 years, even if the vendor goes out of business or halts operations. What arrangement should they request?",
    "options": [
      "Service Level Agreement (SLA)",
      "Software Escrow Agreement",
      "Non-Disclosure Agreement (NDA)",
      "Interconnection Security Agreement (ISA)"
    ],
    "answer": 1,
    "explanation": "A Software Escrow Agreement is an arrangement where the software source code is held by a neutral third party (escrow agent) and released to the client if the vendor goes out of business or fails to support the product.",
    "id": 176
  },
  {
    "section": "S10",
    "question": "A database administrator downloads a popular open-source software library from a public repository. They later discover that the library contains malicious code inserted by an unauthorized contributor. What type of attack is this?",
    "options": [
      "SQL Injection",
      "Software Supply Chain Attack",
      "Vishing",
      "Evil Twin"
    ],
    "answer": 1,
    "explanation": "A software supply chain attack occurs when an attacker compromises a third-party dependency, package, or library, distributing malware to all downstream developers who import it.",
    "id": 177
  },
  {
    "section": "S10",
    "question": "A company is offboarding a third-party marketing vendor who had temporary administrative access. What is the MOST critical security action they must take FIRST?",
    "options": [
      "Perform a vulnerability scan on the web servers.",
      "Revoke the vendor's network access and disable all associated accounts.",
      "Update the corporate password policy.",
      "Publish a new press release about the offboarding."
    ],
    "answer": 1,
    "explanation": "The first and most critical action when offboarding any employee or third-party vendor is to revoke their network access and disable accounts to prevent unauthorized access or post-termination retaliation.",
    "id": 178
  },
  {
    "section": "S10",
    "question": "An organization wants to assess the security posture of a potential cloud vendor. They want to check if the vendor complies with security best practices for cloud environments. Which industry-standard questionnaire is BEST suited for this assessment?",
    "options": [
      "PCI-DSS audit",
      "CAIQ (Consensus Assessments Initiative Questionnaire)",
      "CSR (Certificate Signing Request)",
      "BIA (Business Impact Analysis)"
    ],
    "answer": 1,
    "explanation": "The CAIQ (Consensus Assessments Initiative Questionnaire) from the Cloud Security Alliance (CSA) is an industry-standard template used to assess the security of cloud providers.",
    "id": 179
  },
  {
    "section": "S10",
    "question": "A company's procurement team is buying new routers. They want to verify that the routers were not tampered with or replaced with counterfeit hardware during shipping. What supply chain security process should they implement?",
    "options": [
      "Dynamic Data Masking",
      "Chain of Custody tracking and tamper-evident packaging",
      "Symmetric key exchange",
      "Vulnerability Scanning"
    ],
    "answer": 1,
    "explanation": "Chain of custody tracking and using tamper-evident seals on packaging ensure that physical hardware is monitored from the factory to the client, preventing transit tampering.",
    "id": 180
  },
  {
    "id": 181,
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
    "id": 182,
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
    "id": 183,
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
    "id": 184,
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
    "id": 185,
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
    "section": "S11",
    "question": "A security team writes a document that recommends, but does not mandate, using a specific folder structure to organize files on a shared drive. What type of governance document is this?",
    "options": [
      "Standard",
      "Guideline",
      "Procedure",
      "Policy"
    ],
    "answer": 1,
    "explanation": "Guidelines are recommended practices or suggestions that are non-mandatory. Standards, procedures, and policies are mandatory.",
    "id": 186
  },
  {
    "section": "S11",
    "question": "An employee in a hospital accidentally discloses a patient's medical records to an unauthorized individual. Which regulation has the hospital violated, and what agency enforces it?",
    "options": [
      "GDPR; European Union data protection authorities",
      "HIPAA; US Department of Health and Human Services (HHS)",
      "PCI-DSS; credit card merchant association",
      "SOX; Securities and Exchange Commission (SEC)"
    ],
    "answer": 1,
    "explanation": "The Health Insurance Portability and Accountability Act (HIPAA) regulates the protection of patient medical records (PHI) and is enforced in the US by the Department of Health and Human Services (HHS).",
    "id": 187
  },
  {
    "section": "S11",
    "question": "A publicly traded US company must ensure the integrity of its financial reporting and prevent internal fraudulent activities. Which regulation is the company legally obligated to comply with?",
    "options": [
      "HIPAA",
      "Sarbanes-Oxley Act (SOX)",
      "GDPR",
      "PCI-DSS"
    ],
    "answer": 1,
    "explanation": "The Sarbanes-Oxley Act (SOX) mandates strict financial reporting and auditing controls for US publicly traded companies to prevent accounting fraud.",
    "id": 188
  },
  {
    "section": "S11",
    "question": "A security analyst is drafting a step-by-step checklist that an administrator must follow to decommission a server safely. What type of document is this?",
    "options": [
      "Guideline",
      "Procedure (SOP)",
      "Standard",
      "Policy"
    ],
    "answer": 1,
    "explanation": "A procedure (or Standard Operating Procedure) is a detailed, step-by-step document that explains how to perform a specific task.",
    "id": 189
  },
  {
    "section": "S11",
    "question": "A security officer implements a high-level organizational mandate that requires all users to change their passwords every 90 days. Which governance component is the officer defining?",
    "options": [
      "Guideline",
      "Policy",
      "Procedure",
      "MOU"
    ],
    "answer": 1,
    "explanation": "A policy is a high-level statement of objectives, rules, and intentions established by senior management (e.g., password change requirements).",
    "id": 190
  },
  {
    "section": "S11",
    "question": "A university must protect the privacy of student educational records, such as transcripts and enrollment history. Which US federal regulation applies to these records?",
    "options": [
      "HIPAA",
      "FERPA (Family Educational Rights and Privacy Act)",
      "COPPA",
      "SOX"
    ],
    "answer": 1,
    "explanation": "FERPA is a US federal law that protects the privacy of student education records at all educational institutions receiving federal funding.",
    "id": 191
  },
  {
    "section": "S11",
    "question": "An organization operates under a model where local business units can define their own security configurations as long as they meet a set of baseline security standards established by corporate headquarters. What type of governance structure is this?",
    "options": [
      "Centralized Structure",
      "Federated Structure",
      "Decentralized Structure",
      "Collaborative Structure"
    ],
    "answer": 1,
    "explanation": "A federated governance structure balances central control (central baselines/policies) with local autonomy (local implementation rules).",
    "id": 192
  },
  {
    "section": "S11",
    "question": "An organization fails to comply with the European Union's General Data Protection Regulation (GDPR). What is the maximum administrative fine they could face for severe violations?",
    "options": [
      "Up to 1% of global annual turnover or 5 million euros",
      "Up to 4% of their global annual turnover or 20 million euros, whichever is higher",
      "A maximum of 100,000 USD per record",
      "Immediate closure of the company"
    ],
    "answer": 1,
    "explanation": "The GDPR has a maximum administrative penalty of up to 4% of a company's global annual turnover from the preceding financial year or 20 million euros, whichever is higher.",
    "id": 193
  },
  {
    "section": "S11",
    "question": "A security manager ensures that fire extinguishers are inspected monthly and emergency exits are clear, demonstrating that they are actively taking reasonable steps to protect the safety of employees. What legal concept does this demonstrate?",
    "options": [
      "Due Diligence",
      "Due Care",
      "Risk Transference",
      "Separation of Duties"
    ],
    "answer": 1,
    "explanation": "Due Care is the practice of implementing correct and active security measures to protect assets (doing the right thing). Due Diligence is the research and investigation (knowing the right thing to do).",
    "id": 194
  },
  {
    "section": "S11",
    "question": "A company wants to comply with a framework that provides a global standard for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). Which framework should they adopt?",
    "options": [
      "PCI-DSS v4.0",
      "ISO/IEC 27001",
      "HIPAA Title II",
      "NIST SP 800-53"
    ],
    "answer": 1,
    "explanation": "ISO/IEC 27001 is the international standard that specifies the requirements for establishing and maintaining an Information Security Management System (ISMS).",
    "id": 195
  },
  {
    "section": "S11",
    "question": "An e-commerce company wants to protect the privacy of children online. They must ensure they do not collect personal information from children under the age of 13 without verifiable parental consent. Which US regulation applies here?",
    "options": [
      "FERPA",
      "COPPA (Children's Online Privacy Protection Act)",
      "HIPAA",
      "GDPR"
    ],
    "answer": 1,
    "explanation": "COPPA is a US federal law designed to protect the privacy of children under the age of 13 by regulating how websites collect and manage their personal data.",
    "id": 196
  },
  {
    "section": "S11",
    "question": "A security team is auditing their company's compliance posture. They find that the company is storing unencrypted passwords in a database, which violates their internal password policy but does not violate any local laws. How should this issue be classified?",
    "options": [
      "Regulatory non-compliance",
      "Internal Policy violation",
      "Contractual breach",
      "Civil misdemeanor"
    ],
    "answer": 1,
    "explanation": "Stating that it violates company policy but not external laws makes it an internal policy violation rather than regulatory or contractual non-compliance.",
    "id": 197
  },
  {
    "section": "S11",
    "question": "Which of the following describes the primary difference between a Standard and a Guideline?",
    "options": [
      "Standards are guidelines; Guidelines are policies.",
      "Standards are mandatory; Guidelines are recommended best practices.",
      "Standards are defined by developers; Guidelines are defined by the CEO.",
      "Standards are physical controls; Guidelines are technical controls."
    ],
    "answer": 1,
    "explanation": "Standards are compulsory rules or technologies that must be followed. Guidelines are helpful suggestions or recommendations that are not mandatory.",
    "id": 198
  },
  {
    "section": "S11",
    "question": "A security auditor wants to verify that the IT staff is following the formal server patching procedure. Which evidence is the BEST choice for the auditor to review?",
    "options": [
      "The patching policy document signed by the CEO.",
      "System patch logs and ticket histories showing completion matching the procedure steps.",
      "A verbal confirmation from the system administrator.",
      "The security awareness training completion rate."
    ],
    "answer": 1,
    "explanation": "System logs and ticketing histories provide verifiable, objective evidence (audit trail) that the patching procedure was actively followed.",
    "id": 199
  },
  {
    "section": "S11",
    "question": "A company's board of directors wants to establish oversight for cybersecurity risks. They create a dedicated subcommittee led by the CISO to report on security metrics. What governance function are they establishing?",
    "options": [
      "Policy enforcement",
      "Security Governance / Oversight",
      "Incident Response",
      "Due Diligence auditing"
    ],
    "answer": 1,
    "explanation": "Security Governance provides the organizational framework, oversight, and decision-making structures to align cybersecurity with business strategy.",
    "id": 200
  },
  {
    "id": 201,
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
    "id": 202,
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
    "id": 203,
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
    "id": 204,
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
    "id": 205,
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
  },
  {
    "section": "S12",
    "question": "A company buys laptops for employees. The company owns the laptops, manages them completely, but allows employees to use them for personal tasks like social media and web browsing. What mobile deployment model is this?",
    "options": [
      "BYOD (Bring Your Own Device)",
      "COPE (Corporate Owned, Personally Enabled)",
      "CYOD (Choose Your Own Device)",
      "COBO (Corporate Owned, Business Only)"
    ],
    "answer": 1,
    "explanation": "COPE (Corporate Owned, Personally Enabled) is a deployment model where the organization purchases and manages the device but allows the employee to use it for personal tasks.",
    "id": 206
  },
  {
    "section": "S12",
    "question": "An organization wants to track all its IT assets, including servers, routers, and software licenses, in a centralized database that maps the dependencies between them. What is this database called?",
    "options": [
      "Asset Register",
      "Configuration Management Database (CMDB)",
      "Risk Register",
      "SIEM Log database"
    ],
    "answer": 1,
    "explanation": "A Configuration Management Database (CMDB) tracks configuration items (CIs) and maps the dependencies and relationships between physical and software assets.",
    "id": 207
  },
  {
    "section": "S12",
    "question": "A security manager is decommissioning a magnetic hard drive that contained highly sensitive military research. They want to neutralize the magnetic field of the drive to render the data unrecoverable before disposal. What sanitization method is this?",
    "options": [
      "Shredding",
      "Degaussing",
      "Formatting",
      "Overwriting"
    ],
    "answer": 1,
    "explanation": "Degaussing uses a powerful magnetic field to demagnetize a drive, neutralizing its magnetic alignment and rendering the data permanently unrecoverable on magnetic media. (It does not work on SSDs).",
    "id": 208
  },
  {
    "section": "S12",
    "question": "A company wants to distribute a new mobile application to employee smartphones. They want to manage only the corporate application and its data, without having control over the employees' personal apps or device settings. What management tool should they use?",
    "options": [
      "Mobile Device Management (MDM)",
      "Mobile Application Management (MAM)",
      "Configuration Management Database (CMDB)",
      "Host Intrusion Prevention System (HIPS)"
    ],
    "answer": 1,
    "explanation": "MAM (Mobile Application Management) controls and secures specific applications and their associated data on a device, which is ideal for securing corporate apps on personal BYOD devices without controlling the whole device (which would require MDM).",
    "id": 209
  },
  {
    "section": "S12",
    "question": "An administrator wants to make a change to a production router. What is the FIRST step they must take in the change management process?",
    "options": [
      "Submit the change to the Change Advisory Board (CAB) for approval.",
      "Create and submit a formal Request for Change (RFC).",
      "Perform regression testing in a staging environment.",
      "Draft the backout plan."
    ],
    "answer": 1,
    "explanation": "The change management process begins with documenting the change and submitting a formal Request for Change (RFC). Planning, testing, CAB review, and implementation follow this initial step.",
    "id": 210
  },
  {
    "section": "S12",
    "question": "A company issues smartphones to its field technicians. These devices are owned by the company and are configured to only run a specific work application. Employees are blocked from installing any other apps or using the phone for personal tasks. What deployment model is this?",
    "options": [
      "BYOD",
      "COBO (Corporate Owned, Business Only)",
      "COPE",
      "CYOD"
    ],
    "answer": 1,
    "explanation": "COBO (Corporate Owned, Business Only) is a model where the device is owned and managed by the company and its use is strictly restricted to business tasks, with personal use completely prohibited.",
    "id": 211
  },
  {
    "section": "S12",
    "question": "A security team conducts an audit of software licenses and discovers that several employees have installed unapproved software on their workstations. Which tool would have prevented this?",
    "options": [
      "Full Disk Encryption",
      "Software Whitelisting / Application Blocklisting",
      "Configuration Management Database (CMDB)",
      "MDM policy enforcement"
    ],
    "answer": 1,
    "explanation": "Software whitelisting (or application control/blocklisting) prevents unauthorized applications from executing on a system, ensuring only approved software can run.",
    "id": 212
  },
  {
    "section": "S12",
    "question": "An IT department attaches barcode stickers to all physical servers and switches to track their location, serial numbers, and owners. What are these stickers called?",
    "options": [
      "Asset Tags",
      "Tokens",
      "Degaussers",
      "Certificates"
    ],
    "answer": 0,
    "explanation": "Asset tags are physical labels (barcodes, serial numbers, or RFID chips) attached to hardware to track inventory, ownership, and locations.",
    "id": 213
  },
  {
    "section": "S12",
    "question": "An organization wants to purchase a new enterprise firewall. They write a document outlining their technical requirements and invite vendors to submit detailed proposals, including pricing and implementation plans. What is this document called?",
    "options": [
      "Purchase Order (PO)",
      "Request for Proposal (RFP)",
      "Request for Quote (RFQ)",
      "Service Level Agreement (SLA)"
    ],
    "answer": 1,
    "explanation": "A Request for Proposal (RFP) is a document that solicits proposals, bidding, and technical solutions from potential vendors for a product or service.",
    "id": 214
  },
  {
    "section": "S12",
    "question": "A system administrator applies a critical security patch to a production database server. After the patch is applied, the database application crashes. What type of testing should have been performed in a staging environment to detect this issue before deployment?",
    "options": [
      "Penetration testing",
      "Regression / Compatibility testing",
      "Vulnerability scanning",
      "Fuzz testing"
    ],
    "answer": 1,
    "explanation": "Regression testing ensures that new changes (like patches or updates) do not break existing functionality or introduce compatibility issues with existing applications.",
    "id": 215
  },
  {
    "section": "S12",
    "question": "An organization wants to purchase 100 new laptops. They send a document to vendors requesting price quotes for a specific laptop model. What is this document called?",
    "options": [
      "Request for Proposal (RFP)",
      "Request for Quote (RFQ)",
      "Purchase Order (PO)",
      "Master Services Agreement (MSA)"
    ],
    "answer": 1,
    "explanation": "A Request for Quote (RFQ) is a standard business process whose purpose is to invite suppliers to bid on specific products or services, focusing primarily on pricing.",
    "id": 216
  },
  {
    "section": "S12",
    "question": "A security analyst is reviewing the asset disposal log. They notice that 10 SSDs (Solid State Drives) were sanitized using degaussing. Why is this a concern?",
    "options": [
      "Degaussing is too expensive for SSDs.",
      "Degaussing is ineffective on solid-state media (SSDs) because they do not use magnetic storage.",
      "Degaussing leaves chemical residues on SSDs.",
      "Degaussing makes the SSDs too hot to touch."
    ],
    "answer": 1,
    "explanation": "SSDs store data on flash memory chips using electric charges, not magnetic fields. Therefore, degaussing (which demagnetizes magnetic media) is completely ineffective on SSDs. Wiping/purging or physical shredding must be used instead.",
    "id": 217
  },
  {
    "section": "S12",
    "question": "A company allows employees to choose a phone from a pre-approved list of devices. The company purchases and owns the phone, but the employee uses it. What mobile deployment model is this?",
    "options": [
      "BYOD",
      "Choose Your Own Device (CYOD)",
      "COPE",
      "COBO"
    ],
    "answer": 1,
    "explanation": "CYOD (Choose Your Own Device) allows employees to choose their preferred device from a pre-approved corporate list. The company purchases, owns, and manages it.",
    "id": 218
  },
  {
    "section": "S12",
    "question": "A network change is approved and scheduled for Sunday at 2:00 AM. After the change is implemented, the network team must run tests to verify that the network is fully functional. What is this phase of the change management process called?",
    "options": [
      "Request for Change",
      "Post-implementation verification",
      "Backout planning",
      "CAB approval"
    ],
    "answer": 1,
    "explanation": "Post-implementation verification (or post-change testing) is the phase where the team verifies that the change was successful and has not caused any unintended consequences.",
    "id": 219
  },
  {
    "section": "S12",
    "question": "A security administrator is decommissioning an old server. Which decommission step is the MOST critical to ensure the server cannot be powered on and accessed by unauthorized personnel in the storage room?",
    "options": [
      "Remove the asset tags from the server chassis.",
      "Sanitize all storage drives and remove network interfaces.",
      "Update the CMDB database status to 'retired'.",
      "Disable the server's backup schedule."
    ],
    "answer": 1,
    "explanation": "Sanitizing storage drives (data sanitization) ensures that no sensitive data remains on the decommissioned media, protecting it from data leakage if the hardware is stolen from storage or disposed of.",
    "id": 220
  },
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
    "explanation": "Least Privilege ensures that users are granted only the minimum permissions necessary to complete their job tasks. Allowing read-only access but preventing modification satisfies this principle.",
    "id": 221
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
    "explanation": "Defense in Depth is the practice of layering multiple security controls (physical, technical, and administrative) so that if one control fails, others are in place to block the threat.",
    "id": 222
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
    "explanation": "Accounting involves tracking and logging user actions to provide accountability and a detailed audit trail of who performed what action and when.",
    "id": 223
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
    "explanation": "Data Masking (or obfuscation) replaces sensitive data with realistic but fake values for non-production environments like testing, without using a secure vault mapping (which would be Tokenization).",
    "id": 224
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
    "explanation": "The Policy Enforcement Point (PEP) is the component (such as a firewall, gateway, or agent) that actually executes the allow/deny decision made by the Policy Decision Point (PDP).",
    "id": 225
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
    "explanation": "Fail-safe locks automatically unlock when power is lost to prioritize human life safety. Fail-secure locks remain locked during power loss to protect assets.",
    "id": 226
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
    "explanation": "Hashing is the primary mechanism for verifying Integrity. Comparing current file hashes against a known baseline immediately reveals if the files have been tampered with or modified.",
    "id": 227
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
    "explanation": "A Technical Gap Analysis evaluates the current security posture of an organization, compares it against a desired standard or baseline, and identifies the gaps that need remediation.",
    "id": 228
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
    "explanation": "A Plan of Action and Milestones (POA&M) is a structured document that lists vulnerabilities/gaps, planned corrective actions, required resources, and target completion dates.",
    "id": 229
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
    "explanation": "Operational controls are security measures implemented and executed by people (rather than systems), such as daily operations, training, and configuration procedures.",
    "id": 230
  },
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
    "explanation": "Advanced Persistent Threats (APTs) are highly skilled, well-funded threat actors (often state-sponsored) characterized by their capability, stealth, and patience to maintain long-term access to a target.",
    "id": 231
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
    "explanation": "Defacing websites to protest political or ideological issues is a classic indicator of hacktivism, which is driven by political, environmental, or social motivations.",
    "id": 232
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
    "explanation": "Shadow IT is the use of unauthorized systems, software, or hardware within an organization without approval from the IT or security department, bypassing standard controls.",
    "id": 233
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
    "explanation": "Reducing the attack surface involves minimizing the sum of all potential entry points and vulnerabilities (closing ports, disabling unused software/protocols, restricting access).",
    "id": 234
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
    "explanation": "Open-Source Intelligence (OSINT) is the collection, analysis, and dissemination of information compiled from publicly available data sources.",
    "id": 235
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
    "explanation": "STIX (Structured Threat Information eXpression) defines the format for sharing threat intelligence, while TAXII (Trusted Automated eXchange of Intelligence Information) is the transport protocol.",
    "id": 236
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
    "explanation": "A False Flag Attack is deliberately designed to mislead investigators and attribute the incident to a different country or threat actor group.",
    "id": 237
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
    "explanation": "Threat Hunting is a proactive, analyst-led search for undetected threats or malware lurking within an organization's network that have bypassed automated security controls.",
    "id": 238
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
    "explanation": "A Negligent Insider is an employee who unintentionally causes a security incident or compromises security policies due to careless behavior, lack of awareness, or bypassing guidelines.",
    "id": 239
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
    "explanation": "A Watering Hole Attack involves compromising a third-party website known to be frequented by targets from a specific organization or industry, aiming to infect them when they visit.",
    "id": 240
  },
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
    "explanation": "An Access Control Vestibule (or mantrap) uses a double-door system where the second door cannot open until the first door closes and authentication is validated, physically preventing tailgating.",
    "id": 241
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
    "explanation": "A Faraday Cage (or electromagnetic shielding) blocks electromagnetic fields, preventing wireless signals from leaking out of the room or external interference from entering.",
    "id": 242
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
    "explanation": "The Crossover Error Rate (CER) is the point where the False Acceptance Rate (FAR) equals the False Rejection Rate (FRR). A lower CER indicates a more accurate biometric system.",
    "id": 243
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
    "explanation": "Bollards are heavy concrete or steel posts designed to control or block vehicle access and absorb vehicle impacts, protecting buildings from ramming attacks.",
    "id": 244
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
    "explanation": "Hot and cold aisles layouts separate the cold air intakes of servers from their hot exhaust flows, optimizing cooling efficiency and server reliability.",
    "id": 245
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
    "explanation": "Security lighting (illumination) acts as an active deterrent by making intruders visible, and provides the light needed for security cameras to capture high-quality recordings.",
    "id": 246
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
    "explanation": "A Pan-Tilt-Zoom (PTZ) camera allows security operators to remotely control the direction, angle, and zoom of the lens to follow targets.",
    "id": 247
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
    "explanation": "Gaseous or clean agent suppression systems (like FM-200 or carbon dioxide) extinguish fires by removing oxygen or heat, without leaving residue or water that would destroy server electronics.",
    "id": 248
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
    "explanation": "Seismic or vibration sensors detect low-frequency structural vibrations caused by drilling, hammering, or sawing, making them ideal for vault structural monitoring.",
    "id": 249
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
    "explanation": "RFID credentials can be skimmed and cloned by attackers close to the card. Keeping cards in RFID-shielding sleeves blocks electromagnetic signals and prevents cloning.",
    "id": 250
  },
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
    "explanation": "Whaling is a specific type of spear phishing that targets high-profile executives (such as CEOs, CFOs, or government officials) with highly customized, targeted messages.",
    "id": 251
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
    "explanation": "Vishing (Voice Phishing) is social engineering conducted over telephone calls or VoIP systems to solicit sensitive information or credentials.",
    "id": 252
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
    "explanation": "Piggybacking occurs when an authorized person knowingly allows an unauthorized person to follow them through a checkpoint. Tailgating is when it occurs without the employee's knowledge or consent.",
    "id": 253
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
    "explanation": "Shoulder surfing is visually observing a user's screen or keyboard to capture sensitive data. It is mitigated by using privacy filters (screens) that block side-angle viewing.",
    "id": 254
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
    "explanation": "Dumpster diving is searching through trash to find information. It is prevented by enforcing document shredding policies and discarding files in locked shred bins.",
    "id": 255
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
    "explanation": "The email leverages 'Authority' (claiming to represent the CEO/audit) and 'Urgency' (10-minute limit and threat of suspension) to bypass the recipient's critical evaluation.",
    "id": 256
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
    "explanation": "Consensus (or Social Proof) is a trigger that exploits the human tendency to follow the crowd or conform to what others are doing ('Everyone else has done it').",
    "id": 257
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
    "explanation": "A Watering Hole Attack targets specific organizations by compromising a website that the employees frequently visit, exploiting their trust in that site.",
    "id": 258
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
    "explanation": "Typosquatting (or URL hijacking) involves registering domain names that are common misspellings or visual similarities of legitimate sites to deceive users.",
    "id": 259
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
    "explanation": "Credential Harvesting is the collection of user login credentials (usernames and passwords), typically achieved using cloned login pages and phishing emails.",
    "id": 260
  },
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
    "explanation": "Ransomware is malware designed to encrypt a victim's files or lock their system, demanding a ransom payment in exchange for the decryption key.",
    "id": 261
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
    "explanation": "Spyware is designed to gather information about a user's activities (including logging keystrokes via a keylogger) without their consent and transmit it to external actors.",
    "id": 262
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
    "explanation": "A Logic Bomb is malicious code inserted into a program that lies dormant until triggered by a specific event (such as a date, time, or administrative action like user deletion).",
    "id": 263
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
    "explanation": "A Trojan Horse is malware disguised as legitimate, useful software that executes hidden malicious actions behind the scenes.",
    "id": 264
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
    "explanation": "A Rootkit is malware that modifies core operating system binaries or kernel components to hide its presence and secure privileged administrative access (root/system).",
    "id": 265
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
    "explanation": "Fileless Malware operates directly in the computer's volatile memory (RAM) and hijacks legitimate system tools (like PowerShell) to avoid writing files to the disk, escaping file-based antivirus scanners.",
    "id": 266
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
    "explanation": "A Worm is self-replicating malware that spreads across networks automatically by exploiting system vulnerabilities, without requiring human interaction or file execution.",
    "id": 267
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
    "explanation": "A Botnet is a network of compromised, internet-connected devices (bots) controlled by a central Command and Control (C2) server to execute distributed attacks like DDoS.",
    "id": 268
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
    "explanation": "A Boot Sector Virus infects the system's Master Boot Record (MBR) or partition table, executing during the boot process before the OS and security software start.",
    "id": 269
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
    "explanation": "A virus requires a host file and human action (executing a program, opening a file) to run and replicate. A worm is autonomous and spreads over networks automatically without human interaction.",
    "id": 270
  },
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
    "explanation": "Data Loss Prevention (DLP) systems monitor, detect, and block unauthorized transfers of sensitive data (like PII) in transit, in use, or at rest.",
    "id": 271
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
    "explanation": "Full Disk Encryption (FDE) like BitLocker enforces Confidentiality for Data at Rest (stored on the physical drive) by rendering it unreadable if the device is stolen.",
    "id": 272
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
    "explanation": "Tokenization replaces sensitive data elements with non-sensitive equivalents (tokens) that refer back to the real data stored in a secure database vault.",
    "id": 273
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
    "explanation": "Data in use is in RAM/CPU cache; data at rest is stored on storage media (tapes/hard drives); data in transit is moving across a network.",
    "id": 274
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
    "explanation": "Protected Health Information (PHI) is health status, care provision, or payment details linked to an individual, governed by the Health Insurance Portability and Accountability Act (HIPAA).",
    "id": 275
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
    "explanation": "Digital Rights Management (DRM) or IRM controls file usage permissions (preventing copying, printing, or forwarding) even after the file is delivered to the recipient.",
    "id": 276
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
    "explanation": "Self-Encrypting Drives (SEDs) utilize a hardware cryptographic controller embedded in the drive to automatically encrypt all data written to the media.",
    "id": 277
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
    "explanation": "Data Classification is the process of organizing data into categories based on sensitivity levels to determine appropriate security controls.",
    "id": 278
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
    "explanation": "Data Minimization involves collecting and retaining only the minimum data necessary for business operations, reducing the blast radius of a breach.",
    "id": 279
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
    "explanation": "Data Wiping (Purging/Overwriting) uses software to overwrite sectors with random patterns, sanitizing the drive while leaving the hardware functional. Shredding destroys the drive; degaussing demagnetizes it, rendering it unusable.",
    "id": 280
  },
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
    "explanation": "Symmetric encryption (such as AES) is 100 to 1,000 times faster than asymmetric encryption and requires significantly less computational power, making it ideal for bulk data encryption.",
    "id": 281
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
    "explanation": "Hybrid encryption combines the key-distribution benefits of asymmetric cryptography (to share a session key) with the speed of symmetric cryptography (to encrypt bulk data).",
    "id": 282
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
    "explanation": "Elliptic Curve Cryptography (ECC) offers equivalent cryptographic strength to RSA but with much smaller key sizes (e.g., 256-bit ECC ≈ 3072-bit RSA), saving CPU and battery power.",
    "id": 283
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
    "explanation": "The Diffie-Hellman (DH) algorithm is specifically designed for secure key exchange, allowing two parties to establish a shared secret key over an insecure channel.",
    "id": 284
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
    "explanation": "A collision occurs when two different inputs produce the same hash digest. MD5 is highly vulnerable to collision attacks and is obsolete for security purposes.",
    "id": 285
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
    "explanation": "Salting adds a random value to the plaintext password before hashing. This makes each hash unique (even if passwords are the same) and completely defeats precomputed Rainbow Tables.",
    "id": 286
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
    "explanation": "A Wildcard Certificate secures a domain and an unlimited number of its first-level subdomains using a single wildcard character (*.domain.com).",
    "id": 287
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
    "explanation": "OCSP Stapling allows the web server to periodically query the CA and 'staple' a time-stamped OCSP revocation status response to the TLS handshake, saving the client from making a separate query.",
    "id": 288
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
    "explanation": "A Downgrade Attack forces a connection to fall back to an older, weaker, or deprecated protocol version to exploit known flaws in that older version.",
    "id": 289
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
    "explanation": "Blockchain uses a decentralized, peer-to-peer ledger network where transactions are cryptographically linked and immutable, eliminating the need for a central clearinghouse.",
    "id": 290
  },
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
    "explanation": "SLE = Asset Value ($100,000) * EF (0.3) = $30,000. ARO = 1 / 10 years = 0.1. ALE = SLE ($30,000) * ARO (0.1) = $3,000 per year.",
    "id": 291
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
    "explanation": "Risk Transference (or sharing) shifts the financial consequences of a risk to a third party (such as an insurance company or outsourcer) without necessarily eliminating the threat itself.",
    "id": 292
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
    "explanation": "Risk Avoidance is the strategy of eliminating a risk by discontinuing the activity, service, or system that introduces the risk.",
    "id": 293
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
    "explanation": "Risk Acceptance is the strategy of identifying a risk and deliberately taking no corrective action, typically chosen when the cost of mitigation outweighs the potential loss.",
    "id": 294
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
    "explanation": "Qualitative risk analysis uses descriptive, categorical scales (such as Low, Medium, High) and expert opinion to prioritize risks rather than numerical, financial calculations.",
    "id": 295
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
    "explanation": "Recovery Point Objective (RPO) is the maximum acceptable amount of data loss measured in time (i.e. the age of files that must be recovered from backup).",
    "id": 296
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
    "explanation": "MTBF is the average time between system failures (365 days / 4 failures = ~91.25 days). MTTR is the average time required to repair a failed system (3 hours).",
    "id": 297
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
    "explanation": "Key Risk Indicators (KRIs) are forward-looking metrics used to monitor risk exposure changes and provide early warning signals before a risk escalates into an incident.",
    "id": 298
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
    "explanation": "Risk Appetite is the broad amount of risk an organization is willing to pursue ($50,000). Risk Tolerance is the maximum acceptable risk level before action is required ($100,000).",
    "id": 299
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
    "explanation": "Control Risk is the risk that a security control will fail to prevent, detect, or mitigate a threat, often because the control degrades or becomes less effective over time.",
    "id": 300
  },
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
    "explanation": "A Supply Chain Attack compromises a weaker upstream component (such as software libraries, updates, or third-party contractors) to target down-stream customers.",
    "id": 301
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
    "explanation": "A SOC 2 Type II report is an independent audit evaluating a service organization's controls over security, availability, processing integrity, confidentiality, and privacy over a period of time.",
    "id": 302
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
    "explanation": "A Master Services Agreement (MSA) is a contract that defines the governing framework, terms, and conditions for all ongoing and future transactions between two parties.",
    "id": 303
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
    "explanation": "A Service Level Agreement (SLA) is a contract component that defines specific, measurable performance metrics (like uptime/response time) and penalties for service failures.",
    "id": 304
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
    "explanation": "Third-party integration risk occurs when external entities are granted system access, making the organization vulnerable to the vendor's credential handling and key management practices.",
    "id": 305
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
    "explanation": "A Non-Disclosure Agreement (NDA) is a legally binding contract that prevents parties from sharing confidential information, trade secrets, or proprietary data.",
    "id": 306
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
    "explanation": "During vendor onboarding, conducting a vendor assessment (security questionnaire, control review, SOC audit) is the FIRST step to evaluate the risk of the partnership.",
    "id": 307
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
    "explanation": "To prevent unauthorized persistent access and backdoors, revoking all accounts, credentials, and physical access badges is the most critical step in vendor offboarding.",
    "id": 308
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
    "explanation": "Hardware supply chain integrity controls protect physical items from modification, counterfeiting, or interception during shipping and distribution.",
    "id": 309
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
    "explanation": "A Software Bill of Materials (SBOM) is a comprehensive nested inventory of all software components, libraries, and dependencies used to build an application.",
    "id": 310
  },
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
    "explanation": "GDPR (General Data Protection Regulation) is a regulatory framework in the EU that imposes severe financial penalties (up to 4% of global turnover) for data protection non-compliance.",
    "id": 311
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
    "explanation": "PCI DSS (Payment Card Industry Data Security Standard) is a mandatory security standard for any organization that stores, processes, or transmits credit card data.",
    "id": 312
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
    "explanation": "A Policy defines the high-level security goals and commitments (the 'what' and 'why'). A Procedure provides step-by-step tactical instructions (the 'how') to execute it.",
    "id": 313
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
    "explanation": "An Acceptable Use Policy (AUP) defines the rules, behavior, and constraints that employees must follow when using corporate networks, hardware, and assets.",
    "id": 314
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
    "explanation": "Separation of Duties splits a critical process into multiple steps executed by different people to prevent collusion, fraud, or single-user compromise.",
    "id": 315
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
    "explanation": "Mandatory Vacations are designed to detect internal fraud, as unauthorized transactions or discrepancies are likely to be uncovered when another employee takes over their duties.",
    "id": 316
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
    "explanation": "Job Rotation increases redundancy (cross-training employees to eliminate single points of failure) and acts as an administrative control to detect collusion or fraud.",
    "id": 317
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
    "explanation": "A playbook or incident response procedure is a checklist of tactical, step-by-step actions designed to handle a specific security scenario consistently and rapidly.",
    "id": 318
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
    "explanation": "The POA&M (Plan of Action and Milestones) tracks the remediation of identified security gaps and compliance issues, defining tasks, risk owners, and deadlines.",
    "id": 319
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
    "explanation": "Audit remediation and tracking is the post-audit phase where organizations implement changes to fix identified audit findings and track progress.",
    "id": 320
  },
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
    "explanation": "A Configuration Management Database (CMDB) stores configuration records for all hardware and software assets (Configuration Items) and defines their relationships.",
    "id": 321
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
    "explanation": "The Change Advisory Board (CAB) is the committee responsible for evaluating, prioritizing, scheduling, and approving or rejecting proposed changes to minimize risk.",
    "id": 322
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
    "explanation": "A Backout (or Rollback) Plan is a detailed set of instructions that describes how to undo a change and restore systems to their original state if a change fails.",
    "id": 323
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
    "explanation": "COPE (Corporate Owned, Personally Enabled) is a model where the organization purchases and owns the device, but allows the employee to use it for personal tasks.",
    "id": 324
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
    "explanation": "A Sanitization Certificate (or Certificate of Destruction) is a formal document proving that data or storage media has been securely wiped or destroyed, providing audit trails.",
    "id": 325
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
    "explanation": "A Data Retention Policy defines how long different data types must be retained for business or compliance reasons, and specifies disposal requirements.",
    "id": 326
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
    "explanation": "Mobile Device Management (MDM) is a centralized software platform used to secure, monitor, manage, and remotely control (e.g. wipe) mobile assets.",
    "id": 327
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
    "explanation": "Version Control Systems (like Git) track incremental changes to code files, allowing developers to review history, audit changes, and roll back to previous stable versions.",
    "id": 328
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
    "explanation": "Asset Tagging involves attaching physical markers (like barcodes or RFID tags) to hardware to facilitate tracking, location audits, and inventory management.",
    "id": 329
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
    "explanation": "Post-Implementation Verification involves running test procedures immediately after a change is applied to verify the systems are functional and stable.",
    "id": 330
  },
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
  },
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
    "explanation": "Least Privilege ensures that users are granted only the minimum permissions necessary to complete their job tasks. Allowing read-only access but preventing modification satisfies this principle.",
    "id": 421
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
    "explanation": "Defense in Depth is the practice of layering multiple security controls (physical, technical, and administrative) so that if one control fails, others are in place to block the threat.",
    "id": 422
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
    "explanation": "Accounting involves tracking and logging user actions to provide accountability and a detailed audit trail of who performed what action and when.",
    "id": 423
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
    "explanation": "Data Masking (or obfuscation) replaces sensitive data with realistic but fake values for non-production environments like testing, without using a secure vault mapping (which would be Tokenization).",
    "id": 424
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
    "explanation": "The Policy Enforcement Point (PEP) is the component (such as a firewall, gateway, or agent) that actually executes the allow/deny decision made by the Policy Decision Point (PDP).",
    "id": 425
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
    "explanation": "Fail-safe locks automatically unlock when power is lost to prioritize human life safety. Fail-secure locks remain locked during power loss to protect assets.",
    "id": 426
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
    "explanation": "Hashing is the primary mechanism for verifying Integrity. Comparing current file hashes against a known baseline immediately reveals if the files have been tampered with or modified.",
    "id": 427
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
    "explanation": "A Technical Gap Analysis evaluates the current security posture of an organization, compares it against a desired standard or baseline, and identifies the gaps that need remediation.",
    "id": 428
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
    "explanation": "A Plan of Action and Milestones (POA&M) is a structured document that lists vulnerabilities/gaps, planned corrective actions, required resources, and target completion dates.",
    "id": 429
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
    "explanation": "Operational controls are security measures implemented and executed by people (rather than systems), such as daily operations, training, and configuration procedures.",
    "id": 430
  },
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
    "explanation": "Advanced Persistent Threats (APTs) are highly skilled, well-funded threat actors (often state-sponsored) characterized by their capability, stealth, and patience to maintain long-term access to a target.",
    "id": 431
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
    "explanation": "Defacing websites to protest political or ideological issues is a classic indicator of hacktivism, which is driven by political, environmental, or social motivations.",
    "id": 432
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
    "explanation": "Shadow IT is the use of unauthorized systems, software, or hardware within an organization without approval from the IT or security department, bypassing standard controls.",
    "id": 433
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
    "explanation": "Reducing the attack surface involves minimizing the sum of all potential entry points and vulnerabilities (closing ports, disabling unused software/protocols, restricting access).",
    "id": 434
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
    "explanation": "Open-Source Intelligence (OSINT) is the collection, analysis, and dissemination of information compiled from publicly available data sources.",
    "id": 435
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
    "explanation": "STIX (Structured Threat Information eXpression) defines the format for sharing threat intelligence, while TAXII (Trusted Automated eXchange of Intelligence Information) is the transport protocol.",
    "id": 436
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
    "explanation": "A False Flag Attack is deliberately designed to mislead investigators and attribute the incident to a different country or threat actor group.",
    "id": 437
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
    "explanation": "Threat Hunting is a proactive, analyst-led search for undetected threats or malware lurking within an organization's network that have bypassed automated security controls.",
    "id": 438
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
    "explanation": "A Negligent Insider is an employee who unintentionally causes a security incident or compromises security policies due to careless behavior, lack of awareness, or bypassing guidelines.",
    "id": 439
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
    "explanation": "A Watering Hole Attack involves compromising a third-party website known to be frequented by targets from a specific organization or industry, aiming to infect them when they visit.",
    "id": 440
  },
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
    "explanation": "An Access Control Vestibule (or mantrap) uses a double-door system where the second door cannot open until the first door closes and authentication is validated, physically preventing tailgating.",
    "id": 441
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
    "explanation": "A Faraday Cage (or electromagnetic shielding) blocks electromagnetic fields, preventing wireless signals from leaking out of the room or external interference from entering.",
    "id": 442
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
    "explanation": "The Crossover Error Rate (CER) is the point where the False Acceptance Rate (FAR) equals the False Rejection Rate (FRR). A lower CER indicates a more accurate biometric system.",
    "id": 443
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
    "explanation": "Bollards are heavy concrete or steel posts designed to control or block vehicle access and absorb vehicle impacts, protecting buildings from ramming attacks.",
    "id": 444
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
    "explanation": "Hot and cold aisles layouts separate the cold air intakes of servers from their hot exhaust flows, optimizing cooling efficiency and server reliability.",
    "id": 445
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
    "explanation": "Security lighting (illumination) acts as an active deterrent by making intruders visible, and provides the light needed for security cameras to capture high-quality recordings.",
    "id": 446
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
    "explanation": "A Pan-Tilt-Zoom (PTZ) camera allows security operators to remotely control the direction, angle, and zoom of the lens to follow targets.",
    "id": 447
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
    "explanation": "Gaseous or clean agent suppression systems (like FM-200 or carbon dioxide) extinguish fires by removing oxygen or heat, without leaving residue or water that would destroy server electronics.",
    "id": 448
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
    "explanation": "Seismic or vibration sensors detect low-frequency structural vibrations caused by drilling, hammering, or sawing, making them ideal for vault structural monitoring.",
    "id": 449
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
    "explanation": "RFID credentials can be skimmed and cloned by attackers close to the card. Keeping cards in RFID-shielding sleeves blocks electromagnetic signals and prevents cloning.",
    "id": 450
  },
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
    "explanation": "Whaling is a specific type of spear phishing that targets high-profile executives (such as CEOs, CFOs, or government officials) with highly customized, targeted messages.",
    "id": 451
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
    "explanation": "Vishing (Voice Phishing) is social engineering conducted over telephone calls or VoIP systems to solicit sensitive information or credentials.",
    "id": 452
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
    "explanation": "Piggybacking occurs when an authorized person knowingly allows an unauthorized person to follow them through a checkpoint. Tailgating is when it occurs without the employee's knowledge or consent.",
    "id": 453
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
    "explanation": "Shoulder surfing is visually observing a user's screen or keyboard to capture sensitive data. It is mitigated by using privacy filters (screens) that block side-angle viewing.",
    "id": 454
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
    "explanation": "Dumpster diving is searching through trash to find information. It is prevented by enforcing document shredding policies and discarding files in locked shred bins.",
    "id": 455
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
    "explanation": "The email leverages 'Authority' (claiming to represent the CEO/audit) and 'Urgency' (10-minute limit and threat of suspension) to bypass the recipient's critical evaluation.",
    "id": 456
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
    "explanation": "Consensus (or Social Proof) is a trigger that exploits the human tendency to follow the crowd or conform to what others are doing ('Everyone else has done it').",
    "id": 457
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
    "explanation": "A Watering Hole Attack targets specific organizations by compromising a website that the employees frequently visit, exploiting their trust in that site.",
    "id": 458
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
    "explanation": "Typosquatting (or URL hijacking) involves registering domain names that are common misspellings or visual similarities of legitimate sites to deceive users.",
    "id": 459
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
    "explanation": "Credential Harvesting is the collection of user login credentials (usernames and passwords), typically achieved using cloned login pages and phishing emails.",
    "id": 460
  },
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
    "explanation": "Ransomware is malware designed to encrypt a victim's files or lock their system, demanding a ransom payment in exchange for the decryption key.",
    "id": 461
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
    "explanation": "Spyware is designed to gather information about a user's activities (including logging keystrokes via a keylogger) without their consent and transmit it to external actors.",
    "id": 462
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
    "explanation": "A Logic Bomb is malicious code inserted into a program that lies dormant until triggered by a specific event (such as a date, time, or administrative action like user deletion).",
    "id": 463
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
    "explanation": "A Trojan Horse is malware disguised as legitimate, useful software that executes hidden malicious actions behind the scenes.",
    "id": 464
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
    "explanation": "A Rootkit is malware that modifies core operating system binaries or kernel components to hide its presence and secure privileged administrative access (root/system).",
    "id": 465
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
    "explanation": "Fileless Malware operates directly in the computer's volatile memory (RAM) and hijacks legitimate system tools (like PowerShell) to avoid writing files to the disk, escaping file-based antivirus scanners.",
    "id": 466
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
    "explanation": "A Worm is self-replicating malware that spreads across networks automatically by exploiting system vulnerabilities, without requiring human interaction or file execution.",
    "id": 467
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
    "explanation": "A Botnet is a network of compromised, internet-connected devices (bots) controlled by a central Command and Control (C2) server to execute distributed attacks like DDoS.",
    "id": 468
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
    "explanation": "A Boot Sector Virus infects the system's Master Boot Record (MBR) or partition table, executing during the boot process before the OS and security software start.",
    "id": 469
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
    "explanation": "A virus requires a host file and human action (executing a program, opening a file) to run and replicate. A worm is autonomous and spreads over networks automatically without human interaction.",
    "id": 470
  },
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
    "explanation": "Data Loss Prevention (DLP) systems monitor, detect, and block unauthorized transfers of sensitive data (like PII) in transit, in use, or at rest.",
    "id": 471
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
    "explanation": "Full Disk Encryption (FDE) like BitLocker enforces Confidentiality for Data at Rest (stored on the physical drive) by rendering it unreadable if the device is stolen.",
    "id": 472
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
    "explanation": "Tokenization replaces sensitive data elements with non-sensitive equivalents (tokens) that refer back to the real data stored in a secure database vault.",
    "id": 473
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
    "explanation": "Data in use is in RAM/CPU cache; data at rest is stored on storage media (tapes/hard drives); data in transit is moving across a network.",
    "id": 474
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
    "explanation": "Protected Health Information (PHI) is health status, care provision, or payment details linked to an individual, governed by the Health Insurance Portability and Accountability Act (HIPAA).",
    "id": 475
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
    "explanation": "Digital Rights Management (DRM) or IRM controls file usage permissions (preventing copying, printing, or forwarding) even after the file is delivered to the recipient.",
    "id": 476
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
    "explanation": "Self-Encrypting Drives (SEDs) utilize a hardware cryptographic controller embedded in the drive to automatically encrypt all data written to the media.",
    "id": 477
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
    "explanation": "Data Classification is the process of organizing data into categories based on sensitivity levels to determine appropriate security controls.",
    "id": 478
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
    "explanation": "Data Minimization involves collecting and retaining only the minimum data necessary for business operations, reducing the blast radius of a breach.",
    "id": 479
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
    "explanation": "Data Wiping (Purging/Overwriting) uses software to overwrite sectors with random patterns, sanitizing the drive while leaving the hardware functional. Shredding destroys the drive; degaussing demagnetizes it, rendering it unusable.",
    "id": 480
  },
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
    "explanation": "Symmetric encryption (such as AES) is 100 to 1,000 times faster than asymmetric encryption and requires significantly less computational power, making it ideal for bulk data encryption.",
    "id": 481
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
    "explanation": "Hybrid encryption combines the key-distribution benefits of asymmetric cryptography (to share a session key) with the speed of symmetric cryptography (to encrypt bulk data).",
    "id": 482
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
    "explanation": "Elliptic Curve Cryptography (ECC) offers equivalent cryptographic strength to RSA but with much smaller key sizes (e.g., 256-bit ECC ≈ 3072-bit RSA), saving CPU and battery power.",
    "id": 483
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
    "explanation": "The Diffie-Hellman (DH) algorithm is specifically designed for secure key exchange, allowing two parties to establish a shared secret key over an insecure channel.",
    "id": 484
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
    "explanation": "A collision occurs when two different inputs produce the same hash digest. MD5 is highly vulnerable to collision attacks and is obsolete for security purposes.",
    "id": 485
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
    "explanation": "Salting adds a random value to the plaintext password before hashing. This makes each hash unique (even if passwords are the same) and completely defeats precomputed Rainbow Tables.",
    "id": 486
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
    "explanation": "A Wildcard Certificate secures a domain and an unlimited number of its first-level subdomains using a single wildcard character (*.domain.com).",
    "id": 487
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
    "explanation": "OCSP Stapling allows the web server to periodically query the CA and 'staple' a time-stamped OCSP revocation status response to the TLS handshake, saving the client from making a separate query.",
    "id": 488
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
    "explanation": "A Downgrade Attack forces a connection to fall back to an older, weaker, or deprecated protocol version to exploit known flaws in that older version.",
    "id": 489
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
    "explanation": "Blockchain uses a decentralized, peer-to-peer ledger network where transactions are cryptographically linked and immutable, eliminating the need for a central clearinghouse.",
    "id": 490
  },
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
    "explanation": "SLE = Asset Value ($100,000) * EF (0.3) = $30,000. ARO = 1 / 10 years = 0.1. ALE = SLE ($30,000) * ARO (0.1) = $3,000 per year.",
    "id": 491
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
    "explanation": "Risk Transference (or sharing) shifts the financial consequences of a risk to a third party (such as an insurance company or outsourcer) without necessarily eliminating the threat itself.",
    "id": 492
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
    "explanation": "Risk Avoidance is the strategy of eliminating a risk by discontinuing the activity, service, or system that introduces the risk.",
    "id": 493
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
    "explanation": "Risk Acceptance is the strategy of identifying a risk and deliberately taking no corrective action, typically chosen when the cost of mitigation outweighs the potential loss.",
    "id": 494
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
    "explanation": "Qualitative risk analysis uses descriptive, categorical scales (such as Low, Medium, High) and expert opinion to prioritize risks rather than numerical, financial calculations.",
    "id": 495
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
    "explanation": "Recovery Point Objective (RPO) is the maximum acceptable amount of data loss measured in time (i.e. the age of files that must be recovered from backup).",
    "id": 496
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
    "explanation": "MTBF is the average time between system failures (365 days / 4 failures = ~91.25 days). MTTR is the average time required to repair a failed system (3 hours).",
    "id": 497
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
    "explanation": "Key Risk Indicators (KRIs) are forward-looking metrics used to monitor risk exposure changes and provide early warning signals before a risk escalates into an incident.",
    "id": 498
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
    "explanation": "Risk Appetite is the broad amount of risk an organization is willing to pursue ($50,000). Risk Tolerance is the maximum acceptable risk level before action is required ($100,000).",
    "id": 499
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
    "explanation": "Control Risk is the risk that a security control will fail to prevent, detect, or mitigate a threat, often because the control degrades or becomes less effective over time.",
    "id": 500
  },
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
    "explanation": "A Supply Chain Attack compromises a weaker upstream component (such as software libraries, updates, or third-party contractors) to target down-stream customers.",
    "id": 501
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
    "explanation": "A SOC 2 Type II report is an independent audit evaluating a service organization's controls over security, availability, processing integrity, confidentiality, and privacy over a period of time.",
    "id": 502
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
    "explanation": "A Master Services Agreement (MSA) is a contract that defines the governing framework, terms, and conditions for all ongoing and future transactions between two parties.",
    "id": 503
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
    "explanation": "A Service Level Agreement (SLA) is a contract component that defines specific, measurable performance metrics (like uptime/response time) and penalties for service failures.",
    "id": 504
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
    "explanation": "Third-party integration risk occurs when external entities are granted system access, making the organization vulnerable to the vendor's credential handling and key management practices.",
    "id": 505
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
    "explanation": "A Non-Disclosure Agreement (NDA) is a legally binding contract that prevents parties from sharing confidential information, trade secrets, or proprietary data.",
    "id": 506
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
    "explanation": "During vendor onboarding, conducting a vendor assessment (security questionnaire, control review, SOC audit) is the FIRST step to evaluate the risk of the partnership.",
    "id": 507
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
    "explanation": "To prevent unauthorized persistent access and backdoors, revoking all accounts, credentials, and physical access badges is the most critical step in vendor offboarding.",
    "id": 508
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
    "explanation": "Hardware supply chain integrity controls protect physical items from modification, counterfeiting, or interception during shipping and distribution.",
    "id": 509
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
    "explanation": "A Software Bill of Materials (SBOM) is a comprehensive nested inventory of all software components, libraries, and dependencies used to build an application.",
    "id": 510
  },
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
    "explanation": "GDPR (General Data Protection Regulation) is a regulatory framework in the EU that imposes severe financial penalties (up to 4% of global turnover) for data protection non-compliance.",
    "id": 511
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
    "explanation": "PCI DSS (Payment Card Industry Data Security Standard) is a mandatory security standard for any organization that stores, processes, or transmits credit card data.",
    "id": 512
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
    "explanation": "A Policy defines the high-level security goals and commitments (the 'what' and 'why'). A Procedure provides step-by-step tactical instructions (the 'how') to execute it.",
    "id": 513
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
    "explanation": "An Acceptable Use Policy (AUP) defines the rules, behavior, and constraints that employees must follow when using corporate networks, hardware, and assets.",
    "id": 514
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
    "explanation": "Separation of Duties splits a critical process into multiple steps executed by different people to prevent collusion, fraud, or single-user compromise.",
    "id": 515
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
    "explanation": "Mandatory Vacations are designed to detect internal fraud, as unauthorized transactions or discrepancies are likely to be uncovered when another employee takes over their duties.",
    "id": 516
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
    "explanation": "Job Rotation increases redundancy (cross-training employees to eliminate single points of failure) and acts as an administrative control to detect collusion or fraud.",
    "id": 517
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
    "explanation": "A playbook or incident response procedure is a checklist of tactical, step-by-step actions designed to handle a specific security scenario consistently and rapidly.",
    "id": 518
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
    "explanation": "The POA&M (Plan of Action and Milestones) tracks the remediation of identified security gaps and compliance issues, defining tasks, risk owners, and deadlines.",
    "id": 519
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
    "explanation": "Audit remediation and tracking is the post-audit phase where organizations implement changes to fix identified audit findings and track progress.",
    "id": 520
  },
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
    "explanation": "A Configuration Management Database (CMDB) stores configuration records for all hardware and software assets (Configuration Items) and defines their relationships.",
    "id": 521
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
    "explanation": "The Change Advisory Board (CAB) is the committee responsible for evaluating, prioritizing, scheduling, and approving or rejecting proposed changes to minimize risk.",
    "id": 522
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
    "explanation": "A Backout (or Rollback) Plan is a detailed set of instructions that describes how to undo a change and restore systems to their original state if a change fails.",
    "id": 523
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
    "explanation": "COPE (Corporate Owned, Personally Enabled) is a model where the organization purchases and owns the device, but allows the employee to use it for personal tasks.",
    "id": 524
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
    "explanation": "A Sanitization Certificate (or Certificate of Destruction) is a formal document proving that data or storage media has been securely wiped or destroyed, providing audit trails.",
    "id": 525
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
    "explanation": "A Data Retention Policy defines how long different data types must be retained for business or compliance reasons, and specifies disposal requirements.",
    "id": 526
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
    "explanation": "Mobile Device Management (MDM) is a centralized software platform used to secure, monitor, manage, and remotely control (e.g. wipe) mobile assets.",
    "id": 527
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
    "explanation": "Version Control Systems (like Git) track incremental changes to code files, allowing developers to review history, audit changes, and roll back to previous stable versions.",
    "id": 528
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
    "explanation": "Asset Tagging involves attaching physical markers (like barcodes or RFID tags) to hardware to facilitate tracking, location audits, and inventory management.",
    "id": 529
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
    "explanation": "Post-Implementation Verification involves running test procedures immediately after a change is applied to verify the systems are functional and stable.",
    "id": 530
  },
  {
    "id": 531,
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
    "id": 532,
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
    "id": 533,
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
    "id": 534,
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
    "id": 535,
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
    "id": 536,
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
    "id": 537,
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
    "id": 538,
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
    "id": 539,
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
    "id": 540,
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
    "id": 541,
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
    "id": 542,
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
    "id": 543,
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
    "id": 544,
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
    "id": 545,
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
    "id": 546,
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
    "id": 547,
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
    "id": 548,
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
    "id": 549,
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
    "id": 550,
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
    "id": 551,
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
    "id": 552,
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
    "id": 553,
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
    "id": 554,
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
    "id": 555,
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
    "id": 556,
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
    "id": 557,
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
    "id": 558,
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
    "id": 559,
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
    "id": 560,
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
  {
    "id": 561,
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
    "id": 562,
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
    "id": 563,
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
    "id": 564,
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
    "id": 565,
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
    "id": 566,
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
    "id": 567,
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
    "id": 568,
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
    "id": 569,
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
    "id": 570,
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
    "id": 571,
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
    "id": 572,
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
    "id": 573,
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
    "id": 574,
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
    "id": 575,
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
    "id": 576,
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
    "id": 577,
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
    "id": 578,
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
    "id": 579,
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
    "id": 580,
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
    "id": 581,
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
    "id": 582,
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
    "id": 583,
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
    "id": 584,
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
    "id": 585,
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
    "id": 586,
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
    "id": 587,
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
    "id": 588,
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
    "id": 589,
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
    "id": 590,
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
  {
    "id": 591,
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
    "id": 592,
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
    "id": 593,
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
    "id": 594,
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
    "id": 595,
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
    "id": 596,
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
    "id": 597,
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
    "id": 598,
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
    "id": 599,
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
    "id": 600,
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
    "id": 601,
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
    "id": 602,
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
    "id": 603,
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
    "id": 604,
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
    "id": 605,
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
    "id": 606,
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
    "id": 607,
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
    "id": 608,
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
    "id": 609,
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
    "id": 610,
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
    "id": 611,
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
    "id": 612,
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
    "id": 613,
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
    "id": 614,
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
    "id": 615,
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
    "id": 616,
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
    "id": 617,
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
    "id": 618,
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
    "id": 619,
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
    "id": 620,
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
  },
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
    "explanation": "Least Privilege ensures that users are granted only the minimum permissions necessary to complete their job tasks. Allowing read-only access but preventing modification satisfies this principle.",
    "id": 621
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
    "explanation": "Defense in Depth is the practice of layering multiple security controls (physical, technical, and administrative) so that if one control fails, others are in place to block the threat.",
    "id": 622
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
    "explanation": "Accounting involves tracking and logging user actions to provide accountability and a detailed audit trail of who performed what action and when.",
    "id": 623
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
    "explanation": "Data Masking (or obfuscation) replaces sensitive data with realistic but fake values for non-production environments like testing, without using a secure vault mapping (which would be Tokenization).",
    "id": 624
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
    "explanation": "The Policy Enforcement Point (PEP) is the component (such as a firewall, gateway, or agent) that actually executes the allow/deny decision made by the Policy Decision Point (PDP).",
    "id": 625
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
    "explanation": "Fail-safe locks automatically unlock when power is lost to prioritize human life safety. Fail-secure locks remain locked during power loss to protect assets.",
    "id": 626
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
    "explanation": "Hashing is the primary mechanism for verifying Integrity. Comparing current file hashes against a known baseline immediately reveals if the files have been tampered with or modified.",
    "id": 627
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
    "explanation": "A Technical Gap Analysis evaluates the current security posture of an organization, compares it against a desired standard or baseline, and identifies the gaps that need remediation.",
    "id": 628
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
    "explanation": "A Plan of Action and Milestones (POA&M) is a structured document that lists vulnerabilities/gaps, planned corrective actions, required resources, and target completion dates.",
    "id": 629
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
    "explanation": "Operational controls are security measures implemented and executed by people (rather than systems), such as daily operations, training, and configuration procedures.",
    "id": 630
  },
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
    "explanation": "Advanced Persistent Threats (APTs) are highly skilled, well-funded threat actors (often state-sponsored) characterized by their capability, stealth, and patience to maintain long-term access to a target.",
    "id": 631
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
    "explanation": "Defacing websites to protest political or ideological issues is a classic indicator of hacktivism, which is driven by political, environmental, or social motivations.",
    "id": 632
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
    "explanation": "Shadow IT is the use of unauthorized systems, software, or hardware within an organization without approval from the IT or security department, bypassing standard controls.",
    "id": 633
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
    "explanation": "Reducing the attack surface involves minimizing the sum of all potential entry points and vulnerabilities (closing ports, disabling unused software/protocols, restricting access).",
    "id": 634
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
    "explanation": "Open-Source Intelligence (OSINT) is the collection, analysis, and dissemination of information compiled from publicly available data sources.",
    "id": 635
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
    "explanation": "STIX (Structured Threat Information eXpression) defines the format for sharing threat intelligence, while TAXII (Trusted Automated eXchange of Intelligence Information) is the transport protocol.",
    "id": 636
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
    "explanation": "A False Flag Attack is deliberately designed to mislead investigators and attribute the incident to a different country or threat actor group.",
    "id": 637
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
    "explanation": "Threat Hunting is a proactive, analyst-led search for undetected threats or malware lurking within an organization's network that have bypassed automated security controls.",
    "id": 638
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
    "explanation": "A Negligent Insider is an employee who unintentionally causes a security incident or compromises security policies due to careless behavior, lack of awareness, or bypassing guidelines.",
    "id": 639
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
    "explanation": "A Watering Hole Attack involves compromising a third-party website known to be frequented by targets from a specific organization or industry, aiming to infect them when they visit.",
    "id": 640
  },
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
    "explanation": "An Access Control Vestibule (or mantrap) uses a double-door system where the second door cannot open until the first door closes and authentication is validated, physically preventing tailgating.",
    "id": 641
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
    "explanation": "A Faraday Cage (or electromagnetic shielding) blocks electromagnetic fields, preventing wireless signals from leaking out of the room or external interference from entering.",
    "id": 642
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
    "explanation": "The Crossover Error Rate (CER) is the point where the False Acceptance Rate (FAR) equals the False Rejection Rate (FRR). A lower CER indicates a more accurate biometric system.",
    "id": 643
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
    "explanation": "Bollards are heavy concrete or steel posts designed to control or block vehicle access and absorb vehicle impacts, protecting buildings from ramming attacks.",
    "id": 644
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
    "explanation": "Hot and cold aisles layouts separate the cold air intakes of servers from their hot exhaust flows, optimizing cooling efficiency and server reliability.",
    "id": 645
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
    "explanation": "Security lighting (illumination) acts as an active deterrent by making intruders visible, and provides the light needed for security cameras to capture high-quality recordings.",
    "id": 646
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
    "explanation": "A Pan-Tilt-Zoom (PTZ) camera allows security operators to remotely control the direction, angle, and zoom of the lens to follow targets.",
    "id": 647
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
    "explanation": "Gaseous or clean agent suppression systems (like FM-200 or carbon dioxide) extinguish fires by removing oxygen or heat, without leaving residue or water that would destroy server electronics.",
    "id": 648
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
    "explanation": "Seismic or vibration sensors detect low-frequency structural vibrations caused by drilling, hammering, or sawing, making them ideal for vault structural monitoring.",
    "id": 649
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
    "explanation": "RFID credentials can be skimmed and cloned by attackers close to the card. Keeping cards in RFID-shielding sleeves blocks electromagnetic signals and prevents cloning.",
    "id": 650
  },
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
    "explanation": "Whaling is a specific type of spear phishing that targets high-profile executives (such as CEOs, CFOs, or government officials) with highly customized, targeted messages.",
    "id": 651
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
    "explanation": "Vishing (Voice Phishing) is social engineering conducted over telephone calls or VoIP systems to solicit sensitive information or credentials.",
    "id": 652
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
    "explanation": "Piggybacking occurs when an authorized person knowingly allows an unauthorized person to follow them through a checkpoint. Tailgating is when it occurs without the employee's knowledge or consent.",
    "id": 653
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
    "explanation": "Shoulder surfing is visually observing a user's screen or keyboard to capture sensitive data. It is mitigated by using privacy filters (screens) that block side-angle viewing.",
    "id": 654
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
    "explanation": "Dumpster diving is searching through trash to find information. It is prevented by enforcing document shredding policies and discarding files in locked shred bins.",
    "id": 655
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
    "explanation": "The email leverages 'Authority' (claiming to represent the CEO/audit) and 'Urgency' (10-minute limit and threat of suspension) to bypass the recipient's critical evaluation.",
    "id": 656
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
    "explanation": "Consensus (or Social Proof) is a trigger that exploits the human tendency to follow the crowd or conform to what others are doing ('Everyone else has done it').",
    "id": 657
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
    "explanation": "A Watering Hole Attack targets specific organizations by compromising a website that the employees frequently visit, exploiting their trust in that site.",
    "id": 658
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
    "explanation": "Typosquatting (or URL hijacking) involves registering domain names that are common misspellings or visual similarities of legitimate sites to deceive users.",
    "id": 659
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
    "explanation": "Credential Harvesting is the collection of user login credentials (usernames and passwords), typically achieved using cloned login pages and phishing emails.",
    "id": 660
  },
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
    "explanation": "Ransomware is malware designed to encrypt a victim's files or lock their system, demanding a ransom payment in exchange for the decryption key.",
    "id": 661
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
    "explanation": "Spyware is designed to gather information about a user's activities (including logging keystrokes via a keylogger) without their consent and transmit it to external actors.",
    "id": 662
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
    "explanation": "A Logic Bomb is malicious code inserted into a program that lies dormant until triggered by a specific event (such as a date, time, or administrative action like user deletion).",
    "id": 663
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
    "explanation": "A Trojan Horse is malware disguised as legitimate, useful software that executes hidden malicious actions behind the scenes.",
    "id": 664
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
    "explanation": "A Rootkit is malware that modifies core operating system binaries or kernel components to hide its presence and secure privileged administrative access (root/system).",
    "id": 665
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
    "explanation": "Fileless Malware operates directly in the computer's volatile memory (RAM) and hijacks legitimate system tools (like PowerShell) to avoid writing files to the disk, escaping file-based antivirus scanners.",
    "id": 666
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
    "explanation": "A Worm is self-replicating malware that spreads across networks automatically by exploiting system vulnerabilities, without requiring human interaction or file execution.",
    "id": 667
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
    "explanation": "A Botnet is a network of compromised, internet-connected devices (bots) controlled by a central Command and Control (C2) server to execute distributed attacks like DDoS.",
    "id": 668
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
    "explanation": "A Boot Sector Virus infects the system's Master Boot Record (MBR) or partition table, executing during the boot process before the OS and security software start.",
    "id": 669
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
    "explanation": "A virus requires a host file and human action (executing a program, opening a file) to run and replicate. A worm is autonomous and spreads over networks automatically without human interaction.",
    "id": 670
  },
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
    "explanation": "Data Loss Prevention (DLP) systems monitor, detect, and block unauthorized transfers of sensitive data (like PII) in transit, in use, or at rest.",
    "id": 671
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
    "explanation": "Full Disk Encryption (FDE) like BitLocker enforces Confidentiality for Data at Rest (stored on the physical drive) by rendering it unreadable if the device is stolen.",
    "id": 672
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
    "explanation": "Tokenization replaces sensitive data elements with non-sensitive equivalents (tokens) that refer back to the real data stored in a secure database vault.",
    "id": 673
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
    "explanation": "Data in use is in RAM/CPU cache; data at rest is stored on storage media (tapes/hard drives); data in transit is moving across a network.",
    "id": 674
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
    "explanation": "Protected Health Information (PHI) is health status, care provision, or payment details linked to an individual, governed by the Health Insurance Portability and Accountability Act (HIPAA).",
    "id": 675
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
    "explanation": "Digital Rights Management (DRM) or IRM controls file usage permissions (preventing copying, printing, or forwarding) even after the file is delivered to the recipient.",
    "id": 676
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
    "explanation": "Self-Encrypting Drives (SEDs) utilize a hardware cryptographic controller embedded in the drive to automatically encrypt all data written to the media.",
    "id": 677
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
    "explanation": "Data Classification is the process of organizing data into categories based on sensitivity levels to determine appropriate security controls.",
    "id": 678
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
    "explanation": "Data Minimization involves collecting and retaining only the minimum data necessary for business operations, reducing the blast radius of a breach.",
    "id": 679
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
    "explanation": "Data Wiping (Purging/Overwriting) uses software to overwrite sectors with random patterns, sanitizing the drive while leaving the hardware functional. Shredding destroys the drive; degaussing demagnetizes it, rendering it unusable.",
    "id": 680
  },
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
    "explanation": "Symmetric encryption (such as AES) is 100 to 1,000 times faster than asymmetric encryption and requires significantly less computational power, making it ideal for bulk data encryption.",
    "id": 681
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
    "explanation": "Hybrid encryption combines the key-distribution benefits of asymmetric cryptography (to share a session key) with the speed of symmetric cryptography (to encrypt bulk data).",
    "id": 682
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
    "explanation": "Elliptic Curve Cryptography (ECC) offers equivalent cryptographic strength to RSA but with much smaller key sizes (e.g., 256-bit ECC ≈ 3072-bit RSA), saving CPU and battery power.",
    "id": 683
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
    "explanation": "The Diffie-Hellman (DH) algorithm is specifically designed for secure key exchange, allowing two parties to establish a shared secret key over an insecure channel.",
    "id": 684
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
    "explanation": "A collision occurs when two different inputs produce the same hash digest. MD5 is highly vulnerable to collision attacks and is obsolete for security purposes.",
    "id": 685
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
    "explanation": "Salting adds a random value to the plaintext password before hashing. This makes each hash unique (even if passwords are the same) and completely defeats precomputed Rainbow Tables.",
    "id": 686
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
    "explanation": "A Wildcard Certificate secures a domain and an unlimited number of its first-level subdomains using a single wildcard character (*.domain.com).",
    "id": 687
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
    "explanation": "OCSP Stapling allows the web server to periodically query the CA and 'staple' a time-stamped OCSP revocation status response to the TLS handshake, saving the client from making a separate query.",
    "id": 688
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
    "explanation": "A Downgrade Attack forces a connection to fall back to an older, weaker, or deprecated protocol version to exploit known flaws in that older version.",
    "id": 689
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
    "explanation": "Blockchain uses a decentralized, peer-to-peer ledger network where transactions are cryptographically linked and immutable, eliminating the need for a central clearinghouse.",
    "id": 690
  },
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
    "explanation": "SLE = Asset Value ($100,000) * EF (0.3) = $30,000. ARO = 1 / 10 years = 0.1. ALE = SLE ($30,000) * ARO (0.1) = $3,000 per year.",
    "id": 691
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
    "explanation": "Risk Transference (or sharing) shifts the financial consequences of a risk to a third party (such as an insurance company or outsourcer) without necessarily eliminating the threat itself.",
    "id": 692
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
    "explanation": "Risk Avoidance is the strategy of eliminating a risk by discontinuing the activity, service, or system that introduces the risk.",
    "id": 693
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
    "explanation": "Risk Acceptance is the strategy of identifying a risk and deliberately taking no corrective action, typically chosen when the cost of mitigation outweighs the potential loss.",
    "id": 694
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
    "explanation": "Qualitative risk analysis uses descriptive, categorical scales (such as Low, Medium, High) and expert opinion to prioritize risks rather than numerical, financial calculations.",
    "id": 695
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
    "explanation": "Recovery Point Objective (RPO) is the maximum acceptable amount of data loss measured in time (i.e. the age of files that must be recovered from backup).",
    "id": 696
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
    "explanation": "MTBF is the average time between system failures (365 days / 4 failures = ~91.25 days). MTTR is the average time required to repair a failed system (3 hours).",
    "id": 697
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
    "explanation": "Key Risk Indicators (KRIs) are forward-looking metrics used to monitor risk exposure changes and provide early warning signals before a risk escalates into an incident.",
    "id": 698
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
    "explanation": "Risk Appetite is the broad amount of risk an organization is willing to pursue ($50,000). Risk Tolerance is the maximum acceptable risk level before action is required ($100,000).",
    "id": 699
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
    "explanation": "Control Risk is the risk that a security control will fail to prevent, detect, or mitigate a threat, often because the control degrades or becomes less effective over time.",
    "id": 700
  },
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
    "explanation": "A Supply Chain Attack compromises a weaker upstream component (such as software libraries, updates, or third-party contractors) to target down-stream customers.",
    "id": 701
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
    "explanation": "A SOC 2 Type II report is an independent audit evaluating a service organization's controls over security, availability, processing integrity, confidentiality, and privacy over a period of time.",
    "id": 702
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
    "explanation": "A Master Services Agreement (MSA) is a contract that defines the governing framework, terms, and conditions for all ongoing and future transactions between two parties.",
    "id": 703
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
    "explanation": "A Service Level Agreement (SLA) is a contract component that defines specific, measurable performance metrics (like uptime/response time) and penalties for service failures.",
    "id": 704
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
    "explanation": "Third-party integration risk occurs when external entities are granted system access, making the organization vulnerable to the vendor's credential handling and key management practices.",
    "id": 705
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
    "explanation": "A Non-Disclosure Agreement (NDA) is a legally binding contract that prevents parties from sharing confidential information, trade secrets, or proprietary data.",
    "id": 706
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
    "explanation": "During vendor onboarding, conducting a vendor assessment (security questionnaire, control review, SOC audit) is the FIRST step to evaluate the risk of the partnership.",
    "id": 707
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
    "explanation": "To prevent unauthorized persistent access and backdoors, revoking all accounts, credentials, and physical access badges is the most critical step in vendor offboarding.",
    "id": 708
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
    "explanation": "Hardware supply chain integrity controls protect physical items from modification, counterfeiting, or interception during shipping and distribution.",
    "id": 709
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
    "explanation": "A Software Bill of Materials (SBOM) is a comprehensive nested inventory of all software components, libraries, and dependencies used to build an application.",
    "id": 710
  },
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
    "explanation": "GDPR (General Data Protection Regulation) is a regulatory framework in the EU that imposes severe financial penalties (up to 4% of global turnover) for data protection non-compliance.",
    "id": 711
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
    "explanation": "PCI DSS (Payment Card Industry Data Security Standard) is a mandatory security standard for any organization that stores, processes, or transmits credit card data.",
    "id": 712
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
    "explanation": "A Policy defines the high-level security goals and commitments (the 'what' and 'why'). A Procedure provides step-by-step tactical instructions (the 'how') to execute it.",
    "id": 713
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
    "explanation": "An Acceptable Use Policy (AUP) defines the rules, behavior, and constraints that employees must follow when using corporate networks, hardware, and assets.",
    "id": 714
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
    "explanation": "Separation of Duties splits a critical process into multiple steps executed by different people to prevent collusion, fraud, or single-user compromise.",
    "id": 715
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
    "explanation": "Mandatory Vacations are designed to detect internal fraud, as unauthorized transactions or discrepancies are likely to be uncovered when another employee takes over their duties.",
    "id": 716
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
    "explanation": "Job Rotation increases redundancy (cross-training employees to eliminate single points of failure) and acts as an administrative control to detect collusion or fraud.",
    "id": 717
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
    "explanation": "A playbook or incident response procedure is a checklist of tactical, step-by-step actions designed to handle a specific security scenario consistently and rapidly.",
    "id": 718
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
    "explanation": "The POA&M (Plan of Action and Milestones) tracks the remediation of identified security gaps and compliance issues, defining tasks, risk owners, and deadlines.",
    "id": 719
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
    "explanation": "Audit remediation and tracking is the post-audit phase where organizations implement changes to fix identified audit findings and track progress.",
    "id": 720
  },
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
    "explanation": "A Configuration Management Database (CMDB) stores configuration records for all hardware and software assets (Configuration Items) and defines their relationships.",
    "id": 721
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
    "explanation": "The Change Advisory Board (CAB) is the committee responsible for evaluating, prioritizing, scheduling, and approving or rejecting proposed changes to minimize risk.",
    "id": 722
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
    "explanation": "A Backout (or Rollback) Plan is a detailed set of instructions that describes how to undo a change and restore systems to their original state if a change fails.",
    "id": 723
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
    "explanation": "COPE (Corporate Owned, Personally Enabled) is a model where the organization purchases and owns the device, but allows the employee to use it for personal tasks.",
    "id": 724
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
    "explanation": "A Sanitization Certificate (or Certificate of Destruction) is a formal document proving that data or storage media has been securely wiped or destroyed, providing audit trails.",
    "id": 725
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
    "explanation": "A Data Retention Policy defines how long different data types must be retained for business or compliance reasons, and specifies disposal requirements.",
    "id": 726
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
    "explanation": "Mobile Device Management (MDM) is a centralized software platform used to secure, monitor, manage, and remotely control (e.g. wipe) mobile assets.",
    "id": 727
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
    "explanation": "Version Control Systems (like Git) track incremental changes to code files, allowing developers to review history, audit changes, and roll back to previous stable versions.",
    "id": 728
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
    "explanation": "Asset Tagging involves attaching physical markers (like barcodes or RFID tags) to hardware to facilitate tracking, location audits, and inventory management.",
    "id": 729
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
    "explanation": "Post-Implementation Verification involves running test procedures immediately after a change is applied to verify the systems are functional and stable.",
    "id": 730
  },
  {
    "id": 731,
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
    "id": 732,
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
    "id": 733,
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
    "id": 734,
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
    "id": 735,
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
    "id": 736,
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
    "id": 737,
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
    "id": 738,
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
    "id": 739,
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
    "id": 740,
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
    "id": 741,
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
    "id": 742,
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
    "id": 743,
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
    "id": 744,
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
    "id": 745,
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
    "id": 746,
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
    "id": 747,
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
    "id": 748,
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
    "id": 749,
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
    "id": 750,
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
    "id": 751,
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
    "id": 752,
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
    "id": 753,
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
    "id": 754,
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
    "id": 755,
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
    "id": 756,
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
    "id": 757,
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
    "id": 758,
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
    "id": 759,
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
    "id": 760,
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
  {
    "id": 761,
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
    "id": 762,
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
    "id": 763,
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
    "id": 764,
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
    "id": 765,
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
    "id": 766,
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
    "id": 767,
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
    "id": 768,
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
    "id": 769,
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
    "id": 770,
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
    "id": 771,
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
    "id": 772,
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
    "id": 773,
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
    "id": 774,
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
    "id": 775,
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
    "id": 776,
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
    "id": 777,
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
    "id": 778,
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
    "id": 779,
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
    "id": 780,
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
    "id": 781,
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
    "id": 782,
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
    "id": 783,
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
    "id": 784,
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
    "id": 785,
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
    "id": 786,
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
    "id": 787,
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
    "id": 788,
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
    "id": 789,
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
    "id": 790,
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
  {
    "id": 791,
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
    "id": 792,
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
    "id": 793,
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
    "id": 794,
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
    "id": 795,
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
    "id": 796,
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
    "id": 797,
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
    "id": 798,
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
    "id": 799,
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
    "id": 800,
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
    "id": 801,
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
    "id": 802,
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
    "id": 803,
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
    "id": 804,
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
    "id": 805,
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
    "id": 806,
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
    "id": 807,
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
    "id": 808,
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
    "id": 809,
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
    "id": 810,
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
    "id": 811,
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
    "id": 812,
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
    "id": 813,
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
    "id": 814,
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
    "id": 815,
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
    "id": 816,
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
    "id": 817,
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
    "id": 818,
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
    "id": 819,
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
    "id": 820,
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
  },
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
    "explanation": "Least Privilege ensures that users are granted only the minimum permissions necessary to complete their job tasks. Allowing read-only access but preventing modification satisfies this principle.",
    "id": 821
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
    "explanation": "Defense in Depth is the practice of layering multiple security controls (physical, technical, and administrative) so that if one control fails, others are in place to block the threat.",
    "id": 822
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
    "explanation": "Accounting involves tracking and logging user actions to provide accountability and a detailed audit trail of who performed what action and when.",
    "id": 823
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
    "explanation": "Data Masking (or obfuscation) replaces sensitive data with realistic but fake values for non-production environments like testing, without using a secure vault mapping (which would be Tokenization).",
    "id": 824
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
    "explanation": "The Policy Enforcement Point (PEP) is the component (such as a firewall, gateway, or agent) that actually executes the allow/deny decision made by the Policy Decision Point (PDP).",
    "id": 825
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
    "explanation": "Fail-safe locks automatically unlock when power is lost to prioritize human life safety. Fail-secure locks remain locked during power loss to protect assets.",
    "id": 826
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
    "explanation": "Hashing is the primary mechanism for verifying Integrity. Comparing current file hashes against a known baseline immediately reveals if the files have been tampered with or modified.",
    "id": 827
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
    "explanation": "A Technical Gap Analysis evaluates the current security posture of an organization, compares it against a desired standard or baseline, and identifies the gaps that need remediation.",
    "id": 828
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
    "explanation": "A Plan of Action and Milestones (POA&M) is a structured document that lists vulnerabilities/gaps, planned corrective actions, required resources, and target completion dates.",
    "id": 829
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
    "explanation": "Operational controls are security measures implemented and executed by people (rather than systems), such as daily operations, training, and configuration procedures.",
    "id": 830
  },
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
    "explanation": "Advanced Persistent Threats (APTs) are highly skilled, well-funded threat actors (often state-sponsored) characterized by their capability, stealth, and patience to maintain long-term access to a target.",
    "id": 831
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
    "explanation": "Defacing websites to protest political or ideological issues is a classic indicator of hacktivism, which is driven by political, environmental, or social motivations.",
    "id": 832
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
    "explanation": "Shadow IT is the use of unauthorized systems, software, or hardware within an organization without approval from the IT or security department, bypassing standard controls.",
    "id": 833
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
    "explanation": "Reducing the attack surface involves minimizing the sum of all potential entry points and vulnerabilities (closing ports, disabling unused software/protocols, restricting access).",
    "id": 834
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
    "explanation": "Open-Source Intelligence (OSINT) is the collection, analysis, and dissemination of information compiled from publicly available data sources.",
    "id": 835
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
    "explanation": "STIX (Structured Threat Information eXpression) defines the format for sharing threat intelligence, while TAXII (Trusted Automated eXchange of Intelligence Information) is the transport protocol.",
    "id": 836
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
    "explanation": "A False Flag Attack is deliberately designed to mislead investigators and attribute the incident to a different country or threat actor group.",
    "id": 837
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
    "explanation": "Threat Hunting is a proactive, analyst-led search for undetected threats or malware lurking within an organization's network that have bypassed automated security controls.",
    "id": 838
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
    "explanation": "A Negligent Insider is an employee who unintentionally causes a security incident or compromises security policies due to careless behavior, lack of awareness, or bypassing guidelines.",
    "id": 839
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
    "explanation": "A Watering Hole Attack involves compromising a third-party website known to be frequented by targets from a specific organization or industry, aiming to infect them when they visit.",
    "id": 840
  },
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
    "explanation": "An Access Control Vestibule (or mantrap) uses a double-door system where the second door cannot open until the first door closes and authentication is validated, physically preventing tailgating.",
    "id": 841
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
    "explanation": "A Faraday Cage (or electromagnetic shielding) blocks electromagnetic fields, preventing wireless signals from leaking out of the room or external interference from entering.",
    "id": 842
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
    "explanation": "The Crossover Error Rate (CER) is the point where the False Acceptance Rate (FAR) equals the False Rejection Rate (FRR). A lower CER indicates a more accurate biometric system.",
    "id": 843
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
    "explanation": "Bollards are heavy concrete or steel posts designed to control or block vehicle access and absorb vehicle impacts, protecting buildings from ramming attacks.",
    "id": 844
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
    "explanation": "Hot and cold aisles layouts separate the cold air intakes of servers from their hot exhaust flows, optimizing cooling efficiency and server reliability.",
    "id": 845
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
    "explanation": "Security lighting (illumination) acts as an active deterrent by making intruders visible, and provides the light needed for security cameras to capture high-quality recordings.",
    "id": 846
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
    "explanation": "A Pan-Tilt-Zoom (PTZ) camera allows security operators to remotely control the direction, angle, and zoom of the lens to follow targets.",
    "id": 847
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
    "explanation": "Gaseous or clean agent suppression systems (like FM-200 or carbon dioxide) extinguish fires by removing oxygen or heat, without leaving residue or water that would destroy server electronics.",
    "id": 848
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
    "explanation": "Seismic or vibration sensors detect low-frequency structural vibrations caused by drilling, hammering, or sawing, making them ideal for vault structural monitoring.",
    "id": 849
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
    "explanation": "RFID credentials can be skimmed and cloned by attackers close to the card. Keeping cards in RFID-shielding sleeves blocks electromagnetic signals and prevents cloning.",
    "id": 850
  },
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
    "explanation": "Whaling is a specific type of spear phishing that targets high-profile executives (such as CEOs, CFOs, or government officials) with highly customized, targeted messages.",
    "id": 851
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
    "explanation": "Vishing (Voice Phishing) is social engineering conducted over telephone calls or VoIP systems to solicit sensitive information or credentials.",
    "id": 852
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
    "explanation": "Piggybacking occurs when an authorized person knowingly allows an unauthorized person to follow them through a checkpoint. Tailgating is when it occurs without the employee's knowledge or consent.",
    "id": 853
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
    "explanation": "Shoulder surfing is visually observing a user's screen or keyboard to capture sensitive data. It is mitigated by using privacy filters (screens) that block side-angle viewing.",
    "id": 854
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
    "explanation": "Dumpster diving is searching through trash to find information. It is prevented by enforcing document shredding policies and discarding files in locked shred bins.",
    "id": 855
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
    "explanation": "The email leverages 'Authority' (claiming to represent the CEO/audit) and 'Urgency' (10-minute limit and threat of suspension) to bypass the recipient's critical evaluation.",
    "id": 856
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
    "explanation": "Consensus (or Social Proof) is a trigger that exploits the human tendency to follow the crowd or conform to what others are doing ('Everyone else has done it').",
    "id": 857
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
    "explanation": "A Watering Hole Attack targets specific organizations by compromising a website that the employees frequently visit, exploiting their trust in that site.",
    "id": 858
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
    "explanation": "Typosquatting (or URL hijacking) involves registering domain names that are common misspellings or visual similarities of legitimate sites to deceive users.",
    "id": 859
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
    "explanation": "Credential Harvesting is the collection of user login credentials (usernames and passwords), typically achieved using cloned login pages and phishing emails.",
    "id": 860
  },
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
    "explanation": "Ransomware is malware designed to encrypt a victim's files or lock their system, demanding a ransom payment in exchange for the decryption key.",
    "id": 861
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
    "explanation": "Spyware is designed to gather information about a user's activities (including logging keystrokes via a keylogger) without their consent and transmit it to external actors.",
    "id": 862
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
    "explanation": "A Logic Bomb is malicious code inserted into a program that lies dormant until triggered by a specific event (such as a date, time, or administrative action like user deletion).",
    "id": 863
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
    "explanation": "A Trojan Horse is malware disguised as legitimate, useful software that executes hidden malicious actions behind the scenes.",
    "id": 864
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
    "explanation": "A Rootkit is malware that modifies core operating system binaries or kernel components to hide its presence and secure privileged administrative access (root/system).",
    "id": 865
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
    "explanation": "Fileless Malware operates directly in the computer's volatile memory (RAM) and hijacks legitimate system tools (like PowerShell) to avoid writing files to the disk, escaping file-based antivirus scanners.",
    "id": 866
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
    "explanation": "A Worm is self-replicating malware that spreads across networks automatically by exploiting system vulnerabilities, without requiring human interaction or file execution.",
    "id": 867
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
    "explanation": "A Botnet is a network of compromised, internet-connected devices (bots) controlled by a central Command and Control (C2) server to execute distributed attacks like DDoS.",
    "id": 868
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
    "explanation": "A Boot Sector Virus infects the system's Master Boot Record (MBR) or partition table, executing during the boot process before the OS and security software start.",
    "id": 869
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
    "explanation": "A virus requires a host file and human action (executing a program, opening a file) to run and replicate. A worm is autonomous and spreads over networks automatically without human interaction.",
    "id": 870
  },
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
    "explanation": "Data Loss Prevention (DLP) systems monitor, detect, and block unauthorized transfers of sensitive data (like PII) in transit, in use, or at rest.",
    "id": 871
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
    "explanation": "Full Disk Encryption (FDE) like BitLocker enforces Confidentiality for Data at Rest (stored on the physical drive) by rendering it unreadable if the device is stolen.",
    "id": 872
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
    "explanation": "Tokenization replaces sensitive data elements with non-sensitive equivalents (tokens) that refer back to the real data stored in a secure database vault.",
    "id": 873
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
    "explanation": "Data in use is in RAM/CPU cache; data at rest is stored on storage media (tapes/hard drives); data in transit is moving across a network.",
    "id": 874
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
    "explanation": "Protected Health Information (PHI) is health status, care provision, or payment details linked to an individual, governed by the Health Insurance Portability and Accountability Act (HIPAA).",
    "id": 875
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
    "explanation": "Digital Rights Management (DRM) or IRM controls file usage permissions (preventing copying, printing, or forwarding) even after the file is delivered to the recipient.",
    "id": 876
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
    "explanation": "Self-Encrypting Drives (SEDs) utilize a hardware cryptographic controller embedded in the drive to automatically encrypt all data written to the media.",
    "id": 877
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
    "explanation": "Data Classification is the process of organizing data into categories based on sensitivity levels to determine appropriate security controls.",
    "id": 878
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
    "explanation": "Data Minimization involves collecting and retaining only the minimum data necessary for business operations, reducing the blast radius of a breach.",
    "id": 879
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
    "explanation": "Data Wiping (Purging/Overwriting) uses software to overwrite sectors with random patterns, sanitizing the drive while leaving the hardware functional. Shredding destroys the drive; degaussing demagnetizes it, rendering it unusable.",
    "id": 880
  },
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
    "explanation": "Symmetric encryption (such as AES) is 100 to 1,000 times faster than asymmetric encryption and requires significantly less computational power, making it ideal for bulk data encryption.",
    "id": 881
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
    "explanation": "Hybrid encryption combines the key-distribution benefits of asymmetric cryptography (to share a session key) with the speed of symmetric cryptography (to encrypt bulk data).",
    "id": 882
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
    "explanation": "Elliptic Curve Cryptography (ECC) offers equivalent cryptographic strength to RSA but with much smaller key sizes (e.g., 256-bit ECC ≈ 3072-bit RSA), saving CPU and battery power.",
    "id": 883
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
    "explanation": "The Diffie-Hellman (DH) algorithm is specifically designed for secure key exchange, allowing two parties to establish a shared secret key over an insecure channel.",
    "id": 884
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
    "explanation": "A collision occurs when two different inputs produce the same hash digest. MD5 is highly vulnerable to collision attacks and is obsolete for security purposes.",
    "id": 885
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
    "explanation": "Salting adds a random value to the plaintext password before hashing. This makes each hash unique (even if passwords are the same) and completely defeats precomputed Rainbow Tables.",
    "id": 886
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
    "explanation": "A Wildcard Certificate secures a domain and an unlimited number of its first-level subdomains using a single wildcard character (*.domain.com).",
    "id": 887
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
    "explanation": "OCSP Stapling allows the web server to periodically query the CA and 'staple' a time-stamped OCSP revocation status response to the TLS handshake, saving the client from making a separate query.",
    "id": 888
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
    "explanation": "A Downgrade Attack forces a connection to fall back to an older, weaker, or deprecated protocol version to exploit known flaws in that older version.",
    "id": 889
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
    "explanation": "Blockchain uses a decentralized, peer-to-peer ledger network where transactions are cryptographically linked and immutable, eliminating the need for a central clearinghouse.",
    "id": 890
  },
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
    "explanation": "SLE = Asset Value ($100,000) * EF (0.3) = $30,000. ARO = 1 / 10 years = 0.1. ALE = SLE ($30,000) * ARO (0.1) = $3,000 per year.",
    "id": 891
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
    "explanation": "Risk Transference (or sharing) shifts the financial consequences of a risk to a third party (such as an insurance company or outsourcer) without necessarily eliminating the threat itself.",
    "id": 892
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
    "explanation": "Risk Avoidance is the strategy of eliminating a risk by discontinuing the activity, service, or system that introduces the risk.",
    "id": 893
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
    "explanation": "Risk Acceptance is the strategy of identifying a risk and deliberately taking no corrective action, typically chosen when the cost of mitigation outweighs the potential loss.",
    "id": 894
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
    "explanation": "Qualitative risk analysis uses descriptive, categorical scales (such as Low, Medium, High) and expert opinion to prioritize risks rather than numerical, financial calculations.",
    "id": 895
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
    "explanation": "Recovery Point Objective (RPO) is the maximum acceptable amount of data loss measured in time (i.e. the age of files that must be recovered from backup).",
    "id": 896
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
    "explanation": "MTBF is the average time between system failures (365 days / 4 failures = ~91.25 days). MTTR is the average time required to repair a failed system (3 hours).",
    "id": 897
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
    "explanation": "Key Risk Indicators (KRIs) are forward-looking metrics used to monitor risk exposure changes and provide early warning signals before a risk escalates into an incident.",
    "id": 898
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
    "explanation": "Risk Appetite is the broad amount of risk an organization is willing to pursue ($50,000). Risk Tolerance is the maximum acceptable risk level before action is required ($100,000).",
    "id": 899
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
    "explanation": "Control Risk is the risk that a security control will fail to prevent, detect, or mitigate a threat, often because the control degrades or becomes less effective over time.",
    "id": 900
  },
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
    "explanation": "A Supply Chain Attack compromises a weaker upstream component (such as software libraries, updates, or third-party contractors) to target down-stream customers.",
    "id": 901
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
    "explanation": "A SOC 2 Type II report is an independent audit evaluating a service organization's controls over security, availability, processing integrity, confidentiality, and privacy over a period of time.",
    "id": 902
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
    "explanation": "A Master Services Agreement (MSA) is a contract that defines the governing framework, terms, and conditions for all ongoing and future transactions between two parties.",
    "id": 903
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
    "explanation": "A Service Level Agreement (SLA) is a contract component that defines specific, measurable performance metrics (like uptime/response time) and penalties for service failures.",
    "id": 904
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
    "explanation": "Third-party integration risk occurs when external entities are granted system access, making the organization vulnerable to the vendor's credential handling and key management practices.",
    "id": 905
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
    "explanation": "A Non-Disclosure Agreement (NDA) is a legally binding contract that prevents parties from sharing confidential information, trade secrets, or proprietary data.",
    "id": 906
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
    "explanation": "During vendor onboarding, conducting a vendor assessment (security questionnaire, control review, SOC audit) is the FIRST step to evaluate the risk of the partnership.",
    "id": 907
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
    "explanation": "To prevent unauthorized persistent access and backdoors, revoking all accounts, credentials, and physical access badges is the most critical step in vendor offboarding.",
    "id": 908
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
    "explanation": "Hardware supply chain integrity controls protect physical items from modification, counterfeiting, or interception during shipping and distribution.",
    "id": 909
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
    "explanation": "A Software Bill of Materials (SBOM) is a comprehensive nested inventory of all software components, libraries, and dependencies used to build an application.",
    "id": 910
  },
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
    "explanation": "GDPR (General Data Protection Regulation) is a regulatory framework in the EU that imposes severe financial penalties (up to 4% of global turnover) for data protection non-compliance.",
    "id": 911
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
    "explanation": "PCI DSS (Payment Card Industry Data Security Standard) is a mandatory security standard for any organization that stores, processes, or transmits credit card data.",
    "id": 912
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
    "explanation": "A Policy defines the high-level security goals and commitments (the 'what' and 'why'). A Procedure provides step-by-step tactical instructions (the 'how') to execute it.",
    "id": 913
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
    "explanation": "An Acceptable Use Policy (AUP) defines the rules, behavior, and constraints that employees must follow when using corporate networks, hardware, and assets.",
    "id": 914
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
    "explanation": "Separation of Duties splits a critical process into multiple steps executed by different people to prevent collusion, fraud, or single-user compromise.",
    "id": 915
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
    "explanation": "Mandatory Vacations are designed to detect internal fraud, as unauthorized transactions or discrepancies are likely to be uncovered when another employee takes over their duties.",
    "id": 916
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
    "explanation": "Job Rotation increases redundancy (cross-training employees to eliminate single points of failure) and acts as an administrative control to detect collusion or fraud.",
    "id": 917
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
    "explanation": "A playbook or incident response procedure is a checklist of tactical, step-by-step actions designed to handle a specific security scenario consistently and rapidly.",
    "id": 918
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
    "explanation": "The POA&M (Plan of Action and Milestones) tracks the remediation of identified security gaps and compliance issues, defining tasks, risk owners, and deadlines.",
    "id": 919
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
    "explanation": "Audit remediation and tracking is the post-audit phase where organizations implement changes to fix identified audit findings and track progress.",
    "id": 920
  },
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
    "explanation": "A Configuration Management Database (CMDB) stores configuration records for all hardware and software assets (Configuration Items) and defines their relationships.",
    "id": 921
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
    "explanation": "The Change Advisory Board (CAB) is the committee responsible for evaluating, prioritizing, scheduling, and approving or rejecting proposed changes to minimize risk.",
    "id": 922
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
    "explanation": "A Backout (or Rollback) Plan is a detailed set of instructions that describes how to undo a change and restore systems to their original state if a change fails.",
    "id": 923
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
    "explanation": "COPE (Corporate Owned, Personally Enabled) is a model where the organization purchases and owns the device, but allows the employee to use it for personal tasks.",
    "id": 924
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
    "explanation": "A Sanitization Certificate (or Certificate of Destruction) is a formal document proving that data or storage media has been securely wiped or destroyed, providing audit trails.",
    "id": 925
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
    "explanation": "A Data Retention Policy defines how long different data types must be retained for business or compliance reasons, and specifies disposal requirements.",
    "id": 926
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
    "explanation": "Mobile Device Management (MDM) is a centralized software platform used to secure, monitor, manage, and remotely control (e.g. wipe) mobile assets.",
    "id": 927
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
    "explanation": "Version Control Systems (like Git) track incremental changes to code files, allowing developers to review history, audit changes, and roll back to previous stable versions.",
    "id": 928
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
    "explanation": "Asset Tagging involves attaching physical markers (like barcodes or RFID tags) to hardware to facilitate tracking, location audits, and inventory management.",
    "id": 929
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
    "explanation": "Post-Implementation Verification involves running test procedures immediately after a change is applied to verify the systems are functional and stable.",
    "id": 930
  },
  {
    "id": 931,
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
    "id": 932,
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
    "id": 933,
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
    "id": 934,
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
    "id": 935,
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
    "id": 936,
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
    "id": 937,
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
    "id": 938,
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
    "id": 939,
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
    "id": 940,
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
    "id": 941,
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
    "id": 942,
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
    "id": 943,
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
    "id": 944,
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
    "id": 945,
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
    "id": 946,
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
    "id": 947,
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
    "id": 948,
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
    "id": 949,
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
    "id": 950,
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
    "id": 951,
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
    "id": 952,
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
    "id": 953,
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
    "id": 954,
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
    "id": 955,
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
    "id": 956,
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
    "id": 957,
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
    "id": 958,
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
    "id": 959,
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
    "id": 960,
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
  {
    "id": 961,
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
    "id": 962,
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
    "id": 963,
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
    "id": 964,
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
    "id": 965,
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
    "id": 966,
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
    "id": 967,
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
    "id": 968,
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
    "id": 969,
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
    "id": 970,
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
    "id": 971,
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
    "id": 972,
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
    "id": 973,
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
    "id": 974,
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
    "id": 975,
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
    "id": 976,
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
    "id": 977,
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
    "id": 978,
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
    "id": 979,
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
    "id": 980,
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
    "id": 981,
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
    "id": 982,
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
    "id": 983,
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
    "id": 984,
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
    "id": 985,
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
    "id": 986,
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
    "id": 987,
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
    "id": 988,
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
    "id": 989,
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
    "id": 990,
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
  {
    "id": 991,
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
    "id": 992,
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
    "id": 993,
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
    "id": 994,
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
    "id": 995,
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
    "id": 996,
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
    "id": 997,
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
    "id": 998,
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
    "id": 999,
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
    "id": 1000,
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
    "id": 1001,
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
    "id": 1002,
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
    "id": 1003,
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
    "id": 1004,
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
    "id": 1005,
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
    "id": 1006,
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
    "id": 1007,
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
    "id": 1008,
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
    "id": 1009,
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
    "id": 1010,
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
    "id": 1011,
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
    "id": 1012,
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
    "id": 1013,
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
    "id": 1014,
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
    "id": 1015,
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
    "id": 1016,
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
    "id": 1017,
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
    "id": 1018,
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
    "id": 1019,
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
    "id": 1020,
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
  },
  {
    "id": 821,
    "section": "S16",
    "question": "A security administrator detects persistent SQL injection attack attempts targeting the database of a public-facing web server. The server is already behind a packet filtering firewall. Which of the following solutions is the BEST choice to mitigate this specific type of application-layer attack?",
    "options": [
      "A stateful packet inspection firewall",
      "A Web Application Firewall (WAF)",
      "A Next-Generation Firewall (NGFW) configured with IDS",
      "A Protocol Packet Wrapper (PPW)"
    ],
    "answer": 1,
    "correctAnswer": 1,
    "explanation": "The critical modifier BEST points to the most specific and effective solution for the application layer (L7). A Web Application Firewall (WAF) is specifically designed to inspect HTTP/HTTPS traffic and prevent web-based attacks such as SQL Injection and Cross-Site Scripting (XSS). Stateful packet inspection firewalls operate at lower layers (L4) and do not analyze the request payload content. An NGFW provides broad perimeter defense, but a WAF is the specialized control for web application protection. PPW is an invented term."
  },
  {
    "id": 822,
    "section": "S16",
    "question": "A growing organization wants to securely interconnect multiple physical branch offices and remote workers directly to their cloud resources. Management requires a solution that unifies intelligent network routing with integrated security services (such as CASB and Zero Trust) managed centrally from the cloud. Which of the following represents the BEST solution to meet this requirement?",
    "options": [
      "Software-Defined Wide Area Network (SD-WAN)",
      "Virtual Private Network (VPN) with traditional IPsec tunnels",
      "Cloud Edge Security Multiplexer (CESM)",
      "Secure Access Service Edge (SASE)"
    ],
    "answer": 3,
    "correctAnswer": 3,
    "explanation": "The critical modifier BEST demands an integrated solution that combines network routing with cloud-native security services. SASE unifies SD-WAN with advanced security functions in a single cloud-delivered framework. SD-WAN provides network connectivity and intelligent routing but does not natively include the full cloud security suite of SASE. A traditional IPsec VPN lacks the enrutamiento optimization and centralized cloud management of SASE. CESM is an invented term."
  },
  {
    "id": 823,
    "section": "S16",
    "question": "A network engineer is designing the wireless authentication process for an 802.1X corporate network. They want to implement an extensible protocol that encapsulates credentials inside a secure TLS tunnel, but requires ONLY a digital certificate on the authentication server to simplify deployment on user endpoints. Which EAP protocol should they select?",
    "options": [
      "Protected Extensible Authentication Protocol (PEAP)",
      "EAP-TLS (EAP Transport Layer Security)",
      "EAP-MD5 (Message Digest 5)",
      "Secure Tunneling Authentication Protocol (STAP)"
    ],
    "answer": 0,
    "correctAnswer": 0,
    "explanation": "The critical modifier requires a protocol that uses a TLS tunnel but only requires a server-side certificate. PEAP establishes a secure TLS tunnel and only requires a digital certificate on the authentication server to validate the server's identity to the client. EAP-TLS is highly secure but requires certificates on both the server and all client devices, making it more complex to deploy. EAP-MD5 does not encrypt credentials within a TLS tunnel and is vulnerable. STAP is an invented protocol."
  },
  {
    "id": 824,
    "section": "S16",
    "question": "A security administrator is reviewing the rule set of a company's perimeter firewall. The administrator observes a rule at the end of the list that blocks all traffic that has not been explicitly allowed by previous rules. Which of the following security principles does this rule represent FIRST and most directly?",
    "options": [
      "Least Privilege",
      "Absolute Packet Dropping (APD)",
      "Implicit Deny",
      "Defense in Depth"
    ],
    "answer": 2,
    "correctAnswer": 2,
    "explanation": "The modifier FIRST asks for the fundamental security principle represented by the block-by-default rule. 'Implicit Deny' is the policy stating that all traffic is blocked unless it is explicitly permitted. Least Privilege applies to user access permissions rather than network traffic flow. Defense in Depth is a multi-layered security approach, not a specific firewall rule configuration. APD is an invented term."
  },
  {
    "id": 825,
    "section": "S17",
    "question": "A senior database administrator is terminated immediately due to a severe security policy violation. The security team must ensure that the former employee cannot connect to or modify critical production databases from external networks. Which IAM lifecycle process should the team execute FIRST?",
    "options": [
      "Identity Proofing",
      "Deprovisioning",
      "Role-Based Access Control (RBAC) modification",
      "Account Reallocation"
    ],
    "answer": 1,
    "correctAnswer": 1,
    "explanation": "The modifier FIRST demands the immediate action to remove access. Deprovisioning is the process of revoking or deleting user accounts and access rights when a user leaves the organization, neutralizing potential insider threats. Identity Proofing occurs at the beginning of the identity lifecycle (prior to account creation). Modifying RBAC roles is slow and does not guarantee the account itself is completely disabled. Account Reallocation is an invented term."
  },
  {
    "id": 826,
    "section": "S17",
    "question": "A company wants to implement Single Sign-On (SSO) to allow users to authenticate across multiple mobile and single-page web applications. The security architect specifies a modern, REST API-based protocol that uses JSON Web Tokens (JWT) to verify user identity through an authorization server. Which of the following protocols is the BEST fit for this task?",
    "options": [
      "Security Assertion Markup Language (SAML 2.0)",
      "OAuth 2.0",
      "OpenID Connect (OIDC)",
      "Federated Identity REST Protocol (FIRP)"
    ],
    "answer": 2,
    "correctAnswer": 2,
    "explanation": "The critical modifier BEST requires identity verification (authentication) using JSON Web Tokens and REST APIs. OpenID Connect (OIDC) is an identity layer built on top of OAuth 2.0 that uses JWTs to authenticate users. SAML 2.0 also enables SSO but relies on heavier XML and SOAP structures, making it less suitable for modern mobile and web clients. OAuth 2.0 is designed for access delegation (authorization), not directly for user identity verification. FIRP is an invented term."
  },
  {
    "id": 827,
    "section": "S17",
    "question": "To log into a secure workstation that processes credit card transactions, an employee must scan their physical smartcard, input a memorized 6-digit PIN, and provide a real-time voice sample. How many distinct authentication factors are used in this configuration?",
    "options": [
      "Three factors (something you know, something you have, and something you are)",
      "Two factors (something you have and something you know)",
      "One factor (three instances of something you know)",
      "Three factors (something you know, something you do, and somewhere you are)"
    ],
    "answer": 0,
    "correctAnswer": 0,
    "explanation": "Three distinct authentication factors are used: (1) something you have (the physical smartcard), (2) something you know (the memorized PIN), and (3) something you are (the biometrics of the voice sample). Effective multi-factor authentication requires physically distinct categories of credentials. The other options miscalculate the count or define factors not present in the scenario."
  },
  {
    "id": 828,
    "section": "S17",
    "question": "A financial organization needs to tightly manage and monitor the activities of its system administrators. They want to ensure that superuser credentials are not persistently shared, that each login requires real-time approval, and that administrative console sessions are video-recorded for auditing. Which type of solution BEST meets this requirement?",
    "options": [
      "Single Sign-On (SSO)",
      "Role-Based Access Control (RBAC)",
      "Administrative Access Sentinel (AAS)",
      "Privileged Access Management (PAM)"
    ],
    "answer": 3,
    "correctAnswer": 3,
    "explanation": "The critical modifier BEST points to the specific solution for high-privileged admin accounts. A Privileged Access Management (PAM) solution is designed to control, secure, monitor, and audit administrative (root/superuser) accounts, providing credential vaulting, temporary checked-out access, real-time approval workflows, and full session recording. SSO simplifies end-user logins but does not manage administrative infrastructure credentials. RBAC limits standard user permissions but does not provide dynamic session management or console recordings. AAS is an invented term."
  },
  {
    "id": 829,
    "section": "S18",
    "question": "A security analyst discovers that users of an online discussion board can embed malicious JavaScript code into their forum posts. When other users view the posts, the script executes automatically in their local browsers, sending their session tokens to the attacker's server. What type of attack is occurring, and what is the MOST likely remediation?",
    "options": [
      "Cross-Site Request Forgery (XSRF); remediated by using unique cryptographic tokens per form.",
      "Stored Cross-Site Scripting (XSS); remediated by implementing input validation and output encoding.",
      "SQL Injection; remediated by using parameterized database queries.",
      "Dynamic Script Hijacking (DSH); remediated by implementing DOM isolation."
    ],
    "answer": 1,
    "correctAnswer": 1,
    "explanation": "The attack described is Stored (or Persistent) Cross-Site Scripting (XSS) because the malicious JavaScript is stored in the database of the forum and executes in the browsers of visiting users. The MOST likely and effective remediation is to perform rigorous input validation and output encoding before rendering user-submitted content. XSRF tricks a user's browser into performing an unauthorized action but does not involve direct script injection. SQL Injection targets the backend database rather than browser execution. DSH is an invented term."
  },
  {
    "id": 830,
    "section": "S18",
    "question": "A developer writes a funds transfer application where the system verifies the account balance before completing a withdrawal. If two withdrawal requests are submitted almost simultaneously, the system executes both balance checks before updating the final balance, allowing the user to withdraw more money than they actually have. What type of vulnerability does this scenario describe?",
    "options": [
      "Buffer Overflow",
      "Integer Overflow",
      "Race Condition",
      "Concurrent Memory Leak"
    ],
    "answer": 2,
    "correctAnswer": 2,
    "explanation": "A race condition occurs when the security or state of a system depends on the execution sequence or timing of concurrent processes (often known as Time-of-Check to Time-of-Use or TOCTOU). Here, the execution overlap between checking and withdrawing allows the exploit. A buffer overflow writes data past allocated memory boundaries. An integer overflow is an arithmetic error when a value exceeds storage capacity. Concurrent memory leak is an invented concept."
  },
  {
    "id": 831,
    "section": "S18",
    "question": "A power plant operates a critical turbine control system running on an unsupported version of Windows XP. The original hardware manufacturer went out of business years ago, and the proprietary software cannot be migrated to a modern OS without causing an unacceptable total service outage. Which of the following actions should the security administrator take FIRST to protect this system?",
    "options": [
      "Isolate the legacy system on a dedicated network segment with no internet access (air gap).",
      "Enable automatic updates in the control panel of the legacy operating system.",
      "Upgrade the system directly to Windows 11 using compatibility mode.",
      "Implement a Hybrid Update Gateway (HUG)."
    ],
    "answer": 0,
    "correctAnswer": 0,
    "explanation": "For end-of-life (EOL) or unsupported legacy systems that cannot be patched or upgraded, the FIRST and most effective mitigation is to isolate the device using network segmentation or an air gap to prevent network-based attacks. Enabling updates on Windows XP is useless as no official security patches are released by Microsoft. Upgrading will break the proprietary turbine software. HUG is an invented term."
  },
  {
    "id": 832,
    "section": "S18",
    "question": "An attacker manipulates the input fields of a web login form by entering the string `' OR '1'='1`. The website authenticates the attacker and logs them in as the administrator without requiring a password. Which of the following is the root cause of this vulnerability?",
    "options": [
      "A directory traversal flaw that exposes local system files",
      "A lack of anti-CSRF tokens in the authentication form",
      "A stack overflow in the authentication rendering engine",
      "A lack of input sanitization allowing SQL query injection"
    ],
    "answer": 3,
    "correctAnswer": 3,
    "explanation": "The vulnerability is SQL Injection, which is caused by a lack of input sanitization, allowing the database engine to interpret the input string as logical query code (making the OR condition always true and bypassing password verification). Directory traversal accesses local file paths (`../`). CSRF/XSRF exploits browser session trust and does not modify query logic. A stack overflow attempts to corrupt memory execution, not database logic."
  },
  {
    "id": 833,
    "section": "S19",
    "question": "An attacker uses a wireless packet analyzer to capture network authentication traffic between an employee and a legacy server. The next day, the attacker retransmits the captured packets to the server to establish an unauthorized active session. What type of attack is this, and how is it BEST mitigated?",
    "options": [
      "On-Path (Man-in-the-Middle) attack; mitigated by implementing static ARP tables on local switches.",
      "Replay attack; mitigated by using unique session timestamps and cryptographic nonces.",
      "Session hijacking; mitigated by forcing user password rotation every 30 days.",
      "Protocol Rejection Attack (PRA); mitigated by physical port blocking."
    ],
    "answer": 1,
    "correctAnswer": 1,
    "explanation": "A replay attack involves capturing valid authentication packets and retransmitting them later to gain unauthorized access. The BEST mitigation is implementing session tokens with timestamps or cryptographic nonces (number used once) so that the server rejects duplicate or delayed packets. An On-Path attack requires active routing interception rather than simple retransmission. Session hijacking steals an active session cookie in real time. Password rotation does not stop the replay of captured traffic. PRA is an invented term."
  },
  {
    "id": 834,
    "section": "S19",
    "question": "A corporate web server suddenly stops responding to incoming requests. The system administrator checks network logs and finds thousands of connections in a half-open state (SYN_RECEIVED). The attacker is sending connection requests with spoofed source IP addresses and never completes the handshake. What type of DoS attack is this, and which control should be implemented FIRST?",
    "options": [
      "Permanent Denial of Service (PDoS); reinstall the edge router's firmware.",
      "SYN Flood DoS; implement flood guards and shorten session timeout thresholds.",
      "Fork Bomb; configure process execution limits for the OS root user.",
      "Packet Exhaustion Storm (PES); implement static routing on the WAN."
    ],
    "answer": 1,
    "correctAnswer": 1,
    "explanation": "The attack is a SYN Flood, which exhausts a server's connection tables by leaving connections in a 'half-open' state. The FIRST and most direct control is implementing flood guards or shortening the session timeout threshold to drop incomplete connections quickly. PDoS damages hardware by destroying firmware. A fork bomb is a local host exploit that spawns infinite processes. PES is an invented term."
  },
  {
    "id": 835,
    "section": "S19",
    "question": "A cloud security analyst reviews the HTTP access logs of a storage server and notices multiple requests containing the following string in the URI: `GET /files/download.php?file=../../../../etc/passwd`. What specific malicious activity is the attacker attempting?",
    "options": [
      "Directory Traversal",
      "Privilege Escalation",
      "SQL Injection",
      "Segmental Access Traversal (SAT)"
    ],
    "answer": 0,
    "correctAnswer": 0,
    "explanation": "The presence of the relative path symbols (`../`) indicates a Directory Traversal attack, which attempts to escape the web server root directory to read arbitrary files (like `/etc/passwd`) from the host operating system. Privilege escalation may be the ultimate goal, but the file path manipulation shown is directory traversal. SQL injection targets databases. SAT is an invented term."
  },
  {
    "id": 836,
    "section": "S19",
    "question": "An attacker successfully compromises a low-privileged user account via a phishing campaign. Once inside the local machine, the attacker runs an exploit that targets a known vulnerability in the OS kernel to obtain full root/administrator privileges. How is this specific malicious activity classified?",
    "options": [
      "Session Hijacking",
      "Replay Attack",
      "Privilege Escalation",
      "Protocol Impersonation Exploit (PIE)"
    ],
    "answer": 2,
    "correctAnswer": 2,
    "explanation": "Privilege Escalation is the process where an attacker leverages software bugs or configuration flaws to gain higher access levels (such as root, admin, or system permissions) than initially assigned. Session hijacking steals active connection cookies. Replay attacks reuse captured authentication data. PIE is an invented term."
  },
  {
    "id": 837,
    "section": "S20",
    "question": "A system administrator wants to harden several critical Linux database servers. They need to ensure that, even if an administrative process like Apache is compromised by an attacker, the process is strictly blocked from accessing files outside its designated domain. Which of the following technologies represents the BEST option?",
    "options": [
      "Security-Enhanced Linux (SELinux)",
      "Group Policy Objects (GPO)",
      "Active Directory Role-Based Access Control",
      "Kernel Shield Module (KSM)"
    ],
    "answer": 0,
    "correctAnswer": 0,
    "explanation": "SELinux implements Mandatory Access Control (MAC) in the Linux kernel, restricting processes strictly to their defined security domains. This containment prevents a compromised process from accessing unauthorized files even if run with root privileges. GPO is a Windows administrative tool. AD RBAC maps user access but does not enforce process containment at the OS kernel level. KSM is an invented term."
  },
  {
    "id": 838,
    "section": "S20",
    "question": "A cybersecurity engineer audits the default configurations of newly installed network switches. The engineer disables Telnet (port 23) and the HTTP server (port 80) due to their lack of encryption. Which secure protocol should be enabled FIRST for console-based remote management?",
    "options": [
      "SMTPS (Port 587)",
      "SSH (Port 22)",
      "SNMP (Port 161)",
      "Secure Remote Connection (SRC - Port 8022)"
    ],
    "answer": 1,
    "correctAnswer": 1,
    "explanation": "SSH (Secure Shell) on port 22 encrypts administrative console sessions, serving as the direct secure replacement for Telnet. SMTPS is for secure email delivery. SNMP on port 161 is for monitoring and lacks encryption unless version 3 is used. SRC is an invented term."
  },
  {
    "id": 839,
    "section": "S20",
    "question": "A large corporation wants to standardize the security posture of thousands of Windows workstations prior to deployment. The security team defines a configuration template that contains disabled services, registry settings, and strict password policies. Which concept does this template represent?",
    "options": [
      "Risk Tolerance Matrix",
      "Change Management Log",
      "Secure Baseline",
      "Integrity Validation Script (IVS)"
    ],
    "answer": 2,
    "correctAnswer": 2,
    "explanation": "A Secure Baseline is a documented set of minimum security settings and configurations that system platforms must conform to before deployment. A risk tolerance matrix evaluates organizational risk appetite. A change management log records changes made to systems over time. IVS is an invented term."
  },
  {
    "id": 840,
    "section": "S20",
    "question": "A system administrator notices that production servers frequently experience configuration drift because support technicians make manual configuration changes to resolve help desk tickets. Which of the following is the BEST method to automate hardening and ensure policy consistency across the fleet?",
    "options": [
      "Implement Full Disk Encryption (FDE) on all servers.",
      "Perform weekly manual audits using paper-based checklists.",
      "Use Group Policy Objects (GPO) or Infrastructure as Code (IaC) tools.",
      "Configure persistent IPsec tunnels between the servers."
    ],
    "answer": 2,
    "correctAnswer": 2,
    "explanation": "The critical modifier BEST asks for automation and configuration drift prevention. GPOs (in Windows) and Infrastructure as Code (IaC, like Ansible or Terraform) define hardening templates that are automatically enforced across all servers, ensuring consistency. FDE protects data at rest but does not prevent configuration changes. Manual audits are slow and error-prone. IPsec secures network traffic in transit."
  },
  {
    "id": 841,
    "section": "S21",
    "question": "An organization is planning a wireless network deployment in its new administrative headquarters. To satisfy physical security requirements, the network architect wants to prevent the wireless signal from easily leaking into the exterior parking lot while maximizing coverage indoors. Which of the following is the BEST approach?",
    "options": [
      "Increase the transmission power of WAPs located near windows to block external connections.",
      "Place WAPs in central locations and mount directional antennas facing inward on exterior walls.",
      "Configure all office WAPs to operate exclusively on overlapping channels in the 2.4 GHz band.",
      "Install a Radio Frequency Perimeter Isolator (RFPI) around the building facade."
    ],
    "answer": 1,
    "correctAnswer": 1,
    "explanation": "The critical modifier BEST balances internal performance with security. Central placement distances the signal source from external boundaries, while directional antennas on exterior walls focus signal propagation inward, reducing spillover. Increasing transmit power exacerbates signal leakage. Operating on overlapping channels degrades performance due to interference. RFPI is an invented term."
  },
  {
    "id": 842,
    "section": "S21",
    "question": "A security administrator receives reports that customers are receiving phishing emails that spoof the company's official domain name. The administrator wants to implement a DNS-based defense that lists the authorized mail servers allowed to send messages on behalf of the domain. Which DNS record should they configure FIRST?",
    "options": [
      "A Sender Policy Framework (SPF) record",
      "A DomainKeys Identified Mail (DKIM) record",
      "A Domain Name System Security Extensions (DNSSEC) record",
      "A Mail Validation Token (MVT) record"
    ],
    "answer": 0,
    "correctAnswer": 0,
    "explanation": "The modifier FIRST points to the base DNS record that lists authorized sender IPs. An SPF record publishes the list of authorized outgoing mail servers. DKIM adds digital signatures to email headers but does not list IP addresses directly. DNSSEC validates DNS records against tampering but does not verify email sender origins. MVT is an invented term."
  },
  {
    "id": 843,
    "section": "S21",
    "question": "A security analyst evaluates an endpoint protection solution to detect and mitigate zero-day ransomware attacks. The tool must analyze host behavior in real time, automatically isolate compromised devices from the network, and collect forensic telemetry. Which solution meets these requirements?",
    "options": [
      "Traditional signature-based antivirus",
      "Network Access Control (NAC)",
      "Host Endpoint Shield (HES)",
      "Endpoint Detection and Response (EDR)"
    ],
    "answer": 3,
    "correctAnswer": 3,
    "explanation": "EDR (Endpoint Detection and Response) monitors host behavior in real time to detect anomalies and zero-day threats, provides automated isolation capability, and facilitates forensic analysis. Signature antivirus relies on known malware files. NAC controls network admission based on host compliance posture rather than continuous runtime process execution. HES is an invented term."
  },
  {
    "id": 844,
    "section": "S21",
    "question": "An enterprise updates its wireless access points to the WPA3 standard. The security architect explains that this upgrade will prevent attackers from performing offline dictionary attacks after capturing the initial handshake. Which cryptographic mechanism in WPA3 provides this protection?",
    "options": [
      "Temporal Key Integrity Protocol (TKIP)",
      "Simultaneous Authentication of Equals (SAE)",
      "Wired Equivalent Privacy (WEP)",
      "Advanced Handshake Integrity Protocol (AHIP)"
    ],
    "answer": 1,
    "correctAnswer": 1,
    "explanation": "WPA3 replaces the vulnerable four-way handshake of WPA2 with Simultaneous Authentication of Equals (SAE) for key establishment. SAE uses an exchange that is resistant to passive interception, mitigating offline dictionary attacks and providing forward secrecy. TKIP and WEP are legacy protocols. AHIP is an invented term."
  },
  {
    "id": 845,
    "section": "S22",
    "question": "A security officer plans an internal vulnerability scan to audit the patch levels and configuration settings of several production databases. To minimize network overhead and ensure a low false-positive rate, which scanning approach should the officer select?",
    "options": [
      "A non-credentialed scan",
      "A passive network capture scan",
      "A credentialed scan",
      "A black-box port sweep"
    ],
    "answer": 2,
    "correctAnswer": 2,
    "explanation": "A credentialed scan logs directly into target hosts using valid credentials, enabling precise checks of the registry, package configurations, and patch directories with minimal network traffic and a low false-positive rate. Non-credentialed scans inspect systems externally, causing more network traffic and higher false-positive rates. Passive capture cannot check local configuration details. Port sweeps only identify open ports, not vulnerability details."
  },
  {
    "id": 846,
    "section": "S22",
    "question": "A vulnerability report identifies a critical remote code execution vulnerability in a company's web-based ERP system. Because the ERP contains highly customized legacy code, the software vendor estimates it will take three months to deliver a safe patch. To reduce the likelihood of exploitation immediately without shutting down the service, the IT team implements restrictive firewall rules and deploys a WAF in front of the ERP. Which risk management strategy does this action represent?",
    "options": [
      "Risk Mitigation",
      "Risk Avoidance",
      "Risk Transference",
      "Vulnerability Deflection"
    ],
    "answer": 0,
    "correctAnswer": 0,
    "explanation": "Risk Mitigation involves applying technical controls or compensating measures (like firewall rules and WAFs) to reduce the likelihood or impact of a threat when a vulnerability cannot be permanently fixed (patched) immediately. Risk avoidance would require decommissioning the ERP system. Risk transference shifts the liability to a third party (like insurance). Vulnerability deflection is an invented term."
  },
  {
    "id": 847,
    "section": "S22",
    "question": "A security analyst reviews the following CVSS v3 vector string for a newly published vulnerability: `CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`. What information does the metric `AV:N` convey about the vulnerability's exploitability?",
    "options": [
      "The attacker must possess network-level credentials before exploiting the vulnerability (Normal).",
      "The vulnerability can only be exploited if the victim performs an interactive network action (Neighbor).",
      "The attack can be executed remotely over a network connection without requiring physical or local access (Network).",
      "The attack requires the target system to be located within an isolated private network (Null)."
    ],
    "answer": 2,
    "correctAnswer": 2,
    "explanation": "The AV (Attack Vector) metric in CVSS defines the logical or physical path required to exploit a vulnerability. The value `N` (Network) indicates the vulnerability is exploitable remotely over a network interface without local or physical console access. The other options describe incorrect parameter definitions or metrics."
  },
  {
    "id": 848,
    "section": "S22",
    "question": "An independent security researcher discovers a critical authentication bypass vulnerability in a router vendor's firmware. The researcher sends the technical details confidentially to the vendor, giving them 90 days to create and deploy a patch before public release. What ethical disclosure practice is this?",
    "options": [
      "Bug Bounty Program",
      "Full Disclosure",
      "Ethical Patching Alliance (EPA)",
      "Responsible / Coordinated Disclosure"
    ],
    "answer": 3,
    "correctAnswer": 3,
    "explanation": "Responsible (or Coordinated) Disclosure is the practice of reporting software vulnerabilities privately to the vendor to give them time to address the issue before it is made public. Bug bounty programs are formal incentive structures, but the coordinated disclosure practice itself is called responsible disclosure. Full disclosure immediately publishes details without notifying the vendor first. EPA is an invented term."
  },
  {
    "section": "S16",
    "question": "A security administrator detects persistent SQL injection attack attempts targeting the database of a public-facing web server. The server is already behind a packet filtering firewall. Which of the following solutions is the BEST choice to mitigate this specific type of application-layer attack?",
    "options": [
      "A stateful packet inspection firewall",
      "A Web Application Firewall (WAF)",
      "A Next-Generation Firewall (NGFW) configured with IDS",
      "A Protocol Packet Wrapper (PPW)"
    ],
    "answer": 1,
    "explanation": "The critical modifier BEST points to the most specific and effective solution for the application layer (L7). A Web Application Firewall (WAF) is specifically designed to inspect HTTP/HTTPS traffic and prevent web-based attacks such as SQL Injection and Cross-Site Scripting (XSS). Stateful packet inspection firewalls operate at lower layers (L4) and do not analyze the request payload content. An NGFW provides broad perimeter defense, but a WAF is the specialized control for web application protection. PPW is an invented term.",
    "id": 1021,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A growing organization wants to securely interconnect multiple physical branch offices and remote workers directly to their cloud resources. Management requires a solution that unifies intelligent network routing with integrated security services (such as CASB and Zero Trust) managed centrally from the cloud. Which of the following represents the BEST solution to meet this requirement?",
    "options": [
      "Software-Defined Wide Area Network (SD-WAN)",
      "Virtual Private Network (VPN) with traditional IPsec tunnels",
      "Cloud Edge Security Multiplexer (CESM)",
      "Secure Access Service Edge (SASE)"
    ],
    "answer": 3,
    "explanation": "The critical modifier BEST demands an integrated solution that combines network routing with cloud-native security services. SASE unifies SD-WAN with advanced security functions in a single cloud-delivered framework. SD-WAN provides network connectivity and intelligent routing but does not natively include the full cloud security suite of SASE. A traditional IPsec VPN lacks the dynamic routing optimization and centralized cloud management of SASE. CESM is an invented term.",
    "id": 1022,
    "correctAnswer": 3
  },
  {
    "section": "S16",
    "question": "A network engineer is designing the wireless authentication process for an 802.1X corporate network. They want to implement an extensible protocol that encapsulates credentials inside a secure TLS tunnel, but requires ONLY a digital certificate on the authentication server to simplify deployment on user endpoints. Which EAP protocol should they select?",
    "options": [
      "Protected Extensible Authentication Protocol (PEAP)",
      "EAP-TLS (EAP Transport Layer Security)",
      "EAP-MD5 (Message Digest 5)",
      "Secure Tunneling Authentication Protocol (STAP)"
    ],
    "answer": 0,
    "explanation": "The critical modifier requires a protocol that uses a TLS tunnel but only requires a server-side certificate. PEAP establishes a secure TLS tunnel and only requires a digital certificate on the authentication server to validate the server's identity to the client. EAP-TLS is highly secure but requires certificates on both the server and all client devices, making it more complex to deploy. EAP-MD5 does not encrypt credentials within a TLS tunnel and is vulnerable. STAP is an invented protocol.",
    "id": 1023,
    "correctAnswer": 0
  },
  {
    "section": "S16",
    "question": "A security administrator is reviewing the rule set of a company's perimeter firewall. The administrator observes a rule at the end of the list that blocks all traffic that has not been explicitly allowed by previous rules. Which of the following security principles does this rule represent FIRST and most directly?",
    "options": [
      "Least Privilege",
      "Absolute Packet Dropping (APD)",
      "Implicit Deny",
      "Defense in Depth"
    ],
    "answer": 2,
    "explanation": "The modifier FIRST asks for the fundamental security principle represented by the block-by-default rule. 'Implicit Deny' is the policy stating that all traffic is blocked unless it is explicitly permitted. Least Privilege applies to user access permissions rather than network traffic flow. Defense in Depth is a multi-layered security approach, not a specific firewall rule configuration. APD is an invented term.",
    "id": 1024,
    "correctAnswer": 2
  },
  {
    "section": "S16",
    "question": "A security engineer is deploying an Intrusion Prevention System (IPS). The engineer wants to ensure that the device actively blocks malicious traffic in real time as it flows through the network. Which deployment method is the BEST choice?",
    "options": [
      "Out-of-band passive tap placement",
      "Inline active mode deployment",
      "Port mirroring switch configuration",
      "Asynchronous Packet Filtering (APF)"
    ],
    "answer": 1,
    "explanation": "Inline active mode deployment places the IPS directly in the physical traffic path (inline), allowing it to inspect and drop malicious packets before they reach their destination. Out-of-band passive tap and port mirroring are passive deployment methods that can only detect and log traffic (functioning as an IDS) rather than block it actively. APF is an invented term.",
    "id": 1025,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "An enterprise wants to shield its internal clients from directly connecting to external malicious websites and also cache web content to save bandwidth. Which network appliance should the administrator deploy perimetrically?",
    "options": [
      "Reverse Proxy",
      "Forward Proxy",
      "Web Application Firewall (WAF)",
      "Endpoint Security Router (ESR)"
    ],
    "answer": 1,
    "explanation": "A Forward Proxy intercepts and handles outbound client requests from the internal network to external servers, providing client anonymity, web filtering, and caching. A Reverse Proxy does the opposite: it protects external clients by routing inbound traffic to internal web servers. A WAF inspects inbound application layer traffic for web exploits. ESR is an invented term.",
    "id": 1026,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A network architect is configuring a load balancer to distribute traffic across a pool of database servers. The architect wants to ensure that a client's transaction state is maintained by routing all sequential requests from the same IP address to the exact same server. Which algorithm should they select?",
    "options": [
      "Round Robin",
      "Least Connections",
      "Session Affinity / Persistence",
      "Load Balancing State Synchronizer (LBSS)"
    ],
    "answer": 2,
    "explanation": "Session Affinity (or Persistence) is a load balancing mechanism that binds a client's session to a specific server in the pool, ensuring stateful continuity. Round Robin distributes connections sequentially without considering client state. Least Connections routes traffic to the server with the fewest active sessions. LBSS is an invented term.",
    "id": 1027,
    "correctAnswer": 2
  },
  {
    "section": "S16",
    "question": "An administrator configures port security on an edge switch. They want to ensure that if an unauthorized MAC address is detected, the port immediately blocks all traffic, sends an SNMP trap alert, increments the violation counter, but does NOT shut down the physical interface. Which violation mode should they choose?",
    "options": [
      "Shutdown",
      "Protect",
      "Restrict",
      "Disable"
    ],
    "answer": 2,
    "explanation": "In port security, Restrict mode drops packets from unauthorized MAC addresses, increments the security violation counter, and generates an SNMP trap alert without physically shutting down the port. Shutdown mode disables the interface. Protect mode drops packets quietly without generating alerts or incrementing counters. Disable is not a standard Cisco/port-security mode.",
    "id": 1028,
    "correctAnswer": 2
  },
  {
    "id": 1029,
    "section": "S16",
    "question": "A security engineer is implementing Network Access Control (NAC) to enforce health compliance on endpoints. They want to ensure that any device lacking the latest antivirus definitions is redirected to a restricted segment where they can update their definitions. Where should these non-compliant devices be routed?",
    "options": [
      "Quarantine Network / Segment",
      "Active Directory Domain Controller",
      "Demilitarized Zone (DMZ)",
      "Secure Sandbox Segment (SSS)"
    ],
    "answer": 0,
    "explanation": "A Quarantine Network is a restricted segment designed to isolate non-compliant devices so they can undergo remediation (e.g., updating signatures) before gaining access to the main network. A DMZ is for public-facing servers. AD Domain Controllers handle directory authentication. SSS is an invented term.",
    "correctAnswer": 0
  },
  {
    "section": "S16",
    "question": "A network administrator needs to select an IPsec protocol configuration to secure host-to-host communication. They require a configuration that provides mutual authentication and data integrity, but does NOT encrypt the actual payload data. Which protocol should they use?",
    "options": [
      "Encapsulating Security Payload (ESP)",
      "Authentication Header (AH)",
      "Internet Key Exchange (IKE)",
      "Payload Integrity Wrapper (PIW)"
    ],
    "answer": 1,
    "explanation": "AH (Authentication Header) provides data integrity, origin authentication, and anti-replay protection, but it does NOT provide confidentiality (no encryption). ESP provides confidentiality in addition to integrity and authentication. IKE is used to negotiate security associations. PIW is an invented term.",
    "id": 1030,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A security administrator is configuring a site-to-site VPN tunnel. They must ensure that the entire original IP packet (including the header and payload) is encrypted and encapsulated within a new outer IP header. Which IPsec mode must they implement?",
    "options": [
      "Transport Mode",
      "Tunnel Mode",
      "Secure Mode",
      "Encapsulated Routing Protocol (ERP)"
    ],
    "answer": 1,
    "explanation": "Tunnel Mode encrypts and encapsulates the entire original IP packet within a new IP header, which is standard for gateway-to-gateway (site-to-site) VPNs. Transport Mode only encrypts the payload, keeping the original IP header, and is typically used for client-to-client (host-to-host) setups. Secure Mode and ERP are invented/generic terms.",
    "id": 1031,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A company is configuring a remote access VPN for teleworkers. The IT director wants to minimize internet bandwidth utilization on the corporate network by ensuring that only corporate-bound traffic is routed through the VPN tunnel, while standard public internet web traffic goes directly through the user's home ISP. Which VPN feature should they enable?",
    "options": [
      "Full Tunneling",
      "Split Tunneling",
      "Asymmetric Encryption Routing (AER)",
      "Bandwidth Throttling"
    ],
    "answer": 1,
    "explanation": "Split Tunneling routes only corporate-targeted traffic through the secure VPN tunnel, while other internet traffic goes directly out of the user's local connection, saving corporate gateway bandwidth. Full Tunneling sends all traffic through the corporate VPN, which increases security posture but consumes heavy bandwidth. AER is an invented term.",
    "id": 1032,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A network security administrator needs to upgrade the monitoring configurations of their enterprise routers. They require a protocol that supports secure cryptographic authentication and encryption of SNMP polling messages to protect network telemetry. Which version of SNMP must they select?",
    "options": [
      "SNMP v1",
      "SNMP v2c",
      "SNMP v3",
      "SNMP v4"
    ],
    "answer": 2,
    "explanation": "SNMP v3 is the only version that provides secure access by implementing cryptographic authentication (using MD5 or SHA) and data encryption (using DES or AES). SNMP v1 and v2c send community strings in cleartext. SNMP v4 does not exist.",
    "id": 1033,
    "correctAnswer": 2
  },
  {
    "section": "S16",
    "question": "A security architect wants to prevent DNS cache poisoning and spoofing attacks against the organization's public domain. They want to ensure that DNS queries can be cryptographically validated using digital signatures. Which protocol must they configure?",
    "options": [
      "Domain Name System Security Extensions (DNSSEC)",
      "Secure DNS Lookup (SDL)",
      "Domain Name System over TLS (DoT)",
      "DNS Signature Wrapper (DSW)"
    ],
    "answer": 0,
    "explanation": "DNSSEC uses public-key cryptography to digitally sign DNS records, ensuring that DNS query responses are authentic and have not been altered in transit. DoT encrypts the DNS query channel to protect privacy but doesn't sign records. SDL and DSW are invented terms.",
    "id": 1034,
    "correctAnswer": 0
  },
  {
    "section": "S16",
    "question": "An organization wants to inspect outbound web traffic from corporate endpoints to identify malware and data exfiltration. However, most web traffic is encrypted via HTTPS. What technology must the perimeter firewall implement to enable this visibility?",
    "options": [
      "WPA3 Enterprise Authentication",
      "SSL/TLS Decryption / SSL Inspection",
      "Asymmetric Tunneling",
      "Session Border Controller (SBC)"
    ],
    "answer": 1,
    "explanation": "SSL/TLS Decryption (also called SSL Inspection or HTTPS inspection) decrypts encrypted traffic at the firewall boundary to allow security engines to scan payloads before re-encrypting the data and sending it to its destination. WPA3 is a wireless security protocol. SBC is for VoIP networks. Asymmetric Tunneling is a misapplied routing concept.",
    "id": 1035,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "An administrator is troubleshooting a mail delivery issue. The SMTP mail servers fail to send outgoing emails to external mail relays securely using TLS. Which port should the administrator ensure is open outbound on the firewall?",
    "options": [
      "TCP Port 25 / 587",
      "UDP Port 53",
      "TCP Port 110",
      "TCP Port 143"
    ],
    "answer": 0,
    "explanation": "SMTP uses TCP Port 25 (traditional mail relaying) or Port 587 (modern secure message submission). UDP 53 is DNS. TCP 110 is POP3. TCP 143 is IMAP.",
    "id": 1036,
    "correctAnswer": 0
  },
  {
    "section": "S16",
    "question": "A security engineer is comparing authentication protocols for network access. They want a protocol that uses TCP for reliable transport, encrypts the ENTIRE packet payload (not just the password), and separates authentication, authorization, and accounting functions. Which protocol should they choose?",
    "options": [
      "RADIUS",
      "TACACS+",
      "LDAP",
      "Kerberos"
    ],
    "answer": 1,
    "explanation": "TACACS+ uses TCP (port 49), encrypts the entire packet payload, and fully separates AAA services. RADIUS uses UDP, only encrypts the password field, and combines authentication and authorization. LDAP is a directory access protocol. Kerberos is a ticket-based authentication protocol.",
    "id": 1037,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A small company wants to buy a single network security appliance that provides a firewall, antivirus scanning, intrusion prevention, web content filtering, and VPN capabilities in a cost-effective manner. Which of the following is the BEST solution?",
    "options": [
      "Unified Threat Management (UTM)",
      "Next-Generation Firewall (NGFW)",
      "Secure Access Service Edge (SASE)",
      "Perimeter Security Sentinel (PSS)"
    ],
    "answer": 0,
    "explanation": "A Unified Threat Management (UTM) appliance combines multiple security features into a single, low-cost device, which is ideal for smaller offices. NGFWs also combine features but do so in a single, high-performance engine aimed at enterprise scale. PSS is an invented term.",
    "id": 1038,
    "correctAnswer": 0
  },
  {
    "section": "S16",
    "question": "An analyst is tuning a newly installed Intrusion Detection System (IDS). The IDS keeps generating alerts claiming that legitimate users accessing their corporate webmail are executing remote exploits, even though no malicious activity is occurring. What type of indicator is this?",
    "options": [
      "True Positive",
      "False Positive",
      "True Negative",
      "False Negative"
    ],
    "answer": 1,
    "explanation": "A False Positive occurs when an alert is generated for benign or legitimate activity. A False Negative is when a real attack goes undetected. True Positive is a correctly identified attack, and True Negative is correctly ignored benign activity.",
    "id": 1039,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A network security manager implements MAC filtering on the corporate wireless network. Which of the following represents the PRIMARY security weakness of this control?",
    "options": [
      "MAC addresses are encrypted and cannot be parsed by firewalls.",
      "An attacker can sniff wireless traffic, capture valid MAC addresses, and spoof them.",
      "MAC filtering degrades switch throughput significantly.",
      "MAC addresses change dynamically every time a device connects to a different WAP."
    ],
    "answer": 1,
    "explanation": "MAC addresses are sent in cleartext headers in 802.11 frames. An attacker can easily sniff wireless traffic, identify authorized MAC addresses, and configure their own device to spoof one of those addresses. MAC filtering does not degrade performance or use encryption. MAC addresses are burned into network interface cards and remain static unless spoofed.",
    "id": 1040,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A network engineer needs to replace a legacy WEP-encrypted wireless network. WEP is no longer considered secure. Which of the following describes the core cryptographic vulnerability of WEP?",
    "options": [
      "It uses weak asymmetric RSA key pairs.",
      "It uses a short 24-bit Initialization Vector (IV) that leads to key reuse and collision attacks.",
      "It lacks support for pre-shared keys.",
      "It does not support AES-GCM encryption."
    ],
    "answer": 1,
    "explanation": "WEP uses RC4 with a short 24-bit Initialization Vector (IV). Because the IV is small, an attacker can capture enough packets to identify duplicate IVs (collisions) and easily crack the encryption key. WEP uses RC4 symmetric encryption, not asymmetric RSA.",
    "id": 1041,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "An enterprise is planning a Network Access Control (NAC) architecture. The security director wants to avoid installing software agents on every user endpoint, preferring to assess devices as they join the network using standard protocols. Which NAC architecture should they choose?",
    "options": [
      "Persistent agent NAC",
      "Dissolvable agent NAC",
      "Agentless NAC",
      "Out-of-band active NAC"
    ],
    "answer": 2,
    "explanation": "Agentless NAC inspects devices using built-in network scanning and standard protocols, eliminating the need to deploy and manage software agents on endpoints. Persistent agents are installed permanently. Dissolvable agents run temporarily and remove themselves but still execute code on the host.",
    "id": 1042,
    "correctAnswer": 2
  },
  {
    "section": "S16",
    "question": "A firewall administrator notices a sudden increase in blocked connections. They trace this to a stateful firewall rule. How does a stateful firewall determine if a packet is part of an active session?",
    "options": [
      "By looking up the packet's source IP address in a static global DNS server",
      "By analyzing the packet's headers against an active connection state table",
      "By decrypting the packet payload using symmetric keys",
      "By executing the packet code in a sandboxed runtime environment"
    ],
    "answer": 1,
    "explanation": "Stateful firewalls track the state of network connections (such as TCP handshakes) and store this information in a state table. Inbound packets are checked against this table to verify they belong to an established session. They do not decrypt payloads, query DNS, or run sandboxes.",
    "id": 1043,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "An organization wants to configure 802.1X wireless security. The system administrator wants to use EAP-FAST. Which mechanism does EAP-FAST use to establish a secure tunnel instead of relying on digital certificates?",
    "options": [
      "Protected Access Credential (PAC)",
      "Presigned Session Token (PST)",
      "Asymmetric Key Exchange (AKE)",
      "Synchronized One-Time Password (SOTP)"
    ],
    "answer": 0,
    "explanation": "EAP-FAST (Flexible Authentication via Secure Tunneling) replaces the certificate requirement of EAP-TLS/PEAP by utilizing a Protected Access Credential (PAC) to establish a secure tunnel. PST, AKE, and SOTP are generic or invented terms.",
    "id": 1044,
    "correctAnswer": 0
  },
  {
    "section": "S16",
    "question": "An IT manager wants to secure remote access to the corporate network. Remote Desktop Protocol (RDP) on TCP port 3389 is currently exposed to the internet, resulting in brute-force attack attempts. Which of the following is the BEST FIRST step to mitigate this risk?",
    "options": [
      "Change the RDP port to a dynamic registered port.",
      "Disable RDP exposure to the public internet and require connection through a VPN gateway.",
      "Implement a reverse proxy to decrypt RDP traffic.",
      "Switch the RDP client to use UDP transport instead of TCP."
    ],
    "answer": 1,
    "correctAnswer": 1,
    "explanation": "The BEST FIRST step is to disable public internet exposure of RDP (port 3389) and place it behind a secure Virtual Private Network (VPN) gateway. Changing the port only provides security by obscurity and does not block determined scanners. RDP is not typically processed by HTTP reverse proxies. Changing transport does not mitigate access vulnerabilities.",
    "id": 1045
  },
  {
    "section": "S16",
    "question": "A system administrator needs to secure directory queries between client computers and an Active Directory server. They want to encrypt LDAP traffic. Which port should they ensure is open and used for LDAPS?",
    "options": [
      "TCP Port 389",
      "TCP Port 636",
      "UDP Port 514",
      "TCP Port 443"
    ],
    "answer": 1,
    "explanation": "LDAPS (LDAP over SSL/TLS) uses TCP Port 636. Standard unencrypted LDAP uses TCP Port 389. UDP 514 is Syslog. TCP 443 is HTTPS.",
    "id": 1046,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "An enterprise is centralizing its syslog collections. Due to compliance mandates, all syslog messages sent from remote routers to the central SIEM must be encrypted. Which configuration should they implement?",
    "options": [
      "Syslog over UDP on Port 514",
      "Syslog over TLS on TCP Port 6514",
      "Secure Syslog over Port 5140",
      "Encrypted Log Protocol (ELP)"
    ],
    "answer": 1,
    "explanation": "Secure Syslog (Syslog over TLS) uses TCP Port 6514. Traditional unencrypted syslog uses UDP Port 514. Port 5140 and ELP are invented or non-standard terms.",
    "id": 1047,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A network security engineer is analyzing a Kerberos implementation. They want to ensure that Kerberos tickets cannot be sniffed from the network and replayed by an attacker later. What security control does Kerberos use to prevent replay attacks?",
    "options": [
      "Symmetric data masking",
      "Encrypted timestamps within authentication tickets",
      "Physical token synchronization",
      "Dynamic Route Wrapping (DRW)"
    ],
    "answer": 1,
    "explanation": "Kerberos tickets include encrypted timestamps. If an attacker captures a ticket and attempts to replay it, the ticket will be rejected if the timestamp exceeds a specific time skew limit (typically 5 minutes). Masking, physical tokens, and DRW are not Kerberos mechanisms.",
    "id": 1048,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "An administrator wants to secure remote terminal access to an enterprise router. Telnet is currently used. Which of the following is the BEST secure alternative protocol?",
    "options": [
      "TFTP (Port 69)",
      "SSH (Port 22)",
      "SFTP (Port 22)",
      "Secure Console Link (SCL)"
    ],
    "answer": 1,
    "explanation": "SSH (Secure Shell) on port 22 provides secure, encrypted terminal remote access, replacing unencrypted Telnet (port 23). TFTP is an unencrypted file transfer protocol. SFTP is for secure file transfers, not remote terminal command shells. SCL is an invented term.",
    "id": 1049,
    "correctAnswer": 1
  },
  {
    "section": "S16",
    "question": "A security auditor recommends securing the file transfer process for corporate financial reports. The reports are currently sent via unencrypted FTP. Which of the following is the BEST secure protocol to implement?",
    "options": [
      "TFTP",
      "SFTP / FTPS",
      "HTTPS",
      "Secure File Wrapper (SFW)"
    ],
    "answer": 1,
    "explanation": "SFTP (SSH File Transfer Protocol) or FTPS (FTP over SSL/TLS) are secure file transfer protocols that encrypt commands and data, protecting reports in transit. TFTP is unencrypted and insecure. HTTPS is for web browsing, although files can be uploaded/downloaded, SFTP/FTPS are the dedicated file transfer standards. SFW is an invented term.",
    "id": 1050,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A senior database administrator is terminated immediately due to a severe security policy violation. The security team must ensure that the former employee cannot connect to or modify critical production databases from external networks. Which IAM lifecycle process should the team execute FIRST?",
    "options": [
      "Identity Proofing",
      "Deprovisioning",
      "Role-Based Access Control (RBAC) modification",
      "Account Reallocation"
    ],
    "answer": 1,
    "explanation": "The modifier FIRST demands the immediate action to remove access. Deprovisioning is the process of revoking or deleting user accounts and access rights when a user leaves the organization, neutralizing potential insider threats. Identity Proofing occurs at the beginning of the identity lifecycle (prior to account creation). Modifying RBAC roles is slow and does not guarantee the account itself is completely disabled. Account Reallocation is an invented term.",
    "id": 1051,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A company wants to implement Single Sign-On (SSO) to allow users to authenticate across multiple mobile and single-page web applications. The security architect specifies a modern, REST API-based protocol that uses JSON Web Tokens (JWT) to verify user identity through an authorization server. Which of the following protocols is the BEST fit for this task?",
    "options": [
      "Security Assertion Markup Language (SAML 2.0)",
      "OAuth 2.0",
      "OpenID Connect (OIDC)",
      "Federated Identity REST Protocol (FIRP)"
    ],
    "answer": 2,
    "explanation": "The critical modifier BEST requires identity verification (authentication) using JSON Web Tokens and REST APIs. OpenID Connect (OIDC) is an identity layer built on top of OAuth 2.0 that uses JWTs to authenticate users. SAML 2.0 also enables SSO but relies on heavier XML and SOAP structures, making it less suitable for modern mobile and web clients. OAuth 2.0 is designed for access delegation (authorization), not directly for user identity verification. FIRP is an invented term.",
    "id": 1052,
    "correctAnswer": 2
  },
  {
    "section": "S17",
    "question": "To log into a secure workstation that processes credit card transactions, an employee must scan their physical smartcard, input a memorized 6-digit PIN, and provide a real-time voice sample. How many distinct authentication factors are used in this configuration?",
    "options": [
      "Three factors (something you know, something you have, and something you are)",
      "Two factors (something you have and something you know)",
      "One factor (three instances of something you know)",
      "Three factors (something you know, something you do, and somewhere you are)"
    ],
    "answer": 0,
    "explanation": "Three distinct authentication factors are used: (1) something you have (the physical smartcard), (2) something you know (the memorized PIN), and (3) something you are (the biometrics of the voice sample). Effective multi-factor authentication requires physically distinct categories of credentials. The other options miscalculate the count or define factors not present in the scenario.",
    "id": 1053,
    "correctAnswer": 0
  },
  {
    "section": "S17",
    "question": "A financial organization needs to tightly manage and monitor the activities of its system administrators. They want to ensure that superuser credentials are not persistently shared, that each login requires real-time approval, and that administrative console sessions are video-recorded for auditing. Which type of solution BEST meets this requirement?",
    "options": [
      "Single Sign-On (SSO)",
      "Role-Based Access Control (RBAC)",
      "Administrative Access Sentinel (AAS)",
      "Privileged Access Management (PAM)"
    ],
    "answer": 3,
    "explanation": "The critical modifier BEST points to the specific solution for high-privileged admin accounts. A Privileged Access Management (PAM) solution is designed to control, secure, monitor, and audit administrative (root/superuser) accounts, providing credential vaulting, temporary checked-out access, real-time approval workflows, and full session recording. SSO simplifies end-user logins but does not manage administrative infrastructure credentials. RBAC limits standard user permissions but does not provide dynamic session management or console recordings. AAS is an invented term.",
    "id": 1054,
    "correctAnswer": 3
  },
  {
    "section": "S17",
    "question": "An HR department is onboarding a new employee. Before creating their corporate email and domain account, the department requires the employee to present a government-issued photo ID and verifies their address details. What process is being described?",
    "options": [
      "Identity Proofing",
      "User Authorization",
      "Federation Tokenization",
      "Access Provisioning"
    ],
    "answer": 0,
    "explanation": "Identity Proofing is the process of verifying a user's real-world identity before creating their user account and credentials. Provisioning refers to creating the account itself. Authorization is granting access permissions. Federation Tokenization is an invented term.",
    "id": 1055,
    "correctAnswer": 0
  },
  {
    "section": "S17",
    "question": "A network security administrator wants to implement multi-factor authentication. Which of the following credentials represents 'something you are'?",
    "options": [
      "A software authenticator application generating a rolling PIN",
      "A hardware key fob showing a token number",
      "A retina scan pattern of the user's eye",
      "A digital certificate installed on the user's laptop"
    ],
    "answer": 2,
    "explanation": "A retina scan is a biometric identifier, representing the 'something you are' factor. Kobs, software authenticators, and certificates represent the 'something you have' factor.",
    "id": 1056,
    "correctAnswer": 2
  },
  {
    "section": "S17",
    "question": "An employee is configuring a new smart lock. The lock requires the user to swipe a pattern on a keypad, insert a physical key, and have their cell phone nearby via Bluetooth. Which of the following authentication factors is missing from this configuration?",
    "options": [
      "Something you have",
      "Something you know",
      "Something you are",
      "Somewhere you are"
    ],
    "answer": 2,
    "explanation": "The keypad pattern is 'something you know', the physical key and Bluetooth cell phone are 'something you have', and the geofencing/proximity could represent 'somewhere you are'. There is no biometric indicator ('something you are') in this configuration.",
    "id": 1057,
    "correctAnswer": 2
  },
  {
    "section": "S17",
    "question": "To secure access to an offshore database, a security analyst wants to implement a rule that only allows connections from devices located within the physical boundaries of the company's regional headquarters. Which authentication factor does this BEST represent?",
    "options": [
      "Something you have",
      "Somewhere you are",
      "Something you do",
      "Something you are"
    ],
    "answer": 1,
    "explanation": "Restricting access based on physical location (using IP addresses, GPS coordinates, or geofencing) represents the 'somewhere you are' factor. 'Something you do' refers to behavioral biometrics (like typing cadence). 'Something you are' refers to physical biometrics.",
    "id": 1058,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A research laboratory implements a biometric scanner that analyzes the speed, rhythm, and stroke pressure of a user's signature. Which authentication factor category does this represent?",
    "options": [
      "Something you are",
      "Something you do",
      "Something you have",
      "Something you know"
    ],
    "answer": 1,
    "explanation": "Behavioral biometrics (such as signature dynamics, typing cadence, and gait analysis) fall under the 'something you do' factor category, whereas physical biometrics (fingerprint, iris) fall under 'something you are'.",
    "id": 1059,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A web developer wants to allow third-party applications to access a user's calendar data without exposing the user's username and password. Which protocol is designed specifically to delegate authorization in this manner?",
    "options": [
      "SAML 2.0",
      "OAuth 2.0",
      "OpenID Connect",
      "Kerberos v5"
    ],
    "answer": 1,
    "explanation": "OAuth 2.0 is an authorization framework designed specifically to delegate access permissions to third-party applications using access tokens, without exposing credentials. SAML and OpenID Connect are primarily authentication/SSO protocols. Kerberos is for intranet authentication.",
    "id": 1060,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A security architect is configuring Single Sign-On (SSO) for a legacy enterprise application that communicates via XML-based tokens. Which federation protocol should the architect implement?",
    "options": [
      "OpenID Connect (OIDC)",
      "Security Assertion Markup Language (SAML)",
      "OAuth 2.0",
      "JSON Web Token (JWT)"
    ],
    "answer": 1,
    "explanation": "SAML (Security Assertion Markup Language) is an XML-based standard used to exchange authentication and authorization data between identity providers and service providers. OIDC and JWT use JSON. OAuth is for authorization delegation.",
    "id": 1061,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "An organization wants to configure an identity provider so that employees can use their corporate Active Directory credentials to log into third-party cloud-based software tools seamlessly. What concept does this configuration represent?",
    "options": [
      "Identity Federation",
      "Discretionary Access Control (DAC)",
      "Attribute-Based Access Control (ABAC)",
      "Secure Directory Wrapper (SDW)"
    ],
    "answer": 0,
    "explanation": "Identity Federation allows identities to be shared across trust boundaries, enabling users to log into external systems using their corporate credentials. DAC, ABAC, and SDW are access control models or invented terms.",
    "id": 1062,
    "correctAnswer": 0
  },
  {
    "section": "S17",
    "question": "A security officer wants to evaluate the accuracy of two fingerprint scanners. Scanner A has a False Acceptance Rate (FAR) of 0.01% and a False Rejection Rate (FRR) of 1%. Scanner B has a FAR of 0.05% and a FRR of 0.8%. Which metric should the officer compare to determine the overall balance of scanner performance?",
    "options": [
      "Crossover Error Rate (CER)",
      "Sensitivity Matrix (SM)",
      "Biometric Calibration Score (BCS)",
      "Resolution Coefficient (RC)"
    ],
    "answer": 0,
    "explanation": "The Crossover Error Rate (CER) is the metric where FAR and FRR are equal. A lower CER indicates a more accurate and balanced biometric system. SM, BCS, and RC are invented terms.",
    "id": 1063,
    "correctAnswer": 0
  },
  {
    "section": "S17",
    "question": "A biometric iris scanner frequently blocks authorized research staff from entering the cleanroom, forcing them to manually contact security for manual overrides. How should this system error be classified?",
    "options": [
      "False Acceptance / Type II Error",
      "False Rejection / Type I Error",
      "True Negative / System Match",
      "Sensor Calibration Drift (SCD)"
    ],
    "answer": 1,
    "explanation": "A False Rejection (Type I Error) occurs when an authorized user is incorrectly rejected by a biometric system. A False Acceptance (Type II Error) occurs when an unauthorized intruder is incorrectly granted access. SCD is an invented term.",
    "id": 1064,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "An IT department implements a system where files can only be accessed if the user is a manager, the file is classified as internal, the request is made during business hours, and the host device is company-owned. Which access control model does this policy represent?",
    "options": [
      "Role-Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)",
      "Attribute-Based Access Control (ABAC)",
      "Mandatory Access Control (MAC)"
    ],
    "answer": 2,
    "explanation": "ABAC (Attribute-Based Access Control) evaluates attributes of the subject (manager), resource (internal classification), action, and environment (time, device ownership) to make access decisions. RBAC only looks at user roles. DAC depends on owner permissions. MAC depends on system clearance labels.",
    "id": 1065,
    "correctAnswer": 2
  },
  {
    "section": "S17",
    "question": "A system administrator allocates folders on a shared file server. The folders can only be accessed by members of the 'Finance' group, and users are automatically added to this group based on their job title. Which access control model does this represent?",
    "options": [
      "Role-Based Access Control (RBAC)",
      "Attribute-Based Access Control (ABAC)",
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)"
    ],
    "answer": 0,
    "explanation": "RBAC (Role-Based Access Control) determines access permissions based on roles or group memberships defined within the organization, which correspond to job functions. MAC uses security labels. DAC uses resource owner discretion. ABAC uses multiple attributes.",
    "id": 1066,
    "correctAnswer": 0
  },
  {
    "section": "S17",
    "question": "In a military database, files are assigned labels such as 'Secret' or 'Top Secret'. Users are assigned corresponding security clearance levels. Access is granted only if the user's clearance matches or exceeds the file's label, and is enforced directly by the operating system kernel. What access control model is this?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Mandatory Access Control (MAC)",
      "Role-Based Access Control (RBAC)",
      "Rule-Based Access Control"
    ],
    "answer": 1,
    "explanation": "MAC (Mandatory Access Control) is a strict model where access is determined by comparing system-defined security labels and clearances, and cannot be changed by the users or owners. DAC allows owners to change permissions. RBAC uses roles. Rule-based uses rules like firewalls.",
    "id": 1067,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A content creator is hosting files on a personal web drive. The creator can grant read-only, write, or full-control permissions to specific users at their own discretion. Which access control model does this represent?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Mandatory Access Control (MAC)",
      "Attribute-Based Access Control (ABAC)",
      "Role-Based Access Control (RBAC)"
    ],
    "answer": 0,
    "explanation": "DAC (Discretionary Access Control) allows the owner of a resource to determine who is granted access and what permissions they have. MAC is enforced by system security policy labels. RBAC uses role group memberships. ABAC uses attributes.",
    "id": 1068,
    "correctAnswer": 0
  },
  {
    "section": "S17",
    "question": "A security analyst is auditing an Active Directory implementation. They discover that a junior developer who transitioned from customer support still has access to support ticketing databases and customer databases. What is this security issue called, and how is it BEST resolved?",
    "options": [
      "Privilege Creep; resolved by conducting regular user access reviews.",
      "Insider Threat; resolved by implementing biometrics.",
      "Directory Traversal; resolved by sanitizing inputs.",
      "Access Drift; resolved by implementing single sign-on."
    ],
    "answer": 0,
    "explanation": "Privilege Creep occurs when users accumulate permissions over time as they change roles. The BEST resolution is conducting regular user access reviews to revoke unneeded privileges. Biometrics, input sanitization, and SSO do not resolve permission accumulation.",
    "id": 1069,
    "correctAnswer": 0
  },
  {
    "section": "S17",
    "question": "An administrator wants to defend the network from brute-force password guessing attacks. They configure a policy that temporarily disables a user's account if they enter an incorrect password five times within a 10-minute window. What policy did they implement?",
    "options": [
      "Account Lockout Policy",
      "Password History Policy",
      "Privilege Auditing Policy",
      "Credential Masking Policy"
    ],
    "answer": 0,
    "explanation": "An Account Lockout Policy disables an account after a specified number of failed authentication attempts, blocking brute-force attacks. Password history prevents reuse. Auditing and masking do not block guessing.",
    "id": 1070,
    "correctAnswer": 0
  },
  {
    "section": "S17",
    "question": "A user is logging into a portal. Instead of entering a static password, they use an authenticator app that generates a 6-digit code. The code changes every 30 seconds and is calculated using a shared secret key and the current Unix time. What type of token is this?",
    "options": [
      "HMAC-based One-Time Password (HOTP)",
      "Time-based One-Time Password (TOTP)",
      "Synchronous Session Token (SST)",
      "Static PIN Token (SPT)"
    ],
    "answer": 1,
    "explanation": "TOTP (Time-based One-Time Password) uses the current time as the moving factor to generate codes that expire after a short period (usually 30 seconds). HOTP uses a counter value instead of time. SST and SPT are invented terms.",
    "id": 1071,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A security policy requires that users can never reuse their previous ten passwords when changing their credentials. Which password policy setting must be configured to enforce this?",
    "options": [
      "Password Age",
      "Password History",
      "Password Complexity",
      "Password Replay Prevention"
    ],
    "answer": 1,
    "explanation": "Password History tracks previously used passwords and prevents users from reusing them for a specified number of changes. Password age sets expiration limits. Complexity requires numbers or symbols. Replay prevention is not a standard password setting.",
    "id": 1072,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A web administrator is configuring a single sign-on portal. They want to ensure that if a user's SSO session token is hijacked, the attacker cannot use it indefinitely. Which parameter should the administrator configure on the identity provider?",
    "options": [
      "SSO Session Timeout / Token Expiration",
      "Multifactor Geofencing",
      "Account Lockout Threshold",
      "Password History Depth"
    ],
    "answer": 0,
    "explanation": "Configuring a short session timeout or token expiration limits the window of opportunity for an attacker using a hijacked session token. Geofencing, lockouts, and password history do not address session token lifespan directly.",
    "id": 1073,
    "correctAnswer": 0
  },
  {
    "section": "S17",
    "question": "A security engineer is configuring LDAP directory queries. They want to ensure that directory lookups are encrypted to prevent eavesdropping on usernames and group memberships. What protocol and port should they implement?",
    "options": [
      "LDAP over Port 389",
      "LDAPS over Port 636",
      "SAML over Port 443",
      "RADIUS over Port 1812"
    ],
    "answer": 1,
    "explanation": "LDAPS (LDAP over SSL/TLS) encrypts directory queries and runs on TCP Port 636. Standard LDAP runs on Port 389 in cleartext. SAML is a federation protocol. RADIUS is for network access authentication.",
    "id": 1074,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A user logs into an external partner's website. The partner's site trusts the user's home identity provider to assert that the user is authenticated. What type of identity architecture is this?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Federation / Federated SSO",
      "Discretionary Access Control (DAC)",
      "LDAP Directory Mapping"
    ],
    "answer": 1,
    "explanation": "Federated identity architecture enables users to authenticate with their home identity provider to access resources across different organization domains. MAC and DAC are local access control models. LDAP is a local directory access standard.",
    "id": 1075,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "An administrator is configuring a biometric system and wants to ensure it is secure enough for a high-security research vault. The administrator wants to reduce the likelihood of unauthorized intruders being granted access. Which metric should they minimize?",
    "options": [
      "False Rejection Rate (FRR) / Type I Error",
      "False Acceptance Rate (FAR) / Type II Error",
      "Crossover Error Rate (CER)",
      "Sensor Sensitivity Index (SSI)"
    ],
    "answer": 1,
    "explanation": "The False Acceptance Rate (FAR / Type II Error) measures the probability that an unauthorized user is incorrectly granted access. To maximize security against intruders, FAR must be minimized. Minimizing FRR improves usability. CER measures overall balance. SSI is an invented term.",
    "id": 1076,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A security policy mandates that employees must use a password manager. Which of the following is the PRIMARY security benefit of using a password manager?",
    "options": [
      "It automatically changes passwords on websites every 30 days.",
      "It allows employees to use long, complex, and unique passwords for every site without needing to memorize them.",
      "It eliminates the need for multi-factor authentication.",
      "It encrypts database tables natively."
    ],
    "answer": 1,
    "explanation": "A password manager enables users to generate, store, and automatically fill unique, long, and complex passwords for each account, eliminating password reuse and memorization challenges. It does not replace MFA or natively encrypt target databases.",
    "id": 1077,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A military base requires a smartcard to be inserted into a workstation to enable login. The card contains a digital certificate mapped to the user's identity. Which category of authentication factor does this card represent?",
    "options": [
      "Something you know",
      "Something you have",
      "Something you are",
      "Somewhere you are"
    ],
    "answer": 1,
    "explanation": "A physical smartcard containing a digital certificate is a token that the user physically possesses, representing the 'something you have' factor. Keys/passwords represent 'something you know', and biometrics represent 'something you are'.",
    "id": 1078,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "A security analyst is implementing geofencing. They want to ensure that a corporate mobile app can only authenticate when the user's GPS coordinates are within 500 meters of the office. What type of authentication factor does this represent?",
    "options": [
      "Something you have",
      "Somewhere you are",
      "Something you do",
      "Something you know"
    ],
    "answer": 1,
    "explanation": "Geofencing relies on physical location data (GPS/IP), representing the 'somewhere you are' factor. 'Something you have' refers to tokens. 'Something you do' is behavioral biometrics. 'Something you know' refers to passwords.",
    "id": 1079,
    "correctAnswer": 1
  },
  {
    "section": "S17",
    "question": "An IT department is auditing permissions and discovers that several former employees who left the company months ago still have active corporate email accounts. Which IAM process failed in this scenario?",
    "options": [
      "Identity Proofing",
      "Deprovisioning",
      "SSO Integration",
      "Accounting / Auditing"
    ],
    "answer": 1,
    "explanation": "Deprovisioning is the process of removing or disabling user accounts when they leave the organization. Failing to deprovision accounts leaves them active, creating severe security risks. Identity proofing is done prior to account creation. SSO integration relates to authentication. Auditing reports the issue but is not the process that disables accounts.",
    "id": 1080,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A security analyst discovers that users of an online discussion board can embed malicious JavaScript code into their forum posts. When other users view the posts, the script executes automatically in their local browsers, sending their session tokens to the attacker's server. What type of attack is occurring, and what is the MOST likely remediation?",
    "options": [
      "Cross-Site Request Forgery (XSRF); remediated by using unique cryptographic tokens per form.",
      "Stored Cross-Site Scripting (XSS); remediated by implementing input validation and output encoding.",
      "SQL Injection; remediated by using parameterized database queries.",
      "Dynamic Script Hijacking (DSH); remediated by implementing DOM isolation."
    ],
    "answer": 1,
    "explanation": "The attack described is Stored (or Persistent) Cross-Site Scripting (XSS) because the malicious JavaScript is stored in the database of the forum and executes in the browsers of visiting users. The MOST likely and effective remediation is to perform rigorous input validation and output encoding before rendering user-submitted content. XSRF tricks a user's browser into performing an unauthorized action but does not involve direct script injection. SQL Injection targets the backend database rather than browser execution. DSH is an invented term.",
    "id": 1081,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A developer writes a funds transfer application where the system verifies the account balance before completing a withdrawal. If two withdrawal requests are submitted almost simultaneously, the system executes both balance checks before updating the final balance, allowing the user to withdraw more money than they actually have. What type of vulnerability does this scenario describe?",
    "options": [
      "Buffer Overflow",
      "Integer Overflow",
      "Race Condition",
      "Concurrent Memory Leak"
    ],
    "answer": 2,
    "explanation": "A race condition occurs when the security or state of a system depends on the execution sequence or timing of concurrent processes (often known as Time-of-Check to Time-of-Use or TOCTOU). Here, the execution overlap between checking and withdrawing allows the exploit. A buffer overflow writes data past allocated memory boundaries. An integer overflow is an arithmetic error when a value exceeds storage capacity. Concurrent memory leak is an invented concept.",
    "id": 1082,
    "correctAnswer": 2
  },
  {
    "section": "S18",
    "question": "A power plant operates a critical turbine control system running on an unsupported version of Windows XP. The original hardware manufacturer went out of business years ago, and the proprietary software cannot be migrated to a modern OS without causing an unacceptable total service outage. Which of the following actions should the security administrator take FIRST to protect this system?",
    "options": [
      "Isolate the legacy system on a dedicated network segment with no internet access (air gap).",
      "Enable automatic updates in the control panel of the legacy operating system.",
      "Upgrade the system directly to Windows 11 using compatibility mode.",
      "Implement a Hybrid Update Gateway (HUG)."
    ],
    "answer": 0,
    "explanation": "For end-of-life (EOL) or unsupported legacy systems that cannot be patched or upgraded, the FIRST and most effective mitigation is to isolate the device using network segmentation or an air gap to prevent network-based attacks. Enabling updates on Windows XP is useless as no official security patches are released by Microsoft. Upgrading will break the proprietary turbine software. HUG is an invented term.",
    "id": 1083,
    "correctAnswer": 0
  },
  {
    "section": "S18",
    "question": "An attacker manipulates the input fields of a web login form by entering the string `' OR '1'='1`. The website authenticates the attacker and logs them in as the administrator without requiring a password. Which of the following is the root cause of this vulnerability?",
    "options": [
      "A directory traversal flaw that exposes local system files",
      "A lack of anti-CSRF tokens in the authentication form",
      "A stack overflow in the authentication rendering engine",
      "A lack of input sanitization allowing SQL query injection"
    ],
    "answer": 3,
    "explanation": "La vulnerabilidad es SQL Injection, que es causado por una falta de sanitización de entradas, permitiendo al motor de base de datos interpretar la cadena del atacante como código de consulta lógico (haciendo que la condición sea siempre verdadera y evadiendo la contraseña). Directory traversal accede a rutas locales de archivos (`../`). CSRF/XSRF explota la confianza del navegador de la sesión y no modifica la consulta. Un desbordamiento de pila intenta corromper la memoria, no la lógica de base de datos.",
    "id": 1084,
    "correctAnswer": 3
  },
  {
    "section": "S18",
    "question": "A user clicks a link in a phishing email that takes them to a trusted online banking site. However, the link includes a malicious URL parameter containing a script. The banking website reflects this parameter in the search results page, executing the script in the user's browser. What type of vulnerability is this?",
    "options": [
      "Stored XSS",
      "Reflected XSS",
      "DOM-based XSS",
      "Cross-Site Request Forgery (CSRF)"
    ],
    "answer": 1,
    "explanation": "Reflected XSS occurs when an application receives input in an HTTP request and includes that input within the immediate response in an unsafe way, reflecting it back to the user's browser where it executes as code.",
    "id": 1085,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "An attacker sends an email containing an HTML link to an authenticated user of an online store. When clicked, the link forces the user's browser to submit a hidden form requesting to change the user's email address to the attacker's email, leveraging the user's active session cookie. What type of attack is this?",
    "options": [
      "Reflected XSS",
      "Cross-Site Request Forgery (CSRF)",
      "SQL Injection",
      "Command Injection"
    ],
    "answer": 1,
    "explanation": "CSRF (Cross-Site Request Forgery) tricks a victim's web browser into performing an unwanted action on a trusted site where the user is currently authenticated, using their active session cookie. It does not inject scripts like XSS does.",
    "id": 1086,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A security analyst reviews a client-side JavaScript script that reads a user's local URL parameter and directly writes it to the page using `document.write()`, without sending data to the server. What type of vulnerability is present?",
    "options": [
      "Stored XSS",
      "DOM-based XSS",
      "Reflected XSS",
      "Command Injection"
    ],
    "answer": 1,
    "explanation": "DOM-based XSS occurs when an application contains client-side JavaScript that processes data from an untrusted source (like the URL DOM) in an unsafe way, modifying the DOM directly in the browser without server roundtrips.",
    "id": 1087,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A web utility allows administrators to ping diagnostic hosts. A user inputs the string `127.0.0.1; cat /etc/passwd` into the host field. The server returns the ping output followed by the contents of the passwd file. What type of vulnerability is this?",
    "options": [
      "SQL Injection",
      "Command Injection",
      "Directory Traversal",
      "Buffer Overflow"
    ],
    "answer": 1,
    "explanation": "Command Injection occurs when an application passes unsanitized user input directly to a system shell execution, allowing the attacker to run arbitrary operating system commands.",
    "id": 1088,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A program expects a 10-character string input and copies it into a fixed-size memory stack buffer. If an attacker inputs a 500-character string, the program crashes, and registers show that the execution path has jumped to code embedded within the input. What type of vulnerability is this?",
    "options": [
      "Buffer Overflow",
      "Integer Overflow",
      "Memory Leak",
      "Pointer Dereference"
    ],
    "answer": 0,
    "explanation": "A Buffer Overflow occurs when a program writes more data to a buffer than it can hold, corrupting adjacent memory (such as the stack return address) and potentially allowing arbitrary code execution.",
    "id": 1089,
    "correctAnswer": 0
  },
  {
    "section": "S18",
    "question": "An application uses an 8-bit unsigned integer to track transaction counts. When the count reaches 255 and another transaction occurs, the count wraps around to 0, causing a validation check to pass incorrectly and allow access. What type of vulnerability is this?",
    "options": [
      "Buffer Overflow",
      "Integer Overflow",
      "Memory Leak",
      "Race Condition"
    ],
    "answer": 1,
    "explanation": "An Integer Overflow occurs when an arithmetic operation attempts to create a numeric value that is outside the range of values that can be represented with a given number of bits, causing it to wrap around to a small or negative number.",
    "id": 1090,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A monitoring server's RAM utilization increases slowly over several weeks until the system runs out of memory and crashes. Logs indicate that a specific background process allocates memory for logging metrics but fails to deallocate it after completion. What type of vulnerability is this?",
    "options": [
      "Resource Exhaustion",
      "Memory Leak",
      "Race Condition",
      "Integer Overflow"
    ],
    "answer": 1,
    "explanation": "A Memory Leak occurs when an application allocates memory but fails to release it back to the operating system when it is no longer needed. Over time, this leads to Resource Exhaustion and application crashes.",
    "id": 1091,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A database programmer wants to write secure code to prevent SQL injection attacks. Which of the following mechanisms represents the BEST option to achieve this?",
    "options": [
      "Implementing client-side validation using regular expressions",
      "Using parameterized queries / prepared statements",
      "Converting all inputs to Base64 format before query processing",
      "Deploying a stateful packet firewall in front of the database"
    ],
    "answer": 1,
    "explanation": "Parameterized queries (prepared statements) ensure that the database engine treats user input strictly as data parameters rather than executable SQL code commands, completely mitigating SQL injection. Client-side validation can be easily bypassed. Base64 encoding is not a security defense. Firewalls operate at lower network layers and do not sanitize query syntax.",
    "id": 1092,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "An enterprise has a critical billing system that cannot be updated because the vendor is out of business and the source code is unavailable. The system has a known critical vulnerability. Which type of control should the security team implement to manage the risk?",
    "options": [
      "A corrective control",
      "A compensating control",
      "A deterrent control",
      "An administrative control"
    ],
    "answer": 1,
    "explanation": "A compensating control is an alternative security control implemented to mitigate the risk of a vulnerability when standard controls (like patching) are not possible or feasible.",
    "id": 1093,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "An organization deploys smart building HVAC controllers that receive firmware updates over-the-air (OTA). To prevent an attacker from flashing malicious firmware to the controllers, which control is the MOST critical for the update process?",
    "options": [
      "Use of Type 2 hypervisors on controllers",
      "Cryptographic signature validation on all received update files",
      "Reducing the database backup frequency",
      "Performing qualitative risk analysis ad-hoc"
    ],
    "answer": 1,
    "explanation": "Cryptographic signature verification ensures that updates received remotely (OTA) are authentic and have not been tampered with by an attacker, preventing malicious firmware deployment.",
    "id": 1094,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A cloud security analyst reviews web logs and notices multiple requests containing the following path in the URI: `/downloads/getfile.php?name=../../../../windows/system.ini`. What type of vulnerability is the attacker attempting to exploit?",
    "options": [
      "SQL Injection",
      "Directory Traversal",
      "Reflected XSS",
      "Buffer Overflow"
    ],
    "answer": 1,
    "explanation": "Directory Traversal uses relative path sequences (such as `../`) to escape the web root directory and access arbitrary files on the local operating system filesystem.",
    "id": 1095,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "An attacker targets a SCADA network controlling municipal water pumps. The SCADA servers run legacy firmware that cannot be updated. Which of the following is the BEST compensating control to protect this network from external remote attacks?",
    "options": [
      "Implementing strong password policies for standard users",
      "Isolating the SCADA network from the corporate network and internet (air gapping)",
      "Installing host-based intrusion detection software on the workstation",
      "Switching all communication channels from TCP to UDP"
    ],
    "answer": 1,
    "explanation": "Air gapping (physical and logical isolation from external networks) is the most effective compensating control to protect critical SCADA/ICS environments that cannot be updated from external network threats.",
    "id": 1096,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A developer wants to ensure that a web page correctly handles user-submitted comments containing characters like `<` and `>` without executing them. What technique should they use before rendering the text?",
    "options": [
      "Input Validation",
      "Output Encoding / Sanitization",
      "Hashing",
      "Asymmetric Encryption"
    ],
    "answer": 1,
    "explanation": "Output encoding converts special characters (like `<` to `&lt;`) into a safe, display-only format before rendering them in the browser, preventing the browser from interpreting them as executable code.",
    "id": 1097,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A developer wants to prevent Cross-Site Request Forgery (CSRF) attacks on a shopping cart application. Which of the following mechanisms is the MOST effective?",
    "options": [
      "Using HTTPS encryption for all pages",
      "Implementing unique, unpredictable anti-CSRF tokens for state-changing requests",
      "Requiring users to enter their password twice",
      "Using client-side JavaScript validation"
    ],
    "answer": 1,
    "explanation": "Anti-CSRF tokens (unique, unpredictable tokens validated on the server for each request) prevent CSRF because an external attacker cannot guess or steal this token to forge a valid request. HTTPS protects data in transit but does not prevent CSRF. Client validation can be bypassed.",
    "id": 1098,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "During a routine scan, a security analyst discovers that a production web application displays detailed database error messages and stack traces to users when queries fail. What type of vulnerability does this represent?",
    "options": [
      "Improper Error Handling",
      "Privilege Escalation",
      "Stored Cross-Site Scripting",
      "Memory Leakage"
    ],
    "answer": 0,
    "explanation": "Improper Error Handling occurs when an application exposes sensitive system or debugging information (such as stack traces or SQL database schemas) in error messages, aiding attackers in reconnaissance.",
    "id": 1099,
    "correctAnswer": 0
  },
  {
    "section": "S18",
    "question": "A security auditor discovers that newly deployed smart security cameras are accessible over the local network using a username of 'admin' and a password of '12345'. Which vulnerability type does this represent?",
    "options": [
      "Improper input sanitization",
      "Default Configuration / Weak Credentials",
      "Supply Chain Vulnerability",
      "Software API Drift"
    ],
    "answer": 1,
    "explanation": "This represents a default configuration vulnerability where default credentials are left unchanged after deployment, allowing easy unauthorized access.",
    "id": 1100,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "An enterprise software package utilizes a popular third-party logging library. A critical vulnerability is discovered in the library that allows remote code execution. How should this vulnerability type be classified?",
    "options": [
      "Zero-Day Vulnerability",
      "Supply Chain / Third-Party Vulnerability",
      "Default Configuration Vulnerability",
      "Orphaned System Flaw"
    ],
    "answer": 1,
    "explanation": "Vulnerabilities originating from third-party code libraries, dependencies, or components integrated into software products are classified as Supply Chain or Third-Party vulnerabilities.",
    "id": 1101,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A critical vulnerability is announced for a widely used network router. No patches or workarounds are currently available from the manufacturer, and exploitation code is actively circulating. What is this type of vulnerability called?",
    "options": [
      "Zero-Day Vulnerability",
      "Legacy System Flaw",
      "Default Configuration",
      "Stack Overflow"
    ],
    "answer": 0,
    "explanation": "A Zero-Day vulnerability is an active security flaw that is unknown to the vendor, or for which no official patch or fix has been developed yet.",
    "id": 1102,
    "correctAnswer": 0
  },
  {
    "section": "S18",
    "question": "An attacker exploits a target system by attaching to a running web browser process and forcing it to run a malicious .dll file containing exploit code. What type of attack is this?",
    "options": [
      "Buffer Overflow",
      "DLL Injection",
      "SQL Injection",
      "Pointer Dereference"
    ],
    "answer": 1,
    "explanation": "DLL Injection is a technique used to run arbitrary code in the address space of another running process by forcing it to load a dynamic-link library (DLL).",
    "id": 1103,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A web application crashes frequently. The developer audits the source code and finds that when a database query returns empty, the program attempts to read data from a memory address that points to nothing (null). What programming error is this?",
    "options": [
      "Integer Overflow",
      "Null Pointer Dereferencing",
      "Buffer Overflow",
      "Race Condition"
    ],
    "answer": 1,
    "explanation": "Null Pointer Dereferencing occurs when an application attempts to read or write to a memory address pointing to null, which typically causes the application to crash or throw an exception.",
    "id": 1104,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A security scan reveals an orphaned server in a corporate network running Windows Server 2003. The system has no registered owner and has not received updates in over a decade. Which vulnerability category does this represent?",
    "options": [
      "Improper Asset Management",
      "Zero-Day Vulnerability",
      "Default Configuration",
      "DLL Injection"
    ],
    "answer": 0,
    "explanation": "Improper Asset Management is when systems are deployed without tracking, ownership, or regular audits, leading to legacy or forgotten (orphaned) systems remaining vulnerable on the network.",
    "id": 1105,
    "correctAnswer": 0
  },
  {
    "section": "S18",
    "question": "A security analyst attempts to access a web server. When navigating to `/images/`, the browser displays a list of all files stored in that directory instead of returning a 403 Forbidden error. What vulnerability category does this represent?",
    "options": [
      "Stored XSS",
      "Security Misconfiguration",
      "Directory Traversal",
      "Privilege Escalation"
    ],
    "answer": 1,
    "explanation": "Enabling directory listing (directory browsing) on a production web server is a Security Misconfiguration vulnerability that leaks the directory structure and file contents to potential attackers.",
    "id": 1106,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "A banking website validates that transfer values are positive using client-side JavaScript. An attacker intercepting the request changes the transfer amount value to `-500` and submits it directly to the server. The server processes the negative amount, increasing the attacker's balance. What is the root cause of this vulnerability?",
    "options": [
      "Lack of server-side input validation",
      "SQL Injection in the transaction table",
      "Race condition in balance calculation",
      "Improper session management"
    ],
    "answer": 0,
    "explanation": "All inputs must be validated on the server-side. Relying solely on client-side validation (which can be easily bypassed using proxies or direct API requests) is a critical security vulnerability.",
    "id": 1107,
    "correctAnswer": 0
  },
  {
    "section": "S18",
    "question": "A developer configures an API backend and allows requests from any origin by configuring the header `Access-Control-Allow-Origin: *`. What vulnerability risk is introduced?",
    "options": [
      "Stored XSS vulnerability",
      "CORS (Cross-Origin Resource Sharing) Misconfiguration",
      "Directory Traversal",
      "Command Injection"
    ],
    "answer": 1,
    "explanation": "Using a wildcard (`*`) in CORS configurations allows any external website to make API requests on behalf of the client's browser, creating a significant CORS Misconfiguration vulnerability.",
    "id": 1108,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "An auditor reviews a corporate web server's SSL/TLS settings and finds that it supports SSL v3 and TLS 1.0. What vulnerability is present?",
    "options": [
      "Improper input sanitization",
      "Weak / Legacy Cipher Suites and Protocols",
      "DLL Injection",
      "Zero-Day vulnerability"
    ],
    "answer": 1,
    "explanation": "Supporting legacy protocols like SSL v3 or TLS 1.0 is a vulnerability because these protocols contain known cryptographic flaws (like POODLE and BEAST) and are vulnerable to attack.",
    "id": 1109,
    "correctAnswer": 1
  },
  {
    "section": "S18",
    "question": "An administrator wants to secure a web server against automated scanning tools looking for legacy PHP vulnerabilities. Which action would BEST reduce the attack surface?",
    "options": [
      "Implement a strong account lockout policy for administrators.",
      "Remove legacy PHP modules and configure the server to hide the PHP version header.",
      "Change the server's public IP address daily.",
      "Enable biometric authentication for SSH access."
    ],
    "answer": 1,
    "explanation": "Removing unneeded legacy components and hiding version banners reduces the attack surface by eliminating entry points and limiting information disclosure to attackers.",
    "id": 1110,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An attacker uses a wireless packet analyzer to capture network authentication traffic between an employee and a legacy server. The next day, the attacker retransmits the captured packets to the server to establish an unauthorized active session. What type of attack is this, and how is it BEST mitigated?",
    "options": [
      "On-Path (Man-in-the-Middle) attack; mitigated by implementing static ARP tables on local switches.",
      "Replay attack; mitigated by using unique session timestamps and cryptographic nonces.",
      "Session hijacking; mitigated by forcing user password rotation every 30 days.",
      "Protocol Rejection Attack (PRA); mitigated by physical port blocking."
    ],
    "answer": 1,
    "explanation": "A replay attack involves capturing valid authentication packets and retransmitting them later to gain unauthorized access. The BEST mitigation is implementing session tokens with timestamps or cryptographic nonces (number used once) so that the server rejects duplicate or delayed packets. An On-Path attack requires active routing interception rather than simple retransmission. Session hijacking steals an active session cookie in real time. Password rotation does not stop the replay of captured traffic. PRA is an invented term.",
    "id": 1111,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A corporate web server suddenly stops responding to incoming requests. The system administrator checks network logs and finds thousands of connections in a half-open state (SYN_RECEIVED). The attacker is sending connection requests with spoofed source IP addresses and never completes the handshake. What type of DoS attack is this, and which control should be implemented FIRST?",
    "options": [
      "Permanent Denial of Service (PDoS); reinstall the edge router's firmware.",
      "SYN Flood DoS; implement flood guards and shorten session timeout thresholds.",
      "Fork Bomb; configure process execution limits for the OS root user.",
      "Packet Exhaustion Storm (PES); implement static routing on the WAN."
    ],
    "answer": 1,
    "explanation": "The attack is a SYN Flood, which exhausts a server's connection tables by leaving connections in a 'half-open' state. The FIRST and most direct control is implementing flood guards or shortening the session timeout threshold to drop incomplete connections quickly. PDoS damages hardware by destroying firmware. A fork bomb is a local host exploit that spawns infinite processes. PES is an invented term.",
    "id": 1112,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An enterprise systems administrator discovers that a disgruntled programmer inserted code that will delete the company's entire customer database if the programmer's employee ID is removed from the active payroll directory. What type of malware does this represent?",
    "options": [
      "Logic Bomb",
      "Trojan Horse",
      "Ransomware",
      "Spyware"
    ],
    "answer": 0,
    "explanation": "A Logic Bomb is malicious code inserted into a program that lies dormant until triggered by a specific event or condition (such as a calendar date, time, or the absence/presence of a database record).",
    "id": 1113,
    "correctAnswer": 0
  },
  {
    "section": "S19",
    "question": "A security analyst conducts memory forensics on a compromised server and finds malware that has modified the operating system kernel to intercept system calls. The malware is hiding its own processes and files from standard administrator diagnostic utilities. What class of malware is this?",
    "options": [
      "Rootkit",
      "Adware",
      "Worm",
      "Ransomware"
    ],
    "answer": 0,
    "explanation": "A Rootkit is a type of malware designed to gain administrative/root access to a computer and modify operating system binaries or kernel tables to hide its presence and bypass detection tools.",
    "id": 1114,
    "correctAnswer": 0
  },
  {
    "section": "S19",
    "question": "An accounting employee receives a pop-up window stating that all their spreadsheet and PDF files have been encrypted using an RSA-2048 key. The window displays a countdown timer and instructions to send $500 in cryptocurrency to obtain the decryption key. What type of malware has infected the computer?",
    "options": [
      "Spyware",
      "Ransomware",
      "Rootkit",
      "Trojan"
    ],
    "answer": 1,
    "explanation": "Ransomware is malware that encrypts files or restricts access to a system and demands payment (usually cryptocurrency) from the victim to restore access.",
    "id": 1115,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "The Chief Financial Officer (CFO) of a multinational bank receives an email that appears to come from the bank's external auditing firm. The email addresses the CFO by name, references a recent secret acquisition project, and requests immediate verification of wire transfer credentials via an attached document. How should this social engineering attack be classified?",
    "options": [
      "Spam",
      "Whaling",
      "Pharming",
      "Vishing"
    ],
    "answer": 1,
    "explanation": "Whaling is a highly targeted phishing attack (spear phishing) aimed specifically at high-profile, high-value targets such as corporate executives (C-level officers, CFOs, CEOs).",
    "id": 1116,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A customer support agent receives a phone call from an individual claiming to be a technician from the company's internal IT help desk. The caller requests the agent to disclose their domain password to help resolve a database latency issue. What type of social engineering attack is this?",
    "options": [
      "Vishing",
      "Smishing",
      "Shoulder Surfing",
      "Tailgating"
    ],
    "answer": 0,
    "explanation": "Vishing (voice phishing) is the practice of using telephone systems and voice calls to conduct social engineering attacks and trick victims into disclosing sensitive info.",
    "id": 1117,
    "correctAnswer": 0
  },
  {
    "section": "S19",
    "question": "An employee receives a text message on their personal smartphone claiming to be from their supervisor. The message states that their company credentials have been compromised and directs them to click a short link to reset them immediately. What type of attack is this?",
    "options": [
      "Phishing",
      "Smishing",
      "Vishing",
      "Pretexting"
    ],
    "answer": 1,
    "explanation": "Smishing (SMS phishing) is a social engineering attack conducted via text messaging (SMS) on mobile devices to lure victims into clicking links or disclosing credentials.",
    "id": 1118,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "Several users report that when trying to visit the company's public intranet page, they are redirected to a lookalike website that requests their login credentials. The network team finds that the local DNS server's cache has been manipulated to resolve the intranet's domain name to the attacker's server IP address. What type of attack is this?",
    "options": [
      "Phishing",
      "Pharming",
      "Whaling",
      "Spim"
    ],
    "answer": 1,
    "explanation": "Pharming redirects users to malicious lookalike websites by exploiting vulnerabilities in DNS servers (DNS cache poisoning) or by modifying the hosts file on client machines.",
    "id": 1119,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A security guard observes an individual dressed as a delivery courier holding a box and walking quickly through the building's badge-access door immediately behind an employee who just scanned their access card. What physical social engineering technique is the courier using?",
    "options": [
      "Shoulder Surfing",
      "Tailgating",
      "Dumpster Diving",
      "Pretexting"
    ],
    "answer": 1,
    "explanation": "Tailgating (or piggybacking) is when an unauthorized person closely follows an authorized person through a secure entry point to bypass security controls without authenticating.",
    "id": 1120,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An attacker sits at a coffee shop and uses a smartphone camera to record users entering their device unlock PINs and corporate login passwords on their laptops. What type of social engineering technique is this?",
    "options": [
      "Dumpster Diving",
      "Shoulder Surfing",
      "Tailgating",
      "Pretexting"
    ],
    "answer": 1,
    "explanation": "Shoulder Surfing involves looking over someone's shoulder or using cameras to spy on users and capture sensitive information like passwords, PINs, or data.",
    "id": 1121,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An attacker targets a financial firm by collecting discarded documents from the trash bins behind the company's offices, looking for printouts containing network diagrams, account details, and employee names. What is this technique called?",
    "options": [
      "Tailgating",
      "Dumpster Diving",
      "Shoulder Surfing",
      "Pretexting"
    ],
    "answer": 1,
    "explanation": "Dumpster Diving is the practice of searching through trash or recycling containers to find discarded documents, hardware, or files that contain sensitive corporate information.",
    "id": 1122,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An attacker contacts the customer support line of an insurance company, posing as an elderly customer who has forgotten their account number. The attacker creates a elaborate story about being hospitalized to gain sympathy and convince the support agent to disclose the account details. What social engineering concept does this scenario represent?",
    "options": [
      "Phishing",
      "Pretexting",
      "Shoulder Surfing",
      "Tailgating"
    ],
    "answer": 1,
    "explanation": "Pretexting is the act of creating an invented scenario (a pretext) to persuade a targeted victim to release information or perform an action they would not otherwise do.",
    "id": 1123,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A security administrator detects a high volume of login failures across thousands of corporate user accounts. The attacker is attempting to log into each account using a single popular password like 'Summer2026!' before moving on to the next account. What type of password attack is this?",
    "options": [
      "Dictionary Attack",
      "Password Spraying",
      "Brute-Force Attack",
      "Rainbow Table Attack"
    ],
    "answer": 1,
    "explanation": "Password Spraying is a type of brute-force attack where an attacker attempts a single common password against many different accounts to avoid account lockout thresholds.",
    "id": 1124,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A security analyst recovers a file containing stolen database hashes. To decrypt the passwords quickly, the analyst runs a tool that compares the hashes against precomputed tables containing millions of plaintext words and their matching SHA-256 hashes. What tool or technique is being used?",
    "options": [
      "Dictionary Attack",
      "Rainbow Tables",
      "Brute-Force Attack",
      "Password Spraying"
    ],
    "answer": 1,
    "explanation": "Rainbow Tables are precomputed tables of hashed passwords used to reverse cryptographic hash functions and quickly crack password hashes without computing hashes dynamically.",
    "id": 1125,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An attacker gains access to a local network segment and begins sending unsolicited ARP messages to the local switch. The messages map the default gateway IP address to the MAC address of the attacker's computer, redirecting local client traffic. What type of attack is this?",
    "options": [
      "MAC Spoofing",
      "ARP Poisoning / Spoofing",
      "DNS Spoofing",
      "DHCP Snooping"
    ],
    "answer": 1,
    "explanation": "ARP Poisoning (or ARP Spoofing) involves sending forged Address Resolution Protocol (ARP) messages onto a local network to associate an attacker's MAC address with the IP address of a legitimate server or gateway.",
    "id": 1126,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An administrator discovers that thousands of company computers have been silently infected with malware. The infected systems are communicating with an external Command and Control (C2) server and are configured to participate in coordinated DDoS attacks against external targets. What security threat is this?",
    "options": [
      "Worm",
      "Botnet",
      "Rootkit",
      "Logic Bomb"
    ],
    "answer": 1,
    "explanation": "A Botnet is a network of compromised computers (bots or zombies) controlled remotely by an attacker (botmaster) to perform coordinated tasks such as DDoS attacks or spam campaigns.",
    "id": 1127,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A user downloads a free PDF viewer application from a third-party website. The PDF viewer works as expected, but a hidden background service installs spyware that logs and exfiltrates browser history. How should this malware be classified?",
    "options": [
      "Worm",
      "Trojan Horse",
      "Rootkit",
      "Logic Bomb"
    ],
    "answer": 1,
    "explanation": "A Trojan Horse is a type of malware that is disguised as a legitimate, useful utility program, but contains hidden malicious functionality that executes behind the scenes.",
    "id": 1128,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A network security administrator detects a massive infection spreading automatically from computer to computer across the enterprise LAN. The malware exploits a vulnerability in the Windows SMB protocol to replicate itself across network shares without any user interaction. What type of malware is this?",
    "options": [
      "Trojan",
      "Worm",
      "Rootkit",
      "Keylogger"
    ],
    "answer": 1,
    "explanation": "A Worm is self-replicating malware that spreads automatically across computer networks by exploiting software vulnerabilities, without requiring human execution or host file attachment.",
    "id": 1129,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A security analyst inspects a suspicious user workstation and discovers a small physical adapter plugged inline between the keyboard USB cable and the computer's rear port. What security threat does this device represent?",
    "options": [
      "Hardware Keylogger",
      "Software Rootkit",
      "Adware injector",
      "USB Sanitizer"
    ],
    "answer": 0,
    "explanation": "A hardware keylogger is a physical device plugged between a keyboard and a computer to record every keystroke entered by the user, capturing passwords and sensitive inputs.",
    "id": 1130,
    "correctAnswer": 0
  },
  {
    "section": "S19",
    "question": "An organization experiences a Denial of Service attack where the attacker sends spoofed ICMP Echo Request packets to a network's broadcast IP address. The packets contain the victim's source IP address, causing all hosts on the subnet to flood the victim with ICMP Echo Replies. What attack type is this?",
    "options": [
      "SYN Flood",
      "Smurf Attack",
      "Fork Bomb",
      "Slowloris"
    ],
    "answer": 1,
    "explanation": "A Smurf Attack is a legacy DDoS attack that spoofs the victim's IP address and sends ICMP echo requests to broadcast addresses, magnifying traffic as every device replies to the victim.",
    "id": 1131,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An attacker attempts to crack an administrative password by running a tool that tests every possible combination of letters, numbers, and symbols sequentially (`aaaa1`, `aaaa2`, etc.). What password cracking method is this?",
    "options": [
      "Dictionary Attack",
      "Brute-Force Attack",
      "Rainbow Table Attack",
      "Password Spraying"
    ],
    "answer": 1,
    "explanation": "A brute-force attack attempts to decrypt passwords by systematically testing all possible character combinations until the correct key is found.",
    "id": 1132,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A security engineer receives reports of users receiving massive amounts of advertising and links to fraudulent sites on their corporate instant messaging application. Which threat term describes this malicious activity?",
    "options": [
      "Spam",
      "Spim",
      "Pharming",
      "Spear Phishing"
    ],
    "answer": 1,
    "explanation": "Spim is spam sent over Instant Messaging (IM) networks rather than email (which is traditional spam).",
    "id": 1133,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An employee receives an email warning that a new and dangerous virus called the 'Blue Screen Destroyer' is spreading rapidly, and that they must immediately delete a system file named `kernel32.dll` to prevent infection. What type of social engineering attack is this?",
    "options": [
      "Watering Hole",
      "Hoax",
      "Pretexting",
      "Whaling"
    ],
    "answer": 1,
    "explanation": "A Hoax is a social engineering attack that spreads false alarms or warnings about non-existent security threats, aiming to trick users into compromising their own systems (like deleting essential files).",
    "id": 1134,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A receptionist receives a call from an individual claiming to be a fire inspector who needs immediate remote access to the facility's security console to audit emergency exits. The caller uses authority and urgency to pressure the receptionist. What social engineering concept does this represent?",
    "options": [
      "Pretexting / Impersonation",
      "Shoulder Surfing",
      "Watering Hole",
      "Pharming"
    ],
    "answer": 0,
    "explanation": "This is Impersonation combined with Pretexting, where the attacker assumes a fake identity (fire inspector) and creates a false scenario (exit audit) to manipulate the victim.",
    "id": 1135,
    "correctAnswer": 0
  },
  {
    "section": "S19",
    "question": "An attacker discovers that developers in a large software firm frequently visit a local catering website to order lunch. The attacker compromises the catering site and injects exploit code to target vulnerabilities in the developers' web browsers. What attack vector is this?",
    "options": [
      "Spear Phishing",
      "Watering Hole Attack",
      "Whaling",
      "Pharming"
    ],
    "answer": 1,
    "explanation": "A Watering Hole attack targets a specific group of users by compromising a third-party website that they are known to visit frequently, infecting them when they browse the site.",
    "id": 1136,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "A security analyst detects a DDoS attack where the attacker sends small NTP requests containing a spoofed source IP pointing to the victim, causing the NTP server to send large responses back to the victim. What is this technique called?",
    "options": [
      "DNS Spoofing",
      "Amplification Attack",
      "Replay Attack",
      "SYN Flood"
    ],
    "answer": 1,
    "explanation": "An Amplification Attack is a type of DDoS attack that exploits open protocols (like NTP, DNS, or SNMP) to send small queries with spoofed source IPs that trigger much larger response payloads, flooding the victim.",
    "id": 1137,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An attacker positions a device between a corporate laptop and the wireless access point, intercepting, reading, and modifying all network packets passing between the laptop and the web server in real time. How is this attack classified?",
    "options": [
      "Replay Attack",
      "On-Path (Man-in-the-Middle) Attack",
      "SYN Flood",
      "MAC Filtering Violation"
    ],
    "answer": 1,
    "explanation": "An On-Path (formerly Man-in-the-Middle) attack occurs when an attacker intercepts and potentially alters communication between two nodes without their knowledge.",
    "id": 1138,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An enterprise employee falls victim to a social engineering attack. The attacker leverages the psychological principle of 'Scarcity' by sending an email stating that only the first 5 employees to verify their payroll credentials will receive a 20% holiday bonus. Which social engineering principle is described?",
    "options": [
      "Social Proof / Consensus",
      "Scarcity",
      "Authority",
      "Intimidation"
    ],
    "answer": 1,
    "explanation": "Scarcity is the social engineering principle that creates a sense of urgency based on limited resources or limited opportunities, tricking the victim into acting quickly before thinking.",
    "id": 1139,
    "correctAnswer": 1
  },
  {
    "section": "S19",
    "question": "An attacker runs a script that repeatedly queries a local DNS resolver with spoofed UDP packets containing false mapping entries for a popular corporate bank. What is this DNS attack called?",
    "options": [
      "DNS Cache Poisoning",
      "DNSSEC validation",
      "DNS Zone Transfer",
      "Domain Hijacking"
    ],
    "answer": 0,
    "explanation": "DNS Cache Poisoning (or DNS Spoofing) is the act of introducing false DNS records into a DNS resolver's cache, causing it to resolve domain queries to incorrect, malicious IP addresses.",
    "id": 1140,
    "correctAnswer": 0
  },
  {
    "section": "S20",
    "question": "A cybersecurity engineer audits the default configurations of newly installed network switches. The engineer disables Telnet (port 23) and the HTTP server (port 80) due to their lack of encryption. Which secure protocol should be enabled FIRST for console-based remote management?",
    "options": [
      "SMTPS (Port 587)",
      "SSH (Port 22)",
      "SNMP (Port 161)",
      "Secure Remote Connection (SRC - Port 8022)"
    ],
    "answer": 1,
    "explanation": "SSH (Secure Shell) on port 22 encrypts administrative console sessions, serving as the direct secure replacement for Telnet. SMTPS is for secure email delivery. SNMP on port 161 is for monitoring and lacks encryption unless version 3 is used. SRC is an invented term.",
    "id": 1141,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A large corporation wants to standardize the security posture of thousands of Windows workstations prior to deployment. The security team defines a configuration template that contains disabled services, registry settings, and strict password policies. Which concept does this template represent?",
    "options": [
      "Risk Tolerance Matrix",
      "Change Management Log",
      "Secure Baseline",
      "Integrity Validation Script (IVS)"
    ],
    "answer": 2,
    "explanation": "A Secure Baseline is a documented set of minimum security settings and configurations that system platforms must conform to before deployment. A risk tolerance matrix evaluates organizational risk appetite. A change management log records changes made to systems over time. IVS is an invented term.",
    "id": 1142,
    "correctAnswer": 2
  },
  {
    "section": "S20",
    "question": "A system administrator notices that production servers frequently experience configuration drift because support technicians make manual configuration changes to resolve help desk tickets. Which of the following is the BEST method to automate hardening and ensure policy consistency across the fleet?",
    "options": [
      "Implement Full Disk Encryption (FDE) on all servers.",
      "Perform weekly manual audits using paper-based checklists.",
      "Use Group Policy Objects (GPO) or Infrastructure as Code (IaC) tools.",
      "Configure persistent IPsec tunnels between the servers."
    ],
    "answer": 2,
    "explanation": "The critical modifier BEST asks for automation and configuration drift prevention. GPOs (in Windows) and Infrastructure as Code (IaC, like Ansible or Terraform) define hardening templates that are automatically enforced across all servers, ensuring consistency. FDE protects data at rest but does not prevent configuration changes. Manual audits are slow and error-prone. IPsec secures network traffic in transit.",
    "id": 1143,
    "correctAnswer": 2
  },
  {
    "section": "S20",
    "question": "A system administrator wants to harden several critical Linux database servers. They need to ensure that, even if an administrative process like Apache is compromised by an attacker, the process is strictly blocked from accessing files outside its designated domain. Which of the following technologies represents the BEST option?",
    "options": [
      "Security-Enhanced Linux (SELinux)",
      "Group Policy Objects (GPO)",
      "Active Directory Role-Based Access Control",
      "Kernel Shield Module (KSM)"
    ],
    "answer": 0,
    "explanation": "SELinux implements Mandatory Access Control (MAC) in the Linux kernel, restricting processes strictly to their defined security domains. This containment prevents a compromised process from accessing unauthorized files even if run with root privileges. GPO is a Windows administrative tool. AD RBAC maps user access but does not enforce process containment at the OS kernel level. KSM is an invented term.",
    "id": 1144,
    "correctAnswer": 0
  },
  {
    "section": "S20",
    "question": "A web administrator is hardening a web server. When navigating to `/downloads/` without a default index file, the server displays a listing of all files. Which action should the administrator take to resolve this?",
    "options": [
      "Enable SSL/TLS inspection.",
      "Disable directory browsing / directory listing in the server configuration.",
      "Configure a stateful packet filter on Port 80.",
      "Implement a reverse proxy."
    ],
    "answer": 1,
    "explanation": "Disabling directory browsing (or directory listing) prevents the web server from displaying directory indexes when a default file (like `index.html`) is missing, hiding sensitive file listings from attackers.",
    "id": 1145,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A security analyst is hardening a production database server. They notice that the database's default administrator account ('sa' or 'root') is active and uses a weak default password. Which action should they take FIRST?",
    "options": [
      "Enable full database field-level encryption.",
      "Change the default account's password to a strong value or disable the account in favor of custom admin accounts.",
      "Configure weekly database backups to an offline storage server.",
      "Install a web application firewall in front of the database port."
    ],
    "answer": 1,
    "explanation": "The FIRST step in hardening default accounts is changing their default passwords to strong, unique values, or disabling default accounts entirely in favor of named, individual administrative accounts.",
    "id": 1146,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "An IT department is hardening enterprise Windows workstations. The security policy mandates that any guest or default local administrator accounts must be neutralized. Which action is the BEST choice?",
    "options": [
      "Delete the local administrator accounts completely.",
      "Disable the local Guest account and rename/disable the default Administrator account.",
      "Configure the Guest account with a 3-character PIN.",
      "Establish a GPO to wipe workstation hard drives weekly."
    ],
    "answer": 1,
    "explanation": "Default local accounts (like Guest and Administrator) are well-known targets. Disabling Guest and renaming/disabling default Administrator accounts reduces the attack surface. Default system accounts often cannot be deleted entirely by design.",
    "id": 1147,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A security analyst wants to prevent malware from automatically executing on Windows workstations when users insert external USB flash drives. Which registry hardening configuration should the analyst enforce?",
    "options": [
      "Enable User Account Control (UAC) prompts.",
      "Disable Autorun / Autoplay features.",
      "Configure Full Disk Encryption.",
      "Disable Windows Defender dynamic signatures."
    ],
    "answer": 1,
    "explanation": "Disabling Autorun/Autoplay features blocks the operating system from automatically launching executable files (like `autorun.inf`) when removable media (USB drives, CDs) are connected, mitigating malware propagation.",
    "id": 1148,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A cloud administrator is auditing virtual machine security. They want to prevent a compromised virtual machine from exploiting vulnerabilities in the hypervisor to execute code directly on the physical host machine. What specific security threat are they attempting to mitigate?",
    "options": [
      "Virtual Machine Escape",
      "Type 2 Hypervisor Overhead",
      "Virtualization Desynchronization",
      "Dynamic Port Hijacking"
    ],
    "answer": 0,
    "explanation": "VM Escape is an exploit where an attacker on a guest virtual machine breaks out of the guest environment and executes commands directly on the host hypervisor or host OS.",
    "id": 1149,
    "correctAnswer": 0
  },
  {
    "section": "S20",
    "question": "A security analyst performs a banner grabbing audit on a public-facing corporate web server. The scan returns the header: `Server: Apache/2.4.41 (Ubuntu) PHP/7.4.3`. What action should the analyst take to harden the server?",
    "options": [
      "Disable directory browsing.",
      "Configure the server to hide version information in HTTP response headers.",
      "Reinstall the Apache server in a virtual machine.",
      "Upgrade the server to use IIS."
    ],
    "answer": 1,
    "explanation": "Hiding software version banners in HTTP response headers prevents banner grabbing, reducing the amount of reconnaissance information (such as exact software version numbers) available to potential attackers.",
    "id": 1150,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A web security administrator is configuring SSL/TLS settings on an enterprise web server. They want to block attacks like BEAST and POODLE by disabling outdated cryptographic protocols and ciphers. Which of the following should they disable?",
    "options": [
      "TLS 1.3 and AES-GCM",
      "SSL v3, TLS 1.0, and RC4 ciphers",
      "Perfect Forward Secrecy (PFS)",
      "SHA-256 hashing algorithms"
    ],
    "answer": 1,
    "explanation": "Disabling legacy protocols (SSL v3, TLS 1.0) and weak ciphers (RC4, 3DES) is critical for hardening, as they have known cryptographic vulnerabilities. TLS 1.3, AES-GCM, PFS, and SHA-256 are modern, secure standards.",
    "id": 1151,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A database administrator wants to prevent database servers from executing operating system commands if a SQL injection vulnerability is exploited. Which database hardening measure is the BEST choice on Microsoft SQL Server?",
    "options": [
      "Enabling database field-level encryption",
      "Disabling the xp_cmdshell extended stored procedure",
      "Changing the SQL default port from 1433 to 1434",
      "Configuring transaction log replication"
    ],
    "answer": 1,
    "explanation": "The stored procedure `xp_cmdshell` in MSSQL allows database commands to execute OS commands in the Windows shell. Disabling it blocks attackers from running host commands if they exploit SQL injection.",
    "id": 1152,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A Linux administrator is comparing security mechanisms. They want to enforce program-specific restriction profiles on a per-executable basis, rather than using system-wide security labeling domains. Which technology should they implement?",
    "options": [
      "SELinux",
      "AppArmor",
      "TCP Wrappers",
      "iptables"
    ],
    "answer": 1,
    "explanation": "AppArmor is a Linux kernel security module that uses path-based profiles to restrict capabilities of specific programs (per-executable). SELinux is policy-based and uses security labels across domains. TCP Wrappers filter network traffic. iptables is a firewall.",
    "id": 1153,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A mobile security administrator wants to enforce mobile device hardening. They require a solution that separates personal apps and data from corporate apps and data on employee-owned devices (BYOD). Which mechanism should they implement?",
    "options": [
      "Full Disk Encryption (FDE)",
      "Containerization / Workspace Isolation",
      "Remote Wipe capability",
      "Rooting protection"
    ],
    "answer": 1,
    "explanation": "Containerization creates a secure, encrypted sandbox (container) on the mobile device that isolates corporate applications and data from the user's personal applications, protecting corporate assets on BYOD devices.",
    "id": 1154,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "An enterprise vendor releases a single, urgent software update designed to fix a newly discovered, critical security vulnerability in their web service. How should this specific update be classified?",
    "options": [
      "Service Pack",
      "Hotfix / Patch",
      "Rollup Update",
      "Version Release"
    ],
    "answer": 1,
    "explanation": "A hotfix (or security patch) is a single, targeted update released quickly to resolve a specific software bug or vulnerability. A service pack is a large, cumulative collection of updates and fixes.",
    "id": 1155,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A system architect wants to protect the boot process of corporate laptops. They want to ensure that the UEFI firmware validates that only trusted, cryptographically signed bootloaders can execute when the machine turns on. Which technology must be enabled?",
    "options": [
      "Secure Boot",
      "BitLocker",
      "TPM chip",
      "UEFI Admin Password"
    ],
    "answer": 0,
    "explanation": "Secure Boot is a UEFI feature that validates the digital signature of the bootloader, kernel, and driver files against a database of trusted keys in the firmware before allowing them to run, preventing bootkit malware.",
    "id": 1156,
    "correctAnswer": 0
  },
  {
    "section": "S20",
    "question": "A security engineer is hardening an Apache web server. They want to reduce the server's attack surface by removing legacy capabilities. Which of the following actions should they take?",
    "options": [
      "Enable directory listing globally.",
      "Remove unneeded modules such as mod_dav or mod_cgi.",
      "Disable HTTPS and rely entirely on HTTP.",
      "Configure Apache to run as the root user."
    ],
    "answer": 1,
    "explanation": "Removing unused modules (like WebDAV or CGI) reduces the attack surface of the web server by eliminating legacy components that could contain vulnerabilities. Running Apache as root or disabling HTTPS decreases security.",
    "id": 1157,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A security analyst wants to test an untrusted software utility without risking infection to the local operating system or network. Where should the analyst run this utility?",
    "options": [
      "On a public web server",
      "In a Sandbox / Virtual Machine isolated from the network",
      "In the system32 directory of a production workstation",
      "On a backup domain controller"
    ],
    "answer": 1,
    "explanation": "A sandbox (or isolated virtual machine) provides a safe, contained environment to execute untrusted code without allowing it to access or compromise the host system or network.",
    "id": 1158,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A security auditor recommends upgrading legacy Windows file systems from FAT32 to NTFS. Which of the following is the PRIMARY security benefit of NTFS over FAT32?",
    "options": [
      "NTFS supports full disk encryption natively without TPM.",
      "NTFS supports file and folder-level permissions (ACLs) to restrict access.",
      "NTFS automatically deletes duplicate files.",
      "NTFS does not allow remote network connections."
    ],
    "answer": 1,
    "explanation": "The primary security advantage of NTFS is its support for file and folder-level access control lists (ACLs) and security permissions, which are not supported by FAT32.",
    "id": 1159,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A network security administrator wants to block Responder-style credential harvesting attacks on a local subnet. Which legacy Windows name resolution protocols should the administrator disable?",
    "options": [
      "DNS and DHCP",
      "NetBIOS and LLMNR",
      "Kerberos and LDAP",
      "WINS and NTP"
    ],
    "answer": 1,
    "explanation": "Responder attacks exploit legacy broadcast name resolution protocols like NetBIOS and LLMNR (Link-Local Multicast Name Resolution) to spoof hosts and capture credential hashes. Disabling these protocols mitigates this risk.",
    "id": 1160,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A security engineer configures host-based firewalls on all corporate workstations. The firewalls are configured to block all inbound connections from other workstations on the same LAN segment. What threat is this control designed to prevent?",
    "options": [
      "Outbound data exfiltration to the internet",
      "Horizontal / Lateral movement of attackers within the subnet",
      "Unauthorized physical access to the local console",
      "DNS cache poisoning on the router"
    ],
    "answer": 1,
    "explanation": "Host-based firewalls blocking lateral traffic prevent attackers who compromise one workstation from scanning and moving laterally to other workstations on the same local subnet.",
    "id": 1161,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A compliance auditor requires that all successful and failed user logon attempts must be recorded. Which hardening control should the administrator configure?",
    "options": [
      "Log Rotation Depth",
      "Audit Logging / Logon Auditing Policies",
      "Account Lockout Thresholds",
      "Password History Depth"
    ],
    "answer": 1,
    "explanation": "Logon Auditing (or Audit Logging) policies tell the operating system to log events in the security log when logon attempts succeed or fail, providing an audit trail for compliance and analysis.",
    "id": 1162,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A company wants to secure corporate laptops in case they are physically lost or stolen. The security policy mandates that all data on the hard drive must be unreadable to anyone who removes the drive or tries to boot the laptop without credentials. Which control should be implemented?",
    "options": [
      "Access Control Lists (ACLs)",
      "Full Disk Encryption (FDE)",
      "Data Masking",
      "Biometric Login"
    ],
    "answer": 1,
    "explanation": "Full Disk Encryption (FDE, like BitLocker) encrypts the entire hard drive, protecting data at rest if the device is lost, stolen, or the hard drive is extracted.",
    "id": 1163,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A system administrator is hardening a network printer. The printer has SNMP enabled. Which action should the administrator take FIRST to secure SNMP access?",
    "options": [
      "Disable the printer's print queue.",
      "Change the default SNMP community strings (e.g., 'public', 'private').",
      "Change the printer's MAC address.",
      "Enable SSL inspection on the printer's console."
    ],
    "answer": 1,
    "explanation": "The FIRST step to secure SNMP is changing the default community strings (such as 'public' and 'private'), which are well-known defaults that allow attackers to query configuration telemetry.",
    "id": 1164,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A software company wants to test their web application for hidden buffer overflow vulnerabilities before releasing it. They write a script that sends random, malformed, and extremely large inputs to the application's API endpoints to see if it crashes. What testing technique is this?",
    "options": [
      "Static code analysis",
      "Fuzzing / Fuzz Testing",
      "Regression Testing",
      "Vulnerability Scanning"
    ],
    "answer": 1,
    "explanation": "Fuzzing (or fuzz testing) is a dynamic testing technique that feeds random, unexpected, or malformed inputs to an application to identify crashes, memory leaks, and other vulnerabilities.",
    "id": 1165,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A security engineer is hardening a containerized environment using Docker. They want to minimize the risk of a container breakout compromise affecting the host Linux kernel. Which configuration represents the BEST hardening practice?",
    "options": [
      "Run the container processes with root privileges.",
      "Run container processes as a non-root user and keep the host OS patched.",
      "Disable Docker log collection.",
      "Expose the Docker socket (`/var/run/docker.sock`) directly to all containers."
    ],
    "answer": 1,
    "explanation": "Running containers as non-root users limits their capabilities if compromised, and keeping the host kernel patched mitigates container breakout exploits. Exposing the Docker socket grants full control over the host.",
    "id": 1166,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A security manager is hardening a server room. They want to monitor changes to system binaries on critical servers in real time. They deploy an agent on each server that monitors file integrity hashes. What type of solution did they implement?",
    "options": [
      "Network IDS (NIDS)",
      "Host-based IDS (HIDS)",
      "Unified Threat Management (UTM)",
      "Stateful Firewall"
    ],
    "answer": 1,
    "explanation": "A Host-based IDS (HIDS) runs on individual systems to monitor host activity, local log files, and system file integrity (often via file integrity monitoring or FIM).",
    "id": 1167,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "An IT policy requires that employees must not be allowed to copy corporate files to personal USB flash drives. Which hardening control should be configured via Active Directory?",
    "options": [
      "Full Disk Encryption policies",
      "USB Write Block / Removable Storage Access Restrictions GPO",
      "User Account Control (UAC) GPO",
      "Account Lockout GPO"
    ],
    "answer": 1,
    "explanation": "A Group Policy Object (GPO) restricting removable storage access can block write access to USB drives across all domain-joined computers, preventing data loss.",
    "id": 1168,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A secure bootloader verifies the digital signature of the OS kernel against a public key stored in the UEFI firmware's Secure Boot database. Which security goal does this process achieve?",
    "options": [
      "Confidentiality of the OS kernel files",
      "Integrity and authenticity of the boot sequence",
      "High availability of the boot partition",
      "Non-repudiation of user logins"
    ],
    "answer": 1,
    "explanation": "Verifying digital signatures against a trusted key database checks the Integrity and Authenticity of the kernel files to ensure they have not been tampered with or replaced by malware.",
    "id": 1169,
    "correctAnswer": 1
  },
  {
    "section": "S20",
    "question": "A security analyst is auditing an organization's system configurations. They find that support technicians frequently configure temporary web applications on production servers but forget to delete them. What is this security risk called?",
    "options": [
      "Configuration Drift",
      "Directory Traversal",
      "Privilege Creep",
      "DLL Injection"
    ],
    "answer": 0,
    "explanation": "Configuration Drift is the phenomenon where systems deviate from their original secure baseline configurations over time due to ad-hoc, undocumented manual changes.",
    "id": 1170,
    "correctAnswer": 0
  },
  {
    "section": "S21",
    "question": "An organization is planning a wireless network deployment in its new administrative headquarters. To satisfy physical security requirements, the network architect wants to prevent the wireless signal from easily leaking into the exterior parking lot while maximizing coverage indoors. Which of the following is the BEST approach?",
    "options": [
      "Increase the transmission power of WAPs located near windows to block external connections.",
      "Place WAPs in central locations and mount directional antennas facing inward on exterior walls.",
      "Configure all office WAPs to operate exclusively on overlapping channels in the 2.4 GHz band.",
      "Install a Radio Frequency Perimeter Isolator (RFPI) around the building facade."
    ],
    "answer": 1,
    "explanation": "The critical modifier BEST balances internal performance with security. Central placement distances the signal source from external boundaries, while directional antennas on exterior walls focus signal propagation inward, reducing spillover. Increasing transmit power exacerbates signal leakage. Operating on overlapping channels degrades performance due to interference. RFPI is an invented term.",
    "id": 1171,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A security administrator receives reports that customers are receiving phishing emails that spoof the company's official domain name. The administrator wants to implement a DNS-based defense that lists the authorized mail servers allowed to send messages on behalf of the domain. Which DNS record should they configure FIRST?",
    "options": [
      "A Sender Policy Framework (SPF) record",
      "A DomainKeys Identified Mail (DKIM) record",
      "A Domain Name System Security Extensions (DNSSEC) record",
      "A Mail Validation Token (MVT) record"
    ],
    "answer": 0,
    "explanation": "The modifier FIRST points to the base DNS record that lists authorized sender IPs. An SPF record publishes the list of authorized outgoing mail servers. DKIM adds digital signatures to email headers but does not list IP addresses directly. DNSSEC validates DNS records against tampering but does not verify email sender origins. MVT is an invented term.",
    "id": 1172,
    "correctAnswer": 0
  },
  {
    "section": "S21",
    "question": "A security analyst evaluates an endpoint protection solution to detect and mitigate zero-day ransomware attacks. The tool must analyze host behavior in real time, automatically isolate compromised devices from the network, and collect forensic telemetry. Which solution meets these requirements?",
    "options": [
      "Traditional signature-based antivirus",
      "Network Access Control (NAC)",
      "Host Endpoint Shield (HES)",
      "Endpoint Detection and Response (EDR)"
    ],
    "answer": 3,
    "explanation": "EDR (Endpoint Detection and Response) monitors host behavior in real time to detect anomalies and zero-day threats, provides automated isolation capability, and facilitates forensic analysis. Signature antivirus relies on known malware files. NAC controls network admission based on host compliance posture rather than continuous runtime process execution. HES is an invented term.",
    "id": 1173,
    "correctAnswer": 3
  },
  {
    "section": "S21",
    "question": "An enterprise updates its wireless access points to the WPA3 standard. The security architect explains that this upgrade will prevent attackers from performing offline dictionary attacks after capturing the initial handshake. Which cryptographic mechanism in WPA3 provides this protection?",
    "options": [
      "Temporal Key Integrity Protocol (TKIP)",
      "Simultaneous Authentication of Equals (SAE)",
      "Wired Equivalent Privacy (WEP)",
      "Advanced Handshake Integrity Protocol (AHIP)"
    ],
    "answer": 1,
    "explanation": "WPA3 replaces the vulnerable four-way handshake of WPA2 with Simultaneous Authentication of Equals (SAE) for key establishment. SAE uses an exchange that is resistant to passive interception, mitigating offline dictionary attacks and providing forward secrecy. TKIP and WEP are legacy protocols. AHIP is an invented term.",
    "id": 1174,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "An organization wants to configure a DNS-based email policy that instructs receiving mail servers to reject emails that fail SPF or DKIM checks, and send XML reports containing verification details back to the domain owner. Which record must they configure?",
    "options": [
      "A DMARC TXT record with a policy of 'reject'",
      "An SPF record with a '~all' parameter",
      "A DKIM record containing the public key",
      "A Mail Verification Conformance (MVC) record"
    ],
    "answer": 0,
    "explanation": "DMARC (Domain-based Message Authentication, Reporting, and Conformance) coordinates SPF and DKIM, defines policies (none, quarantine, reject) for validation failures, and provides XML reporting. An SPF record with '~all' is a soft fail. DKIM contains public keys but does not define reporting. MVC is an invented term.",
    "id": 1175,
    "correctAnswer": 0
  },
  {
    "section": "S21",
    "question": "A security engineer is configuring a DNS-based email validation system. They want to enable a mechanism that adds a cryptographic digital signature to the headers of outgoing emails to verify that the message content has not been tampered with in transit. What should they configure?",
    "options": [
      "Sender Policy Framework (SPF)",
      "DomainKeys Identified Mail (DKIM)",
      "DMARC quarantine policy",
      "Pretty Good Privacy (PGP)"
    ],
    "answer": 1,
    "explanation": "DKIM (DomainKeys Identified Mail) uses public-key cryptography to add a digital signature to email headers, allowing receiving servers to verify email authenticity and integrity. SPF lists authorized sender IPs. DMARC defines policies. PGP is for end-to-end user encryption rather than domain-level DNS signatures.",
    "id": 1176,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A large enterprise security team wants to correlate telemetry across their endpoints, cloud workloads, email platforms, and network firewalls using a single, unified security platform. Which class of security solution should they deploy?",
    "options": [
      "Endpoint Detection and Response (EDR)",
      "Extended Detection and Response (XDR)",
      "Security Information Event Multiplier (SIEM)",
      "Threat Intel Gateway (TIG)"
    ],
    "answer": 1,
    "explanation": "XDR (Extended Detection and Response) extends endpoint detection (EDR) capabilities by integrating data across multiple security layers (endpoints, cloud, network, email) into a unified system. SIEM aggregates logs but does not natively provide active correlation and response platforms. TIG is an invented term.",
    "id": 1177,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A network technician discovers an unauthorized wireless access point plugged into a wall port in the corporate cafeteria. The device is broadcasting the corporate SSID to intercept client credentials. How should this threat be classified?",
    "options": [
      "Evil Twin",
      "Rogue Access Point",
      "Watering Hole",
      "RF Jammer"
    ],
    "answer": 1,
    "explanation": "A Rogue Access Point is any unauthorized access point connected directly to the corporate network interface. An Evil Twin is a rogue AP configured to mimic a legitimate wireless network SSID but might not be connected to the target network.",
    "id": 1178,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "An attacker sets up a wireless access point near a corporate office, broadcasting the SSID 'Corporate_Wifi_Guest' (matching the company's guest network name) to trick employees into connecting to it. What type of attack is this?",
    "options": [
      "Rogue Access Point",
      "Evil Twin",
      "Bluejacking",
      "IV Collision"
    ],
    "answer": 1,
    "explanation": "An Evil Twin is an unauthorized wireless access point that mimics the SSID of a legitimate network to lure clients into connecting for eavesdropping or credential harvesting.",
    "id": 1179,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A network team wants to optimize the placement of WAPs in a new three-story office building. They want to map signal coverage, identify dead zones, and estimate RF leakage outside the building facade. Which tool should they use?",
    "options": [
      "Wi-Fi Heatmap utility / Site Survey tool",
      "Protocol Analyzer",
      "Spectrum Analyzer",
      "RF Jammer"
    ],
    "answer": 0,
    "explanation": "A Wi-Fi Heatmap utility or site survey tool maps wireless signal propagation, helping architects position WAPs, optimize coverage, and identify signal leakage. Protocol analyzers capture packets. Spectrum analyzers measure raw RF signals. Jammers block signals.",
    "id": 1180,
    "correctAnswer": 0
  },
  {
    "section": "S21",
    "question": "An administrator disables SSID broadcasting on all corporate wireless access points. Which statement describes the security value of this configuration?",
    "options": [
      "It encrypts the wireless beacon frames using AES.",
      "It provides security by obscurity, but attackers can easily identify the SSID using passive wireless sniffing tools.",
      "It completely prevents unauthorized devices from joining the network.",
      "It restricts wireless coverage to the physical building boundary."
    ],
    "answer": 1,
    "explanation": "Disabling SSID broadcasting stops WAPs from sending their name in beacon frames, providing basic security by obscurity. However, the SSID is still transmitted in cleartext association frames, and attackers can easily discover it using passive sniffers.",
    "id": 1181,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A security analyst is investigating a wireless attack. An attacker captured wireless association frames and used offline tools to attempt to crack the pre-shared key by running a dictionary list against the WPA2 handshake. What vulnerability is the attacker exploiting?",
    "options": [
      "The 4-way handshake vulnerability of WPA2",
      "RC4 Initialization Vector (IV) collisions",
      "Lack of AES encryption in WPA2 Enterprise",
      "SSO certificate trust flaws"
    ],
    "answer": 0,
    "explanation": "WPA2 relies on a 4-way handshake for key exchange. An attacker can capture this handshake (via sniffing or deauthentication attacks) and perform offline dictionary attacks to crack the password. RC4 IV collisions affect legacy WEP, not WPA2.",
    "id": 1182,
    "correctAnswer": 0
  },
  {
    "section": "S21",
    "question": "A guest connects to a hotel wireless network. When they attempt to browse the internet, they are immediately redirected to a web page asking them to accept the terms of service and enter their email address before access is granted. What network technology is being used?",
    "options": [
      "Network Access Control (NAC)",
      "Captive Portal",
      "802.1X Authentication Server",
      "WPA3 Enterprise Gateway"
    ],
    "answer": 1,
    "explanation": "A Captive Portal is a web page that forces HTTP users on a network to authenticate, accept terms, or complete a registration before obtaining internet access.",
    "id": 1183,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A security architect is updating the wireless security policy. They specify that the encryption algorithm used must provide Authenticated Encryption with Associated Data (AEAD) to ensure both confidentiality and integrity of wireless frames. Which protocol and cipher combination should they require?",
    "options": [
      "WEP with RC4",
      "WPA2 with TKIP",
      "WPA3 with AES-GCM (Galois/Counter Mode)",
      "WPA2 with WEP-Wrapper"
    ],
    "answer": 2,
    "explanation": "WPA3 implements AES-GCM (Galois/Counter Mode) or GCMP, which is an AEAD cipher providing high-performance encryption and built-in integrity validation. WEP RC4 and WPA2 TKIP are insecure legacy ciphers.",
    "id": 1184,
    "correctAnswer": 2
  },
  {
    "section": "S21",
    "question": "A security administrator wants to implement a secure email gateway (SEG) to filter incoming traffic. Which of the following represents the PRIMARY function of a secure email gateway?",
    "options": [
      "Encrypting database tables locally",
      "Filtering spam, phishing links, and malware attachments at the network boundary",
      "Generating user certificates for S/MIME",
      "Enforcing geofencing rules for remote workers"
    ],
    "answer": 1,
    "explanation": "A Secure Email Gateway (SEG) is an email security solution that analyzes inbound and outbound emails to block spam, phishing attempts, malware attachments, and policy violations.",
    "id": 1185,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "An executive wants to exchange sensitive emails with a business partner in a way that guarantees end-to-end confidentiality and non-repudiation of the sender. Both organizations possess an internal Public Key Infrastructure (PKI). Which standard should the executive use?",
    "options": [
      "Sender Policy Framework (SPF)",
      "S/MIME (Secure/Multipurpose Internet Mail Extensions)",
      "DomainKeys Identified Mail (DKIM)",
      "TLS email relaying"
    ],
    "answer": 1,
    "explanation": "S/MIME uses PKI certificates to digitally sign and encrypt email messages at the application layer, ensuring end-to-end confidentiality, authenticity, and non-repudiation. SPF and DKIM protect domains at the DNS level. TLS relays secure transport but does not provide end-to-end message-level signing.",
    "id": 1186,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A system administrator wants to secure outgoing email communications from corporate users. They want to sign all corporate messages digitally to prove they originate from the organization, but do NOT need to encrypt the body contents. Which standard is the BEST choice?",
    "options": [
      "S/MIME signing",
      "PGP encryption",
      "SPF record enforcement",
      "IPsec Transport Mode"
    ],
    "answer": 0,
    "explanation": "S/MIME supports digital signing without encryption. This signs the message using the sender's private key, proving authenticity and message integrity to the recipient. PGP is for peer-to-peer encryption. SPF validates domains, not individual messages.",
    "id": 1187,
    "correctAnswer": 0
  },
  {
    "section": "S21",
    "question": "An attacker targets a home wireless router. The router has Wi-Fi Protected Setup (WPS) enabled. How does the attacker exploit this setting to gain unauthorized access to the network?",
    "options": [
      "By capturing WPA3 SAE handshakes",
      "By brute-forcing the 8-digit WPS PIN to retrieve the wireless WPA2 password",
      "By performing a dictionary attack on the HTTP console",
      "By spoofing the router's DNS server IP"
    ],
    "answer": 1,
    "explanation": "WPS allows quick connection using an 8-digit PIN. Attackers can exploit WPS design flaws to brute-force this PIN in a few hours, retrieving the underlying WPA2 pre-shared password.",
    "id": 1188,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A security analyst is investigating a wireless performance issue. They find that an attacker is flooding the local area with high-power RF noise in the 2.4 GHz band, preventing wireless devices from associating with any WAPs. What type of attack is occurring?",
    "options": [
      "Deauthentication Attack",
      "RF Jamming / Denial of Service",
      "Evil Twin attack",
      "Man-in-the-Middle"
    ],
    "answer": 1,
    "explanation": "RF Jamming is a physical-layer Denial of Service attack where the attacker floods the wireless frequencies with radio frequency noise, disrupting communications. Deauthentication is a protocol-layer attack.",
    "id": 1189,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "An analyst wants to investigate a suspicious email. The email claims to be from a business partner but contains a SPF soft fail header and a failed DKIM signature validation. Which security component in the email gateway flagged this mismatch?",
    "options": [
      "S/MIME decryptor",
      "DMARC verification engine",
      "Anti-Spam reputation filter",
      "WAF inspector"
    ],
    "answer": 1,
    "explanation": "DMARC verifies that the sender domain matches the SPF and DKIM validations. When they fail or mismatch, DMARC flags the verification failure and applies the domain owner's reporting/policy settings.",
    "id": 1190,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "An administrator wants to deploy an endpoint agent that is capable of automatically disconnecting a workstation from the local network if it detects ransomware process activity, preventing the ransomware from spreading to network shares. What solution should they implement?",
    "options": [
      "Host Intrusion Detection System (HIDS)",
      "Endpoint Detection and Response (EDR)",
      "Traditional Antivirus",
      "Group Policy Object"
    ],
    "answer": 1,
    "explanation": "EDR (Endpoint Detection and Response) agents monitor process behavior and contain active isolation/containment capabilities, enabling them to isolate compromised hosts from the network automatically when malicious behavior is detected.",
    "id": 1191,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A network security architect wants to configure 802.1X wireless authentication. The architect requires both the authentication server and the client endpoints to validate each other's identities using digital certificates. Which EAP protocol must they choose?",
    "options": [
      "PEAP",
      "EAP-TLS",
      "EAP-FAST",
      "EAP-TTLS"
    ],
    "answer": 1,
    "explanation": "EAP-TLS (EAP Transport Layer Security) is the standard that requires digital certificates on both the client endpoints and the authentication server for mutual cryptographic authentication. PEAP and EAP-TTLS only require server-side certificates.",
    "id": 1192,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A security analyst reviews a DMARC policy record: `v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@company.com`. What policy action does `p=quarantine` recommend to receiving mail servers?",
    "options": [
      "Accept all failed emails but send reports to the specified address.",
      "Deliver emails that fail validation to the recipient's spam/junk folder.",
      "Block and reject all failed emails at the gateway.",
      "Decrypt the S/MIME signatures automatically."
    ],
    "answer": 1,
    "explanation": "The DMARC policy `quarantine` directs receiving servers to flag emails that fail verification as suspicious (e.g., placing them in the spam/junk folder). The policy `reject` blocks them. The policy `none` allows delivery but gathers reports.",
    "id": 1193,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "An attacker targets a corporate Wi-Fi client. The attacker sends spoofed management frames to the client device, pretending to be the access point, instructing the client to disconnect immediately. The attacker hopes to capture the handshake when the client reconnects. What type of attack is this?",
    "options": [
      "IV Collision Attack",
      "Deauthentication Attack",
      "WPS PIN brute-force",
      "RF Jamming"
    ],
    "answer": 1,
    "explanation": "A deauthentication attack is a protocol-level attack where the attacker sends spoofed deauth frames to force a client to disconnect from the access point, exposing them to handshake capture or evil twin attacks.",
    "id": 1194,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A security analyst wants to verify who is sending emails using their corporate domain. They receive DMARC XML reports weekly. What information do these reports primarily contain?",
    "options": [
      "The plaintext body content of all outgoing corporate emails",
      "The IP addresses of servers sending emails claiming to be from the domain, and their SPF/DKIM verification status",
      "The passwords of users who sent failed emails",
      "The network routing diagrams of the email relays"
    ],
    "answer": 1,
    "explanation": "DMARC reports contain aggregate statistics about email traffic originating from the domain, detailing the sender IP addresses, email volumes, and whether the emails passed SPF and DKIM validation checks.",
    "id": 1195,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "An organization wants to encrypt all email traffic between their offices and their business partners. Both organizations use cloud-based email services. Which protocol should they configure on their mail gateways to secure email transport?",
    "options": [
      "S/MIME",
      "Opportunistic / Forced TLS (Transport Layer Security)",
      "DKIM",
      "Syslog Secure"
    ],
    "answer": 1,
    "explanation": "Forced TLS (or SMTP over TLS) secures the communication channel (transport layer) between email servers, ensuring that all emails sent between the gateways are encrypted in transit. S/MIME is for message-level encryption.",
    "id": 1196,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A security administrator is configuring a corporate wireless network. To comply with security standards, the administrator wants to implement WPA3. Which encryption protocol does WPA3 use to protect data frames?",
    "options": [
      "RC4 with TKIP",
      "AES-CCMP",
      "AES-GCMP (Galois/Counter Mode Protocol)",
      "WEP-AEAD"
    ],
    "answer": 2,
    "explanation": "WPA3 uses AES-GCMP (Galois/Counter Mode Protocol) for data encryption, which is more secure and efficient than the AES-CCMP protocol used in WPA2. WEP and TKIP are legacy, insecure protocols.",
    "id": 1197,
    "correctAnswer": 2
  },
  {
    "section": "S21",
    "question": "A security engineer is deploying a Secure Email Gateway (SEG). The engineer wants to ensure that the SEG scans all incoming attachments in a secure virtual environment to detect zero-day malware before delivering the email. What feature is this?",
    "options": [
      "Email Hashing",
      "Attachment Sandboxing",
      "DKIM Signing",
      "SMTP TLS forcing"
    ],
    "answer": 1,
    "explanation": "Attachment sandboxing executes suspicious email attachments in an isolated virtual environment (sandbox) to observe their behavior, detecting zero-day threats that traditional signatures miss.",
    "id": 1198,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A security analyst wants to implement a solution to monitor all corporate endpoints for indicators of compromise (IOCs). The solution must collect detailed process histories, network connection logs, and file changes, storing them in a central cloud console for threat hunting. Which solution is the BEST choice?",
    "options": [
      "Traditional Host-based Firewall",
      "Endpoint Detection and Response (EDR)",
      "Network Access Control (NAC) Agent",
      "Basic Antivirus"
    ],
    "answer": 1,
    "explanation": "EDR solutions provide continuous endpoint monitoring, collecting and storing granular telemetry (processes, files, network data) to aid in threat detection, investigation, and threat hunting.",
    "id": 1199,
    "correctAnswer": 1
  },
  {
    "section": "S21",
    "question": "A network architect is designing a wireless LAN deployment. To prevent unauthorized devices from accessing the corporate network, the architect wants to implement port-based authentication that blocks switch ports until client credentials are validated against a central RADIUS server. Which standard is this?",
    "options": [
      "802.11ac",
      "802.1X",
      "802.3af",
      "WPA3-Personal"
    ],
    "answer": 1,
    "explanation": "802.1X is an IEEE standard for port-based Network Access Control (PNAC), providing authentication for devices attempting to connect to a LAN or WLAN through switch ports or access points.",
    "id": 1200,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A security officer plans an internal vulnerability scan to audit the patch levels and configuration settings of several production databases. To minimize network overhead and ensure a low false-positive rate, which scanning approach should the officer select?",
    "options": [
      "A non-credentialed scan",
      "A passive network capture scan",
      "A credentialed scan",
      "A black-box port sweep"
    ],
    "answer": 2,
    "explanation": "A credentialed scan logs directly into target hosts using valid credentials, enabling precise checks of the registry, package configurations, and patch directories with minimal network traffic and a low false-positive rate. Non-credentialed scans inspect systems externally, causing more network traffic and higher false-positive rates. Passive capture cannot check local configuration details. Port sweeps only identify open ports, not vulnerability details.",
    "id": 1201,
    "correctAnswer": 2
  },
  {
    "section": "S22",
    "question": "A vulnerability report identifies a critical remote code execution vulnerability in a company's web-based ERP system. Because the ERP contains highly customized legacy code, the software vendor estimates it will take three months to deliver a safe patch. To reduce the likelihood of exploitation immediately without shutting down the service, the IT team implements restrictive firewall rules and deploys a WAF in front of the ERP. Which risk management strategy does this action represent?",
    "options": [
      "Risk Mitigation",
      "Risk Avoidance",
      "Risk Transference",
      "Vulnerability Deflection"
    ],
    "answer": 0,
    "explanation": "Risk Mitigation involves applying technical controls or compensating measures (like firewall rules and WAFs) to reduce the likelihood or impact of a threat when a vulnerability cannot be permanently fixed (patched) immediately. Risk avoidance would require decommissioning the ERP system. Risk transference shifts the liability to a third party (like insurance). Vulnerability deflection is an invented term.",
    "id": 1202,
    "correctAnswer": 0
  },
  {
    "section": "S22",
    "question": "A security analyst reviews the following CVSS v3 vector string for a newly published vulnerability: `CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`. What information does the metric `AV:N` convey about the vulnerability's exploitability?",
    "options": [
      "The attacker must possess network-level credentials before exploiting the vulnerability (Normal).",
      "The vulnerability can only be exploited if the victim performs an interactive network action (Neighbor).",
      "The attack can be executed remotely over a network connection without requiring physical or local access (Network).",
      "The attack requires the target system to be located within an isolated private network (Null)."
    ],
    "answer": 2,
    "explanation": "The AV (Attack Vector) metric in CVSS defines the logical or physical path required to exploit a vulnerability. The value `N` (Network) indicates the vulnerability is exploitable remotely over a network interface without local or physical console access. The other options describe incorrect parameter definitions or metrics.",
    "id": 1203,
    "correctAnswer": 2
  },
  {
    "section": "S22",
    "question": "An independent security researcher discovers a critical authentication bypass vulnerability in a router vendor's firmware. The researcher sends the technical details confidentially to the vendor, giving them 90 days to create and deploy a patch before public release. What ethical disclosure practice is this?",
    "options": [
      "Bug Bounty Program",
      "Full Disclosure",
      "Ethical Patching Alliance (EPA)",
      "Responsible / Coordinated Disclosure"
    ],
    "answer": 3,
    "explanation": "Responsible (or Coordinated) Disclosure is the practice of reporting software vulnerabilities privately to the vendor to give them time to address the issue before it is made public. Bug bounty programs are formal incentive structures, but the coordinated disclosure practice itself is called responsible disclosure. Full disclosure immediately publishes details without notifying the vendor first. EPA is an invented term.",
    "id": 1204,
    "correctAnswer": 3
  },
  {
    "section": "S22",
    "question": "A vulnerability scan report highlights a critical vulnerability with a CVSS v3 score of 9.2. How should this vulnerability severity be classified?",
    "options": [
      "Medium",
      "High",
      "Critical",
      "Extreme"
    ],
    "answer": 2,
    "explanation": "According to CVSS v3 severity ratings: scores between 0.1-3.9 are Low, 4.0-6.9 are Medium, 7.0-8.9 are High, and 9.0-10.0 are Critical. A score of 9.2 is Critical.",
    "id": 1205,
    "correctAnswer": 2
  },
  {
    "section": "S22",
    "question": "A vulnerability scanner flags a production server as vulnerable to an old exploit because the OS kernel version matches the vulnerable version range. However, the system administrator verifies that the security patch was backported by the OS distributor, rendering the exploit useless. What type of scan result is this?",
    "options": [
      "False Positive",
      "True Positive",
      "False Negative",
      "True Negative"
    ],
    "answer": 0,
    "explanation": "A False Positive occurs when a security scanner incorrectly reports a vulnerability that does not actually exist or is already mitigated. In this case, the backported patch makes the report a false positive.",
    "id": 1206,
    "correctAnswer": 0
  },
  {
    "section": "S22",
    "question": "A security analyst wants to gather vulnerability telemetry across the network without generating probe traffic or risking application crashes on critical hosts. Which scanning method should the analyst select?",
    "options": [
      "Credentialed active scanning",
      "Passive vulnerability scanning",
      "Non-credentialed active scanning",
      "Fuzz testing sweep"
    ],
    "answer": 1,
    "explanation": "Passive vulnerability scanning monitors network traffic (headers, packet exchanges) to identify active services, operating systems, and potential vulnerabilities without actively probing or sending packets to the target hosts, avoiding impact risks. Active scanning sends probes.",
    "id": 1207,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "An analyst is investigating a newly released vulnerability. They want to check details using a database that lists standardized identifiers, descriptions, and dictionary definitions of public vulnerabilities. Which database should they reference?",
    "options": [
      "National Vulnerability Database (NVD)",
      "CVE (Common Vulnerabilities and Exposures)",
      "CVSS Severity Feed",
      "Security Information Exchange (SIE)"
    ],
    "answer": 1,
    "explanation": "CVE (Common Vulnerabilities and Exposures) is a standardized dictionary of publicly known cybersecurity vulnerabilities, providing a unique ID (CVE-YYYY-XXXXX) and description for each flaw. NVD is built on CVE and provides scoring.",
    "id": 1208,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A company performs a risk assessment on a legacy database server. Remediation costs $50,000, while the maximum potential loss from exploitation is estimated at $2,000. Management decides to log the risk in the register and take no further security actions. Which risk strategy is this?",
    "options": [
      "Risk Mitigation",
      "Risk Transference",
      "Risk Acceptance",
      "Risk Avoidance"
    ],
    "answer": 2,
    "explanation": "Risk Acceptance is a risk strategy where management decides to acknowledge the risk and take no active steps to resolve it, typically because the cost of remediation exceeds the potential impact of the threat.",
    "id": 1209,
    "correctAnswer": 2
  },
  {
    "section": "S22",
    "question": "An organization wants to protect itself against the financial impact of a potential ransomware attack. They purchase a comprehensive cybersecurity insurance policy from an underwriting firm. Which risk management strategy does this represent?",
    "options": [
      "Risk Avoidance",
      "Risk Transference",
      "Risk Mitigation",
      "Risk Acceptance"
    ],
    "answer": 1,
    "explanation": "Risk Transference shifts the financial risk or liability associated with a threat to a third party (such as an insurance company or an outsourced service provider).",
    "id": 1210,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A security auditor identifies a legacy file sharing protocol active on a company intranet. Because the protocol has multiple critical vulnerabilities that cannot be patched, management decides to shut down the server permanently. Which risk strategy does this represent?",
    "options": [
      "Risk Mitigation",
      "Risk Acceptance",
      "Risk Transference",
      "Risk Avoidance"
    ],
    "answer": 3,
    "explanation": "Risk Avoidance is a strategy where an organization completely eliminates the risk by removing the asset, disabling the vulnerable service, or shutting down the system entirely.",
    "id": 1211,
    "correctAnswer": 3
  },
  {
    "section": "S22",
    "question": "A security analyst reviews a CVSS v3 score. The metric `AC:H` is present. What does this metric tell the analyst about the vulnerability's exploitability?",
    "options": [
      "The exploit requires the attacker to possess administrator privileges.",
      "The attack complexity is high, requiring specialized conditions or timing to succeed.",
      "The attacker must be physically near the target switch.",
      "The attack can be automated using basic scripts."
    ],
    "answer": 1,
    "explanation": "The AC (Attack Complexity) metric measures the level of control or specific conditions required to exploit the vulnerability. `AC:H` (High) indicates that successful exploitation requires specialized conditions that are not easily replicated (such as race conditions or timing windows).",
    "id": 1212,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A vulnerability details page indicates that the CVSS v3 metric `PR:H` is required. What privilege requirement must an attacker satisfy to exploit this vulnerability?",
    "options": [
      "No authentication is required.",
      "The attacker must possess low-privileged user access.",
      "The attacker must possess high-privileged or administrative access.",
      "The victim must interact with a malicious email link."
    ],
    "answer": 2,
    "explanation": "The PR (Privileges Required) metric defines the level of privileges an attacker must possess before exploiting the vulnerability. `PR:H` (High) requires administrative or superuser access. `PR:L` requires standard user access. `PR:N` requires no privileges.",
    "id": 1213,
    "correctAnswer": 2
  },
  {
    "section": "S22",
    "question": "A vulnerability requires a user to open a malicious spreadsheet attachment in their local email client to trigger an execution exploit. How should the CVSS v3 User Interaction (UI) metric be classified?",
    "options": [
      "UI:N (None)",
      "UI:R (Required)",
      "UI:L (Low)",
      "UI:A (Active)"
    ],
    "answer": 1,
    "explanation": "The UI (User Interaction) metric indicates if a victim must perform some action to trigger the exploit. Because the user must actively open the spreadsheet file, the metric is `UI:R` (Required). `UI:N` (None) is for automated exploits.",
    "id": 1214,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "An attacker exploits a vulnerability in a web browser's sandboxed layout engine to execute arbitrary operating system commands directly on the host host. In CVSS v3, how is this transition represented?",
    "options": [
      "Scope: Unchanged (S:U)",
      "Scope: Changed (S:C)",
      "Attack Vector: Local (AV:L)",
      "Privileges Required: High (PR:H)"
    ],
    "answer": 1,
    "explanation": "In CVSS v3, the Scope (S) metric measures if a vulnerability in one software component affects resources managed by other security authorities. Breaking out of a browser sandbox to the host OS represents a Scope Change (`S:C`).",
    "id": 1215,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "An enterprise SIEM automatically correlates audit logs from domain controllers against a real-time vulnerability feed. The feed updates the SIEM whenever a new CVE matching the active database software versions is published. What security capability is this?",
    "options": [
      "Vulnerability feed integration / Threat intelligence parsing",
      "Dynamic application security testing (DAST)",
      "Static code compilation scanning",
      "Manual penetration testing"
    ],
    "answer": 0,
    "explanation": "Integrating real-time vulnerability feeds (like CVE/NVD feeds) into a SIEM allows security teams to correlate asset catalogs and log telemetry automatically with newly disclosed threat definitions.",
    "id": 1216,
    "correctAnswer": 0
  },
  {
    "section": "S22",
    "question": "An IT department receives a monthly security patch update from their operating system vendor. To prevent the patches from causing operational disruptions, what should the patch management policy require?",
    "options": [
      "Deploying the patches immediately to all production servers during business hours.",
      "Testing patches in a non-production staging environment before deploying to production.",
      "Disabling automatic updates permanently on all servers.",
      "Re-licensing the software under an open-source agreement."
    ],
    "answer": 1,
    "explanation": "A robust patch management process mandates testing updates in a staging/testing environment first to verify they do not introduce stability issues or break applications, before executing production deployment.",
    "id": 1217,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A security analyst is prioritizing patch deployments. They find a vulnerability in their web portal that has a CVSS v3 score of 7.5 (High), but it has no known public exploits. They find another vulnerability in an internal server with a CVSS v3 score of 5.5 (Medium), but threat intelligence indicates it is actively being exploited in the wild. Which patch should the analyst apply FIRST?",
    "options": [
      "The portal patch, because its CVSS v3 score is higher.",
      "The internal server patch, because active exploitation in the wild increases real-world risk.",
      "Neither, because both are below the critical threshold.",
      "Apply both simultaneously without testing."
    ],
    "answer": 1,
    "explanation": "Vulnerability prioritization should consider active exploitation in the wild (threat intelligence) in addition to base CVSS scores. An actively exploited vulnerability represents immediate risk, making it the priority for remediation.",
    "id": 1218,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A network security administrator schedules a comprehensive network vulnerability scan. To minimize operational impact, when should the administrator configure the scan to run?",
    "options": [
      "During peak business hours to capture full user traffic",
      "During designated off-peak hours or maintenance windows",
      "Immediately after database replication tasks start",
      "At random times throughout the day"
    ],
    "answer": 1,
    "explanation": "Active vulnerability scans generate probe traffic and CPU load. Scheduling scans during off-peak hours or maintenance windows minimizes the risk of network congestion or application outages affecting business operations.",
    "id": 1219,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A security team is classifying organization systems for a vulnerability remediation plan. Which asset should be assigned the highest criticality rating?",
    "options": [
      "A receptionist's local workstation",
      "A customer-facing web portal database server holding PII",
      "A development sandbox server running test applications",
      "An offline training lab laptop"
    ],
    "answer": 1,
    "explanation": "Systems holding sensitive data (like PII or financial data) or hosting public-facing services represent the highest business impact if compromised, and should receive the highest asset criticality ratings.",
    "id": 1220,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A software vendor establishes a program where external security researchers are legally permitted to discover vulnerabilities in the vendor's application and report them privately in exchange for financial rewards. What is this program called?",
    "options": [
      "Bug Bounty Program",
      "Full Disclosure Campaign",
      "Vulnerability Audit Registry",
      "Responsible Sourcing Portal"
    ],
    "answer": 0,
    "explanation": "A Bug Bounty Program is a structured program offering recognition and cash rewards (bounties) to security researchers who discover and report vulnerabilities privately to the organization.",
    "id": 1221,
    "correctAnswer": 0
  },
  {
    "section": "S22",
    "question": "A security researcher discovers a critical vulnerability in a web server software package. The researcher immediately publishes the exploit code and technical details on a public social media forum without notifying the vendor first. What disclosure model does this represent?",
    "options": [
      "Responsible Disclosure",
      "Full Disclosure",
      "Coordinated Disclosure",
      "Private Bounty disclosure"
    ],
    "answer": 1,
    "explanation": "Full Disclosure is the practice of publishing vulnerability details and exploit code to the public immediately, without giving the software vendor prior warning or time to release a patch.",
    "id": 1222,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A security administrator conducts a vulnerability scan and selects an anonymous, non-credentialed scan configuration. Which of the following represents the PRIMARY benefit of this scanning approach?",
    "options": [
      "It has a lower false-positive rate than a credentialed scan.",
      "It shows the target systems exactly as an external, unauthenticated attacker would see them.",
      "It provides full access to local server registry keys.",
      "It does not generate any network traffic."
    ],
    "answer": 1,
    "explanation": "Non-credentialed scans do not log into the host. They probe external ports and banners, providing an accurate representation of what an external, unauthenticated attacker can discover from the outside.",
    "id": 1223,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A corporate policy mandates that vulnerability scans must be conducted weekly. Which of the following is the PRIMARY reason for scheduling scans at this frequency?",
    "options": [
      "To ensure that new systems and newly published vulnerabilities (CVEs) are identified and audited quickly",
      "To comply with local electrical grid guidelines",
      "To delete temporary user logs automatically",
      "To test switch hardware routing limits"
    ],
    "answer": 0,
    "explanation": "Weekly scheduling ensures that newly deployed assets, system changes, and newly published vulnerabilities (which are released daily) are discovered and analyzed promptly to maintain a strong security posture.",
    "id": 1224,
    "correctAnswer": 0
  },
  {
    "section": "S22",
    "question": "A security analyst wants to evaluate a web application for vulnerabilities while the application is compiled and running, simulating real attacks by sending malformed HTTP payloads to the web inputs. Which testing methodology should they use?",
    "options": [
      "Static Application Security Testing (SAST)",
      "Dynamic Application Security Testing (DAST)",
      "Component Architecture Review",
      "Manual Code Auditing"
    ],
    "answer": 1,
    "explanation": "DAST (Dynamic Application Security Testing) is a black-box analysis method that tests a running application externally to identify security vulnerabilities. SAST analyzes the static source code.",
    "id": 1225,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "An administrator is setting up a new enterprise vulnerability scanner. Before running the first scan, which configuration step is the MOST critical to ensure the scanner can detect the latest threats?",
    "options": [
      "Upgrade the scanner's physical CPU.",
      "Update the scanner's vulnerability plug-ins / signatures database.",
      "Change the scanner's default MAC address.",
      "Configure the scanner to run as a domain controller."
    ],
    "answer": 1,
    "explanation": "Vulnerability scanners rely on signatures (plug-ins) to identify threats. Updating the plug-in/signature database before scanning ensures the scanner possesses the definitions needed to detect the latest vulnerabilities.",
    "id": 1226,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A security analyst configures a vulnerability scanner to use a dedicated service account to log into local Unix systems. How should this service account be configured to align with security best practices?",
    "options": [
      "It should use a shared password known to all help desk technicians.",
      "It should be granted the minimum privileges necessary to perform the scan checks, and its credentials should be stored securely in a vault.",
      "It should be configured with a blank password to allow quick logins.",
      "It should be configured to run with full domain administrator privileges globally."
    ],
    "answer": 1,
    "explanation": "Workstation scanning service accounts should follow the principle of least privilege (only permissions needed to read configuration files/registries) and have their passwords managed securely in a vault.",
    "id": 1227,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A Linux distributor backports a security patch to an older kernel version. A simple version-checking vulnerability scanner flags the kernel as vulnerable because of the version number. What does this false positive illustrate?",
    "options": [
      "The weakness of passive scanning",
      "The limitation of version-based / signature-only scanning without credentialed validation",
      "The risk of a DLL injection attack on the scanner",
      "The failure of the backporting update"
    ],
    "answer": 1,
    "explanation": "Simple version-checking scanners (often non-credentialed) look only at banners. They flag systems as vulnerable if the version number is in the exploit range, failing to check if the security fix was backported, resulting in false positives.",
    "id": 1228,
    "correctAnswer": 1
  },
  {
    "section": "S22",
    "question": "A security architect is analyzing CVSS v3 metric groups. They want to adjust a vulnerability's score to reflect their specific organization's deployment characteristics and network compensating controls. Which CVSS metric group should they configure?",
    "options": [
      "Base Metric Group",
      "Temporal Metric Group",
      "Environmental Metric Group",
      "Systemic Metric Group"
    ],
    "answer": 2,
    "explanation": "The Environmental metric group in CVSS v3 represents characteristics of a vulnerability that are specific to a particular user's environment, such as compensating controls or asset distribution. Base represents static properties, and Temporal changes over time.",
    "id": 1229,
    "correctAnswer": 2
  },
  {
    "section": "S22",
    "question": "During a vulnerability scan, the IT director notices that a legacy web service crashed when the scanner probed a custom port. Which of the following should the director implement to verify vulnerabilities on this specific host safely in the future?",
    "options": [
      "Switch to credentialed, non-intrusive scanning and exclude the custom port from active probes.",
      "Perform a full-scale automated fuzz testing sweep during peak hours.",
      "Disable vulnerability scanning on the legacy host entirely.",
      "Configure a script to reboot the legacy host every 5 minutes during scans."
    ],
    "answer": 0,
    "explanation": "Switching to non-intrusive, credentialed checks allows the scanner to verify patches locally via registries and package managers without sending intrusive network probes that cause legacy services to crash. Disabling scanning leaves the asset unmonitored.",
    "id": 1230,
    "correctAnswer": 0
  }
];