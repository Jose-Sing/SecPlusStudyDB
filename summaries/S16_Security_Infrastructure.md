# 🛡️ CompTIA Security+ — Dion Training

## Section 16: Security Infrastructure | Study Summary

> **Keywords:** Ports · Protocols · Firewalls · IDS · IPS · VPN · IPSec · SD-WAN · SASE · 802.1x · EAP · Network Appliances · Port Security · Infrastructure Controls

---

## 1. Ports and Protocols

* **Definition:** A **port** is a logical communication endpoint on a computer or server identified by a number (0–65,535) that is paired with a **protocol** — a defined set of rules governing how data is exchanged between devices.

> *Un puerto es como la ventanilla de un banco: cada ventanilla (número de puerto) atiende un servicio específico (protocolo), y el cliente sabe exactamente a cuál formarse dependiendo de lo que necesite.*

### Port Classifications

| Type | Description |
| --- | --- |
| **Inbound port** | The server is listening and waiting for a connection |
| **Outbound port** | Opened by the client to initiate a connection; uses a random high-number port |

### Port Number Ranges

| Range | Name | Description |
| --- | --- | --- |
| **0–1023** | Well-Known Ports | Assigned by IANA to standard protocols (HTTP, SSH, DNS, etc.) |
| **1024–49,151** | Registered Ports | Vendors register these for proprietary protocols (e.g., RDP on 3389, MS SQL on 1433) |
| **49,152–65,535** | Dynamic / Private Ports | Temporarily assigned by clients for outbound connections; no registration required |

### Critical Ports to Memorize

| Port | Protocol | Transport | Description |
| --- | --- | --- | --- |
| **21** | FTP | TCP | File Transfer Protocol |
| **22** | SSH / SCP / SFTP | TCP | Secure remote access, secure copy, secure file transfer |
| **23** | Telnet | TCP | Unencrypted remote access (legacy, insecure) |
| **25** | SMTP | TCP | Sending email |
| **53** | DNS | TCP/UDP | Domain name resolution |
| **69** | TFTP | UDP | Trivial File Transfer (used with network boot OS) |
| **80** | HTTP | TCP | Unencrypted web traffic |
| **88** | Kerberos | UDP | Network authentication protocol |
| **110** | POP3 | TCP | Retrieving email from server |
| **119** | NNTP | TCP | Accessing newsgroups |
| **135** | RPC | TCP/UDP | Remote Procedure Call (Windows IPC) |
| **137–139** | NetBIOS | UDP/TCP | Windows name resolution, file and printer sharing |
| **143** | IMAP | TCP | Accessing email on server |
| **161** | SNMP | UDP | Network device management |
| **162** | SNMP Traps | UDP | SNMP alert messages |
| **389** | LDAP | TCP | Directory services |
| **443** | HTTPS | TCP | Encrypted web traffic (TLS) |
| **445** | SMB | TCP | Windows file and printer sharing |
| **465 / 587** | SMTPS | TCP | Secure email sending (SSL/TLS) |
| **514** | Syslog | UDP | Log message forwarding |
| **636** | LDAPS | TCP | Encrypted LDAP (SSL/TLS) |
| **993** | IMAPS | TCP | Secure IMAP email retrieval |
| **995** | POP3S | TCP | Secure POP3 email retrieval |
| **1433** | Microsoft SQL | TCP | MS SQL Server communication |
| **1645 / 1646** | RADIUS (TCP) | TCP | Remote authentication, authorization, accounting |
| **1812 / 1813** | RADIUS (UDP) | UDP | RADIUS over UDP |
| **3389** | RDP | TCP | Remote Desktop Protocol |
| **6514** | Syslog TLS | TCP | Encrypted syslog |

---

## 2. Firewalls

* **Definition:** A **firewall** is a network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules, protecting a network from unauthorized access and threats.

> *Un firewall es como el guardia de seguridad en la entrada de un edificio corporativo: revisa a cada visitante según una lista de reglas y decide quién puede entrar y quién no.*

### Screened Subnet (formerly DMZ)

A **screened subnet** (also called **dual-homed host**) is a buffer zone between an external untrusted network and the internal trusted network. It hosts public-facing services (web servers, email, DNS) and prevents a breach in that zone from directly reaching the core internal network.

