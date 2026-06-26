# 🛡️ CompTIA Security+ SY0-701 — Dion Training

## Section 18: Vulnerabilities and Attacks

> **Keywords:** Hardware Vulnerabilities · Bluetooth Attacks · Mobile Security · Zero-Day · OS Vulnerabilities · SQL Injection · XML Injection · XSS · XSRF · Buffer Overflow · Race Conditions · Firmware · Patching · Input Validation · Session Hijacking

---

## 1. Vulnerabilities and Attacks — Overview

* **Definition:** Vulnerabilities are weaknesses or flaws in hardware, software, configurations, or processes that can be exploited; attacks are deliberate actions by threat actors that exploit those vulnerabilities to cause unauthorized access, data theft, malware infection, denial of service, or other harm.

This section covers Security+ objectives 2.2, 2.3, 2.4, 2.5, and 4.1, addressing common threat vectors, vulnerability types, indicators of malicious activity, mitigation techniques, and security techniques applied to computing resources.

> *Es como una ciudad medieval: las vulnerabilidades son las grietas en la muralla, y los ataques son los ejércitos que buscan activamente esas grietas para entrar. Sin murallas sólidas y bien mantenidas, la ciudad cae.*

---

## 2. Hardware Vulnerabilities

* **Definition:** Security flaws or weaknesses inherent in a device's physical components or design that can be exploited to compromise the integrity, confidentiality, or availability of the system and its data.

Hardware vulnerabilities affect all device types: servers, workstations, laptops, switches, routers, network appliances, mobile devices, and IoT devices.

> *Es como un edificio con defectos de construcción: no importa cuántas cerraduras pongas en las puertas, si los cimientos están mal hechos, el edificio es vulnerable. El fabricante del edificio no está disponible para arreglarlo.*

### Hardware Vulnerabilities: Firmware

* **Definition:** A specialized form of software stored on a hardware device (router, thermostat, etc.) that provides low-level control of the device's hardware and is vulnerable when developed without security in mind, using outdated practices, or left unpatched.

Firmware vulnerabilities are especially dangerous because firmware often has privileged access to the system, giving an attacker who exploits firmware full control over device behavior. Firmware updates are frequently overlooked during routine maintenance, creating persistent vulnerabilities. Mitigation: regular firmware updates, security auditing, and device hardening.

### Hardware Vulnerabilities: End of Life, Legacy, and Unsupported Systems

* **Definition:** Hardware or software that no longer receives updates, patches, or official vendor support — leaving any existing security flaws permanently unaddressed.

These three terms are often used interchangeably:

- **End of Life (EOL):** Product has reached end of its lifecycle; vendor no longer provides updates or enhancements.
- **Legacy systems:** Outdated technologies still in use but superseded by newer alternatives.
- **Unsupported systems:** No longer receive official technical support, security updates, or patches.

Known vulnerabilities in these systems will never be patched, leaving them permanently exploitable by existing exploits.

### Hardware Vulnerabilities: Unpatched Systems

* **Definition:** A device, application, or piece of software that has not been updated with the latest security patches, leaving it vulnerable to known exploits and attacks.

Unpatched systems result from oversight, negligence, or challenges in deploying updates at enterprise scale. Mitigation requires a formal **patch management process**: monitoring for updates, assessing patch relevance and impact, and deploying patches in a timely manner.

### Hardware Vulnerabilities: Hardware Misconfigurations

* **Definition:** A condition where a device's settings, parameters, or options are not optimally set up, creating vulnerabilities, performance degradation, or unintended device behavior.

Misconfigurations arise from default settings left unchanged, unnecessary services left enabled, or security features accidentally disabled. Mitigation: regular audits, configuration management practices, automated misconfiguration detection tools, and personnel training on correct configuration protocols.

### Hardware Vulnerability Mitigations

* **Definition:** The set of countermeasures applied to reduce or eliminate hardware vulnerabilities across devices and systems.

| Mitigation                    | Description                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Hardening**                 | Closing unnecessary ports, disabling unused services, setting proper permissions on firmware, applications, and hardware |
| **Patching**                  | Regularly updating software, firmware, and applications with the latest security patches                                 |
| **Configuration Enforcement** | Ensuring all devices adhere to a standard secure baseline configuration                                                  |
| **Decommissioning**           | Retiring and removing EOL/legacy systems from the network when they pose unacceptable security risk                      |
| **Isolation**                 | Separating legacy or vulnerable systems from the enterprise network to limit breach impact                               |
| **Segmentation**              | Dividing the network into segments so a breach in one area does not compromise the entire enterprise                     |

