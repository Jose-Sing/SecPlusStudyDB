# 🛡️ CompTIA Security+ (SY0-701) — Dion Training

## Section 21: Security Techniques | Study Summary

> **Keywords:** Wireless Infrastructure · WPA3 · Application Security · NAC · Web/DNS Filtering · Email Security · EDR · UBA · Secure Protocols

---

## 1. Wireless Infrastructure Security

* **Definition:** The objective domain covering the physical placement, RF planning, and survey methodology used to deploy a wireless network that maximizes coverage while minimizing the risk of unauthorized external access.

This is one of the core blueprint objectives (4.1) for this section. It covers **WAP placement**, **interference types**, **site surveys**, and **heat maps** as the building blocks of a secure wireless deployment — security starts at the physical/RF layer, before any encryption protocol is even configured.

> *Es como diseñar la seguridad perimetral de una casa antes de comprar las cerraduras: primero decides dónde van las ventanas y las puertas, y después eliges qué candado poner en cada una.*

### Wireless Infrastructure Security: WAP Placement

* **Definition:** The strategic positioning of wireless access points (WAPs) within a facility to optimize signal coverage while minimizing the risk of unauthorized external access.

A **Wireless Access Point (WAP)** is a device that allows wireless clients to connect to a wired network using the 802.11 Wi-Fi standards. Where you place a WAP directly affects both **performance** and **security**.

> *Es como instalar reflectores de luz en un estadio: si los pones demasiado cerca de las paredes externas, iluminas el estacionamiento en lugar del campo.*

Placing a WAP near **exterior walls or windows** allows the signal to leak outside the physical boundaries of the building, letting threat actors connect from a parking lot or sidewalk without ever entering the facility.

**Best practices for WAP placement:**

- Place WAPs in **central locations**, away from windows and external walls.
- Mount WAPs **high** (ceiling or top of shelves) to maximize coverage and reduce interference.
- Use **omnidirectional antennas** for interior areas and **unidirectional antennas** on exterior walls to focus the signal inward.
- Large facilities require an **Extended Service Set (ESS)** — multiple WAPs working together to provide seamless, merged coverage across the entire building, automatically handing off the user as they move between WAPs while remaining on the same enterprise network.

### Wireless Infrastructure Security: Co-Channel Interference

* **Definition:** Interference that occurs when two or more WAPs in overlapping coverage areas use the same wireless channel or frequency band.

Co-channel interference forces data retransmission, slowing down the wireless network. It occurs when two access points use the **same channel** while their coverage zones overlap.

> *Como dos personas hablando al mismo tiempo en el mismo cuarto: se escucha ruido, no información.*

### Wireless Infrastructure Security: Adjacent Channel Interference

* **Definition:** Interference that occurs when adjacent WAPs use channels that are close enough to overlap in frequency, causing signal degradation and bandwidth loss.

In the **2.4 GHz band**, there are only 11 channels available, each 22 MHz wide, across a 100 MHz total spectrum — which means most channels overlap with their neighbors. For example, channel 6 (centered at 2.437 GHz) strongly overlaps with channels 5 and 7, and overlaps slightly with channels 4 and 8.

> *Como dos estaciones de radio muy cercanas en el dial: se mezclan las señales y escuchas ambas a la vez.*

⚠️ **Exam Tip:** In the 2.4 GHz band, always use **channels 1, 6, and 11** — the only three non-overlapping channels. Any other combination will cause adjacent channel interference.

### Wireless Infrastructure Security: Site Survey

* **Definition:** A process of planning and designing a wireless network that involves scanning the radio frequency environment to identify interference sources, optimal WAP placement locations, and the best channels to use, in order to deliver required coverage, data rates, capacity, roaming capability, and quality of service.

A site survey is performed **before** installing wireless access points. It involves a physical site visit to test RF interference and identify devices already operating in the frequency band you intend to use.

> *Es como hacer una inspección del terreno antes de construir: mides, observas el entorno y luego decides dónde colocar cada cosa.*

### Wireless Infrastructure Security: Heat Map

* **Definition:** A graphical representation of wireless signal strength, coverage, and frequency utilization across a physical space, with values displayed as color gradients, created after WAP installation to validate the deployment.

Heat maps allow security professionals and network engineers to:

- Identify **dead zones** (no coverage)
- Detect areas of **signal leakage** outside the building
- Find areas where **signal strength is too strong** and could reach beyond physical boundaries

> *Como un mapa meteorológico: los colores te dicen de inmediato dónde hace calor (señal fuerte) y dónde hace frío (sin cobertura).*

⚠️ **Exam Tip:** If a heat map shows signal leaking outside the building, the response is to **reposition the WAP**, **decrease signal strength**, or switch to a **unidirectional antenna**. If coverage is insufficient inside, **add more WAPs** near the weak edges.

---

## 2. Wireless Security Settings

* **Definition:** The objective domain covering the encryption protocols, AAA frameworks, and authentication protocols used to secure data transmission and verify user identity on wireless networks.

This is the second blueprint objective (4.1) covered in this section. It addresses three layers of wireless protection: **encryption protocols** (WEP/WPA/WPA2/WPA3) for confidentiality, **AAA protocols** (RADIUS/TACACS+) for centralized access control, and **EAP-based authentication protocols** for verifying user identity.

> *Como construir una caja fuerte de tres capas: el material de la caja (encriptación), quién tiene permiso de abrirla (AAA), y cómo se verifica la identidad de quien la abre (EAP).*

### Wireless Security Settings: WEP

* **Definition:** Wired Equivalent Privacy — the original 802.11 wireless encryption standard released in 1999, now considered cryptographically broken due to its weak initialization vector and use of the RC4 cipher.

WEP uses a **static key** shared by all devices on the network. It supports 64-bit and 128-bit key lengths, but both are easily compromised because of its **24-bit initialization vector (IV)**. Modern tools can crack WEP in approximately 3 minutes by collecting enough traffic to reconstruct the key.

> *Como poner el mismo candado en todas las puertas del edificio y además escribir la combinación en la puerta misma.*

⚠️ **Exam Tip:** WEP is insecure because of its **weak 24-bit IV**. Never use WEP.

### Wireless Security Settings: WPA

