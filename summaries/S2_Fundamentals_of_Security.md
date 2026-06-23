# 🛡️ CompTIA Security+ SY0-701
## Section 2: Fundamentals of Security | Study Summary
> **Domain:** 1.0 General Security Concepts · 2.0 Threats, Vulnerabilities & Mitigations
> **Objectives:** 1.1 · 1.2

---

## Security vs. Usability

* **Definition:** Permanent tension between the level of security applied to a system and the convenience experienced by the user. Increasing security reduces usability; increasing convenience loosens security posture. The goal is finding the operational sweet spot between both.
> Como el candado de tu casa: te protege, pero también te obliga a sacar la llave cada vez que entras.

---

## Information Security

* **Definition:** The practice of protecting **data and information** from unauthorized access, unlawful modification, disruption, disclosure, corruption, and destruction. Focuses on the content itself, not the systems storing it.
> Proteger lo que dice el documento, no la caja donde está guardado.

---

## Information System Security

* **Definition:** The practice of protecting the **systems** that hold and process critical data — computers, servers, network devices, smartphones. Focuses on the containers, not the content inside them.
> Proteger la caja fuerte, no el documento adentro.

---

## CIA Triad

* **Definition:** The three foundational pillars of information security: **Confidentiality** (information accessible only to authorized individuals), **Integrity** (data remains accurate and unaltered unless modified by an authorized user), and **Availability** (systems and resources are accessible and functional when needed). Extended in modern practice to **C.I.A.N.A** by adding Non-repudiation and Authentication.
> El triángulo que sostiene toda decisión de seguridad: que solo tú puedas verlo, que nadie lo altere, y que siempre esté disponible cuando lo necesites.

---

## Confidentiality

* **Definition:** Ensures that private or sensitive information is not disclosed to unauthorized individuals, entities, or processes. Implemented through five methods: **encryption** (primary tool), **access controls**, **data masking**, **physical security measures**, and **training & awareness**. Critical for protecting personal privacy, maintaining business advantage, and achieving regulatory compliance (PII, PHI, financial data).
> Lo que le dices a tu médico no debería escucharlo el de la fila de atrás.

---

## Encryption

* **Definition:** Process of converting plaintext data into unreadable ciphertext to prevent unauthorized access. Data can only be decrypted by a party holding the correct decryption key. Primary mechanism for enforcing confidentiality.
> Como enviar una carta dentro de una caja con candado: solo quien tenga la llave puede abrirla y leer el contenido.

---

## Data Masking

* **Definition:** Method of obscuring specific data within a database to make it inaccessible to unauthorized users while preserving its usability for authorized ones. Common example: displaying only the last 4 digits of a credit card number to customer support agents.
> Como tapar con corrector los primeros dígitos de un número de tarjeta antes de mostrarle el recibo a alguien.

---

## Integrity

* **Definition:** Ensures that data remains accurate, consistent, and unaltered throughout its entire lifecycle, unless intentionally modified by an authorized individual. Implemented through five methods: **hashing** (primary tool), **digital signatures**, **checksums**, **access controls**, and **regular audits**.
> Si mandas un contrato firmado, el receptor debe recibirlo exactamente como lo mandaste, sin que nadie haya cambiado ni una coma.

---

## Hashing

* **Definition:** Process of converting data into a fixed-size value called a **hash digest**. Any modification to the original data — no matter how small — produces a completely different hash, immediately signaling tampering. Functions as a digital fingerprint for data integrity verification. **Key association: Integrity = Hashing.**
> Como la huella dactilar de un archivo: cambia un solo píxel y la huella ya no coincide.

---

## Checksum

* **Definition:** Integrity verification method used during data transmission. The sender computes a checksum for the data and sends it alongside. The receiver recomputes the checksum on arrival and compares both values. Matching values confirm integrity; mismatched values indicate alteration or corruption.
> Como el sello en un paquete sellado al vacío: si el sello está roto al abrirlo, sabes que alguien lo tocó antes.

---

## Availability

* **Definition:** Ensures that information, systems, and resources are accessible and operational when needed by authorized users. Measured in **"nines" of uptime** (e.g., five nines = 99.999% = max 5.26 minutes of downtime per year). Achieved primarily through **redundancy**. **Key association: Availability = Redundancy.**
> De nada sirve tener el mejor banco del mundo si el cajero siempre está fuera de servicio.

---

## Redundancy

