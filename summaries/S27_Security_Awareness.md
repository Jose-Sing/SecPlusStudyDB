# 🛡️ CompTIA Security+ (SY0-701) — Dion Training

## Section 27: Security Awareness | Study Summary

> **Keywords:** Insider Threat · Password Management · Social Engineering · OPSEC · Policies · Handbooks · Remote Work · Hybrid Work · Culture of Security

---

## 1. Security Awareness Training

* **Definition:** The objective domain (5.6) covering the knowledge, skills, and organizational practices that equip individuals to recognize and respond to security threats, reducing the risk posed by human error within an enterprise.

Security awareness training exists because technically robust defenses (firewalls, encryption, EDR) cannot compensate for human error, which remains one of the most significant vulnerabilities inside any enterprise network. Phishing emails, malware attacks, and social engineering schemes are among the most common techniques threat actors use to exploit the human element.

> *Es como instalar la mejor cerradura de la puerta principal, pero dejar la ventana abierta porque nadie le explicó a la familia por qué debía cerrarla.*

This section covers six areas under Objective 5.6: **recognizing insider threats**, **password management**, **avoiding social engineering**, **policies and handbooks**, **remote and hybrid work environments**, and **creating a culture of security**.

---

## 2. Recognizing Insider Threats

* **Definition:** The practice of identifying security risks that originate from individuals within an organization — employees, former employees, contractors, or business partners — who may exploit their legitimate access intentionally or unintentionally.

Insider threats are dangerous precisely because the individual already has inside information about the organization's security practices, data, and systems. Training users to recognize **anomalous behavior** — behavior that is risky, unexpected, or unintentional — is critical to flagging a potential insider threat before damage occurs.

> *Es como el guardia de seguridad de un banco que un día empieza a actuar raro: nadie sospecha de él primero porque ya tiene las llaves, pero es justamente por eso que representa el mayor riesgo.*

### Insider Threats: Risky Behavior Indicators

* **Definition:** Observable changes in an employee's conduct — such as reporting to work intoxicated or severely impaired — that signal a personal issue with the potential to translate into a security risk.

An employee who occasionally shows up hungover may simply have had a long weekend, but a *pattern* of impaired behavior is a red flag. Impaired judgment can lead to unintended disclosure of sensitive information or intentional misconduct resulting from compromised decision-making. In high-clearance government environments, personnel reporting for duty in an altered state are flagged for further investigation, since substance abuse issues increase susceptibility to coercion (e.g., being pressured into selling secrets to a nation-state).

> *Como un piloto de avión que llega oliendo a alcohol: no es solo un problema personal, es un riesgo directo para todos los que dependen de su buen juicio.*

### Insider Threats: Emotional Distress Indicators

* **Definition:** Behavioral signs — such as giving away personal possessions or displaying symptoms of depression — that may indicate an employee is undergoing significant emotional turmoil with security implications.

Individuals in emotional distress may become **less vigilant in following security protocols**, **leading to unintentional breaches**, or **may become vulnerable to exploitation by malicious actors, competitors, or nation-states seeking an insider**. Management and HR should engage with empathy and support while still mitigating the security risk.

> *Como un cable eléctrico deshilachado: no lo tocas para castigarlo, lo atiendes con cuidado, pero sabes que representa un peligro real si no se maneja a tiempo.*

### Insider Threats: Lifestyle Incongruence

* **Definition:** A discrepancy between an employee's observable lifestyle (assets, spending habits) and their known income or financial situation, which may indicate illicit activity such as theft or the sale of corporate secrets.

