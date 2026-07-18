# 🛡️ CompTIA Security+ (SY0-701) — Dion Training

## Section 24: Incident Response | Study Summary

> **Keywords:** Incident Response · NIST SP 800-61 · Threat Hunting · Root Cause Analysis · Digital Forensics · Chain of Custody · Order of Volatility · Legal Hold · Disk Imaging · E-Discovery

---

## 1. Incident Response Overview

* **Definition:** The critical cybersecurity process that outlines a systematic approach an organization takes to manage and mitigate security incidents, minimizing their impact and facilitating a swift return to normal operations. (Objective 4.8)

An **incident** is an act of violating an explicit or implied security policy — for example, stealing someone's password to log into their account, or an attacker installing malware on a system. Both break the organization's expectation that only authorized people and code interact with its systems.

The primary goals of incident response are to **minimize the impact** of a breach, **reduce the time** it takes to identify and contain threats, and **facilitate a swift recovery** to normal operations. This requires detection and classification, containment and eradication, evidence preservation, communication and reporting, and lessons learned for future prevention.

> *Es como el protocolo de emergencias de un hospital: sin importar qué tipo de accidente llegue, existe un proceso estructurado — triage, estabilización, tratamiento, alta — que se sigue siempre para minimizar el daño y regresar al paciente a la normalidad.*

---

## 2. The Incident Response Process: NIST vs. CompTIA Models

* **Definition:** The structured sequence of phases an organization follows when responding to a security incident; NIST defines a four-phase model, while CompTIA expands it into a seven-phase model for exam purposes.

NIST's *Computer Security Incident Handling Guide* (Special Publication 800-61) defines **four phases**: preparation, detection and analysis, containment/eradication/recovery, and post-incident activity. CompTIA splits "detection and analysis" into two separate phases, and "containment, eradication, and recovery" into three separate phases, producing a **seven-phase model**. On the exam, always use the CompTIA seven-phase model.

The process is often **non-linear** — while responding, a team commonly loops backward from containment into detection and analysis again when new suspicious activity is found.

| Model                  | Phases                                                                                                               |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **NIST (4 phases)**    | Preparation → Detection and Analysis → Containment, Eradication, and Recovery → Post-Incident Activity               |
| **CompTIA (7 phases)** | Preparation → Detection → Analysis → Containment → Eradication → Recovery → Post-Incident Activity (Lessons Learned) |

> *Como comparar un mapa de carreteras simplificado (NIST, 4 paradas grandes) con uno detallado que muestra cada salida (CompTIA, 7 paradas): ambos te llevan al mismo destino, pero uno da más detalle para el examen.*

### Incident Response Process: Preparation

* **Definition:** The phase in which cybersecurity practitioners make systems resilient to attack by hardening infrastructure, writing policies and procedures, and establishing communication plans, before any incident occurs.

This phase also includes **training**, **testing**, and **exercising** staff with simulated incidents, and creating incident response kits — everything needed to be ready before something bad happens, including setting up encrypted out-of-band communication paths.

> *Como el entrenamiento de bomberos antes de que ocurra un incendio: revisan el equipo, practican rutas de escape y lo preparan todo antes de la emergencia real.*

### Incident Response Process: Detection

* **Definition:** The phase focused on determining whether a security incident has actually occurred, with cybersecurity and triage analysts categorizing and assessing its potential severity.

> *Como un detector de humo: su único trabajo es avisar que "algo está pasando", sin todavía saber qué tan grave es el incendio.*

### Incident Response Process: Analysis

* **Definition:** The phase in which an incident is thoroughly examined and evaluated to **understand its scope and impact**, after which stakeholders are notified and containment is initiated.

Analysts work to understand the nature and potential consequences of the incident, providing insights that guide the initial response actions.

> *Como un médico de emergencias que, tras la alarma inicial, examina al paciente para entender qué tan grave es la lesión antes de decidir el tratamiento.*

### Incident Response Process: Containment

* **Definition:** The phase used to **limit the scope and magnitude of an incident** by **securing data and minimizing impact** on business operations, customers, and partners.

For example, if malware is detected on a system, the goal is to prevent it from spreading — such as by disconnecting the infected client from the network and locking out the affected user.