⚠️ The term **DMZ** may still appear in device configuration menus, but the Security+ exam uses **screened subnet**.

### Firewall Types — Comparison

| Type | OSI Layer | Inspection Depth | Notes |
| --- | --- | --- | --- |
| **Packet Filtering** | Layer 4 | Headers only (IP + port) | Fast, minimal; cannot prevent IP spoofing or TCP attacks |
| **Stateful** | Layer 4 | Headers + connection state | Tracks session state; allows return traffic automatically |
| **Circuit-Level Proxy** | Layer 5 | Session layer (e.g., SOCKS) | Validates handshake; does not inspect payload content |
| **Application-Level Proxy** | Layer 7 | Full deep packet inspection | Inspects payload per application; slower but most thorough |
| **Kernel Proxy (5th Gen)** | All layers | Full stack | Minimal performance impact; inspects every layer |

### Advanced Firewall Solutions

#### Next-Generation Firewall (NGFW)
* **Definition:** An advanced firewall that combines traditional stateful inspection with application awareness, intrusion prevention signatures, and deep packet inspection in a single, efficient engine.

- Application-aware: distinguishes traffic by specific application, not just port
- Inline deployment; supports custom signatures
- Fast; full-stack visibility
- ⚠️ Can create vendor lock-in; more complex to manage than basic firewalls

#### Unified Threat Management (UTM)
* **Definition:** A single network appliance that integrates multiple security functions including firewall, IPS, antivirus, antispam, VPN, content filtering, and DLP into one platform.

- Reduces device count and maintenance overhead
- ⚠️ Single point of failure — if it fails, the entire security stack fails
- Less efficient per function than specialized single-purpose devices
- Best placed inline between LAN and Internet (gateway position)

#### Web Application Firewall (WAF)
* **Definition:** A specialized firewall focused on inspecting HTTP/HTTPS traffic to protect web applications from attacks such as cross-site scripting (XSS) and SQL injection using defined rule sets.

- Can be deployed as an appliance or software plugin
- **Inline:** Can block live attacks but may slow traffic and generate false positives
- **Out-of-band:** Receives mirrored traffic via SPAN port; detects but cannot block in real time

### Layer 4 vs. Layer 7 Firewalls

| Attribute | Layer 4 Firewall | Layer 7 Firewall |
| --- | --- | --- |
| Also known as | Packet-filtering / stateful | Application proxy |
| Inspects | Port numbers and protocols | Payload content and application behavior |
| Performance | Faster | Slower due to deep inspection |
| Security depth | Lower | Higher |

---

## 3. Firewall Configuration and ACLs

* **Definition:** An **Access Control List (ACL)** is a rule set placed on a firewall, router, or network device that **permits or denies traffic** through an interface based on source, destination, protocol, and port.

> *Una ACL es como el reglamento interno de un condominio: define exactamente quién puede entrar por qué puerta, en qué horario, y qué tipo de vehículo puede pasar. Todo lo que no está en la lista está prohibido por defecto.*

### ACL Key Rules

- Rules are processed **top-down**; the first match wins and stops further evaluation
- **Specific rules go at the top; generic rules go at the bottom**
- Many devices support **implicit deny** at the end; best practice is to always add an **explicit deny all** rule as the last entry
- **Always log** matched actions, including denies

### ACL Rule Components

| Field | Description |
| --- | --- |
| **Traffic type** | Protocol (TCP, UDP, ICMP, etc.) |
| **Source** | Source IP address or range |
| **Destination** | Destination IP address or range |
| **Action** | Permit or Deny |
| **Port** | Specific port number or range |

### Software Firewalls

- **Windows Defender Firewall with Advanced Security** → supports inbound/outbound rules, profiles (Domain, Private, Public), and logging
- **macOS Firewall** → simpler UI; advanced control requires `pf` or `ipfw` CLI tools
- **Stealth Mode** (macOS) → device does not respond to ping sweeps; improves obscurity

---

## 4. IDS and IPS

* **Definition:** An **Intrusion Detection System (IDS)** monitors network or host activity for suspicious behavior and generates alerts, while an **Intrusion Prevention System (IPS)** does the same but also takes automated action to block or stop the threat.

