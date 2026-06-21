# 🛡️ CompTIA Security+ — Section 15

## Security Architecture | Study Summary

> **Keywords:** Cloud · On-Premise · Virtualization · Containerization · Serverless · Microservices · SDN · IaC · IoT · ICS/SCADA · Embedded Systems

---

## 1. On-Premise vs. Cloud Deployments

* **Definition:** Two opposing models for hosting IT infrastructure — on-premise keeps hardware and services physically inside the organization's own facilities, while cloud computing delivers servers, storage, databases, networking, and software as services over the internet.

> *Es como comparar tener tu propia casa (on-premise: tú la construyes, la reparas y la cuidas) contra vivir en un apartamento alquilado en un edificio con administración (cloud: el dueño del edificio se encarga del mantenimiento, la plomería y la seguridad general, pero tú sigues siendo responsable de cerrar tu puerta con llave).*

### On-Premise Solutions

* **Definition:** Computing infrastructure physically located on-site, fully owned and maintained by the business itself (hardware, software updates, security measures, upgrades).
* Example: a small law firm keeps all client data on local servers to retain full control over sensitive legal documents.
* Benefit: complete control over data, no third-party exposure, immediate access.

### Cloud Computing — Sub-Concepts

#### Responsibility Matrix

* **Definition:** A document/agreement that outlines which security and management tasks belong to the cloud service provider versus the customer; the split varies by service model (IaaS, PaaS, SaaS).

> *Es como un contrato de alquiler que dice claramente: "el edificio se encarga del agua y la electricidad (proveedor), pero tú te encargas de cerrar con llave y de no dejar la estufa encendida (cliente)."*

#### Third-Party Vendors

* **Definition:** External companies that provide specialized cloud-supporting services such as management tools, security solutions, or analytics (e.g., CloudHealth by VMware for cost management and governance).

> *Son como los contratistas externos que el edificio llama para tareas específicas: el técnico de cámaras, el de fumigación, el de jardinería — no son parte del staff fijo, pero el edificio depende de ellos.*

#### Hybrid Solutions

* **Definition:** An architecture combining on-premise infrastructure with private and public cloud services, allowing workloads to move between environments based on need (data security, compliance, interoperability, cost).
* Example: a healthcare organization keeps patient data on-premise (HIPAA compliance) but uses the cloud for email hosting and data analysis.

> *Es como tener una caja fuerte en tu propia casa para las joyas más valiosas, pero rentar una bodega externa para guardar los muebles que usas poco — usas el lugar correcto según qué tan sensible o voluminoso sea lo que guardas.*

### Key Considerations in Cloud Computing

| Consideration | Meaning |
| --- | --- |
| **Availability** | System can be accessed when needed (e.g., AWS S3/EC2 SLA of 99.99% uptime) |
| **Resilience** | Ability to recover from failures via distributed/redundant infrastructure (e.g., GCP storage survives simultaneous data center failures) |
| **Cost** | Lower upfront cost but ongoing usage-based costs can add up (pay-as-you-go vs. reserved instances) |
| **Responsiveness** | Speed at which resources adapt to demand changes (e.g., Azure auto-scaling during a sale) |
| **Scalability** | Ability to handle increased workload without infrastructure limits (e.g., Netflix scaling on AWS) |
| **Ease of Deployment** | Cloud services set up in minutes/hours without physical installation (e.g., Shopify) |
| **Risk Transference** | Some risk shifts to the provider, but customer still owns data/app security (e.g., Salesforce) |
| **Ease of Recovery** | Built-in backup/recovery reduces data loss risk (e.g., Dropbox file recovery) |
| **Patch Availability** | Provider regularly issues patches automatically (e.g., Office 365 updates) |
| **Inability to Patch** | Compatibility issues or lack of environment control can block patching (e.g., legacy apps in the cloud) |
| **Power** | Provider manages power supply/infrastructure, reducing customer burden |
| **Compute** | The CPU, memory, and storage resources available to the customer (AWS offers multiple instance tiers) |