> *Como cerrar las compuertas de un barco que se está inundando: todavía no arreglas el agujero, pero evitas que el agua (o el malware) se extienda al resto del barco.*

### Incident Response Process: Eradication

* **Definition:** The phase, beginning once an incident is contained, focused on completely **removing the malicious activity from the affected system or network**.

Continuing the malware example, once spread is stopped, the malware is removed or the system is reimaged from a known-good image.

> *Como fumigar una casa después de aislar la habitación infestada: ahora eliminas por completo la plaga.*

### Incident Response Process: Recovery

* **Definition:** The phase focused on restoring affected systems and services to their normal, secured state — often via restoring from a **known-good backup**, **installing patches**, or **updating configurations**.

Recovery may also include monitoring systems for lingering threats to ensure a smooth return to normal operations and increased resilience against future attacks.

> *Como la rehabilitación después de una cirugía: no basta con quitar el problema, hay que devolver el cuerpo al funcionamiento normal y vigilarlo durante la recuperación.*

### Incident Response Process: Post-Incident Activity (Lessons Learned)

* **Definition:** The final phase, occurring after containment, eradication, and recovery are complete, in which the team analyzes the incident and the response itself to identify what worked and what could be improved.

Three major actions occur during this phase: the **root cause analysis**, the **lessons learned process**, and the **after-action report** (see Sections 5, and the sub-concepts below).

> *Como la reunión que hace un equipo deportivo después del partido para ver la repetición del juego: no importa si ganaron o perdieron, analizan qué funcionó y qué no.*

#### 4 Steps process for the root cause analysis:

1. Define/scope the incident.
2. Determine the causal relationship that led to the incident.
3. Identify an effective solution.
4. Implement and track the solutions to ensure that the incident is ful ly resolved.

#### Post-Incident Activity: Lessons Learned Process

* **Definition:** A formalized method for documenting **what went right**, **what went wrong**, and **what could be done better** during an incident response, feeding directly into organizational process improvements.

For example, if a change management board was too slow to approve a needed security fix, a lesson learned might be to decrease approval times for emergent change requests during an incident.

> *Como un diario de errores de cocina: no rediseñas la receta completa cada vez, solo anotas qué salió mal para no repetirlo.*

#### Post-Incident Activity: After-Action Report

* **Definition:** A formalized report that documents what happened during an incident, including the root cause analysis and the recommendations produced by the lessons learned process.

Depending on the organization, this report may be highly detailed and technical, or written as an executive summary.

> *Como el reporte policial de un accidente de tránsito: documenta oficialmente los hechos para que quede constancia y se pueda actuar después.*

---

## 3. The Incident Response Team

* **Definition:** The group of professionals responsible for executing an incident response, composed of a core team of experienced cybersecurity practitioners supplemented by temporary members brought in for a specific incident.

The team includes a **leader** (a skilled incident responder), **subject-matter experts**, **IT support staff**, **legal counsel**, and **human resources/public relations**. Large organizations often maintain dedicated, full-time IR teams, while smaller organizations assemble temporary teams as an additional duty for existing employees (e.g., deputizing a database administrator when a database is involved). Organizational leadership must ensure the team has funding, resources, and expertise, and must make the critical business decisions and communications with stakeholders or media.

> *Como el equipo de respuesta de un hospital durante una emergencia masiva: hay un líder de trauma, especialistas que se convocan según se necesiten, y administración que gestiona recursos y la comunicación con la prensa.*

### Incident Response Team: Outsourced IR Teams

* **Definition:** Third-party specialized teams hired by an organization to perform incident response on its behalf, offering deep specialization but at high cost and with less familiarity with the organization's specific network.

Because these teams don't know the enterprise environment in advance, they need time to learn the network before they can respond effectively — a tradeoff against their day-to-day specialization advantage.

> *Como contratar bomberos externos que nunca han visto el plano de tu edificio: son expertos, pero tardan más en orientarse que el equipo interno.*

---

## 4. Threat Hunting

* **Definition:** A proactive cybersecurity technique focused on continuously searching for existing or emerging threats within an organization's network that have not been discovered by normal security monitoring. Essentially, threat hunting is the act of being proactive in your defense as opposed to being reactive like you are with incident response.

