# 🛡️ CompTIA Security+ SY0-701
## Section 3: Threat Actors | Study Summary
> **Domain:** 1.0 General Security Concepts · 2.0 Threats, Vulnerabilities & Mitigations
> **Objectives:** 1.2 · 2.1 · 2.2

---

## Threat Actor

* **Definition:** An individual or entity responsible for incidents that impact security and data protection. Threat actors initiate attacks to steal, alter, or destroy data. They range from lone unskilled individuals to government-sponsored organizations.
> Como en el mundo del crimen físico: desde el ladrón de poca monta hasta el cartel internacional — todos son amenazas, pero con recursos y objetivos muy distintos.

---

## Threat Actor Motivations

* **Definition:** The underlying driving forces that push a threat actor to carry out an attack. Distinct from **intent** (the specific goal of the attack). Key motivations include:

| Motivation | Description |
|---|---|
| **Data Exfiltration** | Unauthorized transfer of sensitive data (IP, PII, trade secrets) for resale, identity theft, or competitive advantage |
| **Financial Gain** | Direct profit via ransomware, banking Trojans, fraud, or cryptocurrency theft |
| **Blackmail** | Obtaining compromising information and demanding payment (ransomware, doxxing, sextortion) |
| **Service Disruption** | Overwhelming systems via DDoS to cause chaos, make political statements, or demand ransom |
| **Philosophical / Political Beliefs** | Hacktivism — using attacks to promote ideological agendas or protest perceived injustice |
| **Ethical Reasons** | Authorized penetration testers and bug bounty hunters improving security |
| **Revenge** | Disgruntled or former employees targeting the organization that wronged them |
| **Disruption / Chaos** | Attacking for the thrill of it or to challenge skills, with no specific political or financial goal |
| **Espionage** | Gathering classified or sensitive intelligence — common among nation-state actors and rivals |
| **War** | Cyber operations used to disrupt infrastructure, compromise national security, or cause economic damage |

> Como en cualquier crimen: entender el "por qué" del atacante es lo que permite predecir el "cómo" del ataque.

---

## Threat Actor Attributes

* **Definition:** The specific characteristics that define and differentiate threat actors from one another. Three key attributes:

| Attribute | Description |
|---|---|
| **Internal vs. External** | Internal = inside the organization with legitimate access; External = outside with no authorized access |
| **Resources & Funding** | Ranges from a lone individual with a personal laptop to nation-states with massive budgets and teams |
| **Sophistication & Capability** | Ranges from low (script kiddies using pre-made tools) to high (APTs using custom malware and zero-days) |

> Como clasificar a los rivales antes de un partido: saber de dónde vienen, cuánto presupuesto tienen, y qué tan buenos son cambia completamente la estrategia de defensa.

---

## Unskilled Attacker (Script Kiddie)

* **Definition:** An individual with limited technical knowledge who relies on pre-made scripts, tools, and exploits developed by others — without understanding the underlying principles. Motivated primarily by recognition, thrill, or curiosity rather than financial or ideological goals. Opportunistic rather than targeted. Low sophistication, low resources, but dangerous in large numbers.
> Como alguien que no sabe cocinar pero puede calentar comida en el microondas: no creó la herramienta, pero sí puede hacer daño con ella.

---

## Hacktivist

* **Definition:** An individual or group that uses hacking techniques to promote a political, social, or environmental cause (**hacktivism**). Motivated by ideological beliefs, not financial gain. Common techniques include **website defacement**, **DDoS attacks**, **doxxing**, and **data leaks**. Can range from low to high technical sophistication. Notable groups: **Anonymous**, **LulzSec**.
> Como un manifestante que, en lugar de pancartas, usa código: el objetivo no es robar sino hacer ruido y obligar a que su causa sea escuchada.

---

## Doxxing

* **Definition:** The public release of private personal information about an individual or organization (name, address, phone number, email) with the intent to expose them or incite real-world action against them. Frequently used as a hacktivist technique.
> Como colgar el número de teléfono personal de alguien en una pared pública esperando que otros lo llamen para acosarlo.

---

## Organized Crime (Cybercrime)

* **Definition:** Well-structured criminal groups or syndicates that conduct cyber attacks primarily for **financial gain**. Operate similarly to traditional organized crime but in the digital space — with defined roles, advanced tools (custom malware, ransomware, sophisticated phishing), and global reach. High technical capability and high adaptability. Notable groups: **FIN7**, **Carbanak**. May act as hired mercenaries for governments.
> Como la mafia tradicional que migró al mundo digital: misma estructura jerárquica, mismos objetivos financieros, pero ahora sus operaciones no tienen fronteras físicas.