> *Estos puntos son como la lista de preguntas que harías antes de mudarte a un edificio nuevo: ¿hay luz todo el tiempo? ¿qué pasa si se cae un piso? ¿cuánto me cuesta el mantenimiento? ¿puedo crecer si tengo más muebles? — cada una pesa distinto según tus necesidades.*

---

## 2. Cloud Security

* **Definition:** The set of security considerations and threats specific to cloud environments, arising from shared infrastructure, multi-tenancy, and provider/customer shared responsibility.

> *Es como vivir en un edificio de apartamentos: aunque tengas tu propia puerta con llave, si el edificio entero tiene mala seguridad en la entrada principal, el riesgo te afecta a ti también — la seguridad de la nube es responsabilidad compartida.*

### Cloud Security Threats

| Threat | Description | Mitigation |
| --- | --- | --- |
| **Shared Physical Server Vulnerabilities** | Multiple tenants share the same physical server; a compromise can spill over | Hypervisor protection, secure multi-tenancy, regular vulnerability scanning/patching |
| **Inadequate Virtual Environment Security** | Weak VM security can lead to unauthorized access/breaches | Secure VM templates, regular patching, monitoring, network segmentation |
| **User Access Management** | Weak passwords, excessive permissions, lack of monitoring | Strong password policies, MFA, least privilege, activity monitoring |
| **Lack of Up-to-Date Security Measures** | Dynamic cloud environments leave systems vulnerable if not maintained | Regular patching, policy review, staying current on threats |
| **Single Points of Failure** | Reliance on one resource/process causes total outage | Redundancy, failover procedures, multiple servers/providers |
| **Weak Authentication & Encryption Practices** | Allows unauthorized access or exposes data in transit/storage | MFA, strong encryption algorithms, secure key management |
| **Unclear Policies** | Lack of clear guidelines for data handling, access control, incident response | Comprehensive, regularly reviewed policies + employee training |
| **Data Remnants** | Residual data left behind after deletion due to inadequate processes | Secure deletion methods, secure backup management, deletion verification |

> *Cada amenaza es como una grieta distinta en la seguridad de un edificio: una puerta sin llave (acceso débil), un guardia dormido (falta de actualizaciones), o basura mal desechada con documentos sensibles todavía legibles (data remnants).*

---

## 3. Virtualization and Containerization

* **Definition:** Virtualization emulates full servers (each with its own OS) on shared physical hardware via a hypervisor; containerization is a lighter alternative that encapsulates an application and its dependencies in an isolated container sharing the host OS kernel.

> *La virtualización es como construir varios apartamentos completamente independientes dentro de un edificio (cada uno con su propia cocina y baño). La contenedorización es más como rentar cuartos en una casa de huéspedes: cada inquilino tiene su espacio privado, pero todos comparten la misma cocina y plomería central (el kernel del sistema operativo).*

### Hypervisors

* **Definition:** Software that manages distribution of a physical server's resources (CPU, memory, disk) among virtual machines.

| Type | Also Known As | Runs On | Examples | Performance |
| --- | --- | --- | --- | --- |
| **Type 1** | Bare metal / native hypervisor | Directly on host hardware | Microsoft Hyper-V, Citrix XenServer, VMware ESXi/vSphere | Faster, more efficient |
| **Type 2** | Hosted hypervisor | Within a standard OS (Windows/Mac/Linux) | VirtualBox, VMware Workstation | Slower (OS overhead) |

> *Un hipervisor tipo 1 es como un edificio diseñado desde cero solo para apartamentos — ultra eficiente. Uno tipo 2 es como subdividir una casa familiar ya existente para meter inquilinos — funciona, pero hay más "desperdicio" de espacio y recursos.*

### Containerization

* **Definition:** A method of running applications in isolated user spaces (containers) that share the host's OS kernel but bundle the application with all its dependencies.
* Benefits: efficiency/speed, portability, scalability, isolation, consistency.
* Popular technologies: Docker, Kubernetes, Red Hat OpenShift.

