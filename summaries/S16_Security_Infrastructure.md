# 🛡️ CompTIA Security+ — SY0-701 (Dion Training)

## Section 16: Security Infrastructure | Study Summary

> **Keywords:** Ports · Protocols · Firewalls · ACL · IDS · IPS · Network Appliances · Port Security · 802.1x · EAP · VPN · IPSec · TLS · SD-WAN · SASE · Infrastructure Controls

---

## 1. Security Infrastructure Overview

* **Definition:** The cohesive combination of hardware, software, networks, data, and policies working together to safeguard an organization's information and assets.

Security infrastructure encompasses every layer of a network from the physical devices to the policies that govern their use. Ensuring a robust and secure infrastructure is vital to thwart potential cyber threats and keep organizational data uncompromised. This section covers **Domains 3 and 4**, specifically **Objectives 3.2** (apply security principles to secure enterprise architecture) and **4.5** (modify enterprise capabilities to enhance security).

> *Es como la infraestructura de un edificio: no solo los muros y las puertas, sino también las cámaras, las llaves, los guardias y los reglamentos internos. Todos trabajan juntos para que el edificio sea seguro.*

---

## 2. Ports and Protocols

* **Definition:** A port is a logical communication endpoint on a computer or server that allows inbound or outbound network traffic; a protocol is the defined set of rules and conventions governing that communication.

Ports are classified as **inbound** (the device is listening for a connection) or **outbound** (the device opens a temporary port to initiate a connection). Port numbers range from 0 to 65,535 and are divided into three groups:

| Group | Range | Description |
| --- | --- | --- |
| **Well-Known Ports** | 0 – 1,023 | Designated by IANA for commonly used protocols (e.g., HTTP port 80) |
| **Registered Ports** | 1,024 – 49,151 | Used by vendors for proprietary protocols; must be registered with IANA |
| **Dynamic / Private Ports** | 49,152 – 65,535 | Used by clients for temporary outbound connections; no registration required |

> *Los puertos son como las puertas numeradas de un edificio de apartamentos: cada puerta lleva a un servicio específico. Algunos números todos los conocen (puerta 80 = recepción web), otros los reservan empresas, y otros los usan los visitantes temporalmente al entrar.*

### Key Ports Reference Table

| Port(s) | Protocol | Transport | Description |
| --- | --- | --- | --- |
| 21 | FTP | TCP | File Transfer Protocol — file transfer between hosts |
| 22 | SSH / SCP / SFTP | TCP | Secure remote access, secure copy, and secure file transfer |
| 23 | Telnet | TCP | Unencrypted remote access (legacy, insecure) |
| 25 | SMTP | TCP | Sending email |
| 53 | DNS | TCP / UDP | Translates domain names to IP addresses |
| 69 | TFTP | UDP | Trivial file transfer; used with network-based OS |
| 80 | HTTP | TCP | Unencrypted web traffic |
| 88 | Kerberos | UDP | Network authentication protocol |
| 110 | POP3 | TCP | Retrieve email from server |
| 119 | NNTP | TCP | Access to newsgroups |
| 135 | RPC | TCP / UDP | Communication between system processes (Windows file sharing) |
| 137–139 | NetBIOS | UDP / TCP | Windows local network naming, file, and printer sharing |
| 143 | IMAP | TCP | Access email messages on a server |
| 161 | SNMP | UDP | Manage network devices |
| 162 | SNMP Traps | UDP | Receive SNMP trap alert messages |
| 389 | LDAP | TCP | Directory services |
| 443 | HTTPS | TCP | Encrypted web browsing (TLS) |
| 445 | SMB | TCP | File and printer sharing over a network |
| 465 / 587 | SMTPS | TCP | Secure email sending (SSL/TLS) |
| 514 | Syslog | UDP | Send log messages |
| 636 | LDAPS | TCP | Encrypted LDAP (SSL/TLS) |
| 993 | IMAPS | TCP | Secure IMAP (SSL/TLS) |
| 995 | POP3S | TCP | Secure POP3 (SSL/TLS) |
| 1433 | Microsoft SQL | TCP | SQL Server communications |
| 1645 / 1646 | RADIUS | TCP | Remote authentication, authorization, accounting |
| 1812 / 1813 | RADIUS | UDP | Remote authentication, authorization, accounting (UDP version) |
| 3389 | RDP | TCP | Remote Desktop Protocol |
| 6514 | Syslog TLS | TCP | Encrypted Syslog |

