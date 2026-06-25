# 🛡️ CompTIA Security+ SY0-701 — Dion Training

## Section 17: Identity and Access Management (IAM) Solutions | Study Summary

> **Keywords:** IAM · Identification · Authentication · Authorization · Accounting · MFA · SSO · PAM · LDAP · OAuth · SAML · Federation · Access Control · Least Privilege

---

## 1. Identity and Access Management (IAM)

* **Definition:** A framework of policies, processes, and technologies that ensures the right individuals have access to the right resources at the right times for the right reasons, encompassing identification, authentication, authorization, and accounting.

IAM is a critical component of any enterprise security plan because it is linked to both the **cybersecurity** and **productivity** of an organization. IAM technologies provide tools for business processes that facilitate the management of electronic identities, including password management, network access control, and management of digital identities.

> *Imagina que eres el gerente de un edificio de oficinas: IAM es el sistema completo que controla quién puede entrar, a qué pisos puede subir, qué puede hacer adentro y de quién guarda registro de todas esas actividades. Sin ese sistema, cualquiera podría entrar a cualquier lugar.*

The four main processes of IAM are:

| Process | Description |
| --- | --- |
| **Identification** | User claims an identity (username, email) |
| **Authentication** | System verifies the claimed identity |
| **Authorization** | System determines what the authenticated user can access |
| **Accounting (Auditing)** | System tracks and records user activities |

---

## 2. IAM: Identification

* **Definition:** The process where a user claims an identity to a system, typically using a unique identifier such as a username or email address.

Identification ensures that users are considered legitimate by the system. For example, when operating an e-commerce website, you might verify that billing and delivery addresses match what the user has stated to prevent fraudulent payment methods.

> *Es como llegar a la recepción de un hotel y decir tu nombre. Todavía no te piden el pasaporte — simplemente estás declarando quién eres. El sistema todavía no sabe si eres realmente tú.*

---

## 3. IAM: Authentication

* **Definition:** The process of verifying the claimed identity of a user, device, or system, typically by validating credentials against a database of authorized users.

After a user provides their username (identification), authentication requires them to prove that identity — through a password, biometric characteristic, or combination of multiple factors.

> *Siguiendo con el hotel: es cuando el recepcionista te pide el pasaporte o tu ID. Ahora sí están verificando que tú eres quien dices ser.*

---

## 4. IAM: Authorization

* **Definition:** The process that determines what permissions or levels of access an authenticated user has within a system.

Authorization happens **after** authentication succeeds. For example, an employee in HR should have access to personnel files, while an employee in Finance might only access financial data. Authorization enforces separation of duties and least privilege.

> *Ya te verificaron en el hotel. Ahora la llave que te dan solo abre tu habitación y las áreas comunes, no las habitaciones de otros huéspedes ni la bodega del personal. Eso es autorización.*

---

## 5. IAM: Accounting (Auditing)

* **Definition:** The process of tracking and recording user activities — including logins, logouts, actions performed, and system changes — for security monitoring, compliance, and forensic purposes.

Accounting helps organizations to detect potential security incidents, find vulnerabilities, and provide evidence in the case of a security breach. It answers the question: *who did what, when, and from where?*

> *Es la cámara de seguridad del hotel que graba quién entró a cada cuarto, a qué hora y cuánto tiempo estuvo adentro. Aunque no previene el problema, es la evidencia que permite investigarlo después.*

---

## 6. IAM: Provisioning and Deprovisioning

* **Definition:** Provisioning is the process of creating user accounts and assigning appropriate permissions when a user joins. Deprovisioning is the process of removing access rights when a user no longer needs them, such as when they leave the organization.

**Provisioning** includes setting up email accounts, access to internal networks, and any other systems required for the user's job function.

**Deprovisioning** is critical to prevent unauthorized access to sensitive information and to prevent insider threats from former employees. Failure to deprovision promptly is a common security gap.

> *Provisioning es cuando le hacen una llave nueva al empleado el primer día. Deprovisioning es asegurarse de que devuelva TODAS las llaves el último día y que esas llaves sean desactivadas inmediatamente, porque un ex-empleado enojado con acceso activo es una bomba de tiempo.*

⚠️ **Exam tip:** Deprovisioning is particularly important to prevent **insider threats** from employees who have left the organization.

---

## 7. IAM: Identity Proofing

* **Definition:** The process of verifying the identity of a user *before* an account is created, typically by checking personal details against a trusted data source or requiring government-issued identification.

Identity proofing prevents fraudulent account creation. It can involve checking a driver's license, passport, or other verifiable identity documents before onboarding a user into the system.

