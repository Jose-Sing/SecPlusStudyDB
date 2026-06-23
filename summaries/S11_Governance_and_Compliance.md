# 🛡️ CompTIA Security+ SY0-701 — Section 11

## Governance and Compliance | Study Summary

> **Keywords:** Governance · Compliance · GRC · Policies · Standards · Procedures · Boards · Committees · AUP · SDLC · Monitoring · Non-compliance · GDPR · Fines · Sanctions

---

## 1. Governance Overview

* **Definition:** The strategic leadership, structures, and processes that ensure an organization's IT infrastructure aligns with its business objectives — encompassing rules, responsibilities, and practices that guide IT resource management.

> *Es como la constitución de un país: no dice exactamente cómo hacer cada cosa del día a día, pero establece los principios, valores y estructuras de poder que determinan cómo se toman todas las demás decisiones.*

Governance is the **first component of the GRC triad** — Governance, Risk, and Compliance.

### What Governance Shapes

| Output | Description |
| --- | --- |
| **Guidelines** | Non-mandatory recommended approaches for handling situations |
| **Policies** | High-level commitments and intentions (e.g., data protection, ethical conduct) |
| **Standards** | Specific mandatory rules tied to a policy; often set by industry or regulatory bodies |
| **Procedures** | Step-by-step instructions that implement policies and standards consistently |

### Why Governance Matters

| Area | Purpose |
| --- | --- |
| **Risk Management** | Identify, assess, and manage potential security risks |
| **Strategic Alignment** | Ensure IT strategy supports business objectives |
| **Resource Management** | Enable efficient and effective use of IT assets |
| **Performance Measurement** | Monitor and measure IT process effectiveness |

### Monitoring and Revision

Governance frameworks must evolve as three forces change:

- **Technology** — e.g., adoption of cloud services requires updated access policies
- **Regulations** — e.g., new data protection laws require policy revisions
- **Cultural shifts** — e.g., rise of remote work requires new secure access procedures

> *Imagina una empresa de software que en 2015 se mueve a la nube, en 2018 enfrenta el GDPR y en 2020 adopta el trabajo remoto. Su marco de gobernanza debe actualizarse en cada una de esas olas, o quedará obsoleto y expuesto.*

---

## 2. Governance Structures

* **Definition:** The organizational bodies and frameworks that hold decision-making authority and accountability over IT and security operations.

> *Son las diferentes "ramas del gobierno" de una empresa: así como un país tiene ejecutivo, legislativo y judicial, una organización tiene junta directiva, comités especializados y entes regulatorios externos que la vigilan.*

### Structure Types

| Structure | Description | Example |
| --- | --- | --- |
| **Board of Directors** | Elected by shareholders; sets strategic direction, establishes policies, makes major decisions | Tech company board with industry experts guiding market strategy |
| **Committees** | Subgroups of the board focused on specific areas; allow detailed attention to complex domains | Audit committee, governance committee, **cybersecurity committee** |
| **Government Entities** | External bodies that establish laws and regulations organizations must comply with | FTC (consumer protection), SEC (financial), CISA (cybersecurity) |
| **Centralized Structure** | Decision-making concentrated at top management; consistent policies, slower local response | Large corporation maintaining uniform policies across all branches |
| **Decentralized Structure** | Decision-making distributed throughout the organization; faster local decisions, risk of inconsistency | Tech startup encouraging departmental autonomy and innovation |

> *La diferencia entre centralizado y descentralizado es como comparar una cadena de restaurantes (todos los Big Mac saben igual porque todo se decide desde arriba) versus una cooperativa de chefs locales (cada uno decide su menú, lo que genera creatividad pero también variabilidad).*

---

## 3. Policies

* **Definition:** High-level guidelines that outline an organization's commitments and intentions toward specific actions — they define the "what" and "why," not the step-by-step "how."

> *Una política es como las reglas del hogar: "en esta casa no se fuma." No te dice exactamente dónde poner el letrero o qué pasa si alguien viola la regla — eso lo definen los estándares y procedimientos. La política solo establece la intención.*

### Key Policy Types

| Policy | Purpose |
| --- | --- |
| **Acceptable Use Policy (AUP)** | Defines do's and don'ts for users interacting with organizational IT systems; prevents legal issues and security threats |
| **Information Security Policy** | Governs protection of information assets (data classification, access control, encryption, physical security) |
| **Business Continuity Policy** | Outlines how critical operations will continue during/after a disruption |
| **Disaster Recovery Policy** | Specifies how IT systems and data will be recovered after a disaster (backups, restoration steps, alternate sites) |
| **Incident Response Policy** | Plans for detecting, reporting, assessing, responding to, and learning from security incidents |
| **SDLC Policy** | Guides software development through all stages: requirements → design → coding → testing → deployment → maintenance; includes secure coding standards |
| **Change Management Policy** | Controls how changes to IT systems are requested, approved, implemented, and reviewed to minimize disruption |

> *El AUP es como el contrato que firmas cuando te conectas al Wi-Fi de un hotel: define qué puedes y qué no puedes hacer con ese recurso compartido. Viola las reglas y pierdes el acceso — o algo peor.*