Threat hunting begins with the assumption that **existing detection rules have already failed** to alert on something malicious — it looks for what has bypassed the rules, unlike routine monitoring, which relies on known signatures for well-documented TTPs. Because threat actors modify their tactics once they become well-known, threat hunters look for new TTPs and create new indicators of compromise (IoCs).

> *Como un guardia de seguridad que, en lugar de esperar a que suene la alarma, camina activamente por el edificio buscando puertas que alguien pudo haber forzado sin activarla.*

### Threat Hunting: Threat Modeling and Hypothesis

* **Definition:** The initial step of threat hunting, in which analysts establish a hypothesis by identifying which potential attack events have the highest likelihood and highest impact, combining threat modeling with threat intelligence.

This step starts by asking **who might want to harm us?**,  **Who might want to break into our networks?** and **how might they be able to do that?**.

> *Como un detective que, antes de investigar, se pregunta "¿quién tendría motivo para hacer esto y cómo lo haría?" antes de buscar pistas.*

### Threat Hunting: Profiling Threat Actors and Activities

* **Definition:** The step of creating scenarios that illustrate how a prospective attacker might attempt an intrusion, including their likely TTPs and category (insider threat, hacktivist, criminal organization, or nation-state APT).

This profiling determines the attacker's probable objectives and which systems they might target.

> *Como perfilar a un ladrón antes de un robo: ¿usará una ganzúa o romperá una ventana? Saber esto ayuda a anticipar sus movimientos.*

### Threat Hunting: Advisories and Bulletins

* **Definition:** Publications released by vendors and security researchers when new TTPs or vulnerabilities are discovered, often before any signature exists in an organization's protection suite.

Threat hunters use these bulletins to determine whether their own network is at risk, even without an existing detection signature.

> *Como un boletín de salud pública que anuncia un nuevo virus antes de que exista la vacuna: te avisa para que tomes precauciones mientras se desarrolla la cura.*

### Threat Hunting: Intelligence Fusion and Threat Data

* **Definition:** The practice of using a SIEM and threat analysis platforms together with external TTP/IoC threat data feeds to efficiently identify items of concern within an organization's own logs.

Combining internal log data with real-world threat intelligence produces actionable intelligence — for example, correlating outbound traffic to a suspicious domain (found via threat research) with a list of internal hosts that need further investigation.

> *Como cruzar el reporte del clima de varias fuentes con lo que ves por tu ventana: combinar datos externos e internos da una imagen más completa de la amenaza real.*

---

## 5. Root Cause Analysis

* **Definition:** A systematic four-step process used to identify the initial source of a security incident and to prevent it from recurring: **(1) define/scope the incident**, **(2) determine the causal relationships that led to it**, **(3) identify an effective solution**, and **(4) implement and track that solution**.

Using a malware infection as an example: the initial vector might be a user plugging in an infected USB thumb drive. Prevention measures could include updating antivirus signatures across all workstations, blocking USB mass-storage data transfer, and patching the specific vulnerability the malware exploited.

Root cause analysis must always use a **no-blame approach** — its purpose is not to assign fault to an individual or team, but to identify systemic weaknesses and develop effective preventative measures, encouraging open and honest reporting. The NTSB's independent, no-blame investigation of the 2018–2019 Boeing 737 MAX crashes — which identified a defective sensor and flawed flight-control software, rather than pilot error, as the root cause — illustrates this principle at scale.

⚠️ **Exam Tip:** Root cause analysis is a **no-blame process** — its goal is prevention, not punishment.

> *Como la investigación de un accidente aéreo por la NTSB: no busca culpar al piloto, busca entender qué falló en todo el sistema para que nunca vuelva a pasar.*

---

## 6. Incident Response Training and Testing

* **Definition:** The objective domain covering the preparation of personnel and systems to respond effectively to security incidents, through **training** (education) and **testing** (practical exercises).

### Incident Response Training and Testing: Training

**Definition:**  It is the education to ensure employees and staff understand your processes, procedures, and priorities during an incident response to make sure that your people are ready to respond when something bad happens.