* **Definition:** Wi-Fi Protected Access — an interim wireless security standard released in 2003 that replaced WEP by introducing TKIP (Temporal Key Integrity Protocol), which generates a new 128-bit key per packet.

WPA was a stopgap solution while the 802.11i standard was being finalized. Although TKIP improved on WEP, it was designed to be backward compatible with existing WEP hardware, which meant it inherited structural weaknesses.

> *Como reparar un puente viejo con parches: mejora, pero la estructura base sigue siendo débil.*

⚠️ **Exam Tip:** WPA is insecure because of **insufficient data integrity checks in the TKIP implementation**.

### Wireless Security Settings: WPA2

* **Definition:** Wi-Fi Protected Access 2 — the wireless security standard released in 2004 based on the IEEE 802.11i standard, which replaced TKIP with AES encryption and introduced CCMP (Counter Cipher Mode with Block Chaining Message Authentication Code Protocol).

WPA2 brought the **Advanced Encryption Standard (AES)** and **CCMP** for stronger encryption and data integrity via **Message Integrity Code (MIC)**. The primary vulnerability is the **KRACK (Key Reinstallation Attack)** discovered in 2016.

> *Como mejorar la bóveda del banco: ahora tiene acero de verdad, pero alguien encontró una grieta en el proceso de instalación de la llave.*

### Wireless Security Settings: WPA3

* **Definition:** Wi-Fi Protected Access 3 — the current and most secure wireless encryption standard, which introduces Simultaneous Authentication of Equals (SAE), Enhanced Open (OWE), AES-GCMP encryption, and mandatory Management Frame Protection (MFP).

WPA3 includes **four major improvements** over WPA2, each detailed below as its own concept.

> *Como cambiar el candado de una contraseña estática por autenticación biométrica con reconocimiento facial: incluso si alguien graba el proceso, no puede replicarlo.*

#### WPA3: Simultaneous Authentication of Equals (SAE)

* **Definition:** A key establishment protocol in WPA3 that replaces the WPA2 four-way handshake with a Diffie-Hellman-based authentication mechanism, protecting against offline dictionary attacks even if the handshake is captured.

SAE replaces the pre-shared key (PSK) method used in WPA2. Even if an attacker captures the authentication exchange, they **cannot use it to guess the password offline** — unlike WPA2 where a captured handshake can be brute-forced. WPA3 also offers more robust protection even when users select weak, simple, or short passwords.

> *Como un apretón de manos matemático que cambia cada vez: grabar el apretón no te da la fórmula para reproducirlo.*

#### WPA3: Enhanced Open (Opportunistic Wireless Encryption — OWE)

* **Definition:** A WPA3 feature that provides individualized data encryption between a client and an access point on open (password-free) networks, protecting against passive eavesdropping without requiring user authentication.

Traditional open Wi-Fi sends all data unencrypted. Enhanced Open encrypts each client's traffic individually, even though no password is required to join. It does not offer full WPA3-level security, but protects against passive eavesdropping common in public Wi-Fi.

> *Como que cada persona en un café reciba su propia mesa privada con cortinas, aunque la entrada al café sea libre.*

#### WPA3: Updated Cryptographic Protocols (AES-GCMP)

* **Definition:** WPA3 replaces the AES-CCMP used in WPA2 with AES-GCMP (Galois Counter Mode Protocol), supporting 128-bit AES for personal networks and 192-bit AES for enterprise networks.

GCMP provides stronger encryption and better performance than CCMP. The 192-bit option is used in WPA3-Enterprise for environments requiring stronger cryptographic assurance.

### Wireless Security Settings: AAA — Authentication, Authorization, and Accounting

* **Definition:** A security framework that controls access to network resources by verifying user identity (Authentication), determining what the user is allowed to do (Authorization), and tracking user activity (Accounting).

AAA is implemented in wireless and enterprise networks to centralize access control and enforce security policies consistently across all users and devices. Implementing AAA protocols is fundamental in environments transmitting sensitive data with stringent compliance requirements.

> *Como el sistema de un aeropuerto: la seguridad verifica quién eres (Autenticación), el boarding pass define a qué puerta puedes ir (Autorización), y el registro de vuelo documenta todo lo que hiciste (Accounting).*

#### AAA: RADIUS

* **Definition:** Remote Authentication Dial-In User Service — a networking protocol that operates on a client-server model and provides centralized Authentication, Authorization, and Accounting (AAA) services for network users.

RADIUS is the most widely used AAA protocol in enterprise wireless environments. It authenticates users through a centralized server, validates identities, grants access based on predefined policies, and monitors user activity for accountability.

> *Como una recepcionista centralizada de un edificio corporativo: todos los visitantes pasan por ella, ella verifica la identidad y lleva el registro de quién entra y cuándo.*

#### AAA: TACACS+

* **Definition:** Terminal Access Controller Access-Control System Plus — an AAA protocol that separates the Authentication, Authorization, and Accounting functions into distinct services and encrypts the entire authentication process using TCP.

Unlike RADIUS, which combines AAA into a single process, TACACS+ handles each function separately, allowing more granular control. It also encrypts the **entire authentication payload** (not just the password), making it more secure than RADIUS for device administration.

> *Como tener tres departamentos separados en el aeropuerto: uno para verificar identidad, otro para emitir permisos, y otro para llevar los registros — cada uno especializado.*

| Feature            | RADIUS                      | TACACS+                       |
| ------------------ | --------------------------- | ----------------------------- |
| **Protocol**       | UDP                         | TCP                           |
| **Encryption**     | Password only               | Entire authentication payload |
| **AAA separation** | Combined                    | Separated (more granular)     |
| **Primary use**    | Network access (Wi-Fi, VPN) | Device administration         |

### Wireless Security Settings: EAP — Extensible Authentication Protocol

* **Definition:** An authentication framework that defines message formats and negotiation procedures for multiple authentication methods used in wireless networks and point-to-point connections; not a specific protocol itself but a framework that supports various EAP methods.

EAP supports authentication via token cards, smart cards, certificates, one-time passwords, and more. It is used with RADIUS servers in 802.1X-based network access control.

> *Como un marco legal que no define las leyes en sí, sino las reglas sobre cómo deben ser escritas y aplicadas.*

#### EAP: PEAP (Protected EAP)

* **Definition:** An EAP method developed by Cisco, Microsoft, and RSA that encapsulates EAP within an encrypted TLS tunnel, requiring a certificate on both server and client side.