---

## 4. Standards

* **Definition:** Specific, often mandatory rules that must be followed to implement a policy — more granular than policies and frequently defined by an industry body or regulatory authority.

> *Si la política dice "protege los datos del cliente," el estándar dice exactamente cómo: "usa AES-256 para datos en reposo y TLS 1.2 o superior para datos en tránsito." La política pone el objetivo; el estándar pone el método obligatorio.*

### Password Standards

Requirements that enforce password robustness and resistance to brute-force attacks:

- Minimum length: **8–12 characters**
- Mix of: uppercase, lowercase, numbers, special characters
- Regular rotation: every **60–90 days**
- Prohibit reuse for a defined number of iterations
- Use **password hashing and salting** to protect stored credentials

### Access Control Standards

| Model | Description | Typical Use |
| --- | --- | --- |
| **DAC** (Discretionary Access Control) | Resource owner decides who can access it | Standard enterprise environments |
| **MAC** (Mandatory Access Control) | Labels/classifications determine access | Government, military |
| **RBAC** (Role-Based Access Control) | Access based on job roles within the org | Most corporate environments |

Key principles enforced by access control standards:

- **Least Privilege** — users get only the minimum access needed to do their job
- **Separation of Duties** — no single individual has complete control over a critical process

### Physical Security Standards

- **Perimeter security:** fences, gates, guards
- **Surveillance:** CCTV systems
- **Access control mechanisms:** biometric scanners, keycards
- **Environmental controls:** fire suppression, HVAC, power redundancy
- **Secure areas:** server rooms and data centers with stricter access and monitoring

### Encryption Standards

| Standard | Typical Use Case |
| --- | --- |
| **AES** (Advanced Encryption Standard) | Data at rest — strong security, efficient performance |
| **RSA** | Data in transit — public key infrastructure for secure communications |

---

## 5. Procedures

* **Definition:** Step-by-step instructions that describe exactly how to perform a specific task consistently and in compliance with policies and standards — the operational "how-to."

> *Si la política dice "haz backups" y el estándar dice "usa AES-256," el procedimiento dice: cada lunes a las 2 AM, ejecuta el script X, verifica el checksum, almacena en el servidor Y, y manda el reporte al equipo Z. Es la receta completa.*

### Change Management Procedures

A systematic approach to implementing organizational or IT changes with minimal disruption:

1. Identify the need for change and assess potential impacts
2. Develop an implementation plan (who, what, resources)
3. Implement in stages to allow issues to surface gradually
4. Conduct a post-change review and document lessons learned

Additional considerations:
- Always plan for **rollback** if the change causes negative results
- Schedule disruptive changes during a designated **maintenance window**
- Test significant changes before full deployment

### Onboarding and Offboarding Procedures

| Phase | Key Activities |
| --- | --- |
| **Onboarding** | Orientation, role-specific training, system access provisioning, team integration |
| **Offboarding** | Retrieve company property, **disable system access**, conduct exit interview, gather feedback |

> *El offboarding es tan crítico como el onboarding desde el punto de vista de seguridad. Un empleado que se va con acceso activo a los sistemas es una puerta abierta — intencional o no.*

### Playbooks

* **Definition:** A checklist or step-by-step guide for detecting and responding to a specific type of incident — ensures consistency and speed regardless of who executes it.

Playbooks are used for:
- Cybersecurity incident response (e.g., ransomware, phishing, data breach)
- IT operations (e.g., server failure, DDoS)
- Customer service escalations

Playbooks typically include: resources required · steps to execute · expected outcomes · escalation paths

---

## 6. Governance Considerations

* **Definition:** The regulatory, legal, industry-specific, and geographical factors that an organization must account for when designing and maintaining its governance framework.

> *Gobernar una empresa global es como jugar ajedrez en varios tableros simultáneamente: las reglas del juego cambian dependiendo del país, la industria y hasta la ciudad donde operas.*

### Regulatory Considerations

Organizations must comply with regulations that vary by industry and location:

- Non-compliance leads to: **fines, sanctions, reputational damage**
- Example: **GDPR** (EU) — governs data collection, storage, and use for EU citizens worldwide

### Legal Considerations

Cover areas beyond regulation: contract law, intellectual property, corporate law, employment law.

- Key legal risk: **litigation** from businesses, customers, or employees
- Causes: breach of contract, product liability, employment disputes

### Industry Considerations

Industry-specific standards and best practices that may not be legally binding but set competitive expectations:

- Example: **Agile methodologies** (Scrum, Kanban) in software development — not legally required but industry standard
- Organizations that ignore industry standards risk competitive disadvantage

### Geographical Considerations

| Scope | Example |
| --- | --- |
| **Local** | City zoning laws prohibiting certain business operations in residential areas |
| **Regional** | **CCPA** (California) — consumer data rights for California residents |
| **National** | **ADA** (USA) — accessibility requirements for employees and customers |
| **Global** | **GDPR** (EU) — applies to any company worldwide that handles EU citizen data |

> *El GDPR es el ejemplo perfecto de una regulación global: aunque tu empresa esté en Costa Rica, si tienes un cliente en Alemania y manejas sus datos, el GDPR te aplica. Las fronteras físicas ya no definen los límites legales.*

