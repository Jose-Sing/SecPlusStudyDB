# 🛡️ CompTIA Security+ (SY0-701) — Dion Training

## Section 26: Automation and Orchestration | Study Summary

> **Keywords:** Automation · Orchestration · SOAR · Playbooks · Runbooks · CI/CD · APIs · REST · SOAP

---

## 1. Automation

* **Definition:** The process of automatically executing tasks without manual intervention, typically achieved using specialized software or scripts, allowing repetitive tasks to be performed consistently and efficiently.

Automation reduces the chances of human error and frees up time for more complex tasks by handling repetitive work autonomously. It focuses on making **individual tasks** run without human involvement.

> *Es como poner el lavado de ropa en modo automático: presionas un botón y la máquina hace ciclos repetitivos de lavado, enjuague y centrifugado sin que tengas que estar ahí supervisando cada paso.*

---

## 2. Orchestration

* **Definition:** The coordinated and sequenced execution of multiple automated tasks to achieve a specific outcome or workflow, ensuring tasks are executed in the correct order and that dependencies between them are managed appropriately.

While automation focuses on making a single task autonomous, orchestration looks at the **bigger picture**, directing various automated processes to work together harmoniously toward a broader goal.

> *Si la automatización es una lavadora funcionando sola, la orquestación es el director de una fábrica textil completa: coordina que la tela llegue a tiempo a la lavadora, luego a la secadora, luego al doblado, y finalmente al empaque, todo en el orden correcto.*

⚠️ **Exam Tip:** Automation = a single autonomous task. Orchestration = multiple automated tasks coordinated together into one workflow.

---

## 3. SOAR — Security Orchestration, Automation, and Response

* **Definition:** A class of security tools that facilitates incident response, threat hunting, and security configuration management by orchestrating and automating runbooks and delivering data enrichment.

SOAR is best understood as **SIEM 2.0** — it takes traditional security information and event monitoring and integrates it with orchestration and automation capabilities. SOAR is primarily used for **incident response**, though it also supports threat hunting.

> *Como cuando el firewall de próxima generación (NGFW) tomó las capas 3 y 4 de un firewall tradicional y las llevó hasta la capa 7: SOAR toma tu SIEM tradicional y lo lleva al siguiente nivel, agregando capacidad de acción automática, no solo de alerta.*

**SOAR capabilities include:**

* Scanning security and threat data to identify patterns
* Analyzing data using machine learning
* Automating data enrichment to make SIEM data more useful for analysts
* Provisioning resources during incident response (creating new accounts, spinning up new VMs, deleting an infected VDI instance and issuing a clean one)
* Executing automated playbooks

---

## 4. SOAR: Playbook

* **Definition:** A checklist of actions to be performed to detect and respond to a specific type of security incident.

A playbook defines the **steps** — whether manual or automated — that should be taken for a given incident type. For example, a phishing-click playbook might specify: isolate the machine, run a virus scan, check the registry for persistence, back up user data, and reimage the device.

> *Es como la receta escrita de un chef: enumera los pasos exactos a seguir, pero no dice quién los va a cocinar — puede ser el chef mismo (manual) o un robot de cocina (automatizado).*

---

## 5. SOAR: Runbook

* **Definition:** An automated version of a playbook that leaves clearly defined interaction points for human analysis.

A runbook automates most of the playbook's steps but pauses at specific checkpoints so a human analyst can make a judgment call — for example, deciding whether to actually reimage a machine after an automated scan completes.

> *Si el playbook es la receta escrita, el runbook es la máquina de cocina automática que sigue esa receta sola, pero se detiene y te pregunta antes del paso crítico: "¿Confirmas que quiero hornear esto a máxima temperatura?"*

---

## 6. When to Automate and Orchestrate

* **Definition:** The decision framework used to evaluate whether a given process is a good candidate for automation or orchestration, based on complexity, cost, single points of failure, technical debt, and ongoing supportability.