### Virtualization Vulnerabilities

| Vulnerability | Description | Mitigation |
| --- | --- | --- |
| **VM Escape** | Attacker breaks out of an isolated VM to interact directly with the hypervisor, potentially pivoting to other VMs | Host VMs of the same classification/segment together; keep hypervisor patched |
| **Privilege Elevation** | User grants themselves higher privileges; catastrophic if achieved at the hypervisor level | Stay current on hotfixes/service packs |
| **Live VM Migration** | Moving a VM between physical hosts can be intercepted (adversary-in-the-middle) since transmitted data is unencrypted | Encrypt migration traffic, secure the migration path |
| **Resource Reuse** | Memory/storage not properly cleared before reassignment can expose previous tenant's data | Secure resource clearing/reset procedures |
| **VM Sprawl** | VMs created/deployed without proper oversight, becoming hard to track | Inventory tracking, governance, patch compliance auditing |
| **Containerization OS Risk** | All containers share one OS; compromising that OS puts every hosted application at risk | OS hardening and patching |

### Securing Virtual Machines

- Keep operating systems, applications, and hypervisors patched/updated
- Install antivirus + software firewall on each VM, enforce strong passwords/policies
- Limit connections between VMs and physical machines (virtual network cords/shares) to preserve isolation
- Distribute VMs across multiple physical servers to limit denial-of-service blast radius
- Track VMs to avoid VM sprawl
- Encrypt the files that host the VMs

> *Asegurar una máquina virtual es básicamente aplicar las mismas reglas de seguridad de un servidor físico normal — actualizaciones, antivirus, contraseñas fuertes — pero además cuidando que los "apartamentos virtuales" no compartan tuberías que permitan que un problema en uno afecte a los demás.*

---

## 4. Serverless Computing

* **Definition:** A cloud execution model where the cloud provider dynamically manages server provisioning and allocation; developers write and deploy individual functions triggered by events, without managing servers directly (function-as-a-service).

> *Es como pedir comida a domicilio en lugar de tener tu propia cocina: no te preocupas por comprar la estufa, mantener el gas o limpiar — solo "activas" el pedido (la función) cuando lo necesitas, y pagas solo por lo que consumes.*

### Examples

- **AWS Lambda** — runs code without provisioning/managing servers, auto-scales to demand
- **Google Cloud Functions** — single-purpose functions triggered by cloud service events

### Benefits

- Reduced operational cost (pay only for compute time used)
- Automatic scaling precisely matched to workload
- Developers focus on code, not server/runtime management → faster time to market

### Risks / Challenges

- **Vendor Lock-in:** reliance on a provider's proprietary interfaces makes switching providers difficult
- **Immaturity of Best Practices:** serverless is a relatively new field, so standardized practices are still evolving

---

## 5. Microservices

* **Definition:** An architectural style that structures an application as a collection of small, autonomous, independently-running services, each modeled around a specific business function, communicating through lightweight mechanisms.

> *Es como pasar de un solo restaurante gigante que hace de todo (cocina, caja, limpieza, todo mezclado y si algo falla cierra el local entero) a un food court donde cada puesto es independiente: si el puesto de pizza tiene un problema, los demás puestos siguen funcionando normalmente.*

### Real-World Example

Netflix migrated from a monolithic architecture to microservices to handle scale — separate microservices now handle recommendations, signups, video encoding, etc.

### Benefits

| Benefit | Description |
| --- | --- |
| **Scalability** | Each service scales independently based on its own demand |
| **Flexibility** | Services can use different languages/data stores and be managed by different teams |
| **Resilience** | Failure of one service does not bring down the entire system |
| **Faster Deployment/Updates** | Services deploy and update independently, reducing release risk |

### Challenges

| Challenge | Description |
| --- | --- |
| **Complexity** | Managing inter-service communication, data consistency, distributed testing |
| **Data Management** | Each service may have its own database, complicating cross-service consistency |
| **Network Latency** | Increased inter-service communication slows response times |
| **Security** | More services communicating over a network = larger attack surface |