---

## 3. Bluetooth Vulnerabilities and Attacks

* **Definition:** Security weaknesses and deliberate exploits targeting the Bluetooth wireless protocol, which enables short-range data exchange between devices without an Internet connection.

> *Es como hablar en voz alta en un lugar público: cualquiera que esté cerca puede escuchar tu conversación si no tomas las precauciones adecuadas para proteger lo que dices.*

### Bluetooth Vulnerabilities: Insecure Pairing

* **Definition:** A condition where Bluetooth devices establish a connection without proper authentication or using weak authentication methods, leaving them vulnerable to unauthorized access or interference.

Some Bluetooth devices require no authentication at all; others use weak methods during pairing that are susceptible to exploitation.

### Bluetooth Vulnerabilities: Device Spoofing

* **Definition:** An attack where an attacker impersonates a legitimate Bluetooth device by mimicking its MAC address and device name to deceive a user into connecting to a malicious device instead.

### Bluetooth Vulnerabilities: On-Path Attack

* **Definition:** An attack that exploits a vulnerability in the Bluetooth communications protocol to intercept and alter communications between two Bluetooth devices without either party being aware.

### Bluetooth Attack: Bluejacking

* **Definition:** An attack where an attacker sends unsolicited messages to a Bluetooth-enabled device, often as a prank or to probe device visibility, without causing serious harm or accessing data.

### Bluetooth Attack: Bluesnarfing

* **Definition:** An attack involving unauthorized access to a device through its Bluetooth connection to steal information such as contacts, call logs, and text messages.

### Bluetooth Attack: Bluebugging

* **Definition:** An attack that goes beyond Bluesnarfing by allowing the attacker to take full control of a device's Bluetooth functions, potentially making calls, sending messages, or accessing the Internet from the victim's device.

### Bluetooth Attack: Bluesmack

* **Definition:** A Bluetooth denial-of-service attack where an attacker overwhelms a device by sending a large amount of data, causing it to crash or become unresponsive.

### Bluetooth Attack: Blueborne

* **Definition:** An airborne Bluetooth attack that can spread through the air to infect numerous devices within seconds without requiring any user interaction or the target device to be in discoverable mode.

### Bluetooth Security Best Practices

* **Definition:** Recommended behaviors and configurations that minimize exposure to Bluetooth-based attacks.

| Practice                                       | Why It Matters                                                       |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| Turn off Bluetooth when not in use             | Reduces attack surface to zero                                       |
| Set devices to non-discoverable by default     | Prevents unknown devices from finding and initiating connections     |
| Regularly update firmware                      | Patches known Bluetooth vulnerabilities                              |
| Only pair with known and trusted devices       | Eliminates risk of connecting to malicious devices                   |
| Use unique PINs or passkeys during pairing     | Adds authentication layer against unauthorized pairing               |
| Be cautious of unsolicited connection requests | Unsolicited requests may carry malware (e.g., AirDrop-style attacks) |
| Use encryption for sensitive data transfers    | Ensures intercepted data remains unreadable                          |

---

## 4. Mobile Vulnerabilities and Attacks

* **Definition:** Security weaknesses specific to mobile devices (smartphones, tablets, wearables) arising from software installation practices, device privilege escalation, and insecure wireless connection methods.

> *Es como un carro con el seguro roto: los fabricantes construyen sistemas de seguridad integrados, pero si los desactivas o conectas el carro a redes no confiables, estás dejando la puerta abierta para que te lo roben.*

### Mobile Vulnerability: Sideloading

* **Definition:** The practice of installing applications on a mobile device from unofficial sources outside the device's official app store, bypassing the store's security review process.

Sideloaded apps are not scanned or verified by the platform's submission process, making them a common delivery vehicle for malware. Mitigation: always download apps from official stores (App Store, Google Play) that enforce strict review processes.

### Mobile Vulnerability: Jailbreaking and Rooting

* **Definition:** The process of escalating user permissions on a mobile device (jailbreaking on iOS, rooting on Android) to circumvent built-in security measures provided by the manufacturer.