> *Un IDS es como una cámara de seguridad: graba y avisa si ve algo sospechoso, pero no actúa. Un IPS es como un guardia armado: detecta y también interviene de inmediato.*

### IDS vs. IPS

| Feature | IDS | IPS |
| --- | --- | --- |
| Detects threats | ✅ | ✅ |
| Logs and alerts | ✅ | ✅ |
| Blocks / takes action | ❌ | ✅ |
| Typical placement | Mirrored/SPAN port (passive) | Inline, behind the firewall |

### IDS/IPS Types by Scope

#### Network-Based (NIDS / NIPS)
* **Definition:** A standalone device or appliance that monitors all traffic crossing a network segment, typically connected via a SPAN or mirrored port on a backbone switch.

- Detects port scans, suspicious payloads, traffic to/from suspicious IPs
- NIPS is placed inline (right behind the firewall) to block in real time
- NIDS uses a mirrored port for passive monitoring only

#### Host-Based (HIDS / HIPS)
* **Definition:** Software installed directly on a server or endpoint that monitors traffic to/from that specific host, as well as suspicious processes and file access.

- HIPS can block unauthorized changes to critical system files
- More granular than network-based systems; specific to one host

#### Wireless (WIDS / WIPS)
* **Definition:** A system focused on detecting and preventing attacks against wireless networks, including de-authentication attacks, disassociation floods, and rogue access points.

- WIPS can disconnect the offending wireless device from the network

### Detection Methods

#### Signature-Based Detection
* **Definition:** Analyzes traffic against a database of known attack signatures; can only detect previously identified threats.

- Requires frequent database updates
- ⚠️ Ineffective against zero-day attacks
- Sub-types: **pattern-matching** (common in NIDS/WIDS) and **stateful-matching** (common in HIDS)

#### Anomaly-Based Detection
* **Definition:** Establishes a baseline of normal traffic behavior and alerts when activity deviates significantly from that baseline (behavioral detection).

- Effective against unknown/novel attacks
- ⚠️ Higher rate of false positives than signature-based
- Sub-types: statistical, protocol, traffic, rule/heuristic, and application-based

---

## 5. Network Appliances

* **Definition:** A **network appliance** is a dedicated hardware device with pre-installed software designed to perform specific networking functions such as load balancing, proxying, monitoring, or security enforcement within a network.

> *Un appliance de red es como un electrodoméstico especializado: no es una computadora de propósito general, sino un dispositivo diseñado específicamente para una sola tarea, como una cafetera que solo hace café.*

### Load Balancers

* **Definition:** A device that distributes incoming network or application traffic across multiple servers to optimize performance, prevent overload on any single server, and maintain high availability.

- Continuously performs **health checks** on servers; redirects traffic if a server fails
- Minimizes downtime during planned maintenance or unexpected failures
- Advanced variant: **ADC (Application Delivery Controller)** — adds SSL termination, HTTP compression, and content caching

### Proxy Servers

* **Definition:** An intermediary device between a client and a server that manages requests, enforces policies, caches content, and can mask the identity of internal endpoints.

- **Content caching** → stores local copies of responses to reduce bandwidth and speed up repeat requests
- **Request filtering** → enforces organizational policies for network usage
- Helps defend against DDoS by masking internal endpoint IPs
- Can enforce authentication, data encryption, and geographic data routing for compliance

### Sensors

* **Definition:** Devices or software tools that continuously monitor network conditions, traffic patterns, and data flows to detect anomalies, security breaches, or performance issues in real time.

- Used as the data collection layer for IDS/IPS systems
- Trigger alerts on events like sudden traffic spikes from unknown IPs (potential DDoS)
- Enable proactive response by providing real-time operational visibility

### Jump Servers (Jump Boxes)

* **Definition:** A dedicated, hardened gateway server used by administrators to securely access devices in different security zones within a network; all administrative access is funneled through this single point.

- Reduces attack surface by limiting direct access to sensitive internal devices
- Centralizes logging for audit and incident response purposes
- Hosts admin tools and scripts for routine tasks and troubleshooting
- ⚠️ Must be heavily secured — it is a high-value target due to its privileged access

---

## 6. Port Security

* **Definition:** A network switch feature that restricts which devices can connect to a specific port based on their **MAC address**, preventing unauthorized devices from gaining network access.

