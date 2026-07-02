# 🛡️ CompTIA Security+ SY0-701 — Dion Training

## Section 20: Hardening | Study Summary

> **Keywords:** Hardening · Default Configurations · Application Restriction · Allowlist · Blocklist · Unnecessary Services · Trusted OS · Updates · Patches · Patch Management · Group Policy · SELinux · Data Encryption · Secure Baseline

---

## 1. Hardening

* **Definition:** The process of enhancing the security of a system, application, or network by implementing measures and configurations that reduce its exposure to vulnerabilities and potential threats.

Hardening involves applying security patches, configuring access controls, disabling unnecessary services, and adopting best practices to strengthen the overall **security posture** and resilience against cyber attacks.

> *Es como preparar una casa para un huracán: no esperas a que llegue la tormenta para atrancar las ventanas. Refuerzas todo antes, cierras lo que no se necesita y te aseguras de que cada entrada esté bien protegida.*

Hardening applies across the full stack: operating systems, applications, network devices, cloud instances, and firmware.

---

## 2. Changing Default Configurations

* **Definition:** The process of modifying factory-set configurations on hardware and software — including default credentials, open ports, and unneeded protocols — to eliminate known, publicly documented security weaknesses.

When a new device or piece of software is installed, its factory settings prioritize ease of use over security. These defaults are often documented in manuals and online knowledge bases, making them trivially exploitable by attackers.

> *Es como comprar una cerradura nueva que viene con una llave maestra publicada en el manual del fabricante. Mientras no cambies esa llave, cualquier persona que haya leído el manual puede entrar a tu casa.*

### Default Passwords

Default credentials are preset authentication details provided by manufacturers for initial device access. Common combinations include `admin/admin`, `administrator/password`, or `admin/<blank>`.

- Change default credentials **immediately** upon first power-on.
- Enable **multi-factor authentication** in the administrative dashboard if supported.
- Use a **long, strong, unique, and complex password** — managed via a password manager.
- Rotate administrative passwords approximately **every 90 days**.

### Unneeded Ports and Protocols

Every active open port is a potential entry point for an attacker. Conduct a thorough audit and disable all ports and protocols not required for your operational needs.

- Where a secure encrypted version exists, migrate to it:
  - HTTP (port 80) → **HTTPS (port 443)**
  - SMTP (port 25) → **SMTPS (port 587 or 465)**

### Excessive Open Ports

Devices often ship with multiple ports open for maximum compatibility, including both secure and insecure versions of the same service:

| Port | Protocol | Action                              |
| ---- | -------- | ----------------------------------- |
| 22   | SSH      | Keep — secure remote access         |
| 23   | Telnet   | **Close** — sends data unencrypted  |
| 80   | HTTP     | **Close** if only HTTPS is needed   |
| 443  | HTTPS    | Keep — encrypted web communications |

⚠️ **Exam Tip:** Being proactive with default configurations is your first and most formidable line of defense. Simple steps like changing a password or closing a port can prevent attacks that exploit well-known default settings.

---

## 3. Restricting Applications — Least Functionality

* **Definition:** The principle of configuring a workstation or server to provide only the essential applications and services required by that user, minimizing the attack surface introduced by unnecessary code.

Every installed application introduces additional code and therefore additional vulnerabilities. Administrators should actively uninstall unneeded applications and enforce strict controls over what can be installed or executed.

> *Es como un restaurante que solo sirve los platos del menú. Si el cocinero solo tiene los ingredientes necesarios para esas recetas, hay mucho menos riesgo de que aparezca algo inesperado o dañino en la cocina.*

In large enterprise environments, a **secure baseline image** is created containing only the OS and minimum required applications, and deployed uniformly across all workstations.

### Allowlisting (Application Allowlisting)

* **Definition:** A security approach where **only explicitly approved applications** are permitted to run; all others are blocked by default.

> *Es como la lista VIP de un nightclub exclusivo: si tu nombre no está en la lista, el portero no te deja entrar, sin importar quién seas.*

- Most secure method — **everything is denied by default** except what is explicitly listed.
- More difficult to maintain — every application update requires updating the allowlist.
- Implemented in Windows via **AppLocker** within Group Policy.

### Blocklisting (Application Blocklisting)

* **Definition:** A security approach where **explicitly listed applications** are blocked from running; all other applications are permitted by default.