⚠️ **Exam Tip:** You will not be asked directly "what port does SSH use?" but you *will* see scenario questions where knowing ports is required — e.g., why a firewall is blocking a connection or which port to open/close.

---

## 3. Firewalls

* **Definition:** A network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules to protect a network from unauthorized access and threats.

Firewalls can be **hardware appliances** or **software** installed on a client or server. Their primary role is to inspect and control traffic at a network boundary. Placing a firewall at a segment boundary creates a **Screened Subnet** (formerly called a DMZ), acting as a protective buffer between untrusted external networks and trusted internal ones.

> *Un firewall es como el portero de un edificio de oficinas: revisa a cada visitante antes de dejarlo entrar, y solo permite pasar a quienes tienen una razón legítima.*

### Types of Firewalls

| Firewall Type | OSI Layer | How it works | Trade-off |
| --- | --- | --- | --- |
| **Packet Filtering** | Layer 4 | Inspects only the packet header (IP + port); similar to a router ACL | Fast but cannot prevent IP spoofing or fragmentation attacks |
| **Stateful** | Layer 4–5 | Tracks connection state; remembers outbound requests to validate return traffic | More secure than packet filtering; slight performance impact |
| **Circuit-Level Proxy** (SOCKS) | Layer 5 | Proxies at the session layer without inspecting payload content | Limited inspection depth |
| **Application-Level Proxy** | Layer 7 | Deep packet inspection per application type (HTTP vs FTP handled differently) | High security but slower; best placed close to the application server |
| **Kernel Proxy** | All layers | Full inspection at every layer with minimal performance impact | Complex; should be placed close to protected system |

### Advanced / Modern Firewall Types

| Type | Acronym | Key Characteristics |
| --- | --- | --- |
| **Next-Generation Firewall** | NGFW | Application-aware, signature-based IPS inline, deep packet inspection, full-stack visibility, fast; may create vendor lock-in |
| **Unified Threat Management** | UTM | Single appliance combining firewall, AV, IPS, VPN, content filtering, DLP; lower cost but single point of failure |
| **Web Application Firewall** | WAF | Inspects HTTP/HTTPS traffic; prevents XSS and SQL injection; can be inline (blocks live attacks) or out-of-band (detect-only, like IDS) |

⚠️ **Key distinction:** NGFW uses a single efficient engine per function; UTM uses separate engines per function — NGFW wins on performance. UTM wins on cost and simplicity.

---

## 4. Configuring Firewalls — ACLs

* **Definition:** An Access Control List (ACL) is a rule set placed on a firewall, router, or network device that permits or denies traffic through an interface based on defined criteria.

ACL rules are processed **top-down** — the first matching rule wins and the rest of the list is skipped. For this reason, **specific rules go at the top; generic rules go at the bottom**. Most devices support an **implied deny** at the bottom, but best practice is to always add an **explicit deny-all** final rule and to **log all actions**, including denies.

> *Las ACLs son como la lista de invitados en una fiesta VIP: el portero revisa de arriba hacia abajo. Si tu nombre aparece en el primer ítem, entras. Si llegas al final de la lista y no estás, te quedás afuera.*

### ACL Rule Components

| Component | Description |
| --- | --- |
| **Type of traffic** | Protocol (TCP, UDP, ICMP, etc.) |
| **Source** | Origin IP address or range |
| **Destination** | Destination IP address or range |
| **Action** | Permit or Deny |

**Configuration environments:** Hardware firewalls (web-based GUI), Windows Defender Firewall with Advanced Security (GUI or command-line), Mac OS Firewall (System Preferences → Security → Firewall), Linux (PF, IPFW).

---

## 5. Intrusion Detection System (IDS)

* **Definition:** A security system that monitors network or host activity to detect unauthorized access or attacks, then logs and alerts on findings without actively blocking them.