> *La seguridad de puertos es como una estación de tren donde cada asiento está asignado a un pasajero específico por número de identificación: si no eres tú, no puedes sentarte ahí, aunque el tren esté lleno.*

### How Switches Work

- Switches operate at **Layer 2** of the OSI model and make decisions based on MAC addresses
- Maintain a **CAM table** (Content Addressable Memory) that maps MAC addresses to switch ports
- Each port is its own **collision domain**, enabling full-duplex communication

### MAC Flooding Attack

An attacker floods the switch with random MAC addresses, overflowing the CAM table. The switch **fails open** and begins broadcasting all traffic out every port (behaving like a hub), allowing an attacker to capture all network traffic.

- **Defense:** Enable port security or MAC filtering on switch interfaces

### Sticky MAC (Persistent MAC Learning)

* **Definition:** A port security feature that dynamically learns and locks the first MAC address connected to a port as the only authorized MAC address for that port.

- Simplifies setup; no need to pre-configure each MAC manually
- ⚠️ Can be bypassed by **MAC spoofing** — attacker clones an approved MAC address

---

## 7. 802.1x Authentication

* **Definition:** An IEEE standard framework for **port-based network access control** that requires devices to authenticate before being granted access to a wired or wireless network, operating at Layer 2.

> *El 802.1x es como el control de acceso de un aeropuerto: no importa en qué puerta intentes entrar (switch o AP), siempre debes mostrar tu pasaporte (credenciales) antes de pasar.*

### 802.1x Roles

| Role | Description |
| --- | --- |
| **Supplicant** | The device or user requesting network access |
| **Authenticator** | The network device the supplicant connects through (switch, AP, VPN concentrator) |
| **Authentication Server** | Centralized server that performs the actual authentication (RADIUS or TACACS+) |

### RADIUS vs. TACACS+

| Feature | RADIUS | TACACS+ |
| --- | --- | --- |
| Platform | Cross-platform | Cisco proprietary only |
| Transport | UDP | TCP |
| Authentication + Authorization | Combined | Separated (more secure) |
| Protocol support | Limited (no NetBIOS, X.25) | All networking protocols |
| Best use | Mixed-vendor networks | All-Cisco networks |

---

## 8. EAP — Extensible Authentication Protocol

* **Definition:** A **flexible authentication framework** used with 802.1x that supports multiple authentication methods including passwords, digital certificates, and public key infrastructure. EAP is not a single protocol but a family of variants.

> *EAP es como un conector USB-C: no importa qué tipo de cable necesites (contraseña, certificado digital, token), el mismo puerto universal puede soportar todos los métodos de autenticación.*

### EAP Variants

#### EAP-MD5
* **Definition:** Uses simple passwords and the challenge-handshake authentication process for remote access; provides one-way authentication only (no mutual authentication).

- Weakest EAP variant; vulnerable to password-based attacks

#### EAP-TLS
* **Definition:** Uses digital certificates installed on both the client and the server for mutual authentication; immune to password-based attacks.

- Strongest EAP variant; both client and server authenticate each other
- Requires a PKI infrastructure to issue certificates to all clients

#### EAP-TTLS
* **Definition:** Requires a digital certificate on the server only; the client authenticates using a password, creating a secure tunnel for the password exchange.

- More secure than EAP-MD5 (server is verified); less secure than EAP-TLS (client uses password)

#### EAP-FAST
* **Definition:** Uses a **Protected Access Credential (PAC)** instead of certificates to establish mutual authentication between two devices; FAST = Flexible Authentication via Secure Tunneling.

- Does not require a PKI infrastructure; easier to deploy than EAP-TLS

#### PEAP (Protected EAP)
* **Definition:** Supports mutual authentication using a server-side digital certificate and Microsoft Active Directory to validate the client's password credential.

- Common in Microsoft environments; server certificate required but not client certificate

#### EAP-LEAP
* **Definition:** A **Cisco proprietary** lightweight EAP variant; works only on Cisco devices.

- ⚠️ Avoid unless running an all-Cisco infrastructure; not cross-platform

### EAP Variants at a Glance