⚠️ Key challenge: **Conflict of laws** — different jurisdictions may have contradictory requirements; organizations need deep legal understanding of each market they operate in.

---

## 7. Compliance

* **Definition:** The adherence to laws, regulations, standards, and internal policies applicable to an organization's operations — demonstrated through monitoring and reporting.

> *Compliance es como la revisión técnica vehicular: no basta con que tu carro funcione bien; tienes que poder demostrárselo a una autoridad externa con documentación y evidencia. Sin el sticker, no circula.*

### Compliance Reporting

| Type | Who Sees It | Example |
| --- | --- | --- |
| **Internal** | Compliance department, internal auditors | Financial institution reporting all transactions above threshold to internal compliance officer |
| **External** | Regulatory bodies, third-party auditors, customers | Pharmaceutical company submitting Good Manufacturing Practice (GMP) reports to the FDA |

### Compliance Monitoring Components

| Component | Description |
| --- | --- |
| **Due Diligence** | Exhaustive review of operations to identify potential compliance risks |
| **Due Care** | The steps taken to mitigate identified compliance risks |
| **Attestation** | Formal declaration by a responsible party that processes and controls are compliant |
| **Acknowledgement** | Recognition and acceptance of compliance requirements by all relevant parties |
| **Internal Monitoring** | Regular internal review of operations against internal policies |
| **External Monitoring** | Third-party audits to verify compliance with external regulations or standards |

> *Due diligence es revisar el historial de crédito antes de firmar el préstamo. Due care es no gastar más de lo que puedes pagar una vez que ya lo tienes. Uno es investigar el riesgo; el otro es actuar responsablemente para mitigarlo.*

### Role of Automation in Compliance

Automated compliance systems provide:
- **Streamlined data collection** — eliminates manual gathering and human error
- **Real-time monitoring** — flags violations as they occur (e.g., unauthorized access to patient records)
- **Automated reporting** — generates compliance reports on-demand (e.g., flagging suspicious bank transactions for AML review)

---

## 8. Non-Compliance Consequences

* **Definition:** The legal, financial, reputational, and operational penalties an organization faces when it fails to adhere to applicable laws, regulations, or contractual obligations.

> *Incumplir con las regulaciones de ciberseguridad es como manejar sin seguro: mientras no pase nada, parece que ahorras dinero. Pero cuando ocurre el accidente, el costo es exponencialmente mayor — y en algunos casos, te quitan la licencia para siempre.*

### Consequence Types

| Consequence | Description | Real-World Example |
| --- | --- | --- |
| **Fines** | Monetary penalties from regulatory bodies | GDPR: up to **€20M or 4% of global annual turnover** (whichever is higher); British Airways fined £183M for a breach affecting 500,000 customers |
| **Sanctions** | Operational restrictions or bans imposed by regulators | Chinese government sanctioned companies for violating cybersecurity law — warnings, fines, income confiscation |
| **Reputational Damage** | Long-term public trust loss; stock price decline | Equifax 2017 breach: 147M records exposed, stock dropped **30%+** in weeks |
| **Loss of License** | Revocation of operating license or certification | NY DFS revoked a Bitcoin company's license for failing to meet cybersecurity requirements |
| **Contractual Impacts** | Breach of client or partner contracts; legal disputes, penalties, or termination | Software firm violating data protection regulations sued by clients; contracts terminated |

> *Equifax es el caso de estudio perfecto de consecuencias en cascada: primero el daño reputacional, luego las demandas, luego las investigaciones regulatorias, y finalmente una multa de $575 millones con la FTC. No cumplir no solo duele hoy — duele por años.*

### Prevention

Organizations avoid non-compliance consequences by:
- Understanding and adhering to all relevant laws and regulations
- Implementing robust cybersecurity measures
- Regularly reviewing and updating compliance programs
- Maintaining audit trails and documentation for attestation

---

## 9. Key Terms

| Term | Meaning |
| --- | --- |
| **GRC** | Governance, Risk, and Compliance — the strategic triad for organizational security management |
| **AUP** | Acceptable Use Policy — defines permitted and prohibited use of IT resources |
| **SDLC** | Software Development Lifecycle — structured process guiding software from concept to retirement |
| **DAC** | Discretionary Access Control — owner determines access permissions |
| **MAC** | Mandatory Access Control — access determined by labels/classifications |
| **RBAC** | Role-Based Access Control — access determined by job role |
| **GDPR** | General Data Protection Regulation — EU regulation governing personal data of EU citizens |
| **CCPA** | California Consumer Privacy Act — state-level data rights for California residents |
| **ADA** | Americans with Disabilities Act — national law requiring accessibility accommodations |
| **Due Diligence** | Exhaustive review to identify compliance risks |
| **Due Care** | Actions taken to mitigate identified risks |
| **Attestation** | Formal declaration of compliance by responsible party |
| **Playbook** | Step-by-step incident response or operational guide |
| **Least Privilege** | Principle limiting user access to only what is needed for their role |
| **Separation of Duties** | Principle preventing any single person from controlling an entire critical process |