An IDS **detects, logs, reports, and alerts** — it does **not** prevent attacks. When it finds something suspicious, it notifies an administrator or analyst who then decides how to respond.

> *Un IDS es como una cámara de seguridad con alarma: ve lo que pasa y avisa, pero no puede detener al intruso físicamente.*

### IDS Types by Placement

| Type | Acronym | What it monitors |
| --- | --- | --- |
| **Network-based IDS** | NIDS | Traffic on the network segment; connected to a SPAN/mirror port on a backbone switch |
| **Host-based IDS** | HIDS | Traffic to/from a single server or endpoint plus suspicious processes and file access |
| **Wireless IDS** | WIDS | Wireless network attacks: flooding, disassociation, de-authentication attacks |

### IDS Detection Methods

| Method | How it works | Weakness |
| --- | --- | --- |
| **Signature-based** | Matches traffic against a database of known attack signatures | Requires frequent updates; ineffective against zero-day attacks |
| **Anomaly-based** (behavioral) | Compares traffic to a normal baseline; flags deviations | Higher rate of false positives |

**Signature-based sub-types:**
- **Pattern-matching** — recognizes specific attack step sequences; common in NIDS and WIDS
- **Stateful-matching** — compares against a known system baseline; common in HIDS

**Anomaly-based sub-types:** statistical, protocol, traffic, rule/heuristic, application-based.

---

## 6. Intrusion Prevention System (IPS)

* **Definition:** A security system that monitors network or host activity for malicious behavior and actively takes action to block or stop detected threats, in addition to logging and alerting.

An IPS does everything an IDS does, **plus it takes action** — blocking traffic, terminating connections, or removing wireless clients. Placement matters: a **NIPS** should be placed **inline just behind the firewall** (in the traffic path) so it can block threats. A **NIDS** connects via a **mirrored port** (passive, out of path).

> *Si el IDS es la cámara con alarma, el IPS es el guardia de seguridad que actúa: ve la amenaza y la detiene en el momento.*

⚠️ **Key risk with IPS:** False positives block legitimate traffic; false negatives allow real threats through. Tuning is critical.

| Behavior | IDS | IPS |
| --- | --- | --- |
| Detect and alert | ✅ | ✅ |
| Log events | ✅ | ✅ |
| Block / take action | ❌ | ✅ |
| Placement | Mirror/SPAN port (passive) | Inline (in traffic path) |

---

## 7. Network Appliances

* **Definition:** Dedicated hardware devices with pre-installed software designed to perform specific networking services — such as load balancing, proxying, monitoring, or access control — within a network infrastructure.

> *Los appliances de red son como los electrodomésticos especializados de una cocina profesional: cada uno tiene un trabajo específico que hace mejor que una cocina doméstica genérica.*

### Load Balancers

* **Definition:** A network appliance that distributes incoming network or application traffic across multiple servers to optimize performance, prevent overload, and ensure high availability.

Load balancers perform **continuous health checks** on servers; if one fails, traffic is redirected to remaining servers. An advanced version is the **Application Delivery Controller (ADC)**, which adds SSL termination, HTTP compression, and content caching on top of basic load distribution.

### Proxy Servers

* **Definition:** An intermediary server that sits between clients and servers to handle requests on behalf of clients, providing content caching, request filtering, login management, and security functions.

Proxy servers cache responses to reduce bandwidth, enforce organizational policies, mask internal endpoints (protecting against direct attacks), and can route traffic to maintain data sovereignty compliance. They also contribute to load balancing by distributing requests across servers.

### Network Sensors

* **Definition:** Devices or software that continuously monitor, detect, and analyze traffic and data flow across the network to identify unusual activity, security breaches, or performance issues in real time.

Sensors feed data into IDS/IPS systems. They track performance anomalies (traffic spikes, service degradation), trigger alerts for the network operations team, and can detect early indicators of attacks like DDoS attempts from unknown IP addresses.

### Jump Servers (Jump Boxes)

* **Definition:** A dedicated, hardened gateway server that system administrators use to securely access devices located in different security zones within a network.