> *Es como cuando abres una cuenta bancaria y te piden llevar dos formas de identificación. El banco no te crea la cuenta solo porque llegaste y dijiste quién eras.*

---

## 8. IAM: Interoperability

* **Definition:** The ability of different systems, devices, and applications to work together and share identity and access information seamlessly, often using standards like SAML or OpenID Connect.

Interoperability in IAM allows for secure, seamless authentication and authorization between different systems within or across organizational boundaries. Without interoperability standards, each system would require its own separate authentication mechanism.

> *Es como los enchufes de viaje universales. SAML y OpenID Connect son los adaptadores que permiten que el sistema de identidad de una empresa se "enchufe" correctamente a los sistemas de otra empresa sin cortocircuitos.*

---

## 9. IAM: Attestation

* **Definition:** The process of validating that user accounts and access rights are correct and up-to-date, typically through regular reviews and audits to ensure users have only the minimum access necessary for their role.

Attestation is a periodic review process — often quarterly or annually — where managers confirm that their direct reports still require the specific permissions they currently hold. This combats **permission creep**.

> *Es la auditoría anual donde el jefe de cada departamento revisa la lista de quién tiene acceso a qué y confirma: "sí, esta persona todavía necesita este acceso" o "espera, este empleado ya no trabaja aquí — ¿por qué sigue teniendo acceso?"*

---

## 10. Multifactor Authentication (MFA)

* **Definition:** A security system that requires more than one method of authentication from independent categories of credentials to verify a user's identity, creating a layered defense against unauthorized access.

The goal of MFA is to make it significantly harder for unauthorized persons to access a target, even if one credential factor is compromised. MFA combines at least two factors from across five independent categories.

> *Es como una caja fuerte con dos llaves diferentes que pertenecen a dos personas distintas: aunque un ladrón consiga la llave de uno, sin la del otro no puede abrirla. Cada factor adicional es otra llave de un tipo diferente.*

### MFA Authentication Factors

| Factor | Category | Examples |
| --- | --- | --- |
| **Something you know** | Knowledge-based | Password, PIN, security question |
| **Something you have** | Possession-based | Smart card, hardware token (key fob), software token, SMS OTP |
| **Something you are** | Inherence-based (biometric) | Fingerprint, facial recognition, iris scan, voice recognition |
| **Something you do** | Behavior-based | Keystroke dynamics, mouse movement patterns, gait recognition |
| **Somewhere you are** | Location-based | GPS location, IP address verification, network-based restriction |

⚠️ **Exam tip:** A username + password + security question is **single-factor** (all three are "something you know"). Two factors only count as MFA when they come from **different categories**.

---

## 11. MFA: Something You Know (Knowledge Factor)

* **Definition:** An authentication factor based on information only the user should know, such as a password, PIN, or answer to a security question.

This is the most commonly used authentication factor. Its weakness is that it can be guessed, stolen via phishing, or cracked via brute force if the password is weak. It should always be combined with at least one other factor for sensitive systems.

> *Es la combinación de la caja fuerte que solo tú te sabes. El problema es que si alguien te ve marcarla, o si la escribiste en un papel pegado en el refrigerador, ya no es un secreto.*

---

## 12. MFA: Something You Have (Possession Factor)

* **Definition:** An authentication factor based on a physical object the user possesses, such as a smart card, hardware token (key fob), software token, or device receiving an SMS code.

**Smart cards** are credit-card-sized cards embedded with an integrated circuit used in high-security access systems. **Hardware tokens (key fobs)** generate a unique code every 30–60 seconds. **Software tokens** (authenticator apps like Google Authenticator or Microsoft Authenticator) perform the same function without dedicated hardware. **SMS-based OTPs** send a time-limited code to the user's registered phone number.

> *Es la llave física de tu casa. Aunque alguien sepa tu dirección (algo que sabes), sin la llave física no puede entrar. El problema es que se puede perder, robar o copiar.*

---

## 13. MFA: Something You Are (Inherence / Biometric Factor)

* **Definition:** An authentication factor based on unique biological characteristics of the user, including fingerprints, facial recognition, iris scans, or voice recognition.

Apple's Touch ID has approximately a **1 in 50,000** chance of a false acceptance. Apple's Face ID improves this to approximately **1 in 1,000,000**, making it ~20 times more secure. Biometric factors are increasingly popular due to their difficulty to replicate.

> *Es como el escáner de retina de una película de espías: no importa cuántas contraseñas roben, no pueden arrancarle los ojos al dueño. Tu cuerpo mismo es la credencial.*

---