| Variant | Client cert | Server cert | Mutual auth | Cross-platform |
| --- | --- | --- | --- | --- |
| **EAP-MD5** | ❌ | ❌ | ❌ | ✅ |
| **EAP-TLS** | ✅ | ✅ | ✅ | ✅ |
| **EAP-TTLS** | ❌ | ✅ | ✅ | ✅ |
| **EAP-FAST** | ❌ | ❌ (PAC) | ✅ | ✅ |
| **PEAP** | ❌ | ✅ | ✅ | ✅ |
| **EAP-LEAP** | ❌ | ❌ | ✅ | ❌ (Cisco only) |

---

## 9. Securing Network Communications — VPN

* **Definition:** A **Virtual Private Network (VPN)** extends a private network across a public network, allowing users to send and receive data as if their devices were directly connected to the organization's private network, using an encrypted tunnel.

> *Una VPN es como un tubo blindado dentro de una tubería pública: otros pueden ver el tubo, pero no pueden ver lo que va adentro ni interceptar su contenido.*

### VPN Types by Configuration

#### Site-to-Site VPN
* **Definition:** Connects two entire network sites (e.g., branch office to headquarters) over the public Internet using routers or VPN concentrators at each end, replacing expensive dedicated leased lines.

- All traffic from the remote site flows through the HQ network before reaching the Internet
- Cost-effective alternative to MPLS or leased lines

#### Client-to-Site VPN
* **Definition:** Connects a single device (laptop, phone, tablet) to the organization's headquarters network over the public Internet.

- User installs VPN client software and authenticates to connect
- Most common remote work setup

#### Clientless VPN
* **Definition:** A remote access VPN that uses a standard web browser and the HTTPS/TLS protocol (port 443) — no dedicated software or hardware client required.

- Used every time you connect to an HTTPS website (the browser acts as the VPN client)
- Relies on **TLS** (Layers 5–6–7) for encryption

### VPN Tunnel Modes

| Mode | Usage | Description |
| --- | --- | --- |
| **Full Tunnel** | Most secure | All traffic routed through HQ network; local resources (home printer) inaccessible |
| **Split Tunnel** | Better performance | Only corporate-bound traffic goes through VPN; Internet traffic exits locally |

⚠️ **Split tunnel risk:** An attacker who compromises the device over the unencrypted Internet path could pivot through the device and into the corporate VPN tunnel.

---

## 10. IPSec — Internet Protocol Security

* **Definition:** A suite of protocols that provides **authentication, encryption, integrity, and anti-replay protection** for IP communications, most commonly used to secure site-to-site and client-to-site VPN tunnels.

> *IPSec es como un servicio de mensajería certificada: sella el paquete, verifica quién lo envió, garantiza que no fue abierto en el camino, y comprueba que no es una copia de un paquete anterior.*

### IPSec Security Properties

| Property | How IPSec Provides It |
| --- | --- |
| **Confidentiality** | Encrypts the data payload |
| **Integrity** | Hashes the data before and after transmission; compares hashes to detect tampering |
| **Authentication** | Each party verifies the identity of the other |
| **Anti-Replay** | Checks sequence numbers on all packets to prevent duplicate or replayed packets |

### IPSec Tunnel Establishment — 5 Steps

```
1. Request to start key exchange (PC1 → Router1)
2. IKE Phase 1 → Authenticate parties; establish ISAKMP management tunnel
3. IKE Phase 2 → Negotiate security associations; establish data tunnel (tunnel inside tunnel)
4. Data Transfer → Encrypted data flows between endpoints using negotiated keys
5. Tunnel Termination → Security associations deleted (mutual agreement or timeout)
```

### IPSec Modes

| Mode | Used For | Description |
| --- | --- | --- |
| **Transport Mode** | Client-to-site VPN | Uses the original IP header; does NOT increase packet size |
| **Tunneling Mode** | Site-to-site VPN | Encapsulates the entire packet with a new IP header; increases packet size (may exceed 1,500-byte MTU) |

⚠️ Tunneling mode may require **jumbo frames** (up to 9,000 bytes) or reducing inner MTU to ~1,400 bytes to stay below the 1,500-byte default.

### IPSec Protocols

#### AH — Authentication Header
* **Definition:** Provides **connectionless integrity and data origin authentication** for IP datagrams and protects against replay attacks; does NOT provide confidentiality (data is not encrypted).

- Acts as a cryptographic fingerprint to verify the packet's origin and integrity