Automation and orchestration are indispensable in a modern IT and cybersecurity environment, but effective deployment requires weighing several factors before implementation. The most effective use of automation and orchestration is for tasks and workflows that are both **repeatable and stable**. One-off, highly variable, or infrequently performed tasks are usually poor candidates.

> *Como decidir si vale la pena comprar una máquina industrial para una tarea: si la vas a repetir todos los días, se paga sola con el tiempo; si la vas a hacer una sola vez cada varios años, es más barato hacerlo a mano.*

**Example — repeatable task:** Migrating 10 user accounts once every few years → do it manually (30 minutes) rather than spending 4–5 hours automating it.

**Example — repeatable task:** Migrating accounts every single day → automate it, since the one-time automation cost pays off quickly through daily time savings.

### When to Automate: Complexity

* **Definition:** A consideration factor evaluating how complex a candidate process is, since automation and orchestration technologies deliver the best return on investment when applied to repetitive, somewhat complex tasks.

A simple nightly backup is a good candidate for **automation** but does not require orchestration. A multi-step incident response workflow (isolate a machine, image the drive, submit to forensics, reformat, reinstall a known-good image, rescan, and return to the network) requires **orchestration**, since it launches multiple automated processes in sequence.

> *Como diferenciar entre un electrodoméstico simple (una tostadora automática) y un sistema completo de una fábrica: entre más complejo el proceso, más justifica invertir en coordinar varias máquinas juntas (orquestación), no solo una.*

### When to Automate: Cost

* **Definition:** A consideration factor weighing the upfront investment required to build automation or orchestration against the long-term efficiency gains and savings they provide.

Automation and orchestration promise long-term savings but typically require a large initial investment in development, service providers, or personnel. Organizations should conduct a **cost-benefit analysis** covering hardware, software, personnel, and ongoing support costs before committing.

> *Como comprar una máquina de coser industrial para un taller: cuesta caro al inicio, pero si vas a coser miles de prendas, se paga sola con el tiempo — a diferencia de coser a mano una sola camisa ocasional.*

### When to Automate: Single Points of Failure

* **Definition:** A risk consideration addressing the danger that essential business processes become fully dependent on automation or orchestration systems, with no fallback if those systems fail.

Organizations often forget to maintain a backup manual process in case an automation or orchestration system breaks. Mitigating this risk requires **redundancy and failover mechanisms** — both technical (backup servers, failover systems) and manual (a documented fallback human process).

> *Como tener un solo puente para cruzar un río: si ese puente colapsa, toda la ciudad queda incomunicada. Siempre conviene tener un camino alterno, aunque sea más lento.*

### When to Automate: Technical Debt

* **Definition:** The accumulated cost and complexity of suboptimal or hastily implemented automation/orchestration solutions that must eventually be addressed or refactored.

Automation and orchestration systems **accumulate technical debt if not properly maintained or if they become outdated**. 
Mitigation: Regular reviews and updates are required to keep these systems aligned with the organization's evolving needs.

> *Como remendar una tubería vieja con cinta adhesiva en vez de reemplazarla: funciona por ahora, pero cada parche acumulado hace que arreglarlo todo bien después cueste mucho más tiempo y dinero.*

### When to Automate: Ongoing Supportability

* **Definition:** The requirement that an organization maintain the skills, training, and processes needed to keep automation and orchestration systems functioning as connected systems, APIs, and webhooks change over time.

Automations frequently rely on interconnections with external systems through APIs and webhooks. When any of those external systems are updated or replaced, it can break the automation. Organizations must ensure their teams have the skills to adapt these systems over time rather than treating automation as a one-time build.

> *Como un carro que necesita mantenimiento constante: comprarlo es solo el primer paso, pero si no le das servicio cuando las piezas se desgastan, eventualmente deja de funcionar.*

---

## 7. Benefits of Automation and Orchestration