Training should be tailored to the audience: **technical first responders** need procedural training (how to re-image a machine, remove malware, change configurations), **managers/executives** need training on risk-versus-reward decision-making and internal or external communication, and **end users** need training on how to recognize and report suspected incidents (e.g., a phishing email). Training should always incorporate lessons learned from previous incidents, as well as soft skills and relationship building across the team.

> *Como aprender a nadar: la clase teórica en el salón es el "training", y meterte a la alberca a nadar de verdad es el "testing".*

### Incident Response Training and Testing: Testing

* **Definition:** The practical exercise of incident response procedures, verifying that personnel can actually execute what they were taught in training, as opposed to merely knowing what to do.

Testing can range from a low-cost, discussion-based tabletop exercise up to a full-scale, multi-site simulation costing hundreds of thousands of dollars — each with different tradeoffs between realism and cost. The three major testing formats are the **tabletop exercise**, the **penetration test**, and the **full-scale simulation**, each detailed below.

> *Como la diferencia entre practicar un discurso frente al espejo y darlo de verdad frente a una audiencia: solo la segunda prueba si realmente estás listo.*

#### Testing: Tabletop Exercise (TTX)

* **Definition:** A discussion-based exercise that runs an incident response scenario against a framework of controls or a red team, conducted verbally "around a table" rather than performed physically on a live network.

A facilitator presents a scenario (e.g., "you have an indication of a data breach on this server — what would you do?") and participants describe their responses in turn. A common variant splits participants into a **red team** (attackers) and a **blue team** (defenders), who alternate describing attack and defense actions across several rounds. TTXs are far less expensive than full exercises, but provide no hands-on, on-keyboard experience.

> *Como un ensayo de obra de teatro sentados alrededor de una mesa, leyendo el guion en voz alta sin actuar físicamente las escenas.*

#### Testing: Penetration Test

* **Definition:** An exercise in which a red team attempts to conduct an actual intrusion into the network using a specific scenario based on threat modeling, governed by an agreed-upon methodology and rules of engagement.

A penetration test is goal-directed — for example, targeting a database — rather than an unconstrained attack (a denial-of-service attack would typically fall outside the rules of engagement unless explicitly permitted). Seeing tools or operating systems such as **Metasploit, Cobalt Strike, Kali Linux, ParrotOS, or Commando OS** on a network should prompt a defender to consider whether this reflects an authorized pentest or, worse, an actual attacker — since these are open-source tools available to anyone.

> *Como un simulacro de robo autorizado por el dueño del banco: los "ladrones" tienen permiso y reglas claras sobre qué pueden y no pueden hacer.*

#### Testing: Simulation Exercise

* **Definition:** A realistic, hands-on exercise that goes beyond theoretical tabletop discussion to mimic actual incidents — such as simulated phishing attacks, ransomware infections, or complex multi-stage breaches involving external parties like law enforcement or PR — in a controlled but authentic environment.

These exercises are invaluablefor: 

* identifying gaps in your incident response plan.
* improving coordination between teams
* ensuring that everyone understands their roles during a real incident.

Simulations assess not only technical skill but also decision-making under pressure and internal/external communication. They should align with the organization's threat landscape and risk profile, and are invaluable for identifying gaps in the IR plan and improving team coordination.

> *Como un simulacro de incendio real con humo artificial y bomberos actuando en tiempo real, en lugar de solo hablar sobre qué harían.*

---

## 7. Digital Forensic Procedures

* **Definition:** The systematic techniques and methodologies used to gather, analyze, and preserve digital evidence for investigations into cybercrimes or security incidents, following organizational written procedures at all times to ensure evidence is handled correctly and remains admissible.

Digital forensic procedures are broken into four main phases: **identification, collection, analysis,** and **reporting**, detailed below.

> *Como el trabajo de un investigador de la escena del crimen (CSI), pero aplicado a discos duros y teléfonos en lugar de huellas dactilares.*

### Digital Forensic Procedures: Identification Phase

* **Definition:** The phase focused on ensuring the safety of the scene, securing it to prevent evidence contamination, and determining the scope of evidence that needs to be collected.

This includes documenting the scene with video or photographs before anything is touched, and identifying where relevant data might be stored (tablet, smartphone, smart TV, server) based on the scope defined in a warrant or authorization.