## 14. MFA: Somewhere You Are (Location Factor)

* **Definition:** An authentication factor that uses the user's geographic location — determined via GPS, IP address, or network context — to permit or deny access.

Location-based factors can restrict access to users within specific countries, regions, or network segments. For example, blocking logins from IP addresses outside the United States, or requiring the user to be connected to the corporate VPN.

> *Es como la restricción de un concierto que solo vende boletos a personas dentro del país. No importa qué tan legítimo sea tu nombre y tu tarjeta: si estás en el lugar equivocado, no entras.*

---

## 15. MFA: Something You Do (Behavior Factor)

* **Definition:** An authentication factor based on unique behavioral patterns associated with a user, such as keystroke dynamics, mouse movement patterns, typing rhythm, or interaction style with a device.

This is one of the newer authentication categories and is often used as a **secondary or passive factor**, rarely as a standalone factor. Behavioral biometrics can continuously authenticate a user throughout a session, not just at login.

> *Es como reconocer a alguien por la forma en que camina o escribe a máquina. Aunque alguien tome el control de tu sesión, el sistema puede detectar que los patrones de escritura o movimiento del mouse son diferentes.*

---

## 16. Passkeys

* **Definition:** A passwordless authentication mechanism that uses public key cryptography, where the private key is stored securely on the user's device (protected by the device's lock screen) and the corresponding public key is stored on the authentication server.

Passkeys eliminate the need to remember or type a password. When a user registers, a key pair is generated. To authenticate, the user simply unlocks their device (fingerprint, Face ID, PIN, or pattern) and the device presents the stored passkey to the service. Since only public keys are stored on the server, a server breach **does not expose user credentials**. Each passkey is unique to the service it was created for, preventing phishing misuse.

> *Es como si tu huella digital fuera la llave maestra y tu teléfono fuera el llavero inteligente que nunca comparte la llave real, solo demuestra que la tienes. Aunque hackeen el sitio web, solo consiguen la cerradura, no la llave.*

Benefits of passkeys include increased login success rates, lower drop-off rates, improved conversion rates, reduced MFA costs, and strong resistance to phishing and credential stuffing attacks.

---

## 17. Password Security — Password Policies

* **Definition:** A set of rules and requirements enforced by an organization to ensure that users create strong passwords that are resistant to guessing, dictionary attacks, and brute-force attacks.

Five key characteristics of strong password policies:

| Policy Element | Recommendation | Why It Matters |
| --- | --- | --- |
| **Password Length** | Minimum 12–16 characters | Each added character exponentially increases cracking time |
| **Password Complexity** | Mix of uppercase, lowercase, numbers, special chars | Expands the keyspace from 10 (digits only) to 72+ characters per position |
| **Password Reuse** | Enforce history of 24 passwords | Prevents users from cycling back to compromised old passwords |
| **Password Expiration** | 90 days (reconsidering per NIST) | Forces periodic rotation; NIST no longer recommends this without a password manager |
| **Password Age (Minimum)** | 3+ days before next change allowed | Prevents users from rapidly cycling through history to reuse old password |

> *La política de contraseñas es como el reglamento de seguridad de un banco: define qué tan fuerte debe ser la caja fuerte, con qué frecuencia se cambia la combinación y cuántas combinaciones anteriores no se pueden reutilizar.*

⚠️ **Exam tip:** NIST no longer recommends mandatory periodic password expiration unless a password manager is in use, due to the predictable weakening behavior it induces (e.g., `Password1` → `Password2` → `Password3`).

---

## 18. Password Security — Password Managers

* **Definition:** Tools that securely store and manage passwords in an encrypted vault, generate strong unique passwords for each account, and automatically fill credentials during login.

Key features of password managers include **password generation** (creates long, complex, unique passwords per site), **autofill** (reduces human error during login), **secure sharing** (allows sharing access without revealing the actual password), and **cross-platform access** (available on all devices). Examples include Bitwarden, 1Password, and Dashlane.

> *El gestor de contraseñas es como tener un mayordomo de seguridad que recuerda miles de llaves diferentes, cada una específica para una puerta, y cuando llegas a la puerta correcta, él mismo la abre por ti sin que tengas que memorizar nada.*

---

## 19. Password Security — Passwordless Authentication

* **Definition:** Authentication methods that verify a user's identity without requiring a typed password, using biometrics, hardware tokens, one-time passwords, magic links, or passkeys.