While enabling greater device customization, jailbreaking/rooting prevents installation of manufacturer security updates, leaving the device permanently exposed to newly discovered exploits. Mitigation: keep the device's original security settings intact.

⚠️ **Rooted/jailbroken devices cannot receive OEM security updates — every new CVE disclosed after rooting becomes a permanent vulnerability.**

### Mobile Vulnerability: Insecure Connection Methods

* **Definition:** The use of open or insufficiently protected Wi-Fi and Bluetooth connections that expose mobile devices to eavesdropping, on-path attacks, and unauthorized data access.

Mitigation options:

- Prefer cellular data over open Wi-Fi
- When using Wi-Fi, require robust authentication (strong password or 802.1x)
- Connect over Bluetooth only to known devices; keep device non-discoverable when not pairing

### Mobile Device Management (MDM)

* **Definition:** A specialized solution used to minimize mobile security risk through centralized patch management, device configuration enforcement, and best-practice policy enforcement across an organization's mobile fleet.

| MDM Capability           | Security Function                                                                |
| ------------------------ | -------------------------------------------------------------------------------- |
| Regular patching         | Pushes security updates to all devices automatically                             |
| Configuration management | Enforces standardized secure baseline on every device                            |
| Sideloading prevention   | Disables the ability to install apps from unofficial sources                     |
| Jailbreak/root detection | Identifies and flags compromised devices                                         |
| VPN enforcement          | Forces encrypted tunnel when connecting to corporate data over Wi-Fi or cellular |

---

## 5. Zero-Day Vulnerabilities

* **Definition:** A vulnerability in software or hardware that is discovered and exploited by threat actors before the vendor or developer has had the opportunity to release a patch or fix for it — literally zero days old because it is newly discovered and unaddressed.

> *Es como una entrada secreta a un banco que solo el ladrón conoce. La dirección del banco ni siquiera sabe que esa puerta existe, por lo que no pueden cerrarla ni reforzarla.*

A **zero-day exploit** is the malicious code or attack technique that takes advantage of a zero-day vulnerability. A **zero-day attack** is when that exploit is deployed against a target. The term "zero-day" is used interchangeably for the vulnerability, the exploit, and the malware.

⚠️ **Traditional antivirus and anti-malware cannot detect zero-day exploits because no signatures exist yet for a brand-new, never-before-seen attack.**

### Zero-Day: Why They Are Dangerous and Valuable

Zero-days are expensive to develop and therefore treated as strategic assets:

- Bug bounty programs pay significant sums for disclosed zero-days (sometimes $1M+)
- Nation-states and intelligence agencies stockpile zero-days for high-value espionage operations
- Sold on the dark web to criminal organizations
- Threat actors typically try known-vulnerability exploits first; zero-days are reserved for high-value targets where standard malware has failed

Once a zero-day becomes publicly known, it is no longer a zero-day — vendors can now develop patches and AV vendors can create signatures.

---

## 6. Operating System Vulnerabilities

* **Definition:** Security weaknesses in an operating system arising from missing patches, unknown flaws, configuration errors, data exfiltration risks, and malicious update injection that can compromise device security and integrity.

> *El sistema operativo es como el sistema nervioso central de un edificio: controla todo. Si alguien encuentra una forma de manipularlo, puede controlar las luces, las cerraduras, las cámaras y los ascensores al mismo tiempo.*

### OS Vulnerability: Unpatched Systems

* **Definition:** Operating systems that have not been updated with the latest security patches, leaving them susceptible to exploitation via known vulnerabilities matched with existing exploits.

Mitigation: schedule automatic updates; periodically verify that the latest patches have been applied.

### OS Vulnerability: Zero-Day

* **Definition:** As applied to operating systems, a newly discovered vulnerability unknown to the OS developer for which no patch yet exists, giving defenders zero days to react.

Mitigation: implement a **host-based Intrusion Prevention System (IPS)** to detect and block suspicious activities; maintain strong defense-in-depth posture through frequent updates.

### OS Vulnerability: Misconfigurations

* **Definition:** Incorrectly configured OS settings — such as default settings left unchanged, unnecessary services left enabled, or security features accidentally disabled — that create exploitable weaknesses.

Mitigation: deploy configuration management tools to standardize and automate configuration; conduct periodic audits.

### OS Vulnerability: Data Exfiltration