> *Como acordonar la escena de un crimen con cinta amarilla antes de que alguien contamine las pruebas.*

### Digital Forensic Procedures: Collection Phase

* **Definition:** The phase in which identified evidence is gathered under proper legal authorization — a warrant for law enforcement, or executive sign-off (CIO/CSO/CEO) for an internal investigation — following the order of volatility and preserving the chain of custody.

> *Como recolectar evidencia física con guantes y bolsas etiquetadas: cada paso debe documentarse para que la evidencia sea válida en la corte.*

#### Collection Phase: Order of Volatility (NIST SP 800-86)

* **Definition:** A systematic approach in digital forensics that dictates the sequence in which data sources should be collected, starting with the most volatile (most susceptible to modification or loss) and ending with the least volatile, in order to minimize data loss and maintain evidentiary integrity.

| Step | Data Source                                                                        |
| ---- | ---------------------------------------------------------------------------------- |
| 1    | System memory, including processor cache and RAM                                   |
| 2    | System state — network configuration, active user sessions, non-altering data      |
| 3    | Storage devices — hard drives, solid-state devices, non-volatile storage           |
| 4    | Network traffic and logs                                                           |
| 5    | Remotely stored archive data — backups, cloud storage, external devices, printouts |

> *Como salvar objetos de una casa que se está incendiando: primero los que se queman más rápido (papeles), y al final los que resisten más (objetos de metal).*

#### Collection Phase: Chain of Custody

* **Definition:** A documented and verifiable record that tracks the handling, transfer, and preservation of digital evidence from the moment it is collected until it is presented in a court of law.

Every person who handles the evidence — from the initial collector to a forensic analyst or legal professional — must document their actions and any change in custody status, ensuring the evidence remains untainted and admissible.

> *Como el recibo firmado cada vez que un paquete cambia de manos en una entrega: si falta un eslabón, no puedes confiar en que el paquete llegó intacto.*

#### Collection Phase: Disk Imaging

* **Definition:** The process of creating a bit-by-bit or logical copy of a storage device, preserving its entire content — including deleted files and unallocated space — so the original device remains untouched during analysis.

> *Como fotocopiar un libro página por página, incluyendo las manchas y los márgenes, en lugar de solo copiar el texto.*

#### Collection Phase: File Carving

* **Definition:** A technique that extracts files and data fragments directly from storage media without relying on the file system, particularly useful when file metadata is missing or corrupted.

> *Como reconstruir un jarrón roto juntando los pedazos esparcidos por el piso, sin tener la caja original que decía cómo iba armado.*

### Digital Forensic Procedures: Analysis Phase

* **Definition:** The phase in which forensic analysts apply repeatable methods and tools to a forensically sound copy of the evidence, systematically uncovering relevant information such as potential criminal activity, hidden files, timestamps, and user interactions.

Analysts follow strict, documented protocols to ensure consistency and objectivity, deriving insights that support any resulting legal proceedings.

> *Como un patólogo forense examinando una muestra en el laboratorio, siguiendo protocolos estrictos para que sus conclusiones sean confiables.*

### Digital Forensic Procedures: Reporting Phase

* **Definition:** The final phase in which the forensic analyst documents the methods and tools used, the actions performed during analysis, the detailed findings, and the final conclusions, in a report that may serve as evidence in legal proceedings.

The analyst must be prepared to testify in court about these findings and defend their work against challenges from a defense attorney.

> *Como el testimonio de un perito en un juicio: debe poder explicar y defender cada paso de su trabajo ante un abogado defensor.*

### Digital Forensic Procedures: Legal Hold

* **Definition:** A formal notification instructing employees to **preserve** all potentially relevant electronic data, documents, and records when litigation is reasonably expected, freezing the state of that information for future legal use.

**Any alteration or destruction of data under legal hold can lead to severe legal consequences.**

> *Como congelar una escena completa en el tiempo: nada se puede tocar ni borrar hasta que termine el proceso legal.*

### Digital Forensic Procedures: Preservation

* **Definition:** The proactive steps taken to maintain and protect electronic evidence in its original state — such as making backup copies, isolating critical systems, and implementing access controls — to prevent unauthorized alteration.

Preservation supports both the evidentiary integrity needed for a strong case and compliance with any active legal hold.