| Method | Description |
| --- | --- |
| **Biometric Authentication** | Fingerprint, face scan, or iris used to authenticate |
| **Hardware Token** | Physical security key generates a short-lived login code |
| **One-Time Password (OTP)** | Code sent to email or phone, valid for 3–10 minutes, single use |
| **Magic Link** | Link sent to email; clicking it logs the user in automatically |
| **Passkey** | Browser/OS-integrated; uses device lock screen (fingerprint/PIN) |

> *La autenticación sin contraseña es como entrar a tu casa con reconocimiento facial en lugar de buscar la llave. Es más rápido, más seguro y no puedes "olvidar" tu cara como sí puedes olvidar una contraseña.*

---

## 20. Password Attacks

* **Definition:** Techniques used by attackers to recover or bypass passwords, including brute force, dictionary, password spraying, and hybrid attacks.

> *Los ataques de contraseñas son como los métodos que usaría un ladrón para abrir tu candado: probar cada combinación posible, usar una lista de combinaciones comunes, o probar las más comunes en muchos candados a la vez.*

### Types of Password Attacks

| Attack Type | Method | Best Defense |
| --- | --- | --- |
| **Brute Force** | Tries every possible character combination | Long + complex passwords; account lockout; MFA; CAPTCHA |
| **Dictionary** | Uses a list of common passwords / "leet speak" variants | Complex unique passwords; MFA; lockout |
| **Password Spraying** | Tries a few common passwords against many accounts | Unique passwords; MFA; lockout policies |
| **Hybrid** | Combines dictionary words with brute-forced appended characters | Long + complex passwords; MFA |

---

## 21. Password Attack: Brute Force

* **Definition:** An attack that systematically tries every possible combination of characters until the correct password is found.

A 4-digit PIN has only 10,000 combinations and can be cracked in minutes by modern software (500–1,000 attempts/second). Increasing length exponentially increases difficulty: an 8-digit PIN has 100 million combinations — 10,000× more than a 4-digit PIN.

Mitigations: increase password complexity, increase length, limit login attempts, use MFA, implement CAPTCHA.

> *Es como un ladrón que prueba todas las combinaciones de un candado de 4 dígitos, una por una. Con un candado sencillo lo logra en minutos. Pero si el candado tiene 20 dígitos alfanuméricos, tardaría más años que la edad del universo.*

---

## 22. Password Attack: Dictionary Attack

* **Definition:** An attack that uses a pre-compiled list ("hacker's dictionary") of common passwords and their variants — including leet speak substitutions — to attempt to match a stored password hash.

Unlike attacks using actual dictionary words, modern dictionary attacks use extensive wordlists including common passwords with letter-to-number/symbol substitutions (e.g., `p@$$w0rd`). These substitutions are known as **leet speak**.

> *En lugar de probar cada llave posible, el ladrón lleva consigo las 10,000 llaves más comunes del mundo. La mayoría de las puertas en el mundo usan una de esas. Si la tuya es una de ellas, te abre en segundos.*

---

## 23. Password Attack: Password Spraying

* **Definition:** An attack that tries a small number of commonly used passwords against a large number of accounts, specifically to avoid triggering account lockout policies.

Password spraying is effective because in any large organization, statistically some users will be using weak passwords like `Password1`. By attempting only a few passwords per account, the attacker avoids detection by lockout thresholds.

⚠️ **Exam tip:** Password spraying is the **inverse** of brute force — instead of many attempts on one account, it makes few attempts across many accounts.

> *En lugar de romper una caja fuerte específica con miles de intentos, el ladrón prueba "1234" en todas las cajas fuertes del edificio. Eventualmente alguna la tiene como combinación.*

---

## 24. Password Attack: Hybrid Attack

* **Definition:** An attack that combines elements of dictionary and brute force attacks — starting with dictionary words and then appending or modifying them with numbers, symbols, or patterns.

Hybrid attacks are effective when an organization enforces predictable password formats (e.g., "8-letter word + 6-digit number"). An attacker can use a dictionary for the word component and brute force the numeric portion.

> *Es el ladrón inteligente que sabe que el reglamento del edificio obliga a que todas las contraseñas sean una palabra más un número. Entonces busca palabras comunes en su diccionario y le agrega fuerza bruta solo al número. Mucho más eficiente que probar todo desde cero.*

---

## 25. Single Sign-On (SSO)

* **Definition:** An authentication process that allows a user to access multiple applications or websites by logging in only once with a single set of credentials, eliminating the need to authenticate separately to each system.

SSO works based on a **trusted relationship** established between an application and an **Identity Provider (IdP)**. The IdP creates, maintains, and manages identity information and provides authentication services to relying applications.