---

## 6. Network Infrastructure — Physical vs. Logical Separation

* **Definition:** Network infrastructure is the hardware, software, services, and facilities that support an enterprise network; its components can be separated either physically or logically to control access and contain risk.

> *Es como decidir entre construir un muro físico de concreto alrededor de un edificio (separación física) versus simplemente poner reglas y guardias en las puertas internas que dicen quién puede pasar a qué piso (separación lógica).*

### Physical Separation (Air Gapping)

* **Definition:** Completely isolating a system from other networks (local and internet) by removing all direct/indirect connections, including wireless.
* Examples: military/government classified networks; ICS systems in power plants or water treatment facilities.
* ⚠️ **Not infallible** — sophisticated attacks like **Stuxnet** have demonstrated that air-gapped systems can still be compromised.

### Logical Separation

* **Definition:** Creating boundaries within a shared network using firewalls, VLANs, and other rule-based network devices to restrict access between segments.
* Examples: VLANs segregating HR traffic from Marketing traffic on the same physical network; firewalls creating a **screened subnet** to separate external-facing services from the internal network.
* Easier to implement and more flexible than physical separation, but less secure — misconfigured firewalls/VLANs can be exploited.

---

## 7. Software-Defined Networking (SDN)

* **Definition:** An approach to network management that enables dynamic, programmatic, and centralized network configuration by decoupling the network's control functions from its forwarding functions.

> *Es como pasar de un edificio donde cada piso tiene su propio panel eléctrico independiente y manual, a un sistema central inteligente donde un solo panel controla y reprograma la electricidad de todo el edificio desde un solo lugar.*

### The Three Planes of SDN

| Plane | Role |
| --- | --- |
| **Data Plane** (forwarding plane) | Physically moves packets between devices using protocols like IP/Ethernet |
| **Control Plane** | The centralized "brain" that decides where traffic is sent (replaces per-router control logic) |
| **Application Plane** | Hosts network applications that instruct the controller on desired behavior |

### Real-World Examples

- **Google's B4 Project** — uses SDN to manage data center network bandwidth efficiently
- **AT&T Domain 2.0 Initiative** — transforms AT&T's network into an SDN to cut costs and automate management

---

## 8. Infrastructure as Code (IaC)

* **Definition:** Automating the provisioning and management of computing resources through machine-readable definition files or scripts (e.g., YAML, JSON, HCL) instead of manual configuration.

> *Es como tener una receta de cocina escrita con precisión exacta en lugar de improvisar cada vez: si sigues la misma receta, el platillo sale idéntico cada vez, sin importar quién la cocine o cuántas veces se repita.*

### Idempotence

* **Definition:** The property of an operation producing the same result no matter how many times it is executed, regardless of the system's initial state.

> *Es como tener un control remoto que siempre deja la TV en el canal 5 sin importar en qué canal estaba antes — el resultado final es siempre el mismo, sin importar el punto de partida.*

### Goal: Eliminating Snowflake Systems

* **Definition:** A "snowflake" is a system configuration/build that is unique and inconsistent with others, introducing risk through unpredictability.

### Benefits

- Speed and efficiency in provisioning/deprovisioning
- Consistency and standardization across environments
- Scalability through easy replication of setups
- Cost savings from reduced manual configuration
- Auditability and compliance (code is versioned and reviewable)

### Challenges

- Learning curve — requires new skills and a shifted mindset
- Complexity as IaC scope grows (mitigated by modularization/documentation)
- Security risks — sensitive data or insecure configs can be inadvertently exposed in code files

---

## 9. Centralized vs. Decentralized Architectures

* **Definition:** Centralized architecture coordinates and manages all computing functions from a single location/authority; decentralized architecture distributes computing functions across multiple independent systems or locations with no single point of control.