#### ESP — Encapsulating Security Payload
* **Definition:** Provides **authentication, integrity, replay protection, AND confidentiality** by encrypting the packet payload; protects the data content but not the outer IP header in transport mode.

- In tunneling mode, ESP can encrypt both the payload and the original headers

---

## 11. TLS and DTLS

* **Definition:** Cryptographic protocols designed to provide secure, encrypted communications over a network, with TLS running over TCP and DTLS running over UDP.

> *Es como decidir entre enviar una carta certificada por correo que requiere firma de recibido (TLS sobre TCP) o enviar un mensaje rápido por radio-walkie-talkie pero con cifrado militar (DTLS sobre UDP).*


### TLS — Transport Layer Security
* **Definition:** A cryptographic protocol that provides encrypted, authenticated communication at Layers 5–7 of the OSI model, using **TCP** as its transport; most commonly seen as the foundation of HTTPS and clientless VPNs.

- The padlock in a browser indicates an active TLS connection over port 443
- Higher overhead than UDP; more reliable

### DTLS — Datagram Transport Layer Security
* **Definition:** A UDP-based version of TLS that provides equivalent security with lower overhead, making it ideal for latency-sensitive applications like video streaming and real-time communications.

- Same security guarantees as TLS; faster due to UDP's reduced overhead

---

## 12. SD-WAN — Software-Defined Wide Area Network

* **Definition:** A virtualized WAN architecture that uses software-defined networking principles to manage and optimize wide area network connections across multiple transport types (MPLS, broadband, cellular, microwave) from a centralized software control plane.

> *Una SD-WAN es como un GPS inteligente para el tráfico de tu empresa: en lugar de siempre tomar la misma autopista (MPLS), el sistema elige en tiempo real la ruta más rápida y segura disponible, ya sea por carretera, autopista o atajo.*

- Replaces hardware-centric WAN routing (traditional star topology) with intelligent, dynamic path selection
- Improves performance for cloud-first enterprises by routing traffic directly to cloud services without backhauling through HQ
- Provides centralized visibility, management, and control across all WAN links
- Supports transport over MPLS, cellular, satellite, broadband, and microwave links

---

## 13. SASE — Secure Access Service Edge

* **Definition:** A cloud-native framework that consolidates wide area networking (WAN) capabilities and network security services — including firewalls, VPNs, Zero Trust Network Access (ZTNA), Secure Web Gateways, and CASBs — into a single unified cloud-based service.

> *SASE es como un sistema de seguridad y transporte todo-en-uno entregado desde la nube: en lugar de tener guardias en cada edificio y un sistema de transporte separado, hay un servicio centralizado en la nube que maneja todo para todos tus usuarios, sin importar desde dónde se conecten.*

### SASE vs. SD-WAN

| Feature | SD-WAN | SASE |
| --- | --- | --- |
| Focus | WAN optimization and routing | WAN + security consolidated in cloud |
| Deployment | Appliance or virtual | Cloud-native |
| Security services | Limited | Full stack (FW, VPN, ZTNA, CASB, SWG) |
| Ideal for | Branch office connectivity | Distributed, mobile, cloud-heavy enterprises |

### Cloud Provider Equivalents

| Provider | SASE-Aligned Service |
| --- | --- |
| **AWS** | Virtual Private Cloud (VPC) |
| **Microsoft Azure** | Azure Virtual WAN + ExpressRoute |
| **Google Cloud (GCP)** | Google Cloud Interconnect + Cloud VPN |

---

## 14. Infrastructure Considerations

* **Definition:** The set of architectural decisions — including device placement, security zone configuration, attack surface management, connectivity choices, device roles, and failure mode settings — that collectively determine the security, performance, and resilience of a network.

> *Diseñar una infraestructura de red es como planear la distribución de una ciudad: dónde pones los puntos de control, las zonas residenciales vs. comerciales, y qué pasa cuando un semáforo falla, todo afecta la seguridad y el flujo de tráfico.*

### Device Placement

- **Routers** at the network edge to filter and direct ingress/egress traffic
- **Access points** positioned to contain wireless signals within facility boundaries and minimize interference
- **Switches** as central connection points for all network devices per segment
- Poor placement → bottlenecks, blind spots, and unprotected vulnerability points

