# 🛡️ CompTIA Security+ SY0-701

## Section 7: Data Protection | Study Summary

> **Domain:** 1.0 · 3.0 · 4.0 · 5.0
> **Objectives:** 1.4 · 3.3 · 4.2 · 4.4 · 5.1

---

## Data Protection

* **Definition:** The process of safeguarding important information from corruption, compromise, or loss. Encompasses practices, technologies, and strategies designed to ensure the **confidentiality, integrity, and availability** of data across its entire lifecycle — from collection to disposal.
  
  > Como el sistema de seguridad completo de un banco: no solo protege la bóveda, sino también el transporte del dinero, el acceso al edificio y la destrucción de documentos al final del día.

---

## Data Classification

* **Definition:** The process of categorizing data based on its **value to the organization** and the **sensitivity of its disclosure**. Determines how much protection, resources, and controls to apply. The **data owner** is responsible for assigning classifications. Overclassification wastes resources; underclassification creates risk.

**Commercial classification levels (low → high):**

| Level            | Description                          | Example                                                         |
| ---------------- | ------------------------------------ | --------------------------------------------------------------- |
| **Public**       | No impact if released                | Website content, published courses                              |
| **Sensitive**    | Minimal impact if disclosed          | Upcoming product plans, financial data                          |
| **Private**      | Internal use only — individual data  | Salaries, employee records, SSNs                                |
| **Confidential** | Serious business impact if disclosed | Trade secrets, source code, IP — NDA required for third parties |
| **Critical**     | No tolerable risk of exposure        | Credit card numbers, cryptographic keys                         |

**Government/Military classification levels (low → high):**

| Level                                | Description                                                             |
| ------------------------------------ | ----------------------------------------------------------------------- |
| **Unclassified**                     | Releasable to the public or via FOIA                                    |
| **Sensitive But Unclassified (SBU)** | No national security risk, but personal impact (e.g., medical records)  |
| **Confidential**                     | Unauthorized disclosure would seriously affect government operations    |
| **Secret**                           | Unauthorized disclosure would cause serious damage to national security |
| **Top Secret**                       | Unauthorized disclosure would cause grave damage to national security   |

> Como las etiquetas en los archivos de un hospital: no todos los documentos necesitan la misma caja fuerte — algunos van en un cajón con llave, otros en una bóveda de máxima seguridad.

---

## Data Ownership Roles

* **Definition:** The set of defined roles responsible for managing the confidentiality, integrity, availability, and privacy of data assets throughout their lifecycle. Key distinction: **IT personnel should be data custodians, not data owners** — data owners should come from the business side (those who understand the context and value of the data).

| Role                           | Responsibility                                                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Data Owner**                 | Senior executive with ultimate responsibility for CIA of a data asset. Decides classification, labeling, and required controls.                                                            |
| **Data Controller**            | Entity that decides the **purpose and method** of data storage, collection, and use. Holds ultimate accountability for privacy breaches — cannot delegate this responsibility.             |
| **Data Processor**             | Group or individual hired by the data controller to collect, store, or analyze data under the controller's direction.                                                                      |
| **Data Steward**               | Ensures data is properly **labeled, classified, and meets quality standards**. Works under the data owner.                                                                                 |
| **Data Custodian**             | Handles the **day-to-day technical management** of systems storing data — enforces access controls, encryption, and backups per data owner requirements. Typically a system administrator. |
| **Data Privacy Officer (DPO)** | Oversees compliance with privacy-related data (PII, PHI, SPI). Accountable during data breaches. Ensures data minimization, sovereignty, retention, and regulatory compliance.             |

> Como los roles en un hospital: el médico jefe (data owner) decide qué se puede ver y quién; el administrador del sistema (custodian) gestiona los servidores donde viven los registros; el oficial de privacidad (DPO) responde ante la ley si hay una fuga.

---

## Data States

* **Definition:** The three phases of the data lifecycle — each with different vulnerabilities and required security controls:

