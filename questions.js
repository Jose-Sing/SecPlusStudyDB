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
      "Encryption strength comes from the key, not the algorithm. Algorithms are publicly reviewed \u2014 hiding them is 'security through obscurity', which is unreliable.",
      "AES-256 requires a secret algorithm to maintain 256-bit security strength.",
      "Symmetric algorithms are inherently weaker than asymmetric ones regardless of secrecy.",
      "Key rotation is unnecessary when the algorithm itself is confidential."
    ],
    "answer": 0,
    "explanation": "A core principle of modern cryptography is that security must come from the KEY, not the algorithm. Algorithms like AES are publicly documented and peer-reviewed \u2014 that transparency is a strength. 'Security through obscurity' is explicitly considered an insecure practice."
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
    "explanation": "Confidentiality: encrypt with the RECEIVER's (Bob's) public key \u2014 only Bob can decrypt with his private key. Non-repudiation: sign the hash with the SENDER's (Alice's) private key \u2014 anyone can verify with Alice's public key, but only Alice could have created the signature. These are two separate, opposite operations."
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
    "explanation": "Pass-the-Hash exploits the fact that Windows NTLM authentication accepts the hash itself as a valid credential \u2014 no plaintext password needed. Defenses include MFA (so stolen hashes alone are insufficient), least privilege (limit lateral movement), patching, and requiring trusted OS connections."
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
      "CRL and OCSP are identical \u2014 both check one certificate at a time with the same speed."
    ],
    "answer": 1,
    "explanation": "The CRL is a full, cumulative list of every certificate ever revoked by a CA \u2014 downloading it is slower. OCSP queries the status of a single certificate by serial number, making it faster. OCSP Stapling is a further optimization where the server pre-fetches its own OCSP response and includes it in the TLS handshake, eliminating an extra round-trip."
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
    "explanation": "A Downgrade Attack forces two communicating systems to use an older, weaker protocol by manipulating the version negotiation handshake. The POODLE (Padding Oracle On Downgraded Legacy Encryption) attack is the famous real-world example \u2014 it exploited SSL 3.0 vulnerabilities by forcing modern systems to fall back to it."
  },
  {
    "id": 129,
    "section": "S8",
    "question": "A company stores sensitive customer data and replaces all credit card numbers in its database with random strings that map back to the real numbers in a separate secured vault. Meanwhile, test environments use data where real names are replaced with fictional but realistic ones. Which techniques are being used, respectively?",
    "options": [
      "Steganography for the payment system; tokenization for the test environment.",
      "Tokenization for the payment system (random token replaces card number, real data in secure vault); data masking for the test environment (fictional but realistic data for safe testing).",
      "Data masking for both \u2014 both involve replacing data with fake values.",
      "Encryption for the payment system; tokenization for the test environment."
    ],
    "answer": 1,
    "explanation": "Tokenization substitutes real sensitive data with a meaningless token \u2014 the actual data lives in a separate secured vault, so a breach of the main database yields nothing useful. Data masking replaces real data with fictional-but-realistic data for testing \u2014 it preserves the data's format and usability without exposing real records."
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
    "explanation": "CRYSTALS-Kyber is NIST's recommended algorithm for general encryption in the post-quantum era. It is based on the hardness of Learning With Errors (LWE) problems over lattices \u2014 a mathematical problem that quantum computers (including those using Shor's algorithm) cannot efficiently solve. AES-512 does not exist; AES-256 provides partial quantum resistance. CRYSTALS-Dilithium is for digital signatures, not general encryption."
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
    "explanation": "Single Loss Expectancy (SLE) is calculated as Asset Value \u00d7 Exposure Factor (EF) = $50,000 \u00d7 0.80 = $40,000. The Annualized Rate of Occurrence (ARO) is 1 / 4 = 0.25. The Annualized Loss Expectancy (ALE) is SLE \u00d7 ARO = $40,000 \u00d7 0.25 = $10,000 per year."
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
  }
];