> *Es el pase VIP de un festival de música: lo validas una vez en la entrada principal y puedes entrar a todos los escenarios sin que te lo pidan de nuevo en cada uno. El festival (IdP) garantizó al personal de cada escenario que ya fuiste verificado.*

### SSO Benefits

| Benefit | Description |
| --- | --- |
| **Improved user experience** | One set of credentials for all systems |
| **Increased productivity** | No time lost logging into each application separately |
| **Reduced IT support cost** | Fewer password reset requests to the helpdesk |
| **Enhanced security** | Encourages stronger passwords; reduces password reuse across sites |

---

## 26. SSO: LDAP

* **Definition:** The Lightweight Directory Access Protocol (LDAP) is a protocol used to access and maintain distributed directory information services over an IP network, commonly used as a centralized repository for user information and authentication.

LDAP acts as the directory backbone for SSO in enterprise networks. It stores user information (names, groups, roles, certificates) and allows applications to query this directory to authenticate users and determine their authorization level.

LDAP supports both plaintext transmission and a secure version: **LDAPS** (LDAP over SSL/TLS or StartTLS), which encrypts data in transit.

> *LDAP es como la guía telefónica de la empresa, pero inteligente. Cuando una aplicación necesita saber quién eres y qué puedes hacer, consulta esa guía. Y si usas LDAPS, la guía viene en un sobre sellado y cifrado para que nadie la intercepte en el camino.*

---

## 27. SSO: OAuth

* **Definition:** Open Authorization (OAuth) is an open standard for token-based authentication and authorization that allows third-party services to access user account information without exposing the user's password.

OAuth is commonly seen when a website offers "Log in with Google" or "Log in with Facebook." The user grants the third-party application access to specific scopes of their account (name, email, profile photo) without sharing their actual password. OAuth uses **JSON Web Tokens (JWT)** formatted as Base64-encoded strings in URLs and HTTP headers, which can be digitally signed for authentication and integrity.

> *OAuth es como darle a alguien un voucher de acceso limitado en lugar de darle tu llave. El voucher dice "esta persona puede ver mi sala pero no puede entrar a mi cuarto ni abrir mi caja fuerte." Tú nunca compartiste la llave real.*

---

## 28. SSO: SAML

* **Definition:** Security Assertion Markup Language (SAML) is an XML-based standard for exchanging authentication and authorization data between an Identity Provider (IdP) and a Service Provider (SP), enabling SSO across different organizations and systems.

When a user logs in using SAML, the service provider redirects the user to the IdP with a SAML request. The IdP verifies the user's identity and sends an assertion (a cryptographically signed XML document) back to the service provider, which then grants access. SAML **decouples** the service from the identity verification — the service provider does not authenticate the user directly; it receives confirmation from the IdP.

> *SAML es como una carta de recomendación notariada. El empleador (service provider) no conoce al candidato, pero confía en la carta firmada por la universidad de prestigio (IdP) que dice "esta persona es quien dice ser y tiene estas calificaciones."*

---

## 29. Federation

* **Definition:** A process that allows for the sharing and use of electronic identities across multiple distinct identity management systems or organizations, enabling users to access different systems with a single set of credentials managed by their home organization.

Federation extends SSO **beyond a single organization**. It recognizes that partners, suppliers, and customers also need access to resources. Rather than creating internal accounts for every external user, the organization trusts the authentication provided by the external user's home network through a pre-established trust relationship.

> *La federación es como el pasaporte: tu gobierno (tu organización) te lo emite, y los otros países (otras organizaciones) lo aceptan porque confían en tu gobierno. No necesitas una identidad nueva en cada país que visitas.*

### Federation Step-by-Step Flow

| Step | Action |
| --- | --- |
| 1. Login initiation | User accesses a service provider and initiates login |
| 2. Redirect to IdP | Service provider redirects user to their home IdP |
| 3. Authenticate | User provides credentials to the IdP |
| 4. Assertion generated | IdP creates a signed token (SAML/OpenID Connect) with identity claims |
| 5. Return to SP | User is redirected back to the service provider with the assertion |
| 6. Verification and access | SP verifies the assertion and grants access |

Protocols used: **SAML**, **OAuth**, **OpenID Connect**.

---

## 30. Privileged Access Management (PAM)

* **Definition:** A set of policies, procedures, and technical controls used to restrict, monitor, and manage privileged accounts within an IT environment to prevent malicious abuse and minimize risk from excessive permissions.

PAM is critical because privileged accounts (administrators, root accounts) can cause significant damage if compromised or misused. PAM consists of three key components: **just-in-time permissions**, **password vaulting**, and **temporal accounts**.

