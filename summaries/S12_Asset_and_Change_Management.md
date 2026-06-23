# 🛡️ CompTIA Security+ SY0-701 — Section 12

## Asset and Change Management | Study Summary

> **Keywords:** Asset Management · Change Management · BYOD · COPE · CYOD · MDM · Sanitization · CAB · Backout Plan · Version Control · Impact Analysis

---

## 1. Asset and Change Management Overview

* **Definition:** Asset management is the systematic process of developing, operating, maintaining, and selling assets in a cost-effective manner; change management is a structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state.

> *Imagina que tu empresa es una cocina de restaurante. La gestión de activos es el inventario de cada cuchillo, olla y licuadora — quién lo tiene, dónde está y cuándo fue revisado. La gestión de cambios es el proceso formal para aprobar que el chef principal cambie la receta estrella sin que el caos se apodere de la cocina.*

### Why Both Matter in Cybersecurity

| Pillar | Purpose | Security Benefit |
| --- | --- | --- |
| **Asset Management** | Identify, catalog, and monitor all digital assets | Reduces vulnerabilities; ensures consistent security protocols |
| **Change Management** | Control how system modifications are executed | Prevents security gaps and misconfigurations from untested changes |

### Objectives Covered (SY0-701)

| Objective | Statement |
| --- | --- |
| **1.3** | Explain the importance of change management processes and the impact to security |
| **4.1** | Apply common security techniques to computing resources (given a scenario) |
| **4.2** | Explain security implications of proper hardware, software, and data asset management |

---

## 2. Acquisition and Procurement

* **Definition:** Acquisition is the act of obtaining goods and services; procurement is the broader end-to-end process of sourcing and obtaining those goods and services, including all upstream evaluation steps.

> *Acquisition es el momento en que recibes la pizza en la puerta. Procurement es todo lo que pasó antes: elegir la pizzería, comparar precios, revisar ingredientes, hacer el pedido y confirmar el pago.*

### Purchase Options

| Method | Best For | Notes |
| --- | --- | --- |
| **Company Credit Card** | Low-cost, urgent items (ink, paper) | Transaction limits and item types set per employee role |
| **Individual Purchase / Reimbursement** | Emergency or no-card situations | Employee pays out-of-pocket; submits receipts for reimbursement |
| **Purchase Order (PO)** | Large or expensive acquisitions | Formal document from purchasing dept; not a payment — a legally binding promise to pay |

### Internal Approval Process

Before hardware or software can be purchased, organizations commonly require:

- Alignment with company goals and budget
- Security and compatibility assessment against existing infrastructure
- Multi-level authorization (e.g., ITPR process used by the US Navy)

### Post-Procurement Steps

After approval, the procurement process continues with:

- Compatibility testing with current systems
- Security checks and configuration hardening
- End-user training on the new product
- Integration into existing organizational workflows

---

## 3. Mobile Asset Deployments

* **Definition:** Mobile device deployment models define how personal and company-owned devices (smartphones, tablets, wearables) are managed and integrated into an organization's network.

> *Elegir un modelo de dispositivos es como decidir si los empleados de un restaurante usan su propio uniforme (BYOD), uno que la empresa les da pero pueden usar en casa (COPE), o uno que elijen de un catálogo aprobado (CYOD).*

### The Three Deployment Models

| Model | Full Name | Who Owns the Device | Personal Use Allowed | Key Benefit | Key Risk |
| --- | --- | --- | --- | --- | --- |
| **BYOD** | Bring Your Own Device | Employee | Yes | Lower cost for employer; employee uses one device | Reduced corporate control; security enforcement difficult |
| **COPE** | Corporate-Owned, Personally Enabled | Organization | Yes | Full MDM control; standardized models | Higher upfront cost; employee privacy concerns |
| **CYOD** | Choose Your Own Device | Organization | Generally No | Employee has choice; limited support scope | Higher upfront cost; employees may need two devices |