* **Definition:** The objective domain covering the operational, financial, and organizational advantages gained by implementing automation and orchestration in secure operations.

There are seven main benefits of using automation and orchestration in an organization.

> *Como los beneficios de instalar semáforos automáticos en una ciudad: no solo hace que el tráfico fluya más rápido, sino que también reduce accidentes, libera policías de tránsito para tareas más importantes, y responde más rápido ante una emergencia.*

### Benefit 1: Increased Efficiency and Time Savings

Repetitive, time-consuming processes (system patching, software deployment, data backups) can run without human intervention, freeing up human resources and reducing the risk of human error.

### Benefit 2: Enforcing Baselines

Automation and orchestration enforce security and compliance baselines consistently across the entire enterprise by defining standardized configurations and policies aligned with industry best practices and regulatory requirements.

### Benefit 3: Standard Infrastructure Configurations

Automation and orchestration help create and enforce standardized infrastructure configurations. If a deviation from the standard is detected, orchestration can trigger automated corrective actions.

### Benefit 4: Scaling in a More Secure Manner

Automation and orchestration allow resources to scale up or down dynamically (provisioning VMs, adjusting access controls) while adhering to security protocols — critical in cloud environments where a human cannot deploy new servers as quickly or as securely as an automated process.

### Benefit 5: Increased Employee Retention

By automating repetitive and mundane tasks, employees can focus on more strategic and creative work, increasing job satisfaction and reducing burnout — which in turn improves retention.

### Benefit 6: Faster Reaction Times

Automation and orchestration allow organizations to detect and respond to incidents in real time, since automated systems are never distracted, tired, or on vacation. Detection and response speed is often the deciding factor between a mitigated threat and a full data breach.

### Benefit 7: Workforce Multiplier

Automation and orchestration augment the capabilities of existing staff, allowing a smaller team to manage a larger and more complex infrastructure, optimizing resource allocation and reducing labor costs over time.

⚠️ **Exam Tip:** Remember all seven benefits as a set: efficiency/time savings, baseline enforcement, standard configurations, secure scaling, employee retention, faster reaction times, and workforce multiplier.

---

## 8. Automating Support Tickets

* **Definition:** The objective domain covering the use of automation to streamline support ticket management, primarily through automated ticket creation and automated ticket escalation.

Automating support ticket management introduces efficiency, consistency, and scalability into a support process that would otherwise be overwhelmed by high ticket volume, leading to delays and lower customer satisfaction.

> *Como una recepción de hospital que automáticamente asigna un número de prioridad a cada paciente que llega según sus síntomas, en lugar de que una sola persona decida manualmente el orden de atención de todos.*

### Automating Support Tickets: Ticket Creation

* **Definition:** The automatic generation of support tickets when users or customers report issues or requests, following a six-step process from submission to notification.

**The six-step ticket creation process:**

1. User/customer submits a request (email, web form, support portal).
2. Automation tool monitors incoming requests and automatically generates a ticket based on predefined criteria (e.g., keywords).
3. The system captures essential information (issue description, contact details, metadata) and attaches it to the ticket.
4. The ticket is automatically categorized based on content or source (e.g., network support vs. software support).
5. A priority is assigned based on predefined rules (urgent issues get higher priority).
6. An automated notification is sent to the relevant support team or technician.

> *Como una banda transportadora en una fábrica de paquetes: cada paquete (ticket) pasa automáticamente por las estaciones de pesaje, etiquetado y clasificación antes de llegar a la persona correcta que lo va a procesar.*

### Automating Support Tickets: Ticket Escalation

* **Definition:** The automated process of ensuring complex or high-priority tickets are addressed by the appropriate personnel, following a five-step process from criteria definition to resolution.

**The five-step ticket escalation process:**