* **Definition:** Unauthorized transfer of data from within an organization to an external location, commonly achieved by exploiting an OS vulnerability to steal data without the organization's awareness.

Mitigation:

- **Encryption of data at rest** — ensures stolen data is unreadable
- **Endpoint protection tools** — monitor and restrict unauthorized data transfers
- **Host-based firewall** — controls inbound/outbound traffic to prevent unauthorized data egress

### OS Vulnerability: Malicious Updates

* **Definition:** A deceptive attack where a malicious update masquerades as a legitimate security patch but contains malicious code that injects malware or an exploit into the system upon installation.

Mitigation:

- Source updates only from trusted vendors and official channels
- Maintain **application allow listing** to permit only recognized safe applications
- Verify update authenticity via **digital signature or hash** before installation

---

## 7. SQL Injection

* **Definition:** A code injection attack where malicious SQL statements are inserted into input fields, URL parameters, cookies, or HTTP headers to manipulate a database-driven application's queries and gain unauthorized access, exfiltrate data, or modify/delete records.

> *Es como si pudieras deslizar una nota extra en el pedido de un restaurante que dice "y también dame todas las recetas de la cocina" y el mesero la pasara literalmente a la cocina sin leerla.*

### SQL Basics (Context for the Attack)

SQL (Structured Query Language) is the language used to interact with relational databases. The four primary actions are:

| SQL Action | Purpose                                      |
| ---------- | -------------------------------------------- |
| `SELECT`   | Read data from the database                  |
| `INSERT`   | Write new data into the database             |
| `DELETE`   | Remove data from the database                |
| `UPDATE`   | Overwrite existing data with a newer version |

When a user logs in, the web app sends an SQL query such as:

```
SELECT * FROM Users WHERE user_id = 'Jason' AND password = 'Pass123'
```

### How SQL Injection Works

An attacker who does not know the password enters a crafted string in the password field:

```
' OR 1=1;
```

This transforms the backend query into:

```
SELECT * FROM Users WHERE user_id = 'Jason' AND password = '' OR 1=1;'
```

The apostrophe (`'`) acts as an escape character. The `OR 1=1` condition is always true, so Boolean logic grants access even without the correct password.

⚠️ **Exam tip: Any input containing an apostrophe followed by a condition like `OR 1=1` (or any `x=x` that always evaluates to true) is an SQL injection attempt.**

### SQL Injection: Prevention

* **Definition:** Input validation and sanitization are the primary defenses against SQL injection, filtering out special characters (apostrophes, SQL keywords) before user input reaches the database.

| Defense                             | Description                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Input validation / sanitization** | Filter and reject malicious characters before they reach the database query                                    |
| **Web Application Firewall (WAF)**  | Placed between client and web server; performs input sanitization even if application code cannot be rewritten |

⚠️ **Exam tip: "How do you prevent SQL injection?" → Input validation. Always.**

---

## 8. XML Injection

* **Definition:** An attack technique where malicious XML (Extensible Markup Language) code is inserted into input fields to manipulate or exploit an XML-driven application's parsing mechanisms, potentially leading to unauthorized access, data exposure, or denial of service.

> *Es como meter una instrucción falsa dentro de un formulario de pedidos de una empresa que usa formularios en papel. Si nadie valida el formulario antes de procesarlo, la instrucción falsa se ejecuta como si fuera legítima.*

XML is used by web applications for authentication, authorization, and data exchange. XML data should always be sent inside an encrypted tunnel (TLS) and subjected to input validation before processing.

### XML Attack: XML Bomb (Billion Laughs Attack)

* **Definition:** An XML attack where entities are encoded to reference each other exponentially, causing the XML parser to expand them to enormous sizes that consume server memory and cause a crash or denial of service.

The attack is named "billion laughs" because the referenced entities are typically named `lol1` through `lol9`, each referencing the previous 10 times, creating a factorial explosion (~1 billion `lol` strings) from a tiny file. A simple file can consume up to 3 GB of memory.

### XML Attack: XML External Entity (XXE)

* **Definition:** An XML injection attack that embeds a request for a local system resource (such as a sensitive file) within the XML payload, causing the XML parser to read and return that file's contents to the attacker.

Example: an XXE payload referencing `/etc/shadow` (Linux password hashes) would cause the server to read and return those hashes.

⚠️ **Exam tip: Any code block in XML format appearing in a log or question is almost certainly an XML injection. XML looks like HTML but uses custom, user-defined tag names (not predefined HTML keywords like `<font>` or `<img>`).**