| State               | Description                                                                                | Primary Protection Method                                                        |
| ------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| **Data at Rest**    | Stored in databases, file systems, or storage devices — not actively moving                | Encryption (full disk, partition, file, volume, database, record) + ACLs         |
| **Data in Transit** | Actively moving across a network or the internet — vulnerable to interception              | SSL/TLS, VPNs, IPSec                                                             |
| **Data in Use**     | Being actively created, retrieved, updated, or deleted — must be decrypted to be processed | Application-level encryption, access controls, secure enclaves (e.g., Intel SGX) |

> Como el dinero en tres situaciones: guardado en la bóveda (at rest), siendo transportado en un camión blindado (in transit), o siendo contado por un cajero (in use) — cada situación tiene su propio riesgo y su propia protección.

---

## Encryption for Data at Rest — Types

* **Definition:** Methods to encrypt stored data at different granularity levels:

| Type                           | Scope                                                | Example                                                                     |
| ------------------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------- |
| **Full Disk Encryption (FDE)** | Entire hard drive                                    | BitLocker, FileVault — encrypted when off, decrypted when user is logged in |
| **Partition Encryption**       | Specific disk partition only                         | Encrypting D: drive with sensitive work data while leaving C: unencrypted   |
| **File Encryption**            | Individual files                                     | Encrypting a single document with sensitive content                         |
| **Volume Encryption**          | Selected files or directories                        | Encrypting a folder containing financial records                            |
| **Database Encryption**        | Data within a database (column, row, or table level) | Encrypting the SSN column in a customer database                            |
| **Record Encryption**          | Specific fields within a database record             | Hiding credit card fields from users without proper clearance               |

> Como diferentes tipos de cajas fuertes: puedes blindar el edificio entero, solo una habitación, solo un cajón, o solo un sobre dentro del cajón — depende de cuánto necesites proteger.

---

## SSL/TLS

* **Definition:** **Secure Sockets Layer (SSL)** and its successor **Transport Layer Security (TLS)** are cryptographic protocols that provide **secure, encrypted communication** over a network. Widely used for web browsing (HTTPS), email, and file transfers. Protect **data in transit** by creating an encrypted tunnel between client and server. TLS is the current standard; SSL is deprecated but the term is still commonly used.
  
  > Como un tubo sellado y opaco que conecta dos puntos: nadie puede ver lo que viaja dentro aunque intercepte el tubo.

---

## VPN (Virtual Private Network)

* **Definition:** A technology that creates a **secure, encrypted tunnel** over an untrusted network (typically the internet), ensuring that data sent and received is protected from interception. Commonly used to secure remote access to organizational resources and to protect **data in transit**.
  
  > Como un pasadizo secreto y blindado entre tu casa y la oficina: aunque atraviesas la ciudad pública, nadie puede ver ni tocar lo que llevas dentro del túnel.

---

## IPSec (Internet Protocol Security)

* **Definition:** A protocol suite that secures IP communications by **authenticating and encrypting each IP packet** in a data stream. Operates at the network layer. Commonly used in VPN implementations. Protects **data in transit** at the packet level.
  
  > Como sellar y firmar individualmente cada carta dentro de un paquete enviado por correo: aunque alguien intercepte el paquete, no puede leer ni alterar ninguna carta individual.

---

## Secure Enclave

* **Definition:** A **protected, isolated processing environment** within a system where sensitive data can be decrypted and processed without being exposed to the rest of the operating system or other processes. Used to secure **data in use**. Example: **Intel Software Guard Extensions (SGX)** — encrypts data while it exists in memory so that untrusted processes cannot access it even if they compromise the OS.
  
  > Como una sala sellada y blindada dentro de un edificio: los trabajadores entran, hacen su tarea con documentos secretos, y nadie desde afuera puede ver ni acceder a lo que pasa adentro.

---

## Regulated Data

* **Definition:** Data that is governed by **laws, regulations, or industry standards** — requiring specific security and privacy controls. Organizations handling regulated data must comply with applicable frameworks or face legal penalties.