* **Definition:** Duplication of critical components or functions to enhance system reliability and ensure uninterrupted service. Four types: **server redundancy** (load balancing/failover), **data redundancy** (multiple storage locations, RAID, cloud backups), **network redundancy** (alternate routing paths), and **power redundancy** (generators, UPS systems).
> El neumático de repuesto del carro: no lo usas todos los días, pero el día que lo necesitas, marca la diferencia.

---

## Non-repudiation

* **Definition:** Security measure ensuring that parties involved in a communication or transaction cannot deny their participation or the authenticity of their actions. Primary implementation tool: **digital signatures**. Provides three guarantees: authenticity of transactions, integrity of communications, and user accountability.
> Como el acuse de recibo firmado de un paquete certificado: una vez que firmas, no puedes decir que no llegó.

---

## Digital Signature

* **Definition:** Cryptographic mechanism that combines hashing and asymmetric encryption to guarantee both authenticity and integrity. Process: (1) hash the message → (2) encrypt the hash digest with the sender's **private key** → result is the digital signature. Any alteration to the original message invalidates the signature. Only the sender holds their private key, making the signature impossible to forge.
> El equivalente digital del sello de cera de un rey medieval: solo él tiene ese anillo, nadie más puede replicar ese sello.

---

## Authentication (AAA)

* **Definition:** Process of verifying that a user or entity is who they claim to be. First component of the AAA model. Implemented through five factors:

| Factor | Also Known As | Example |
|---|---|---|
| Something you **know** | Knowledge factor | Password, PIN |
| Something you **have** | Possession factor | Badge, OTP via smartphone |
| Something you **are** | Inherence factor | Fingerprint, facial recognition |
| Something you **do** | Action factor | Handwriting, gait analysis |
| Somewhere you **are** | Location factor | Geofencing, country-based access |

> El guardia de seguridad que verifica tu identificación antes de dejarte entrar al edificio.

---

## Multi-Factor Authentication (MFA / 2FA)

* **Definition:** Authentication system requiring two or more independent verification factors. Using exactly two factors = **2FA**. Using two or more = **MFA**. Ensures that compromise of a single factor (e.g., stolen password) is not sufficient to gain access, since the attacker still lacks the additional required factor.
> Para retirar dinero del banco necesitas tu tarjeta física **y** tu PIN: si alguien roba solo uno de los dos, no puede hacer nada.

---

## Authorization (AAA)

* **Definition:** Determines what actions or resources an already-authenticated user is permitted to access or perform. Second component of the AAA model. Mechanisms include role-based, rule-based, and attribute-based controls. Answers the question: *"Now that I know who you are — here is what you are allowed to do."*
> Entrar al edificio (autenticación) no significa que puedas entrar a todas las oficinas (autorización).

---

## Accounting (AAA)

* **Definition:** Monitoring and logging of all user actions within a system during their digital interactions. Third component of the AAA model. Provides five key benefits: **audit trail** (chronological activity record), **regulatory compliance**, **forensic analysis**, **resource optimization**, and **user accountability**. Implemented via Syslog servers, network analyzers (Wireshark), and **SIEM** systems.
> El extracto bancario detallado: cada transacción, fecha, monto y lugar — sin espacio para dudas sobre qué pasó y cuándo.

---

## SIEM (Security Information and Event Management)

* **Definition:** Platform that provides real-time analysis of security alerts generated by hardware and software across an organization's infrastructure. Core tool for the Accounting function — aggregates, correlates, and surfaces security events for investigation.
> La torre de control del aeropuerto: recibe señales de todos los aviones (sistemas) al mismo tiempo y alerta cuando algo no cuadra.

---

## Threat

* **Definition:** Any event, actor, or condition that could cause harm, loss, damage, or compromise to IT systems. Threats originate from **external, generally uncontrollable factors**: natural disasters, cyberattacks, data breaches, insider misuse. Risk management options: mitigate, transfer, avoid, or accept.
> La tormenta que puede destruir tu casa: no puedes evitar que ocurra, solo puedes prepararte para resistirla.

---

## Vulnerability

* **Definition:** Any weakness in the design or implementation of a system that could be exploited by a threat. Vulnerabilities come from **internal, controllable factors**: software bugs, misconfigurations, missing patches, lack of physical security. Unlike threats, vulnerabilities can be directly managed by the organization.
> La grieta en la pared de tu casa: tú la creaste, tú puedes repararla antes de que llegue la tormenta.

---

## Risk

