# 🛡️ CompTIA Security+ SY0-701 — Section 13

## Audits and Assessments | Study Summary

> **Keywords:** Audit · Assessment · Internal · External · Penetration Testing · Reconnaissance · Attestation · Compliance · Red Team · Blue Team · Purple Team · Metasploit · Nmap

---

## 1. Audits

* **Definition:** A systematic evaluation of an organization's information systems, applications, and security controls to ascertain their efficiency and effectiveness, typically conducted by an independent entity.

> *Es como una inspección oficial del departamento de salud a un restaurante: alguien externo llega con una lista de verificación y evalúa si todo está cumpliendo las normas, sin importar lo que el dueño diga sobre su propio negocio.*

Audits can be **internal** or **external** depending on who conducts them. They are crucial for identifying gaps in security policies, procedures, and controls, and for ensuring compliance with regulatory standards such as:

| Regulation | Full Name | Scope |
| ---------- | --------- | ----- |
| **GDPR** | General Data Protection Regulation | Data protection across all industries |
| **HIPAA** | Health Insurance Portability and Accountability Act | Healthcare |
| **PCI DSS** | Payment Card Industry Data Security Standard | Credit card data handling |

---

## 2. Assessments

* **Definition:** A detailed analysis of an organization's security systems performed to identify vulnerabilities and risks, often conducted before implementing new systems or making significant changes to existing ones.

> *Es como una revisión técnica que le hace un mecánico a tu carro antes de un viaje largo: no es para multarte, sino para identificar qué piezas pueden fallar antes de que salgas a la carretera.*

Assessments are categorized into:

- **Risk assessments** — evaluate likelihood and impact of threats.
- **Vulnerability assessments** — identify weaknesses in systems.
- **Threat assessments** — analyze potential threats to the organization.

---

## 3. Internal Audits

* **Definition:** Systematic evaluations conducted by an organization's own audit team to assess the effectiveness of internal controls, compliance with regulations, and the integrity of information systems and processes.

> *Es el propio equipo de control de calidad de una fábrica revisando sus propias líneas de producción para ver si están cumpliendo los estándares internos, antes de que llegue cualquier inspector externo.*

Internal audits commonly focus on: data protection, network security, access controls, and incident response procedures.

### Example Focus Areas

- Review of password policies (complexity requirements, rotation schedules, employee adherence).
- Audit of user access controls — verifying least privilege, segregation of duties, and proper revocation when employees change roles or leave.

### Audit Process Steps (Access Control Example)

1. Review access control policies and procedures against best practices and regulatory requirements.
2. Examine access rights granted to users and verify alignment with job responsibilities.
3. Check processes for granting, modifying, and revoking access rights.
4. Test effectiveness of controls by attempting access with limited-permission accounts.
5. Document findings and recommend improvements.

### Compliance in Internal Audits

* **Definition:** The process of ensuring that an organization's information systems and security practices adhere to established standards, regulations, and laws.

> *Es asegurarte de que todas las operaciones de tu empresa sigan las reglas del juego que dicta la ley o la industria, para evitar multas, demandas y pérdida de confianza.*

Compliance activities include implementing specific security controls, maintaining policies and procedures, and regularly auditing the organization's security posture. Some governing laws and regulations **require** internal audits on a quarterly or annual basis depending on the industry.

### Audit Committee

* **Definition:** A group of individuals, typically members of the company's board of directors, who oversee the organization's audit and compliance activities.

> *Es la junta de supervisores del equipo de auditoría — los que se aseguran de que los auditores hagan bien su trabajo y de que los hallazgos sean atendidos a nivel ejecutivo.*

Responsibilities include:

- Reviewing financial reporting processes and internal controls.
- Overseeing the performance of internal and external audits.
- Ensuring organizational compliance with legal and regulatory requirements.
- Reviewing and addressing issues raised by auditors.

---

## 4. Internal Assessments

* **Definition:** In-depth analyses conducted within an organization to identify and evaluate potential risks and vulnerabilities in information systems, distinct from formal audits.

> *Mientras el auditor revisa si estás cumpliendo las reglas, el equipo de assessment busca activamente los huecos en la pared antes de que alguien los encuentre desde afuera.*