> *Es como la lista de no-volar en un aeropuerto: si tu nombre está en esa lista, no abordas. Todos los demás pasan sin problema.*

- Less secure than allowlisting — **everything is allowed by default** except what is explicitly denied.
- Easier to manage initially but requires constant updates as new malware variants emerge.
- Every new or unknown threat is permitted until a blocklist rule is created for it.

| Method           | Default State             | Security Level | Management Effort |
| ---------------- | ------------------------- | -------------- | ----------------- |
| **Allowlisting** | All blocked except listed | High           | High              |
| **Blocklisting** | All allowed except listed | Lower          | Lower initially   |

⚠️ **Exam Tip:** For higher security, use allowlisting. At minimum, always use a blocklist to block known malicious applications. In a Windows domain environment, AppLocker deployed via Active Directory Group Policy is the standard tool for both approaches.

---

## 4. Unnecessary Services

* **Definition:** Software processes or network services running in the background that are not required for essential system functionality or business operations — they consume resources, introduce vulnerabilities, and expand the attack surface.

Services run in the background of the OS and perform various functions (e.g., print spooler, Windows Update). Any service not needed for business operations should be disabled.

> *Es como dejar los motores de todos los autos del estacionamiento encendidos por si acaso alguien los necesita. Consume combustible innecesariamente, hace ruido y deja todos los autos vulnerables a ser robados.*

### Disabling Services in Windows

Via GUI:

1. Run `services.msc` from the Start menu.
2. Locate the target service (e.g., Windows Update → `wuauserv`).
3. Double-click → **Stop** the service.
4. Change Startup Type from `Automatic` to `Disabled` → Apply.

Via Command Line:

```
sc stop wuauserv
net stop wuauserv
```

### Disabling Services in macOS / Linux

- **macOS:** Use **Activity Monitor** (Applications → Utilities → Activity Monitor) to find and quit/force-quit processes.
- **Linux / macOS terminal:** Use `top` to list running processes with their PIDs, then `kill <PID>` to terminate the target process.

```bash
# Ver procesos con sus PIDs
top

# Terminar un proceso por su PID
kill 2513
```

---

## 5. Trusted Operating Systems (TOS)

* **Definition:** Specialized operating systems that have undergone rigorous security evaluations and certifications to enforce stringent security policies — typically mandatory access controls — for handling sensitive or classified information.

> *Es como la diferencia entre un auto de consumo masivo y un vehículo blindado diseñado para presidentes: ambos te llevan de A a B, pero uno fue construido y certificado bajo estándares completamente distintos de seguridad.*

Trusted Operating Systems implement **Mandatory Access Control (MAC)**, where access permissions are determined by system policy — not by the data owner — ensuring that even the resource owner cannot override access restrictions.

### Common Evaluation Assurance Levels (EAL)

Based on the **Common Criteria for Information Technology Security Evaluation**:

| EAL Level    | Description                                 | Example                            |
| ------------ | ------------------------------------------- | ---------------------------------- |
| EAL1         | Functionally tested                         | Lowest assurance                   |
| EAL4 / EAL4+ | Methodically designed, tested, and reviewed | Windows, macOS, many Linux distros |
| EAL6         | Semi-formally verified design and tested    | Integrity-178B (F-35, B-2, A380)   |
| EAL7         | Formally verified design and tested         | Highest assurance                  |

### Trusted OS Examples

| OS                           | EAL Rating       | Notes                                                         |
| ---------------------------- | ---------------- | ------------------------------------------------------------- |
| **Integrity-178B**           | EAL6             | POSIX-based; used in F-16, F-22, F-35, B-2, Airbus A380       |
| **SELinux** (on CentOS/RHEL) | EAL4+            | MAC layer on top of standard Linux                            |
| **Trusted Solaris**          | EAL4+            | Multi-level security, compartmentalization, detailed auditing |
| **Windows (7+)**             | EAL4 / EAL4+     | Methodically designed and reviewed                            |
| **macOS (10.6+)**            | EAL4 / EAL4+     | Same standard as modern Windows                               |
| **Android**                  | Trusted elements | AppArmor for MAC; application sandboxing                      |

### Trusted Computing Base (TCB)

All parts of the system critical to security that must be trusted to operate correctly. Trusted OSes use **microkernel architectures** to minimize the TCB, reducing the attack surface.