### Model Selection Criteria

Three key factors when choosing a deployment model:

1. **Cost** — BYOD has hidden security/compatibility costs; COPE/CYOD have high upfront but lower ongoing support costs
2. **Security** — CYOD offers the best corporate control and full MDM integration
3. **Employee Satisfaction** — BYOD and CYOD offer more choice; COPE has less employee flexibility

---

## 4. Asset Management — Assignment, Accounting, and Tracking

* **Definition:** Asset management involves the systematic governance and lifecycle tracking of all organizational assets, including assignment of ownership, classification, monitoring, and enumeration of every asset from acquisition to disposal.

> *Gestionar activos tecnológicos es como administrar una biblioteca: cada libro (activo) tiene un número de catálogo, está asignado a una sección, y se registra quién lo tiene prestado y cuándo fue revisado por última vez.*

### Assignment and Accounting

| Concept | Description |
| --- | --- |
| **Ownership / Allocation** | Each asset is formally assigned to a person or department |
| **Classification** | Assets are categorized by function, value, or sensitivity to guide maintenance and replacement decisions |

### Monitoring and Tracking

| Concept | Description |
| --- | --- |
| **Asset Monitoring** | Maintains an inventory of every asset — specs, location, assigned user, last serviced |
| **Asset Tracking** | Extends monitoring with GPS/software tracking of physical location, status, and condition |
| **Enumeration** | Identifies and counts connected assets using scanners and tools; detects unauthorized devices |

### Mobile Device Management (MDM)

* **Definition:** A Mobile Device Management solution is a centralized platform that allows organizations to securely manage and monitor employee mobile devices, enforce corporate policies, push updates, and remotely lock or wipe devices.

> *Un MDM es como el mando a distancia central de una sala de cine: desde un solo lugar puedes encender y apagar cada pantalla, actualizar el contenido y, si alguien se lleva una pantalla sin permiso, apagarla remotamente.*

**MDM Capabilities:**

- Enforce corporate security policies across all managed devices
- Push software patches and applications to thousands of devices simultaneously
- Remotely lock or wipe a lost or stolen device
- Ensure consistency and standardization across a diverse device ecosystem

---

## 5. Asset Disposal and Decommissioning

* **Definition:** Asset disposal and decommissioning is the structured process of safely retiring digital assets — including sanitizing or destroying stored data and certifying that disposal has occurred — in accordance with regulatory requirements.

> *Desechar un disco duro sin sanearlo es como tirar una libreta de contraseñas en la basura sin desgarrarla. El proceso de disposición segura garantiza que nadie que encuentre ese disco pueda leer lo que había en él.*

**Reference Standard:** NIST Special Publication 800-88 — *Guidelines for Media Sanitization*

### Sanitization Methods

| Method | How It Works | Notes |
| --- | --- | --- |
| **Overwriting (Multiple Passes)** | Replaces existing data with random series of bits; repeated 1, 7, or 35 times | More passes = higher classification data; does not destroy the device |
| **Degaussing** | Strong magnetic field disrupts magnetic domains on HDD or tape | Permanently destroys data and the device's ability to store data again |
| **Secure Erase** | Firmware-level purge of all data blocks | Precursor to Cryptographic Erase; some flaws discovered over time |
| **Cryptographic Erase (CE)** | Data is pre-encrypted; disposal destroys only the encryption keys | Fastest method (30–60 seconds); device can be repurposed safely |

### Destruction Methods

Used when sanitization is insufficient (e.g., top secret data):

- Shredding, pulverizing, melting, incinerating the physical storage media

### Certification

* **Definition:** Certification is documented proof that data or hardware has been securely sanitized or destroyed, creating an audit trail for regulatory compliance.

> *La certificación de disposición es como el recibo del depósito en un incinerador: no solo deshiciste el documento confidencial, sino que tienes prueba de cuándo, cómo y quién lo hizo.*

### Data Retention