| Type                                          | Regulation                 | Description                                                                        |
| --------------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------- |
| **PII** (Personally Identifiable Information) | GDPR, various privacy laws | Names, SSNs, addresses, email — anything that identifies an individual             |
| **PHI** (Protected Health Information)        | HIPAA (US)                 | Medical records, treatment history, payment for healthcare linked to an individual |
| **Financial Data**                            | PCI DSS                    | Credit card numbers, bank account details, payment transactions                    |

> Como los medicamentos controlados en una farmacia: no puedes manejarlos sin cumplir regulaciones específicas, y si los manejas mal, hay consecuencias legales.

---

## Trade Secrets

* **Definition:** Confidential business information that provides a **competitive advantage** — manufacturing processes, proprietary formulas, marketing strategies, customer lists, or source code. Protected by law; unauthorized disclosure can result in severe legal penalties.
  
  > Como la receta secreta de una empresa de refrescos: el valor no está en el producto terminado sino en el proceso único que nadie más conoce.

---

## Intellectual Property (IP)

* **Definition:** **Creations of the mind** protected by law through patents, copyrights, and trademarks — inventions, literary works, artistic works, designs, symbols, and software. Unauthorized use constitutes infringement and can lead to legal action.
  
  > Como el guión original de una película: el papel es tuyo, la idea es tuya, y la ley protege que nadie más la use sin tu permiso.

---

## Legal Information

* **Definition:** Data related to **legal proceedings, contracts, or regulatory compliance**. Requires high levels of protection to maintain client confidentiality and comply with legal professional privilege. Examples include contracts, litigation documents, and compliance records.
  
  > Como los expedientes de un abogado: no son tuyos para compartir — están protegidos por el deber de confidencialidad profesional y por la ley.

---

## Human-Readable vs Non-Human Readable Data

* **Definition:** Two categories based on whether data requires a machine to interpret:
  
  - **Human-readable data:** Information that can be understood directly by humans without software — text documents, spreadsheets, printed reports.
  
  - **Non-human readable data:** Information that requires a machine or software to interpret — binary code, machine language, compiled executables. Still requires protection even though it is not immediately legible to people, as it can contain sensitive logic or embedded data.
    
    > Como la diferencia entre una carta escrita en papel (la lees directamente) y un disco de computadora (necesitas una máquina para saber qué hay adentro) — ambos pueden contener secretos que deben protegerse.

---

## Data Sovereignty

* **Definition:** The principle that **digital data is subject to the laws of the country where it is collected or processed**. Organizations must manage, store, and process data according to the laws of that specific jurisdiction. Critical consideration in cloud computing where data centers span multiple countries.

* Key example: **GDPR** protects EU citizens' data while they are within EU/EEA borders. Countries like China and Russia require data to be stored within their national borders.
  
  > Como las leyes de un aeropuerto: aunque estés de paso, mientras estés en ese territorio, las leyes locales aplican a lo que llevas contigo.

---

## GDPR (General Data Protection Regulation)

* **Definition:** A comprehensive EU privacy regulation that mandates strict data protection requirements for any organization handling the **personal data of EU/EEA citizens**, regardless of where the organization is located. Grants individuals strong rights over their data (access, deletion, portability). Non-compliance can result in heavy fines. GDPR protections apply only while the data subject is within EU/EEA borders.
  
  > Como las leyes laborales de un país: si contratas a alguien de ese país, tienes que cumplir sus leyes laborales aunque tu empresa esté en otro lado.

* * *

## HIPAA (Health Insurance Portability and Accountability Act)

* **Definition:** A US federal law that mandates the protection of **Protected Health Information (PHI)** — any health status, treatment, or payment information linked to an identifiable individual. Requires covered entities (healthcare providers, insurers) and their business associates to implement administrative, physical, and technical safeguards.
  
  > Como el secreto médico en formato legal: no solo es un principio ético, es una obligación legal con consecuencias reales si lo incumples.

* * *

## PCI DSS (Payment Card Industry Data Security Standard)