> *Como guardar un documento histórico en una vitrina sellada con clima controlado para que no se deteriore.*

### Digital Forensic Procedures: E-Discovery

* **Definition:** The process of identifying, collecting, and producing electronically stored information during legal proceedings, encompassing the search, analysis, and presentation of digital evidence in a format suitable for litigation.

E-discovery tools efficiently sift through emails, documents, databases, and other digital records to meet legal disclosure obligations.

Due to the complexity of modern litigations where electronic data often plays a central role, your organization should opt to appoint a **liaison** with legal knowledge and expertise to help facilitate communication and cooperation with law enforcement and forensic teams to ensure you stay on the right side of the law. This liaison can serve as a point of contact for interactions and ensuring a smoother process keeping any action under the law.

> *Como buscar una aguja específica entre miles de correos y documentos digitales para presentarla como prueba en un juicio.*

### Digital Forensic Procedures: Forensic Ethics

* **Definition:** The code of ethics governing digital forensic analysts, emphasizing three key principles: **avoiding bias**, **using repeatable actions**, and **preserving the integrity of the evidence**.

Conclusions must be based solely on the evidence, never on personal bias — some organizations separate the roles of **digital media collectors** (who gather evidence) from **digital forensic examiners** (who analyze it, without knowing the parties involved) to minimize this risk. Analysis must also be **repeatable**: **timestamp**, **every action**, and **result should be documented** (e.g., in a log with exact commands and screenshots) so another analyst using the same evidence and methods reaches the same conclusion. Finally, evidence must never be altered — analysis should always be performed on a disk **image** of a device, never on the original drive, to avoid modifying files such as swap files during the investigation.

Failure to follow these ethical standards gives a defense attorney grounds to discredit findings, potentially making evidence inadmissible and allowing a threat actor to escape prosecution.

> *Como un juez que no debe conocer a las partes involucradas para no tener prejuicios, y que además debe explicar su razonamiento de forma que cualquier otro juez llegue a la misma conclusión con la misma evidencia.*

---

## 8. Data Collection Procedures

* **Definition:** The established methods for gathering relevant information and evidence during an incident response for forensic investigation, allowing systems to be restored to operation quickly while preserving evidence for later analysis or law enforcement use.

Data collection efforts typically include **capturing** and **hashing** system images (e.g., with FTK Imager), analyzing data with forensic software (FTK/Forensic Toolkit, EnCase), capturing screenshots of the scene, reviewing network traffic logs and captures, and pulling CCTV video if physical intrusion is suspected. Teams also take statements from witnesses and administrators, review software licensing and documentation, and track man-hours and expenses for the incident's total cost.

> *Como preparar un expediente completo para un caso judicial: no basta con una sola prueba, se necesita reunir fotos, testimonios, registros y costos para tener el panorama completo.*

### Data Collection Procedures: Data Acquisition

* **Definition:** The methods and tools used to create a forensically sound copy of data from a source device, such as system memory or a hard disk.

Before acquiring any data, the analyst must confirm they have the **legal right to search or seize** the device — a company-owned device is generally fair game, but a BYOD (bring-your-own-device) system complicates this significantly, since the employee — not the company — owns it, and unauthorized seizure can make the evidence inadmissible. The analyst must also decide how to handle a live system: collecting data from a powered-on machine risks contaminating volatile evidence, while powering it down can permanently lose other evidence — both approaches have tradeoffs depending on what needs to be collected.

> *Como pedir permiso antes de revisar el celular de alguien: si el dispositivo no es tuyo (BYOD), necesitas autorización legal clara antes de tocarlo.*

#### Data Acquisition: Detailed Order of Volatility (Practical Sequence)

* **Definition:** An expanded, practice-oriented evidence-collection sequence that prioritizes the fastest-changing data first: CPU registers and cache, other volatile memory, persistent mass storage, remotely logged data, physical configuration, and archival media.