### Security Zones and Screened Subnets

- **Security zone:** A logically isolated network segment containing devices with similar trust levels and security requirements; each zone has its own access controls and policies
- **Screened subnet:** A buffer zone between the internal trusted network and the external untrusted network (Internet); hosts public-facing services (web, email, DNS)
- ⚠️ A breach inside the screened subnet must not provide direct access to the internal core network

### Attack Surface

The **attack surface** is the sum of all points where an unauthorized user could attempt to enter or extract data from a system or network.

- Grows as networks expand (more devices, apps, access points)
- Reduce it by: eliminating unused ports, patching software, enforcing access controls, removing unnecessary services

### Connectivity Methods

| Method | Advantages | Disadvantages |
| --- | --- | --- |
| **Wired (Ethernet)** | High speed, stable, secure | Limited mobility; wiring constraints |
| **Wireless (Wi-Fi)** | Flexible, scalable | Interference, security risks if misconfigured |
| **Fiber Optic** | High speed, long distance, minimal degradation | Higher cost to install |
| **Microwave / Satellite** | Covers remote areas | Latency, weather interference |
| **Hybrid** | Redundancy and resilience | Complexity in management |

### Device Attributes — Active vs. Passive and Inline vs. Tap

| Attribute | Description | Example |
| --- | --- | --- |
| **Active** | Monitors and acts on traffic in real time | IPS, Firewall |
| **Passive** | Observes and reports without intervening | IDS, Network sensor |
| **Inline** | Placed directly in the traffic path; can block | Firewall, IPS, Router |
| **Tap / Monitor** | Receives a copy of traffic via SPAN port; cannot block | NIDS, Sensor |

### Failure Modes

#### Fail-Open
* **Definition:** When a device fails, it allows all traffic to pass through without inspection or filtering to ensure network continuity remains uninterrupted.

- Prioritizes **availability** over security
- Example use: guest wireless networks where data sensitivity is low

#### Fail-Closed
* **Definition:** When a device fails, it blocks all traffic to maintain security, even at the cost of network connectivity.

- Prioritizes **security** over availability
- Example use: firewalls protecting sensitive financial or classified data systems

---

## 15. Selecting Infrastructure Controls

* **Definition:** The process of identifying, evaluating, and implementing security measures and safeguards to mitigate risks and protect an organization's network assets, aligned to defined objectives and frameworks.

> *Seleccionar controles de seguridad es como diseñar el sistema de seguridad de un museo: no puedes blindar cada centímetro, entonces priorizas las salas con las obras más valiosas, usas múltiples capas (cámaras, guardias, vitrinas), y revisas el sistema regularmente.*

### Key Principles for Control Selection

| Principle | Description |
| --- | --- |
| **Least Privilege** | Users and systems receive only the access necessary to perform their function |
| **Defense in Depth** | Multiple security layers ensure that if one fails, others remain; no single point of protection |
| **Risk-Based Approach** | Controls are prioritized by the level of risk they mitigate; limited resources go where risk is highest |
| **Lifecycle Management** | Controls are regularly reviewed, updated, and retired as threats and infrastructure evolve |
| **Open Design Principle** | Security controls undergo transparent, rigorous testing and scrutiny to verify effectiveness |

### Control Selection Methodology

1. **Assess current state** — understand existing infrastructure, vulnerabilities, and controls in place
2. **Gap analysis** — identify the difference between current and desired security posture
3. **Set clear objectives** — define what the controls must achieve (data protection, uptime, compliance)
4. **Benchmarking** — compare performance and security metrics to industry best practices
5. **Cost-benefit analysis** — balance security investment against the value of the protection provided
6. **Stakeholder involvement** — ensure decision-makers and users understand and support the controls
7. **Monitoring and feedback loops** — continuously evaluate control effectiveness; adjust as threats evolve

### Best Practices

- Conduct a **comprehensive risk assessment** before selecting controls; repeat it at major infrastructure changes
- Align control selection to established frameworks: **NIST Cybersecurity Framework**, **NIST Risk Management Framework**, **ISO standards**
- Customize frameworks to match your organization's specific risk profile and operations
- Conduct regular **stakeholder training** — controls are only effective if people understand and follow them
- Control selection is **not a one-time event** — review annually or quarterly

---