### XML Injection: Prevention

Input validation is the primary defense — validate and sanitize all XML input before processing to prevent XXE and XML bomb attacks.

---

## 9. Cross-Site Scripting (XSS)

* **Definition:** A web security vulnerability where a malicious script is injected into a trusted website and served to other users, executing in their browsers at the trust level of the trusted site — bypassing the browser's security model.

> *Es como si un actor malicioso pudiera poner su propio letrero en la fachada de un banco reconocido. Los clientes ven el letrero del banco confiable, pero el mensaje es del atacante.*

XSS relies on a trusted website failing to conduct proper input validation on user-generated content.

### The Four Steps of a Cross-Site Scripting Attack

1. Attacker identifies an input validation vulnerability in a trusted website
2. Attacker crafts a URL that injects malicious code into the trusted site (and distributes the URL via phishing, forums, etc.)
3. The trusted site returns a page that includes both its legitimate code and the injected malicious code
4. The malicious code executes in the victim's browser at the permission level of the trusted site

### XSS Type: Reflected (Non-Persistent)

* **Definition:** An XSS attack where the injected script is reflected off the web server in response to a specific crafted URL click — it occurs once per click and does not persist in the site's database.

Example payload embedded in URL: `<script type="application/javascript">alert('xss')</script>`

### XSS Type: Persistent (Stored)

* **Definition:** An XSS attack where malicious code is stored in the website's backend database, automatically executing for every user who loads the affected page without requiring any link click.

More dangerous than reflected XSS because no user action (beyond visiting the page) is required.

### XSS Type: DOM-Based

* **Definition:** A client-side XSS attack that exploits the Document Object Model (DOM) in the victim's browser, modifying page content and layout using client-side scripts rather than exploiting the server.

Indicator: payloads referencing `document.cookie`, `document.write`, or `document.location` — the word `document` signals DOM manipulation.

Example: `diontraining.com/index.html#default=<script>alert(document.cookie)</script>`

This executes at the logged-in user's local permission level, making it especially dangerous if an administrator triggers it.

⚠️ **Exam tip: Any URL or log snippet containing `<script>` or JavaScript code → XSS attack. Contains `document.something` → DOM-based XSS specifically.**

### XSS Prevention

Input validation and sanitization prevent injected scripts from being stored or reflected. Web Application Firewalls can also intercept XSS payloads.

---

## 10. Session Management and Cookies

* **Definition:** Session management is the mechanism by which web applications uniquely identify and track individual authenticated users across multiple actions and requests, commonly implemented via cookies stored on the client device.

> *Es como el brazalete que te dan en un parque de diversiones: el parque sabe que pagaste y puedes entrar a las atracciones sin pagar cada vez. Si alguien te roba el brazalete, puede entrar como si fuera tú.*

HTTP is a stateless protocol — by default, web servers preserve no information between requests. Cookies solve this by storing session state on the client.

| Cookie Type                         | Description                                                     |
| ----------------------------------- | --------------------------------------------------------------- |
| **Session (non-persistent) cookie** | Resides in memory; deleted when the browser session ends        |
| **Persistent cookie**               | Stored in browser cache until deleted by the user or it expires |

Cookies must be encrypted and secured because they can contain sensitive session information.

### Session Hijacking

* **Definition:** A spoofing attack where an attacker steals or guesses a valid session token to take over an already-authenticated user's session without needing their credentials.

Methods include cookie theft and session prediction (exploiting non-random, predictable token generation schemes).

### Session Prediction

* **Definition:** A form of spoofing attack where the attacker attempts to predict a session token (generated by a non-random algorithm) in order to hijack an existing authenticated session.

Prevention: generate session tokens using truly random, non-predictable algorithms; tokens should be one-time-use for each session and reveal no client information.

---

## 11. Cross-Site Request Forgery (XSRF / CSRF)

* **Definition:** A web exploit where a malicious script on an attacker's site exploits an existing authenticated session in the victim's browser to send unauthorized HTTP requests to a target website, causing actions to be performed without the victim's knowledge or consent.

> *Es como si alguien viera que tienes las manos ocupadas en el banco y aprovechara para hacer una firma falsa en tu nombre. El banco cree que eres tú porque ya estabas autenticado.*