* **Definition:** Data retention defines how long specific types of data must be stored before disposal, balancing regulatory requirements, business needs, and security risk.

> *La retención de datos es como saber cuánto tiempo debes guardar tus declaraciones de impuestos. No guardas todo para siempre, pero tampoco botas todo de inmediato — hay plazos legales y prácticos que debes respetar.*

**Why Retain Data?**
- Regulatory mandates (financial records, medical records)
- Historical analysis, trend prediction, dispute resolution

**Why Not Retain Everything?**
- Storage costs scale with volume
- More stored data = larger attack surface
- Data management complexity increases

> ⚠️ **Key principle:** *The more you store, the more you must secure.*

---

## 6. Change Management

* **Definition:** Change management is the orchestrated strategy to transition teams, departments, or entire organizations from their existing state to a more secure and desirable future state through controlled, structured, and approved processes.

> *La gestión de cambios es como solicitar un permiso de construcción antes de remodelar tu casa. No puedes simplemente tumbar una pared sin planos aprobados, un inspector, y asegurarte de que no hay tuberías o cables detrás de ella.*

### Key Roles in Change Management

| Role | Responsibility |
| --- | --- |
| **Change Advisory Board (CAB)** | Body of representatives from across the organization that evaluates, approves, and schedules proposed changes |
| **Change Owner** | Individual or team that initiates the change request; advocates for the change and details its benefits and challenges |
| **Stakeholder** | Any person with a vested interest in the change — directly impacted or involved in its assessment/implementation |

### Impact Analysis

Before implementing any change, answer:

- What could go wrong?
- What are the immediate and long-term effects on operations, reputation, and users?
- Are there unforeseen challenges?

---

## 7. Change Management Process Steps

* **Definition:** The change management process is a structured five-step workflow that governs how proposed changes are evaluated, executed, validated, and recorded across an organization.

> *El proceso de gestión de cambios es como una receta de cocina profesional: no improvisas, sigues pasos en orden, verificas el resultado al final y anotas lo que aprendiste para la próxima vez.*

### The Five Steps

| Step | Name | Description |
| --- | --- | --- |
| 1 | **Prepare** | Assess the current state; identify inefficiencies; gather resources; engage stakeholders |
| 2 | **Create a Vision** | Define the desired future state and explain the reasons for the change; build stakeholder buy-in |
| 3 | **Implement** | Execute the plan; conduct training; communicate continuously; address concerns |
| 4 | **Verify** | Measure effectiveness against objectives; use surveys, metrics, and interviews; address discrepancies |
| 5 | **Document** | Create a historical record of the change — what was done, when, and why |

### Critical Supporting Practices

| Practice | Purpose |
| --- | --- |
| **Scheduled Maintenance Windows** | Pre-defined time slots for changes to minimize disruption (e.g., Saturdays midnight–4 a.m.) |
| **Backout Plan** | Predetermined rollback strategy if the change fails; returns systems to their previous stable state |
| **Testing Results** | Post-implementation validation that desired outcomes were achieved and no new issues were introduced |
| **Standard Operating Procedures (SOPs)** | Step-by-step documented instructions ensuring consistency, reducing errors across implementations |

---

## 8. Technical Implications of Changes

* **Definition:** Technical implications of changes refer to the broad downstream effects a single system modification can have across interconnected systems, configurations, applications, and security controls.

> *Cambiar una configuración en un sistema corporativo es como mover una pieza en un móvil colgante: aunque solo tocas una parte, todo lo demás se mueve. Tienes que saber qué está conectado a qué antes de jalar cualquier hilo.*

### Key Technical Considerations