* **Definition:** An industry security standard that applies to any organization that **stores, processes, or transmits credit card data**. Mandates specific controls including encryption, access restrictions, network segmentation, and regular security testing to protect cardholder data. Compliance is required by card brands (Visa, Mastercard, etc.).
  
  > Como las normas de seguridad de un servicio de transporte de valores: si manejas dinero de otras personas, debes cumplir estándares muy específicos para protegerlo.
  
  ---
  
  ## Geofencing (Geographic Restrictions)

* **Definition:** Virtual boundaries set up to **restrict data access based on geographic location**. Helps organizations comply with data sovereignty laws and block access attempts from high-risk regions. If all employees are in the Americas, login attempts from Asia or Africa can be automatically blocked.
  
  > Como poner una cerca invisible alrededor del mapa: si tu solicitud de acceso viene de fuera de esa cerca, el sistema la rechaza automáticamente.

---

## Data Securing Methods

* **Definition:** A set of complementary techniques to protect data from unauthorized access or disclosure:

| Method                      | How It Works                                                                       | Key Characteristic                                                               |
| --------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Encryption**              | Converts plaintext to ciphertext using an algorithm + key                          | Reversible with the correct decryption key                                       |
| **Hashing**                 | Converts data to a fixed-size hash value                                           | **One-way — cannot be reversed**; used for integrity checks and password storage |
| **Masking**                 | Replaces data with placeholders (e.g., XXXX-XXXX-XXXX-1234)                        | **One-way**; de-identifies data while preserving format                          |
| **Tokenization**            | Replaces sensitive data with non-sensitive tokens; original data stored separately | Token is useless without the vault mapping — common in payment processing        |
| **Obfuscation**             | Makes data unclear or unintelligible through various techniques                    | Reduces readability for unauthorized users                                       |
| **Segmentation**            | Divides network into isolated segments with separate controls                      | Limits lateral movement if one segment is compromised                            |
| **Permission Restrictions** | Defines who can access what data and what actions they can take (ACLs, RBAC)       | Principle of least privilege applied to data                                     |

> Como diferentes formas de proteger un documento secreto: puedes cifrarlo, destruirlo, tacharlo, reemplazarlo con una copia falsa, dividirlo en partes, o simplemente controlar quién tiene llave para verlo.

---

## Tokenization

* **Definition:** A data protection technique that **replaces sensitive data with a non-sensitive placeholder (token)**. The original sensitive data is stored in a secure, separate token vault. The token is meaningless without access to the vault. Widely used in **payment processing** to protect credit card numbers during transactions.
  
  > Como cambiar los billetes reales por fichas de casino: dentro del casino (sistema), las fichas funcionan igual; pero si alguien te las roba fuera, son inútiles porque no son dinero real.

---

## Obfuscation

* **Definition:** A data protection technique that makes data **unclear, unintelligible, or difficult to understand** for unauthorized users. Can combine multiple methods — encryption, masking, pseudonymization, code scrambling. Unlike encryption, obfuscation does not always rely on a key; the goal is simply to reduce readability and complicate unauthorized analysis or reverse engineering.
  
  > Como escribir instrucciones en un idioma mezclado con símbolos aleatorios: el resultado sigue siendo funcional para quien sabe leerlo, pero incomprensible para cualquier intruso.

---

## Segmentation

* **Definition:** The practice of **dividing a network into separate, isolated segments**, each with its own security controls and access policies. If an attacker compromises one segment, they cannot freely move laterally to other parts of the network. Reduces the blast radius of a breach. Implemented through VLANs, firewalls, and access control policies.
  
  > Como dividir un barco en compartimentos estancos: si uno se inunda, los otros permanecen secos — el daño queda contenido.

---

## Access Control List (ACL) and RBAC

* **Definition:** Two mechanisms for implementing permission restrictions on data:
  
  - **ACL (Access Control List):** A list of rules attached to a resource that specifies which users or systems are granted or denied access and what operations they can perform.
  - **RBAC (Role-Based Access Control):** Access permissions are assigned based on a user's **role** within the organization rather than individually. Users inherit permissions based on their job function (e.g., accountant, system admin, HR).