> *Centralizado es como una sola oficina matriz que toma todas las decisiones para todas las sucursales. Descentralizado es como darle autonomía a cada sucursal para que opere y decida por su cuenta, sin depender de una sola oficina central.*

### Centralized Architecture

| Benefits | Risks |
| --- | --- |
| Efficiency and control over resources | Single point of failure (central server failure disrupts entire network) |
| Consistency and accuracy of information | Scalability issues as the organization grows |
| Cost-effective maintenance (one system) | Attractive, high-value target for cyber-criminals |

### Decentralized Architecture

| Benefits | Risks |
| --- | --- |
| Resiliency — one node failing doesn't stop the system | Security risks from more entry points (e.g., remote connections) |
| Scalability — new nodes added easily | Management challenges — complex coordination across nodes |
| Flexibility — supports remote work/distributed teams | Data inconsistency across nodes / synchronization issues |

---

## 10. Internet of Things (IoT)

* **Definition:** A network of physical devices, vehicles, appliances, and other items embedded with sensors, software, and network connectivity that allows them to connect and exchange data in near real time.

> *Es como una casa donde cada electrodoméstico tiene "boca y oídos" propios y puede hablar con los demás: el refrigerador le avisa al control central que falta leche, y el control central enciende las luces cuando detecta movimiento.*

### Hub / Control System

* **Definition:** The central point that connects all IoT devices, collecting, processing, and analyzing their data, then sending commands back. Can be a physical device (Amazon Echo, Google Home) or a software platform (an app).

### Smart Devices

* **Definition:** Everyday objects enhanced with computing capability and internet connectivity, able to sense their environment, process data, and act without human intervention (e.g., a smart refrigerator suggesting recipes and ordering groceries).

### Wearables

* **Definition:** A subset of smart devices designed to be worn on the body, monitoring health/fitness metrics and providing hands-free interaction (e.g., smartwatches, fitness trackers, VR/AR headsets).

### Sensors

* **Definition:** Devices that detect environmental changes (temperature, humidity, light, motion, pressure, chemical composition) and convert them into data for processing — the "eyes and ears" of the IoT ecosystem.

> *El hub es el cerebro, los dispositivos inteligentes son las manos, los wearables son lo que llevas puesto, y los sensores son los ojos y oídos — juntos forman un cuerpo completo que percibe y actúa sobre su entorno.*

### IoT Security Risks

- **Weak default settings** — default usernames/passwords that are easy to guess or widely known
- **Poorly configured network services** — open ports, unencrypted communication, unnecessary exposed services
- ⚠️ **Mitigation:** keep IoT devices on a separate, segmented network

---

## 11. ICS and SCADA

* **Definition:** Industrial Control Systems (ICS) are control systems used to monitor and manage industrial processes (electrical, water, oil, gas, manufacturing); SCADA (Supervisory Control and Data Acquisition) is a subset of ICS used specifically for geographically dispersed industrial processes.

> *ICS es como el sistema de control de una sola fábrica. SCADA es como el sistema de control de toda una red de fábricas y plantas repartidas en distintas ciudades, todas supervisadas y coordinadas desde un mismo centro de mando remoto.*

### ICS Components

| Component | Description |
| --- | --- |
| **Distributed Control Systems (DCS)** | Control production systems within a single location |
| **Programmable Logic Controllers (PLC)** | Control specific processes such as assembly lines |

### SCADA Examples

- Electrical power generation, transmission, and distribution systems
- Water treatment and distribution systems
- Oil and gas pipeline monitoring and control systems

### Risks and Vulnerabilities

| Risk | Description |
| --- | --- |
| **Unauthorized Access** | Inadequate protection allows manipulation of system operations |
| **Malware Attacks** | Malware can disrupt industrial operations |
| **Lack of Updates** | Many ICS/SCADA systems run outdated, unpatched software |
| **Physical Threats** | Susceptible to physical damage to hardware/infrastructure |

> ⚠️ ICS and SCADA systems were originally designed for isolated environments where security was not a primary concern; modern digitalization and connectivity now expose them to cyber threats they were never built to resist.