For XSRF to work, the target site must:

- Have a feature that could lead to unauthorized access (e.g., password reset)
- Rely on cookies for authentication
- Use predictable patterns for session management

The scariest aspect: the victim does not need to click a link — the attack can be triggered by loading a page in an already-open browser tab.

### XSRF Prevention

| Defense                                                    | Description                                                     |
| ---------------------------------------------------------- | --------------------------------------------------------------- |
| **User-specific anti-CSRF tokens** in all form submissions | Developers embed unique tokens that the attacker cannot predict |
| **Randomized prompts / 2FA** for password resets           | Attacker cannot bypass the additional verification step         |
| **Require current password** to change password or email   | Blocks most XSRF attempts to take over accounts                 |

⚠️ **Exam tip: If a scenario describes tricking a victim into unknowingly performing an action on a site (especially changing password or email), the answer is XSRF/CSRF.**

---

## 12. Buffer Overflow

* **Definition:** A software vulnerability that occurs when a process writes more data to a memory buffer than the buffer was allocated to hold, potentially overwriting adjacent memory and allowing an attacker to execute arbitrary code or crash the program.

> *Es como intentar meter 20 vasos de agua en un vaso que solo aguanta 16 onzas: el agua que sobra se derrama sobre la mesa y arruina todo lo que está alrededor.*

85% of data breaches have used buffer overflow attacks as the initial attack vector.

### How a Buffer Overflow Works

A program reserves a fixed-size block of memory (a **stack**) when it starts. The stack stores return addresses — pointers that tell the program where to go after a function completes.

If an attacker floods the buffer with more data than it can hold:

1. The excess data overwrites adjacent memory, including the return address pointer
2. The attacker redirects the return pointer to memory they control, where malicious code (e.g., `/bin/sh`) has been placed
3. When the legitimate program hits the return pointer, it executes the attacker's code instead

This technique is called **"Smashing the Stack."**

### NOP Sled

* **Definition:** A series of NOP (No Operation) instructions inserted before the malicious payload to increase the chance that the CPU lands on the attacker's code after the return pointer is overwritten — the CPU "slides" through the NOPs until it reaches the malicious instruction.

A NOP instruction (`\x90`) tells the CPU to do nothing and advance to the next instruction.

### Buffer Overflow Mitigation: ASLR

* **Definition:** Address Space Layout Randomization (ASLR) is a programming technique that randomizes the memory addresses used by well-known programs and OS components, making it difficult for an attacker to predict where the return pointer should redirect execution.

Introduced in Windows Vista. Attackers can attempt to bypass ASLR via side-channel attacks, but this requires significantly more sophistication.

---

## 13. Race Conditions

* **Definition:** A software vulnerability that occurs when the outcome of execution depends on the order and timing of events, and those events fail to execute in the sequence intended by the developer — allowing an attacker to insert actions between critical operations.

> *Es como cuando dos personas intentan tomar el último asiento en el cine al mismo tiempo: si no hay un proceso claro para decidir quién llega primero, el sistema no sabe qué hacer y puede tomar la decisión equivocada.*

Race conditions are difficult to detect because they often occur outside of normally logged processes.

### Race Condition: Time-of-Check (TOC)

* **Definition:** A race condition where an attacker manipulates the state of a system resource (file, database record) after the application has already checked it but before the application acts on the result of that check.

Example: an app checks if a user has sufficient funds for a transfer, but the attacker initiates multiple concurrent transfers in the gap between the check and the actual debit — overdrawing the account.

### Race Condition: Time-of-Use (TOU)

* **Definition:** A race condition where an attacker changes the state of a resource between the time it is checked and the time it is actually used — focusing on the use phase rather than the check phase.

⚠️ **TOC and TOU are not independent vulnerabilities — they are two critical moments within the same race condition vulnerability, collectively called TOC/TOU.**

### Race Condition: Time-of-Evaluation (TOE)

* **Definition:** A race condition where an attacker manipulates the inputs or resources used during a decision-making or evaluation window, causing the system to reach an incorrect conclusion based on tampered data.

Example: manipulating inputs to a calculation during the evaluation phase to produce an incorrect result that benefits the attacker.

### Race Condition Mitigation: Mutexes and Locks

* **Definition:** A mutex (mutually exclusive flag) is a synchronization mechanism that restricts a section of code to one thread at a time, preventing concurrent execution that would create a race condition.