A lifestyle incongruence does not automatically indicate wrongdoing — the discrepancy could have a legitimate explanation (e.g., a spouse's income, an inheritance). However, an unexplained incongruence — such as a sudden purchase of an expensive car or home with no corresponding change in known income — warrants a **discreet investigation** to rule out foul play without violating the employee's privacy. This is why cleared government personnel must file financial disclosure forms and report windfalls (inheritances, lottery winnings) so unexplained wealth can be distinguished from legitimate income.

> *Como ver a un compañero de trabajo con el mismo salario que tú, pero que de repente llega en un carro que cuesta el doble de lo que ambos ganan en un año — algo no cuadra, y merece revisarse con discreción.*

### Insider Threats: Financial Struggles

* **Definition:** Signs of significant personal debt or financial hardship displayed by an employee, which represent a security concern because financial pressure **increases susceptibility to bribery or the temptation to sell sensitive data**.

Organizations should have policies for this scenario, such as offering financial counseling to affected employees and monitoring for unusual access or transmission of confidential data.

> *Como una persona ahogada en deudas: el desespero puede llevarla a aceptar dinero de quien sea, incluso de un competidor, a cambio de información valiosa.*

### Insider Threats: Insider Threat Program

* **Definition:** A formal organizational program that **promotes a culture encouraging employees to report suspicious activity**, **trains staff to recognize warning signs**, and **implements policies supporting mental health and financial well-being while conducting fair and confidential investigations**.

A strong insider threat program balances **user activity monitoring** (detecting unusual access patterns, excessive data copying/downloading, or work at odd hours) with the **privacy rights** of employees. Recognizing insider threats is about attention to warning signs *and* having a fair, supportive process for handling them.

> *Como un chequeo médico anual de una empresa: no busca castigar a nadie, busca detectar problemas a tiempo y ofrecer ayuda antes de que se conviertan en una crisis.*

---

## 3. Password Management

* **Definition:** The practices and tools used to create, store, and manage passwords for online accounts and systems in a way that ensures each password is strong, unique, and stored securely to reduce the risk of unauthorized access.

The most dangerous common practice is **password reuse** — using the same password (often paired with the same email-based username) across multiple sites. If one site is breached, attackers will attempt **credential replay** across many other services using the exposed credentials. Because remembering many long, unique, complex passwords is impractical for humans, a **password manager** solves this problem.

> *Es como usar la misma llave para tu casa, tu carro y tu oficina: si alguien copia esa llave una sola vez, tiene acceso a todo lo que tienes.*

### Password Management: Password Manager

* **Definition:** A specialized tool, plugin, or browser extension that securely generates, stores, and autofills unique usernames and passwords for multiple sites, protected by a single master password.

Browser-built-in password managers (Chrome, Edge, Safari, Firefox) exist but are generally considered less secure than dedicated third-party tools such as **Bitwarden**, **1Password**, **Dashlane**, or **LastPass**. The **master password** is used to encrypt the entire vault; if the master password is forgotten, all stored credentials become inaccessible, since it functions as the encryption key. Enterprise versions of password managers also support securely sharing credentials among team members.

> *Es como tener una sola caja fuerte con una sola combinación maestra, en lugar de tener que memorizar la combinación de cien cajas fuertes distintas.*

⚠️ **Exam Tip:** Password managers directly mitigate **password reuse**, one of the most common and most exploitable end-user security failures.

---

## 4. Avoiding Social Engineering

* **Definition:** The set of awareness practices and behaviors used to prevent social engineering attacks — deceptive attempts by a bad actor to manipulate individuals into breaking normal security procedures by exploiting human psychology.

Because social engineering attacks are often designed to appear innocent, **situational awareness** and vigilance form the first line of defense.

> *Como reconocer a un vendedor demasiado insistente en la puerta de tu casa: la señal de alerta no es lo que dice, sino cómo intenta apurarte y ganarse tu confianza demasiado rápido.*

### Avoiding Social Engineering: Situational Awareness

* **Definition:** A state of mindfulness about one's immediate surroundings, the actions being requested, and the potential negative consequences of performing those actions.

Situational awareness is the umbrella practice that prevents shoulder surfing, eavesdropping, piggybacking, and dumpster diving from succeeding.

> *Es como caminar por una calle desconocida de noche: no significa tener miedo, significa estar consciente de quién está cerca y qué está pasando alrededor.*

### Avoiding Social Engineering: Shoulder Surfing

* **Definition:** An attack in which someone peeks over a victim's shoulder to view sensitive information displayed on their screen.

Countermeasures include using a **privacy screen protector**, staying aware of surroundings in public spaces, and avoiding reading confidential information outside secured areas.

> *Como alguien que finge no mirar, pero está leyendo tu PIN por encima de tu hombro en el cajero automático.*

### Avoiding Social Engineering: Eavesdropping

* **Definition:** An attack in which someone listens in on private conversations or meetings, either in person or via a compromised smart device, to gather sensitive information.

Sensitive discussions should occur only in soundproofed or secure areas, with awareness of smartphones, smartwatches, or other devices in the room that could be remotely hijacked to record the conversation.

> *Como discutir secretos de la empresa en una cafetería pública: alguien en la mesa de al lado puede estar escuchando cada palabra sin que lo notes.*

### Avoiding Social Engineering: Piggybacking / Tailgating

* **Definition:** A physical social engineering technique in which an unauthorized individual slips into a secure facility undetected by closely following someone with legitimate access.

Mitigated through **access control vestibules (mantraps)** that only allow one person through at a time, combined with employee situational awareness.

> *Como colarse a un concierto pegado detrás de alguien que sí tiene entrada, justo cuando el guardia mira hacia otro lado.*

### Avoiding Social Engineering: Dumpster Diving

* **Definition:** An attack in which discarded materials in the trash or recycling are sifted through to reconstruct a larger, more informative picture of an organization's confidential data.

Countered through good situational awareness and, more formally, through data destruction policies (see [[#Policies and Handbooks: Data Destruction Policy]]).

> *Como armar un rompecabezas con los papeles rotos que alguien tiró a la basura sin destruirlos correctamente.*

### Avoiding Social Engineering: Operational Security (OPSEC)

* **Definition:** A protective discipline, originally coined by the military, that involves safeguarding critical information — including **daily routines**, **project details**, and **internal procedures** — that could indicate an organization's activities to an adversary.

OPSEC is a **mindset**, not just a protocol: social engineers piece together seemingly innocuous details shared over social media, phone calls, or casual conversation to construct a narrative they can exploit — for example, pretending to be part of someone's work life using information the victim unknowingly divulged.

> *Como no comentar en redes sociales que vas a estar de viaje: parece un dato inofensivo, pero le dice a un ladrón exactamente cuándo tu casa va a estar vacía.*

### Avoiding Social Engineering: Baiting via Removable Media and Cables

* **Definition:** A social engineering technique in which an attacker leaves an **infected USB** drive or **malicious charging cable** in a location where a victim is likely to find it and connect it to their device out of curiosity or convenience.

A USB drive "accidentally" left in a parking lot, once plugged in, can silently infect a workstation or the entire organizational network with malware. As users became wiser to USB baiting, attackers shifted to **malicious charging cables** with malware embedded in the firmware, deployed in airports, lounges, and coffee shops. The **mitigation** is simple: **never plug in an unknown USB device, and always carry your own charger and cable**.

> *Como aceptar un dulce envuelto de un extraño: aunque se vea inofensivo, no sabes qué contiene realmente hasta que ya es demasiado tarde.*

### Avoiding Social Engineering: Urgency and Pretexting Tactics

* **Definition:** A manipulation technique in which an attacker **impersonates a trusted role** (e.g., IT support) and **creates a false sense of urgency or fear** — such as threatening immediate legal or financial consequences — to pressure the victim into bypassing normal security protocols.

This tactic works because people under time pressure are more likely to make mistakes and skip verification steps.

> *Como una llamada que te dice "si no pagas en los próximos 10 minutos, te embargan la casa": el pánico que generan es la herramienta, no la amenaza en sí.*

⚠️ **Exam Tip:** The best organizational defense against all social engineering techniques is a proactive security culture reinforced with **simulated phishing exercises** and remediation training for employees who fall for them.

### Social Engineering Mitigations:

- Foster a culture of security with regular cybersecurity training.
- Educate all employees on recognizing phising attempts and valuing data privacy.
- Encourage employees to report suspicious activities.
- Conduct practical exercises like simulated phising attacks.
- Remediate individuals who fall for simulated attacks.

---

## 5. Policies and Handbooks

* **Definition:** The formal documented guidelines (policies) and comprehensive reference guides (handbooks) that define how an organization operates, makes decisions, and expects its employees to behave — including in situations not explicitly covered by training.

A **policy** is a deliberate system of **principles and rules** crafted to uphold internal controls and ensure legal/ethical compliance. A **handbook** is a comprehensive, often **booklet-form guide providing detailed procedures and best practices as an ongoing reference** — for example, an employee handbook outlining company procedures and expectations. Policies and handbooks differ significantly between organizations based on industry, needs, and use cases, so employees must read *and* comprehend them, not just acknowledge them.

### Comparison:  Policies vs. Handbooks

| **Feature**             | **Policy**                                                          | **Handbook**                                                       |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Primary Purpose**     | Defines **rules, mandates, and requirements** for the organization. | Provides **practical guidance, tips, and explanations** for staff. |
| **Tone**                | Formal, authoritative, and rigid.                                   | Conversational, instructional, and helpful.                        |
| **Audience**            | The entire organization (compliance/legal focus).                   | Employees and contractors (behavioral focus).                      |
| **Legal Standing**      | High; used for audits and enforcement.                              | Lower; serves as a reference guide.                                |
| **Content Focus**       | "What must be done" (e.g., Password length must be 14 characters).  | "How to do it" (e.g., How to set a strong password/use a vault).   |
| **Frequency of Update** | Rarely (annually or upon major regulatory change).                  | Often (as threats and tools evolve).                               |
| **Accountability**      | Non-compliance leads to disciplinary action.                        | Encourages "Security Culture"                                      |


> *La política es la ley del país; el manual del empleado es la guía turística que te explica cómo aplicarla en el día a día.*

### Policies and Handbooks: Data Destruction Policy

* **Definition:** A policy that defines the required method for securely disposing of physical or digital materials containing sensitive information, based on the material's classification level.

Example schemes include color-coded paper (e.g., pink paper for sensitive printouts requiring cross-cut shredding) or classification-based disposal (**unclassified** → *recycle, secret* → *shred*, **top secret** → *incinerate*). These policies directly counter the **dumpster diving** attack described above.

> *Como separar la basura por colores según qué tan peligrosa es: no todo se tira igual, y algunas cosas hay que quemarlas para asegurarse de que no quede nada.*

### Policies and Handbooks: Remote Work / Take-Home Policy

* **Definition:** A policy defining what types of physical and digital information are permitted to leave the organization's secure premises with an employee, based on data classification.

Highly classified environments may prohibit personal devices inside the building entirely and restrict which tasks (e.g., annual training) can be completed remotely, versus which require being physically inside a secured facility. Physical checks (bags, backpacks) may be used to enforce this policy on exit.

> *Como un préstamo de biblioteca: algunos libros los puedes llevar a casa, pero los de la sección de "solo consulta" tienen que quedarse dentro del edificio.*

⚠️ **Exam Tip:** Policies and handbooks must be reviewed **at least annually**, updated as threats evolve, and any significant changes should be highlighted in a summary so employees don't miss critical updates (e.g., a changed password complexity requirement).




---

## 6. Remote and Hybrid Work Environments

* **Definition:** The objective domain covering the security considerations, risks, and mitigations associated with employees performing work outside a traditional office environment, whether entirely remotely or through a blended arrangement.

> *Como mudar la oficina de un edificio con guardias y cámaras a la sala de la casa de cada empleado: la comodidad sube, pero también sube el número de puertas que hay que vigilar.*

### Remote and Hybrid Work: Remote Work

* **Definition:** A work arrangement in which employees perform their job functions entirely outside the traditional office environment — commonly from home or another remote location — using technology such as the internet.

### Remote and Hybrid Work: Hybrid Work

* **Definition:** A work model that combines in-office work with remote work, where employees split their work week between the traditional office and a remote location.

### Remote and Hybrid Work: Security Risks of Remote Environments

Working outside the office removes the organization's physical security controls and shifts data transmission from a trusted internal network onto a mix of public and private networks (home Wi-Fi, hotel networks, coffee shop hotspots) with weaker security controls, increasing exposure to eavesdropping over unencrypted connections and weak Wi-Fi password infiltration. Remote and hybrid work also increases the risk of **device loss or theft**, making device-level protections essential.

> *Como enviar dinero por correo postal ordinario en vez de un camión blindado: llega, pero por un camino con muchas más manos de por medio.*

### Remote and Hybrid Work: Mitigations

1. Require a **VPN** for secure, encrypted, end-to-end connections back to company resources.
2. Require **multi-factor authentication (MFA)** as an added layer of protection if credentials are compromised.
3. Provide continuous cybersecurity awareness training on phishing recognition and safe data handling for remote staff.
4. Prefer **company-issued devices** loaded with up-to-date security software, firewalls, and monitoring tools over unmanaged personal devices; if a **BYOD** policy is used instead of **CYOD** or **COPE**, the organization must define required security measures despite not owning the device.
5. Maintain **automated backups** (physical or cloud) to protect against data loss from ransomware or other attacks.
6. Choose collaboration tools/platforms with **end-to-end encryption**, robust administrative controls, and compliance with recognized security standards.
7. Maintain clear communication channels between the security team and remote staff, supported by regular security audits and feedback sessions.

> *Como equipar a un soldado que va a operar fuera de la base: necesita su propio equipo de comunicación cifrado, su identificación reforzada, y un canal directo con el cuartel general.*

---

## 7. Creating a Culture of Security

* **Definition:** An organizational mindset in which every member prioritizes security within daily tasks and decision-making, treating the protection of data, assets, and reputation as a collective responsibility rather than solely a technical or IT function.

Technical controls fail if employees do not value security enough to follow them. Building this culture requires weaving cybersecurity into the organization's everyday ethos, behaviors, and decisions through **organizational change management (OCM)**.

> *Como una familia donde cerrar la puerta con llave no es una regla impuesta, sino un hábito que todos hacen de forma natural porque entienden por qué importa.*

### Creating a Culture of Security: Organizational Change Management (OCM)

* **Definition:** A structured framework — beginning with executive leadership commitment and proceeding through strategic development, execution, and continuous monitoring — used to shift an organization's mindset so that cybersecurity becomes embedded in daily operations rather than treated as a mandated directive.

OCM proceeds through distinct phases:

| Phase                      | Description                                                                                                                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Leadership Commitment**  | Executive leadership visibly commits to security so the tone cascades through the whole organization, framed as shared responsibility, not a mandate.                               |
| **Development**            | Strategic planning: creating actionable, resourced policies covering acceptable practices, threat education (phishing, social engineering), and sensitive data handling guidelines. |
| **Execution**              | A continual process (not a one-time rollout) — ongoing training, simulated cyberattacks, and consistent threat communication embedded into daily workflows.                         |
| **Monitoring & Reporting** | Initial post-rollout monitoring followed by recurring check-ins: tracking network breaches, employee compliance, strategy effectiveness, and improvement areas.                     |

A critical component of the monitoring phase is fostering an environment where employees feel safe **reporting suspicious activity** without fear of blame, and establishing **feedback loops** so monitoring insights directly shape future security actions.

> *Como entrenar a un equipo deportivo: no basta con dar una charla motivacional una vez; se necesita práctica constante, retroalimentación después de cada partido, y ajustes continuos a la estrategia.*

⚠️ **Exam Tip:** A culture of security is validated not by the absence of incidents, but by employees' willingness to proactively report suspicious activity without fear of retaliation.

---

## 🗝️ Key Terms Glossary

| Term                          | Definition                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Insider Threat**            | A security risk originating from an individual within the organization (employee, contractor, partner)      |
| **Anomalous Behavior**        | Risky, unexpected, or unintentional behavior that may flag a potential insider threat                       |
| **Lifestyle Incongruence**    | A mismatch between an employee's observable lifestyle and their known income                                |
| **Insider Threat Program**    | Formal program combining reporting culture, training, and user activity monitoring to detect insider risks  |
| **Password Reuse**            | Using the same password across multiple accounts/sites — a major security vulnerability                     |
| **Password Manager**          | A tool that generates, stores, and autofills unique credentials, protected by a master password             |
| **Situational Awareness**     | Mindfulness of one's surroundings and the consequences of requested actions                                 |
| **Shoulder Surfing**          | Viewing sensitive on-screen information by looking over someone's shoulder                                  |
| **Eavesdropping**             | Listening in on private conversations or meetings to gather sensitive information                           |
| **Piggybacking / Tailgating** | Following an authorized person into a secure facility without proper access                                 |
| **Dumpster Diving**           | Searching discarded materials to reconstruct sensitive information                                          |
| **OPSEC**                     | Operational Security — safeguarding information that could reveal organizational activities to an adversary |
| **Baiting**                   | Leaving infected media (USB drives, charging cables) for a victim to connect out of curiosity               |
| **Policy**                    | A formal system of rules guiding organizational decisions and compliance                                    |
| **Handbook**                  | A comprehensive reference guide detailing procedures and best practices                                     |
| **Data Destruction Policy**   | Rules defining secure disposal methods for sensitive materials based on classification                      |
| **Remote Work**               | Performing job functions entirely outside the traditional office                                            |
| **Hybrid Work**               | A blend of in-office and remote work arrangements                                                           |
| **BYOD**                      | Bring Your Own Device — employees use personal devices for work, complicating security enforcement          |
| **CYOD / COPE**               | Choose Your Own Device / Corporate-Owned, Personally Enabled — organization-controlled device models        |
| **Culture of Security**       | An organizational mindset where all members share responsibility for protecting data and assets             |
| **OCM**                       | Organizational Change Management — structured framework for shifting organizational security mindset        |