⚠️ **Exam Tip:** Higher EAL levels (6–7) are reserved for embedded or purpose-built systems (aircraft, medical devices, autonomous vehicles). General-purpose OSes like Windows and macOS are rated EAL4/EAL4+. Achieving EAL6+ for a generic OS would be too costly and impractical.

---

## 6. Updates and Patches

* **Definition:** Software modifications released by developers to fix bugs, address security vulnerabilities, or improve features, stability, and performance of their software.

> *Es como el mantenimiento preventivo de un auto: si ignoras el cambio de aceite y las actualizaciones del fabricante, eventualmente algo se rompe de una manera que te podría haber costado mucho menos arreglar antes.*

A good patch management program is one of the most effective hardening measures available. Attackers often reverse-engineer released patches within days to develop exploits targeting unpatched systems.

### Types of Software Fixes

| Type             | Purpose                                                               | Urgency                             |
| ---------------- | --------------------------------------------------------------------- | ----------------------------------- |
| **Hotfix**       | Addresses a specific security vulnerability                           | Apply immediately after lab testing |
| **Update**       | Adds new functionality; may introduce new vulnerabilities             | Scheduled deployment                |
| **Service Pack** | Bundles hundreds/thousands of hotfixes and updates into one installer | Periodic major release              |

⚠️ **Exam Tip:** Know the difference: a **hotfix** patches a security issue (apply ASAP); an **update** adds features (may introduce new vulnerabilities); a **service pack** bundles both into one installer.

#### Effective patch management program:

| #   | Requirement                      | Key Detail                                                                                               |
| --- | -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1   | **Dedicated tracking owner**     | Assign a person or team responsible for monitoring vendor patch bulletins and releases                   |
| 2   | **Automated patching mechanism** | Patch OS and all applications on all systems automatically — including weekends and holidays             |
| 3   | **Cloud resources included**     | Cloud-based assets must be part of the patch management scope, not just on-prem systems                  |
| 4   | **Triage patches by priority**   | Classify every patch as **Urgent**, **Important**, or **Non-Critical** to allocate resources properly    |
| 5   | **Lab/test environment**         | Test all Urgent and Important patches in a test environment before pushing to production                 |
| 6   | **Detailed patching logs**       | Maintain logs of all patching activity for evaluation, monitoring, and audit purposes                    |
| 7   | **Firmware update process**      | Have a mechanism to evaluate, test, and deploy firmware updates for network devices                      |
| 8   | **Emergency patch process**      | Have a fast-track process for pushing urgent hotfixes approved by an **Emergency Change Advisory Board** |
| 9   | **Periodic non-critical rollup** | Bundle all Non-Critical patches into a single scheduled deployment (e.g., every two weeks)               |

---

## 7. Patch Management

* **Definition:** The systematic process of planning, testing, implementing, and auditing software patches and firmware updates to maintain the security and functionality of computer systems and network devices.

> *Es como gestionar el mantenimiento de toda una flota de camiones: no puedes ir uno por uno manualmente, necesitas un sistema que te diga cuáles necesitan cambio de aceite, programe las citas y confirme que el trabajo fue hecho.*

Patch management is critical for: **security** (fixing known vulnerabilities), **uptime** (preventing crashes), **compliance** (demonstrating patched CVEs), and **feature improvements**.

### The Four-Step Patch Management Process

1. **Planning** — Create policies and procedures to track available patches; verify compatibility; determine testing and deployment methods. Use tools like **Microsoft Endpoint Configuration Manager** or third-party tools.

2. **Testing** — Test all patches in a lab or test environment before production deployment. Networks have unique configurations that can cause patches to behave unexpectedly. Identify issues before affecting thousands of users.

3. **Implementation** — Deploy tested patches to all endpoints. Recommended approaches:
   
   - **Patch Rings** (staged rollout): Ring 1 (10–20 machines) → Ring 2 (50–100) → Ring 3 (1,000–2,000) → Ring 4 (full network). If issues arise, only a small group is affected.
   - **Disable Windows Update service** on endpoints in large environments; control patches via an update server instead.
   - **MDM (Mobile Device Manager)** for mobile devices.

4. **Auditing** — Scan the network post-deployment to verify patches were installed correctly and identify unexpected failures.

### Firmware Management

Network devices (switches, routers) run **firmware** — their operating system equivalent. Firmware must be updated just like any OS.