Most internal assessments are conducted as **self-assessments**. Large organizations may also have a dedicated internal assessment group that travels across the enterprise to assess sprawling networks.

### Self-Assessments

* **Definition:** Internal evaluations conducted by an organization to assess its compliance with specific standards or regulations, used to identify gaps and prepare for formal audits.

> *Es como hacer un simulacro de examen en casa antes del examen oficial, para saber qué temas tienes flojos antes de que llegue el profesor a evaluarte.*

### Internal Assessment Process (Web Application Example)

1. **Threat modeling** — identify potential threats (SQL injection, XSS, DoS).
2. **Vulnerability assessment** — use automated scanning tools and manual testing.
3. **Risk assessment** — evaluate impact, likelihood, potential damage, and mitigation cost.
4. **Recommend mitigation strategies** — code fixes, additional security controls, architectural changes.

---

## 5. Performing an Internal Assessment (MCIT Checklist)

* **Definition:** The practical execution of an internal assessment using a structured checklist, where personnel from across the organization answer yes/no questions to identify cybersecurity gaps and assign action items.

> *Es como usar una lista de verificación para preparar un avión antes de despegar: cada ítem tiene un responsable y una respuesta clara de sí o no, porque no hay espacio para ambigüedades cuando está en juego la seguridad.*

The **MCIT Cybersecurity Self-Assessment Checklist** (Minnesota Counties Intergovernmental Trust) is a sample framework. Key characteristics:

- Each question is **yes or no**.
- Each action item is assigned to a specific individual or group.
- Participants should include **administration, IT staff, and cybersecurity professionals**.
- Fields captured: item, yes/no, department/vendor responsible, comments, action items, assigned to.

### Sample Question Categories

| # | Sample Question Area |
| - | -------------------- |
| 1 | Has the organization experienced a cybersecurity incident in the past 12 months? Have deficiencies been addressed? |
| 2 | Is there a data security incident response plan? |
| 3 | Is a business continuity plan established with inventory of vital operations, IT assets, and third-party agreements? |
| 4 | Does every device have updated antivirus/anti-malware software? |
| 5 | Is there a mobile device policy? Has staff been trained on it? Are BYOD rules defined? |

---

## 6. External Audits

* **Definition:** Systematic evaluations conducted by independent entities to assess an organization's information systems, applications, and security controls, providing an objective perspective on the organization's true security posture.

> *Es contratar a un inspector externo — alguien que no tiene ningún interés en ocultar los problemas — para que diga exactamente cómo está la situación de seguridad de tu empresa.*

External audits cover: data protection, network security, access controls, and incident response. They identify compliance gaps against GDPR, HIPAA, PCI DSS, and others.

**Example:** A financial institution hires an external auditor quarterly to evaluate PCI DSS compliance — reviewing the cardholder data environment, firewalls, encryption methods, and access controls.

---

## 7. External Assessments

* **Definition:** Detailed analyses conducted by independent entities or firms to identify vulnerabilities and risks in an organization's security system, using a combination of automated scanning tools and manual testing.

> *Es contratar a una empresa especializada para que intente encontrar los huecos de seguridad de tu organización antes de que los atacantes reales lo hagan.*

External assessments take forms including: risk assessments, vulnerability assessments, and threat assessments.

**Example:** A healthcare organization engages a cybersecurity firm to scan its electronic health record system for known vulnerabilities (outdated software, misconfigured settings) to ensure HIPAA compliance.

---

## 8. Regulatory Compliance (External Context)

* **Definition:** The goal organizations aspire to achieve in their efforts to ensure awareness of and adherence to relevant laws, policies, and regulations through harmonized security controls.

> *Es seguir las reglas del país donde tu empresa opera, igual que un conductor que debe conocer y cumplir las leyes de tránsito del lugar donde maneja, no solo del lugar donde aprendió.*

Organizations increasingly adopt consolidated frameworks (such as the **NIST Cybersecurity Framework**) as the overarching compliance mechanism, with individual regulatory controls (HIPAA, PCI DSS, etc.) implemented within that larger framework.

---

## 9. Examinations

* **Definition:** Detailed external inspections of an organization's security infrastructure covering network security, data protection, access controls, personnel testing, policy review, and certification verification.