| Priority | Data Source                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | CPU registers and cache memory (extremely small, changes constantly)                                                                            |
| 2        | Other volatile memory — system RAM, routing tables, ARP caches, process tables, temporary swap files                                            |
| 3        | Persistent mass storage — hard drives, SSDs, flash drives                                                                                       |
| 4        | Remotely logged data — SIEM and monitoring data (still being written to elsewhere)                                                              |
| 5        | Physical configuration and network topology                                                                                                     |
| 6        | Archival media — backup tapes and offsite storage like CDR (Call Detail Record) or a DVR (Digital Video Recorder) (write-once, lowest priority) |

This practical sequence expands on the five-step NIST SP 800-86 order of volatility covered in "Digital Forensic Procedures" by separating out physical topology and clarifying where SIEM/remote logs fit relative to storage devices.

> *Como evacuar un edificio en incendio por prioridad: primero las zonas donde el fuego avanza más rápido, y al final los archivos guardados en la bóveda que resisten más tiempo.*

```markdown
⚠️ Analyst Warning: Volatile Registry Hives & Memory Forensics
----------------------------------------------------------------------------------------
**The Misconception**: Junior analysts often assume the Windows Registry 
resides entirely on the hard drive.

**The Reality**: Critical portions of the registry—most notably 
the HKLM\HARDWARE hive—are highly volatile and stored exclusively in memory (RAM) while the system is running.

**Forensic Impact**: The \HARDWARE hive logs critical hardware interactions, 
including every external disk or thumb drive connected to or disconnected from the system. 
If you only pull the registry from the hard disk, this data is lost.

Best Practice Workflow: 
1. Memory Dump First: Always capture and analyze a 
memory dump first to extract active volatile hives (\HARDWARE).
2. Hard Drive Second: Analyze the physical disk 
afterward to cross-reference data and catch anything missed in memory.

**Analytic Value**: Identifying connected flash drives via 
memory forensics provides immediate leads to track potential 
data exfiltration routes.
```

#### Data Acquisition: Windows Registry Considerations

* **Definition:** A forensic caveat noting that certain Windows registry hives — such as `HKLM\HARDWARE` — exist only in memory and must be captured via a memory dump rather than from the hard disk, since they record every disk device connected to or removed from the computer.

Analyzing the registry via a memory dump first (then again from the hard drive) helps ensure nothing relevant, such as evidence of a USB thumb drive used to exfiltrate data, is missed.

> *Como una libreta de visitas que se borra si apagas las luces de la recepción: si no la lees mientras el sistema está encendido, pierdes el registro de quién entró y salió.*

---

## 9. Disk Imaging and Analysis in Practice

* **Definition:** The practical application of forensic tools to create and analyze a bit-by-bit copy of a storage device, demonstrated using the Linux `dd` command and the Windows-based FTK Imager tool.

> *Como el paso de la teoría a la práctica en un laboratorio de química: ya sabes la fórmula, ahora la ejecutas con las manos usando las herramientas reales.*

### Disk Imaging in Practice: The `dd` Command (Linux/Unix/macOS)

* **Definition:** A command-line utility used to create a bit-by-bit image of an entire disk (partitioned and unpartitioned space), typically connected through a write blocker and followed by hashing to preserve the chain of custody.

```bash
# Listar dispositivos conectados
fdisk -l

# Crear la imagen bit a bit del disco completo (no solo la partición)
dd bs=64k if=/dev/sdb of=usb2gb.dd

# Generar el hash para la cadena de custodia
md5sum usb2gb.dd
# Recomendado también usar SHA-1 o SHA-256, ya que MD5 se considera débil hoy en día
```

Imaging the **entire disk** (not just a single partition) is important because hidden data can exist outside the partitioned space.

> *Como usar una fotocopiadora industrial que copia cada mancha y doblez de un documento, y luego sellar la copia con una firma notarial (el hash) para probar que no fue alterada.*

### Disk Imaging in Practice: FTK Imager

* **Definition:** A graphical forensic tool used to create verified disk images — with automatic hash verification — and to browse and recover data, including deleted files, from an acquired image without ever touching the original evidence.

The typical workflow is: `File → Create Disk Image` → select the physical drive → choose a **raw DD** output format (readable by any forensic tool, unlike EnCase's E01 or FTK's AFF) → enter case/examiner details → let the tool image and verify (computing MD5 and SHA-1 hashes automatically). Analysis is then performed by loading the resulting image file back into FTK, where deleted files, unallocated space, and slack space can be browsed and recovered — all without modifying the original drive, which is no longer even connected to the system.