* Both enforce the **principle of least privilege** — users only access what they need for their specific role.
  
  > Como las llaves de un edificio de oficinas: no todo el mundo tiene llave de todas las puertas — solo de las que corresponden a su rol en la empresa.

---

## Data Retention

* **Definition:** The organizational and legal policies that define **how long data must be kept** before it can be destroyed. Retention periods vary by data type and jurisdiction — some regulations mandate minimum retention (e.g., financial records under SOX, health records under HIPAA). Data retained beyond its useful period unnecessarily increases risk and storage costs. Part of the broader **data lifecycle management** strategy.
  
  > Como la fecha de vencimiento en los alimentos: guardar datos más tiempo del necesario no solo es inútil, puede ser peligroso si caen en manos equivocadas.

---

## Data Loss Prevention (DLP)

* **Definition:** A strategy and set of tools designed to **detect and prevent sensitive or critical data from leaving the organization** — whether intentionally (insider threat, data theft) or unintentionally (accidental disclosure). Monitors data at rest, in transit, and in use. Can operate in **detection mode** (log and alert) or **prevention mode** (block the action).

**Four DLP deployment types:**

| Type                | Deployment                                   | Function                                                                           |
| ------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Endpoint DLP**    | Software installed on workstations/laptops   | Monitors data in use; blocks or alerts on unauthorized file transfers              |
| **Network DLP**     | Hardware/software at network perimeter       | Monitors all data leaving the network; prevents unauthorized exfiltration          |
| **Storage DLP**     | Software on servers in data centers          | Inspects data at rest; detects unauthorized access (e.g., large downloads at 2 AM) |
| **Cloud-based DLP** | SaaS solution integrated with cloud services | Protects data stored in cloud platforms (e.g., Google Drive DLP, Office 365 DLP)   |

> Como los controles de seguridad en el aeropuerto: no solo revisan lo que entra (firewall) — también revisan lo que sale, asegurándose de que nadie se lleve algo que no debería.

---

## DLP Configuration — Key Concepts

* **Definition:** When configuring a DLP solution, organizations define **rules, scopes, conditions, and actions**:

| Configuration Element         | Description                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Scope**                     | Who the rule applies to — all users, specific departments, or groups                                  |
| **Application**               | Which platform is monitored — email, chat, cloud storage, endpoints                                   |
| **Condition / Content Match** | What triggers the rule — predefined data types (SSN, credit card, PHI), regex patterns, keyword lists |
| **Confidence Threshold**      | How certain the system must be before triggering — High/Very High reduces false positives             |
| **Action**                    | What happens when triggered — Block, Warn, Quarantine, Audit/Log, Encrypt                             |
| **Detection Mode**            | Logs and alerts — does not block the action                                                           |
| **Prevention Mode**           | Actively blocks the action from occurring                                                             |

> Como programar una alarma inteligente: defines qué buscar, qué tan seguro necesitas estar antes de sonar, y qué hacer cuando suena — ¿avisar?, ¿bloquear?, ¿registrar?

---

## Data Lifecycle Management

* **Definition:** The organizational policies that govern **how data is collected, stored, retained, and destroyed**. Organizations must define retention periods based on business needs and legal requirements. Data should not be stored indefinitely — proper disposal reduces attack surface and compliance risk.

* Key consideration: Legal regulations (HIPAA, GDPR, PCI DSS) may mandate **minimum retention periods** for specific data types.
  
  > Como la política de archivos de una oficina: no guardas todos los documentos para siempre — defines cuánto tiempo se necesitan, y luego los destruyes de forma segura.

---

## OCR in DLP (Optical Character Recognition)

* **Definition:** A technology integrated into some DLP solutions that **scans images and photographs** for text content — enabling the DLP system to detect sensitive data embedded in images (e.g., a photo of a Social Security card or a screenshot of a password). Extends DLP coverage beyond text-only documents.
  
  > Como un guardia de seguridad que no solo revisa documentos de texto, sino que también lee las fotografías para asegurarse de que no haya información sensible oculta en ellas.

---

*CompTIA Security+ SY0-701 · Section 7: Data Protection · Dion Training*