> *PAM es como el armero de una película de acción: las armas más poderosas (cuentas privilegiadas) están bajo llave, con un registro de quién las tomó, para qué misión y cuánto tiempo. Nadie anda cargando el lanzacohetes todo el día, solo cuando lo necesita.*

---

## 31. PAM: Just-In-Time (JIT) Permissions

* **Definition:** A security model where administrative access is granted only when needed for a specific task and for a limited time period, and is automatically revoked when the task is complete.

JIT minimizes the attack surface of privileged accounts by ensuring that administrators do not maintain continuous, standing privileged access. If an administrator's account is compromised, an attacker only finds regular user privileges — not administrative access — unless a JIT session is actively in progress.

> *Es como una pistola con autobloqueo de tiempo: el guardia de seguridad puede acceder a ella para hacer una ronda, pero se bloquea automáticamente en cuanto termina. Nunca anda armado innecesariamente.*

---

## 32. PAM: Password Vaulting

* **Definition:** A technique used to store and manage privileged account credentials in a secure encrypted vault that requires multi-factor authentication to access, while logging all credential access for auditing purposes.

Password vaulting ensures that privileged credentials (admin accounts, root credentials) are not known to individuals by memory or stored insecurely. When a system administrator needs a privileged credential, they check it out from the vault — the process is logged — and the password may be automatically rotated after use.

> *La bóveda de contraseñas es como la caja fuerte de las llaves maestras en un hotel: cualquier empleado autorizado puede acceder a ellas, pero hay un registro de quién las tomó, cuándo y para qué habitación. Nadie se lleva las llaves a su casa.*

---

## 33. PAM: Temporal Accounts

* **Definition:** Time-limited accounts created for a specific purpose that are automatically disabled or deleted after a defined period, used for contractors, temporary staff, or short-term access needs.

Temporal accounts prevent access from lingering after a project ends. A contractor might be given a temporal account for the duration of a software installation project. Once the project completes, the account is automatically deactivated, eliminating the risk of forgotten active credentials.

> *Es como el gafete de visitante del edificio corporativo que tiene fecha de vencimiento impresa y se desactiva solo. El guardia no tiene que acordarse de desactivarlo — el sistema lo hace automáticamente.*

---

## 34. Access Control Models

* **Definition:** Frameworks that define how access permissions are assigned, managed, and enforced in an information system to control which users can access which resources and under what conditions.

There are five primary access control models, each with a different approach to managing permissions:

| Model | Acronym | Control Mechanism | Best Use Case |
| --- | --- | --- | --- |
| Mandatory Access Control | MAC | Security labels assigned by central authority | High-security, military/government |
| Discretionary Access Control | DAC | Resource owner decides who gets access | General enterprise file sharing |
| Role-Based Access Control | RBAC | Permissions assigned to roles/groups | Organizations with defined job functions |
| Rule-Based Access Control | RBAC | Rules applied to all users by administrators | Network devices (firewalls, routers) |
| Attribute-Based Access Control | ABAC | Access based on user, environment, and resource attributes | Complex, context-aware access decisions |

> *Los modelos de control de acceso son como los diferentes sistemas de llaves en distintos tipos de edificios: el militar usa biométrico y clasificación (MAC), la oficina corporativa usa roles (RBAC), y la casa particular deja que el dueño decida quién tiene llave (DAC).*

---

## 35. Access Control: Mandatory Access Control (MAC)

* **Definition:** An access control model where a central authority assigns security labels to both users and resources; access is granted only when a user's clearance level equals or exceeds the resource's classification level.

MAC is the most restrictive model. Everything not explicitly permitted is forbidden. Commonly used in military and government environments where confidentiality is paramount. Every user and resource must carry a security label (e.g., Top Secret, Secret, Confidential, Unclassified).

> *Es el sistema de clasificación militar: tu nivel de autorización determina qué carpetas puedes abrir. Sin importar si eres amigo del general, si no tienes el clearance correcto, el sistema te bloquea automáticamente.*

---

## 36. Access Control: Discretionary Access Control (DAC)

* **Definition:** An access control model where the owner of a resource determines who can access it, making access decisions based on user identity, profile, or role — a form of need-to-know access control.

DAC is the most flexible model but also the least secure, as it relies on owners making correct security decisions. File sharing in Windows NTFS using permission settings is a common example of DAC.

> *Es el dueño de un apartamento que decide a quién le da una copia de la llave. Muy flexible, pero si el dueño es descuidado y le da llaves a todo el mundo, la seguridad se va al piso.*

---

## 37. Access Control: Role-Based Access Control (RBAC)