1. The organization defines **escalation criteria** based on issue nature, urgency, and SLA requirements.
2. **Automation rules** are configured to monitor ticket attributes (priority, response time, unresolved status).
3. **Escalation actions** are triggered automatically — notifying a supervisor, reassigning to a higher-level technician, or changing the ticket's priority.
4. **Monitoring and tracking** continues on the escalated ticket to ensure it follows the organization's escalation protocol.
5. **Resolution and closure** — once resolved, the system closes the ticket and notifies the user.

> *Como el protocolo de una sala de emergencias: si un paciente no mejora en el tiempo esperado, automáticamente se avisa a un médico de mayor rango, sin que nadie tenga que acordarse de hacerlo manualmente.*

⚠️ **Exam Tip:** Automating ticket escalation not only ensures critical issues are handled properly but also maintains transparency, accountability, and helps organizations meet their SLA targets.

---

## 9. Automating Onboarding

* **Definition:** The objective domain covering the use of automation to integrate new employees into an organization's systems and culture quickly, efficiently, and with reduced administrative burden — primarily through user provisioning and resource provisioning.

Automating the onboarding process directly impacts productivity, employee satisfaction, and retention by eliminating tedious manual tasks and providing a structured, consistent experience for **new hires**.

> *Como el proceso de check-in automático en un hotel de lujo: en lugar de que un empleado tenga que asignarte manualmente una habitación, la llave y el WiFi uno por uno, el sistema lo hace todo automáticamente apenas confirmas tu reserva.*

**Benefits:**

* speeding up the onboarding process

* reducing errors

* ensuring compliance

* saving time and resources



### Automating Onboarding: User Provisioning

* **Definition:** The automated creation and management of user accounts and access rights to internal systems as part of the onboarding process.

**The user provisioning process:**

1. The new employee's information (personal details, role, department) is collected via an online form or HR system.
2. Automation creates user accounts across systems (email, project management platforms, internal tools).
3. The system automatically assigns the appropriate roles and access levels based on department and position.
4. Automated notifications confirm account creation to the employee, their manager, and IT.
5. The system performs continuous synchronization — automatically reflecting changes (promotions, department transfers) across all connected accounts and permissions.

> *Como una llave maestra que se programa automáticamente para abrir solo las puertas del edificio que corresponden a tu puesto de trabajo, sin que nadie tenga que copiar llaves físicas manualmente.*

### Automating Onboarding: Resource Provisioning

* **Definition:** The automated allocation of physical and digital resources — such as workstations, software licenses, and communication tools — needed for a new employee's role.

**The five-step resource provisioning process:**