- Cisco uses **Cisco UCS Manager** for centralized firmware management.
- Third-party tools like **Device Expert by ManageEngine** automate firmware upgrade, downgrade, and configuration management.
- In Cisco devices, the OS is known as **IOS (Internetwork Operating System)**; updating it requires flashing the firmware.

⚠️ **Exam Tip:** Patch management covers not just workstations and servers, but also cloud-based resources, mobile devices (via MDM), and network device firmware. All four must be in scope.

---

## 8. Group Policies

* **Definition:** A set of rules and configurations in Windows environments that allow administrators to centrally manage and control user and computer settings — enforcing compliance and security standards across an organization.

> *Es como el reglamento interno de una empresa: en vez de decirle las reglas a cada empleado de forma individual, las publicas una vez y aplican automáticamente para todos desde el primer día.*

Group policies are accessed via the **Group Policy Editor** (`gpedit` from the Run prompt). In a Windows domain, the **Active Directory Domain Controller** provides an advanced Group Policy Editor.

### Key Group Policy Capabilities

- Password complexity requirements
- Account lockout policies
- Software and application restrictions (via **AppLocker**)
- User rights assignments
- Audit settings

### Creating AppLocker Rules (Example)

Within Group Policy Editor: `Computer Configuration → Windows Settings → Security Settings → Application Control Policies → AppLocker → Executable Rules`

Rule conditions available:

- **Publisher** — Block all executables from a compromised software publisher.
- **Path** — Block all executables from a specific folder (e.g., `%WINDIR%\Temp\*`).
- **File Hash** — Block a specific known-malicious executable by its cryptographic hash.

### Baselining

* **Definition:** The process of measuring changes in a network, hardware, or software environment to establish what "normal" looks like — enabling detection of deviations that may indicate a security incident.

> *Es como conocer el consumo eléctrico normal de tu casa mes a mes. Si un sábado en la tarde ves un pico enorme en el marcador, sabes que algo inusual está pasando y lo investigas.*

- Every deviation from the baseline should be categorized as **acceptable/expected** or **requires investigation**.
- High network utilization during expected low-traffic periods has been used to detect **data exfiltration** in real-world breaches.

---

## 9. SELinux — Security-Enhanced Linux

* **Definition:** A security framework for Linux-based operating systems, created by the NSA, that implements Mandatory Access Control (MAC) to confine and limit the actions of processes and users — enhancing overall system security beyond the default DAC model.

> *Es como pasar del sistema de honor en un archivo de oficina (donde tú decides quién puede ver tus documentos) a un sistema de clasificación militar (donde el propio edificio, no tú, controla quién puede entrar a cada cuarto según su nivel de autorización).*

SELinux is the default context-based permission scheme in **CentOS** and **Red Hat Enterprise Linux (RHEL)**. It prevents unauthorized processes from accessing or tampering with data, bypassing security mechanisms, or executing untrustworthy programs.

### DAC vs. MAC

| Model                                  | Who Controls Access                   | Default in        |
| -------------------------------------- | ------------------------------------- | ----------------- |
| **DAC** (Discretionary Access Control) | Object owner (`chown`, `chmod`)       | Standard Linux    |
| **MAC** (Mandatory Access Control)     | System policy (administrator-defined) | SELinux, AppArmor |

### SELinux Contexts

Every file and process in SELinux is labeled with contexts that together determine access:

| Context                | Description                                                        | Common Values                                                   |
| ---------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| **User**               | Defines which users can access an object                           | `unconfined_u`, `user_u`, `sysadmin_u`, `root`                  |
| **Role**               | Defines which roles can access an object                           | `object_r` (for files/directories)                              |
| **Type**               | Most important — groups objects with similar security requirements | Fine-grained access labels                                      |
| **Level** *(optional)* | Sensitivity level for multi-level security (MLS)                   | Adds another layer of constraint beyond the three main contexts |

### SELinux Modes

| Mode           | Description                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| **Disabled**   | SELinux is off; system falls back to standard DAC                                                           |
| **Enforcing**  | All SELinux security policies are actively enforced; processes cannot violate them                          |
| **Permissive** | SELinux is on but policies are not enforced; violations are logged but allowed — useful for troubleshooting |

### SELinux Policy Types