* **Definition:** An access control model where administrators assign permissions to roles (groups), and users inherit the permissions of the roles they are assigned to, rather than receiving permissions individually.

RBAC is ideal for organizations with high employee turnover, since permissions are tied to the work role rather than the individual. In Windows domain environments, RBAC is typically implemented using **security groups**. Users can belong to multiple groups.

> *Es como los uniformes de trabajo: si eres médico, automáticamente tienes acceso a las áreas clínicas. Si te cambian a administrativo, te dan el uniforme nuevo y el acceso correspondiente. Nadie tiene que configurar permisos individuales.*

⚠️ **Exam tip:** Both **Rule-Based** and **Role-Based** access control share the acronym **RBAC** — context determines which one is meant.

---

## 38. Access Control: Rule-Based Access Control

* **Definition:** An access control model where administrators define rules that apply to all users system-wide, such as access control lists (ACLs) on routers and firewalls, allowing or denying access based on defined conditions.

Rule-based access control is applied uniformly across users. ACLs on network devices are a common implementation — a rule might block all traffic on port 23 (Telnet) or deny access from specific IP ranges, regardless of who is making the request.

> *Es el reglamento del condominio que aplica a todos los residentes por igual: "No se permiten visitas después de las 10 PM." No importa quién seas — la regla aplica para todos.*

---

## 39. Access Control: Attribute-Based Access Control (ABAC)

* **Definition:** An access control model that evaluates multiple attributes — user attributes, environmental attributes, and resource attributes — to make context-aware access decisions.

ABAC is the most granular and flexible model. Access is permitted or denied based on the combination of: **user attributes** (name, role, clearance level), **environment attributes** (time of day, location, threat level), and **resource attributes** (creation date, file sensitivity, owner).

> *ABAC es como el semáforo inteligente que cambia según el contexto: no solo quién eres (usuario), sino desde dónde llegas (entorno) y a qué quieres acceder (recurso). Es la intersección de todas las variables a la vez.*

---

## 40. Time of Day Restrictions

* **Definition:** An access control mechanism that limits access to resources based on the time of day the request is made, used in conjunction with other access control models as an additional security layer.

Organizations can block logins outside of normal business hours (e.g., 8 AM–6 PM). An attempt to log in at 2 AM would be denied automatically, reducing the window of opportunity for insider threats and compromised account misuse.

> *Es como el sistema de apertura del banco que solo funciona en horario laboral. Aunque alguien robe las llaves del gerente, no puede abrir la bóveda a medianoche porque el sistema de tiempo la tiene bloqueada.*

---

## 41. Principle of Least Privilege

* **Definition:** A cybersecurity concept that states users, systems, and processes should be granted only the minimum levels of access necessary to perform their intended job functions — and nothing additional.

Least privilege minimizes the potential damage from compromised accounts, insider threats, and accidental data modification. It requires continual review to prevent **permission creep** (also called **authorization creep**), where users accumulate excessive permissions as they change roles within an organization.

> *Es el principio del "need-to-know": el empleado de limpieza solo tiene llave de las oficinas que necesita limpiar, no del servidor room ni de la sala de juntas ejecutiva. El mensajero no necesita saber los secretos de la empresa para hacer su trabajo.*

⚠️ **Exam tip:** **Permission/authorization creep** is the gradual accumulation of access rights as users change roles. It must be actively reversed by revoking old permissions when a user transitions to a new position.

---

## 42. User Account Control (UAC)

* **Definition:** A Windows security mechanism that ensures actions requiring administrative rights are explicitly authorized by the user, minimizing the risk of malicious software gaining administrative privileges without user consent.

UAC prompts appear as a dialog box when an action requires elevated privileges (e.g., installing software, changing system settings). Standard users must enter an administrator password; administrators must click "Yes" to confirm. Actions requiring elevation are marked with a **shield icon** in the Windows interface.

> *UAC es el segundo factor de seguridad del sistema operativo: aunque ya iniciaste sesión, si una aplicación intenta hacer algo con superpoderes, el sistema te pregunta "¿realmente autorizas esto?" Evita que un malware silencioso tome el control sin que te enteres.*

---

## 43. Assigning Permissions — User Account Types

* **Definition:** Windows supports different account types with different privilege levels: local administrator accounts (full system control) and standard user accounts (restricted to personal storage areas and approved functions), aligned with the principle of least privilege.

The **local administrator account** is the most powerful account on a system — equivalent to a master key. It can change system settings, install applications, and perform all managerial tasks. **Standard user accounts** are restricted and cannot change system configuration or access other users' files. **Microsoft accounts** are online accounts that allow access to Microsoft services (Windows, Office 365, Xbox, Skype) across multiple devices. **User Account Control (UAC)** is a mechanism designed to ensure that actions requiring administrative rights are explicitly authorized by the user