> *Como enviar un sobre dentro de una caja blindada: el sobre (EAP) viaja protegido por la caja (TLS).*

#### EAP: EAP-TTLS (EAP Tunneled TLS)

* **Definition:** An EAP method that creates an encrypted TLS tunnel using only a server-side certificate, then transports a secondary authentication protocol inside the tunnel for client authentication.

##### The key difference between EAP-TTLS and PEAP:

* PEAP = EAP inside the tunnel. EAP-TTLS = legacy protocols inside the tunnel.
  
  * If the question mentions **MSCHAPv2** being used for client auth → **PEAP** (that's its default inner method).
  
  * If the question mentions **PAP, CHAP, or legacy protocols** being tunneled → **EAP-TTLS** (that's its advantage — it doesn't force EAP inside).

* Secondary trigger: if a question emphasizes **flexibility to support older/non-EAP authentication methods** → EAP-TTLS wins that description every time.

> | Método   | Certificado servidor | Certificado cliente | Auth interna               |
> | -------- | -------------------- | ------------------- | -------------------------- |
> | EAP-TLS  | ✅                    | ✅                   | N/A                        |
> | PEAP     | ✅                    | ❌                   | EAP (ej. MSCHAPv2)         |
> | EAP-TTLS | ✅                    | ❌                   | Cualquier protocolo legacy |


#### EAP: EAP-FAST (EAP Flexible Authentication via Secure Tunneling)

* **Definition:** A Cisco-developed EAP method that uses Protected Access Credentials (PACs) to establish a TLS tunnel for credential verification, designed to allow secure re-authentication when users roam within a network without performing full authentication each time.

EAP-FAST was created as a replacement for the vulnerable Lightweight EAP (LEAP) protocol.

> *Como tener un pase VIP en un concierto: una vez verificado al entrar, puedes moverte entre áreas sin pasar por seguridad otra vez.*

---

## 3. Application Security

* **Definition:** The objective domain (4.1) covering the techniques used to build applications that are secure by design, focused on preventing, detecting, and remediating vulnerabilities across the software development lifecycle.

There are six areas covered under this objective: **input validation, secure cookies, static code analysis, dynamic code analysis, code signing, and sandboxing**. Together, these form a layered approach to securing software before, during, and after deployment.

> *Como construir un edificio con seguridad integrada desde los planos: no es solo poner una alarma al final, sino diseñar cada pared, puerta y ventana pensando en seguridad desde el inicio.*

### Application Security: Input Validation

* **Definition:** A security technique that verifies all data inputs to an application meet defined criteria before the application processes them, preventing malicious data from triggering unintended behavior such as SQL injection, XSS, or buffer overflow attacks.

Input validation acts as a **gatekeeper** — ensuring only well-defined, correctly formatted data reaches the application logic. It must be implemented at both the **front-end** (client-side) and **back-end** (server-side) because front-end validation alone can be bypassed by an attacker intercepting the request.

> *Como los filtros en la entrada de agua de un edificio: primero hay una rejilla gruesa afuera (front-end) y luego un filtro fino adentro (back-end). Ambos son necesarios porque la rejilla sola no atrapa todo.*

- **Front-end validation:** Performed in the browser/UI before data is sent to the server. Fast but bypassable.
- **Back-end validation:** Performed on the server before data is processed. Authoritative and cannot be bypassed by the user.
- **Validation rules:** Define what inputs are acceptable (e.g., a phone number field only accepts 10 digits, no letters or special characters).

⚠️ **Exam Tip:** Input validation is not a standalone defense. It must be combined with a **defense-in-depth** strategy including secure communication protocols, error handling, and regular security auditing.

### Application Security: Secure Cookies

* **Definition:** Web cookies that are configured with security attributes (Secure, HttpOnly, SameSite) to prevent interception, unauthorized script access, and cross-site request forgery attacks.

Cookies store session and state information between the web server and client. If improperly configured, they can be exploited for **session hijacking** or **sensitive data theft**.

> *Como una llave de hotel: si la llave no tiene protección de clonación, cualquiera que la toque puede copiarla. Los atributos de seguridad son esa protección.*

| Attribute  | Protection                                                           |
| ---------- | -------------------------------------------------------------------- |
| `Secure`   | Cookie only transmitted over HTTPS — prevents interception over HTTP |
| `HttpOnly` | Cookie not accessible by JavaScript DOM — prevents XSS-based theft   |
| `SameSite` | Restricts cross-origin cookie access — reduces CSRF attack risk      |

⚠️ **Exam Tip:** Always **generate a new session cookie on each authentication** rather than using persistent cookies, to prevent session hijacking.

### Application Security: Static Code Analysis (SAST)

* **Definition:** A security testing method that reviews and analyzes application source code before execution to identify potential vulnerabilities such as buffer overflows, SQL injection risks, XSS vectors, and missing input validation.

Also called **Static Application Security Testing (SAST)**. The analysis is performed by automated tools (software analyzers that must support the language used) or human reviewers (**manual code review**). When performed by a human, a **different programmer** should review the code than the one who wrote it, to minimize blind spots from assumptions or experience gaps.

> *Como revisar un contrato legal antes de firmarlo: buscas errores y cláusulas problemáticas antes de que el contrato entre en vigor.*

### Application Security: Dynamic Code Analysis (DAST)

* **Definition:** A security testing method that analyzes an application while it is actively running to find vulnerabilities that static analysis cannot detect, such as runtime errors, memory leaks, and input-driven vulnerabilities.

Also called **Dynamic Application Security Testing (DAST)**. The two primary methods of DAST are fuzzing and stress testing, detailed below.

> *Como probar un puente con cargas reales de tráfico: no basta con revisar los planos, hay que ver cómo se comporta bajo condiciones reales.*

#### Dynamic Code Analysis: Fuzzing (Fuzz Testing)

* **Definition:** A dynamic software testing technique that injects large volumes of random, malformed, or unexpected data (fuzz) into a system to discover crashes, code assertion failures, memory leaks, and security loopholes.

Fuzzing is automated and can uncover vulnerabilities that human testers or static tools would miss. The system is monitored for crashes or unexpected behavior in response to the fuzz input.

> *Como meter basura aleatoria en una trituradora para ver si se rompe: si se atasca, hay un fallo de diseño.*

#### Dynamic Code Analysis: Stress Testing

* **Definition:** A type of dynamic software testing that evaluates system stability and reliability under extreme conditions and high loads to identify weak points and failure behaviors.

Stress testing simulates scenarios like thousands of concurrent users accessing a web application simultaneously to identify performance bottlenecks, test load balancing effectiveness, and ensure the system can recover from failure.

> *Como llenar un estadio más allá de su capacidad diseñada para ver cuándo y cómo ceden las estructuras.*

### Application Security: Code Signing

* **Definition:** A security technique that uses a digital signature — created by hashing a file and encrypting the hash with the developer's private key — to verify the software author's identity and confirm that the code has not been altered since it was signed.

The code signing process:

1. Developer computes a **cryptographic hash** of the software file.
2. Hash is encrypted with the developer's **private key** to create the digital signature.
3. The software is distributed with a **code signing certificate** containing the developer's public key.
4. The recipient's OS uses the CA (Certification Authority) public key to **verify the signature** and confirm the code is unmodified, then asks the user whether to trust and run it.

> *Como un sello notarial en un documento: no garantiza que el contenido sea bueno, pero sí confirma quién lo firmó y que no fue alterado después de la firma.*

⚠️ **Exam Tip:** Code signing confirms **integrity and authenticity** — it does NOT guarantee the software is free of vulnerabilities. It only confirms the code has not been tampered with since the developer signed it.

### Application Security: Sandboxing

* **Definition:** A security mechanism that isolates running programs in a restricted environment, limiting the system resources and changes they can access, to safely execute untested or untrusted code without risking harm to the host system or network.

Sandboxes are used in browsers, email clients, and security research environments. They allow testing of potentially malicious code in a contained environment — including running multiple sandboxes with different operating systems on the same physical machine.

> *Como un terrario de vidrio para estudiar insectos peligrosos: los puedes observar y analizar sin riesgo de que escapen al resto del laboratorio.*

Sandboxes provide more comprehensive protection than traditional antivirus tools because they can test code against **multiple OS configurations** simultaneously.

---

## 4. Network Access Control (NAC)

* **Definition:** The objective domain (4.5) covering the security solution that scans and evaluates the security posture of devices attempting to connect to a network before granting access, enforcing compliance with security policies and quarantining non-compliant devices for remediation.

NAC applies to both **on-premises wired/wireless devices** and **remote VPN connections**. The device is placed in a virtual holding area during inspection. NAC enforces a **zero trust architecture** as part of a defense-in-depth strategy.

> *Como el control de sanidad en un aeropuerto internacional: si no cumples los requisitos de salud, no entras al país — esperas en cuarentena hasta que te pongas al día.*

**NAC inspection checks can include:**

- Basic authentication (e.g., EAP)
- Antivirus definition currency
- Operating system patch status
- Security configuration compliance

**Outcomes:**

- **Pass:** Device receives full network access.
- **Fail:** Device is placed in a **quarantine screened subnet** where it can receive updates and patches but cannot communicate with the rest of the network until it passes reinspection.

### NAC: Persistent vs. Non-Persistent Agents

* **Definition:** Persistent agents are software installed permanently on managed devices for continuous NAC enforcement; non-persistent agents are downloaded temporarily at connection time, perform a compliance scan, and then delete themselves — commonly used in BYOD environments.

| Agent Type         | Use Case                            | Behavior                                                |
| ------------------ | ----------------------------------- | ------------------------------------------------------- |
| **Persistent**     | Corporate-owned, managed devices    | Installed software, continuous monitoring               |
| **Non-Persistent** | BYOD, college campuses, guest Wi-Fi | Downloaded via captive portal, scans once, self-deletes |

> *El persistente es como un guardia de seguridad asignado permanentemente a tu escritorio. El no-persistente es como el guardia de seguridad temporal de un evento: llega, revisa tu credencial y se va.*

### NAC: IEEE 802.1X

* **Definition:** An IEEE standard for port-based network access control that provides authenticated access to wireless and wired networks, forming the foundation upon which most modern NAC solutions are built.

NAC can be implemented as a hardware or software solution, and most modern NAC platforms build additional features on top of the 802.1X foundation.

### NAC: Access Control Factors

* **Definition:** Rule-based criteria beyond health policy compliance that NAC systems use to grant or deny network access, including time, location, role, and logical rule sets.

| Factor                        | Description                                                         | Example                                                                                |
| ----------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Time-based**                | Restricts access to defined hours                                   | Block logins at 2 AM for 9–5 business                                                  |
| **Location-based**            | Evaluates geolocation of connection (IP, GPS)                       | Flag login from Italy when user always logs in from Florida                            |
| **Role-based (Adaptive NAC)** | Re-evaluates authorization based on what the device is trying to do | Block user laptop from accessing server management subnet, but allow a server to do so |
| **Rule-based**                | Logical if/then policy chains                                       | If user = instructor → allow; if user = student → deny                                 |

> *Como un edificio corporativo con diferentes niveles de acceso por tarjeta: el guardia no solo verifica tu identidad, sino también tu rol, la hora y desde dónde vienes.*

---

## 5. Web and DNS Filtering

* **Definition:** The objective domain (4.5) covering the techniques used to restrict or control the internet content users can access, in order to prevent productivity loss and protect against malicious websites.

This objective covers two distinct filtering approaches: **web filtering** (content-level filtering with six sub-methods) and **DNS filtering** (domain-resolution-level blocking).

> *Como tener dos líneas de defensa para proteger una casa: una reja en la entrada de la calle (DNS filtering) y guardias revisando a cada visitante que sí logra entrar (web filtering).*

### Web and DNS Filtering: Web Filtering (Content Filtering)

* **Definition:** A technique used to restrict or control the content a user can access on the internet, implemented through agents, proxies, URL scanning, content categorization, block rules, or reputation scoring.

> *Como un filtro de correo que no solo bloquea spam, sino que también organiza lo que entra según reglas definidas por la organización.*

#### Web Filtering: Agent-Based Web Filtering

* **Definition:** A web filtering method that installs a software agent on each device to enforce internet usage policies regardless of the network the device is connected to — ideal for remote and mobile workers.

Since the policy is applied **at the device level**, it works on corporate networks, public Wi-Fi, and home networks alike.

#### Web Filtering: Centralized Proxy

* **Definition:** A server that acts as an intermediary between users and the internet, evaluating all web requests against organizational policies before forwarding or blocking them.

When a user requests a website, the proxy evaluates it against policy. If compliant, the proxy retrieves the content on behalf of the user. If non-compliant, the request is blocked and an error message is returned.

#### Web Filtering: URL Scanning

* **Definition:** A technique that checks requested URLs against a database of known malicious websites before allowing or denying access.

If the URL is on the known-malicious list, access is blocked. If not found in the database, it is assumed safe and access is permitted.

#### Web Filtering: Content Categorization

* **Definition:** A method of classifying websites into categories (social media, adult content, gambling, etc.) so organizations can block or allow entire categories based on their usage policies.

#### Web Filtering: Block Rules

* **Definition:** Specific administrator-defined rules that prevent access to certain websites or IP addresses, often used reactively when a specific threat is identified (e.g., blocking an IP address used for data exfiltration).

#### Web Filtering: Reputation-Based Filtering

* **Definition:** A web filtering method that blocks or allows websites based on a reputation score assigned by a third-party service, factoring in the site's history of hosting malware, phishing, or other malicious activity.

### Web and DNS Filtering: DNS Filtering

* **Definition:** A security technique that blocks access to specific websites by preventing the DNS server from resolving blacklisted domain names into IP addresses, effectively stopping connections before they are established.

When a user requests a website, their device sends a DNS query. If the domain is on the **block list**, the DNS server refuses to return the IP address and the connection never occurs. If not on the block list, the IP address is returned and the user is redirected to the site.

> *Como arrancar las páginas de un directorio telefónico: si el número no aparece, no puedes llamar, aunque sepas que la empresa existe.*

DNS filtering is commonly used in schools, universities, and enterprise environments to enforce internet usage policies and prevent access to malicious or prohibited content.

---

## 6. Email Security

* **Definition:** The objective domain (4.5) covering the protocols and mechanisms used to safeguard email content, accounts, and infrastructure from unauthorized access, loss, or compromise.

This objective covers three email authentication protocols (**DKIM, SPF, DMARC**), the **email gateway** infrastructure, and **spam filtering** mechanisms.

> *Como un sistema de aduana para el correo: verifica la identidad del remitente, revisa que el paquete no haya sido alterado, y decide qué hacer si algo no cuadra.*

### Email Security: DKIM — DomainKeys Identified Mail

* **Definition:** An email authentication method that adds a cryptographic digital signature to outgoing email headers, allowing receiving servers to verify that the email was sent from the claimed domain and that the content was not modified in transit.

DKIM works by comparing the signature in the email header against the sender's **public key published in the domain's DNS records**. If the signature validates, the email is confirmed to be authentic and unmodified.

> *Como un sello de cera en una carta medieval: confirma quién la envió y que nadie la abrió en el camino.*

**Benefits:** Email authentication · Protection against email spoofing · Improved deliverability · Enhanced domain reputation

### Email Security: SPF — Sender Policy Framework

* **Definition:** An email authentication method that allows receiving mail servers to verify that an incoming email's sender IP address is authorized to send email on behalf of the claimed domain, as defined in that domain's DNS records.

When email arrives, the receiving server queries the sender's domain DNS records for the SPF record. If the sending IP is not listed as authorized, the email is flagged as spam or rejected.

> *Como una lista de empleados autorizados para hacer pedidos a nombre de una empresa: si el que llama no está en la lista, el proveedor rechaza el pedido.*

**Benefits:** Prevents email spoofing · Improved email deliverability · Enhanced domain reputation

### Email Security: DMARC — Domain-Based Message Authentication, Reporting, and Conformance

* **Definition:** An email validation system that builds on DKIM and SPF by verifying domain alignment between the authenticated domain and the visible "From" address, enforcing what receiving servers should do with emails that fail this check, and providing reporting back to the domain owner.

DMARC requires that at least one of DKIM or SPF passes AND is **aligned** — meaning the domain validated by DKIM or SPF must match the domain shown in the visible "From" header. This alignment check is what DMARC adds on top of DKIM/SPF individually: an attacker can pass SPF or DKIM using their own legitimately-configured domain while still spoofing the "From" address seen by the user. Without DMARC, SPF and DKIM alone don't prevent this.

The domain owner publishes a DMARC policy in DNS that tells receiving servers what to do when alignment or authentication fails (`none`, `quarantine`, `reject`), removing the inconsistency of each receiving server deciding independently how to handle failures.

> *Como el jefe de seguridad que no solo revisa los controles, sino que también verifica que la identificación coincida con la cara de la persona (alignment), define qué hacer cuando algo falla (advertencia, cuarentena o expulsión), y además le manda un reporte diario a la central de cuántos intentos sospechosos hubo.*

#### Email Security: DMARC — Reporting (rua/ruf)

* **Definition:** The mechanism by which DMARC sends aggregate (rua) and forensic (ruf) failure reports back to the domain owner, providing visibility into spoofing attempts that DKIM and SPF alone do not offer.

Neither DKIM nor SPF report back to the domain owner. DMARC's reporting function is what allows a domain owner to detect that their domain is actively being used for phishing or spoofing campaigns — something otherwise invisible without DMARC in place.

DMARC is the primary defense against **business email compromise (BEC)**, phishing emails, and email scams at the domain level.

⚠️ **Exam Tip:** Every enterprise email server should implement DMARC as a **minimum baseline** of email protection. DMARC requires only one of DKIM or SPF to pass (with alignment) — not both — but without DMARC, a passing SPF or DKIM check does not guarantee the visible "From" address is legitimate.

### Email Security: DNS Record Locations for SPF, DKIM, and DMARC

* **Definition:** The specific DNS TXT record locations where SPF, DKIM, and DMARC are published and validated, none of which require configuration within SMTP itself.

SMTP has no built-in authentication mechanism — that's precisely why SPF, DKIM, and DMARC exist as separate, DNS-based add-ons rather than features of SMTP itself.

| Method | Published At | Contains |
|---|---|---|
| **SPF** | TXT record at the domain root | List of IPs/servers authorized to send as that domain |
| **DKIM** | TXT record under a selector (e.g., `selector1._domainkey.empresa.com`) | The **public key** used to verify the signature |
| **DMARC** | TXT record at `_dmarc.empresa.com` | The policy (`none`/`quarantine`/`reject`) and reporting destination |

The one exception that touches the mail server (not DNS): DKIM's **private key** lives on the outbound mail server (the MTA — e.g., Postfix, Exchange, SendGrid), which uses it to cryptographically sign each outgoing email. The corresponding **public key** is what gets published in DNS for the receiving server to verify that signature against.

SPF and DMARC require no mail-server-side configuration at all — they are purely DNS records that the **receiving** server queries to validate.

> *El SMTP es el camión que transporta el paquete; el DNS es la oficina notarial donde están registrados los documentos que prueban que el remitente es quien dice ser. El camión no verifica nada — el receptor consulta la notaría (DNS) para confirmar.*

**Validation flow:**
---

### Email Security: Email Gateway

* **Definition:** A server or system that serves as the entry and exit point for all organizational email, responsible for routing, filtering, encryption/decryption, and policy enforcement of incoming and outgoing email traffic using SMTP.

Email gateways use **SMTP (Simple Mail Transfer Protocol)** to send and receive email. All email passes through the gateway before delivery.

> *Como la aduana de un aeropuerto: todo lo que entra y sale pasa por ahí, se inspecciona, y se permite o bloquea según las políticas vigentes.*

**Email gateway functions:**

- **Email routing:** Directs outgoing email to correct destinations; routes incoming email to the right inboxes.
- **Email security:** Scans for spam, phishing, and malware.
- **Policy enforcement:** Blocks outgoing emails containing sensitive data; blocks incoming emails from known-malicious senders.
- **Encryption/Decryption:** Encrypts outgoing and decrypts incoming emails to protect sensitive content in transit.

| Deployment Type | Description                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| **On-Premise**  | Physical server in the organization's own data center; maximum control but requires admin overhead     |
| **Cloud-Based** | Hosted by a third-party; highly scalable and low maintenance but higher cost and limited customization |
| **Hybrid**      | Combines both; balances control and convenience                                                        |

### Email Security: Spam Filtering

* **Definition:** A process that detects and blocks unsolicited, unwanted emails from reaching user inboxes using techniques such as content analysis, Bayesian filtering, DNS-based blocklists, and predefined email filtering rules.

Spam filtering analyzes email content for commonly used spam language (e.g., "lottery," "free," "prize") and evaluates sender reputation to determine if an email should be delivered, quarantined, or rejected.

> *Como un portero de club que tiene una lista negra de palabras: si tu mensaje de entrada incluye frases prohibidas, no pasas.*

---

## 7. Endpoint Detection and Response (EDR)

* **Definition:** The objective domain (4.5) covering the cybersecurity technology category that continuously monitors endpoint devices for signs of threats, records data in a centralized database, and enables security analysts to investigate, respond to, and remediate identified threats.

This objective covers three related but distinct technologies: **EDR** itself, **File Integrity Monitoring (FIM)** as a component technology, and **Extended Detection and Response (XDR)** as the evolved, multi-layer successor.

> *Como la evolución de un sistema de seguridad: primero cámaras enfocadas en una sola entrada (EDR), un sistema de sellos que detecta manipulación de objetos específicos (FIM), y finalmente una central de monitoreo que conecta todas las entradas, cámaras y sensores del edificio en un solo panel (XDR).*

### EDR: The Six-Step EDR Process

* **Definition:** The operational workflow used by EDR solutions to continuously monitor and gather endpoint data, consisting of data collection, data consolidation, threat detection, alerts and threat response, threat investigation, and remediation.
1. **Data Collection:** Gathered from all endpoints (desktops, laptops, mobile devices) — system processes, registry changes, memory usage, network traffic patterns.
2. **Data Consolidation:** Collected data is sent to a centralized security database (on-premise or cloud) for analysis.
3. **Threat Detection:** Uses **signature-based detection** (known malicious patterns) and **behavior-based detection** (abnormal behavior deviating from baseline).
4. **Alerts and Threat Response:** Sends alerts to the security team or performs automated containment actions, such as isolating the affected endpoint from the network.
5. **Threat Investigation:** Provides detailed timelines of endpoint activity and forensic data to determine the threat's nature, origin, and impact.
6. **Remediation:** Removes malicious files, reverses changes made by the threat, and restores systems to a secure baseline.

### EDR: Extended Detection and Response (XDR)

* **Definition:** A security strategy that integrates multiple protection technologies (endpoint, network, email, server, cloud) into a single unified platform to improve threat detection accuracy, automate correlation across security layers, and simplify incident response.
> By using an extended detection and response solution, you no longer need to have separate solutions for your network security, email security, and endpoint security. Instead, your organization can consolidate these separate solutions into a single, consolidated platform.

XDR extends the capabilities of EDR by collecting and correlating data **across all security layers simultaneously**, eliminating the need for separate, siloed security solutions.

> *Como un sistema de seguridad de un aeropuerto moderno: en lugar de tener cámaras, detectores de metales y scanners de equipaje como sistemas separados, todo está integrado en una sola consola que correlaciona las alertas.*

### EDR: File Integrity Monitoring (FIM)

* **Definition:** A security control that validates the integrity of operating system and application files by continuously comparing their current cryptographic hash values against a known-good baseline, alerting when unauthorized changes are detected.

FIM uses an **agent** to monitor critical system files. Each file is **hashed** and the hash digest is stored in a secure baseline database. If an unauthorized change is detected (the current hash no longer matches the baseline), the security team is alerted to investigate whether this is a true security breach.

> *Como un inventario sellado de un museo: cada objeto tiene una etiqueta de seguridad. Si la etiqueta no coincide al verificar, algo fue movido o reemplazado.*

FIM monitors: binary files · system application files · configuration files · parameter files. It is often included as a component of broader EDR or XDR solutions.


| Technology | Scope                                        | Focus                                           |
| ---------- | -------------------------------------------- | ----------------------------------------------- |
| **EDR**    | Endpoints only                               | Computers, laptops, mobile devices              |
| **XDR**    | Endpoints + Network + Email + Cloud + Server | All security layers, correlated in one platform |
| **FIM**    | File system integrity                        | Often included as a component of EDR/XDR        |

---

## 8. User Behavior Analytics (UBA) // User and Entity Behavior Analytics (UEBA) 

* **Definition:** The objective domain (4.5) covering the advanced cybersecurity strategy that uses big data, machine learning, and statistical analysis to establish a baseline of normal user behavior, then continuously monitors for anomalies that may indicate insider threats, compromised credentials, or external attacks.

UBA collects data from network traffic, user devices, and application logs to learn what **normal** looks like for each user. Deviations from the baseline trigger alerts for security team review.

> *Como un banco que conoce tus patrones de compra: si de repente aparece una transacción desde otro país a las 3 AM, el sistema lo marca automáticamente como sospechoso.*

**UBA use cases:**

- A user who always logs in during business hours suddenly logs in at 2 AM → flagged as anomalous.
- An instructor suddenly attempting to access HR or financial data they have never accessed before → flagged as suspicious.
- A user account that normally reads data suddenly attempts to modify or delete data → flagged as potentially compromised.

**Key benefits:**

- **Early threat detection:** Identifies threats before significant damage occurs (e.g., flagging a large data download as a potential exfiltration attempt that manual log review might miss for weeks).
- **Insider threat detection:** Detects subtle behavioral changes invisible to signature-based tools.
- **Improved incident response:** Provides detailed behavioral timelines to accelerate investigation; can automatically log out a user account suspected of compromise.

### UBA: UEBA — User and Entity Behavior Analytics

* **Definition:** An extension of UBA that expands monitoring beyond user accounts to include entities — network devices such as routers, servers, and endpoints — providing a more comprehensive view of anomalous activity across the entire network environment.

> *UBA monitorea a las personas; UEBA monitorea a las personas Y a las máquinas.*

---

## 9. Selecting Secure Protocols

* **Definition:** The objective domain (4.5) covering the process of choosing encrypted protocols, appropriate ports, and the correct transport method to ensure that data confidentiality, integrity, and reliability are maintained across an enterprise network.

This objective covers three independent decisions an architect must make: **protocol selection** (encrypted vs. plaintext), **port selection** (which logical port and range to use), and **transport method selection** (TCP vs. UDP).

> *Como elegir entre enviar dinero en efectivo por correo ordinario o en un sobre blindado con rastreo: ambos llegan, pero solo uno es seguro.*

### Selecting Secure Protocols: Protocol Selection

* **Definition:** The practice of choosing encrypted, authenticated network protocols over their plaintext equivalents to ensure data confidentiality, integrity, and authenticity during transmission across networks.

The fundamental rule: **always choose the encrypted version of a protocol** when one is available. Most secure protocols are simply the insecure version with an "S" appended (HTTPS, SFTP, SMTPS, IMAPS, POP3S, SNMPS). **Telnet vs. SSH** is a notable exception to the "just add S" naming pattern — Telnet transmits everything (including login credentials) in plaintext, vulnerable to on-path/eavesdropping attacks, while SSH encrypts the entire session using strong passwords and public key authentication.

| Use Case                    | Insecure Protocol | Secure Protocol                 |
| --------------------------- | ----------------- | ------------------------------- |
| Web browsing                | HTTP (port 80)    | HTTPS (port 443)                |
| File transfer               | FTP               | SFTP (encrypted via SSH tunnel) |
| Remote CLI admin            | Telnet            | SSH                             |
| Send email                  | SMTP (port 25)    | SMTPS (port 587)                |
| Receive email (download)    | POP3 (port 110)   | POP3S (port 995)                |
| Receive email (server-side) | IMAP (port 143)   | IMAPS (port 993)                |

### Selecting Secure Protocols: Port Selection

* **Definition:** The process of assigning logical port numbers to network services and protocols, following the principle of least privilege by opening only ports required for authorized applications and blocking all others to minimize the attack surface.

Ports are categorized into three ranges:

| Range                       | Ports         | Description                                                |
| --------------------------- | ------------- | ---------------------------------------------------------- |
| **Well-Known Ports**        | 0–1023        | Reserved for system/core services (HTTP, HTTPS, SSH, etc.) |
| **Registered Ports**        | 1024–49,151   | Used by software applications                              |
| **Dynamic / Private Ports** | 49,152–65,535 | Randomly assigned by the OS for client-side connections    |

> *Como los canales de radio: los bien conocidos son la AM/FM estándar que todo el mundo conoce; los registrados son los canales de cable asignados; los dinámicos son frecuencias temporales que el sistema asigna según necesidad.*

**Using non-default ports:** Some organizations use non-standard port numbers (e.g., port 8888 for HTTP) to add obscurity. This provides minimal security benefit and should **never replace** proper authentication, encryption, and patching. It also increases administrative and troubleshooting complexity.

⚠️ **Exam Tip:** Follow the **principle of least privilege** for ports — open only what is necessary for each application. Block everything else on the firewall.

### Selecting Secure Protocols: Transport Method Selection (TCP vs. UDP)

* **Definition:** The choice between TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) as the transport layer method for data transmission, based on whether data integrity or transmission speed is the higher priority for the application.