> *Es como la revisión técnica vehicular obligatoria combinada con un examen de conocimiento del conductor: no solo revisan el carro, también evalúan si el conductor sabe lo que hace.*

Examinations may include:

- Technical assessment of network systems, ICS/SCADA equipment, and operational procedures.
- Knowledge-based exams for employees to validate they can perform their roles.
- Review of organizational policies, procedures, and controls.
- Verification of current certifications for key personnel.

**Example:** Nuclear power plants are subject to examinations every 1–5 years covering computer network systems, ICS/SCADA equipment, and knowledge-based employee testing.

---

## 10. Independent Third-Party Audits

* **Definition:** Audits conducted by an external, independent entity that provide an unbiased perspective on an organization's security posture, helping identify weaknesses that might be overlooked internally.

> *Es como pedir una segunda opinión médica a un especialista que no conoce al paciente: no tiene historia previa ni interés en quedar bien, solo dice lo que ve.*

Key benefits:

- Provide validation of security measures.
- Help build trust with customers, stakeholders, and regulatory bodies.
- Required by many regulations including GDPR and PCI DSS.

---

## 11. Performing an External Assessment (HIPAA Checklist Example)

* **Definition:** The practical execution of an external assessment where an independent assessor uses a structured checklist to validate that an organization meets regulatory requirements, with the organization providing documented evidence for each item.

> *Es como preparar tu carpeta de documentos para una auditoría de impuestos: alguien externo llega, hace preguntas específicas, y tú debes tener los papeles que prueben que estás haciendo las cosas como se debe.*

**Example framework:** Government of San Bernardino County HIPAA Audit Checklist.

### HIPAA External Assessment Categories

| Category | Examples |
| -------- | -------- |
| **General Governance** | HIPAA Privacy and Security Survey completion; Security Officer contact info |
| **Administrative Safeguards** | Risk assessment at entity level; risk assessments for systems housing ePHI; risk management policy; organizational chart |
| **Physical Safeguards** | Physical security policies; data destruction/media reuse procedures; role-based access lists; logs of employees by PHI access type |
| **Technical Safeguards** | Encryption policies; IT monitoring controls; system-generated user access listings for PHI systems |
| **Privacy - General Governance** | HIPAA privacy policy documentation; Compliance/Privacy Officer contact info |
| **HITECH** | Breach notification processes; entity-level risk assessment documentation |

> **HITECH** (Health Information Technology for Economic and Clinical Health Act) — created to motivate implementation of electronic health records and supporting technologies in the U.S.

External assessments **do not fix** security issues — they are a **validation function** proving the organization meets a level of compliance and is prepared to defend against known threats.

---

## 12. Penetration Testing

* **Definition:** A simulated cyber attack against a computer system, network, or web application designed to identify vulnerabilities that could be exploited by real attackers, also known as pentesting or ethical hacking.

> *Es como contratar a un ladrón profesional para que intente robar tu casa y te diga después exactamente cómo lo hizo y cómo puedes impedirlo la próxima vez.*

The goal is not to cause damage but to identify and fix vulnerabilities before malicious actors exploit them.

### Physical Penetration Testing

* **Definition:** Testing of the physical security of an organization by attempting to bypass locks, access cards, security cameras, and other physical security measures.

> *Es cuando un evaluador profesional intenta entrar a tu edificio disfrazado de repartidor, colándose por una puerta segura, o clonando tarjetas de acceso — todo con permiso de la empresa.*

Techniques include: tailgating through security doors, cloning access cards.

Benefits:
- Identifying physical vulnerabilities in locks, access cards, and cameras.
- Improving security awareness about physical best practices (e.g., not allowing tailgating).
- Preventing unauthorized physical access.

### Offensive Penetration Testing (Red Teaming)

* **Definition:** A proactive and aggressive approach that involves actively seeking out vulnerabilities and attempting to exploit them using the same techniques a real attacker would use.

> *El equipo rojo son los villanos de práctica: hacen todo lo que haría un atacante real, pero con autorización, para que la empresa sepa exactamente cómo es vulnerable.*

Benefits:
- Simulates real-world attacks for network defenders to observe and learn from.
- Results can be used to justify cybersecurity investment by demonstrating critical vulnerabilities.

### Defensive Penetration Testing (Blue Teaming)