> *El administrador tiene la llave maestra del hotel que abre todas las puertas. El huésped estándar solo tiene la llave de su habitación y las áreas comunes. Darle la llave maestra a todos los huéspedes sería una catástrofe.*

### Permission Assignment Best Practices

- Set permissions at the **folder level** where possible — they propagate to all files within the folder
- Always apply **least privilege** when assigning file and folder permissions
- Use **groups** to manage permissions at scale rather than assigning to individual users
- Regularly **audit** permissions to remove unnecessary access

---

## 🗝️ Key Terms Glossary

| Term | Definition |
| --- | --- |
| **IAM** | Identity and Access Management — framework managing who has access to what and when |
| **Identification** | Claiming an identity (username/email) |
| **Authentication** | Proving the claimed identity |
| **Authorization** | Determining what an authenticated user can access |
| **Accounting / Auditing** | Tracking and recording user activities |
| **Provisioning** | Creating and configuring user accounts and permissions |
| **Deprovisioning** | Removing user access when no longer needed |
| **Identity Proofing** | Verifying identity before account creation |
| **Interoperability** | Ability of different systems to share identity information using standards |
| **Attestation** | Periodic review to validate accounts and permissions are current |
| **MFA** | Multifactor Authentication — using 2+ independent authentication factors |
| **Knowledge Factor** | Something you know (password, PIN) |
| **Possession Factor** | Something you have (smart card, hardware token, OTP) |
| **Inherence Factor** | Something you are (biometrics: fingerprint, face, iris) |
| **Behavior Factor** | Something you do (keystroke dynamics, mouse patterns) |
| **Location Factor** | Somewhere you are (GPS, IP geolocation) |
| **Smart Card** | Credit-card-sized device with embedded IC for high-security authentication |
| **Hardware Token** | Physical key fob generating a time-based OTP every 30–60 seconds |
| **Software Token** | Authenticator app (Google/Microsoft Authenticator) generating TOTP |
| **OTP** | One-Time Password — valid for a single use and short time window |
| **Passkey** | Passwordless credential using public key cryptography tied to device lock screen |
| **Leet Speak** | Text substituting letters for numbers/symbols (e.g., `p@$$w0rd`) |
| **Password Spraying** | Trying few common passwords against many accounts to avoid lockout |
| **Brute Force Attack** | Trying every possible password combination |
| **Dictionary Attack** | Using a wordlist of common passwords and variants |
| **Hybrid Attack** | Combining dictionary words with brute-forced appended characters |
| **SSO** | Single Sign-On — one login credential for multiple systems |
| **IdP** | Identity Provider — system that manages and verifies user identities |
| **LDAP** | Lightweight Directory Access Protocol — directory service for user info and SSO |
| **LDAPS** | LDAP over SSL/TLS — encrypted version of LDAP |
| **OAuth** | Open Authorization — token-based standard allowing third-party access without exposing passwords |
| **JWT** | JSON Web Token — used by OAuth to transfer claims in Base64-encoded signed format |
| **SAML** | Security Assertion Markup Language — XML standard for SSO across organizations |
| **Federation** | Trusted relationship allowing cross-organization identity sharing |
| **OpenID Connect** | Authentication layer built on OAuth 2.0, used in federated identity |
| **PAM** | Privileged Access Management — controls managing privileged account access |
| **JIT Permissions** | Just-In-Time — admin access granted only for a specific task and time |
| **Password Vaulting** | Encrypted storage of privileged credentials with access logging |
| **Temporal Account** | Time-limited account auto-disabled after a project or period ends |
| **MAC** | Mandatory Access Control — label-based, centrally controlled access |
| **DAC** | Discretionary Access Control — owner-controlled access |
| **RBAC (Role)** | Role-Based Access Control — permissions tied to job roles/groups |
| **RBAC (Rule)** | Rule-Based Access Control — administrator-defined rules applied system-wide |
| **ABAC** | Attribute-Based Access Control — context-aware, multi-attribute decisions |
| **Permission Creep** | Gradual accumulation of excessive access rights as a user changes roles |
| **Least Privilege** | Granting only the minimum access needed for job functions |
| **UAC** | User Account Control — Windows mechanism requiring explicit approval for admin actions |
| **Magic Link** | Single-use login link sent to email, valid for a short time |
| **2FA** | Two-Factor Authentication — a specific form of MFA using exactly two factors |