| Policy Type                             | Behavior                                                                                 |
| --------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Targeted** *(default in RHEL/CentOS)* | Only specifically targeted processes run in a confined domain; all others run unconfined |
| **Strict**                              | MAC is enforced on every subject and object on the system — complex to configure         |

⚠️ **Exam Tip:** When SELinux is first enforced on a system, expect a high volume of false violations in the audit log as policies are tuned. SELinux is only as strong as the restrictive profiles you create.

### AppArmor

AppArmor is an alternative context-based MAC implementation for Linux (common on Ubuntu/Debian). Like SELinux, it enforces MAC at the OS level, including on mobile devices running Android.

---

## 10. Data Encryption Levels

* **Definition:** The application of encryption at different layers of the data storage hierarchy — from individual records to entire disk drives — each providing a different granularity of protection.

> *Es como las capas de seguridad de una bóveda bancaria: puedes cifrar el edificio completo (disco completo), solo el cuarto de la bóveda (partición), solo cada caja de seguridad individual (archivo) o incluso el contenido dentro de cada sobre dentro de cada caja (registro de base de datos).*

Encryption adds overhead to read/write operations, so the level of encryption chosen must balance **security requirements against system performance**.

### Encryption Levels Comparison

| Level         | Scope                                                  | Example Tool                                 | Use Case                                                                 |
| ------------- | ------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------ |
| **Full-Disk** | Entire storage device                                  | BitLocker (Windows), FileVault (macOS)       | Protect all data if device is physically stolen                          |
| **Partition** | A specific partition only                              | VeraCrypt                                    | Encrypt only sensitive partitions; reduce performance impact             |
| **Volume**    | A defined set of space creating an encrypted container | VeraCrypt                                    | Flexible encrypted container; can be used alongside full-disk encryption |
| **File**      | Individual files                                       | GPG (GNU Privacy Guard)                      | Encrypt specific files before transmission                               |
| **Database**  | Entire database (may span multiple devices/cloud)      | SQL Server TDE (Transparent Data Encryption) | Automatic encrypt/decrypt; no application changes required               |
| **Record**    | Individual rows or columns within a database           | Custom DB implementations                    | Encrypt only sensitive fields (e.g., credit card numbers, SSNs)          |

⚠️ **Exam Tip:** Know the tools: **BitLocker** (Windows full-disk), **FileVault** (macOS full-disk), **VeraCrypt** (partition and volume), **GPG** (file-level), **TDE** (database-level). Record-level provides the most granular encryption within a database.

---

## 11. Secure Baselines

* **Definition:** A predefined, standardized configuration and associated settings for systems, applications, or networks that establish a secure starting point — minimizing security risks and ensuring consistent security posture across all organizational assets.

> *Es como la configuración de fábrica de seguridad de una franquicia. Cada sucursal nueva abre con el mismo sistema de alarmas, las mismas cerraduras y los mismos procedimientos. No cada gerente decide su propio nivel de seguridad.*

Secure baselines are referenced against frameworks such as **ISO 27001** and **NIST Special Publication 800-53**.

### Establishing a Secure Baseline

1. Conduct a thorough assessment to identify data types, workflows, and potential vulnerabilities.
2. Start with a **brand new device** → format → install OS → update → configure → secure.
3. Validate against baseline configuration guidance and scan for known vulnerabilities.
4. Install only the applications required by employees for their specific job roles.
5. Scan again and remediate newly introduced vulnerabilities.
6. **Create a disk image** of this configured machine — this becomes the known-good secure baseline image for all future deployments.
7. Continuously refine and update the image as patches, hotfixes, and service packs are released.

### Deploying a Secure Baseline

- Configure firewalls, user permissions, and encryption protocols.
- Ensure antivirus/antimalware solutions are properly installed and updated.
- Use **automated tools and scripts** for uniform deployment across all assets not provisioned via the disk image.
- In Windows domains: use **GPOs (Group Policy Objects)** to enforce password policies, user rights, and audit settings.
- In cloud environments: use tools like **AWS Config** to define and enforce secure configurations across cloud resources.

### Maintaining a Secure Baseline

- **Lock down systems** so users cannot install software or modify configurations.
- Conduct **regular audits and continuous monitoring** to detect deviations from the baseline.
- Trigger alerts via the **SOC (Security Operations Center)** for immediate remediation of deviations.
- Periodically review and update the baseline to align with infrastructure changes, business needs, and the evolving threat landscape.
- Provide **employee training and awareness** about the importance of adhering to baseline configurations and reporting suspicious activity.