### Securing ICS and SCADA

- Implement strong access control (strong passwords, MFA, least privilege)
- Regularly update and patch systems
- Use firewalls and intrusion detection systems
- Conduct regular security audits
- Provide employee security training

---

## 12. Embedded Systems

* **Definition:** A specialized computing component designed to perform one or two dedicated functions within a larger mechanical or electrical device, integrating both hardware and (often) mechanical elements.

> *Es como un empleado ultra-especializado que solo sabe hacer una tarea a la perfección (por ejemplo, solo controlar el airbag de un carro), a diferencia de una computadora normal que es como un empleado generalista que puede hacer de todo un poco.*

### Examples

- Consumer electronics: smartphones, digital cameras, washing machines, microwaves
- Automotive: engine control, anti-lock braking systems, airbag deployment
- Healthcare: pacemakers, insulin pumps, imaging systems
- Industrial: automation, process control, robotics

### Real-Time Operating System (RTOS)

* **Definition:** An operating system designed for real-time applications, processing data as it arrives — typically without buffering delays — ensuring timely, predictable execution for time-sensitive applications (e.g., flight navigation, medical equipment).

> *Un RTOS es como un mesero de restaurante de comida rápida que debe atender cada orden en el momento exacto en que llega, sin acumular pedidos en una fila de espera — la rapidez y el tiempo de respuesta son críticos.*

### Embedded System Risks

| Risk | Description |
| --- | --- |
| **Hardware Failure** | Embedded systems often operate in harsh environments, prone to physical failure |
| **Software Bugs** | Can cause malfunctions and safety risks |
| **Security Vulnerabilities** | Can be targeted by attackers for unauthorized access or disruption |
| **Outdated Systems** | Long operational lifespans lead to outdated, more vulnerable software/hardware |

### Securing Embedded Systems

#### Network Segmentation
* **Definition:** Dividing a network into multiple segments/subnets so a breach in one segment doesn't automatically grant access to others.

#### Wrappers
* **Definition:** Protective measures (e.g., IPsec) applied to data in transit so that an interceptor can only see the wrapper's header (entry/exit points), not the actual data — useful when data crosses an unsecured network.

#### Firmware Code Control
* **Definition:** Managing and controlling the low-level software that operates device hardware, using secure coding practices, code reviews, automated testing, secure boot mechanisms, and cryptographic signatures to ensure only authorized firmware runs.

#### Inability to Patch
* **Definition:** A major embedded-system challenge where downtime is unacceptable, devices are physically hard to reach, or systems were never designed with update mechanisms in mind.
* Mitigation: **over-the-air (OTA) updates** — patches delivered and installed remotely, requiring careful planning and robust security to avoid introducing new vulnerabilities during the update.

> *Asegurar un sistema embebido es como blindar un reloj suizo que nunca se puede abrir fácilmente: divides sus engranajes en compartimentos (segmentación), envuelves sus piezas sensibles (wrappers), controlas quién fabrica sus repuestos internos (firmware), y buscas formas de darle mantenimiento sin tener que desarmarlo por completo (actualizaciones remotas).*

---

## 13. Key Terms

| Term | Definition |
| --- | --- |
| **Hypervisor** | Software that manages distribution of physical server resources among virtual machines |
| **VM Escape** | An attack where a process breaks out of VM isolation to access the hypervisor |
| **Snowflake System** | A uniquely configured system inconsistent with standardized builds, introducing risk |
| **Idempotence** | Property where repeated execution of an operation always yields the same result |
| **Air Gap** | Physical isolation of a system from all other networks |
| **Screened Subnet** | A logically separated subnetwork hosting external-facing services, isolated from the internal network |
| **RTOS** | Real-Time Operating System — processes data as it arrives with predictable, minimal delay |
| **OTA Update** | Over-the-Air update — remote delivery and installation of patches |
| **FaaS** | Function as a Service — the operating model underlying serverless computing |

---