| Element | Description |
| --- | --- |
| **Allow Lists** | Specifies entities permitted to access a resource; must be reviewed before any change |
| **Deny Lists / Block Lists** | Specifies entities blocked from a resource; adding/removing IPs can inadvertently expose or restrict services |
| **Restricted Activities** | Certain operations (e.g., shutting down a sensitive server) may be off-limits; must be identified before a change is approved |
| **Downtime** | Even minor changes risk causing downtime; estimate impact and schedule within maintenance windows |
| **Service / Application Restarts** | Required for many changes; can disrupt active users, cause data loss in transit, or create processing backlogs |
| **Legacy Applications** | Older software is less flexible and more sensitive to changes; minor updates elsewhere can cause crashes |
| **Dependencies** | Modern systems are interconnected; a change in one area can cascade across multiple systems and partner architectures |

---

## 9. Documenting Changes

* **Definition:** Documenting changes is the process of creating and maintaining clear records of all implemented changes — including version control, updated diagrams, revised policies, and closed change tickets — to ensure accountability and provide a reference for future operations.

> *Documentar un cambio es como llevar la bitácora de un barco: no importa cuánto confíes en tu memoria, el capitán que viene después de ti necesita saber exactamente qué ruta se tomó, qué ocurrió y qué decisiones se tomaron en el camino.*

### Documentation Components

| Component | Purpose |
| --- | --- |
| **Version Control** | Tracks and manages changes to documents, software, and files; allows rollback to a previous stable state |
| **Updated Diagrams** | Network and system diagrams must reflect the new state post-change; outdated diagrams cause misconfigurations |
| **Revised Policies and Procedures** | If a change reveals gaps or issues, update SOPs to prevent recurrence — continuous improvement |
| **Updated Change Requests / Trouble Tickets** | Closes the loop; provides a clear timeline, informs stakeholders, and creates a historical audit record |

> ⚠️ **Common mistake:** Believing you'll "remember" the changes without writing them down. In enterprise-scale networks spanning multiple continents, undocumented changes directly cause misconfigurations and team misunderstandings.

---

## 10. Key Terms

| Term | Definition |
| --- | --- |
| **Asset Management** | Systematic governance of organizational assets across their entire lifecycle |
| **Change Management** | Structured process to implement system changes in a controlled, approved manner |
| **BYOD** | Bring Your Own Device — employee uses personal device for work |
| **COPE** | Corporate-Owned, Personally Enabled — company device with personal use allowed |
| **CYOD** | Choose Your Own Device — employee selects from a pre-approved company device list |
| **MDM** | Mobile Device Management — centralized platform for managing and securing mobile devices |
| **CAB** | Change Advisory Board — cross-organizational body that evaluates and approves proposed changes |
| **Change Owner** | Individual or team initiating and advocating for a proposed change |
| **Stakeholder** | Any person vested in or affected by a proposed change |
| **Impact Analysis** | Pre-change assessment of potential risks, disruptions, and downstream effects |
| **Backout Plan** | Rollback strategy to restore systems to their previous state if a change fails |
| **SOP** | Standard Operating Procedure — step-by-step instructions for executing a specific task |
| **Sanitization** | Process of making data inaccessible and irretrievable from a storage medium |
| **Degaussing** | Using a magnetic field to destroy data on magnetic storage media |
| **Cryptographic Erase (CE)** | Sanitization by destroying encryption keys rather than the underlying data |
| **Certification** | Documented proof that asset disposal or data destruction was properly completed |
| **Data Retention** | Policy defining how long data must be stored before it can be disposed of |
| **Version Control** | System that tracks and manages changes to files and software over time |
| **Enumeration** | Identifying and counting assets connected to a network using scanners and tools |
| **Acquisition** | The act of obtaining goods or services |
| **Procurement** | The full end-to-end process of sourcing, evaluating, and obtaining goods or services |
| **Purchase Order (PO)** | Formal document authorizing a specific purchase; a legally binding payment promise |
| **Legacy Application** | Older software still in use that is sensitive to change due to limited support and flexibility |
| **Dependency** | A relationship where one system or application relies on another to function correctly |
| **Allow List** | A list specifying which entities are permitted to access a resource |
| **Deny List / Block List** | A list specifying which entities are blocked from accessing a resource |