⚠️ **Exam Tip:** Secure baselines tie together everything in this section: default configurations are changed, unnecessary services are disabled, patches are applied, group policies enforce restrictions, and the result is captured as an image. This image is the secure baseline that gets deployed, monitored, and continuously maintained.

---

## 🗝️ Key Terms Glossary

| Term                                         | Definition                                                                                  |
| -------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Hardening**                                | Reducing a system's attack surface through security configurations and controls             |
| **Default Credentials**                      | Factory-set username/password combinations for initial device access                        |
| **Least Functionality**                      | Configuring systems with only the minimum necessary applications and services               |
| **Allowlisting**                             | Security model where only explicitly approved applications can run                          |
| **Blocklisting**                             | Security model where explicitly listed applications are blocked; all others permitted       |
| **AppLocker**                                | Windows tool for implementing application allowlisting/blocklisting via Group Policy        |
| **Unnecessary Services**                     | Background processes not required for business operations that expand the attack surface    |
| **Trusted Operating System (TOS)**           | An OS with rigorous security certifications that enforces mandatory access controls         |
| **EAL (Evaluation Assurance Level)**         | Common Criteria rating system for OS security assurance (EAL1 lowest to EAL7 highest)       |
| **Trusted Computing Base (TCB)**             | The set of all components in a system that are critical to its security                     |
| **Hotfix**                                   | Immediate security patch addressing a specific vulnerability                                |
| **Update**                                   | Software modification adding functionality; may introduce new vulnerabilities               |
| **Service Pack**                             | Bundled collection of hotfixes and updates into a single installer                          |
| **Patch Management**                         | The four-step process of planning, testing, implementing, and auditing patches              |
| **Patch Rings**                              | Staged rollout strategy deploying patches to progressively larger groups                    |
| **Firmware**                                 | The OS-equivalent software running on network devices like switches and routers             |
| **Group Policy**                             | Windows rules applied centrally to users and computers via the Group Policy Editor          |
| **Baselining**                               | Measuring changes in an environment to establish what "normal" looks like                   |
| **GPO (Group Policy Object)**                | A container of group policy settings deployed across a Windows domain                       |
| **SELinux**                                  | NSA-created MAC framework for Linux; default in CentOS and RHEL                             |
| **AppArmor**                                 | Alternative MAC implementation for Linux; common on Ubuntu/Debian                           |
| **DAC (Discretionary Access Control)**       | Access controlled by the resource owner (default Linux model)                               |
| **MAC (Mandatory Access Control)**           | Access controlled by system-enforced policy, not the resource owner                         |
| **SELinux Enforcing Mode**                   | All SELinux policies are actively enforced                                                  |
| **SELinux Permissive Mode**                  | Policies are logged but not enforced — used for troubleshooting                             |
| **SELinux Targeted Policy**                  | Only specific processes are confined; others run unconfined                                 |
| **SELinux Strict Policy**                    | MAC enforced on all processes and objects on the system                                     |
| **Full-Disk Encryption**                     | Encrypts the entire storage device (BitLocker, FileVault)                                   |
| **Partition Encryption**                     | Encrypts only a specific partition (VeraCrypt)                                              |
| **Volume Encryption**                        | Creates an encrypted container of defined size (VeraCrypt)                                  |
| **File-Level Encryption**                    | Encrypts individual files (GPG)                                                             |
| **Database Encryption**                      | Encrypts an entire database (SQL Server TDE)                                                |
| **Record-Level Encryption**                  | Encrypts individual rows or columns within a database                                       |
| **TDE (Transparent Data Encryption)**        | SQL Server database encryption requiring no application changes                             |
| **Secure Baseline**                          | Standardized, vetted configuration serving as the known-good starting point for all systems |
| **Disk Image**                               | A snapshot of a fully configured, hardened system used for rapid, consistent deployment     |
| **AWS Config**                               | AWS service for defining and enforcing secure configurations in cloud environments          |
| **MDM (Mobile Device Manager)**              | Tool for deploying patches and enforcing policies on mobile devices                         |
| **Microsoft Endpoint Configuration Manager** | Microsoft tool for enterprise-scale patch management and endpoint configuration             |
| **IOS (Internetwork Operating System)**      | Cisco's firmware/OS for networking devices; updated by flashing the device                  |