1. **Requirements analysis** — the system analyzes the employee's role/department to determine what resources are needed.
2. **Resource allocation** — the system either allocates available inventory or initiates procurement for resources not on hand.
3. **Configuration and customization** — resources are configured for the specific role (e.g., a graphic designer's workstation gets design software; a salesperson gets CRM access).
4. **Verification and auditing** — confirms the provisioning succeeded and keeps inventory/compliance records up to date.
5. **Feedback gathering** — the new employee and manager confirm the resources meet their needs or report gaps.

> *Como equipar automáticamente el kit de herramientas de un nuevo empleado según su oficio: a un electricista le entregan un multímetro, y a un plomero le entregan una llave inglesa — el sistema sabe qué le corresponde a cada quién sin que un supervisor tenga que decidirlo manualmente cada vez.*

---

## 10. Automating Security

* **Definition:** The objective domain covering the use of automation to configure and enforce guardrails, security groups, service access management, and permissions across an organization. (Security measures)

Security automation performs repetitive security tasks that are crucial for protection but time-consuming or prone to human error, ensuring defenses are consistently maintained and threats are responded to swiftly.

> *Como instalar sensores de movimiento y cámaras inteligentes en una casa en lugar de depender de un guardia que puede distraerse: el sistema automatizado nunca se cansa ni se olvida de revisar.*

### Automating Security: Guardrails

* **Definition:** Automated safety controls that protect against insecure infrastructure configurations by enforcing an organization's security standards and preventing deviations that could introduce vulnerabilities.

Guardrails continuously monitor infrastructure configuration and network traffic against established standards. When a violation is detected, the system generates an alert and can take predefined corrective action without waiting for human intervention — such as revoking permissions, reconfiguring a component, or isolating an infected workstation.

> *Como los rieles de contención en una carretera de montaña: no evitan que conduzcas, pero te impiden salirte del camino y caer por el precipicio, corrigiendo automáticamente cualquier desviación peligrosa.*



When a potential security violation is detected, the system will generate an alert and take predefined corrective actions without waiting for human intervention. These actions could involve things like:

* revoking a user's permissions

* reconfiguring an affected component

* isolating a potential infected workstation from the network.



### Automating Security: Security Groups

* **Definition:** Automated management of virtual firewall rule sets applied to cloud-based server instances, specifying which incoming and outgoing traffic is permitted.

Automation assigns instances to the appropriate security group with predefined traffic rules based on function, location, or project. Automated systems can also dynamically adjust security group configurations as threats evolve and analyze traffic to detect unauthorized access attempts.

> *Como asignar automáticamente pulseras de acceso de diferentes colores a los visitantes de un evento: cada color decide a qué áreas puede entrar esa persona, sin que un guardia tenga que decidirlo caso por caso.*

### Automating Security: Service Access Management

* **Definition:** The automated review, monitoring, and control of enabling or disabling services and access to prevent unnecessary exposure to risk while maintaining operational efficiency.

**Automation tools regularly review who has access to what, ensuring employees only retain access necessary for their current role.** If unusual activity is detected, access can be automatically restricted or disabled pending human investigation. Services can also be automatically enabled/disabled on a schedule to reduce the window of exposure to attack.

> *Como apagar automáticamente las luces y cerrar las puertas de las oficinas que nadie está usando fuera del horario laboral: reduces las oportunidades de que alguien entre sin permiso, sin necesitar que un guardia recorra el edificio.*

### Automating Security: Permission Management (RBAC)

* **Definition:** The use of role-based access control (RBAC) automation to consistently assign and manage system permissions based on an individual's assigned organizational role.

Automated provisioning and deprovisioning updates a user's permissions whenever they join, move within, or leave the organization, preventing unauthorized access to sensitive information. Automated routines also perform regular compliance checks on permission settings against internal policy and external regulation.

> *Como una tarjeta de acceso de empleado que se reprograma automáticamente el mismo día que cambias de departamento: ya no abre las puertas de tu antiguo equipo, y automáticamente abre las de tu nuevo puesto.*

---

## 11. Automating Application Development

* **Definition:** The objective domain covering the use of automation and orchestration — primarily through CI/CD — to manage, test, and deploy applications with minimal human intervention, improving efficiency, consistency, and software quality.

Under legacy waterfall development, every step of testing, release, and deployment was performed manually, often taking 3 to 12 months to release software. Modern iterative/Agile development combined with **CI/CD (Continuous Integration/Continuous Delivery or Deployment)** can release features within days — or, in high-velocity organizations, multiple times per day.

> *Como la diferencia entre construir una casa completa antes de mostrarla (metodología waterfall) versus ir mostrando y ajustando cada habitación a medida que se construye (metodología ágil con CI/CD).*

### Automating Application Development: Continuous Integration (CI)

* **Definition:** A software development practice where developers merge their code changes into a central repository multiple times per day, with each check-in automatically verified by an automated build and testing process.

CI provides early notification of integration problems, manages code changes from multiple contributors automatically, executes automated tests immediately after integration, and gives developers rapid feedback so they can correct issues quickly. This constant feedback loop maintains the integrity and functionality of the final application.

> *Como coser en tiempo real cada pieza de tela que llega a una fábrica de ropa en lugar de esperar a que todas las piezas se acumulen al final: si una pieza no encaja, lo sabes de inmediato, no semanas después.*

### Automating Application Development: Release vs. Deployment

* **Definition:** Two related but distinct concepts — a release is the process of finalizing and preparing verified software for delivery into a specific environment; deployment is the automated, consistent process of actually pushing that software into a target environment so it becomes operational.

| Term           | Meaning                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------- |
| **Release**    | Making the software available to be installed and used (a readiness milestone)                 |
| **Deployment** | Actually installing/pushing the software into an environment (testing, staging, or production) |

> *El "release" es como cuando un restaurante anuncia que un platillo nuevo ya está listo en el menú. El "deployment" es el mesero llevando ese platillo específico a la mesa de un cliente.*

### Automating Application Development: Continuous Delivery (CD)

* **Definition:** A CI/CD practice that ensures the code base is always in a deployable state after every change through automated testing and building, **but it does not automatically deploy the changes to the production environment.**.

With continuous delivery, deployment into production remains a **manual, business-driven decision**, giving the team flexibility to decide when to deploy based on timing, market conditions, and stakeholder readiness, while always maintaining a production-ready version of the software.

> *Como tener el carro siempre listo con gasolina llena, revisado y estacionado en la entrada de la casa, pero la decisión de manejar hasta el destino la tomas tú manualmente cuando estés listo.*

### Automating Application Development: Continuous Deployment (CD)

* **Definition:** A CI/CD practice that automatically deploys every code change that **passes all pipeline stages directly into the production environment with no human intervention.**

Continuous deployment ensures identical, error-free deployments and faster release cycles. It relies on **automated rollback features** to revert to a previous known-good state in the event of a failure, which is essential for maintaining service continuity.

> *Es como un carro autónomo que no solo está listo para manejar, sino que también conduce solo hasta el destino sin que tú tengas que tomar el volante — y si detecta un problema en el camino, automáticamente da reversa a un punto seguro.*

| Model                     | Deploys to production automatically? | Human decision point                     |
| ------------------------- | ------------------------------------ | ---------------------------------------- |
| **Continuous Delivery**   | No                                   | Yes — deployment to production is manual |
| **Continuous Deployment** | Yes                                  | No — fully automated end-to-end          |

⚠️ **Exam Tip:** Both models always begin with Continuous Integration. The distinction between Continuous Delivery and Continuous Deployment is whether the final push to production is manual or fully automated.

---

## 12. Integrations and APIs

* **Definition:** The objective domain covering the use of application programming interfaces (APIs) and system integrations to enable interconnectivity and enhanced capability between modern software applications, automations, and orchestrations.

An **integration** is the process of **combining different subsystems or components into one comprehensive system so they function properly together**. Integrations and APIs are the fundamental elements driving efficiency, innovation, and scalability in automation and orchestration, especially in microservice or service-oriented architectures.

> *Como los enchufes universales de un adaptador de viaje: te permiten conectar tu aparato eléctrico a la toma de corriente de cualquier país sin tener que rediseñar el aparato — la API es ese adaptador entre dos sistemas distintos.*

### Integrations and APIs: API

* **Definition:** Application Programming Interface — a set of rules and protocols that allow one product or service to communicate with another in a controlled environment using a specific data exchange format.

APIs act as a library of programming utilities that let developers access another application's functions or features programmatically, enabling administration, management, and monitoring of cloud-based infrastructure without building the underlying service from scratch.

> *Como el menú de un restaurante: no necesitas saber cómo se cocina cada platillo (la lógica interna del sistema), solo necesitas saber qué puedes pedir y cómo pedirlo.*

### Integrations and APIs: REST

* **Definition:** Representational State Transfer — an architectural style for APIs that uses standard HTTP methods, status codes, uniform resource identifiers, and MIME types to interact statelessly with a web service.

REST commonly uses the **JSON** format for data transfer, making it lightweight and easy to integrate into existing websites without extensive modification.

> *Como pedir comida por una aplicación móvil sencilla: haces una solicitud clara y directa, y recibes una respuesta rápida, sin protocolos complicados de por medio.*

### Integrations and APIs: SOAP

* **Definition:** Simple Object Access Protocol — a strict, standardized messaging protocol, typically using XML format with a header and body, used to transport data between two services with strong security and transactional compliance.

SOAP is more robust than REST, offering additional security features and transaction compliance, making it well suited for enterprise-level web services requiring complex transactions and regulatory compliance.

> *Como enviar un documento legal notariado por correo certificado en lugar de un mensaje de texto: es más pesado y formal, pero ofrece garantías de seguridad y validez que un mensaje simple no ofrece.*

| Feature                   | REST                     | SOAP                                                |
| ------------------------- | ------------------------ | --------------------------------------------------- |
| **Data format**           | Typically JSON           | XML                                                 |
| **Weight**                | Lightweight              | Heavier/more structured                             |
| **Security & compliance** | Basic                    | Stronger — built for regulatory/transactional needs |
| **Best use case**         | General web integrations | Enterprise services needing strict compliance       |

### Integrations and APIs: Curl

* **Definition:** A command-line tool, installed by default on Linux and macOS (and installable on Windows), used to transfer data to and from a server over a supported protocol in order to test API functionality.

Curl supports many protocols, including HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP, and FILE — though for testing web APIs, HTTP or HTTPS is most common depending on whether the endpoint is secure.

```bash
# Ejemplo de comando Curl para probar una API:
curl --data "firstname=boolean&lastname=world" https://httpbin.org/post
```

In this example, the command sends the key-value pairs `firstname=boolean` and `lastname=world` to the specified API endpoint. The API typically responds in JSON format, echoing back the arguments and fields received — a useful way to verify that an API integration is functioning correctly during development or a penetration test.

> *Como probar un citófono antes de instalarlo en un edificio completo: presionas el botón manualmente para confirmar que suena del otro lado, antes de confiar en que funcionará automáticamente para todos los residentes.*

---

## 🗝️ Key Terms Glossary

| Term                        | Definition                                                                                           |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Automation**              | Automatically executing individual tasks without manual intervention                                 |
| **Orchestration**           | Coordinated, sequenced execution of multiple automated tasks toward a broader workflow               |
| **SOAR**                    | Security Orchestration, Automation, and Response — SIEM 2.0 for incident response and threat hunting |
| **Playbook**                | A checklist of manual or automated steps to detect and respond to a specific incident type           |
| **Runbook**                 | An automated playbook with defined human checkpoints                                                 |
| **Technical debt**          | Accumulated cost/complexity of suboptimal automation that must be refactored later                   |
| **Single point of failure** | A component whose failure disrupts the entire dependent process                                      |
| **Guardrails**              | Automated controls enforcing security standards and preventing insecure configurations               |
| **Security groups**         | Virtual firewall rule sets controlling traffic to/from cloud instances                               |
| **RBAC**                    | Role-Based Access Control — permissions assigned automatically based on organizational role          |
| **User provisioning**       | Automated creation/management of user accounts and access rights                                     |
| **Resource provisioning**   | Automated allocation of physical/digital resources needed for a role                                 |
| **CI**                      | Continuous Integration — frequent automated merging, building, and testing of code                   |
| **Continuous Delivery**     | CI/CD model where production deployment remains a manual decision                                    |
| **Continuous Deployment**   | CI/CD model where every passing change deploys to production automatically                           |
| **Release**                 | Preparing verified software for delivery to an environment                                           |
| **Deployment**              | Actually installing/pushing software into a target environment                                       |
| **API**                     | Application Programming Interface — rules/protocols enabling two systems to communicate              |
| **REST**                    | Representational State Transfer — lightweight, stateless API architecture, typically JSON            |
| **SOAP**                    | Simple Object Access Protocol — strict, XML-based, security/compliance-focused API protocol          |
| **Curl**                    | Command-line tool for transferring data to/from a server to test API endpoints                       |