---

## Nation-State Actor

* **Definition:** Groups or individuals sponsored by a government to conduct cyber operations against other nations, organizations, or individuals. Highest level of sophistication, resources, and funding. Motivated by **long-term geopolitical objectives**: intelligence gathering, critical infrastructure disruption, political influence, and cyber warfare — not typically financial (exception: North Korea). Often associated with **Advanced Persistent Threats (APTs)**. Notable attacks: **Stuxnet** (US/Israel vs. Iran), **2016 US election interference** (Russia).
> Como la inteligencia militar de un país trasladada al mundo digital: tienen el presupuesto de un gobierno, el talento de un ejército, y la paciencia para esperar años antes de atacar.

---

## False Flag Attack

* **Definition:** A cyber attack deliberately orchestrated to appear as if it originated from a different source or threat actor, with the intent to mislead investigators and misattribute the attack. Commonly used by nation-state actors to maintain plausible deniability. Example: Russian actors mimicking North Korean TTPs during the 2018 Winter Olympics malware attack.
> Como cometer un crimen disfrazado con la ropa de otra persona, dejando evidencia que apunte hacia ella en lugar de hacia ti.

---

## Advanced Persistent Threat (APT)

* **Definition:** A prolonged and targeted cyberattack in which an intruder gains unauthorized access to a network and remains **undetected for an extended period** — monitoring, stealing data, or maintaining access rather than causing immediate damage. Historically synonymous with nation-state actors, but now also applied to sophisticated organized cybercrime groups. Characterized by stealth, patience, and high capability.
> Como un intruso que entra a tu casa, vive en el ático durante meses sin que lo notes, y va copiando documentos importantes poco a poco.

---

## Insider Threat

* **Definition:** A security threat originating from within the organization — current or former employees, contractors, or business associates with legitimate access who misuse it. Dangerous due to their **intimate knowledge of infrastructure, systems, and security procedures**. Can be intentional (revenge, financial gain, espionage) or unintentional (negligence, lack of awareness). Example: **Edward Snowden** (NSA, 2013), **Twitter hack** (2020).
* Mitigation: Zero Trust architecture, robust access controls, regular audits, security awareness training.
> Como el empleado del banco que ya conoce las cámaras, las cajas fuertes y los horarios de los guardias: no necesita planear un asalto desde cero porque ya está adentro.

---

## Shadow IT

* **Definition:** The use of IT systems, devices, software, applications, and services **without explicit organizational approval** — managed outside the IT department's knowledge. Driven by the desire for convenience and productivity when official processes are too slow or restrictive. Includes personal devices (BYOD), unapproved cloud storage (Dropbox, Google Drive), and unauthorized software. Poses risks of data breaches, regulatory non-compliance, and unmanageable attack surfaces.
> Como conectar tu propio router en la oficina porque el Wi-Fi corporativo es lento: soluciona tu problema inmediato pero abre una puerta trasera que nadie en IT sabe que existe.

---

## BYOD (Bring Your Own Device)

* **Definition:** Practice of employees using personal devices (smartphones, tablets, laptops) to access corporate systems and data. A major contributor to Shadow IT. Personal devices typically lack the same security controls as corporate-managed devices, expanding the attack surface.
> Como dejar que cada empleado entre al almacén con su propia llave hecha en una copia no autorizada: conveniente, pero sin control de quién tiene acceso a qué.

---

## Threat Vector

* **Definition:** The means or **pathway** through which an attacker gains unauthorized access to deliver a malicious payload or carry out an attack. Represents the **"how"** of the attack. Key threat vectors:

| Vector | Description |
|---|---|
| **Messages** | Phishing via email, SMS, or instant messaging — malicious links or attachments |
| **Images** | Malicious code embedded in image files (steganography); executed when the image is loaded (example: Stegano attack, 2017) |
| **Files** | Malware disguised as legitimate documents, software, or pirated content |
| **Voice Calls (Vishing)** | Impersonating trusted entities (banks, IRS) via phone to extract sensitive information |
| **Removable Devices** | USB drives used for baiting — infected devices left in public spaces for targets to find and connect |
| **Unsecured Networks** | Unprotected Wi-Fi, wired, or Bluetooth networks exploited to intercept data or gain unauthorized access |

> El vector es el camino que elige el ladrón para entrar: por la ventana, por la puerta, por el techo — cada uno requiere una defensa diferente.

---

## Attack Surface