Jump servers provide a **single controlled access point** for administrative tasks, reducing the attack surface by preventing direct access to sensitive internal systems. They also **centralize logging** of all administrative activity, making audits and incident response significantly faster. Jump boxes are heavily secured with advanced monitoring software and typically host administrative tools and scripts needed for routine maintenance.

---

## 8. Port Security

* **Definition:** A network switch feature that restricts which devices can connect to a specific switch port based on the MAC address of their network interface card, preventing unauthorized device access.

Switches use a **CAM (Content Addressable Memory) table** to store MAC address-to-port mappings and forward traffic only to the intended device. Attackers can exploit this with **MAC flooding** — sending large numbers of fake MAC addresses to overflow the CAM table, causing the switch to **fail open** and behave like a hub, rebroadcasting all traffic to all ports.

**Port security** mitigates this by binding specific MAC addresses to specific switch ports.

> *La seguridad de puertos en un switch es como la lista de dispositivos autorizados en una sala de servidores: si el dispositivo no está en la lista, la puerta no se abre, sin importar quién lo intente conectar.*

### Sticky MAC (Persistent MAC Learning)

* **Definition:** A port security feature that dynamically learns and locks the first MAC address connected to a switch port, blocking any subsequent device from connecting to that port.

⚠️ **Limitation of MAC-based port security:** Attackers can bypass it by **MAC spoofing** — changing their NIC's MAC address to a known-authorized address. This requires additional controls like 802.1x.

---

## 9. 802.1x Authentication

* **Definition:** An IEEE standardized framework for port-based network access control that authenticates devices connecting to wired or wireless networks before granting them access.

802.1x is a **framework** — it relies on other protocols (RADIUS or TACACS+) for the actual authentication. It operates at **Layer 2 (Data Link)** and requires three roles:

| Role | Description |
| --- | --- |
| **Supplicant** | The device or user requesting network access |
| **Authenticator** | The network device through which access is requested (switch, WAP, VPN concentrator) |
| **Authentication Server** | The centralized server performing authentication (RADIUS or TACACS+) |

### RADIUS vs TACACS+

| Feature | RADIUS | TACACS+ |
| --- | --- | --- |
| Platform | Cross-platform | Cisco proprietary only |
| Transport | UDP (faster, less secure) | TCP (slower, more secure) |
| AAA process | Combined | Independent (more granular) |
| Protocol support | Does not support RAP, NetBIOS Frame, X.25 PAD | Supports all networking protocols |
| Best for | Mixed-vendor networks | All-Cisco environments |

---

## 10. EAP — Extensible Authentication Protocol

* **Definition:** A flexible authentication framework (not a single protocol) that defines multiple methods for authenticating clients and servers in conjunction with 802.1x, supporting passwords, certificates, and PKI.

> *EAP es como el sistema de llaves de un hotel moderno: puede ser una llave magnética, una app en el celular, una huella dactilar o un código PIN. El hotel (802.1x) decide cuál método usar, pero la forma de abrir la puerta (EAP) puede variar.*

### EAP Variants

| Variant | Authentication Method | Mutual Auth? | Notes |
| --- | --- | --- | --- |
| **EAP-MD5** | Password (challenge-handshake) | ❌ One-way | Simple; requires strong passwords; weakest EAP variant |
| **EAP-TLS** | Digital certificates on both client and server | ✅ | Immune to password attacks; strongest common EAP variant |
| **EAP-TTLS** | Server certificate + client password | ✅ | More secure than MD5; less secure than TLS |
| **EAP-FAST** | Protected Access Credential (PAC) instead of certificate | ✅ | No certificate required; uses PAC for mutual auth |
| **PEAP** | Server certificate + client password via MS Active Directory | ✅ | Common in Windows/Active Directory environments |
| **EAP-LEAP** | Cisco proprietary | ✅ | Cisco-only; avoid in mixed-vendor networks |

⚠️ All variants except **EAP-LEAP** are cross-platform. Use LEAP only if running an all-Cisco network.

---

## 11. Securing Network Communications — VPNs

* **Definition:** A Virtual Private Network (VPN) extends a private network across a public network, allowing users to send and receive data as if their device were directly connected to the organization's private network.

VPN traffic is sent through a **secure encrypted tunnel** from the user's device or site over the untrusted Internet back to the organization's network. There are three VPN types:

> *Una VPN es como un tubo sellado e invisible que atraviesa una ciudad pública: nadie que esté en la calle puede ver lo que pasa dentro del tubo, aunque físicamente esté debajo de sus pies.*

### VPN Types

| Type | Description | Use case |
| --- | --- | --- |
| **Site-to-site VPN** | Connects two entire network locations (e.g., branch office to HQ) over the Internet | Replaces expensive dedicated leased lines between offices |
| **Client-to-site VPN** | Connects a single remote device (laptop, phone) directly to the corporate network | Remote workers connecting to HQ |
| **Clientless VPN** | Uses a web browser and HTTPS/TLS to create a secure tunnel; no client software required | Everyday HTTPS web browsing |

### Full Tunnel vs Split Tunnel

| Mode | Traffic routing | Security | Performance |
| --- | --- | --- | --- |
| **Full Tunnel** | All traffic — including Internet traffic — routes through HQ VPN | Higher (all traffic inspected at HQ) | Lower (more latency) |
| **Split Tunnel** | Only traffic bound for HQ routes through VPN; Internet traffic goes direct | Lower (Internet traffic bypasses HQ) | Higher (less latency) |

⚠️ **Use full tunnel on untrusted networks** (hotels, coffee shops) to prevent attackers from pivoting through your device into the HQ network via the split tunnel.

---

## 12. Securing Network Communications — TLS

* **Definition:** Transport Layer Security (TLS) is a cryptographic protocol that operates at Layers 5–7 of the OSI model to provide encrypted, authenticated communication between a client and server — the foundation of HTTPS and clientless VPNs.

TLS uses **TCP** for connection establishment (more overhead, more reliable). **DTLS (Datagram TLS)** is the UDP-based variant that provides the same security with less overhead — ideal for video streaming and real-time applications.

> *TLS es como un sobre cerrado con lacre: el mensajero (la red) puede ver a quién va dirigido el sobre (los encabezados), pero no puede leer lo que hay dentro (el contenido cifrado).*

---

## 13. Securing Network Communications — IPSec

* **Definition:** Internet Protocol Security (IPSec) is a suite of protocols that authenticates and encrypts each IP packet in a data stream to create a secure encrypted tunnel between two devices, providing confidentiality, integrity, authentication, and anti-replay protection.

IPSec is the most widely used protocol for site-to-site and client-to-site VPNs. It provides:
- **Confidentiality** — data encryption
- **Integrity** — hash comparison before and after transmission
- **Authentication** — each party verifies the other's identity
- **Anti-replay** — packet sequence numbers prevent duplicate or captured packets from being resent

> *IPSec es como un servicio de mensajería blindado con GPS, firma biométrica del destinatario, sello de integridad en el paquete y un número de serie único para que no puedan enviar el mismo paquete dos veces.*

### IPSec Tunnel Establishment — 5 Steps

1. **Request to start key exchange** — initiating party sends a request
2. **IKE Phase 1** — parties authenticate and establish a secure negotiation channel (ISAKMP tunnel)
3. **IKE Phase 2** — negotiate security association parameters and establish the actual data tunnel (tunnel within a tunnel)
4. **Data transfer** — encrypted data flows through the established tunnel
5. **Tunnel termination** — security associations are deleted by mutual agreement or timeout

### IPSec Modes

| Mode | Packet handling | Best for |
| --- | --- | --- |
| **Transport Mode** | Uses original IP header; adds minimal overhead | Client-to-site VPN; avoids MTU fragmentation issues |
| **Tunneling Mode** | Encapsulates entire original packet inside a new packet with a new header | Site-to-site VPN; may require jumbo frames (>1,500 byte MTU) |

### IPSec Protocols: AH vs ESP

| Protocol | Provides | Does NOT provide |
| --- | --- | --- |
| **AH — Authentication Header** | Integrity, data origin authentication, anti-replay protection | Confidentiality (no encryption) |
| **ESP — Encapsulating Security Payload** | Authentication, integrity, replay protection, **confidentiality (encryption)** | Full end-to-end header encryption in transport mode |

---

## 14. SD-WAN