* **Definition:** A reactive approach focused on strengthening systems, detecting and responding to attacks, and improving incident response times.

> *El equipo azul son los defensores del partido: no lanzan el ataque, pero practican cómo detectarlo, contenerlo y recuperarse de él lo más rápido posible.*

Benefits:
- Improves incident response times to minimize damage.
- Strengthens systems through active monitoring for attack signs.
- Enhances detection capabilities for future attacks.

### Integrated Penetration Testing (Purple Teaming)

* **Definition:** A combined approach where Red Team (offensive) and Blue Team (defensive) work together in a single engagement to improve the organization's overall security posture.

> *El equipo morado es cuando los villanos y los héroes del partido entrenan juntos: el equipo rojo ataca, el azul defiende, y al final ambos se sientan a compartir lo que aprendieron para mejorar juntos.*

How it works:
- Red Team launches a simulated attack; Blue Team tries to detect and respond.
- If Blue Team detects the attack → Red Team escalates to more advanced techniques.
- If Blue Team does not detect the attack → Red Team walks Blue Team through the attack and helps configure sensors to catch it in the future.

Benefits: Promotes collaboration, comprehensive security assessment, combined attack simulation and response practice.

---

## 13. Reconnaissance in Penetration Testing

* **Definition:** The initial phase of penetration testing where the attacker gathers as much information as possible about the target system to plan the attack and increase its success rate.

> *Es como un ladrón que observa el banco días antes del robo: estudia cuándo abren, cuántas cámaras hay, por dónde entra el guardia — todo antes de actuar.*

Information gathered includes: IP addresses, domain details, mail servers, and existing security/detection systems.

### Active Reconnaissance

* **Definition:** Reconnaissance where the attacker directly engages with the target system by pinging it, scanning ports, or attempting connections — yielding more information but at a higher risk of detection.

> *Es cuando llegas al banco y empiezas a hacer preguntas directas al personal: obtienes más información, pero todos te van a notar y recordar.*

**Example tool:** `Nmap` for port scanning — system defenders can see the scan occurring and trace its origin.

### Passive Reconnaissance

* **Definition:** Reconnaissance where the attacker gathers information without directly engaging the target, using open-source intelligence, public databases, or observing network traffic — less detectable but yields less information.

> *Es investigar el banco desde la comodidad de tu casa usando Google Maps, redes sociales y reseñas en línea: nadie te ve, pero la información es más limitada.*

**Example tool:** `WHOIS` — gathers domain contact information for use in phishing campaigns.

### Penetration Testing Environments

| Environment | Description | Reconnaissance Need |
| ----------- | ----------- | ------------------- |
| **Known** | Testers receive detailed info: network diagrams, IP addresses, OS versions, credentials. Simulates insider threat. | Low to none — information already provided. |
| **Partially Known** | Hybrid — testers receive limited info (some IP ranges, some endpoints). Simulates an attacker with partial insider knowledge. | Moderate — fills knowledge gaps. |
| **Unknown** | Testers receive minimal/no info (only company name or web domain). Simulates a real external attacker. | Extensive — starts with full reconnaissance. |

---

## 14. Performing a Basic Penetration Test (Metasploit)

* **Definition:** A practical penetration test using Metasploit to perform reconnaissance with Nmap, identify a vulnerable service, configure an exploit and payload, establish a shell session, and perform post-exploitation actions on the target.

> *Es como el simulacro de un asalto bancario controlado: tienes el mapa del edificio, sabes dónde están las cámaras, entras, llegas a la bóveda, y luego le reportas al banco exactamente cómo lo hiciste para que lo corrijan.*

### Metasploit Framework Overview

* **Definition:** A multipurpose computer security and penetration testing framework that contains tools for reconnaissance, exploitation, and post-exploitation, available by default on Kali Linux and Parrot Linux.

> *Es la navaja suiza del pentester: tiene todo lo que necesita en un solo lugar, desde los binoculares para reconocimiento hasta las llaves maestras para entrar.*

### Metasploit Module Categories