* **Definition:** The **sum of all potential entry points and vulnerabilities** across a system or network where an unauthorized user could attempt to enter or extract data. Represents the **"where"** of the attack. Reduced by restricting access, removing unnecessary software, and disabling unused protocols.
> Como el perímetro total de un edificio: cada puerta, ventana y conducto de ventilación es parte de la superficie de ataque — cuantas menos aberturas, más fácil de defender.

---

## Evil Twin

* **Definition:** A rogue wireless access point set up by an attacker that mimics a legitimate Wi-Fi network. When users connect, the attacker can intercept, capture, and modify their traffic.
> Como una copia falsa de la entrada de tu banco justo al lado de la real: si entras a la falsa, el atacante ve y registra todo lo que haces.

---

## BlueBorne

* **Definition:** A set of vulnerabilities in Bluetooth technology that allows an attacker to take over devices, spread malware, or execute on-path attacks — **without any user interaction or pairing required**.
> Como un ladrón que puede abrir tu cerradura sin tocarla ni que tú lo invites: solo necesita estar cerca.

---

## BlueSmack

* **Definition:** A Denial of Service (DoS) attack targeting Bluetooth-enabled devices by sending specially crafted L2CAP (Logical Link Control and Adaptation Protocol) packets that exhaust the device's resources, causing it to crash or become inoperable.
> Como inundar de llamadas el teléfono de alguien hasta que ya no pueda recibir ninguna legítima.

---

## TTPs (Tactics, Techniques, and Procedures)

* **Definition:** The specific methods, behaviors, and patterns of activity associated with a particular threat actor or group. **Tactics** = high-level goals; **Techniques** = general methods used; **Procedures** = specific step-by-step implementations. Understanding an adversary's TTPs allows defenders to detect, anticipate, and counter their attacks.
> Como el estilo de juego de un equipo rival: si conoces sus jugadas favoritas, puedes preparar tu defensa antes de que el partido comience.

---

## Honeypot

* **Definition:** A decoy system or server configured to appear as a real, vulnerable target to attract attackers. Its purpose is **not to block attacks** but to **log, monitor, and study** attacker behavior, methods, and TTPs. Should be placed in an isolated network segment (screened subnet) accessible from the internet. Can also detect insider threats.
> Como una caja fuerte falsa llena de billetes falsos: el ladrón pierde tiempo y energía abriéndola mientras tú lo observas y aprendes cómo opera.

---

## Honeynet

* **Definition:** A network of multiple honeypots designed to simulate an entire environment — including servers, routers, and switches. Used by large organizations and research institutions to study complex, multi-stage attacks and reveal patterns in attack vectors across a broader simulated infrastructure.
> Como construir un vecindario falso completo para estudiar cómo se mueven los criminales entre edificios, no solo en uno.

---

## Honeyfile

* **Definition:** A decoy file placed within a system that appears to contain sensitive or valuable data. Contains fake data embedded with **unique identifiers, hidden metadata, or digital watermarks**. When accessed, it triggers an alert and may enumerate the attacker's own network. Can be any file type: documents, spreadsheets, images, executables.
> Como dejar un sobre marcado con tinta invisible que dice "Fórmula Secreta": si alguien lo abre, sabes que hubo una intrusión y puedes rastrear al culpable.

---

## Honeytoken

* **Definition:** A fake piece of data or resource — such as a fabricated user account, bogus URL, or dummy database record — with **no legitimate use or value**. Any interaction with it signals a likely security breach. Particularly effective for detecting insider threats. Examples: a fake "Admin" account, a fake API key, a bogus database entry.
> Como esconder un billete marcado en tu billetera: si desaparece, sabes exactamente quién lo tomó y cuándo.

---

## Disruption Technologies (Additional)

* **Definition:** Strategies used alongside deception technologies to hinder attacker reconnaissance and operations:

| Technique | Purpose |
|---|---|
| **Bogus DNS entries** | Mislead attackers into accessing non-existent or trap domains |
| **Decoy directories** | Fake folders/files that trigger alerts when accessed |
| **Dynamic page generation** | Ever-changing web content to confuse automated scrapers and bots |
| **Port triggering** | Keeps ports closed until a specific traffic pattern is detected, hiding services from scanners |
| **Fake telemetry data** | Returns false OS/system information during a detected network scan |

> Como un escenario de cine construido para confundir al enemigo: todo parece real, pero ninguno de los recursos es genuino.

---

*CompTIA Security+ SY0-701 · Section 3: Threat Actors · Dion Training*