Most databases and file systems support resource locking. Example: SharePoint locks a file for editing by one user, preventing concurrent modifications.

### Race Condition Risk: Deadlock

* **Definition:** A condition where two or more processes are each waiting for the other to release a locked resource, creating a circular dependency that prevents any progress until external intervention removes the lock.

Deadlocks are a side effect of improper mutex/lock design. Proper testing of lock logic is essential to prevent them.

### The Dirty COW Exploit (Real-World Race Condition Example)

A famous 2016 race condition exploit targeting Linux and Android. COW = Copy On Write. The exploit used timing to turn a read-only memory mapping into a writable one via the kernel's copy-on-write mechanism — enabling local privilege escalation without leaving log traces.

---

## 14. Key Terms Glossary

| Term                       | Definition                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Vulnerability**          | A weakness or flaw in hardware, software, configuration, or process that can be exploited                |
| **Attack**                 | A deliberate action by a threat actor to exploit a vulnerability                                         |
| **Firmware**               | Low-level software stored on hardware devices providing hardware control                                 |
| **End of Life (EOL)**      | Product that no longer receives vendor updates or support                                                |
| **Zero-Day**               | Vulnerability/exploit discovered and used before the vendor can issue a patch                            |
| **Sideloading**            | Installing mobile apps from unofficial sources outside the official app store                            |
| **Jailbreaking / Rooting** | Escalating device permissions to bypass manufacturer security controls                                   |
| **MDM**                    | Mobile Device Management — centralized control of mobile device security policies                        |
| **SQL Injection**          | Inserting malicious SQL into input fields to manipulate database queries                                 |
| **Input Validation**       | Filtering and sanitizing user input to prevent injection attacks                                         |
| **XML Injection**          | Inserting malicious XML code to exploit XML-driven application parsers                                   |
| **XML Bomb**               | XML entity expansion attack that consumes memory to cause DoS                                            |
| **XXE**                    | XML External Entity — embeds file read requests within XML payloads                                      |
| **XSS**                    | Cross-Site Scripting — injecting malicious scripts into trusted websites                                 |
| **Persistent XSS**         | XSS where malicious code is stored in the site's database                                                |
| **Reflected XSS**          | Non-persistent XSS triggered by clicking a crafted URL                                                   |
| **DOM XSS**                | XSS that manipulates the browser's Document Object Model client-side                                     |
| **XSRF / CSRF**            | Cross-Site Request Forgery — exploiting an authenticated session to perform unauthorized actions         |
| **Session Cookie**         | Non-persistent cookie stored in memory for the duration of a browser session                             |
| **Session Hijacking**      | Stealing or guessing a session token to take over an authenticated session                               |
| **Session Prediction**     | Guessing a predictable session token to hijack a session                                                 |
| **Buffer Overflow**        | Writing more data to a memory buffer than it can hold to execute arbitrary code                          |
| **Stack**                  | Reserved memory area where programs store return addresses for function calls                            |
| **NOP Sled**               | Series of no-operation instructions that slide CPU execution toward attacker's malicious code            |
| **ASLR**                   | Address Space Layout Randomization — randomizes memory addresses to prevent buffer overflow exploitation |
| **Race Condition**         | Vulnerability where outcome depends on timing/order of events failing to execute as intended             |
| **TOC**                    | Time-of-Check — attacker manipulates resource after check but before action                              |
| **TOU**                    | Time-of-Use — attacker manipulates resource between check and use                                        |
| **TOE**                    | Time-of-Evaluation — attacker manipulates inputs during a decision-making window                         |
| **Mutex**                  | Mutually Exclusive flag that restricts code section to one thread at a time                              |
| **Deadlock**               | Circular dependency where processes wait on each other's locks indefinitely                              |
| **WAF**                    | Web Application Firewall — filters malicious requests between client and web server                      |
| **Bluejacking**            | Sending unsolicited Bluetooth messages to nearby devices                                                 |
| **Bluesnarfing**           | Unauthorized data theft via Bluetooth connection                                                         |
| **Bluebugging**            | Full Bluetooth takeover — attacker controls calls, messages, and Internet access                         |
| **Bluesmack**              | Bluetooth denial-of-service attack via data flooding                                                     |
| **Blueborne**              | Airborne Bluetooth attack spreading device-to-device without user interaction                            |