* **Definition:** A Software-Defined Wide Area Network (SD-WAN) is a virtualized WAN architecture that uses software-defined networking principles to manage and optimize WAN connections — enabling intelligent traffic routing across multiple transport types (MPLS, broadband, cellular, microwave) from a centralized control plane.

Traditional WANs force all branch traffic back to HQ in a star topology — good for security but creates latency and poor user experience. SD-WAN solves this by intelligently identifying application types and routing traffic to the most efficient path dynamically.

> *SD-WAN es como un GPS inteligente para los datos corporativos: en vez de obligar a todos los carros (paquetes) a pasar por la misma carretera principal (HQ), el GPS decide en tiempo real cuál ruta es más rápida, más económica o más segura para cada viaje.*

**Key use case:** Organizations with many branch offices moving to cloud services (IaaS, PaaS, SaaS) that are being bottlenecked by traditional centralized WAN architectures.

---

## 15. SASE — Secure Access Service Edge

* **Definition:** A network security framework that consolidates wide-area networking (WAN) capabilities with security services — including firewalls, VPNs, Zero Trust Network Access (ZTNA), and Cloud Access Security Brokers (CASBs) — into a single cloud-native service.

SASE is designed for distributed enterprises with remote workers, branch offices, and cloud-based applications. It uses **Software-Defined Networking (SDN)** to deliver security and networking from the cloud rather than hardware appliances, providing flexibility, scalability, and cost efficiency.

> *SASE es como cambiar tu propio departamento de seguridad, recepcionistas, y sala de servidores por un servicio de seguridad en la nube que sigue al empleado a donde vaya, sin importar desde qué país o dispositivo se conecte.*

### SASE by Cloud Provider

| Provider | SASE-aligned Service |
| --- | --- |
| **AWS** | VPC — Virtual Private Cloud |
| **Microsoft Azure** | Azure Virtual WAN + Azure ExpressRoute |
| **Google Cloud Platform** | Google Cloud Interconnect + Google Cloud VPN |

---

## 16. Infrastructure Considerations — Device Placement

* **Definition:** The deliberate positioning of network devices (routers, switches, access points, firewalls) within a network architecture to optimize data flow, minimize latency, and maximize security.

- **Routers** at the network edge to direct and filter inbound/outbound traffic
- **Access points** positioned for coverage while minimizing wireless signal leakage outside facilities
- **Switches** placed to serve as centralized connection points for network devices per segment

Improper placement leads to bottlenecks, vulnerability points, or connectivity gaps.

---

## 17. Infrastructure Considerations — Security Zones and Screened Subnets

* **Definition:** A security zone is a logically isolated network segment containing devices with similar security requirements and trust levels; a screened subnet is a buffer zone between an untrusted external network and a trusted internal network, used to host public-facing services.

> *Las zonas de seguridad son como las plantas de un edificio corporativo: la recepción (zona pública), las oficinas generales (zona interna), y la sala de servidores (zona confidencial) tienen controles de acceso diferentes porque tienen distintos niveles de sensibilidad.*

⚠️ **Terminology change:** "DMZ" (demilitarized zone) is the older term. The current Security+ exam uses **"screened subnet"**. Some network appliances still display "DMZ" in their interfaces — know both terms.

A **screened subnet** hosts public-facing services (web servers, email servers, DNS servers) so that a breach in that subnet does not give attackers direct access to the core internal network.

---

## 18. Infrastructure Considerations — Attack Surface

* **Definition:** The total sum of all points (ports, protocols, devices, applications, interfaces) where an unauthorized user could potentially attempt to enter or extract data from a system, network, or application.

As networks grow and add devices, applications, and access points, the attack surface expands. A larger attack surface means more opportunities for exploitation. Common contributors include improper device placement, misconfigured devices, outdated software, unnecessary open ports, and weak access controls.

**Mitigation:** Regularly assess and minimize the attack surface by identifying and eliminating vulnerabilities or implementing compensating controls.

---

## 19. Infrastructure Considerations — Connectivity Methods

* **Definition:** The technologies and methods used to connect network components to each other and to external networks, each with different trade-offs in performance, security, mobility, and cost.