| Category | Count (v6.1.27) | Purpose |
| -------- | --------------- | ------- |
| **Exploits** | ~2,200 | Code that delivers a payload and attacks a specific vulnerability on a target system |
| **Auxiliary** | ~1,100 | Scanners, sniffers, fuzzers, spoofers, and other non-exploit features (e.g., port scanning) |
| **Post** | ~400 | Post-exploitation tasks on a compromised host (persistence, data exfiltration, pivoting) |
| **Payloads** | ~600 | Code that exploits deliver and run — grants control, elevated permissions, or a shell |
| **Encoders** | 45 | Ensure payloads reach the destination intact and undetected (bypass IDS, firewalls, ACLs) |
| **NOPs** | 10 | Non-operations — keep payload sizes consistent and assist with evasion |
| **Evasion** | 9 | Techniques to bypass security defenses |

### Module Naming Convention

```textile
[module_type]/[platform]/[target_service]/[module_name]

# Ejemplo:
exploit/windows/smb/ms17_010_psexec
# exploit   = tipo de módulo
# windows   = plataforma objetivo
# smb       = servicio objetivo
# ms17_010  = vulnerabilidad (EternalBlue / CVE-2017-0144, base de WannaCry)
```

### Common Metasploit Variables

| Variable | Description |
| -------- | ----------- |
| `RHOST` | Remote Host — IP address of the target |
| `RPORT` | Remote Port — port on the target |
| `LHOST` | Local Host — attacker machine IP (used by reverse payloads) |
| `LPORT` | Local Port — listening port on attacker machine |

### Basic Pentest Workflow

```textile
1. msfconsole                          # Iniciar Metasploit
2. search [service/CVE]                # Buscar exploit disponible
3. use [exploit_path or number]        # Seleccionar el exploit
4. options                             # Ver opciones requeridas
5. set RHOST [target_IP]               # Configurar host objetivo
6. show payloads                       # Ver payloads compatibles
7. set payload [payload_name]          # Seleccionar payload
8. run                                 # Ejecutar el ataque
9. sessions -l                         # Listar sesiones activas
10. sessions [number]                  # Interactuar con sesión
```

### Payload Types

| Type | Example | Behavior |
| ---- | ------- | -------- |
| **Bind Shell** | `command/unix/bind_perl` | Opens a port on the target; attacker connects to it |
| **Reverse TCP Shell** | `windows/x64/meterpreter/reverse_tcp` | Target connects back to attacker (bypasses firewalls) |

### Sessions

* **Definition:** Communication channels established between Metasploit and a compromised host after a successful exploit, allowing multiple simultaneous connections to different targets.

> *Una sesión en Metasploit es como tener una línea telefónica abierta con la máquina comprometida: puedes pausarla, retomarla, y hasta tener varias líneas abiertas al mismo tiempo con distintos objetivos.*

- `Ctrl+Z` → background a session.
- `sessions -l` → list all active sessions.
- `sessions [number]` → interact with a specific session.

### Lab Scenario (Metasploitable 2 — UnrealIRCD Backdoor)

```textile
Objetivo vulnerable: 172.16.218.130
Servicio explotado: UnrealIRCD 3281 en puerto 6667
Vulnerabilidad: Backdoor introducido en el código fuente (2011)
Exploit usado: exploit/unix/irc/unreal_ircd_3281_backdoor
Payload usado: command/unix/bind_perl (bind shell en puerto 4444)
Resultado: Acceso root al servidor objetivo
```

---

## 15. Attestation of Findings

* **Definition:** A formal validation or confirmation provided by an entity that asserts the accuracy and authenticity of specific information — in penetration testing, it proves that the test actually occurred and that the findings are valid based on evidence presented.

> *Es la diferencia entre decirle a alguien que eres médico y mostrarle tu título y tu expediente clínico: la atestación es la prueba formal de que lo que dices es real y verificable.*

Attestation may be required when penetration tests are conducted for compliance or regulatory purposes (GLBA, HIPAA, Sarbanes-Oxley, PCI DSS).

### Attestation vs. Penetration Test Report

| | **Penetration Test Report** | **Attestation of Findings** |
| - | --------------------------- | --------------------------- |
| **Contains** | Findings + remediation recommendations | Findings + evidence proving the test occurred |
| **Evidence** | Not necessarily included | Required — logs, data, screenshots, exploit code shown |
| **Purpose** | Guide the organization to fix issues | Prove to a third party that the assessment was completed |
| **Evidence left with org?** | Report delivered | Evidence may be shown but not necessarily left behind |