> *Como una lupa de detective que te permite ver documentos "borrados" de un archivero, sin tener que tocar el archivero original.*

---

## 🗝️ Key Terms Glossary

| Term                         | Definition                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| **Incident**                 | An act of violating an explicit or implied security policy                                        |
| **NIST SP 800-61**           | The NIST guide defining the four-phase incident response model                                    |
| **Preparation**              | IR phase focused on hardening systems and getting ready before an incident occurs                 |
| **Detection**                | IR phase focused on determining whether a security incident has occurred                          |
| **Analysis**                 | IR phase that examines and evaluates an incident's scope and impact                               |
| **Containment**              | IR phase that limits the scope and spread of an incident                                          |
| **Eradication**              | IR phase that removes malicious activity from a system or network                                 |
| **Recovery**                 | IR phase that restores systems and services to a normal, secured state                            |
| **Post-Incident Activity**   | IR phase for root cause analysis, lessons learned, and the after-action report                    |
| **Root Cause Analysis**      | Four-step, no-blame process to identify and prevent the recurrence of an incident's initial cause |
| **Lessons Learned Process**  | Formalized documentation of what went right/wrong during an incident response                     |
| **After-Action Report**      | Formal report documenting an incident's root cause and lessons learned recommendations            |
| **Incident Response Team**   | Core and temporary personnel responsible for executing an incident response                       |
| **Threat Hunting**           | Proactive search for threats not caught by normal security monitoring                             |
| **TTP**                      | Tactics, Techniques, and Procedures used by a threat actor                                        |
| **IoC**                      | Indicator of Compromise — evidence suggesting a security breach                                   |
| **Advisories and Bulletins** | Vendor/researcher publications on newly discovered TTPs or vulnerabilities                        |
| **Intelligence Fusion**      | Combining SIEM data with external threat intelligence feeds                                       |
| **Training**                 | Education ensuring staff understand IR processes, procedures, and priorities                      |
| **Testing**                  | Practical exercise of incident response procedures                                                |
| **Tabletop Exercise (TTX)**  | Discussion-based IR test conducted verbally, not on live systems                                  |
| **Penetration Test**         | Authorized, scenario-based intrusion attempt governed by rules of engagement                      |
| **Rules of Engagement**      | Agreed boundaries and methodology for a penetration test                                          |
| **Simulation Exercise**      | Realistic, hands-on IR test mimicking an actual incident                                          |
| **Digital Forensics**        | Systematic investigation and analysis of digital devices/data for legal purposes                  |
| **Identification Phase**     | Forensics phase securing the scene and scoping evidence to collect                                |
| **Collection Phase**         | Forensics phase gathering evidence under legal authorization                                      |
| **Order of Volatility**      | Sequence for collecting evidence from most to least volatile                                      |
| **Chain of Custody**         | Documented record tracking evidence handling from collection to court                             |
| **Disk Imaging**             | Creating a bit-by-bit copy of a storage device                                                    |
| **File Carving**             | Extracting files/fragments from storage media without relying on the file system                  |
| **Analysis Phase**           | Forensics phase examining a sound copy of evidence using repeatable methods                       |
| **Reporting Phase**          | Forensics phase documenting methods, actions, and findings for legal use                          |
| **Legal Hold**               | Formal notice to preserve all potentially relevant electronic data during expected litigation     |
| **Preservation**             | Proactive steps to protect electronic evidence from alteration                                    |
| **E-Discovery**              | Identifying, collecting, and producing electronically stored information for litigation           |
| **Forensic Ethics**          | Principles of avoiding bias, ensuring repeatability, and preserving evidence integrity            |
| **Data Acquisition**         | Method/tools used to create a forensically sound copy of data from a source device                |
| **Write Blocker**            | Hardware/software device preventing writes to evidence media during acquisition                   |
| **HKLM\HARDWARE**            | Windows registry hive existing only in memory; logs connected/removed storage devices             |
| **dd**                       | Linux/Unix command-line utility for creating bit-by-bit disk images                               |
| **FTK Imager**               | Graphical forensic tool for creating verified disk images and recovering deleted data             |