> *Como elegir entre un servicio de mensajería con confirmación de entrega (TCP) y un reparto masivo de volantes sin seguimiento (UDP): uno garantiza que llegó; el otro es más rápido pero no verifica.*

#### Transport Method: TCP

* **Definition:** A connection-oriented transport layer protocol that establishes a connection before transmitting data, uses acknowledgements, sequencing, and retransmission to guarantee error-free, in-order data delivery.

TCP is used when **data accuracy is paramount**: web servers, email servers, file transfers. It adds overhead but ensures that every packet arrives correctly and in the right order.

#### Transport Method: UDP

* **Definition:** A connectionless transport layer protocol that sends data without establishing a connection, provides no error checking or guaranteed delivery, and prioritizes transmission speed over accuracy.

UDP is used when **speed matters more than perfect accuracy**: streaming video, VoIP, online gaming. Lost packets in video streaming typically go unnoticed by the human eye (30 FPS; losing 1 frame is imperceptible).

| Characteristic         | TCP                                     | UDP                           |
| ---------------------- | --------------------------------------- | ----------------------------- |
| **Connection**         | Connection-oriented (handshake)         | Connectionless                |
| **Delivery guarantee** | Yes — acknowledgements + retransmission | No                            |
| **Error checking**     | Yes                                     | No                            |
| **Speed**              | Slower (overhead)                       | Faster (low overhead)         |
| **Use cases**          | Web, email, file transfer               | Video streaming, VoIP, gaming |