| Method | Advantages | Disadvantages |
| --- | --- | --- |
| **Wired (Ethernet)** | Stable, fast, secure | Limits mobility; requires physical cabling |
| **Wireless (Wi-Fi, microwave, satellite)** | Flexible, scalable | Subject to interference; more security vulnerabilities |
| **Fiber Optic** | High speed, long distance, minimal signal degradation | Higher installation cost |
| **Hybrid** | Combines strengths of multiple methods; adds redundancy | More complex to manage |

---

## 20. Infrastructure Considerations — Device Attributes (Active vs Passive / Inline vs Tap)

* **Definition:** Device attributes describe whether a network security device actively intervenes in traffic (active) or passively observes it (passive), and whether it is placed directly in the traffic path (inline) or outside it (tap/monitor).

| Attribute | Description | Example |
| --- | --- | --- |
| **Active (Inline)** | Device sits in the traffic path and can block or modify traffic | IPS, Firewall |
| **Passive (Tap/Monitor)** | Device observes a copy of traffic without affecting it | IDS, Network Sensor (SPAN port) |

- **Inline devices** — critical for real-time threat mitigation and filtering
- **Tap/monitor devices** — ideal for monitoring network health and security without risking service disruption

Selection depends on the organizational goal: real-time blocking (inline) vs. non-disruptive monitoring (passive tap).

---

## 21. Infrastructure Considerations — Failure Modes

* **Definition:** The configured behavior of a security device when it encounters an error, overload, or malfunction — either allowing all traffic through (fail-open) or blocking all traffic (fail-closed).

| Mode | Behavior on failure | Security | Availability |
| --- | --- | --- | --- |
| **Fail-Open** | All traffic passes without inspection | ❌ No security during failure | ✅ Network stays up |
| **Fail-Closed** | All traffic is blocked | ✅ Security maintained | ❌ Network goes down |

> *Fail-open es como una puerta automática que se queda abierta si hay un apagón — conveniente, pero inseguro. Fail-closed es como una caja fuerte que se sella automáticamente si hay un error — segura, pero no puedes entrar.*

**Decision factors:** The criticality of what is being protected.
- Sensitive financial data servers → **fail-closed** (security over availability)
- Guest wireless network → **fail-open** (availability over security, low-value assets)

---

## 22. Selecting Infrastructure Controls

* **Definition:** The process of identifying, evaluating, and implementing safeguards or measures to mitigate potential risks and protect an organization's assets within its network infrastructure.

> *Seleccionar controles es como equipar una casa: no cualquier casa necesita una cámara de seguridad, una alarma, un perro guardián y un guardia armado al mismo tiempo. Se elige según el valor de lo que se protege y el presupuesto disponible.*

### Key Principles for Control Selection

| Principle | Description |
| --- | --- |
| **Least Privilege** | Users and systems get only the minimum access rights needed to perform their duties |
| **Defense in Depth** | Multiple layers of security ensure that if one control fails, others remain effective |
| **Risk-Based Approach** | Prioritize controls based on organizational risk and vulnerability severity |
| **Lifecycle Management** | Regularly review, update, and retire controls as threats and infrastructure evolve |
| **Open Design Principle** | Ensure controls undergo rigorous testing and transparency for accountability |

### Control Selection Methodology

1. **Assess current state** — understand existing infrastructure, vulnerabilities, and controls
2. **Gap analysis** — identify discrepancies between current and desired security posture
3. **Set clear objectives** — define what the controls must achieve (data protection, uptime, compliance)
4. **Benchmarking** — compare against industry best practices and standards (NIST, ISO)
5. **Cost-benefit analysis** — balance security level against financial and resource investment
6. **Stakeholder involvement** — ensure controls align with business operations and user adoption
7. **Monitoring and feedback loops** — continuously validate control effectiveness as threats evolve

### Recommended Frameworks

- **NIST Cybersecurity Framework (CSF)** — comprehensive, widely used in the industry
- **NIST Risk Management Framework (RMF)** — in-depth risk management methodology
- **ISO standards** — internationally vetted guidelines for information security management

⚠️ **Control selection is not a one-time event.** Reassess annually or quarterly, and always reassess after significant infrastructure changes or business operational changes.

---