* **Definition:** The intersection of a threat and a vulnerability. **No vulnerability → no risk. No threat → no risk.** Risk exists only when both are present simultaneously. Managed through four responses: **mitigate** (reduce impact), **transfer** (e.g., insurance), **avoid** (eliminate the activity), or **accept** (acknowledge and tolerate it).
> El riesgo de un robo existe solo si alguien quiere entrar a tu casa (amenaza) **y** dejaste la puerta sin llave (vulnerabilidad).

---

## Security Control Categories

* **Definition:** Classification of security controls by their nature into four broad categories:

| Category | Nature | Examples |
|---|---|---|
| **Technical** | Hardware/software mechanisms | Firewall, antivirus, IDS, encryption |
| **Managerial** | Strategic planning and governance (also called Administrative) | Risk assessments, security policies, incident response plans |
| **Operational** | Day-to-day procedures governed by people | Password rotation, backups, awareness training |
| **Physical** | Tangible real-world barriers | Cameras, biometric locks, guards, fences |

> Como un castillo medieval: las murallas son técnicas, el general que planea la defensa es gerencial, los guardias en patrulla son operativos, y el foso es físico.

---

## Security Control Types

* **Definition:** Classification of security controls by their **functional role** against a threat. Six types:

| Type | Function | Example |
|---|---|---|
| **Preventative** | Blocks the threat before it occurs | Firewall |
| **Deterrent** | Discourages attackers without physically stopping them | Warning signs, login banners |
| **Detective** | Detects and alerts on malicious activity as it occurs | IDS, security cameras |
| **Corrective** | Mitigates damage and restores systems after an incident | Antivirus quarantine/removal |
| **Compensating** | Alternative control when the ideal control is not feasible | VPN added on top of WPA2 when WPA3 is unsupported |
| **Directive** | Guides or mandates behavior through policy or documentation | Acceptable Use Policy (AUP) |

> ⚠️ A single tool can fulfill multiple types simultaneously — an antivirus detects (detective) and removes (corrective) malware.

---

## Zero Trust

* **Definition:** Security model operating on the principle **"Trust nothing, verify everything."** No user, device, or system is trusted by default regardless of network location. Every access request — internal or external — requires continuous verification. Driven by the rise of cloud, remote work, mobile, and deperimeterization.
> En lugar de asumir que todos los que están dentro del edificio son de confianza, verificas la identidad de cada persona cada vez que quiere abrir cualquier puerta.

---

## Zero Trust — Control Plane

* **Definition:** The overarching framework responsible for defining, managing, and enforcing access policies. Contains four key elements: **Adaptive Identity** (real-time validation based on behavior, device, and location), **Threat Scope Reduction** (minimum necessary access to reduce attack surface), **Policy-Driven Access Control** (role-based access policies), and **Secured Zones** (isolated environments for sensitive data). Operated by the **Policy Engine** (access decision-making) and the **Policy Administrator** (policy management and enforcement).
> El departamento de seguridad del edificio que establece quién puede entrar a cada zona y bajo qué condiciones.

---

## Zero Trust — Data Plane

* **Definition:** The execution layer of Zero Trust that carries out the decisions made by the Control Plane. Contains two components: **Subject/System** (the entity requesting access — user, workstation, or application) and the **Policy Enforcement Point** (where the grant or deny decision is actually executed, acting as the final gatekeeper).
> El guardia en la puerta que ejecuta las órdenes del departamento de seguridad: deja pasar o bloquea según lo que le indican.

---

## Gap Analysis

* **Definition:** Evaluation process that compares an organization's current security posture to its desired state in order to identify gaps and build a remediation plan. Two types: **Technical Gap Analysis** (infrastructure and technology capabilities) and **Business Gap Analysis** (processes and operations). Output is typically documented in a **Plan of Action and Milestones (POA&M)**.
> Como revisar la diferencia entre donde estás parado en el mapa y donde quieres llegar: primero debes saber los dos puntos para poder trazar la ruta.

---

## Plan of Action and Milestones (POA&M)

* **Definition:** Structured document produced from a gap analysis or vulnerability assessment that outlines: identified vulnerabilities, specific remediation actions, assigned resources, and completion timelines. Used to prioritize fixes and track progress from current state to desired security state.
> La lista de tareas priorizada del técnico que sabe exactamente qué arreglar, en qué orden y para cuándo.

---

*CompTIA Security+ SY0-701 · Section 2: Fundamentals of Security · Dion Training*