---

## 🗝️ Key Terms Glossary

| Term                              | Definition                                                                                           |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **WAP**                           | Wireless Access Point — device allowing wireless connection to a wired network via 802.11            |
| **ESS**                           | Extended Service Set — multiple WAPs working together to provide merged wireless coverage            |
| **Co-channel interference**       | Interference from two WAPs using the same channel in overlapping coverage areas                      |
| **Adjacent channel interference** | Interference from WAPs using channels close enough in frequency to overlap                           |
| **Site survey**                   | RF environment assessment to plan optimal WAP placement and channel selection                        |
| **Heat map**                      | Graphical visualization of wireless signal strength and coverage across a physical space             |
| **WEP**                           | Wired Equivalent Privacy — broken wireless encryption; weak 24-bit IV                                |
| **WPA**                           | Wi-Fi Protected Access — interim replacement for WEP; uses TKIP                                      |
| **WPA2**                          | Wi-Fi Protected Access 2 — uses AES + CCMP; vulnerable to KRACK                                      |
| **WPA3**                          | Wi-Fi Protected Access 3 — current standard; SAE, Enhanced Open, AES-GCMP, MFP                       |
| **SAE**                           | Simultaneous Authentication of Equals — WPA3 key exchange based on Diffie-Hellman                    |
| **OWE**                           | Opportunistic Wireless Encryption / Enhanced Open — per-client encryption on open networks           |
| **MFP**                           | Management Frame Protection — encrypts wireless management frames in WPA3                            |
| **TKIP**                          | Temporal Key Integrity Protocol — WPA's per-packet key generation (now deprecated)                   |
| **CCMP**                          | Counter Cipher Mode with Block Chaining MAC Protocol — WPA2 encryption mechanism                     |
| **AES-GCMP**                      | Galois Counter Mode Protocol — WPA3's encryption (128-bit personal, 192-bit enterprise)              |
| **KRACK**                         | Key Reinstallation Attack — 2016 attack demonstrating WPA2 vulnerability                             |
| **AAA**                           | Authentication, Authorization, Accounting — security framework for network access control            |
| **RADIUS**                        | Remote Authentication Dial-In User Service — centralized AAA via UDP                                 |
| **TACACS+**                       | Terminal Access Controller Access-Control System Plus — separates AAA; encrypts full payload via TCP |
| **EAP**                           | Extensible Authentication Protocol — framework for multiple authentication methods                   |
| **PEAP**                          | Protected EAP — wraps EAP in TLS tunnel; dual-sided certificates                                     |
| **EAP-TTLS**                      | EAP Tunneled TLS — server-only cert; transports second auth protocol inside tunnel                   |
| **EAP-FAST**                      | EAP Flexible Authentication via Secure Tunneling — Cisco; uses PACs for fast re-auth                 |
| **Application Security**          | Blueprint objective covering input validation, secure cookies, SAST, DAST, code signing, sandboxing  |
| **Input validation**              | Ensuring all application inputs meet defined criteria before processing                              |
| **Secure cookies**                | Cookies configured with Secure, HttpOnly, and SameSite attributes                                    |
| **SAST**                          | Static Application Security Testing — source code analysis before execution                          |
| **DAST**                          | Dynamic Application Security Testing — analysis of running application                               |
| **Fuzzing**                       | Injecting random/malformed data to discover crashes and security flaws                               |
| **Stress testing**                | Evaluating system stability under extreme load conditions                                            |
| **Code signing**                  | Using a digital signature to confirm software author identity and code integrity                     |
| **Sandboxing**                    | Isolating untrusted code in a restricted environment to prevent system harm                          |
| **NAC**                           | Network Access Control — scans and enforces security posture before granting network access          |
| **802.1X**                        | IEEE standard for port-based network access control                                                  |
| **Adaptive NAC**                  | Role-based NAC that re-evaluates authorization based on what the device is trying to do              |
| **Web filtering**                 | Restricting internet access by agent, proxy, URL scan, categorization, block rules, or reputation    |
| **DNS filtering**                 | Blocking website access by preventing DNS resolution of blacklisted domain names                     |
| **DKIM**                          | DomainKeys Identified Mail — email header digital signature for sender/content verification          |
| **SPF**                           | Sender Policy Framework — validates sender IP against domain's authorized IP list in DNS             |
| **DMARC**                         | Domain-based Message Authentication, Reporting, and Conformance — policy for DKIM/SPF failures       |
| **SMTP**                          | Simple Mail Transfer Protocol — used by email gateways (port 25 insecure, port 587 secure)           |
| **Email gateway**                 | Entry/exit server for all organizational email — handles routing, security, and encryption           |
| **Spam filtering**                | Detecting and blocking unwanted emails via content analysis, Bayesian filtering, and blocklists      |
| **EDR**                           | Endpoint Detection and Response — continuous endpoint monitoring and threat response                 |
| **FIM**                           | File Integrity Monitoring — hash-based detection of unauthorized changes to critical files           |
| **XDR**                           | Extended Detection and Response — unified platform correlating endpoint, network, email, and cloud   |
| **UBA**                           | User Behavior Analytics — ML-based detection of anomalous user behavior                              |
| **UEBA**                          | User and Entity Behavior Analytics — UBA extended to include network devices and entities            |
| **HTTPS**                         | HTTP Secure — encrypted web protocol using TLS; port 443                                             |
| **SFTP**                          | Secure File Transfer Protocol — file transfer over SSH tunnel                                        |
| **SSH**                           | Secure Shell — encrypted remote CLI administration protocol                                          |
| **SMTPS**                         | SMTP Secure — encrypted email sending; port 587                                                      |
| **POP3S**                         | POP3 Secure — encrypted email retrieval (downloads); port 995                                        |
| **IMAPS**                         | IMAP Secure — encrypted server-side email access; port 993                                           |
| **TCP**                           | Transmission Control Protocol — connection-oriented; guaranteed, ordered, error-checked delivery     |
| **UDP**                           | User Datagram Protocol — connectionless; fast, no guarantee; used for streaming/gaming               |