### Letter of Attestation

* **Definition:** A formal document provided by the penetration testing firm to the organization, serving as an official record that the penetration test was completed during a specified period.

> *Es el certificado oficial que te da el taller mecánico después de revisar tu carro: lo puedes mostrar a quien sea para probar que la revisión sí se hizo y qué fue lo que encontraron.*

Used by organizations to prove to third parties (auditors, regulators) that a security assessment was conducted.

### Additional Attestation Types

| Type | Definition |
| ---- | ---------- |
| **Software Attestation** | Validates the integrity of software using cryptographic techniques (e.g., verifying a digital signature on a software update to confirm it hasn't been tampered with) |
| **Hardware Attestation** | Validates the integrity of hardware components (e.g., a TPM stores hardware/firmware measurements checked at boot time to detect unexpected changes) |
| **System Attestation** | Validates the security posture of a system (e.g., a cloud provider attests that its services meet ISO 27001 or SOC 2 standards) |

### Attestation in Internal vs. External Audits

| Context | Role of Attestation |
| ------- | ------------------- |
| **Internal Audits** | Auditor attests accuracy of financial records, effectiveness of risk management, and adherence to internal policies |
| **External Audits** | Independent third party attests financial statements, regulatory adherence, and operational efficiency |

Attestation strengthens **trust**, enhances **transparency**, and ensures **accountability** within an organization by providing formal validation that builds confidence among stakeholders.

---

## 16. Key Terms Glossary

| Term | Definition |
| ---- | ---------- |
| **Audit** | Systematic evaluation of systems and controls by an independent entity |
| **Assessment** | In-depth analysis to identify vulnerabilities and risks |
| **Internal Audit** | Evaluation by the organization's own audit team |
| **External Audit** | Evaluation by an independent third party |
| **Self-Assessment** | Organization's internal evaluation against specific standards |
| **Audit Committee** | Board-level group overseeing audit and compliance activities |
| **Compliance** | Adherence to laws, regulations, standards, and internal policies |
| **Examination** | Detailed external inspection including personnel testing and policy review |
| **Red Team** | Offensive penetration testing team simulating real attackers |
| **Blue Team** | Defensive penetration testing team detecting and responding to attacks |
| **Purple Team** | Integrated approach combining Red and Blue Team in one engagement |
| **Reconnaissance** | Information gathering phase before a penetration test |
| **Active Reconnaissance** | Direct engagement with the target to gather information (higher detection risk) |
| **Passive Reconnaissance** | Information gathering without engaging the target (lower detection risk) |
| **Known Environment** | Pen test where testers receive full details about the target infrastructure |
| **Partially Known Environment** | Pen test where testers receive limited information about the target |
| **Unknown Environment** | Pen test where testers receive minimal or no information about the target |
| **Metasploit** | Multipurpose penetration testing framework with exploits, payloads, and post modules |
| **Payload** | Code delivered by an exploit that runs on the target to grant access or control |
| **Bind Shell** | Shell where the target opens a listening port; attacker connects to it |
| **Reverse Shell** | Shell where the target connects back to the attacker's listener |
| **Session** | Active communication channel between Metasploit and a compromised host |
| **Attestation** | Formal validation asserting the accuracy and authenticity of findings |
| **Letter of Attestation** | Official document proving a penetration test was completed |
| **Software Attestation** | Cryptographic validation of software integrity |
| **Hardware Attestation** | Validation of hardware integrity (e.g., via TPM) |
| **System Attestation** | Validation of a system's overall security posture |
| **GLBA** | Gramm-Leach-Bliley Act — financial data privacy regulation |
| **HITECH** | Health Information Technology for Economic and Clinical Health Act |
| **TPM** | Trusted Platform Module — hardware chip for security measurements and attestation |
| **EternalBlue** | MS17-010 vulnerability exploited by WannaCry ransomware, targets SMB |
| **Metasploitable 2** | Intentionally vulnerable Linux VM created by Rapid7 for penetration testing practice |
| **MCIT** | Minnesota Counties Intergovernmental Trust — source of sample internal assessment checklist |
| **NOPs** | No-Operations — CPU instructions that do nothing; used to keep payload sizes consistent |
