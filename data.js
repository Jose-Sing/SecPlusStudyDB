const STUDY_DATA = [
  {
    "sectionId": "S2",
    "sectionTitle": "Section 2: Fundamentals of Security",
    "concepts": [
      {
        "name": "Security vs. Usability",
        "definition": "Permanent tension between the level of security applied to a system and the convenience experienced by the user. Increasing security reduces usability; increasing convenience loosens security posture. The goal is finding the operational sweet spot between both.",
        "analogy": "Como el candado de tu casa: te protege, pero también te obliga a sacar la llave cada vez que entras.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Permanent tension between the level of security applied to a system and the convenience experienced by the user. Increasing security reduces usability; increasing convenience loosens security posture. The goal is finding the operational sweet spot between both.\n> Como el candado de tu casa: te protege, pero también te obliga a sacar la llave cada vez que entras."
      },
      {
        "name": "Information Security",
        "definition": "The practice of protecting **data and information** from unauthorized access, unlawful modification, disruption, disclosure, corruption, and destruction. Focuses on the content itself, not the systems storing it.",
        "analogy": "Proteger lo que dice el documento, no la caja donde está guardado.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The practice of protecting **data and information** from unauthorized access, unlawful modification, disruption, disclosure, corruption, and destruction. Focuses on the content itself, not the systems storing it.\n> Proteger lo que dice el documento, no la caja donde está guardado."
      },
      {
        "name": "Information System Security",
        "definition": "The practice of protecting the **systems** that hold and process critical data — computers, servers, network devices, smartphones. Focuses on the containers, not the content inside them.",
        "analogy": "Proteger la caja fuerte, no el documento adentro.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The practice of protecting the **systems** that hold and process critical data — computers, servers, network devices, smartphones. Focuses on the containers, not the content inside them.\n> Proteger la caja fuerte, no el documento adentro."
      },
      {
        "name": "CIA Triad",
        "definition": "The three foundational pillars of information security: **Confidentiality** (information accessible only to authorized individuals), **Integrity** (data remains accurate and unaltered unless modified by an authorized user), and **Availability** (systems and resources are accessible and functional when needed). Extended in modern practice to **C.I.A.N.A** by adding Non-repudiation and Authentication.",
        "analogy": "El triángulo que sostiene toda decisión de seguridad: que solo tú puedas verlo, que nadie lo altere, y que siempre esté disponible cuando lo necesites.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The three foundational pillars of information security: **Confidentiality** (information accessible only to authorized individuals), **Integrity** (data remains accurate and unaltered unless modified by an authorized user), and **Availability** (systems and resources are accessible and functional when needed). Extended in modern practice to **C.I.A.N.A** by adding Non-repudiation and Authentication.\n> El triángulo que sostiene toda decisión de seguridad: que solo tú puedas verlo, que nadie lo altere, y que siempre esté disponible cuando lo necesites."
      },
      {
        "name": "Confidentiality",
        "definition": "Ensures that private or sensitive information is not disclosed to unauthorized individuals, entities, or processes. Implemented through five methods: **encryption** (primary tool), **access controls**, **data masking**, **physical security measures**, and **training & awareness**. Critical for protecting personal privacy, maintaining business advantage, and achieving regulatory compliance (PII, PHI, financial data).",
        "analogy": "Lo que le dices a tu médico no debería escucharlo el de la fila de atrás.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Ensures that private or sensitive information is not disclosed to unauthorized individuals, entities, or processes. Implemented through five methods: **encryption** (primary tool), **access controls**, **data masking**, **physical security measures**, and **training & awareness**. Critical for protecting personal privacy, maintaining business advantage, and achieving regulatory compliance (PII, PHI, financial data).\n> Lo que le dices a tu médico no debería escucharlo el de la fila de atrás."
      },
      {
        "name": "Encryption",
        "definition": "Process of converting plaintext data into unreadable ciphertext to prevent unauthorized access. Data can only be decrypted by a party holding the correct decryption key. Primary mechanism for enforcing confidentiality.",
        "analogy": "Como enviar una carta dentro de una caja con candado: solo quien tenga la llave puede abrirla y leer el contenido.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Process of converting plaintext data into unreadable ciphertext to prevent unauthorized access. Data can only be decrypted by a party holding the correct decryption key. Primary mechanism for enforcing confidentiality.\n> Como enviar una carta dentro de una caja con candado: solo quien tenga la llave puede abrirla y leer el contenido."
      },
      {
        "name": "Data Masking",
        "definition": "Method of obscuring specific data within a database to make it inaccessible to unauthorized users while preserving its usability for authorized ones. Common example: displaying only the last 4 digits of a credit card number to customer support agents.",
        "analogy": "Como tapar con corrector los primeros dígitos de un número de tarjeta antes de mostrarle el recibo a alguien.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Method of obscuring specific data within a database to make it inaccessible to unauthorized users while preserving its usability for authorized ones. Common example: displaying only the last 4 digits of a credit card number to customer support agents.\n> Como tapar con corrector los primeros dígitos de un número de tarjeta antes de mostrarle el recibo a alguien."
      },
      {
        "name": "Integrity",
        "definition": "Ensures that data remains accurate, consistent, and unaltered throughout its entire lifecycle, unless intentionally modified by an authorized individual. Implemented through five methods: **hashing** (primary tool), **digital signatures**, **checksums**, **access controls**, and **regular audits**.",
        "analogy": "Si mandas un contrato firmado, el receptor debe recibirlo exactamente como lo mandaste, sin que nadie haya cambiado ni una coma.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Ensures that data remains accurate, consistent, and unaltered throughout its entire lifecycle, unless intentionally modified by an authorized individual. Implemented through five methods: **hashing** (primary tool), **digital signatures**, **checksums**, **access controls**, and **regular audits**.\n> Si mandas un contrato firmado, el receptor debe recibirlo exactamente como lo mandaste, sin que nadie haya cambiado ni una coma."
      },
      {
        "name": "Hashing",
        "definition": "Process of converting data into a fixed-size value called a **hash digest**. Any modification to the original data — no matter how small — produces a completely different hash, immediately signaling tampering. Functions as a digital fingerprint for data integrity verification. **Key association: Integrity = Hashing.**",
        "analogy": "Como la huella dactilar de un archivo: cambia un solo píxel y la huella ya no coincide.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Process of converting data into a fixed-size value called a **hash digest**. Any modification to the original data — no matter how small — produces a completely different hash, immediately signaling tampering. Functions as a digital fingerprint for data integrity verification. **Key association: Integrity = Hashing.**\n> Como la huella dactilar de un archivo: cambia un solo píxel y la huella ya no coincide."
      },
      {
        "name": "Checksum",
        "definition": "Integrity verification method used during data transmission. The sender computes a checksum for the data and sends it alongside. The receiver recomputes the checksum on arrival and compares both values. Matching values confirm integrity; mismatched values indicate alteration or corruption.",
        "analogy": "Como el sello en un paquete sellado al vacío: si el sello está roto al abrirlo, sabes que alguien lo tocó antes.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Integrity verification method used during data transmission. The sender computes a checksum for the data and sends it alongside. The receiver recomputes the checksum on arrival and compares both values. Matching values confirm integrity; mismatched values indicate alteration or corruption.\n> Como el sello en un paquete sellado al vacío: si el sello está roto al abrirlo, sabes que alguien lo tocó antes."
      },
      {
        "name": "Availability",
        "definition": "Ensures that information, systems, and resources are accessible and operational when needed by authorized users. Measured in **\"nines\" of uptime** (e.g., five nines = 99.999% = max 5.26 minutes of downtime per year). Achieved primarily through **redundancy**. **Key association: Availability = Redundancy.**",
        "analogy": "De nada sirve tener el mejor banco del mundo si el cajero siempre está fuera de servicio.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Ensures that information, systems, and resources are accessible and operational when needed by authorized users. Measured in **\"nines\" of uptime** (e.g., five nines = 99.999% = max 5.26 minutes of downtime per year). Achieved primarily through **redundancy**. **Key association: Availability = Redundancy.**\n> De nada sirve tener el mejor banco del mundo si el cajero siempre está fuera de servicio."
      },
      {
        "name": "Redundancy",
        "definition": "Duplication of critical components or functions to enhance system reliability and ensure uninterrupted service. Four types: **server redundancy** (load balancing/failover), **data redundancy** (multiple storage locations, RAID, cloud backups), **network redundancy** (alternate routing paths), and **power redundancy** (generators, UPS systems).",
        "analogy": "El neumático de repuesto del carro: no lo usas todos los días, pero el día que lo necesitas, marca la diferencia.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Duplication of critical components or functions to enhance system reliability and ensure uninterrupted service. Four types: **server redundancy** (load balancing/failover), **data redundancy** (multiple storage locations, RAID, cloud backups), **network redundancy** (alternate routing paths), and **power redundancy** (generators, UPS systems).\n> El neumático de repuesto del carro: no lo usas todos los días, pero el día que lo necesitas, marca la diferencia."
      },
      {
        "name": "Non-repudiation",
        "definition": "Security measure ensuring that parties involved in a communication or transaction cannot deny their participation or the authenticity of their actions. Primary implementation tool: **digital signatures**. Provides three guarantees: authenticity of transactions, integrity of communications, and user accountability.",
        "analogy": "Como el acuse de recibo firmado de un paquete certificado: una vez que firmas, no puedes decir que no llegó.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Security measure ensuring that parties involved in a communication or transaction cannot deny their participation or the authenticity of their actions. Primary implementation tool: **digital signatures**. Provides three guarantees: authenticity of transactions, integrity of communications, and user accountability.\n> Como el acuse de recibo firmado de un paquete certificado: una vez que firmas, no puedes decir que no llegó."
      },
      {
        "name": "Digital Signature",
        "definition": "Cryptographic mechanism that combines hashing and asymmetric encryption to guarantee both authenticity and integrity. Process: (1) hash the message → (2) encrypt the hash digest with the sender's **private key** → result is the digital signature. Any alteration to the original message invalidates the signature. Only the sender holds their private key, making the signature impossible to forge.",
        "analogy": "El equivalente digital del sello de cera de un rey medieval: solo él tiene ese anillo, nadie más puede replicar ese sello.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Cryptographic mechanism that combines hashing and asymmetric encryption to guarantee both authenticity and integrity. Process: (1) hash the message → (2) encrypt the hash digest with the sender's **private key** → result is the digital signature. Any alteration to the original message invalidates the signature. Only the sender holds their private key, making the signature impossible to forge.\n> El equivalente digital del sello de cera de un rey medieval: solo él tiene ese anillo, nadie más puede replicar ese sello."
      },
      {
        "name": "Authentication (AAA)",
        "definition": "Process of verifying that a user or entity is who they claim to be. First component of the AAA model. Implemented through five factors:",
        "analogy": "El guardia de seguridad que verifica tu identificación antes de dejarte entrar al edificio.",
        "tables": [
          {
            "headers": [
              "Factor",
              "Also Known As",
              "Example"
            ],
            "rows": [
              [
                "Something you **know**",
                "Knowledge factor",
                "Password, PIN"
              ],
              [
                "Something you **have**",
                "Possession factor",
                "Badge, OTP via smartphone"
              ],
              [
                "Something you **are**",
                "Inherence factor",
                "Fingerprint, facial recognition"
              ],
              [
                "Something you **do**",
                "Action factor",
                "Handwriting, gait analysis"
              ],
              [
                "Somewhere you **are**",
                "Location factor",
                "Geofencing, country-based access"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Process of verifying that a user or entity is who they claim to be. First component of the AAA model. Implemented through five factors:\n\n| Factor | Also Known As | Example |\n|---|---|---|\n| Something you **know** | Knowledge factor | Password, PIN |\n| Something you **have** | Possession factor | Badge, OTP via smartphone |\n| Something you **are** | Inherence factor | Fingerprint, facial recognition |\n| Something you **do** | Action factor | Handwriting, gait analysis |\n| Somewhere you **are** | Location factor | Geofencing, country-based access |\n\n> El guardia de seguridad que verifica tu identificación antes de dejarte entrar al edificio."
      },
      {
        "name": "Multi-Factor Authentication (MFA / 2FA)",
        "definition": "Authentication system requiring two or more independent verification factors. Using exactly two factors = **2FA**. Using two or more = **MFA**. Ensures that compromise of a single factor (e.g., stolen password) is not sufficient to gain access, since the attacker still lacks the additional required factor.",
        "analogy": "Para retirar dinero del banco necesitas tu tarjeta física **y** tu PIN: si alguien roba solo uno de los dos, no puede hacer nada.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Authentication system requiring two or more independent verification factors. Using exactly two factors = **2FA**. Using two or more = **MFA**. Ensures that compromise of a single factor (e.g., stolen password) is not sufficient to gain access, since the attacker still lacks the additional required factor.\n> Para retirar dinero del banco necesitas tu tarjeta física **y** tu PIN: si alguien roba solo uno de los dos, no puede hacer nada."
      },
      {
        "name": "Authorization (AAA)",
        "definition": "Determines what actions or resources an already-authenticated user is permitted to access or perform. Second component of the AAA model. Mechanisms include role-based, rule-based, and attribute-based controls. Answers the question: *\"Now that I know who you are — here is what you are allowed to do.\"*",
        "analogy": "Entrar al edificio (autenticación) no significa que puedas entrar a todas las oficinas (autorización).",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Determines what actions or resources an already-authenticated user is permitted to access or perform. Second component of the AAA model. Mechanisms include role-based, rule-based, and attribute-based controls. Answers the question: *\"Now that I know who you are — here is what you are allowed to do.\"*\n> Entrar al edificio (autenticación) no significa que puedas entrar a todas las oficinas (autorización)."
      },
      {
        "name": "Accounting (AAA)",
        "definition": "Monitoring and logging of all user actions within a system during their digital interactions. Third component of the AAA model. Provides five key benefits: **audit trail** (chronological activity record), **regulatory compliance**, **forensic analysis**, **resource optimization**, and **user accountability**. Implemented via Syslog servers, network analyzers (Wireshark), and **SIEM** systems.",
        "analogy": "El extracto bancario detallado: cada transacción, fecha, monto y lugar — sin espacio para dudas sobre qué pasó y cuándo.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Monitoring and logging of all user actions within a system during their digital interactions. Third component of the AAA model. Provides five key benefits: **audit trail** (chronological activity record), **regulatory compliance**, **forensic analysis**, **resource optimization**, and **user accountability**. Implemented via Syslog servers, network analyzers (Wireshark), and **SIEM** systems.\n> El extracto bancario detallado: cada transacción, fecha, monto y lugar — sin espacio para dudas sobre qué pasó y cuándo."
      },
      {
        "name": "SIEM (Security Information and Event Management)",
        "definition": "Platform that provides real-time analysis of security alerts generated by hardware and software across an organization's infrastructure. Core tool for the Accounting function — aggregates, correlates, and surfaces security events for investigation.",
        "analogy": "La torre de control del aeropuerto: recibe señales de todos los aviones (sistemas) al mismo tiempo y alerta cuando algo no cuadra.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Platform that provides real-time analysis of security alerts generated by hardware and software across an organization's infrastructure. Core tool for the Accounting function — aggregates, correlates, and surfaces security events for investigation.\n> La torre de control del aeropuerto: recibe señales de todos los aviones (sistemas) al mismo tiempo y alerta cuando algo no cuadra."
      },
      {
        "name": "Threat",
        "definition": "Any event, actor, or condition that could cause harm, loss, damage, or compromise to IT systems. Threats originate from **external, generally uncontrollable factors**: natural disasters, cyberattacks, data breaches, insider misuse. Risk management options: mitigate, transfer, avoid, or accept.",
        "analogy": "La tormenta que puede destruir tu casa: no puedes evitar que ocurra, solo puedes prepararte para resistirla.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Any event, actor, or condition that could cause harm, loss, damage, or compromise to IT systems. Threats originate from **external, generally uncontrollable factors**: natural disasters, cyberattacks, data breaches, insider misuse. Risk management options: mitigate, transfer, avoid, or accept.\n> La tormenta que puede destruir tu casa: no puedes evitar que ocurra, solo puedes prepararte para resistirla."
      },
      {
        "name": "Vulnerability",
        "definition": "Any weakness in the design or implementation of a system that could be exploited by a threat. Vulnerabilities come from **internal, controllable factors**: software bugs, misconfigurations, missing patches, lack of physical security. Unlike threats, vulnerabilities can be directly managed by the organization.",
        "analogy": "La grieta en la pared de tu casa: tú la creaste, tú puedes repararla antes de que llegue la tormenta.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Any weakness in the design or implementation of a system that could be exploited by a threat. Vulnerabilities come from **internal, controllable factors**: software bugs, misconfigurations, missing patches, lack of physical security. Unlike threats, vulnerabilities can be directly managed by the organization.\n> La grieta en la pared de tu casa: tú la creaste, tú puedes repararla antes de que llegue la tormenta."
      },
      {
        "name": "Risk",
        "definition": "The intersection of a threat and a vulnerability. **No vulnerability → no risk. No threat → no risk.** Risk exists only when both are present simultaneously. Managed through four responses: **mitigate** (reduce impact), **transfer** (e.g., insurance), **avoid** (eliminate the activity), or **accept** (acknowledge and tolerate it).",
        "analogy": "El riesgo de un robo existe solo si alguien quiere entrar a tu casa (amenaza) **y** dejaste la puerta sin llave (vulnerabilidad).",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The intersection of a threat and a vulnerability. **No vulnerability → no risk. No threat → no risk.** Risk exists only when both are present simultaneously. Managed through four responses: **mitigate** (reduce impact), **transfer** (e.g., insurance), **avoid** (eliminate the activity), or **accept** (acknowledge and tolerate it).\n> El riesgo de un robo existe solo si alguien quiere entrar a tu casa (amenaza) **y** dejaste la puerta sin llave (vulnerabilidad)."
      },
      {
        "name": "Security Control Categories",
        "definition": "Classification of security controls by their nature into four broad categories:",
        "analogy": "Como un castillo medieval: las murallas son técnicas, el general que planea la defensa es gerencial, los guardias en patrulla son operativos, y el foso es físico.",
        "tables": [
          {
            "headers": [
              "Category",
              "Nature",
              "Examples"
            ],
            "rows": [
              [
                "**Technical**",
                "Hardware/software mechanisms",
                "Firewall, antivirus, IDS, encryption"
              ],
              [
                "**Managerial**",
                "Strategic planning and governance (also called Administrative)",
                "Risk assessments, security policies, incident response plans"
              ],
              [
                "**Operational**",
                "Day-to-day procedures governed by people",
                "Password rotation, backups, awareness training"
              ],
              [
                "**Physical**",
                "Tangible real-world barriers",
                "Cameras, biometric locks, guards, fences"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Classification of security controls by their nature into four broad categories:\n\n| Category | Nature | Examples |\n|---|---|---|\n| **Technical** | Hardware/software mechanisms | Firewall, antivirus, IDS, encryption |\n| **Managerial** | Strategic planning and governance (also called Administrative) | Risk assessments, security policies, incident response plans |\n| **Operational** | Day-to-day procedures governed by people | Password rotation, backups, awareness training |\n| **Physical** | Tangible real-world barriers | Cameras, biometric locks, guards, fences |\n\n> Como un castillo medieval: las murallas son técnicas, el general que planea la defensa es gerencial, los guardias en patrulla son operativos, y el foso es físico."
      },
      {
        "name": "Security Control Types",
        "definition": "Classification of security controls by their **functional role** against a threat. Six types:",
        "analogy": "⚠️ A single tool can fulfill multiple types simultaneously — an antivirus detects (detective) and removes (corrective) malware.",
        "tables": [
          {
            "headers": [
              "Type",
              "Function",
              "Example"
            ],
            "rows": [
              [
                "**Preventative**",
                "Blocks the threat before it occurs",
                "Firewall"
              ],
              [
                "**Deterrent**",
                "Discourages attackers without physically stopping them",
                "Warning signs, login banners"
              ],
              [
                "**Detective**",
                "Detects and alerts on malicious activity as it occurs",
                "IDS, security cameras"
              ],
              [
                "**Corrective**",
                "Mitigates damage and restores systems after an incident",
                "Antivirus quarantine/removal"
              ],
              [
                "**Compensating**",
                "Alternative control when the ideal control is not feasible",
                "VPN added on top of WPA2 when WPA3 is unsupported"
              ],
              [
                "**Directive**",
                "Guides or mandates behavior through policy or documentation",
                "Acceptable Use Policy (AUP)"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Classification of security controls by their **functional role** against a threat. Six types:\n\n| Type | Function | Example |\n|---|---|---|\n| **Preventative** | Blocks the threat before it occurs | Firewall |\n| **Deterrent** | Discourages attackers without physically stopping them | Warning signs, login banners |\n| **Detective** | Detects and alerts on malicious activity as it occurs | IDS, security cameras |\n| **Corrective** | Mitigates damage and restores systems after an incident | Antivirus quarantine/removal |\n| **Compensating** | Alternative control when the ideal control is not feasible | VPN added on top of WPA2 when WPA3 is unsupported |\n| **Directive** | Guides or mandates behavior through policy or documentation | Acceptable Use Policy (AUP) |\n\n> ⚠️ A single tool can fulfill multiple types simultaneously — an antivirus detects (detective) and removes (corrective) malware."
      },
      {
        "name": "Zero Trust",
        "definition": "Security model operating on the principle **\"Trust nothing, verify everything.\"** No user, device, or system is trusted by default regardless of network location. Every access request — internal or external — requires continuous verification. Driven by the rise of cloud, remote work, mobile, and deperimeterization.",
        "analogy": "En lugar de asumir que todos los que están dentro del edificio son de confianza, verificas la identidad de cada persona cada vez que quiere abrir cualquier puerta.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Security model operating on the principle **\"Trust nothing, verify everything.\"** No user, device, or system is trusted by default regardless of network location. Every access request — internal or external — requires continuous verification. Driven by the rise of cloud, remote work, mobile, and deperimeterization.\n> En lugar de asumir que todos los que están dentro del edificio son de confianza, verificas la identidad de cada persona cada vez que quiere abrir cualquier puerta."
      },
      {
        "name": "Zero Trust — Control Plane",
        "definition": "The overarching framework responsible for defining, managing, and enforcing access policies. Contains four key elements: **Adaptive Identity** (real-time validation based on behavior, device, and location), **Threat Scope Reduction** (minimum necessary access to reduce attack surface), **Policy-Driven Access Control** (role-based access policies), and **Secured Zones** (isolated environments for sensitive data). Operated by the **Policy Engine** (access decision-making) and the **Policy Administrator** (policy management and enforcement).",
        "analogy": "El departamento de seguridad del edificio que establece quién puede entrar a cada zona y bajo qué condiciones.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The overarching framework responsible for defining, managing, and enforcing access policies. Contains four key elements: **Adaptive Identity** (real-time validation based on behavior, device, and location), **Threat Scope Reduction** (minimum necessary access to reduce attack surface), **Policy-Driven Access Control** (role-based access policies), and **Secured Zones** (isolated environments for sensitive data). Operated by the **Policy Engine** (access decision-making) and the **Policy Administrator** (policy management and enforcement).\n> El departamento de seguridad del edificio que establece quién puede entrar a cada zona y bajo qué condiciones."
      },
      {
        "name": "Zero Trust — Data Plane",
        "definition": "The execution layer of Zero Trust that carries out the decisions made by the Control Plane. Contains two components: **Subject/System** (the entity requesting access — user, workstation, or application) and the **Policy Enforcement Point** (where the grant or deny decision is actually executed, acting as the final gatekeeper).",
        "analogy": "El guardia en la puerta que ejecuta las órdenes del departamento de seguridad: deja pasar o bloquea según lo que le indican.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The execution layer of Zero Trust that carries out the decisions made by the Control Plane. Contains two components: **Subject/System** (the entity requesting access — user, workstation, or application) and the **Policy Enforcement Point** (where the grant or deny decision is actually executed, acting as the final gatekeeper).\n> El guardia en la puerta que ejecuta las órdenes del departamento de seguridad: deja pasar o bloquea según lo que le indican."
      },
      {
        "name": "Gap Analysis",
        "definition": "Evaluation process that compares an organization's current security posture to its desired state in order to identify gaps and build a remediation plan. Two types: **Technical Gap Analysis** (infrastructure and technology capabilities) and **Business Gap Analysis** (processes and operations). Output is typically documented in a **Plan of Action and Milestones (POA&M)**.",
        "analogy": "Como revisar la diferencia entre donde estás parado en el mapa y donde quieres llegar: primero debes saber los dos puntos para poder trazar la ruta.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Evaluation process that compares an organization's current security posture to its desired state in order to identify gaps and build a remediation plan. Two types: **Technical Gap Analysis** (infrastructure and technology capabilities) and **Business Gap Analysis** (processes and operations). Output is typically documented in a **Plan of Action and Milestones (POA&M)**.\n> Como revisar la diferencia entre donde estás parado en el mapa y donde quieres llegar: primero debes saber los dos puntos para poder trazar la ruta."
      },
      {
        "name": "Plan of Action and Milestones (POA&M)",
        "definition": "Structured document produced from a gap analysis or vulnerability assessment that outlines: identified vulnerabilities, specific remediation actions, assigned resources, and completion timelines. Used to prioritize fixes and track progress from current state to desired security state.",
        "analogy": "La lista de tareas priorizada del técnico que sabe exactamente qué arreglar, en qué orden y para cuándo.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Structured document produced from a gap analysis or vulnerability assessment that outlines: identified vulnerabilities, specific remediation actions, assigned resources, and completion timelines. Used to prioritize fixes and track progress from current state to desired security state.\n> La lista de tareas priorizada del técnico que sabe exactamente qué arreglar, en qué orden y para cuándo.\n\n\n*CompTIA Security+ SY0-701 · Section 2: Fundamentals of Security · Dion Training*"
      }
    ]
  },
  {
    "sectionId": "S3",
    "sectionTitle": "Section 3: Threat Actors",
    "concepts": [
      {
        "name": "Threat Actor",
        "definition": "An individual or entity responsible for incidents that impact security and data protection. Threat actors initiate attacks to steal, alter, or destroy data. They range from lone unskilled individuals to government-sponsored organizations.",
        "analogy": "Como en el mundo del crimen físico: desde el ladrón de poca monta hasta el cartel internacional — todos son amenazas, pero con recursos y objetivos muy distintos.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An individual or entity responsible for incidents that impact security and data protection. Threat actors initiate attacks to steal, alter, or destroy data. They range from lone unskilled individuals to government-sponsored organizations.\n> Como en el mundo del crimen físico: desde el ladrón de poca monta hasta el cartel internacional — todos son amenazas, pero con recursos y objetivos muy distintos."
      },
      {
        "name": "Threat Actor Motivations",
        "definition": "The underlying driving forces that push a threat actor to carry out an attack. Distinct from **intent** (the specific goal of the attack). Key motivations include:",
        "analogy": "Como en cualquier crimen: entender el \"por qué\" del atacante es lo que permite predecir el \"cómo\" del ataque.",
        "tables": [
          {
            "headers": [
              "Motivation",
              "Description"
            ],
            "rows": [
              [
                "**Data Exfiltration**",
                "Unauthorized transfer of sensitive data (IP, PII, trade secrets) for resale, identity theft, or competitive advantage"
              ],
              [
                "**Financial Gain**",
                "Direct profit via ransomware, banking Trojans, fraud, or cryptocurrency theft"
              ],
              [
                "**Blackmail**",
                "Obtaining compromising information and demanding payment (ransomware, doxxing, sextortion)"
              ],
              [
                "**Service Disruption**",
                "Overwhelming systems via DDoS to cause chaos, make political statements, or demand ransom"
              ],
              [
                "**Philosophical / Political Beliefs**",
                "Hacktivism — using attacks to promote ideological agendas or protest perceived injustice"
              ],
              [
                "**Ethical Reasons**",
                "Authorized penetration testers and bug bounty hunters improving security"
              ],
              [
                "**Revenge**",
                "Disgruntled or former employees targeting the organization that wronged them"
              ],
              [
                "**Disruption / Chaos**",
                "Attacking for the thrill of it or to challenge skills, with no specific political or financial goal"
              ],
              [
                "**Espionage**",
                "Gathering classified or sensitive intelligence — common among nation-state actors and rivals"
              ],
              [
                "**War**",
                "Cyber operations used to disrupt infrastructure, compromise national security, or cause economic damage"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The underlying driving forces that push a threat actor to carry out an attack. Distinct from **intent** (the specific goal of the attack). Key motivations include:\n\n| Motivation | Description |\n|---|---|\n| **Data Exfiltration** | Unauthorized transfer of sensitive data (IP, PII, trade secrets) for resale, identity theft, or competitive advantage |\n| **Financial Gain** | Direct profit via ransomware, banking Trojans, fraud, or cryptocurrency theft |\n| **Blackmail** | Obtaining compromising information and demanding payment (ransomware, doxxing, sextortion) |\n| **Service Disruption** | Overwhelming systems via DDoS to cause chaos, make political statements, or demand ransom |\n| **Philosophical / Political Beliefs** | Hacktivism — using attacks to promote ideological agendas or protest perceived injustice |\n| **Ethical Reasons** | Authorized penetration testers and bug bounty hunters improving security |\n| **Revenge** | Disgruntled or former employees targeting the organization that wronged them |\n| **Disruption / Chaos** | Attacking for the thrill of it or to challenge skills, with no specific political or financial goal |\n| **Espionage** | Gathering classified or sensitive intelligence — common among nation-state actors and rivals |\n| **War** | Cyber operations used to disrupt infrastructure, compromise national security, or cause economic damage |\n\n> Como en cualquier crimen: entender el \"por qué\" del atacante es lo que permite predecir el \"cómo\" del ataque."
      },
      {
        "name": "Threat Actor Attributes",
        "definition": "The specific characteristics that define and differentiate threat actors from one another. Three key attributes:",
        "analogy": "Como clasificar a los rivales antes de un partido: saber de dónde vienen, cuánto presupuesto tienen, y qué tan buenos son cambia completamente la estrategia de defensa.",
        "tables": [
          {
            "headers": [
              "Attribute",
              "Description"
            ],
            "rows": [
              [
                "**Internal vs. External**",
                "Internal = inside the organization with legitimate access; External = outside with no authorized access"
              ],
              [
                "**Resources & Funding**",
                "Ranges from a lone individual with a personal laptop to nation-states with massive budgets and teams"
              ],
              [
                "**Sophistication & Capability**",
                "Ranges from low (script kiddies using pre-made tools) to high (APTs using custom malware and zero-days)"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The specific characteristics that define and differentiate threat actors from one another. Three key attributes:\n\n| Attribute | Description |\n|---|---|\n| **Internal vs. External** | Internal = inside the organization with legitimate access; External = outside with no authorized access |\n| **Resources & Funding** | Ranges from a lone individual with a personal laptop to nation-states with massive budgets and teams |\n| **Sophistication & Capability** | Ranges from low (script kiddies using pre-made tools) to high (APTs using custom malware and zero-days) |\n\n> Como clasificar a los rivales antes de un partido: saber de dónde vienen, cuánto presupuesto tienen, y qué tan buenos son cambia completamente la estrategia de defensa."
      },
      {
        "name": "Unskilled Attacker (Script Kiddie)",
        "definition": "An individual with limited technical knowledge who relies on pre-made scripts, tools, and exploits developed by others — without understanding the underlying principles. Motivated primarily by recognition, thrill, or curiosity rather than financial or ideological goals. Opportunistic rather than targeted. Low sophistication, low resources, but dangerous in large numbers.",
        "analogy": "Como alguien que no sabe cocinar pero puede calentar comida en el microondas: no creó la herramienta, pero sí puede hacer daño con ella.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An individual with limited technical knowledge who relies on pre-made scripts, tools, and exploits developed by others — without understanding the underlying principles. Motivated primarily by recognition, thrill, or curiosity rather than financial or ideological goals. Opportunistic rather than targeted. Low sophistication, low resources, but dangerous in large numbers.\n> Como alguien que no sabe cocinar pero puede calentar comida en el microondas: no creó la herramienta, pero sí puede hacer daño con ella."
      },
      {
        "name": "Hacktivist",
        "definition": "An individual or group that uses hacking techniques to promote a political, social, or environmental cause (**hacktivism**). Motivated by ideological beliefs, not financial gain. Common techniques include **website defacement**, **DDoS attacks**, **doxxing**, and **data leaks**. Can range from low to high technical sophistication. Notable groups: **Anonymous**, **LulzSec**.",
        "analogy": "Como un manifestante que, en lugar de pancartas, usa código: el objetivo no es robar sino hacer ruido y obligar a que su causa sea escuchada.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An individual or group that uses hacking techniques to promote a political, social, or environmental cause (**hacktivism**). Motivated by ideological beliefs, not financial gain. Common techniques include **website defacement**, **DDoS attacks**, **doxxing**, and **data leaks**. Can range from low to high technical sophistication. Notable groups: **Anonymous**, **LulzSec**.\n> Como un manifestante que, en lugar de pancartas, usa código: el objetivo no es robar sino hacer ruido y obligar a que su causa sea escuchada."
      },
      {
        "name": "Doxxing",
        "definition": "The public release of private personal information about an individual or organization (name, address, phone number, email) with the intent to expose them or incite real-world action against them. Frequently used as a hacktivist technique.",
        "analogy": "Como colgar el número de teléfono personal de alguien en una pared pública esperando que otros lo llamen para acosarlo.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The public release of private personal information about an individual or organization (name, address, phone number, email) with the intent to expose them or incite real-world action against them. Frequently used as a hacktivist technique.\n> Como colgar el número de teléfono personal de alguien en una pared pública esperando que otros lo llamen para acosarlo."
      },
      {
        "name": "Organized Crime (Cybercrime)",
        "definition": "Well-structured criminal groups or syndicates that conduct cyber attacks primarily for **financial gain**. Operate similarly to traditional organized crime but in the digital space — with defined roles, advanced tools (custom malware, ransomware, sophisticated phishing), and global reach. High technical capability and high adaptability. Notable groups: **FIN7**, **Carbanak**. May act as hired mercenaries for governments.",
        "analogy": "Como la mafia tradicional que migró al mundo digital: misma estructura jerárquica, mismos objetivos financieros, pero ahora sus operaciones no tienen fronteras físicas.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Well-structured criminal groups or syndicates that conduct cyber attacks primarily for **financial gain**. Operate similarly to traditional organized crime but in the digital space — with defined roles, advanced tools (custom malware, ransomware, sophisticated phishing), and global reach. High technical capability and high adaptability. Notable groups: **FIN7**, **Carbanak**. May act as hired mercenaries for governments.\n> Como la mafia tradicional que migró al mundo digital: misma estructura jerárquica, mismos objetivos financieros, pero ahora sus operaciones no tienen fronteras físicas."
      },
      {
        "name": "Nation-State Actor",
        "definition": "Groups or individuals sponsored by a government to conduct cyber operations against other nations, organizations, or individuals. Highest level of sophistication, resources, and funding. Motivated by **long-term geopolitical objectives**: intelligence gathering, critical infrastructure disruption, political influence, and cyber warfare — not typically financial (exception: North Korea). Often associated with **Advanced Persistent Threats (APTs)**. Notable attacks: **Stuxnet** (US/Israel vs. Iran), **2016 US election interference** (Russia).",
        "analogy": "Como la inteligencia militar de un país trasladada al mundo digital: tienen el presupuesto de un gobierno, el talento de un ejército, y la paciencia para esperar años antes de atacar.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Groups or individuals sponsored by a government to conduct cyber operations against other nations, organizations, or individuals. Highest level of sophistication, resources, and funding. Motivated by **long-term geopolitical objectives**: intelligence gathering, critical infrastructure disruption, political influence, and cyber warfare — not typically financial (exception: North Korea). Often associated with **Advanced Persistent Threats (APTs)**. Notable attacks: **Stuxnet** (US/Israel vs. Iran), **2016 US election interference** (Russia).\n> Como la inteligencia militar de un país trasladada al mundo digital: tienen el presupuesto de un gobierno, el talento de un ejército, y la paciencia para esperar años antes de atacar."
      },
      {
        "name": "False Flag Attack",
        "definition": "A cyber attack deliberately orchestrated to appear as if it originated from a different source or threat actor, with the intent to mislead investigators and misattribute the attack. Commonly used by nation-state actors to maintain plausible deniability. Example: Russian actors mimicking North Korean TTPs during the 2018 Winter Olympics malware attack.",
        "analogy": "Como cometer un crimen disfrazado con la ropa de otra persona, dejando evidencia que apunte hacia ella en lugar de hacia ti.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A cyber attack deliberately orchestrated to appear as if it originated from a different source or threat actor, with the intent to mislead investigators and misattribute the attack. Commonly used by nation-state actors to maintain plausible deniability. Example: Russian actors mimicking North Korean TTPs during the 2018 Winter Olympics malware attack.\n> Como cometer un crimen disfrazado con la ropa de otra persona, dejando evidencia que apunte hacia ella en lugar de hacia ti."
      },
      {
        "name": "Advanced Persistent Threat (APT)",
        "definition": "A prolonged and targeted cyberattack in which an intruder gains unauthorized access to a network and remains **undetected for an extended period** — monitoring, stealing data, or maintaining access rather than causing immediate damage. Historically synonymous with nation-state actors, but now also applied to sophisticated organized cybercrime groups. Characterized by stealth, patience, and high capability.",
        "analogy": "Como un intruso que entra a tu casa, vive en el ático durante meses sin que lo notes, y va copiando documentos importantes poco a poco.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A prolonged and targeted cyberattack in which an intruder gains unauthorized access to a network and remains **undetected for an extended period** — monitoring, stealing data, or maintaining access rather than causing immediate damage. Historically synonymous with nation-state actors, but now also applied to sophisticated organized cybercrime groups. Characterized by stealth, patience, and high capability.\n> Como un intruso que entra a tu casa, vive en el ático durante meses sin que lo notes, y va copiando documentos importantes poco a poco."
      },
      {
        "name": "Insider Threat",
        "definition": "A security threat originating from within the organization — current or former employees, contractors, or business associates with legitimate access who misuse it. Dangerous due to their **intimate knowledge of infrastructure, systems, and security procedures**. Can be intentional (revenge, financial gain, espionage) or unintentional (negligence, lack of awareness). Example: **Edward Snowden** (NSA, 2013), **Twitter hack** (2020).",
        "analogy": "Como el empleado del banco que ya conoce las cámaras, las cajas fuertes y los horarios de los guardias: no necesita planear un asalto desde cero porque ya está adentro.",
        "tables": [],
        "list_items": [
          "Mitigation: Zero Trust architecture, robust access controls, regular audits, security awareness training."
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** A security threat originating from within the organization — current or former employees, contractors, or business associates with legitimate access who misuse it. Dangerous due to their **intimate knowledge of infrastructure, systems, and security procedures**. Can be intentional (revenge, financial gain, espionage) or unintentional (negligence, lack of awareness). Example: **Edward Snowden** (NSA, 2013), **Twitter hack** (2020).\n* Mitigation: Zero Trust architecture, robust access controls, regular audits, security awareness training.\n> Como el empleado del banco que ya conoce las cámaras, las cajas fuertes y los horarios de los guardias: no necesita planear un asalto desde cero porque ya está adentro."
      },
      {
        "name": "Shadow IT",
        "definition": "The use of IT systems, devices, software, applications, and services **without explicit organizational approval** — managed outside the IT department's knowledge. Driven by the desire for convenience and productivity when official processes are too slow or restrictive. Includes personal devices (BYOD), unapproved cloud storage (Dropbox, Google Drive), and unauthorized software. Poses risks of data breaches, regulatory non-compliance, and unmanageable attack surfaces.",
        "analogy": "Como conectar tu propio router en la oficina porque el Wi-Fi corporativo es lento: soluciona tu problema inmediato pero abre una puerta trasera que nadie en IT sabe que existe.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The use of IT systems, devices, software, applications, and services **without explicit organizational approval** — managed outside the IT department's knowledge. Driven by the desire for convenience and productivity when official processes are too slow or restrictive. Includes personal devices (BYOD), unapproved cloud storage (Dropbox, Google Drive), and unauthorized software. Poses risks of data breaches, regulatory non-compliance, and unmanageable attack surfaces.\n> Como conectar tu propio router en la oficina porque el Wi-Fi corporativo es lento: soluciona tu problema inmediato pero abre una puerta trasera que nadie en IT sabe que existe."
      },
      {
        "name": "BYOD (Bring Your Own Device)",
        "definition": "Practice of employees using personal devices (smartphones, tablets, laptops) to access corporate systems and data. A major contributor to Shadow IT. Personal devices typically lack the same security controls as corporate-managed devices, expanding the attack surface.",
        "analogy": "Como dejar que cada empleado entre al almacén con su propia llave hecha en una copia no autorizada: conveniente, pero sin control de quién tiene acceso a qué.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Practice of employees using personal devices (smartphones, tablets, laptops) to access corporate systems and data. A major contributor to Shadow IT. Personal devices typically lack the same security controls as corporate-managed devices, expanding the attack surface.\n> Como dejar que cada empleado entre al almacén con su propia llave hecha en una copia no autorizada: conveniente, pero sin control de quién tiene acceso a qué."
      },
      {
        "name": "Threat Vector",
        "definition": "The means or **pathway** through which an attacker gains unauthorized access to deliver a malicious payload or carry out an attack. Represents the **\"how\"** of the attack. Key threat vectors:",
        "analogy": "El vector es el camino que elige el ladrón para entrar: por la ventana, por la puerta, por el techo — cada uno requiere una defensa diferente.",
        "tables": [
          {
            "headers": [
              "Vector",
              "Description"
            ],
            "rows": [
              [
                "**Messages**",
                "Phishing via email, SMS, or instant messaging — malicious links or attachments"
              ],
              [
                "**Images**",
                "Malicious code embedded in image files (steganography); executed when the image is loaded (example: Stegano attack, 2017)"
              ],
              [
                "**Files**",
                "Malware disguised as legitimate documents, software, or pirated content"
              ],
              [
                "**Voice Calls (Vishing)**",
                "Impersonating trusted entities (banks, IRS) via phone to extract sensitive information"
              ],
              [
                "**Removable Devices**",
                "USB drives used for baiting — infected devices left in public spaces for targets to find and connect"
              ],
              [
                "**Unsecured Networks**",
                "Unprotected Wi-Fi, wired, or Bluetooth networks exploited to intercept data or gain unauthorized access"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The means or **pathway** through which an attacker gains unauthorized access to deliver a malicious payload or carry out an attack. Represents the **\"how\"** of the attack. Key threat vectors:\n\n| Vector | Description |\n|---|---|\n| **Messages** | Phishing via email, SMS, or instant messaging — malicious links or attachments |\n| **Images** | Malicious code embedded in image files (steganography); executed when the image is loaded (example: Stegano attack, 2017) |\n| **Files** | Malware disguised as legitimate documents, software, or pirated content |\n| **Voice Calls (Vishing)** | Impersonating trusted entities (banks, IRS) via phone to extract sensitive information |\n| **Removable Devices** | USB drives used for baiting — infected devices left in public spaces for targets to find and connect |\n| **Unsecured Networks** | Unprotected Wi-Fi, wired, or Bluetooth networks exploited to intercept data or gain unauthorized access |\n\n> El vector es el camino que elige el ladrón para entrar: por la ventana, por la puerta, por el techo — cada uno requiere una defensa diferente."
      },
      {
        "name": "Attack Surface",
        "definition": "The **sum of all potential entry points and vulnerabilities** across a system or network where an unauthorized user could attempt to enter or extract data. Represents the **\"where\"** of the attack. Reduced by restricting access, removing unnecessary software, and disabling unused protocols.",
        "analogy": "Como el perímetro total de un edificio: cada puerta, ventana y conducto de ventilación es parte de la superficie de ataque — cuantas menos aberturas, más fácil de defender.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The **sum of all potential entry points and vulnerabilities** across a system or network where an unauthorized user could attempt to enter or extract data. Represents the **\"where\"** of the attack. Reduced by restricting access, removing unnecessary software, and disabling unused protocols.\n> Como el perímetro total de un edificio: cada puerta, ventana y conducto de ventilación es parte de la superficie de ataque — cuantas menos aberturas, más fácil de defender."
      },
      {
        "name": "Evil Twin",
        "definition": "A rogue wireless access point set up by an attacker that mimics a legitimate Wi-Fi network. When users connect, the attacker can intercept, capture, and modify their traffic.",
        "analogy": "Como una copia falsa de la entrada de tu banco justo al lado de la real: si entras a la falsa, el atacante ve y registra todo lo que haces.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A rogue wireless access point set up by an attacker that mimics a legitimate Wi-Fi network. When users connect, the attacker can intercept, capture, and modify their traffic.\n> Como una copia falsa de la entrada de tu banco justo al lado de la real: si entras a la falsa, el atacante ve y registra todo lo que haces."
      },
      {
        "name": "BlueBorne",
        "definition": "A set of vulnerabilities in Bluetooth technology that allows an attacker to take over devices, spread malware, or execute on-path attacks — **without any user interaction or pairing required**.",
        "analogy": "Como un ladrón que puede abrir tu cerradura sin tocarla ni que tú lo invites: solo necesita estar cerca.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A set of vulnerabilities in Bluetooth technology that allows an attacker to take over devices, spread malware, or execute on-path attacks — **without any user interaction or pairing required**.\n> Como un ladrón que puede abrir tu cerradura sin tocarla ni que tú lo invites: solo necesita estar cerca."
      },
      {
        "name": "BlueSmack",
        "definition": "A Denial of Service (DoS) attack targeting Bluetooth-enabled devices by sending specially crafted L2CAP (Logical Link Control and Adaptation Protocol) packets that exhaust the device's resources, causing it to crash or become inoperable.",
        "analogy": "Como inundar de llamadas el teléfono de alguien hasta que ya no pueda recibir ninguna legítima.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A Denial of Service (DoS) attack targeting Bluetooth-enabled devices by sending specially crafted L2CAP (Logical Link Control and Adaptation Protocol) packets that exhaust the device's resources, causing it to crash or become inoperable.\n> Como inundar de llamadas el teléfono de alguien hasta que ya no pueda recibir ninguna legítima."
      },
      {
        "name": "TTPs (Tactics, Techniques, and Procedures)",
        "definition": "The specific methods, behaviors, and patterns of activity associated with a particular threat actor or group. **Tactics** = high-level goals; **Techniques** = general methods used; **Procedures** = specific step-by-step implementations. Understanding an adversary's TTPs allows defenders to detect, anticipate, and counter their attacks.",
        "analogy": "Como el estilo de juego de un equipo rival: si conoces sus jugadas favoritas, puedes preparar tu defensa antes de que el partido comience.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The specific methods, behaviors, and patterns of activity associated with a particular threat actor or group. **Tactics** = high-level goals; **Techniques** = general methods used; **Procedures** = specific step-by-step implementations. Understanding an adversary's TTPs allows defenders to detect, anticipate, and counter their attacks.\n> Como el estilo de juego de un equipo rival: si conoces sus jugadas favoritas, puedes preparar tu defensa antes de que el partido comience."
      },
      {
        "name": "Honeypot",
        "definition": "A decoy system or server configured to appear as a real, vulnerable target to attract attackers. Its purpose is **not to block attacks** but to **log, monitor, and study** attacker behavior, methods, and TTPs. Should be placed in an isolated network segment (screened subnet) accessible from the internet. Can also detect insider threats.",
        "analogy": "Como una caja fuerte falsa llena de billetes falsos: el ladrón pierde tiempo y energía abriéndola mientras tú lo observas y aprendes cómo opera.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A decoy system or server configured to appear as a real, vulnerable target to attract attackers. Its purpose is **not to block attacks** but to **log, monitor, and study** attacker behavior, methods, and TTPs. Should be placed in an isolated network segment (screened subnet) accessible from the internet. Can also detect insider threats.\n> Como una caja fuerte falsa llena de billetes falsos: el ladrón pierde tiempo y energía abriéndola mientras tú lo observas y aprendes cómo opera."
      },
      {
        "name": "Honeynet",
        "definition": "A network of multiple honeypots designed to simulate an entire environment — including servers, routers, and switches. Used by large organizations and research institutions to study complex, multi-stage attacks and reveal patterns in attack vectors across a broader simulated infrastructure.",
        "analogy": "Como construir un vecindario falso completo para estudiar cómo se mueven los criminales entre edificios, no solo en uno.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A network of multiple honeypots designed to simulate an entire environment — including servers, routers, and switches. Used by large organizations and research institutions to study complex, multi-stage attacks and reveal patterns in attack vectors across a broader simulated infrastructure.\n> Como construir un vecindario falso completo para estudiar cómo se mueven los criminales entre edificios, no solo en uno."
      },
      {
        "name": "Honeyfile",
        "definition": "A decoy file placed within a system that appears to contain sensitive or valuable data. Contains fake data embedded with **unique identifiers, hidden metadata, or digital watermarks**. When accessed, it triggers an alert and may enumerate the attacker's own network. Can be any file type: documents, spreadsheets, images, executables.",
        "analogy": "Como dejar un sobre marcado con tinta invisible que dice \"Fórmula Secreta\": si alguien lo abre, sabes que hubo una intrusión y puedes rastrear al culpable.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A decoy file placed within a system that appears to contain sensitive or valuable data. Contains fake data embedded with **unique identifiers, hidden metadata, or digital watermarks**. When accessed, it triggers an alert and may enumerate the attacker's own network. Can be any file type: documents, spreadsheets, images, executables.\n> Como dejar un sobre marcado con tinta invisible que dice \"Fórmula Secreta\": si alguien lo abre, sabes que hubo una intrusión y puedes rastrear al culpable."
      },
      {
        "name": "Honeytoken",
        "definition": "A fake piece of data or resource — such as a fabricated user account, bogus URL, or dummy database record — with **no legitimate use or value**. Any interaction with it signals a likely security breach. Particularly effective for detecting insider threats. Examples: a fake \"Admin\" account, a fake API key, a bogus database entry.",
        "analogy": "Como esconder un billete marcado en tu billetera: si desaparece, sabes exactamente quién lo tomó y cuándo.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A fake piece of data or resource — such as a fabricated user account, bogus URL, or dummy database record — with **no legitimate use or value**. Any interaction with it signals a likely security breach. Particularly effective for detecting insider threats. Examples: a fake \"Admin\" account, a fake API key, a bogus database entry.\n> Como esconder un billete marcado en tu billetera: si desaparece, sabes exactamente quién lo tomó y cuándo."
      },
      {
        "name": "Disruption Technologies (Additional)",
        "definition": "Strategies used alongside deception technologies to hinder attacker reconnaissance and operations:",
        "analogy": "Como un escenario de cine construido para confundir al enemigo: todo parece real, pero ninguno de los recursos es genuino.",
        "tables": [
          {
            "headers": [
              "Technique",
              "Purpose"
            ],
            "rows": [
              [
                "**Bogus DNS entries**",
                "Mislead attackers into accessing non-existent or trap domains"
              ],
              [
                "**Decoy directories**",
                "Fake folders/files that trigger alerts when accessed"
              ],
              [
                "**Dynamic page generation**",
                "Ever-changing web content to confuse automated scrapers and bots"
              ],
              [
                "**Port triggering**",
                "Keeps ports closed until a specific traffic pattern is detected, hiding services from scanners"
              ],
              [
                "**Fake telemetry data**",
                "Returns false OS/system information during a detected network scan"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Strategies used alongside deception technologies to hinder attacker reconnaissance and operations:\n\n| Technique | Purpose |\n|---|---|\n| **Bogus DNS entries** | Mislead attackers into accessing non-existent or trap domains |\n| **Decoy directories** | Fake folders/files that trigger alerts when accessed |\n| **Dynamic page generation** | Ever-changing web content to confuse automated scrapers and bots |\n| **Port triggering** | Keeps ports closed until a specific traffic pattern is detected, hiding services from scanners |\n| **Fake telemetry data** | Returns false OS/system information during a detected network scan |\n\n> Como un escenario de cine construido para confundir al enemigo: todo parece real, pero ninguno de los recursos es genuino.\n\n\n*CompTIA Security+ SY0-701 · Section 3: Threat Actors · Dion Training*"
      }
    ]
  },
  {
    "sectionId": "S4",
    "sectionTitle": "Section 4: Physical Security",
    "concepts": [
      {
        "name": "Physical Security",
        "definition": "Measures taken to protect tangible assets — buildings, equipment, and people — from harm or unauthorized access. Forms the outermost layer of a defense-in-depth strategy, starting at the perimeter and working inward toward the most sensitive data and systems.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Measures taken to protect tangible assets — buildings, equipment, and people — from harm or unauthorized access. Forms the outermost layer of a defense-in-depth strategy, starting at the perimeter and working inward toward the most sensitive data and systems.\n  \n  > Como las capas de una cebolla: la seguridad física empieza en la cerca del perímetro y va protegiendo cada capa hasta llegar al núcleo donde está la información más crítica."
      },
      {
        "name": "Fencing",
        "definition": "A physical barrier structure made of interconnected panels or posts (wood, metal, wire mesh, concrete) that encloses a perimeter to deter and delay unauthorized entry. Serves three purposes: **visual deterrent** (defines boundaries), **physical barrier** (prevents entry), and **delay mechanism** (buys time for security personnel to respond). Vulnerabilities include climbing, cutting, and digging underneath — countered with height, electrification, barbed wire, underground extensions, or buried mesh. **Key Concept: Prevent People**",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A physical barrier structure made of interconnected panels or posts (wood, metal, wire mesh, concrete) that encloses a perimeter to deter and delay unauthorized entry. Serves three purposes: **visual deterrent** (defines boundaries), **physical barrier** (prevents entry), and **delay mechanism** (buys time for security personnel to respond). Vulnerabilities include climbing, cutting, and digging underneath — countered with height, electrification, barbed wire, underground extensions, or buried mesh. **Key Concept: Prevent People**\n  \n  > Como la barda de una casa: no garantiza que nadie entre, pero obliga al intruso a esforzarse más, y ese tiempo extra es exactamente lo que necesita la seguridad para responder."
      },
      {
        "name": "Bollards",
        "definition": "Short, sturdy vertical posts made of steel or concrete designed to control or prevent **vehicular access** to an area. Can be permanent or temporary. Protect against vehicle-ramming attacks, ram raiding, and vehicle-based IEDs. Distinguished from fencing in that fencing controls **people** while bollards control **vehicles**. Often disguised as decorative elements (planters, large spheres). Rated by impact standards (e.g., ASTM F2656-07 M30 P1 = stops a 15,000 lb vehicle at 30 mph within 1 meter). **Key Concept: Prevent Vehicles**",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Short, sturdy vertical posts made of steel or concrete designed to control or prevent **vehicular access** to an area. Can be permanent or temporary. Protect against vehicle-ramming attacks, ram raiding, and vehicle-based IEDs. Distinguished from fencing in that fencing controls **people** while bollards control **vehicles**. Often disguised as decorative elements (planters, large spheres). Rated by impact standards (e.g., ASTM F2656-07 M30 P1 = stops a 15,000 lb vehicle at 30 mph within 1 meter). **Key Concept: Prevent Vehicles**\n  \n  > Como los topes en la entrada de un estacionamiento, pero diseñados para detener un camión en movimiento, no solo ralentizarlo."
      },
      {
        "name": "Brute Force (Physical)",
        "definition": "A direct, often violent approach to bypassing physical security by exploiting the structural vulnerabilities of barriers and devices. Four main forms:",
        "analogy": "Como intentar entrar a una bóveda bancaria a la fuerza: no es sutil, pero a veces la simplicidad de un ataque directo lo hace efectivo contra instalaciones mal preparadas.",
        "tables": [
          {
            "headers": [
              "Form",
              "Description",
              "Countermeasure"
            ],
            "rows": [
              [
                "**Forcible Entry**",
                "Breaking windows, kicking doors, cutting fences, breaking locks",
                "Reinforced/laminated windows, deadbolts, metal door frames, solid core doors"
              ],
              [
                "**Tampering with Security Devices**",
                "Forcing gates open, blinding cameras with paint, disabling sensors/alarms",
                "Redundant layers of security controls"
              ],
              [
                "**Confronting Security Personnel**",
                "Distracting, assaulting, or weaponizing against guards",
                "Conflict resolution training, self-defense training, backup communication"
              ],
              [
                "**Ramming Barriers with Vehicles**",
                "Driving vehicles into fences, gates, or building facades",
                "Bollards, reinforced barriers"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A direct, often violent approach to bypassing physical security by exploiting the structural vulnerabilities of barriers and devices. Four main forms:\n\n| Form                                | Description                                                               | Countermeasure                                                               |\n| ----------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |\n| **Forcible Entry**                  | Breaking windows, kicking doors, cutting fences, breaking locks           | Reinforced/laminated windows, deadbolts, metal door frames, solid core doors |\n| **Tampering with Security Devices** | Forcing gates open, blinding cameras with paint, disabling sensors/alarms | Redundant layers of security controls                                        |\n| **Confronting Security Personnel**  | Distracting, assaulting, or weaponizing against guards                    | Conflict resolution training, self-defense training, backup communication    |\n| **Ramming Barriers with Vehicles**  | Driving vehicles into fences, gates, or building facades                  | Bollards, reinforced barriers                                                |\n\n> Como intentar entrar a una bóveda bancaria a la fuerza: no es sutil, pero a veces la simplicidad de un ataque directo lo hace efectivo contra instalaciones mal preparadas."
      },
      {
        "name": "Surveillance System",
        "definition": "An organized strategy or setup designed to observe, monitor, and report activities within a given area. Combines four components:",
        "analogy": "Como el sistema nervioso de un edificio: los sensores y cámaras son los ojos, los guardias son el cerebro que reacciona, y la iluminación asegura que nada pase desapercibido en la oscuridad.",
        "tables": [
          {
            "headers": [
              "Component",
              "Function",
              "Notes"
            ],
            "rows": [
              [
                "**Video Surveillance (CCTV)**",
                "Visual monitoring and recording",
                "Detective control; wired or wireless; indoor/outdoor variants; PTZ [Pan-Tilt-Zoom: Cameras tha can move ] capability"
              ],
              [
                "**Security Guards**",
                "Human monitoring, immediate response, and identity verification",
                "Most flexible and adaptable surveillance form"
              ],
              [
                "**Lighting**",
                "Illuminates areas to deter attackers and improve video quality",
                "Motion-activated lights serve as both deterrent and alert"
              ],
              [
                "**Sensors**",
                "Detect environmental changes triggered by movement or presence",
                "Infrared, pressure, microwave, ultrasonic"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An organized strategy or setup designed to observe, monitor, and report activities within a given area. Combines four components:\n\n| Component                     | Function                                                        | Notes                                                                                                                |\n| ----------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |\n| **Video Surveillance (CCTV)** | Visual monitoring and recording                                 | Detective control; wired or wireless; indoor/outdoor variants; PTZ [Pan-Tilt-Zoom: Cameras tha can move ] capability |\n| **Security Guards**           | Human monitoring, immediate response, and identity verification | Most flexible and adaptable surveillance form                                                                        |\n| **Lighting**                  | Illuminates areas to deter attackers and improve video quality  | Motion-activated lights serve as both deterrent and alert                                                            |\n| **Sensors**                   | Detect environmental changes triggered by movement or presence  | Infrared, pressure, microwave, ultrasonic                                                                            |\n\n> Como el sistema nervioso de un edificio: los sensores y cámaras son los ojos, los guardias son el cerebro que reacciona, y la iluminación asegura que nada pase desapercibido en la oscuridad."
      },
      {
        "name": "CCTV (Closed Circuit Television)",
        "definition": "Video surveillance systems that transmit signals to a specific, limited set of monitors. Available in wired (physically cabled to monitoring station) and wireless (Wi-Fi/cellular) configurations. Wired is more reliable; wireless is easier to install but vulnerable to signal jamming. Classified as a **detective control**.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Video surveillance systems that transmit signals to a specific, limited set of monitors. Available in wired (physically cabled to monitoring station) and wireless (Wi-Fi/cellular) configurations. Wired is more reliable; wireless is easier to install but vulnerable to signal jamming. Classified as a **detective control**.\n  \n  > Como tener ojos en todos los rincones del edificio que graban todo lo que pasa, aunque no puedan intervenir por sí solos."
      },
      {
        "name": "PTZ (Pan-Tilt-Zoom)",
        "definition": "A camera control feature that allows a security operator to remotely adjust the camera's direction (pan left/right, tilt up/down) and magnification (zoom in/out) in real time. Most effective when paired with a staffed monitoring station.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A camera control feature that allows a security operator to remotely adjust the camera's direction (pan left/right, tilt up/down) and magnification (zoom in/out) in real time. Most effective when paired with a staffed monitoring station.\n  \n  > Como un guardia con binoculares que puede girar la cabeza y enfocar cualquier punto del perímetro sin moverse de su puesto."
      },
      {
        "name": "Sensors — Types",
        "definition": "Devices that detect and respond to physical stimuli and convert them into readable signals or alerts. Four types:",
        "analogy": "Como diferentes tipos de alarmas para diferentes situaciones: algunas detectan calor, otras peso, otras movimiento en el aire — cada una cubre lo que las otras no pueden.",
        "tables": [
          {
            "headers": [
              "Type",
              "Detection Method",
              "Best Use Case"
            ],
            "rows": [
              [
                "**Infrared**",
                "Detects changes in infrared radiation emitted by warm bodies",
                "Low-light or dark environments"
              ],
              [
                "**Pressure**",
                "Activates when a specified weight is detected on embedded floor/mat sensor",
                "Restricted area entry detection"
              ],
              [
                "**Microwave**",
                "Emits microwave pulses and measures reflection off moving objects",
                "Large area coverage (prone to false alarms)"
              ],
              [
                "**Ultrasonic**",
                "Measures reflection of ultrasonic waves off moving objects (echolocation)",
                "Automated doors, indoor movement detection"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Devices that detect and respond to physical stimuli and convert them into readable signals or alerts. Four types:\n\n| Type           | Detection Method                                                           | Best Use Case                               |\n| -------------- | -------------------------------------------------------------------------- | ------------------------------------------- |\n| **Infrared**   | Detects changes in infrared radiation emitted by warm bodies               | Low-light or dark environments              |\n| **Pressure**   | Activates when a specified weight is detected on embedded floor/mat sensor | Restricted area entry detection             |\n| **Microwave**  | Emits microwave pulses and measures reflection off moving objects          | Large area coverage (prone to false alarms) |\n| **Ultrasonic** | Measures reflection of ultrasonic waves off moving objects (echolocation)  | Automated doors, indoor movement detection  |\n\n> Como diferentes tipos de alarmas para diferentes situaciones: algunas detectan calor, otras peso, otras movimiento en el aire — cada una cubre lo que las otras no pueden."
      },
      {
        "name": "Bypassing Surveillance Systems",
        "definition": "Techniques used by attackers to disable, deceive, or render surveillance systems ineffective. Five main methods:",
        "analogy": "Como buscar los puntos ciegos de una cámara antes de actuar: el atacante estudia el sistema para encontrar la manera de volverlo ciego en el momento crítico.",
        "tables": [
          {
            "headers": [
              "Method",
              "Technique",
              "Countermeasure"
            ],
            "rows": [
              [
                "**Visual Obstruction**",
                "Spray paint, tape, stickers, or objects blocking camera lens",
                "Tamper alarms on cameras"
              ],
              [
                "**Blinding Sensors/Cameras**",
                "High-powered flashlights or lasers aimed at camera lens; heating room to blind IR sensors",
                "Tamper detection, redundant camera placement"
              ],
              [
                "**Acoustic Interference**",
                "Loud sounds or jamming devices disrupting microphone-based sensors",
                "Redundant acoustic sensors, white noise filtering"
              ],
              [
                "**Electromagnetic Interference (EMI)**",
                "Jamming wireless signals used by surveillance systems",
                "Encrypted frequency hopping signals"
              ],
              [
                "**Physical Environment Attacks**",
                "Cutting power, tampering with power boxes, temperature manipulation, arson",
                "Backup power (UPS), redundant systems"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Techniques used by attackers to disable, deceive, or render surveillance systems ineffective. Five main methods:\n\n| Method                                 | Technique                                                                                 | Countermeasure                                    |\n| -------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------- |\n| **Visual Obstruction**                 | Spray paint, tape, stickers, or objects blocking camera lens                              | Tamper alarms on cameras                          |\n| **Blinding Sensors/Cameras**           | High-powered flashlights or lasers aimed at camera lens; heating room to blind IR sensors | Tamper detection, redundant camera placement      |\n| **Acoustic Interference**              | Loud sounds or jamming devices disrupting microphone-based sensors                        | Redundant acoustic sensors, white noise filtering |\n| **Electromagnetic Interference (EMI)** | Jamming wireless signals used by surveillance systems                                     | Encrypted frequency hopping signals               |\n| **Physical Environment Attacks**       | Cutting power, tampering with power boxes, temperature manipulation, arson                | Backup power (UPS), redundant systems             |\n\n> Como buscar los puntos ciegos de una cámara antes de actuar: el atacante estudia el sistema para encontrar la manera de volverlo ciego en el momento crítico."
      },
      {
        "name": "Access Control Vestibule",
        "definition": "A double-door security system electronically controlled so that **only one door can be open at a time**. Creates an intermediate holding space where identity and credentials are verified before granting access to the secured inner area. Typically integrated with access badges, PINs, and security guards. Prevents both **piggybacking** and **tailgating** by physically limiting space to one person per entry cycle.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A double-door security system electronically controlled so that **only one door can be open at a time**. Creates an intermediate holding space where identity and credentials are verified before granting access to the secured inner area. Typically integrated with access badges, PINs, and security guards. Prevents both **piggybacking** and **tailgating** by physically limiting space to one person per entry cycle.\n  \n  > Como la esclusa de una cámara espacial: tienes que estar completamente dentro y que la primera puerta se cierre antes de que la segunda se abra — no hay atajos."
      },
      {
        "name": "Piggybacking",
        "definition": "An unauthorized entry technique where **two people work together** — an authorized individual **intentionally** allows an unauthorized person to pass through a secured checkpoint alongside them. Usually accomplished through social engineering or manipulation (e.g., impersonating a delivery driver to convince an employee to badge them in).",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An unauthorized entry technique where **two people work together** — an authorized individual **intentionally** allows an unauthorized person to pass through a secured checkpoint alongside them. Usually accomplished through social engineering or manipulation (e.g., impersonating a delivery driver to convince an employee to badge them in).\n  \n  > Como convencer al empleado que tiene el acceso de que te abra la puerta \"solo por esta vez\" porque traes las manos ocupadas con cajas."
      },
      {
        "name": "Tailgating",
        "definition": "An unauthorized entry technique where an unauthorized person **closely follows** an authorized individual through a secured access point **without their knowledge or consent**. More covert and opportunistic than piggybacking. Countered by access control vestibules sized for single-person entry.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An unauthorized entry technique where an unauthorized person **closely follows** an authorized individual through a secured access point **without their knowledge or consent**. More covert and opportunistic than piggybacking. Countered by access control vestibules sized for single-person entry.\n  \n  > Como colarte al metro justo detrás de alguien que acaba de pasar con su tarjeta, tan rápido que el torniquete no tiene tiempo de cerrarse."
      },
      {
        "name": "Door Locks",
        "definition": "Physical security controls that restrict and regulate access to a space by requiring a specific key, code, credential, or biometric to unlock. Range from basic mechanical locks to advanced electronic systems. Key types:",
        "analogy": "Como la diferencia entre poner un candado de juguete y una caja fuerte en la puerta del cuarto del servidor: ambos son \"candados\", pero la protección que ofrecen no tiene comparación.",
        "tables": [
          {
            "headers": [
              "Lock Type",
              "Mechanism",
              "Security Level"
            ],
            "rows": [
              [
                "**Padlock / Pin-and-Tumbler**",
                "Physical key or picking with tension wrench + pick",
                "Low — pickable in ~15 seconds"
              ],
              [
                "**Standard Door Lock**",
                "Physical key (deadbolt)",
                "Low-Medium — pickable in 30–60 seconds"
              ],
              [
                "**Numeric/PIN Lock**",
                "Entered digit code",
                "Medium — depends on code length"
              ],
              [
                "**Wireless Lock**",
                "NFC, RFID, Wi-Fi, Bluetooth via smartphone",
                "Medium — depends on encryption"
              ],
              [
                "**Biometric Lock**",
                "Fingerprint, retinal scan, facial recognition",
                "High — measured by FAR/FRR/CER"
              ],
              [
                "**Cipher Lock**",
                "Mechanical push-button combination",
                "Medium-High — no electronic dependency"
              ],
              [
                "**Electronic Access System**",
                "Badge + PIN (MFA)",
                "High — combines possession + knowledge factors"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Physical security controls that restrict and regulate access to a space by requiring a specific key, code, credential, or biometric to unlock. Range from basic mechanical locks to advanced electronic systems. Key types:\n\n| Lock Type                     | Mechanism                                          | Security Level                                 |\n| ----------------------------- | -------------------------------------------------- | ---------------------------------------------- |\n| **Padlock / Pin-and-Tumbler** | Physical key or picking with tension wrench + pick | Low — pickable in ~15 seconds                  |\n| **Standard Door Lock**        | Physical key (deadbolt)                            | Low-Medium — pickable in 30–60 seconds         |\n| **Numeric/PIN Lock**          | Entered digit code                                 | Medium — depends on code length                |\n| **Wireless Lock**             | NFC, RFID, Wi-Fi, Bluetooth via smartphone         | Medium — depends on encryption                 |\n| **Biometric Lock**            | Fingerprint, retinal scan, facial recognition      | High — measured by FAR/FRR/CER                 |\n| **Cipher Lock**               | Mechanical push-button combination                 | Medium-High — no electronic dependency         |\n| **Electronic Access System**  | Badge + PIN (MFA)                                  | High — combines possession + knowledge factors |\n\n> Como la diferencia entre poner un candado de juguete y una caja fuerte en la puerta del cuarto del servidor: ambos son \"candados\", pero la protección que ofrecen no tiene comparación."
      },
      {
        "name": "Biometric Authentication",
        "definition": "Authentication method based on unique physical or behavioral characteristics of a person (**inherence factor / something you are**). Common implementations: fingerprint readers, retinal scanners, facial recognition. Used in door locks, smartphones, and access control vestibules.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Authentication method based on unique physical or behavioral characteristics of a person (**inherence factor / something you are**). Common implementations: fingerprint readers, retinal scanners, facial recognition. Used in door locks, smartphones, and access control vestibules.\n  \n  > Como usar tu propia huella dactilar como contraseña: es imposible olvidarla porque siempre la llevas contigo."
      },
      {
        "name": "False Acceptance Rate (FAR)",
        "definition": "The rate at which a biometric system **incorrectly grants access** to an unauthorized user — authenticating someone who should have been rejected. A high FAR means the system is too lenient. To reduce FAR, sensitivity is increased.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The rate at which a biometric system **incorrectly grants access** to an unauthorized user — authenticating someone who should have been rejected. A high FAR means the system is too lenient. To reduce FAR, sensitivity is increased.\n  \n  > Como un guardia de seguridad tan confiado que deja entrar a cualquiera que tenga cara amable, sin verificar su identificación."
      },
      {
        "name": "False Rejection Rate (FRR)",
        "definition": "The rate at which a biometric system **incorrectly denies access** to an authorized user — rejecting someone who should have been granted access. A high FRR means the system is too strict. Increasing sensitivity to reduce FAR typically increases FRR.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The rate at which a biometric system **incorrectly denies access** to an authorized user — rejecting someone who should have been granted access. A high FRR means the system is too strict. Increasing sensitivity to reduce FAR typically increases FRR.\n  \n  > Como un guardia tan estricto que ni siquiera deja entrar a los empleados que sí trabajan ahí porque siempre encuentra algo \"sospechoso\" en su identificación."
      },
      {
        "name": "Crossover Error Rate (CER) / Equal Error Rate (EER)",
        "definition": "The point at which the **False Acceptance Rate (FAR) and the False Rejection Rate (FRR) are equal**. Used as the primary benchmark for measuring the overall effectiveness of a biometric system. **Lower CER = better biometric system.** Represents the optimal balance between security and usability.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The point at which the **False Acceptance Rate (FAR) and the False Rejection Rate (FRR) are equal**. Used as the primary benchmark for measuring the overall effectiveness of a biometric system. **Lower CER = better biometric system.** Represents the optimal balance between security and usability.\n  \n  > Como afinar el volumen de una alarma: muy bajo y no detecta intrusos (FAR alto), muy alto y suena con cualquier cosa (FRR alto) — el punto exacto donde ambos errores se equilibran es el CER."
      },
      {
        "name": "Access Badge Cloning",
        "definition": "The unauthorized copying of data from an RFID or NFC access badge onto another card or device, allowing the attacker to impersonate an authorized user and bypass physical security. Requires the attacker to be within close range (NFC: 1–2 inches; RFID: 2–10 inches). Common tool used by penetration testers: **Flipper Zero**. Four-step attack process:",
        "analogy": "Como sacarle una copia a la llave de tu vecino mientras la tiene en el bolsillo sin que se dé cuenta, y luego usarla para abrir su puerta cuando él no está.",
        "tables": [
          {
            "headers": [
              "Step",
              "Action"
            ],
            "rows": [
              [
                "**1. Scanning**",
                "Attacker uses a hidden RFID/NFC reader to capture badge data without contact"
              ],
              [
                "**2. Data Extraction**",
                "Extracts unique identifiers or encrypted credentials from captured data"
              ],
              [
                "**3. Writing**",
                "Transfers extracted data onto a blank card or compatible device"
              ],
              [
                "**4. Using the Clone**",
                "Presents the cloned badge to gain unauthorized access"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The unauthorized copying of data from an RFID or NFC access badge onto another card or device, allowing the attacker to impersonate an authorized user and bypass physical security. Requires the attacker to be within close range (NFC: 1–2 inches; RFID: 2–10 inches). Common tool used by penetration testers: **Flipper Zero**. Four-step attack process:\n\n| Step                   | Action                                                                       |\n| ---------------------- | ---------------------------------------------------------------------------- |\n| **1. Scanning**        | Attacker uses a hidden RFID/NFC reader to capture badge data without contact |\n| **2. Data Extraction** | Extracts unique identifiers or encrypted credentials from captured data      |\n| **3. Writing**         | Transfers extracted data onto a blank card or compatible device              |\n| **4. Using the Clone** | Presents the cloned badge to gain unauthorized access                        |\n\n> Como sacarle una copia a la llave de tu vecino mientras la tiene en el bolsillo sin que se dé cuenta, y luego usarla para abrir su puerta cuando él no está."
      },
      {
        "name": "RFID (Radio Frequency Identification)",
        "definition": "Contactless technology using radio waves to transmit data between a tag/card and a reader. Used in access control badges, asset tracking, and payment systems. Readable range: approximately 2–10 inches (standard antenna). Vulnerable to cloning if not properly encrypted.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Contactless technology using radio waves to transmit data between a tag/card and a reader. Used in access control badges, asset tracking, and payment systems. Readable range: approximately 2–10 inches (standard antenna). Vulnerable to cloning if not properly encrypted.\n  \n  > Como una etiqueta de inventario en un supermercado, pero usada para identificar personas en lugar de productos."
      },
      {
        "name": "NFC (Near-Field Communication)",
        "definition": "A short-range (1–2 inches) wireless communication technology used in contactless access badges, payment cards, and smartphone-based authentication. Subset of RFID operating at 13.56 MHz. More difficult to clone at range due to shorter read distance, but still vulnerable without proper encryption.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A short-range (1–2 inches) wireless communication technology used in contactless access badges, payment cards, and smartphone-based authentication. Subset of RFID operating at 13.56 MHz. More difficult to clone at range due to shorter read distance, but still vulnerable without proper encryption.\n  \n  > Como el \"tap to pay\" de tu tarjeta de crédito: conveniente y rápido, pero si alguien tiene un lector cerca, puede intentar capturar tu señal."
      },
      {
        "name": "Mitigating Access Badge Cloning",
        "definition": "Defense measures to prevent or detect unauthorized badge cloning:",
        "analogy": "Como poner una funda blindada a tu tarjeta de crédito contactless: el atacante puede estar justo a tu lado, pero si no puede leer la señal, no puede copiarte nada.",
        "tables": [
          {
            "headers": [
              "Measure",
              "Description"
            ],
            "rows": [
              [
                "**Advanced encryption**",
                "Encrypt badge data to make raw capture useless without the decryption key"
              ],
              [
                "**MFA**",
                "Combine badge with a PIN or biometric — cloned badge alone is insufficient"
              ],
              [
                "**Regular protocol updates**",
                "Periodically rotate encryption keys to invalidate old clones"
              ],
              [
                "**User education**",
                "Train users to report suspicious proximity attempts and protect badge storage"
              ],
              [
                "**RFID-shielding wallets/sleeves**",
                "Physically block readers from capturing badge data while stored"
              ],
              [
                "**Access log monitoring**",
                "Detect anomalies like geographically impossible access (badge used in two locations simultaneously)"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Defense measures to prevent or detect unauthorized badge cloning:\n\n| Measure                            | Description                                                                                            |\n| ---------------------------------- | ------------------------------------------------------------------------------------------------------ |\n| **Advanced encryption**            | Encrypt badge data to make raw capture useless without the decryption key                              |\n| **MFA**                            | Combine badge with a PIN or biometric — cloned badge alone is insufficient |\n| **Regular protocol updates**       | Periodically rotate encryption keys to invalidate old clones                                           |\n| **User education**                 | Train users to report suspicious proximity attempts and protect badge storage                          |\n| **RFID-shielding wallets/sleeves** | Physically block readers from capturing badge data while stored                                        |\n| **Access log monitoring**          | Detect anomalies like geographically impossible access (badge used in two locations simultaneously)    |\n\n> Como poner una funda blindada a tu tarjeta de crédito contactless: el atacante puede estar justo a tu lado, pero si no puede leer la señal, no puede copiarte nada.\n\n\n*CompTIA Security+ SY0-701 · Section 4: Physical Security · Dion Training*"
      }
    ]
  },
  {
    "sectionId": "S5",
    "sectionTitle": "Section 5: Social Engineering",
    "concepts": [
      {
        "name": "Social Engineering",
        "definition": "A manipulative strategy that exploits **human psychology** rather than technical vulnerabilities to gain unauthorized access to systems, data, or physical spaces. Targets the human element through written communication, phone calls, or face-to-face interaction. Best defense: **security awareness training**.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A manipulative strategy that exploits **human psychology** rather than technical vulnerabilities to gain unauthorized access to systems, data, or physical spaces. Targets the human element through written communication, phone calls, or face-to-face interaction. Best defense: **security awareness training**.\n  \n  > Como un estafador de la vida real: no rompe la caja fuerte, convence al empleado del banco de que la abra por él."
      },
      {
        "name": "Motivational Triggers",
        "definition": "Psychological levers used by social engineers to convince victims to perform a malicious action. Six main triggers — often combined for greater effectiveness:",
        "analogy": "Como los trucos de los vendedores más agresivos: no te venden el producto, te venden la emoción que te hace comprarlo sin pensar.",
        "tables": [
          {
            "headers": [
              "Trigger",
              "Description",
              "Example"
            ],
            "rows": [
              [
                "**Authority**",
                "Victim complies because attacker appears to hold power or seniority",
                "Attacker impersonates IT manager, IRS agent, or executive"
              ],
              [
                "**Urgency**",
                "Creates time pressure to bypass normal security procedures",
                "\"You must reset your password in the next 10 minutes or lose access\""
              ],
              [
                "**Social Proof**",
                "Victims act because they believe others are doing the same",
                "Fake reviews, shares, or endorsements driving clicks to a malicious site"
              ],
              [
                "**Scarcity**",
                "Limited availability forces quick, uncritical decisions",
                "\"Only 5 spots left — sign up now\" in a phishing email"
              ],
              [
                "**Likability**",
                "Attacker builds rapport and trust to lower the victim's guard",
                "Friendly conversation about sports, hobbies, or common interests"
              ],
              [
                "**Fear**",
                "Threat of negative consequences compels immediate action",
                "\"Pay this fine now or federal agents will come to your home\""
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Psychological levers used by social engineers to convince victims to perform a malicious action. Six main triggers — often combined for greater effectiveness:\n\n| Trigger          | Description                                                         | Example                                                                  |\n| ---------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |\n| **Authority**    | Victim complies because attacker appears to hold power or seniority | Attacker impersonates IT manager, IRS agent, or executive                |\n| **Urgency**      | Creates time pressure to bypass normal security procedures          | \"You must reset your password in the next 10 minutes or lose access\"     |\n| **Social Proof** | Victims act because they believe others are doing the same          | Fake reviews, shares, or endorsements driving clicks to a malicious site |\n| **Scarcity**     | Limited availability forces quick, uncritical decisions             | \"Only 5 spots left — sign up now\" in a phishing email                    |\n| **Likability**   | Attacker builds rapport and trust to lower the victim's guard       | Friendly conversation about sports, hobbies, or common interests         |\n| **Fear**         | Threat of negative consequences compels immediate action            | \"Pay this fine now or federal agents will come to your home\"             |\n\n> Como los trucos de los vendedores más agresivos: no te venden el producto, te venden la emoción que te hace comprarlo sin pensar."
      },
      {
        "name": "Impersonation",
        "definition": "An attack where an adversary **assumes the identity of another person** to gain unauthorized access or extract sensitive information. Effectiveness increases when the attacker has researched the organization in advance to make the false identity more convincing (e.g., knowing names, floors, departments, internal processes).",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An attack where an adversary **assumes the identity of another person** to gain unauthorized access or extract sensitive information. Effectiveness increases when the attacker has researched the organization in advance to make the false identity more convincing (e.g., knowing names, floors, departments, internal processes).\n  \n  > Como un actor que estudia su papel a fondo antes de salir al escenario: cuanto más detalles conoce, más convincente es la actuación."
      },
      {
        "name": "Brand Impersonation",
        "definition": "A specific form of impersonation where an attacker pretends to represent a **legitimate company or brand**, using official logos, marketing language, and visual design to make fraudulent communications or websites appear authentic. Commonly used in phishing emails and fake social media accounts.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A specific form of impersonation where an attacker pretends to represent a **legitimate company or brand**, using official logos, marketing language, and visual design to make fraudulent communications or websites appear authentic. Commonly used in phishing emails and fake social media accounts.\n  \n  > Como imprimir un uniforme falso de una empresa famosa para que la gente confíe en ti sin cuestionarte."
      },
      {
        "name": "Typosquatting (URL Hijacking / Cybersquatting)",
        "definition": "An attack where the attacker registers a domain name that closely resembles a legitimate website but contains **deliberate typographical errors** (e.g., `gnail.com` instead of `gmail.com`, `Di0ntraining.com` instead of `Diontraining.com`). Designed to capture users who mistype URLs or click on misleading links. Also called **cousin domains**, **lookalike domains**, or **doppelganger domains**.",
        "analogy": "",
        "tables": [],
        "list_items": [
          "Mitigation: Organizations register common misspellings of their own domains; user awareness training; monitoring for similar domain registrations."
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** An attack where the attacker registers a domain name that closely resembles a legitimate website but contains **deliberate typographical errors** (e.g., `gnail.com` instead of `gmail.com`, `Di0ntraining.com` instead of `Diontraining.com`). Designed to capture users who mistype URLs or click on misleading links. Also called **cousin domains**, **lookalike domains**, or **doppelganger domains**.\n* Mitigation: Organizations register common misspellings of their own domains; user awareness training; monitoring for similar domain registrations.\n  \n  > Como abrir una tienda con un nombre casi idéntico al de la competencia, justo al lado, esperando que los clientes descuidados entren por error."
      },
      {
        "name": "Watering Hole Attack",
        "definition": "A **targeted, passive attack** where the attacker compromises a specific website or online service that the intended victim is known to visit regularly. Rather than attacking the target directly, the attacker poisons a trusted third-party resource and waits for victims to come to it. Named after the predator behavior of waiting near a water source for prey.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A **targeted, passive attack** where the attacker compromises a specific website or online service that the intended victim is known to visit regularly. Rather than attacking the target directly, the attacker poisons a trusted third-party resource and waits for victims to come to it. Named after the predator behavior of waiting near a water source for prey.\n  \n  > Como el cocodrilo que no persigue a sus presas: espera escondido en el río que sabe que los animales visitan todos los días."
      },
      {
        "name": "Pretexting",
        "definition": "A social engineering technique where the attacker **creates a fabricated scenario (pretext)** to manipulate a target into divulging sensitive information or performing actions that compromise security. The attacker typically impersonates a trusted figure (IT support, bank official, delivery company, law enforcement). Key mechanic: providing just enough plausible detail so the victim fills in the gaps themselves.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A social engineering technique where the attacker **creates a fabricated scenario (pretext)** to manipulate a target into divulging sensitive information or performing actions that compromise security. The attacker typically impersonates a trusted figure (IT support, bank official, delivery company, law enforcement). Key mechanic: providing just enough plausible detail so the victim fills in the gaps themselves.\n  \n  > Como llamar a alguien diciendo que eres del banco y que \"solo necesitas confirmar\" un dato que en realidad no tienes — pero sonas tan convincente que la persona te lo da voluntariamente."
      },
      {
        "name": "Phishing",
        "definition": "A broad category of social engineering attacks that use **fraudulent communications** disguised as trusted sources to trick victims into revealing sensitive information or downloading malware. Uses mass distribution (spray and pray) with no specific targeting. Six subtypes:",
        "analogy": "Como la diferencia entre pescar con una red enorme (phishing), con una caña apuntando a un pez específico (spear phishing), o esperando al pez más grande del lago (whaling).",
        "tables": [
          {
            "headers": [
              "Subtype",
              "Target",
              "Method"
            ],
            "rows": [
              [
                "**Phishing**",
                "Mass / untargeted",
                "Fraudulent emails to large recipient lists"
              ],
              [
                "**Spear Phishing**",
                "Specific individual or organization",
                "Personalized, researched email tailored to the target"
              ],
              [
                "**Whaling**",
                "High-profile executives (CEO, CFO)",
                "Highly crafted spear phishing targeting decision-makers"
              ],
              [
                "**Business Email Compromise (BEC)**",
                "Finance / HR departments",
                "Uses compromised or spoofed executive email to authorize fraud"
              ],
              [
                "**Vishing**",
                "Phone call recipients",
                "Voice calls impersonating banks, government agencies, or IT support"
              ],
              [
                "**Smishing**",
                "SMS/text recipients",
                "Malicious links or phone numbers delivered via text message"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A broad category of social engineering attacks that use **fraudulent communications** disguised as trusted sources to trick victims into revealing sensitive information or downloading malware. Uses mass distribution (spray and pray) with no specific targeting. Six subtypes:\n\n| Subtype                             | Target                              | Method                                                              |\n| ----------------------------------- | ----------------------------------- | ------------------------------------------------------------------- |\n| **Phishing**                        | Mass / untargeted                   | Fraudulent emails to large recipient lists                          |\n| **Spear Phishing**                  | Specific individual or organization | Personalized, researched email tailored to the target               |\n| **Whaling**                         | High-profile executives (CEO, CFO)  | Highly crafted spear phishing targeting decision-makers             |\n| **Business Email Compromise (BEC)** | Finance / HR departments            | Uses compromised or spoofed executive email to authorize fraud      |\n| **Vishing**                         | Phone call recipients               | Voice calls impersonating banks, government agencies, or IT support |\n| **Smishing**                        | SMS/text recipients                 | Malicious links or phone numbers delivered via text message         |\n\n> Como la diferencia entre pescar con una red enorme (phishing), con una caña apuntando a un pez específico (spear phishing), o esperando al pez más grande del lago (whaling)."
      },
      {
        "name": "Spear Phishing",
        "definition": "A highly targeted form of phishing where the attacker **researches the specific victim** beforehand to craft a personalized, believable message. Higher success rate than general phishing due to customization. Targets known individuals with verified connections to a specific organization or service.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A highly targeted form of phishing where the attacker **researches the specific victim** beforehand to craft a personalized, believable message. Higher success rate than general phishing due to customization. Targets known individuals with verified connections to a specific organization or service.\n  \n  > Como una carta de extorsión personalizada: no dice \"Estimado cliente\", dice tu nombre, menciona tu banco específico, y referencias datos reales tuyos para que la carta parezca legítima."
      },
      {
        "name": "Whaling",
        "definition": "A form of spear phishing that specifically targets **high-value individuals** — CEOs, CFOs, board members, or senior executives. High effort, high reward. Attackers seek to abuse the executive's authority to approve large fund transfers or to use the compromised account as a launchpad for further attacks across the organization.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A form of spear phishing that specifically targets **high-value individuals** — CEOs, CFOs, board members, or senior executives. High effort, high reward. Attackers seek to abuse the executive's authority to approve large fund transfers or to use the compromised account as a launchpad for further attacks across the organization.\n  \n  > Como no ir a pescar peces pequeños al río, sino preparar una expedición completa para cazar una ballena: más difícil, pero el premio es incomparablemente mayor."
      },
      {
        "name": "Business Email Compromise (BEC)",
        "definition": "A sophisticated phishing attack that **takes over or spoofs a legitimate internal email account** (typically an executive) to deceive employees — usually in finance or HR — into authorizing fraudulent wire transfers, redirecting payments, or sharing sensitive data. The attack relies on the inherent trust of an internal email address. Costs businesses billions annually.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A sophisticated phishing attack that **takes over or spoofs a legitimate internal email account** (typically an executive) to deceive employees — usually in finance or HR — into authorizing fraudulent wire transfers, redirecting payments, or sharing sensitive data. The attack relies on the inherent trust of an internal email address. Costs businesses billions annually.\n  \n  > Como si alguien pudiera usar el correo de tu jefe para pedirte que hagas una transferencia urgente — y tú obedeces porque parece una instrucción legítima de quien tiene autoridad."
      },
      {
        "name": "Vishing (Voice Phishing)",
        "definition": "A phishing attack conducted over **voice calls**, where the attacker impersonates a trusted entity (bank, IRS, IT support) to manipulate victims into revealing sensitive or financial information. Particularly effective because many people find it harder to be skeptical in a live phone conversation than with an email.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A phishing attack conducted over **voice calls**, where the attacker impersonates a trusted entity (bank, IRS, IT support) to manipulate victims into revealing sensitive or financial information. Particularly effective because many people find it harder to be skeptical in a live phone conversation than with an email.\n  \n  > Como la llamada del \"banco\" que dice que hay un problema con tu tarjeta y que necesita que confirmes los datos — en lugar de pedirte que entres a la app oficial."
      },
      {
        "name": "Smishing (SMS Phishing)",
        "definition": "A phishing attack delivered via **SMS text messages**, containing malicious links or phone numbers. Creates a sense of urgency to prompt the victim to act quickly without scrutinizing the message.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A phishing attack delivered via **SMS text messages**, containing malicious links or phone numbers. Creates a sense of urgency to prompt the victim to act quickly without scrutinizing the message.\n  \n  > Como recibir un mensaje de texto que dice \"Tu paquete está retenido, haz clic aquí para liberar el envío\" — diseñado para que actúes antes de pensar."
      },
      {
        "name": "Phishing Indicators (Red Flags)",
        "definition": "Common characteristics that identify a potential phishing attempt:",
        "analogy": "Como revisar el billete antes de aceptarlo: hay señales claras de que algo no cuadra si sabes exactamente qué buscar.",
        "tables": [
          {
            "headers": [
              "Indicator",
              "What to Look For"
            ],
            "rows": [
              [
                "**Urgency**",
                "\"Act now or lose access in 4 hours\""
              ],
              [
                "**Unusual Requests**",
                "Asking for passwords, credit cards, or SSN via email"
              ],
              [
                "**Mismatched URLs**",
                "Display text says `paypal.com` but hovering reveals `paypal.hacked.xyz`"
              ],
              [
                "**Suspicious Email Address**",
                "Display name looks legitimate but underlying address is `mr.weirdo578@yahoo.com`"
              ],
              [
                "**Poor Grammar / Spelling**",
                "Broken English, typos, inconsistent formatting"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Common characteristics that identify a potential phishing attempt:\n\n| Indicator                    | What to Look For                                                                 |\n| ---------------------------- | -------------------------------------------------------------------------------- |\n| **Urgency**                  | \"Act now or lose access in 4 hours\"                                              |\n| **Unusual Requests**         | Asking for passwords, credit cards, or SSN via email                             |\n| **Mismatched URLs**          | Display text says `paypal.com` but hovering reveals `paypal.hacked.xyz`          |\n| **Suspicious Email Address** | Display name looks legitimate but underlying address is `mr.weirdo578@yahoo.com` |\n| **Poor Grammar / Spelling**  | Broken English, typos, inconsistent formatting                                   |\n\n> Como revisar el billete antes de aceptarlo: hay señales claras de que algo no cuadra si sabes exactamente qué buscar."
      },
      {
        "name": "Anti-Phishing Campaign",
        "definition": "A proactive security awareness tool that combines **user training** with **simulated phishing attacks** to test and educate employees. Users who click on simulated phishing links receive immediate remedial training. Should be ongoing since threats continuously evolve. Tools available: **Trend Micro Phish Insight** (free platform).",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A proactive security awareness tool that combines **user training** with **simulated phishing attacks** to test and educate employees. Users who click on simulated phishing links receive immediate remedial training. Should be ongoing since threats continuously evolve. Tools available: **Trend Micro Phish Insight** (free platform).\n  \n  > Como hacer simulacros de incendio en el trabajo: no esperas a que haya fuego real para enseñarle a la gente cómo reaccionar."
      },
      {
        "name": "Fraud",
        "definition": "A wrongful or criminal deception intended to result in **financial or personal gain** for the attacker. Differs from direct theft in that the victim is manipulated into voluntarily handing over money or information. Most common form: **identity fraud / identity theft**.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A wrongful or criminal deception intended to result in **financial or personal gain** for the attacker. Differs from direct theft in that the victim is manipulated into voluntarily handing over money or information. Most common form: **identity fraud / identity theft**.\n  \n  > Como el truco del timador clásico: no te roba la billetera, te convence de que se la des tú mismo."
      },
      {
        "name": "Identity Fraud / Identity Theft",
        "definition": "The unauthorized use of another person's personal information (name, SSN, date of birth) to commit crimes, open accounts, or deceive third parties. **Identity fraud** = using stolen credentials for specific transactions (e.g., charging a stolen credit card). **Identity theft** = fully assuming another person's identity to open new accounts, get jobs, or obtain benefits. CompTIA uses **identity fraud** as the preferred umbrella term for both.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The unauthorized use of another person's personal information (name, SSN, date of birth) to commit crimes, open accounts, or deceive third parties. **Identity fraud** = using stolen credentials for specific transactions (e.g., charging a stolen credit card). **Identity theft** = fully assuming another person's identity to open new accounts, get jobs, or obtain benefits. CompTIA uses **identity fraud** as the preferred umbrella term for both.\n  \n  > Como que alguien tome tu nombre, tu cédula y tu historial para vivir una vida paralela en tu nombre, acumulando deudas que aparecerán en tu nombre."
      },
      {
        "name": "Invoice Scam",
        "definition": "A social engineering scam where a victim is tricked into **paying a fraudulent invoice** for products or services never ordered. Common tactic: attacker calls the company, uses pretexting to confirm or \"correct\" an order, obtains verbal agreement (recorded), ships unsolicited products, then sends an inflated invoice backed by the recording. Also conducted digitally via spear phishing emails with malware-embedded PDF invoices.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A social engineering scam where a victim is tricked into **paying a fraudulent invoice** for products or services never ordered. Common tactic: attacker calls the company, uses pretexting to confirm or \"correct\" an order, obtains verbal agreement (recorded), ships unsolicited products, then sends an inflated invoice backed by the recording. Also conducted digitally via spear phishing emails with malware-embedded PDF invoices.\n  \n  > Como el vendedor que llama a tu empresa, confirma un pedido que nadie hizo realmente, y luego te manda la factura respaldada por la grabación de cuando dijiste \"está bien\"."
      },
      {
        "name": "Influence Campaign",
        "definition": "A coordinated effort to **affect public perception or behavior** toward a specific cause, individual, or group. In cybersecurity, these are typically conducted by nation-state actors or hacktivist groups using social media platforms to spread false narratives, manipulate elections, or drive financial scams. Amplified by social media's reach and lack of oversight.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A coordinated effort to **affect public perception or behavior** toward a specific cause, individual, or group. In cybersecurity, these are typically conducted by nation-state actors or hacktivist groups using social media platforms to spread false narratives, manipulate elections, or drive financial scams. Amplified by social media's reach and lack of oversight.\n  \n  > Como una campaña de propaganda digital a gran escala: no hackean sistemas, hackean opiniones."
      },
      {
        "name": "Misinformation",
        "definition": "False or inaccurate information **shared without harmful intent** — typically arising from honest mistakes, misunderstandings, or unverified claims that spread rapidly. Example: incorrect health remedies shared during the COVID-19 pandemic.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** False or inaccurate information **shared without harmful intent** — typically arising from honest mistakes, misunderstandings, or unverified claims that spread rapidly. Example: incorrect health remedies shared during the COVID-19 pandemic.\n  \n  > Como el rumor del vecindario que se repite de boca en boca sin que nadie lo verifique, no porque quieran hacer daño, sino porque simplemente no lo cuestionaron."
      },
      {
        "name": "Disinformation",
        "definition": "The **deliberate creation and distribution of false information** with the intent to deceive, mislead, manipulate public opinion, or undermine trust. Commonly used by nation-state actors in political influence campaigns. Example: Russian disinformation campaign during the 2016 U.S. presidential election.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The **deliberate creation and distribution of false information** with the intent to deceive, mislead, manipulate public opinion, or undermine trust. Commonly used by nation-state actors in political influence campaigns. Example: Russian disinformation campaign during the 2016 U.S. presidential election.\n  \n  > Como una campaña de propaganda orquestada: alguien sabe que la información es falsa, pero la distribuye estratégicamente para cambiar lo que la gente piensa o hace."
      },
      {
        "name": "Diversion Theft",
        "definition": "Manipulating a situation or **creating a distraction** to redirect attention while theft occurs. In the digital context, commonly implemented as **DNS spoofing** — altering DNS records so users are redirected from a legitimate website to a fraudulent one that harvests credentials.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Manipulating a situation or **creating a distraction** to redirect attention while theft occurs. In the digital context, commonly implemented as **DNS spoofing** — altering DNS records so users are redirected from a legitimate website to a fraudulent one that harvests credentials.\n  \n  > Como crear un accidente de tráfico falso mientras tu cómplice roba el camión que quedó parado en el embotellamiento."
      },
      {
        "name": "Hoax",
        "definition": "A **malicious deception** spread through social media, email, or messaging channels — often claiming false security threats or warnings. While seemingly harmless, hoaxes can cause panic, spread malware, or be used to prime victims for follow-on phishing attacks. Countered with critical thinking and fact-checking.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A **malicious deception** spread through social media, email, or messaging channels — often claiming false security threats or warnings. While seemingly harmless, hoaxes can cause panic, spread malware, or be used to prime victims for follow-on phishing attacks. Countered with critical thinking and fact-checking.\n  \n  > Como el mensaje viral que dice \"reenvía esto a 10 personas o tu cuenta será eliminada\" — diseñado para generar pánico y acciones impulsivas."
      },
      {
        "name": "Shoulder Surfing",
        "definition": "Observing someone's screen, keypad, or documents to capture sensitive information such as PINs, passwords, or confidential data. Does **not** require physical proximity — high-powered cameras or CCTV can enable shoulder surfing from a distance. Countered with **privacy screens**, **shielded keypads**, and situational awareness.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Observing someone's screen, keypad, or documents to capture sensitive information such as PINs, passwords, or confidential data. Does **not** require physical proximity — high-powered cameras or CCTV can enable shoulder surfing from a distance. Countered with **privacy screens**, **shielded keypads**, and situational awareness.\n  \n  > Como el que mira por encima de tu hombro cuando marcas tu PIN en el cajero automático — solo que ahora puede hacerlo con una cámara desde el otro lado del edificio."
      },
      {
        "name": "Dumpster Diving",
        "definition": "Searching through **physical or digital trash** to find valuable information. Physical: discarded documents, hardware, or notes with credentials. Digital: undeleted files in recycling bins or improperly wiped storage media. Countered with **document shredding**, **clean desk policy**, and **secure data destruction** procedures.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Searching through **physical or digital trash** to find valuable information. Physical: discarded documents, hardware, or notes with credentials. Digital: undeleted files in recycling bins or improperly wiped storage media. Countered with **document shredding**, **clean desk policy**, and **secure data destruction** procedures.\n  \n  > Como buscar en la basura de una empresa para encontrar facturas, contraseñas escritas en papeles, o documentos confidenciales que alguien tiró sin destruir."
      },
      {
        "name": "Eavesdropping",
        "definition": "Secretly **listening to or intercepting private communications** — either physically (listening to phone calls) or digitally (intercepting network traffic via on-path/adversary-in-the-middle attacks). Countered with **encrypted communication channels** and up-to-date patching.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Secretly **listening to or intercepting private communications** — either physically (listening to phone calls) or digitally (intercepting network traffic via on-path/adversary-in-the-middle attacks). Countered with **encrypted communication channels** and up-to-date patching.\n  \n  > Como escuchar una conversación privada a través de una pared delgada — o en la red, interceptar el tráfico entre dos partes sin que ninguna lo sepa."
      },
      {
        "name": "Baiting",
        "definition": "Leaving a **malware-infected physical device** (typically a USB drive) in a location where a target is likely to find it and connect it to an organizational system out of curiosity. Once connected, malware is installed automatically. Countered with **user training** — never connect unknown devices.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Leaving a **malware-infected physical device** (typically a USB drive) in a location where a target is likely to find it and connect it to an organizational system out of curiosity. Once connected, malware is installed automatically. Countered with **user training** — never connect unknown devices.\n  \n  > Como dejar un sobre de dinero en el estacionamiento de una empresa: la curiosidad del empleado hace el resto del trabajo por el atacante."
      },
      {
        "name": "DNS Spoofing",
        "definition": "A diversion technique where the attacker **manipulates DNS server records** so that a legitimate domain name resolves to a malicious IP address, redirecting users to a fake website designed to harvest credentials or install malware. A technical implementation of diversion theft.",
        "analogy": "",
        "tables": [
          {
            "headers": [
              "English key words",
              "Spanish  meaning"
            ],
            "rows": [
              [
                "scarcity",
                "escasez"
              ],
              [
                "likability",
                "simpatía"
              ],
              [
                "pretexting",
                "scenario creado"
              ],
              [
                "deceptive",
                "engañoso"
              ],
              [
                "disclose",
                "revelar"
              ],
              [
                "spear",
                "ataque dirigido"
              ],
              [
                "tailored",
                "personalizado"
              ],
              [
                "deceive",
                "engañar"
              ],
              [
                "hoaxes",
                "bromas pesadas"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A diversion technique where the attacker **manipulates DNS server records** so that a legitimate domain name resolves to a malicious IP address, redirecting users to a fake website designed to harvest credentials or install malware. A technical implementation of diversion theft.\n  \n  > Como cambiar las señales de tráfico para que la gente que va al banco termine llegando a una fachada falsa donde te roban la información.\n\n\n\n\n| English key words | Spanish  meaning                    |\n| ----------------- | ----------------------------------- |\n| scarcity          | escasez                             |\n| likability        | simpatía                            |\n| pretexting        | scenario creado                     |\n| deceptive         | engañoso                            |\n| disclose          | revelar |\n| spear             | ataque dirigido                     |\n| tailored          | personalizado                       |\n| deceive           | engañar                             |\n| hoaxes            | bromas pesadas                      |\n\n\n*CompTIA Security+ SY0-701 · Section 5: Social Engineering · Dion Training*"
      }
    ]
  },
  {
    "sectionId": "S6",
    "sectionTitle": "Section 6: Malware",
    "concepts": [
      {
        "name": "Malware",
        "definition": "Short for **malicious software** — any code designed to infiltrate, damage, or gain unauthorized access to a computer system without the user's knowledge or consent. An umbrella term covering viruses, worms, Trojans, ransomware, rootkits, spyware, keyloggers, and more.",
        "analogy": "Como un intruso que entra a tu casa sin invitación y sin que te des cuenta — puede venir en muchas formas, pero el objetivo siempre es el mismo: aprovecharse de lo que encuentre adentro.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Short for **malicious software** — any code designed to infiltrate, damage, or gain unauthorized access to a computer system without the user's knowledge or consent. An umbrella term covering viruses, worms, Trojans, ransomware, rootkits, spyware, keyloggers, and more.\n> Como un intruso que entra a tu casa sin invitación y sin que te des cuenta — puede venir en muchas formas, pero el objetivo siempre es el mismo: aprovecharse de lo que encuentre adentro."
      },
      {
        "name": "Threat Vector vs. Attack Vector",
        "definition": "Two related but distinct concepts:",
        "analogy": "Como la diferencia entre la grieta en la pared (threat vector) y la secuencia completa de escalar la barda, pasar por esa grieta y llegar al cofre (attack vector).",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Two related but distinct concepts:\n  - **Threat Vector:** The specific **vulnerability or weakness** an attacker plans to exploit to break into a system (the \"why it's possible\" — e.g., unpatched software, a phishing email link, an unsecured USB port).\n  - **Attack Vector:** The **complete pathway and method** the attacker uses to actually gain access and deliver the malicious payload — encompasses both the entry point and the execution of the attack (the \"how it's done\").\n\n> Como la diferencia entre la grieta en la pared (threat vector) y la secuencia completa de escalar la barda, pasar por esa grieta y llegar al cofre (attack vector)."
      },
      {
        "name": "Virus",
        "definition": "Malicious code that **requires user action** (opening a file, running a program, connecting a device) to execute and spread. Once activated, it replicates by attaching itself to other files or programs. Ten types:",
        "analogy": "Como un camaleón digital: cada generación de virus aprende a cambiar de apariencia para que las defensas no lo reconozcan.",
        "tables": [
          {
            "headers": [
              "Type",
              "How It Works"
            ],
            "rows": [
              [
                "**Boot Sector**",
                "Stored in the first sector of a disk; loads into memory before the OS — hard to detect with standard AV"
              ],
              [
                "**Macro**",
                "Embedded in documents (Word, Excel, PowerPoint); executes when the file is opened"
              ],
              [
                "**Program**",
                "Infects executable/application files; re-infects the system every time the infected app is opened"
              ],
              [
                "**Multipartite**",
                "Combination of boot sector + program virus; achieves persistence — removing one component still leaves the other"
              ],
              [
                "**Encrypted**",
                "Encrypts its own malicious code into ciphertext to evade signature-based AV detection"
              ],
              [
                "**Polymorphic**",
                "Advanced encrypted virus that **changes its decryption module** each time it executes to evade detection"
              ],
              [
                "**Metamorphic**",
                "Rewrites its **entire code** before each infection — the most advanced evasion technique"
              ],
              [
                "**Stealth**",
                "Not a unique type but a **technique** — uses encryption, payload modification, and other methods to hide from AV"
              ],
              [
                "**Armored**",
                "Adds a layer of obfuscation/protection to **confuse analysts** attempting to reverse-engineer it"
              ],
              [
                "**Hoax**",
                "Not an actual virus — a **social engineering trick** that scares users into installing real malware themselves"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Malicious code that **requires user action** (opening a file, running a program, connecting a device) to execute and spread. Once activated, it replicates by attaching itself to other files or programs. Ten types:\n\n| Type | How It Works |\n|---|---|\n| **Boot Sector** | Stored in the first sector of a disk; loads into memory before the OS — hard to detect with standard AV |\n| **Macro** | Embedded in documents (Word, Excel, PowerPoint); executes when the file is opened |\n| **Program** | Infects executable/application files; re-infects the system every time the infected app is opened |\n| **Multipartite** | Combination of boot sector + program virus; achieves persistence — removing one component still leaves the other |\n| **Encrypted** | Encrypts its own malicious code into ciphertext to evade signature-based AV detection |\n| **Polymorphic** | Advanced encrypted virus that **changes its decryption module** each time it executes to evade detection |\n| **Metamorphic** | Rewrites its **entire code** before each infection — the most advanced evasion technique |\n| **Stealth** | Not a unique type but a **technique** — uses encryption, payload modification, and other methods to hide from AV |\n| **Armored** | Adds a layer of obfuscation/protection to **confuse analysts** attempting to reverse-engineer it |\n| **Hoax** | Not an actual virus — a **social engineering trick** that scares users into installing real malware themselves |\n\n> Como un camaleón digital: cada generación de virus aprende a cambiar de apariencia para que las defensas no lo reconozcan."
      },
      {
        "name": "Worm",
        "definition": "Malware that **self-replicates and spreads without any user interaction** by exploiting vulnerabilities in operating systems or applications. Key distinction from viruses: no user action required. Dangerous both for the infections it causes and for the network congestion its replication creates — in severe cases, can trigger a denial-of-service on the network itself. Notable examples: **Nimda** (2001 — spread globally in 22 minutes), **Conficker** (2009 — infected 9–15 million machines via missing patch MS08-067).",
        "analogy": "Como un virus biológico que se transmite solo por estar en el mismo espacio: no necesita que hagas nada, busca activamente sus próximas víctimas en la red.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Malware that **self-replicates and spreads without any user interaction** by exploiting vulnerabilities in operating systems or applications. Key distinction from viruses: no user action required. Dangerous both for the infections it causes and for the network congestion its replication creates — in severe cases, can trigger a denial-of-service on the network itself. Notable examples: **Nimda** (2001 — spread globally in 22 minutes), **Conficker** (2009 — infected 9–15 million machines via missing patch MS08-067).\n> Como un virus biológico que se transmite solo por estar en el mismo espacio: no necesita que hagas nada, busca activamente sus próximas víctimas en la red."
      },
      {
        "name": "Trojan",
        "definition": "Malware **disguised as legitimate or desirable software**. Appears to perform a useful function while secretly executing a malicious one in the background (installing backdoors, enabling remote access, exfiltrating data). Named after the Trojan Horse of Greek mythology. Does **not** self-replicate — relies on users choosing to install it.",
        "analogy": "Como el caballo de madera de los griegos: por fuera parece un regalo inofensivo, por dentro está lleno de soldados listos para atacar desde adentro.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Malware **disguised as legitimate or desirable software**. Appears to perform a useful function while secretly executing a malicious one in the background (installing backdoors, enabling remote access, exfiltrating data). Named after the Trojan Horse of Greek mythology. Does **not** self-replicate — relies on users choosing to install it.\n> Como el caballo de madera de los griegos: por fuera parece un regalo inofensivo, por dentro está lleno de soldados listos para atacar desde adentro."
      },
      {
        "name": "RAT (Remote Access Trojan)",
        "definition": "A specific type of Trojan that establishes a **covert remote connection** from the victim's machine back to the attacker's system, giving the attacker full remote control — file access, screenshots, webcam, keystrokes, registry modifications, and more. Functionally acts as a persistent backdoor. Commonly delivered via spear phishing or bundled with pirated software.",
        "analogy": "Como instalarle una cámara oculta y un micrófono a la computadora de alguien: el atacante puede ver y controlar todo lo que pasa, sin que la víctima tenga idea.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A specific type of Trojan that establishes a **covert remote connection** from the victim's machine back to the attacker's system, giving the attacker full remote control — file access, screenshots, webcam, keystrokes, registry modifications, and more. Functionally acts as a persistent backdoor. Commonly delivered via spear phishing or bundled with pirated software.\n> Como instalarle una cámara oculta y un micrófono a la computadora de alguien: el atacante puede ver y controlar todo lo que pasa, sin que la víctima tenga idea."
      },
      {
        "name": "Ransomware",
        "definition": "Malware that **encrypts the victim's files or systems** and demands payment (typically cryptocurrency) in exchange for the decryption key. Can target individuals (hundreds of dollars) or large organizations and critical infrastructure (millions). Notable attacks: **WannaCry** (2017 — exploited MS17-010/EternalBlue), **Colonial Pipeline** (2021 — $4.4M ransom, halted 45% of US East Coast fuel supply), **Düsseldorf Hospital** (2020 — first confirmed ransomware-related death).",
        "analogy": "Como un secuestro digital: el atacante no roba tus datos, los encierra bajo llave y te cobra rescate para darte la llave de vuelta — si es que decide dártela.",
        "tables": [
          {
            "headers": [
              "Practice",
              "Why It Matters"
            ],
            "rows": [
              [
                "Regular backups (offline/cloud)",
                "Allows restoration without paying ransom"
              ],
              [
                "Software patching",
                "Closes exploited vulnerabilities"
              ],
              [
                "User security awareness training",
                "Prevents initial infection via phishing"
              ],
              [
                "MFA implementation",
                "Limits attacker account access even with stolen credentials"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Malware that **encrypts the victim's files or systems** and demands payment (typically cryptocurrency) in exchange for the decryption key. Can target individuals (hundreds of dollars) or large organizations and critical infrastructure (millions). Notable attacks: **WannaCry** (2017 — exploited MS17-010/EternalBlue), **Colonial Pipeline** (2021 — $4.4M ransom, halted 45% of US East Coast fuel supply), **Düsseldorf Hospital** (2020 — first confirmed ransomware-related death).\n\n**Prevention best practices:**\n\n| Practice | Why It Matters |\n|---|---|\n| Regular backups (offline/cloud) | Allows restoration without paying ransom |\n| Software patching | Closes exploited vulnerabilities |\n| User security awareness training | Prevents initial infection via phishing |\n| MFA implementation | Limits attacker account access even with stolen credentials |\n\n**If attacked — response steps:**\n1. **Never pay the ransom** — no guarantee of recovery, funds future attacks\n2. Immediately **disconnect** infected systems from the network\n3. **Notify authorities** (per organizational incident response policy)\n4. **Restore from known good backups** after confirming malware is fully removed\n\n> Como un secuestro digital: el atacante no roba tus datos, los encierra bajo llave y te cobra rescate para darte la llave de vuelta — si es que decide dártela."
      },
      {
        "name": "Botnet",
        "definition": "A network of **compromised computers** (zombies) remotely controlled by an attacker through a **Command and Control (C2) node**. Used for DDoS attacks, spam campaigns, crypto mining, credential brute-forcing, and storing illegal content. Scale ranges from hundreds to millions of devices. The attacker typically uses only 20–25% of each zombie's resources to avoid detection.",
        "analogy": "Como un ejército de marionetas: cada computadora infectada sigue siendo \"funcional\" para su dueño, pero en el fondo obedece órdenes del atacante sin que nadie lo sepa.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A network of **compromised computers** (zombies) remotely controlled by an attacker through a **Command and Control (C2) node**. Used for DDoS attacks, spam campaigns, crypto mining, credential brute-forcing, and storing illegal content. Scale ranges from hundreds to millions of devices. The attacker typically uses only 20–25% of each zombie's resources to avoid detection.\n> Como un ejército de marionetas: cada computadora infectada sigue siendo \"funcional\" para su dueño, pero en el fondo obedece órdenes del atacante sin que nadie lo sepa."
      },
      {
        "name": "Zombie",
        "definition": "A single compromised computer or device that has been **added to a botnet** and executes remote commands from the attacker's C2 node without the legitimate user's knowledge. The term reflects the device's dual existence — appearing normal to its owner while serving the attacker.",
        "analogy": "Como estar sonámbulo: la computadora parece dormida normalmente, pero en realidad está caminando y haciendo cosas en nombre de alguien más.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A single compromised computer or device that has been **added to a botnet** and executes remote commands from the attacker's C2 node without the legitimate user's knowledge. The term reflects the device's dual existence — appearing normal to its owner while serving the attacker.\n> Como estar sonámbulo: la computadora parece dormida normalmente, pero en realidad está caminando y haciendo cosas en nombre de alguien más."
      },
      {
        "name": "C2 Node (Command and Control)",
        "definition": "The **centralized server or infrastructure** used by an attacker to send instructions to and receive data from all zombies in a botnet. Acts as the brain of the botnet. Disrupting the C2 node is a primary strategy for neutralizing a botnet.",
        "analogy": "Como la torre de mando de un ejército: sin señal desde la torre, los soldados (zombies) no saben qué hacer.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The **centralized server or infrastructure** used by an attacker to send instructions to and receive data from all zombies in a botnet. Acts as the brain of the botnet. Disrupting the C2 node is a primary strategy for neutralizing a botnet.\n> Como la torre de mando de un ejército: sin señal desde la torre, los soldados (zombies) no saben qué hacer."
      },
      {
        "name": "DDoS (Distributed Denial of Service)",
        "definition": "An attack where **multiple compromised systems** (often a botnet) simultaneously flood a target server or network with requests, overwhelming it and rendering it unavailable to legitimate users. The \"distributed\" aspect makes it harder to block than a single-source DoS attack.",
        "analogy": "Como si mil personas llamaran al mismo tiempo al número de atención al cliente de una empresa: el sistema colapsa y nadie legítimo puede comunicarse.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An attack where **multiple compromised systems** (often a botnet) simultaneously flood a target server or network with requests, overwhelming it and rendering it unavailable to legitimate users. The \"distributed\" aspect makes it harder to block than a single-source DoS attack.\n> Como si mil personas llamaran al mismo tiempo al número de atención al cliente de una empresa: el sistema colapsa y nadie legítimo puede comunicarse."
      },
      {
        "name": "Rootkit",
        "definition": "Malware designed to gain **administrative/root-level control** over a system while remaining **completely undetected** — even from the operating system itself. Operates at the deepest privilege rings (ring 1 toward ring 0/kernel). Uses **DLL injection** and **shimming** to embed into the OS trust chain. Traditional AV often cannot detect rootkits because the OS is blind to them. Best detection method: **boot from an external device** and scan the internal drive with a live Linux AV tool.",
        "analogy": "Como un parásito que vive dentro del sistema nervioso del cuerpo: no es detectado porque el propio sistema nervioso lo considera parte de sí mismo.",
        "tables": [
          {
            "headers": [
              "Ring",
              "Level",
              "Access"
            ],
            "rows": [
              [
                "Ring 3",
                "User mode",
                "Standard user operations"
              ],
              [
                "Ring 1",
                "Admin/Root mode",
                "System-level changes, software installation"
              ],
              [
                "Ring 0",
                "Kernel mode",
                "Direct hardware control — highest privilege"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Malware designed to gain **administrative/root-level control** over a system while remaining **completely undetected** — even from the operating system itself. Operates at the deepest privilege rings (ring 1 toward ring 0/kernel). Uses **DLL injection** and **shimming** to embed into the OS trust chain. Traditional AV often cannot detect rootkits because the OS is blind to them. Best detection method: **boot from an external device** and scan the internal drive with a live Linux AV tool.\n\n**OS Permission Rings:**\n\n| Ring | Level | Access |\n|---|---|---|\n| Ring 3 | User mode | Standard user operations |\n| Ring 1 | Admin/Root mode | System-level changes, software installation |\n| Ring 0 | Kernel mode | Direct hardware control — highest privilege |\n\n> Como un parásito que vive dentro del sistema nervioso del cuerpo: no es detectado porque el propio sistema nervioso lo considera parte de sí mismo."
      },
      {
        "name": "DLL Injection",
        "definition": "A technique used by rootkits (and other malware) to **insert malicious code into a running process** by forcing it to load a Dynamic-Link Library (DLL) that contains the attacker's code. Since DLLs are trusted components used by the OS at runtime, the injected malicious code inherits that trust and operates without triggering standard detection.",
        "analogy": "Como meter código malicioso dentro de una pieza de software que el sistema operativo ya confía — el OS corre el código malicioso pensando que es una parte legítima de sí mismo.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A technique used by rootkits (and other malware) to **insert malicious code into a running process** by forcing it to load a Dynamic-Link Library (DLL) that contains the attacker's code. Since DLLs are trusted components used by the OS at runtime, the injected malicious code inherits that trust and operates without triggering standard detection.\n> Como meter código malicioso dentro de una pieza de software que el sistema operativo ya confía — el OS corre el código malicioso pensando que es una parte legítima de sí mismo."
      },
      {
        "name": "Shim",
        "definition": "A small piece of software **placed between two components** that intercepts calls between them and redirects or modifies those calls. Used by rootkits to intercept communications between the OS and its DLLs, inserting malicious logic into that trusted pathway without the OS detecting the interception.",
        "analogy": "Como un intermediario corrupto que intercepta mensajes entre dos partes legítimas y los altera antes de entregarlos — ninguna de las dos partes sabe que hay alguien en el medio.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A small piece of software **placed between two components** that intercepts calls between them and redirects or modifies those calls. Used by rootkits to intercept communications between the OS and its DLLs, inserting malicious logic into that trusted pathway without the OS detecting the interception.\n> Como un intermediario corrupto que intercepta mensajes entre dos partes legítimas y los altera antes de entregarlos — ninguna de las dos partes sabe que hay alguien en el medio."
      },
      {
        "name": "Backdoor",
        "definition": "A **covert method of bypassing normal authentication and security controls** in a system. Originally added by developers for maintenance access; now considered a severe secure coding violation. In modern attacks, RATs effectively function as dynamically created backdoors. Provides persistent, unauthorized access that circumvents the system's normal security posture.",
        "analogy": "Como la llave de emergencia que un fontanero dejó escondida debajo del tapete de tu casa: conveniente para él, pero catastrófica si un extraño la encuentra.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A **covert method of bypassing normal authentication and security controls** in a system. Originally added by developers for maintenance access; now considered a severe secure coding violation. In modern attacks, RATs effectively function as dynamically created backdoors. Provides persistent, unauthorized access that circumvents the system's normal security posture.\n> Como la llave de emergencia que un fontanero dejó escondida debajo del tapete de tu casa: conveniente para él, pero catastrófica si un extraño la encuentra."
      },
      {
        "name": "Easter Egg (Software)",
        "definition": "A **hidden feature or novelty** embedded in software by developers as a joke or inside reference (e.g., Google's \"do a barrel roll\"). Not inherently malicious, but the code is often added hastily before release and bypasses normal security testing — creating unintentional vulnerabilities that attackers can exploit.",
        "analogy": "Como un pasadizo secreto construido a última hora en un edificio: el arquitecto lo hizo por diversión, pero nadie verificó si era estructuralmente seguro.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A **hidden feature or novelty** embedded in software by developers as a joke or inside reference (e.g., Google's \"do a barrel roll\"). Not inherently malicious, but the code is often added hastily before release and bypasses normal security testing — creating unintentional vulnerabilities that attackers can exploit.\n> Como un pasadizo secreto construido a última hora en un edificio: el arquitecto lo hizo por diversión, pero nadie verificó si era estructuralmente seguro."
      },
      {
        "name": "Logic Bomb",
        "definition": "Malicious code **inserted into a legitimate program** that remains dormant until **specific trigger conditions are met** (a date, a deleted user account, a system state). When triggered, executes harmful actions such as file deletion, unauthorized transfers, or system shutdown. Often planted by insider threats. Closely related to Easter Eggs but with deliberate malicious intent.",
        "analogy": "Como una trampa explosiva con temporizador: no hace nada hasta que llega el momento exacto que el atacante programó, y para entonces ya puede ser demasiado tarde.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Malicious code **inserted into a legitimate program** that remains dormant until **specific trigger conditions are met** (a date, a deleted user account, a system state). When triggered, executes harmful actions such as file deletion, unauthorized transfers, or system shutdown. Often planted by insider threats. Closely related to Easter Eggs but with deliberate malicious intent.\n> Como una trampa explosiva con temporizador: no hace nada hasta que llega el momento exacto que el atacante programó, y para entonces ya puede ser demasiado tarde."
      },
      {
        "name": "Keylogger",
        "definition": "A **software or hardware tool** that covertly records every keystroke made on a device — capturing passwords, usernames, credit card numbers, emails, and search queries — and transmits them to the attacker. Two forms:",
        "analogy": "Como un espía que copia a mano todo lo que escribes en tu teclado, sin que te des cuenta, y luego le envía el reporte completo a su jefe.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A **software or hardware tool** that covertly records every keystroke made on a device — capturing passwords, usernames, credit card numbers, emails, and search queries — and transmits them to the attacker. Two forms:\n  - **Software keylogger:** Installed via phishing or bundled malware; runs silently in background; can evade AV with evasion techniques\n  - **Hardware keylogger:** Physical device (resembles USB drive or keyboard cable insert); immune to software-based detection; computer treats it as a legitimate keyboard\n\n**Mitigations:** Regular patching · AV/anti-malware · Phishing awareness training · MFA (renders captured passwords useless alone) · Keystroke encryption · Physical hardware inspection\n\n> Como un espía que copia a mano todo lo que escribes en tu teclado, sin que te des cuenta, y luego le envía el reporte completo a su jefe."
      },
      {
        "name": "Spyware",
        "definition": "Malware that **secretly monitors user activity** and transmits collected data (browsing habits, passwords, credit card numbers, personal details) to third parties without consent. Installed via software bundles, malicious websites, or deceptive pop-ups. Operates silently in the background, consuming system resources and degrading performance while harvesting data.",
        "analogy": "Como tener a alguien mirando por encima de tu hombro todo el tiempo mientras navegas, tomas notas y haces compras — y luego enviándole un reporte detallado a un desconocido.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Malware that **secretly monitors user activity** and transmits collected data (browsing habits, passwords, credit card numbers, personal details) to third parties without consent. Installed via software bundles, malicious websites, or deceptive pop-ups. Operates silently in the background, consuming system resources and degrading performance while harvesting data.\n> Como tener a alguien mirando por encima de tu hombro todo el tiempo mientras navegas, tomas notas y haces compras — y luego enviándole un reporte detallado a un desconocido."
      },
      {
        "name": "Bloatware",
        "definition": "**Unwanted pre-installed software** on new devices — typically placed by manufacturers through promotional partnerships. Not malicious in intent, but consumes storage, RAM, and processing resources; introduces additional attack surface through unpatched code. Removal methods: manual uninstall, third-party removal tools, or **clean OS installation** (preferred).",
        "analogy": "Como comprar un carro nuevo y que ya venga con publicidad pegada en los asientos que ni pediste ni quieres — ocupa espacio y distrae, pero no fue pensado para hacerte daño directamente.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** **Unwanted pre-installed software** on new devices — typically placed by manufacturers through promotional partnerships. Not malicious in intent, but consumes storage, RAM, and processing resources; introduces additional attack surface through unpatched code. Removal methods: manual uninstall, third-party removal tools, or **clean OS installation** (preferred).\n> Como comprar un carro nuevo y que ya venga con publicidad pegada en los asientos que ni pediste ni quieres — ocupa espacio y distrae, pero no fue pensado para hacerte daño directamente."
      },
      {
        "name": "Fileless Malware",
        "definition": "An advanced malware technique that **executes malicious code entirely in system memory** without writing files to the local file system, leaving minimal traces or indicators of compromise. Bypasses signature-based AV detection by using the system's own legitimate tools (e.g., PowerShell, WMI) to execute the attack. Even when temporary files are written, they are erased post-execution. Closely associated with the **Living off the Land (LotL)** strategy.",
        "analogy": "Como un ladrón que entra a tu casa, hace todo lo que necesita sin dejar huellas digitales, y se va sin que las cámaras o la policía forense encuentren nada que lo identifique.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An advanced malware technique that **executes malicious code entirely in system memory** without writing files to the local file system, leaving minimal traces or indicators of compromise. Bypasses signature-based AV detection by using the system's own legitimate tools (e.g., PowerShell, WMI) to execute the attack. Even when temporary files are written, they are erased post-execution. Closely associated with the **Living off the Land (LotL)** strategy.\n> Como un ladrón que entra a tu casa, hace todo lo que necesita sin dejar huellas digitales, y se va sin que las cámaras o la policía forense encuentren nada que lo identifique."
      },
      {
        "name": "Two-Stage Malware Deployment",
        "definition": "A modern malware delivery model that breaks the infection into two sequential phases to evade detection and establish persistent access:",
        "analogy": "Como un equipo de asalto en dos oleadas: la primera entra sigilosamente y abre la puerta desde adentro, la segunda entra con toda la artillería y toma el control.",
        "tables": [
          {
            "headers": [
              "Stage",
              "Component",
              "Function"
            ],
            "rows": [
              [
                "**Stage 1**",
                "**Dropper / Downloader / Shellcode**",
                "Lightweight initial payload — executes when user clicks malicious link or opens infected file. Downloads and installs Stage 2."
              ],
              [
                "**Stage 2**",
                "**RAT / Full Payload**",
                "Full remote access Trojan or malware payload downloaded by Stage 1. Establishes C2 connection, spreads across network, escalates privileges."
              ]
            ]
          }
        ],
        "list_items": [
          "**Final phases after both stages:** → **Action on Objectives** (data exfiltration, encryption, sabotage) → **Concealment** (log deletion, evidence erasure)",
          "**Dropper:** Malware designed to initiate or install other malware on the infected host",
          "**Downloader:** Retrieves additional malicious tools after initial infection by a dropper",
          "**Shellcode:** Lightweight code intended to execute an exploit on a target — often the initial payload"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** A modern malware delivery model that breaks the infection into two sequential phases to evade detection and establish persistent access:\n\n| Stage | Component | Function |\n|---|---|---|\n| **Stage 1** | **Dropper / Downloader / Shellcode** | Lightweight initial payload — executes when user clicks malicious link or opens infected file. Downloads and installs Stage 2. |\n| **Stage 2** | **RAT / Full Payload** | Full remote access Trojan or malware payload downloaded by Stage 1. Establishes C2 connection, spreads across network, escalates privileges. |\n\n* **Final phases after both stages:** → **Action on Objectives** (data exfiltration, encryption, sabotage) → **Concealment** (log deletion, evidence erasure)\n\n**Key terms within this model:**\n- **Dropper:** Malware designed to initiate or install other malware on the infected host\n- **Downloader:** Retrieves additional malicious tools after initial infection by a dropper\n- **Shellcode:** Lightweight code intended to execute an exploit on a target — often the initial payload\n\n> Como un equipo de asalto en dos oleadas: la primera entra sigilosamente y abre la puerta desde adentro, la segunda entra con toda la artillería y toma el control."
      },
      {
        "name": "Living off the Land (LotL)",
        "definition": "An attack strategy where threat actors **use legitimate, built-in system tools** (PowerShell, WMI, cmd.exe, certutil) to conduct malicious activities instead of downloading external tools. Since these tools are trusted and expected to run, their malicious use is harder to detect. Commonly used by APTs and ransomware operators to blend into normal system behavior.",
        "analogy": "Como usar las herramientas del propio dueño de la casa para robarle: el atacante no trae sus propias palancas — usa las que ya estaban colgadas en la pared del garage.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An attack strategy where threat actors **use legitimate, built-in system tools** (PowerShell, WMI, cmd.exe, certutil) to conduct malicious activities instead of downloading external tools. Since these tools are trusted and expected to run, their malicious use is harder to detect. Commonly used by APTs and ransomware operators to blend into normal system behavior.\n> Como usar las herramientas del propio dueño de la casa para robarle: el atacante no trae sus propias palancas — usa las que ya estaban colgadas en la pared del garage."
      },
      {
        "name": "Code Injection",
        "definition": "A malware technique where malicious code is **inserted into the address space of a legitimate running process**, causing the system to execute the attacker's code under the cover of a trusted application's identity.",
        "analogy": "Como meter páginas falsas en medio de un libro legítimo: el lector (el sistema) sigue leyendo sin darse cuenta de que algunas páginas no son del autor original.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A malware technique where malicious code is **inserted into the address space of a legitimate running process**, causing the system to execute the attacker's code under the cover of a trusted application's identity.\n> Como meter páginas falsas en medio de un libro legítimo: el lector (el sistema) sigue leyendo sin darse cuenta de que algunas páginas no son del autor original."
      },
      {
        "name": "Process Hollowing",
        "definition": "A malware technique where a **legitimate process is launched in a suspended state**, its memory is cleared (hollowed out), and the attacker's malicious code is injected in its place. The process then resumes execution — appearing legitimate to the OS and security tools while running malicious code.",
        "analogy": "Como vaciar el interior de una lata de refresco y rellenarla con otra sustancia: por fuera sigue siendo la misma lata, pero lo que hay adentro es completamente diferente.",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A malware technique where a **legitimate process is launched in a suspended state**, its memory is cleared (hollowed out), and the attacker's malicious code is injected in its place. The process then resumes execution — appearing legitimate to the OS and security tools while running malicious code.\n> Como vaciar el interior de una lata de refresco y rellenarla con otra sustancia: por fuera sigue siendo la misma lata, pero lo que hay adentro es completamente diferente."
      },
      {
        "name": "Malware Attack Indicators",
        "definition": "Observable signs that a malware infection may be occurring or has occurred. Nine key indicators:",
        "analogy": "Como los síntomas de una enfermedad: cada uno por separado podría tener una explicación inocente, pero varios al mismo tiempo son una señal clara de que algo malo está pasando por dentro.",
        "tables": [
          {
            "headers": [
              "Indicator",
              "What It Signals"
            ],
            "rows": [
              [
                "**Account Lockouts**",
                "Multiple failed login attempts → credential theft or brute force malware in progress"
              ],
              [
                "**Concurrent Session Utilization**",
                "Same account active from multiple locations simultaneously → hijacked credentials"
              ],
              [
                "**Blocked Content**",
                "Surge in security tool alerts for blocked malicious files/links → active infection attempting outbound contact"
              ],
              [
                "**Impossible Travel**",
                "Account accessed from two geographically distant locations within an impossibly short time → compromised credentials"
              ],
              [
                "**Resource Consumption**",
                "Unusual CPU/RAM/bandwidth spikes with no legitimate cause → cryptominer, botnet, or worm activity"
              ],
              [
                "**Resource Inaccessibility**",
                "Files or systems suddenly encrypted or unavailable → ransomware attack"
              ],
              [
                "**Out-of-Cycle Logging**",
                "Log activity during off-hours with no legitimate explanation → unauthorized access or data exfiltration"
              ],
              [
                "**Missing Logs**",
                "Logs cleared or gaps present without authorization → attacker covering tracks post-breach"
              ],
              [
                "**Published / Documented Attacks**",
                "External cybersecurity reports or news articles confirming the organization was compromised"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Observable signs that a malware infection may be occurring or has occurred. Nine key indicators:\n\n| Indicator | What It Signals |\n|---|---|\n| **Account Lockouts** | Multiple failed login attempts → credential theft or brute force malware in progress |\n| **Concurrent Session Utilization** | Same account active from multiple locations simultaneously → hijacked credentials |\n| **Blocked Content** | Surge in security tool alerts for blocked malicious files/links → active infection attempting outbound contact |\n| **Impossible Travel** | Account accessed from two geographically distant locations within an impossibly short time → compromised credentials |\n| **Resource Consumption** | Unusual CPU/RAM/bandwidth spikes with no legitimate cause → cryptominer, botnet, or worm activity |\n| **Resource Inaccessibility** | Files or systems suddenly encrypted or unavailable → ransomware attack |\n| **Out-of-Cycle Logging** | Log activity during off-hours with no legitimate explanation → unauthorized access or data exfiltration |\n| **Missing Logs** | Logs cleared or gaps present without authorization → attacker covering tracks post-breach |\n| **Published / Documented Attacks** | External cybersecurity reports or news articles confirming the organization was compromised |\n\n> Como los síntomas de una enfermedad: cada uno por separado podría tener una explicación inocente, pero varios al mismo tiempo son una señal clara de que algo malo está pasando por dentro.\n\n\n*CompTIA Security+ SY0-701 · Section 6: Malware · Dion Training*"
      }
    ]
  },
  {
    "sectionId": "S7",
    "sectionTitle": "Section 7: Data Protection",
    "concepts": [
      {
        "name": "Data Protection",
        "definition": "The process of safeguarding important information from corruption, compromise, or loss. Encompasses practices, technologies, and strategies designed to ensure the **confidentiality, integrity, and availability** of data across its entire lifecycle — from collection to disposal.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The process of safeguarding important information from corruption, compromise, or loss. Encompasses practices, technologies, and strategies designed to ensure the **confidentiality, integrity, and availability** of data across its entire lifecycle — from collection to disposal.\n  \n  > Como el sistema de seguridad completo de un banco: no solo protege la bóveda, sino también el transporte del dinero, el acceso al edificio y la destrucción de documentos al final del día."
      },
      {
        "name": "Data Classification",
        "definition": "The process of categorizing data based on its **value to the organization** and the **sensitivity of its disclosure**. Determines how much protection, resources, and controls to apply. The **data owner** is responsible for assigning classifications. Overclassification wastes resources; underclassification creates risk.",
        "analogy": "Como las etiquetas en los archivos de un hospital: no todos los documentos necesitan la misma caja fuerte — algunos van en un cajón con llave, otros en una bóveda de máxima seguridad.",
        "tables": [
          {
            "headers": [
              "Level",
              "Description",
              "Example"
            ],
            "rows": [
              [
                "**Public**",
                "No impact if released",
                "Website content, published courses"
              ],
              [
                "**Sensitive**",
                "Minimal impact if disclosed",
                "Upcoming product plans, financial data"
              ],
              [
                "**Private**",
                "Internal use only — individual data",
                "Salaries, employee records, SSNs"
              ],
              [
                "**Confidential**",
                "Serious business impact if disclosed",
                "Trade secrets, source code, IP — NDA required for third parties"
              ],
              [
                "**Critical**",
                "No tolerable risk of exposure",
                "Credit card numbers, cryptographic keys"
              ]
            ]
          },
          {
            "headers": [
              "Level",
              "Description"
            ],
            "rows": [
              [
                "**Unclassified**",
                "Releasable to the public or via FOIA"
              ],
              [
                "**Sensitive But Unclassified (SBU)**",
                "No national security risk, but personal impact (e.g., medical records)"
              ],
              [
                "**Confidential**",
                "Unauthorized disclosure would seriously affect government operations"
              ],
              [
                "**Secret**",
                "Unauthorized disclosure would cause serious damage to national security"
              ],
              [
                "**Top Secret**",
                "Unauthorized disclosure would cause grave damage to national security"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The process of categorizing data based on its **value to the organization** and the **sensitivity of its disclosure**. Determines how much protection, resources, and controls to apply. The **data owner** is responsible for assigning classifications. Overclassification wastes resources; underclassification creates risk.\n\n**Commercial classification levels (low → high):**\n\n| Level            | Description                          | Example                                                         |\n| ---------------- | ------------------------------------ | --------------------------------------------------------------- |\n| **Public**       | No impact if released                | Website content, published courses                              |\n| **Sensitive**    | Minimal impact if disclosed          | Upcoming product plans, financial data                          |\n| **Private**      | Internal use only — individual data  | Salaries, employee records, SSNs                                |\n| **Confidential** | Serious business impact if disclosed | Trade secrets, source code, IP — NDA required for third parties |\n| **Critical**     | No tolerable risk of exposure        | Credit card numbers, cryptographic keys                         |\n\n**Government/Military classification levels (low → high):**\n\n| Level                                | Description                                                             |\n| ------------------------------------ | ----------------------------------------------------------------------- |\n| **Unclassified**                     | Releasable to the public or via FOIA                                    |\n| **Sensitive But Unclassified (SBU)** | No national security risk, but personal impact (e.g., medical records)  |\n| **Confidential**                     | Unauthorized disclosure would seriously affect government operations    |\n| **Secret**                           | Unauthorized disclosure would cause serious damage to national security |\n| **Top Secret**                       | Unauthorized disclosure would cause grave damage to national security   |\n\n> Como las etiquetas en los archivos de un hospital: no todos los documentos necesitan la misma caja fuerte — algunos van en un cajón con llave, otros en una bóveda de máxima seguridad."
      },
      {
        "name": "Data Ownership Roles",
        "definition": "The set of defined roles responsible for managing the confidentiality, integrity, availability, and privacy of data assets throughout their lifecycle. Key distinction: **IT personnel should be data custodians, not data owners** — data owners should come from the business side (those who understand the context and value of the data).",
        "analogy": "Como los roles en un hospital: el médico jefe (data owner) decide qué se puede ver y quién; el administrador del sistema (custodian) gestiona los servidores donde viven los registros; el oficial de privacidad (DPO) responde ante la ley si hay una fuga.",
        "tables": [
          {
            "headers": [
              "Role",
              "Responsibility"
            ],
            "rows": [
              [
                "**Data Owner**",
                "Senior executive with ultimate responsibility for CIA of a data asset. Decides classification, labeling, and required controls."
              ],
              [
                "**Data Controller**",
                "Entity that decides the **purpose and method** of data storage, collection, and use. Holds ultimate accountability for privacy breaches — cannot delegate this responsibility."
              ],
              [
                "**Data Processor**",
                "Group or individual hired by the data controller to collect, store, or analyze data under the controller's direction."
              ],
              [
                "**Data Steward**",
                "Ensures data is properly **labeled, classified, and meets quality standards**. Works under the data owner."
              ],
              [
                "**Data Custodian**",
                "Handles the **day-to-day technical management** of systems storing data — enforces access controls, encryption, and backups per data owner requirements. Typically a system administrator."
              ],
              [
                "**Data Privacy Officer (DPO)**",
                "Oversees compliance with privacy-related data (PII, PHI, SPI). Accountable during data breaches. Ensures data minimization, sovereignty, retention, and regulatory compliance."
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The set of defined roles responsible for managing the confidentiality, integrity, availability, and privacy of data assets throughout their lifecycle. Key distinction: **IT personnel should be data custodians, not data owners** — data owners should come from the business side (those who understand the context and value of the data).\n\n| Role                           | Responsibility                                                                                                                                                                             |\n| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\n| **Data Owner**                 | Senior executive with ultimate responsibility for CIA of a data asset. Decides classification, labeling, and required controls.                                                            |\n| **Data Controller**            | Entity that decides the **purpose and method** of data storage, collection, and use. Holds ultimate accountability for privacy breaches — cannot delegate this responsibility.             |\n| **Data Processor**             | Group or individual hired by the data controller to collect, store, or analyze data under the controller's direction.                                                                      |\n| **Data Steward**               | Ensures data is properly **labeled, classified, and meets quality standards**. Works under the data owner.                                                                                 |\n| **Data Custodian**             | Handles the **day-to-day technical management** of systems storing data — enforces access controls, encryption, and backups per data owner requirements. Typically a system administrator. |\n| **Data Privacy Officer (DPO)** | Oversees compliance with privacy-related data (PII, PHI, SPI). Accountable during data breaches. Ensures data minimization, sovereignty, retention, and regulatory compliance.             |\n\n> Como los roles en un hospital: el médico jefe (data owner) decide qué se puede ver y quién; el administrador del sistema (custodian) gestiona los servidores donde viven los registros; el oficial de privacidad (DPO) responde ante la ley si hay una fuga."
      },
      {
        "name": "Data States",
        "definition": "The three phases of the data lifecycle — each with different vulnerabilities and required security controls:",
        "analogy": "Como el dinero en tres situaciones: guardado en la bóveda (at rest), siendo transportado en un camión blindado (in transit), o siendo contado por un cajero (in use) — cada situación tiene su propio riesgo y su propia protección.",
        "tables": [
          {
            "headers": [
              "State",
              "Description",
              "Primary Protection Method"
            ],
            "rows": [
              [
                "**Data at Rest**",
                "Stored in databases, file systems, or storage devices — not actively moving",
                "Encryption (full disk, partition, file, volume, database, record) + ACLs"
              ],
              [
                "**Data in Transit**",
                "Actively moving across a network or the internet — vulnerable to interception",
                "SSL/TLS, VPNs, IPSec"
              ],
              [
                "**Data in Use**",
                "Being actively created, retrieved, updated, or deleted — must be decrypted to be processed",
                "Application-level encryption, access controls, secure enclaves (e.g., Intel SGX)"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The three phases of the data lifecycle — each with different vulnerabilities and required security controls:\n\n| State               | Description                                                                                | Primary Protection Method                                                        |\n| ------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |\n| **Data at Rest**    | Stored in databases, file systems, or storage devices — not actively moving                | Encryption (full disk, partition, file, volume, database, record) + ACLs         |\n| **Data in Transit** | Actively moving across a network or the internet — vulnerable to interception              | SSL/TLS, VPNs, IPSec                                                             |\n| **Data in Use**     | Being actively created, retrieved, updated, or deleted — must be decrypted to be processed | Application-level encryption, access controls, secure enclaves (e.g., Intel SGX) |\n\n> Como el dinero en tres situaciones: guardado en la bóveda (at rest), siendo transportado en un camión blindado (in transit), o siendo contado por un cajero (in use) — cada situación tiene su propio riesgo y su propia protección."
      },
      {
        "name": "Encryption for Data at Rest — Types",
        "definition": "Methods to encrypt stored data at different granularity levels:",
        "analogy": "Como diferentes tipos de cajas fuertes: puedes blindar el edificio entero, solo una habitación, solo un cajón, o solo un sobre dentro del cajón — depende de cuánto necesites proteger.",
        "tables": [
          {
            "headers": [
              "Type",
              "Scope",
              "Example"
            ],
            "rows": [
              [
                "**Full Disk Encryption (FDE)**",
                "Entire hard drive",
                "BitLocker, FileVault — encrypted when off, decrypted when user is logged in"
              ],
              [
                "**Partition Encryption**",
                "Specific disk partition only",
                "Encrypting D: drive with sensitive work data while leaving C: unencrypted"
              ],
              [
                "**File Encryption**",
                "Individual files",
                "Encrypting a single document with sensitive content"
              ],
              [
                "**Volume Encryption**",
                "Selected files or directories",
                "Encrypting a folder containing financial records"
              ],
              [
                "**Database Encryption**",
                "Data within a database (column, row, or table level)",
                "Encrypting the SSN column in a customer database"
              ],
              [
                "**Record Encryption**",
                "Specific fields within a database record",
                "Hiding credit card fields from users without proper clearance"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Methods to encrypt stored data at different granularity levels:\n\n| Type                           | Scope                                                | Example                                                                     |\n| ------------------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------- |\n| **Full Disk Encryption (FDE)** | Entire hard drive                                    | BitLocker, FileVault — encrypted when off, decrypted when user is logged in |\n| **Partition Encryption**       | Specific disk partition only                         | Encrypting D: drive with sensitive work data while leaving C: unencrypted   |\n| **File Encryption**            | Individual files                                     | Encrypting a single document with sensitive content                         |\n| **Volume Encryption**          | Selected files or directories                        | Encrypting a folder containing financial records                            |\n| **Database Encryption**        | Data within a database (column, row, or table level) | Encrypting the SSN column in a customer database                            |\n| **Record Encryption**          | Specific fields within a database record             | Hiding credit card fields from users without proper clearance               |\n\n> Como diferentes tipos de cajas fuertes: puedes blindar el edificio entero, solo una habitación, solo un cajón, o solo un sobre dentro del cajón — depende de cuánto necesites proteger."
      },
      {
        "name": "SSL/TLS",
        "definition": "**Secure Sockets Layer (SSL)** and its successor **Transport Layer Security (TLS)** are cryptographic protocols that provide **secure, encrypted communication** over a network. Widely used for web browsing (HTTPS), email, and file transfers. Protect **data in transit** by creating an encrypted tunnel between client and server. TLS is the current standard; SSL is deprecated but the term is still commonly used.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** **Secure Sockets Layer (SSL)** and its successor **Transport Layer Security (TLS)** are cryptographic protocols that provide **secure, encrypted communication** over a network. Widely used for web browsing (HTTPS), email, and file transfers. Protect **data in transit** by creating an encrypted tunnel between client and server. TLS is the current standard; SSL is deprecated but the term is still commonly used.\n  \n  > Como un tubo sellado y opaco que conecta dos puntos: nadie puede ver lo que viaja dentro aunque intercepte el tubo."
      },
      {
        "name": "VPN (Virtual Private Network)",
        "definition": "A technology that creates a **secure, encrypted tunnel** over an untrusted network (typically the internet), ensuring that data sent and received is protected from interception. Commonly used to secure remote access to organizational resources and to protect **data in transit**.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A technology that creates a **secure, encrypted tunnel** over an untrusted network (typically the internet), ensuring that data sent and received is protected from interception. Commonly used to secure remote access to organizational resources and to protect **data in transit**.\n  \n  > Como un pasadizo secreto y blindado entre tu casa y la oficina: aunque atraviesas la ciudad pública, nadie puede ver ni tocar lo que llevas dentro del túnel."
      },
      {
        "name": "IPSec (Internet Protocol Security)",
        "definition": "A protocol suite that secures IP communications by **authenticating and encrypting each IP packet** in a data stream. Operates at the network layer. Commonly used in VPN implementations. Protects **data in transit** at the packet level.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A protocol suite that secures IP communications by **authenticating and encrypting each IP packet** in a data stream. Operates at the network layer. Commonly used in VPN implementations. Protects **data in transit** at the packet level.\n  \n  > Como sellar y firmar individualmente cada carta dentro de un paquete enviado por correo: aunque alguien intercepte el paquete, no puede leer ni alterar ninguna carta individual."
      },
      {
        "name": "Secure Enclave",
        "definition": "A **protected, isolated processing environment** within a system where sensitive data can be decrypted and processed without being exposed to the rest of the operating system or other processes. Used to secure **data in use**. Example: **Intel Software Guard Extensions (SGX)** — encrypts data while it exists in memory so that untrusted processes cannot access it even if they compromise the OS.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A **protected, isolated processing environment** within a system where sensitive data can be decrypted and processed without being exposed to the rest of the operating system or other processes. Used to secure **data in use**. Example: **Intel Software Guard Extensions (SGX)** — encrypts data while it exists in memory so that untrusted processes cannot access it even if they compromise the OS.\n  \n  > Como una sala sellada y blindada dentro de un edificio: los trabajadores entran, hacen su tarea con documentos secretos, y nadie desde afuera puede ver ni acceder a lo que pasa adentro."
      },
      {
        "name": "Regulated Data",
        "definition": "Data that is governed by **laws, regulations, or industry standards** — requiring specific security and privacy controls. Organizations handling regulated data must comply with applicable frameworks or face legal penalties.",
        "analogy": "Como los medicamentos controlados en una farmacia: no puedes manejarlos sin cumplir regulaciones específicas, y si los manejas mal, hay consecuencias legales.",
        "tables": [
          {
            "headers": [
              "Type",
              "Regulation",
              "Description"
            ],
            "rows": [
              [
                "**PII** (Personally Identifiable Information)",
                "GDPR, various privacy laws",
                "Names, SSNs, addresses, email — anything that identifies an individual"
              ],
              [
                "**PHI** (Protected Health Information)",
                "HIPAA (US)",
                "Medical records, treatment history, payment for healthcare linked to an individual"
              ],
              [
                "**Financial Data**",
                "PCI DSS",
                "Credit card numbers, bank account details, payment transactions"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Data that is governed by **laws, regulations, or industry standards** — requiring specific security and privacy controls. Organizations handling regulated data must comply with applicable frameworks or face legal penalties.\n\n| Type                                          | Regulation                 | Description                                                                        |\n| --------------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------- |\n| **PII** (Personally Identifiable Information) | GDPR, various privacy laws | Names, SSNs, addresses, email — anything that identifies an individual             |\n| **PHI** (Protected Health Information)        | HIPAA (US)                 | Medical records, treatment history, payment for healthcare linked to an individual |\n| **Financial Data**                            | PCI DSS                    | Credit card numbers, bank account details, payment transactions                    |\n\n> Como los medicamentos controlados en una farmacia: no puedes manejarlos sin cumplir regulaciones específicas, y si los manejas mal, hay consecuencias legales."
      },
      {
        "name": "Trade Secrets",
        "definition": "Confidential business information that provides a **competitive advantage** — manufacturing processes, proprietary formulas, marketing strategies, customer lists, or source code. Protected by law; unauthorized disclosure can result in severe legal penalties.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Confidential business information that provides a **competitive advantage** — manufacturing processes, proprietary formulas, marketing strategies, customer lists, or source code. Protected by law; unauthorized disclosure can result in severe legal penalties.\n  \n  > Como la receta secreta de una empresa de refrescos: el valor no está en el producto terminado sino en el proceso único que nadie más conoce."
      },
      {
        "name": "Intellectual Property (IP)",
        "definition": "**Creations of the mind** protected by law through patents, copyrights, and trademarks — inventions, literary works, artistic works, designs, symbols, and software. Unauthorized use constitutes infringement and can lead to legal action.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** **Creations of the mind** protected by law through patents, copyrights, and trademarks — inventions, literary works, artistic works, designs, symbols, and software. Unauthorized use constitutes infringement and can lead to legal action.\n  \n  > Como el guión original de una película: el papel es tuyo, la idea es tuya, y la ley protege que nadie más la use sin tu permiso."
      },
      {
        "name": "Legal Information",
        "definition": "Data related to **legal proceedings, contracts, or regulatory compliance**. Requires high levels of protection to maintain client confidentiality and comply with legal professional privilege. Examples include contracts, litigation documents, and compliance records.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Data related to **legal proceedings, contracts, or regulatory compliance**. Requires high levels of protection to maintain client confidentiality and comply with legal professional privilege. Examples include contracts, litigation documents, and compliance records.\n  \n  > Como los expedientes de un abogado: no son tuyos para compartir — están protegidos por el deber de confidencialidad profesional y por la ley."
      },
      {
        "name": "Human-Readable vs Non-Human Readable Data",
        "definition": "Two categories based on whether data requires a machine to interpret:",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Two categories based on whether data requires a machine to interpret:\n  \n  - **Human-readable data:** Information that can be understood directly by humans without software — text documents, spreadsheets, printed reports.\n  \n  - **Non-human readable data:** Information that requires a machine or software to interpret — binary code, machine language, compiled executables. Still requires protection even though it is not immediately legible to people, as it can contain sensitive logic or embedded data.\n    \n    > Como la diferencia entre una carta escrita en papel (la lees directamente) y un disco de computadora (necesitas una máquina para saber qué hay adentro) — ambos pueden contener secretos que deben protegerse."
      },
      {
        "name": "Data Sovereignty",
        "definition": "The principle that **digital data is subject to the laws of the country where it is collected or processed**. Organizations must manage, store, and process data according to the laws of that specific jurisdiction. Critical consideration in cloud computing where data centers span multiple countries.",
        "analogy": "",
        "tables": [],
        "list_items": [
          "Key example: **GDPR** protects EU citizens' data while they are within EU/EEA borders. Countries like China and Russia require data to be stored within their national borders."
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** The principle that **digital data is subject to the laws of the country where it is collected or processed**. Organizations must manage, store, and process data according to the laws of that specific jurisdiction. Critical consideration in cloud computing where data centers span multiple countries.\n\n* Key example: **GDPR** protects EU citizens' data while they are within EU/EEA borders. Countries like China and Russia require data to be stored within their national borders.\n  \n  > Como las leyes de un aeropuerto: aunque estés de paso, mientras estés en ese territorio, las leyes locales aplican a lo que llevas contigo."
      },
      {
        "name": "GDPR (General Data Protection Regulation)",
        "definition": "A comprehensive EU privacy regulation that mandates strict data protection requirements for any organization handling the **personal data of EU/EEA citizens**, regardless of where the organization is located. Grants individuals strong rights over their data (access, deletion, portability). Non-compliance can result in heavy fines. GDPR protections apply only while the data subject is within EU/EEA borders.",
        "analogy": "",
        "tables": [],
        "list_items": [
          "* *"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** A comprehensive EU privacy regulation that mandates strict data protection requirements for any organization handling the **personal data of EU/EEA citizens**, regardless of where the organization is located. Grants individuals strong rights over their data (access, deletion, portability). Non-compliance can result in heavy fines. GDPR protections apply only while the data subject is within EU/EEA borders.\n  \n  > Como las leyes laborales de un país: si contratas a alguien de ese país, tienes que cumplir sus leyes laborales aunque tu empresa esté en otro lado.\n\n* * *"
      },
      {
        "name": "HIPAA (Health Insurance Portability and Accountability Act)",
        "definition": "A US federal law that mandates the protection of **Protected Health Information (PHI)** — any health status, treatment, or payment information linked to an identifiable individual. Requires covered entities (healthcare providers, insurers) and their business associates to implement administrative, physical, and technical safeguards.",
        "analogy": "",
        "tables": [],
        "list_items": [
          "* *"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** A US federal law that mandates the protection of **Protected Health Information (PHI)** — any health status, treatment, or payment information linked to an identifiable individual. Requires covered entities (healthcare providers, insurers) and their business associates to implement administrative, physical, and technical safeguards.\n  \n  > Como el secreto médico en formato legal: no solo es un principio ético, es una obligación legal con consecuencias reales si lo incumples.\n\n* * *"
      },
      {
        "name": "PCI DSS (Payment Card Industry Data Security Standard)",
        "definition": "Virtual boundaries set up to **restrict data access based on geographic location**. Helps organizations comply with data sovereignty laws and block access attempts from high-risk regions. If all employees are in the Americas, login attempts from Asia or Africa can be automatically blocked.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** An industry security standard that applies to any organization that **stores, processes, or transmits credit card data**. Mandates specific controls including encryption, access restrictions, network segmentation, and regular security testing to protect cardholder data. Compliance is required by card brands (Visa, Mastercard, etc.).\n  \n  > Como las normas de seguridad de un servicio de transporte de valores: si manejas dinero de otras personas, debes cumplir estándares muy específicos para protegerlo.\n  \n  \n  ## Geofencing (Geographic Restrictions)\n\n* **Definition:** Virtual boundaries set up to **restrict data access based on geographic location**. Helps organizations comply with data sovereignty laws and block access attempts from high-risk regions. If all employees are in the Americas, login attempts from Asia or Africa can be automatically blocked.\n  \n  > Como poner una cerca invisible alrededor del mapa: si tu solicitud de acceso viene de fuera de esa cerca, el sistema la rechaza automáticamente."
      },
      {
        "name": "Data Securing Methods",
        "definition": "A set of complementary techniques to protect data from unauthorized access or disclosure:",
        "analogy": "Como diferentes formas de proteger un documento secreto: puedes cifrarlo, destruirlo, tacharlo, reemplazarlo con una copia falsa, dividirlo en partes, o simplemente controlar quién tiene llave para verlo.",
        "tables": [
          {
            "headers": [
              "Method",
              "How It Works",
              "Key Characteristic"
            ],
            "rows": [
              [
                "**Encryption**",
                "Converts plaintext to ciphertext using an algorithm + key",
                "Reversible with the correct decryption key"
              ],
              [
                "**Hashing**",
                "Converts data to a fixed-size hash value",
                "**One-way — cannot be reversed**; used for integrity checks and password storage"
              ],
              [
                "**Masking**",
                "Replaces data with placeholders (e.g., XXXX-XXXX-XXXX-1234)",
                "**One-way**; de-identifies data while preserving format"
              ],
              [
                "**Tokenization**",
                "Replaces sensitive data with non-sensitive tokens; original data stored separately",
                "Token is useless without the vault mapping — common in payment processing"
              ],
              [
                "**Obfuscation**",
                "Makes data unclear or unintelligible through various techniques",
                "Reduces readability for unauthorized users"
              ],
              [
                "**Segmentation**",
                "Divides network into isolated segments with separate controls",
                "Limits lateral movement if one segment is compromised"
              ],
              [
                "**Permission Restrictions**",
                "Defines who can access what data and what actions they can take (ACLs, RBAC)",
                "Principle of least privilege applied to data"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A set of complementary techniques to protect data from unauthorized access or disclosure:\n\n| Method                      | How It Works                                                                       | Key Characteristic                                                               |\n| --------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |\n| **Encryption**              | Converts plaintext to ciphertext using an algorithm + key                          | Reversible with the correct decryption key                                       |\n| **Hashing**                 | Converts data to a fixed-size hash value                                           | **One-way — cannot be reversed**; used for integrity checks and password storage |\n| **Masking**                 | Replaces data with placeholders (e.g., XXXX-XXXX-XXXX-1234)                        | **One-way**; de-identifies data while preserving format                          |\n| **Tokenization**            | Replaces sensitive data with non-sensitive tokens; original data stored separately | Token is useless without the vault mapping — common in payment processing        |\n| **Obfuscation**             | Makes data unclear or unintelligible through various techniques                    | Reduces readability for unauthorized users                                       |\n| **Segmentation**            | Divides network into isolated segments with separate controls                      | Limits lateral movement if one segment is compromised                            |\n| **Permission Restrictions** | Defines who can access what data and what actions they can take (ACLs, RBAC)       | Principle of least privilege applied to data                                     |\n\n> Como diferentes formas de proteger un documento secreto: puedes cifrarlo, destruirlo, tacharlo, reemplazarlo con una copia falsa, dividirlo en partes, o simplemente controlar quién tiene llave para verlo."
      },
      {
        "name": "Tokenization",
        "definition": "A data protection technique that **replaces sensitive data with a non-sensitive placeholder (token)**. The original sensitive data is stored in a secure, separate token vault. The token is meaningless without access to the vault. Widely used in **payment processing** to protect credit card numbers during transactions.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A data protection technique that **replaces sensitive data with a non-sensitive placeholder (token)**. The original sensitive data is stored in a secure, separate token vault. The token is meaningless without access to the vault. Widely used in **payment processing** to protect credit card numbers during transactions.\n  \n  > Como cambiar los billetes reales por fichas de casino: dentro del casino (sistema), las fichas funcionan igual; pero si alguien te las roba fuera, son inútiles porque no son dinero real."
      },
      {
        "name": "Obfuscation",
        "definition": "A data protection technique that makes data **unclear, unintelligible, or difficult to understand** for unauthorized users. Can combine multiple methods — encryption, masking, pseudonymization, code scrambling. Unlike encryption, obfuscation does not always rely on a key; the goal is simply to reduce readability and complicate unauthorized analysis or reverse engineering.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A data protection technique that makes data **unclear, unintelligible, or difficult to understand** for unauthorized users. Can combine multiple methods — encryption, masking, pseudonymization, code scrambling. Unlike encryption, obfuscation does not always rely on a key; the goal is simply to reduce readability and complicate unauthorized analysis or reverse engineering.\n  \n  > Como escribir instrucciones en un idioma mezclado con símbolos aleatorios: el resultado sigue siendo funcional para quien sabe leerlo, pero incomprensible para cualquier intruso."
      },
      {
        "name": "Segmentation",
        "definition": "The practice of **dividing a network into separate, isolated segments**, each with its own security controls and access policies. If an attacker compromises one segment, they cannot freely move laterally to other parts of the network. Reduces the blast radius of a breach. Implemented through VLANs, firewalls, and access control policies.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The practice of **dividing a network into separate, isolated segments**, each with its own security controls and access policies. If an attacker compromises one segment, they cannot freely move laterally to other parts of the network. Reduces the blast radius of a breach. Implemented through VLANs, firewalls, and access control policies.\n  \n  > Como dividir un barco en compartimentos estancos: si uno se inunda, los otros permanecen secos — el daño queda contenido."
      },
      {
        "name": "Access Control List (ACL) and RBAC",
        "definition": "Two mechanisms for implementing permission restrictions on data:",
        "analogy": "",
        "tables": [],
        "list_items": [
          "Both enforce the **principle of least privilege** — users only access what they need for their specific role."
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** Two mechanisms for implementing permission restrictions on data:\n  \n  - **ACL (Access Control List):** A list of rules attached to a resource that specifies which users or systems are granted or denied access and what operations they can perform.\n  - **RBAC (Role-Based Access Control):** Access permissions are assigned based on a user's **role** within the organization rather than individually. Users inherit permissions based on their job function (e.g., accountant, system admin, HR).\n\n* Both enforce the **principle of least privilege** — users only access what they need for their specific role.\n  \n  > Como las llaves de un edificio de oficinas: no todo el mundo tiene llave de todas las puertas — solo de las que corresponden a su rol en la empresa."
      },
      {
        "name": "Data Retention",
        "definition": "The organizational and legal policies that define **how long data must be kept** before it can be destroyed. Retention periods vary by data type and jurisdiction — some regulations mandate minimum retention (e.g., financial records under SOX, health records under HIPAA). Data retained beyond its useful period unnecessarily increases risk and storage costs. Part of the broader **data lifecycle management** strategy.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The organizational and legal policies that define **how long data must be kept** before it can be destroyed. Retention periods vary by data type and jurisdiction — some regulations mandate minimum retention (e.g., financial records under SOX, health records under HIPAA). Data retained beyond its useful period unnecessarily increases risk and storage costs. Part of the broader **data lifecycle management** strategy.\n  \n  > Como la fecha de vencimiento en los alimentos: guardar datos más tiempo del necesario no solo es inútil, puede ser peligroso si caen en manos equivocadas."
      },
      {
        "name": "Data Loss Prevention (DLP)",
        "definition": "A strategy and set of tools designed to **detect and prevent sensitive or critical data from leaving the organization** — whether intentionally (insider threat, data theft) or unintentionally (accidental disclosure). Monitors data at rest, in transit, and in use. Can operate in **detection mode** (log and alert) or **prevention mode** (block the action).",
        "analogy": "Como los controles de seguridad en el aeropuerto: no solo revisan lo que entra (firewall) — también revisan lo que sale, asegurándose de que nadie se lleve algo que no debería.",
        "tables": [
          {
            "headers": [
              "Type",
              "Deployment",
              "Function"
            ],
            "rows": [
              [
                "**Endpoint DLP**",
                "Software installed on workstations/laptops",
                "Monitors data in use; blocks or alerts on unauthorized file transfers"
              ],
              [
                "**Network DLP**",
                "Hardware/software at network perimeter",
                "Monitors all data leaving the network; prevents unauthorized exfiltration"
              ],
              [
                "**Storage DLP**",
                "Software on servers in data centers",
                "Inspects data at rest; detects unauthorized access (e.g., large downloads at 2 AM)"
              ],
              [
                "**Cloud-based DLP**",
                "SaaS solution integrated with cloud services",
                "Protects data stored in cloud platforms (e.g., Google Drive DLP, Office 365 DLP)"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A strategy and set of tools designed to **detect and prevent sensitive or critical data from leaving the organization** — whether intentionally (insider threat, data theft) or unintentionally (accidental disclosure). Monitors data at rest, in transit, and in use. Can operate in **detection mode** (log and alert) or **prevention mode** (block the action).\n\n**Four DLP deployment types:**\n\n| Type                | Deployment                                   | Function                                                                           |\n| ------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- |\n| **Endpoint DLP**    | Software installed on workstations/laptops   | Monitors data in use; blocks or alerts on unauthorized file transfers              |\n| **Network DLP**     | Hardware/software at network perimeter       | Monitors all data leaving the network; prevents unauthorized exfiltration          |\n| **Storage DLP**     | Software on servers in data centers          | Inspects data at rest; detects unauthorized access (e.g., large downloads at 2 AM) |\n| **Cloud-based DLP** | SaaS solution integrated with cloud services | Protects data stored in cloud platforms (e.g., Google Drive DLP, Office 365 DLP)   |\n\n> Como los controles de seguridad en el aeropuerto: no solo revisan lo que entra (firewall) — también revisan lo que sale, asegurándose de que nadie se lleve algo que no debería."
      },
      {
        "name": "DLP Configuration — Key Concepts",
        "definition": "When configuring a DLP solution, organizations define **rules, scopes, conditions, and actions**:",
        "analogy": "Como programar una alarma inteligente: defines qué buscar, qué tan seguro necesitas estar antes de sonar, y qué hacer cuando suena — ¿avisar?, ¿bloquear?, ¿registrar?",
        "tables": [
          {
            "headers": [
              "Configuration Element",
              "Description"
            ],
            "rows": [
              [
                "**Scope**",
                "Who the rule applies to — all users, specific departments, or groups"
              ],
              [
                "**Application**",
                "Which platform is monitored — email, chat, cloud storage, endpoints"
              ],
              [
                "**Condition / Content Match**",
                "What triggers the rule — predefined data types (SSN, credit card, PHI), regex patterns, keyword lists"
              ],
              [
                "**Confidence Threshold**",
                "How certain the system must be before triggering — High/Very High reduces false positives"
              ],
              [
                "**Action**",
                "What happens when triggered — Block, Warn, Quarantine, Audit/Log, Encrypt"
              ],
              [
                "**Detection Mode**",
                "Logs and alerts — does not block the action"
              ],
              [
                "**Prevention Mode**",
                "Actively blocks the action from occurring"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** When configuring a DLP solution, organizations define **rules, scopes, conditions, and actions**:\n\n| Configuration Element         | Description                                                                                           |\n| ----------------------------- | ----------------------------------------------------------------------------------------------------- |\n| **Scope**                     | Who the rule applies to — all users, specific departments, or groups                                  |\n| **Application**               | Which platform is monitored — email, chat, cloud storage, endpoints                                   |\n| **Condition / Content Match** | What triggers the rule — predefined data types (SSN, credit card, PHI), regex patterns, keyword lists |\n| **Confidence Threshold**      | How certain the system must be before triggering — High/Very High reduces false positives             |\n| **Action**                    | What happens when triggered — Block, Warn, Quarantine, Audit/Log, Encrypt                             |\n| **Detection Mode**            | Logs and alerts — does not block the action                                                           |\n| **Prevention Mode**           | Actively blocks the action from occurring                                                             |\n\n> Como programar una alarma inteligente: defines qué buscar, qué tan seguro necesitas estar antes de sonar, y qué hacer cuando suena — ¿avisar?, ¿bloquear?, ¿registrar?"
      },
      {
        "name": "Data Lifecycle Management",
        "definition": "The organizational policies that govern **how data is collected, stored, retained, and destroyed**. Organizations must define retention periods based on business needs and legal requirements. Data should not be stored indefinitely — proper disposal reduces attack surface and compliance risk.",
        "analogy": "",
        "tables": [],
        "list_items": [
          "Key consideration: Legal regulations (HIPAA, GDPR, PCI DSS) may mandate **minimum retention periods** for specific data types."
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** The organizational policies that govern **how data is collected, stored, retained, and destroyed**. Organizations must define retention periods based on business needs and legal requirements. Data should not be stored indefinitely — proper disposal reduces attack surface and compliance risk.\n\n* Key consideration: Legal regulations (HIPAA, GDPR, PCI DSS) may mandate **minimum retention periods** for specific data types.\n  \n  > Como la política de archivos de una oficina: no guardas todos los documentos para siempre — defines cuánto tiempo se necesitan, y luego los destruyes de forma segura."
      },
      {
        "name": "OCR in DLP (Optical Character Recognition)",
        "definition": "A technology integrated into some DLP solutions that **scans images and photographs** for text content — enabling the DLP system to detect sensitive data embedded in images (e.g., a photo of a Social Security card or a screenshot of a password). Extends DLP coverage beyond text-only documents.",
        "analogy": "",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** A technology integrated into some DLP solutions that **scans images and photographs** for text content — enabling the DLP system to detect sensitive data embedded in images (e.g., a photo of a Social Security card or a screenshot of a password). Extends DLP coverage beyond text-only documents.\n  \n  > Como un guardia de seguridad que no solo revisa documentos de texto, sino que también lee las fotografías para asegurarse de que no haya información sensible oculta en ellas.\n\n\n*CompTIA Security+ SY0-701 · Section 7: Data Protection · Dion Training*"
      }
    ]
  },
  {
    "sectionId": "S8",
    "sectionTitle": "Section 8: Cryptographic Solutions",
    "concepts": [
      {
        "name": "Cryptography Fundamentals",
        "definition": "Cryptography is the practice of writing and solving codes to hide the true meaning of information. Encryption converts plaintext into ciphertext so only someone with the correct key can reverse it.",
        "analogy": "*Es como escribir un mensaje con tinta invisible: solo quien tiene la luz ultravioleta correcta (la clave) puede leerlo.*",
        "tables": [
          {
            "headers": [
              "State",
              "Description",
              "Example"
            ],
            "rows": [
              [
                "**Data at Rest**",
                "Inactive data stored on a device",
                "Files on a hard drive"
              ],
              [
                "**Data in Transit**",
                "Data moving across a network or in RAM",
                "Email crossing the internet"
              ],
              [
                "**Data in Use**",
                "Data actively being processed by the CPU",
                "Calculations happening in the processor"
              ]
            ]
          },
          {
            "headers": [
              "Concept",
              "Role",
              "Analogy"
            ],
            "rows": [
              [
                "**Algorithm**",
                "Mathematical formula for encryption/decryption",
                "The type of lock mechanism"
              ],
              [
                "**Key**",
                "The piece of information that determines the output",
                "The actual key that opens the lock"
              ]
            ]
          }
        ],
        "list_items": [
          "Longer keys = exponentially stronger (128-bit → 256-bit is not 2× stronger, it's squared).",
          "**Key rotation** — changing keys regularly — is a best practice. Many organizations rotate TLS keys annually; some cloud providers auto-rotate every 90 days."
        ],
        "spanish_words": [],
        "raw_content": "**Cryptography** is the practice of writing and solving codes to hide the true meaning of information. **Encryption** converts plaintext into ciphertext so only someone with the correct key can reverse it.\n\n> *Es como escribir un mensaje con tinta invisible: solo quien tiene la luz ultravioleta correcta (la clave) puede leerlo.*\n\n### Data States\n\n| State               | Description                              | Example                                 |\n| ------------------- | ---------------------------------------- | --------------------------------------- |\n| **Data at Rest**    | Inactive data stored on a device         | Files on a hard drive                   |\n| **Data in Transit** | Data moving across a network or in RAM   | Email crossing the internet             |\n| **Data in Use**     | Data actively being processed by the CPU | Calculations happening in the processor |\n\n### Algorithm vs. Key\n\n| Concept       | Role                                                | Analogy                            |\n| ------------- | --------------------------------------------------- | ---------------------------------- |\n| **Algorithm** | Mathematical formula for encryption/decryption      | The type of lock mechanism         |\n| **Key**       | The piece of information that determines the output | The actual key that opens the lock |\n\n⚠️ **The strength of encryption comes from the KEY, not the algorithm.** Most algorithms are publicly reviewed and open-source. Security relies entirely on keeping the key secret.\n\n### Key Length & Rotation\n\n- Longer keys = exponentially stronger (128-bit → 256-bit is not 2× stronger, it's squared).\n- **Key rotation** — changing keys regularly — is a best practice. Many organizations rotate TLS keys annually; some cloud providers auto-rotate every 90 days.\n\n> *Si la clave es como la combinación de tu caja fuerte, rotarla es como cambiar la combinación cada cierto tiempo para que nadie que la haya visto pueda usarla en el futuro.*"
      },
      {
        "name": "Symmetric vs Asymmetric Encryption",
        "definition": "Asymmetric encryption is used to securely exchange a symmetric key, and then symmetric encryption handles the bulk of data transfer. This is how HTTPS/TLS works.",
        "analogy": "*Simétrico es como tener una copia de la llave de la casa: cualquiera que tenga la copia puede entrar, y no sabes quién tomó el laptop. Asimétrico es como un buzón: cualquiera puede depositar cartas (llave pública), pero solo tú puedes sacarlas (llave privada).*",
        "tables": [
          {
            "headers": [
              "Property",
              "Symmetric",
              "Asymmetric"
            ],
            "rows": [
              [
                "**Keys used**",
                "1 shared secret key",
                "2 keys: public + private"
              ],
              [
                "**Also called**",
                "Private key encryption",
                "Public key cryptography"
              ],
              [
                "**Speed**",
                "100–1,000× faster",
                "Slower"
              ],
              [
                "**Key distribution**",
                "⚠️ Challenge — must share secret securely",
                "✅ No key distribution problem"
              ],
              [
                "**Non-repudiation**",
                "❌ No — anyone with the key could have sent it",
                "✅ Yes — only the private key owner can sign"
              ],
              [
                "**Common use**",
                "Bulk data encryption",
                "Key exchange, digital signatures"
              ]
            ]
          },
          {
            "headers": [
              "Type",
              "How it works",
              "Typical use"
            ],
            "rows": [
              [
                "**Stream cipher**",
                "Encrypts bit by bit using XOR with a keystream",
                "Real-time audio/video streaming"
              ],
              [
                "**Block cipher**",
                "Breaks input into fixed-length blocks (64, 128, 256 bits)",
                "File encryption, most symmetric algorithms"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "### Core Comparison\n\n| Property             | Symmetric                                     | Asymmetric                                  |\n| -------------------- | --------------------------------------------- | ------------------------------------------- |\n| **Keys used**        | 1 shared secret key                           | 2 keys: public + private                    |\n| **Also called**      | Private key encryption                        | Public key cryptography                     |\n| **Speed**            | 100–1,000× faster                             | Slower                                      |\n| **Key distribution** | ⚠️ Challenge — must share secret securely     | ✅ No key distribution problem               |\n| **Non-repudiation**  | ❌ No — anyone with the key could have sent it | ✅ Yes — only the private key owner can sign |\n| **Common use**       | Bulk data encryption                          | Key exchange, digital signatures            |\n\n> *Simétrico es como tener una copia de la llave de la casa: cualquiera que tenga la copia puede entrar, y no sabes quién tomó el laptop. Asimétrico es como un buzón: cualquiera puede depositar cartas (llave pública), pero solo tú puedes sacarlas (llave privada).*\n\n### Hybrid Approach (Best of Both Worlds)\n\nAsymmetric encryption is used to **securely exchange a symmetric key**, and then symmetric encryption handles the **bulk of data transfer**. This is how HTTPS/TLS works.\n\n### Stream vs Block Ciphers\n\n| Type              | How it works                                              | Typical use                                |\n| ----------------- | --------------------------------------------------------- | ------------------------------------------ |\n| **Stream cipher** | Encrypts bit by bit using XOR with a keystream            | Real-time audio/video streaming            |\n| **Block cipher**  | Breaks input into fixed-length blocks (64, 128, 256 bits) | File encryption, most symmetric algorithms |\n\n> *Stream cipher es como traducir un libro palabra por palabra al mismo tiempo que lo lees. Block cipher es como traducir capítulo por capítulo.*\n\n\n\n![9829e987-6d29-43a5-aa48-9bb0ee130394](file:///C:/Users/LENOVO/Pictures/Typedown/9829e987-6d29-43a5-aa48-9bb0ee130394.png)"
      },
      {
        "name": "Symmetric Algorithms",
        "definition": "RC4 is the only stream cipher in this list — all others are block ciphers.",
        "analogy": "💡 **Exam tip:** You don't need to memorize specific block/key sizes — focus on identifying each algorithm, whether it's still in use, and its relative strength.",
        "tables": [
          {
            "headers": [
              "Algorithm",
              "Type",
              "Key Size",
              "Block Size",
              "Status",
              "Notes"
            ],
            "rows": [
              [
                "**DES**",
                "Block",
                "56-bit effective",
                "64-bit",
                "❌ Obsolete",
                "Broken by modern computing. Used 1970s–early 2000s."
              ],
              [
                "**3DES**",
                "Block",
                "~112-bit",
                "64-bit",
                "⚠️ Deprecated",
                "Encrypt → Decrypt → Encrypt using 3 keys. Slow but stronger than DES."
              ],
              [
                "**IDEA**",
                "Block",
                "128-bit",
                "64-bit",
                "⚠️ Niche",
                "Used in PGP. Entered the AES contest but didn't win."
              ],
              [
                "**AES**",
                "Block",
                "128/192/256-bit",
                "128-bit",
                "✅ Standard",
                "The de facto standard. US government approved. Also called Rijndael."
              ],
              [
                "**Blowfish**",
                "Block",
                "32–448-bit",
                "64-bit",
                "⚠️ Legacy",
                "Designed as DES replacement. Not widely adopted. Open source."
              ],
              [
                "**Twofish**",
                "Block",
                "128/192/256-bit",
                "128-bit",
                "⚠️ Available",
                "AES finalist. Open source. Not widely used today."
              ],
              [
                "**RC4**",
                "**Stream**",
                "40–2,048-bit",
                "N/A",
                "❌ Weak",
                "Used in SSL and WEP — both now considered insecure. Only stream cipher in this list."
              ],
              [
                "**RC5**",
                "Block",
                "Up to 2,048-bit",
                "Variable",
                "⚠️ Legacy",
                "Stronger than RC4 but not widely used."
              ],
              [
                "**RC6**",
                "Block",
                "Up to 2,048-bit",
                "128-bit",
                "⚠️ Legacy",
                "AES finalist. Based on RC5 but didn't win."
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "> 💡 **Exam tip:** You don't need to memorize specific block/key sizes — focus on identifying each algorithm, whether it's still in use, and its relative strength.\n\n### Identification & Effectiveness Guide\n\n| Algorithm    | Type       | Key Size         | Block Size | Status        | Notes                                                                                |\n| ------------ | ---------- | ---------------- | ---------- | ------------- | ------------------------------------------------------------------------------------ |\n| **DES**      | Block      | 56-bit effective | 64-bit     | ❌ Obsolete    | Broken by modern computing. Used 1970s–early 2000s.                                  |\n| **3DES**     | Block      | ~112-bit         | 64-bit     | ⚠️ Deprecated | Encrypt → Decrypt → Encrypt using 3 keys. Slow but stronger than DES.                |\n| **IDEA**     | Block      | 128-bit          | 64-bit     | ⚠️ Niche      | Used in PGP. Entered the AES contest but didn't win.                                 |\n| **AES**      | Block      | 128/192/256-bit  | 128-bit    | ✅ Standard    | The de facto standard. US government approved. Also called Rijndael.                 |\n| **Blowfish** | Block      | 32–448-bit       | 64-bit     | ⚠️ Legacy     | Designed as DES replacement. Not widely adopted. Open source.                        |\n| **Twofish**  | Block      | 128/192/256-bit  | 128-bit    | ⚠️ Available  | AES finalist. Open source. Not widely used today.                                    |\n| **RC4**      | **Stream** | 40–2,048-bit     | N/A        | ❌ Weak        | Used in SSL and WEP — both now considered insecure. Only stream cipher in this list. |\n| **RC5**      | Block      | Up to 2,048-bit  | Variable   | ⚠️ Legacy     | Stronger than RC4 but not widely used.                                               |\n| **RC6**      | Block      | Up to 2,048-bit  | 128-bit    | ⚠️ Legacy     | AES finalist. Based on RC5 but didn't win.                                           |\n\n> *AES es el ganador indiscutible — es el algoritmo que protege desde tu disco duro cifrado hasta las conexiones de tu banco. Los demás son historia o contexto.*\n\n⚠️ **RC4 is the only stream cipher in this list** — all others are block ciphers."
      },
      {
        "name": "Asymmetric Algorithms",
        "definition": "Need to exchange keys securely?           → Diffie-Hellman (or ECDH for mobile)",
        "analogy": "*Diffie-Hellman es como acordar un código secreto gritando en una plaza pública — todos te oyen, pero nadie puede descifrar qué acordaron. RSA es el candado del internet. ECC es RSA pero en versión ligera para dispositivos móviles.*",
        "tables": [
          {
            "headers": [
              "Algorithm",
              "Primary Use",
              "Key Point"
            ],
            "rows": [
              [
                "**Diffie-Hellman (DH)**",
                "Key exchange (VPN tunnels, IPSec)",
                "Allows two parties to create a shared secret over an insecure channel. Vulnerable to on-path/MITM attacks without authentication."
              ],
              [
                "**RSA**",
                "Key exchange, encryption, digital signatures",
                "Based on the difficulty of factoring large prime numbers. 1,024–4,096-bit keys. Powers RSA tokens (MFA)."
              ],
              [
                "**ECC (Elliptic Curve)**",
                "Encryption for mobile/low-power devices",
                "~6× more efficient than RSA at the same security level. 256-bit ECC ≈ 2,048-bit RSA."
              ]
            ]
          },
          {
            "headers": [
              "Variant",
              "Full Name",
              "Purpose"
            ],
            "rows": [
              [
                "**ECDH**",
                "Elliptic Curve Diffie-Hellman",
                "Key exchange using ECC"
              ],
              [
                "**ECDHE**",
                "Elliptic Curve Diffie-Hellman Ephemeral",
                "Uses a different key per session for forward secrecy"
              ],
              [
                "**ECDSA**",
                "Elliptic Curve Digital Signature Algorithm",
                "Used by the US government for digital signatures"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "### Identification & Use Case Guide\n\n| Algorithm                | Primary Use                                  | Key Point                                                                                                                         |\n| ------------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |\n| **Diffie-Hellman (DH)**  | Key exchange (VPN tunnels, IPSec)            | Allows two parties to create a shared secret over an insecure channel. Vulnerable to on-path/MITM attacks without authentication. |\n| **RSA**                  | Key exchange, encryption, digital signatures | Based on the difficulty of factoring large prime numbers. 1,024–4,096-bit keys. Powers RSA tokens (MFA).                          |\n| **ECC (Elliptic Curve)** | Encryption for mobile/low-power devices      | ~6× more efficient than RSA at the same security level. 256-bit ECC ≈ 2,048-bit RSA.                                              |\n\n> *Diffie-Hellman es como acordar un código secreto gritando en una plaza pública — todos te oyen, pero nadie puede descifrar qué acordaron. RSA es el candado del internet. ECC es RSA pero en versión ligera para dispositivos móviles.*\n\n### ECC Variants\n\n| Variant   | Full Name                                  | Purpose                                              |\n| --------- | ------------------------------------------ | ---------------------------------------------------- |\n| **ECDH**  | Elliptic Curve Diffie-Hellman              | Key exchange using ECC                               |\n| **ECDHE** | Elliptic Curve Diffie-Hellman Ephemeral    | Uses a different key per session for forward secrecy |\n| **ECDSA** | Elliptic Curve Digital Signature Algorithm | Used by the US government for digital signatures     |\n\n### How to Identify Which Algorithm to Use\n\n```\nNeed to exchange keys securely?           → Diffie-Hellman (or ECDH for mobile)\nNeed encryption + digital signatures?     → RSA\nUsing a mobile/tablet/IoT device?         → ECC\nGovernment digital signatures?            → ECDSA\n```\n\n![77970e34-9cba-4463-b553-2777849d0885](file:///C:/Users/LENOVO/Pictures/Typedown/77970e34-9cba-4463-b553-2777849d0885.png)"
      },
      {
        "name": "Hashing",
        "definition": "Hashing is a one-way cryptographic function: input → fixed-length digest. There is no way to reverse it to get the original input.",
        "analogy": "*Es como hacer jugo de naranja: puedes convertir naranjas en jugo, pero no puedes reconstruir las naranjas desde el jugo.*",
        "tables": [
          {
            "headers": [
              "Algorithm",
              "Digest Size",
              "Status",
              "Notes"
            ],
            "rows": [
              [
                "**MD5**",
                "128-bit",
                "❌ Broken",
                "Prone to collisions. Still used for quick integrity checks only."
              ],
              [
                "**SHA-1**",
                "160-bit",
                "❌ Deprecated",
                "Fewer collisions than MD5 but still considered weak."
              ],
              [
                "**SHA-2 family**",
                "224–512-bit",
                "✅ Current standard",
                "Includes SHA-224, SHA-256, SHA-384, SHA-512."
              ],
              [
                "**SHA-3**",
                "224–512-bit",
                "✅ Modern",
                "Uses 120 rounds (vs. 64–80 for SHA-2). More secure computation."
              ],
              [
                "**RIPEMD-160**",
                "160-bit",
                "⚠️ Open source alt",
                "Competitor to SHA. Not widely adopted."
              ],
              [
                "**HMAC**",
                "Varies (paired)",
                "✅ Integrity + Auth",
                "Paired with other algorithms: HMAC-SHA256, HMAC-MD5. Provides integrity AND authentication."
              ]
            ]
          },
          {
            "headers": [
              "Goal",
              "Who acts",
              "Key used",
              "Result"
            ],
            "rows": [
              [
                "**Confidentiality** (only receiver can read)",
                "Sender encrypts",
                "**Receiver's PUBLIC key**",
                "Only receiver can decrypt with their private key"
              ],
              [
                "**Non-repudiation / Authentication** (prove who sent it)",
                "Sender signs",
                "**Sender's PRIVATE key**",
                "Anyone can verify with sender's public key"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "Hashing is a **one-way** cryptographic function: input → fixed-length digest. There is **no way to reverse** it to get the original input.\n\n> *Es como hacer jugo de naranja: puedes convertir naranjas en jugo, pero no puedes reconstruir las naranjas desde el jugo.*\n\nThe digest acts as a **digital fingerprint** — even a single character change produces a completely different hash (Avalanche Effect).\n\n### Hashing Algorithms\n\n| Algorithm        | Digest Size     | Status             | Notes                                                                                       |\n| ---------------- | --------------- | ------------------ | ------------------------------------------------------------------------------------------- |\n| **MD5**          | 128-bit         | ❌ Broken           | Prone to collisions. Still used for quick integrity checks only.                            |\n| **SHA-1**        | 160-bit         | ❌ Deprecated       | Fewer collisions than MD5 but still considered weak.                                        |\n| **SHA-2 family** | 224–512-bit     | ✅ Current standard | Includes SHA-224, SHA-256, SHA-384, SHA-512.                                                |\n| **SHA-3**        | 224–512-bit     | ✅ Modern           | Uses 120 rounds (vs. 64–80 for SHA-2). More secure computation.                             |\n| **RIPEMD-160**   | 160-bit         | ⚠️ Open source alt | Competitor to SHA. Not widely adopted.                                                      |\n| **HMAC**         | Varies (paired) | ✅ Integrity + Auth | Paired with other algorithms: HMAC-SHA256, HMAC-MD5. Provides integrity AND authentication. |\n\n> *MD5 y SHA-1 son como contraseñas débiles de los 90s — todo el mundo sabe que están rotos pero algunos todavía los usan por costumbre.*\n\n### Digital Signatures — Clarification ⚠️\n\n> **El flujo del cifrado asimétrico se INVIERTE según el objetivo:**\n\n| Goal                                                     | Who acts        | Key used                  | Result                                           |\n| -------------------------------------------------------- | --------------- | ------------------------- | ------------------------------------------------ |\n| **Confidentiality** (only receiver can read)             | Sender encrypts | **Receiver's PUBLIC key** | Only receiver can decrypt with their private key |\n| **Non-repudiation / Authentication** (prove who sent it) | Sender signs    | **Sender's PRIVATE key**  | Anyone can verify with sender's public key       |\n\n**Digital Signature = Hash encrypted with sender's private key**\n\n```\nFlow:\n1. Hash the message (e.g., SHA-256)          → produces digest\n2. Encrypt digest with SENDER's private key  → digital signature\n3. Encrypt message with RECEIVER's public key → confidentiality\n4. Receiver: decrypt message → decrypt signature with SENDER's public key → compare hashes\n```\n\n> *Firmar un documento digitalmente es como estampar tu anillo de sello personal en cera. Tu anillo (llave privada) es único — nadie más puede producir ese sello. Cualquiera puede verificar el sello mirando el escudo (llave pública), pero solo tú pudiste haberlo creado.*\n\n**Algorithms used for digital signatures:** DSA, RSA, ECDSA.\n\n\n\n![21e7d098-cfc0-4ad6-9a7c-00382bfa88e2](file:///C:/Users/LENOVO/Pictures/Typedown/21e7d098-cfc0-4ad6-9a7c-00382bfa88e2.png)"
      },
      {
        "name": "Increasing Hash Security",
        "definition": "Pass-the-Hash: Attacker reuses stolen hash to authenticate without knowing the plain-text password",
        "analogy": "*Pass-the-Hash: Es como robar una fotocopia de tu llave en vez de la llave original — la fotocopía funciona igual para abrir la puerta. Birthday Attack: Con solo 23 personas en un cuarto, hay 50% de probabilidad de que dos compartan cumpleaños — la probabilidad de colisión crece más rápido de lo que intuitivamente esperamos.*",
        "tables": [
          {
            "headers": [
              "Attack",
              "Description",
              "Defense"
            ],
            "rows": [
              [
                "**Pass-the-Hash**",
                "Attacker reuses stolen hash to authenticate without knowing the plain-text password",
                "Trusted OS policies, MFA, least privilege, patching"
              ],
              [
                "**Birthday Attack**",
                "Attacker finds two inputs with the same hash (collision) using probability theory",
                "Use longer hash algorithms (SHA-256+)"
              ]
            ]
          },
          {
            "headers": [
              "Technique",
              "What it does",
              "Protects against"
            ],
            "rows": [
              [
                "**Key Stretching**",
                "Runs the weak key through the algorithm multiple times, creating a longer, stronger key",
                "Brute force"
              ],
              [
                "**Salting**",
                "Adds a random value to the password before hashing",
                "Rainbow tables, dictionary attacks, brute force"
              ],
              [
                "**Nonce**",
                "Adds a unique number-used-once to the auth process",
                "Replay attacks"
              ],
              [
                "**Login attempt limits**",
                "Locks account after N failed attempts (e.g., 3)",
                "Password guessing"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "### Hash Attacks\n\n| Attack              | Description                                                                         | Defense                                             |\n| ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------- |\n| **Pass-the-Hash**   | Attacker reuses stolen hash to authenticate without knowing the plain-text password | Trusted OS policies, MFA, least privilege, patching |\n| **Birthday Attack** | Attacker finds two inputs with the same hash (collision) using probability theory   | Use longer hash algorithms (SHA-256+)               |\n\n> *Pass-the-Hash: Es como robar una fotocopia de tu llave en vez de la llave original — la fotocopía funciona igual para abrir la puerta. Birthday Attack: Con solo 23 personas en un cuarto, hay 50% de probabilidad de que dos compartan cumpleaños — la probabilidad de colisión crece más rápido de lo que intuitivamente esperamos.*\n\n### Defensive Techniques\n\n| Technique                | What it does                                                                            | Protects against                                |\n| ------------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------- |\n| **Key Stretching**       | Runs the weak key through the algorithm multiple times, creating a longer, stronger key | Brute force                                     |\n| **Salting**              | Adds a random value to the password before hashing                                      | Rainbow tables, dictionary attacks, brute force |\n| **Nonce**                | Adds a unique number-used-once to the auth process                                      | Replay attacks                                  |\n| **Login attempt limits** | Locks account after N failed attempts (e.g., 3)                                         | Password guessing                               |\n\n> *El salt es como agregar una pimienta aleatoria a cada contraseña antes de hashearla: aunque dos usuarios tengan el mismo password, sus hashes serán completamente distintos.*"
      },
      {
        "name": "Public Key Infrastructure (PKI)",
        "definition": "PKI is the entire system (hardware, software, policies, people) built around asymmetric encryption that enables secure communications at scale.",
        "analogy": "*Si la criptografía de clave pública es el motor, PKI es el automóvil completo con GPS, seguro y placas incluidas.*",
        "tables": [],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "PKI is the entire **system** (hardware, software, policies, people) built around asymmetric encryption that enables secure communications at scale.\n\n> *Si la criptografía de clave pública es el motor, PKI es el automóvil completo con GPS, seguro y placas incluidas.*\n\n### How HTTPS Uses PKI (Hybrid Flow)\n\n```\n1. Browser requests diontraining.com\n2. Browser gets server's public key from Certificate Authority (CA)\n3. Browser generates a random shared secret key (e.g., 51363)\n4. Browser encrypts shared secret using server's PUBLIC key → sends it\n5. Server decrypts with its PRIVATE key → now both know 51363\n6. Symmetric tunnel (AES) established using 51363 as shared secret\n7. 🔒 Padlock appears — secure communication begins\n```\n\n### Key Escrow\n\nSecure third-party storage of private keys for recovery purposes. Required for scenarios like: employee leaves with encrypted data, key is lost, or legal investigation.\n\n⚠️ **Risk:** If the escrow is compromised, all stored data is exposed. Access should require at least two administrators (separation of duties)."
      },
      {
        "name": "Digital Certificates",
        "definition": "A digital certificate is a digitally signed electronic document that binds a public key to an identity. Standard protocol: X.509.",
        "analogy": "*La CA es como un notario público del internet: su firma en un certificado le dice al mundo \"yo verifico que esta persona/servidor es quien dice ser\".*",
        "tables": [
          {
            "headers": [
              "Type",
              "Description",
              "When to use"
            ],
            "rows": [
              [
                "**Standard**",
                "Covers one specific domain",
                "Single server/domain"
              ],
              [
                "**Wildcard**",
                "Covers all subdomains (`*.diontraining.com`)",
                "Multiple subdomains under same root domain"
              ],
              [
                "**SAN (Subject Alternate Name)**",
                "Covers multiple different domains",
                "`diontraining.com` AND `jasondion.com`"
              ],
              [
                "**Single-sided**",
                "Only the server authenticates",
                "Most websites (standard HTTPS)"
              ],
              [
                "**Dual-sided**",
                "Both server AND client authenticate",
                "High-security environments"
              ],
              [
                "**Self-signed**",
                "Signed by the entity itself, not a CA",
                "Internal/test environments only ⚠️ Browser warns"
              ],
              [
                "**Third-party**",
                "Signed by a trusted CA",
                "All public-facing websites"
              ]
            ]
          },
          {
            "headers": [
              "Component",
              "Role"
            ],
            "rows": [
              [
                "**Certificate Authority (CA)**",
                "Trusted third party that issues and signs certificates. Maintains publicly accessible public keys."
              ],
              [
                "**Registration Authority (RA)**",
                "Accepts certificate requests, validates identity, forwards to CA"
              ],
              [
                "**Certificate Signing Request (CSR)**",
                "Block of encoded text sent to CA to request a certificate. Private key is NEVER included."
              ],
              [
                "**Root of Trust / Chain of Trust**",
                "Hierarchy from root CA → intermediate CA → end-entity certificate. Each level vouches for the one below."
              ],
              [
                "**Certificate Revocation List (CRL)**",
                "Full list of all revoked certificates maintained by the CA"
              ],
              [
                "**OCSP**",
                "Online Certificate Status Protocol — checks revocation status of a single cert by serial number. Faster than CRL but lacks encryption."
              ],
              [
                "**OCSP Stapling**",
                "Server periodically fetches its own OCSP record and includes it in the TLS handshake — eliminates extra connection at auth time"
              ],
              [
                "**Public Key Pinning**",
                "Server delivers a set of trusted public keys in HTTP headers — browser rejects any certificate not matching"
              ],
              [
                "**Key Escrow Agent**",
                "Stores backup copies of private keys"
              ],
              [
                "**Key Recovery Agent**",
                "Software that restores lost/corrupted keys from backup"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "A digital certificate is a **digitally signed electronic document** that binds a public key to an identity. Standard protocol: **X.509**.\n\n### Certificate Types\n\n| Type                             | Description                                  | When to use                                      |\n| -------------------------------- | -------------------------------------------- | ------------------------------------------------ |\n| **Standard**                     | Covers one specific domain                   | Single server/domain                             |\n| **Wildcard**                     | Covers all subdomains (`*.diontraining.com`) | Multiple subdomains under same root domain       |\n| **SAN (Subject Alternate Name)** | Covers multiple different domains            | `diontraining.com` AND `jasondion.com`           |\n| **Single-sided**                 | Only the server authenticates                | Most websites (standard HTTPS)                   |\n| **Dual-sided**                   | Both server AND client authenticate          | High-security environments                       |\n| **Self-signed**                  | Signed by the entity itself, not a CA        | Internal/test environments only ⚠️ Browser warns |\n| **Third-party**                  | Signed by a trusted CA                       | All public-facing websites                       |\n\n### PKI Components\n\n| Component                             | Role                                                                                                                                   |\n| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |\n| **Certificate Authority (CA)**        | Trusted third party that issues and signs certificates. Maintains publicly accessible public keys.                                     |\n| **Registration Authority (RA)**       | Accepts certificate requests, validates identity, forwards to CA                                                                       |\n| **Certificate Signing Request (CSR)** | Block of encoded text sent to CA to request a certificate. Private key is NEVER included.                                              |\n| **Root of Trust / Chain of Trust**    | Hierarchy from root CA → intermediate CA → end-entity certificate. Each level vouches for the one below.                               |\n| **Certificate Revocation List (CRL)** | Full list of all revoked certificates maintained by the CA                                                                             |\n| **OCSP**                              | Online Certificate Status Protocol — checks revocation status of a single cert by serial number. Faster than CRL but lacks encryption. |\n| **OCSP Stapling**                     | Server periodically fetches its own OCSP record and includes it in the TLS handshake — eliminates extra connection at auth time        |\n| **Public Key Pinning**                | Server delivers a set of trusted public keys in HTTP headers — browser rejects any certificate not matching                            |\n| **Key Escrow Agent**                  | Stores backup copies of private keys                                                                                                   |\n| **Key Recovery Agent**                | Software that restores lost/corrupted keys from backup                                                                                 |\n\n> *La CA es como un notario público del internet: su firma en un certificado le dice al mundo \"yo verifico que esta persona/servidor es quien dice ser\".*"
      },
      {
        "name": "Blockchain",
        "definition": "A shared, immutable ledger for recording transactions across a decentralized peer-to-peer network.",
        "analogy": "*Imagina un libro de contabilidad del que todo el mundo tiene una copia idéntica. Para alterar una entrada, tendrías que alterar la copia de TODAS las personas al mismo tiempo — prácticamente imposible.*",
        "tables": [
          {
            "headers": [
              "Concept",
              "Description"
            ],
            "rows": [
              [
                "**Public Ledger**",
                "Record-keeping system with anonymous participant identities and transparent transaction history"
              ],
              [
                "**Smart Contracts / Digital Contracts**",
                "Self-executing code that automatically triggers actions when conditions are met. Tamper-proof once deployed."
              ],
              [
                "**Permissioned Blockchain**",
                "Private blockchain for business use (e.g., IBM supply chain)"
              ],
              [
                "**Cryptocurrency**",
                "Financial application of blockchain (Bitcoin, Ethereum)"
              ]
            ]
          }
        ],
        "list_items": [
          "Previous block's hash (creates the chain)",
          "Timestamp",
          "Transaction hashes (organized in a Merkle tree)",
          "Root hash",
          "Supply chain transparency (trace food from farm to store)",
          "Digital contracts (smart contracts on Ethereum)",
          "Voting systems, property transfer, intellectual property"
        ],
        "spanish_words": [],
        "raw_content": "A **shared, immutable ledger** for recording transactions across a decentralized peer-to-peer network.\n\n> *Imagina un libro de contabilidad del que todo el mundo tiene una copia idéntica. Para alterar una entrada, tendrías que alterar la copia de TODAS las personas al mismo tiempo — prácticamente imposible.*\n\n### Structure\n\nEach **block** contains:\n\n- Previous block's hash (creates the chain)\n- Timestamp\n- Transaction hashes (organized in a Merkle tree)\n- Root hash\n\n### Key Concepts\n\n| Concept                                 | Description                                                                                                  |\n| --------------------------------------- | ------------------------------------------------------------------------------------------------------------ |\n| **Public Ledger**                       | Record-keeping system with anonymous participant identities and transparent transaction history              |\n| **Smart Contracts / Digital Contracts** | Self-executing code that automatically triggers actions when conditions are met. Tamper-proof once deployed. |\n| **Permissioned Blockchain**             | Private blockchain for business use (e.g., IBM supply chain)                                                 |\n| **Cryptocurrency**                      | Financial application of blockchain (Bitcoin, Ethereum)                                                      |\n\n### Applications\n\n- Supply chain transparency (trace food from farm to store)\n- Digital contracts (smart contracts on Ethereum)\n- Voting systems, property transfer, intellectual property"
      },
      {
        "name": "Encryption Tools",
        "definition": "TPM: Secures hardware cryptographic keys; used with BitLocker",
        "analogy": "*TPM es el candado de tu laptop. HSM es la bóveda del banco. KMS es el administrador que lleva el inventario de todos los candados y sabe cuándo cambiarlos. El Secure Enclave es la caja fuerte dentro de tu teléfono donde vive tu huella digital.*",
        "tables": [
          {
            "headers": [
              "Tool",
              "Full Name",
              "Analogy",
              "Primary Use"
            ],
            "rows": [
              [
                "**TPM**",
                "Trusted Platform Module",
                "Personal vault embedded in hardware",
                "Secures hardware cryptographic keys; used with BitLocker"
              ],
              [
                "**HSM**",
                "Hardware Security Module",
                "Bank vault",
                "Manages and protects keys for mission-critical/financial operations. Tamper-proof."
              ],
              [
                "**KMS**",
                "Key Management System",
                "Key lifecycle manager",
                "Centralized generation, distribution, rotation, and destruction of cryptographic keys"
              ],
              [
                "**Secure Enclave**",
                "—",
                "Fortress inside the processor",
                "Isolated co-processor for biometric data (Face ID, Touch ID). Data never leaves device."
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "| Tool               | Full Name                | Analogy                             | Primary Use                                                                             |\n| ------------------ | ------------------------ | ----------------------------------- | --------------------------------------------------------------------------------------- |\n| **TPM**            | Trusted Platform Module  | Personal vault embedded in hardware | Secures hardware cryptographic keys; used with BitLocker                                |\n| **HSM**            | Hardware Security Module | Bank vault                          | Manages and protects keys for mission-critical/financial operations. Tamper-proof.      |\n| **KMS**            | Key Management System    | Key lifecycle manager               | Centralized generation, distribution, rotation, and destruction of cryptographic keys   |\n| **Secure Enclave** | —                        | Fortress inside the processor       | Isolated co-processor for biometric data (Face ID, Touch ID). Data never leaves device. |\n\n> *TPM es el candado de tu laptop. HSM es la bóveda del banco. KMS es el administrador que lleva el inventario de todos los candados y sabe cuándo cambiarlos. El Secure Enclave es la caja fuerte dentro de tu teléfono donde vive tu huella digital.*"
      },
      {
        "name": "Obfuscation",
        "definition": "Obfuscation hides information — not always by encrypting it, but by concealing its existence or true form.",
        "analogy": "*Steganography: el espía que pone \"Encuéntrame a las seis\" codificado en la primera letra de cada palabra de un clasificado. Tokenization: el cajero que solo ve un token inútil — el número real de tu tarjeta vive en otra caja fuerte. Data Masking: el desarrollador que practica con datos que parecen reales pero son inventados.*",
        "tables": [
          {
            "headers": [
              "Technique",
              "Definition",
              "Real-world Example"
            ],
            "rows": [
              [
                "**Steganography**",
                "Hiding secret data inside an ordinary file (image, audio, text) so its existence is undetected",
                "Embedding a message in specific pixel color values of a photo"
              ],
              [
                "**Tokenization**",
                "Replacing sensitive data with a non-sensitive token. Real data stored in a secure vault.",
                "Credit card number replaced by a random token at point of sale"
              ],
              [
                "**Data Masking / Obfuscation**",
                "Disguising real data with fake but realistic-looking data",
                "Showing only last 4 digits of a credit card; replacing real customer names with fictional ones for testing"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "Obfuscation hides information — not always by encrypting it, but by concealing its existence or true form.\n\n### Three Techniques\n\n| Technique                      | Definition                                                                                     | Real-world Example                                                                                         |\n| ------------------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |\n| **Steganography**              | Hiding secret data inside an ordinary file (image, audio, text) so its existence is undetected | Embedding a message in specific pixel color values of a photo                                              |\n| **Tokenization**               | Replacing sensitive data with a non-sensitive token. Real data stored in a secure vault.       | Credit card number replaced by a random token at point of sale                                             |\n| **Data Masking / Obfuscation** | Disguising real data with fake but realistic-looking data                                      | Showing only last 4 digits of a credit card; replacing real customer names with fictional ones for testing |\n\n> *Steganography: el espía que pone \"Encuéntrame a las seis\" codificado en la primera letra de cada palabra de un clasificado. Tokenization: el cajero que solo ve un token inútil — el número real de tu tarjeta vive en otra caja fuerte. Data Masking: el desarrollador que practica con datos que parecen reales pero son inventados.*\n\n⚠️ **Steganography ≠ encryption.** The data is hidden, not encrypted. If someone knows where to look, they can extract it without a key."
      },
      {
        "name": "Cryptographic Attacks",
        "definition": "Forces a system to use an older, weaker cryptographic protocol than the one it normally supports, exploiting known vulnerabilities in that older version.",
        "analogy": "*Es como convencer a dos personas que hablan inglés y español a que solo hablen por telégrafo morse porque el atacante no puede entender inglés ni español.*",
        "tables": [
          {
            "headers": [
              "Aspect",
              "Classical Computer",
              "Quantum Computer"
            ],
            "rows": [
              [
                "Bit type",
                "Binary (0 or 1)",
                "Qubit (multiple states simultaneously)"
              ],
              [
                "RSA/ECC threat",
                "Safe (factoring large primes is hard)",
                "⚠️ Proven breakable — factors primes rapidly"
              ],
              [
                "Symmetric (AES) threat",
                "Manageable",
                "Partially mitigated by doubling key size"
              ],
              [
                "Current status",
                "Ubiquitous",
                "Prototype/R&D only; practical use ~2030 (gov); ~2040 (consumer)"
              ]
            ]
          },
          {
            "headers": [
              "Purpose",
              "Recommended Algorithm",
              "Notes"
            ],
            "rows": [
              [
                "General encryption",
                "**CRYSTALS-Kyber**",
                "Based on lattice problems; equivalent strength to AES-256"
              ],
              [
                "Digital signatures",
                "**CRYSTALS-Dilithium** (primary)",
                "Lattice-based"
              ],
              [
                "Digital signatures (alt)",
                "**FALCON**",
                "Lattice-based"
              ],
              [
                "Digital signatures (alt)",
                "**SPHINCS+**",
                "Hash-based"
              ]
            ]
          }
        ],
        "list_items": [
          "Remove support for legacy protocols",
          "Version intolerance checks (start by claiming only the latest version is supported)",
          "MD5 is especially vulnerable (128-bit output = limited unique values)",
          "MD5 was proven to produce collisions → rendered unsuitable for certificates",
          "**Defense:** Use longer hash algorithms (SHA-256, SHA-3)"
        ],
        "spanish_words": [],
        "raw_content": "### Downgrade Attack (Version Rollback Attack)\n\nForces a system to use an **older, weaker cryptographic protocol** than the one it normally supports, exploiting known vulnerabilities in that older version.\n\n> *Es como convencer a dos personas que hablan inglés y español a que solo hablen por telégrafo morse porque el atacante no puede entender inglés ni español.*\n\n**Famous example:** POODLE attack — forced systems to revert to SSL 3.0 (insecure) despite TLS being available.\n\n**Defenses:**\n\n- Remove support for legacy protocols\n- Version intolerance checks (start by claiming only the latest version is supported)\n\n### Collision Attack (Birthday Attack)\n\nFinds two different inputs that produce the **same hash digest**. Undermines integrity verification.\n\n> *El paradox del cumpleaños: solo necesitas 23 personas para tener 50% de probabilidad de que dos compartan cumpleaños. El punto: las colisiones ocurren más rápido de lo que intuitivamente pensamos.*\n\n- MD5 is especially vulnerable (128-bit output = limited unique values)\n- MD5 was proven to produce collisions → rendered unsuitable for certificates\n- **Defense:** Use longer hash algorithms (SHA-256, SHA-3)\n\n### Quantum Computing Threat\n\nQuantum computers use **qubits** (which can represent multiple states simultaneously via superposition) to solve complex math problems exponentially faster than classical computers.\n\n> *Una computadora clásica prueba combinaciones de uno en uno como abrir cerraduras en fila. Una computadora cuántica es como abrir todas las cerraduras al mismo tiempo.*\n\n| Aspect                 | Classical Computer                    | Quantum Computer                                                |\n| ---------------------- | ------------------------------------- | --------------------------------------------------------------- |\n| Bit type               | Binary (0 or 1)                       | Qubit (multiple states simultaneously)                          |\n| RSA/ECC threat         | Safe (factoring large primes is hard) | ⚠️ Proven breakable — factors primes rapidly                    |\n| Symmetric (AES) threat | Manageable                            | Partially mitigated by doubling key size                        |\n| Current status         | Ubiquitous                            | Prototype/R&D only; practical use ~2030 (gov); ~2040 (consumer) |\n\n**Post-Quantum Cryptography (NIST selections, 2022):**\n\n| Purpose                  | Recommended Algorithm            | Notes                                                     |\n| ------------------------ | -------------------------------- | --------------------------------------------------------- |\n| General encryption       | **CRYSTALS-Kyber**               | Based on lattice problems; equivalent strength to AES-256 |\n| Digital signatures       | **CRYSTALS-Dilithium** (primary) | Lattice-based                                             |\n| Digital signatures (alt) | **FALCON**                       | Lattice-based                                             |\n| Digital signatures (alt) | **SPHINCS+**                     | Hash-based                                                |\n\n\n\n### Encryption Classification\n\n```\nSymmetric  (1 key, both encrypt & decrypt) → DES, 3DES, AES, Blowfish, RC4, RC5, RC6\nAsymmetric (public + private key pair)     → Diffie-Hellman, RSA, ECC\n\nStream cipher (bit by bit)  → RC4\nBlock cipher  (fixed blocks) → All others listed above\n```\n\n### Algorithm Status at a Glance\n\n```\n✅ Use now:    AES (symmetric), RSA, ECC/ECDSA, SHA-256, SHA-3, HMAC\n⚠️ Avoid:     3DES, Blowfish, RC4, SHA-1, MD5 (legacy/broken)\n❌ Obsolete:  DES, RC4 in WEP/SSL contexts\n🔮 Future:    CRYSTALS-Kyber, CRYSTALS-Dilithium, FALCON, SPHINCS+\n```\n\n### Asymmetric Key Usage Rules\n\n```\nEncrypt for someone (confidentiality)     → use RECEIVER's PUBLIC key\nSign/prove identity (non-repudiation)     → use SENDER's PRIVATE key\nVerify a signature                        → use SENDER's PUBLIC key\nDecrypt a message addressed to you        → use YOUR PRIVATE key\n```\n\n### Hashing Defenses\n\n```\nKey Stretching → multiple hash rounds → defeats brute force\nSalting        → random value added   → defeats rainbow tables, dictionary attacks\nNonce          → number used once     → defeats replay attacks\nLogin limits   → lock after N tries   → defeats guessing attacks\n```\n\n### PKI Chain of Trust\n\n```\nRoot CA → Intermediate CA → End-Entity Certificate\n(grandfather)  (father)        (you)\n```\n\n### Obfuscation Quick Map\n\n```\nSteganography → hides existence of data (in an image/file)\nTokenization  → replaces sensitive data with meaningless token\nData Masking  → disguises data with fake-but-realistic values\n```\n\n### Cryptographic Attacks\n\n```\nDowngrade Attack  → force to older protocol (POODLE: SSL 3.0)\nCollision Attack  → two inputs → same hash (Birthday Attack)\nQuantum Threat    → breaks RSA/ECC via prime factoring; AES mitigated by doubling key size\n```\n\n\n*CompTIA Security+ | Section 8 — Cryptographic Solutions | OBJ 1.4 · 2.3 · 2.4*"
      }
    ]
  },
  {
    "sectionId": "S9",
    "sectionTitle": "Section 9: Risk Management",
    "concepts": [
      {
        "name": "Risk Management Overview",
        "definition": "Risk management is the systematic process of identifying, analyzing, treating, monitoring, and reporting risks to ensure an organization achieves its objectives in a manner consistent with its risk appetite.",
        "analogy": "*Es como el departamento de seguridad de un aeropuerto: no pueden eliminar todos los riesgos, pero tienen procesos para identificar amenazas, evaluarlas, decidir cómo manejarlas y reportarlas a las autoridades. Todo de forma continua y estructurada.*",
        "tables": [
          {
            "headers": [
              "Step",
              "Name",
              "What It Does"
            ],
            "rows": [
              [
                "1",
                "**Risk Identification**",
                "Recognizes potential risks that could impact operations or objectives"
              ],
              [
                "2",
                "**Risk Analysis**",
                "Evaluates likelihood and potential impact of identified risks (qualitative or quantitative)"
              ],
              [
                "3",
                "**Risk Treatment**",
                "Develops strategies: avoidance, reduction, sharing, or acceptance"
              ],
              [
                "4",
                "**Risk Monitoring**",
                "Tracks identified risks and effectiveness of responses on an ongoing basis"
              ],
              [
                "5",
                "**Risk Reporting**",
                "Communicates risk information to stakeholders via dashboards, heat maps, or reports"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "**Risk management** is the systematic process of identifying, analyzing, treating, monitoring, and reporting risks to ensure an organization achieves its objectives in a manner consistent with its **risk appetite**.\n\n> *Es como el departamento de seguridad de un aeropuerto: no pueden eliminar todos los riesgos, pero tienen procesos para identificar amenazas, evaluarlas, decidir cómo manejarlas y reportarlas a las autoridades. Todo de forma continua y estructurada.*\n\n### The 5-Step Risk Management Lifecycle\n\n| Step | Name | What It Does |\n| --- | --- | --- |\n| 1 | **Risk Identification** | Recognizes potential risks that could impact operations or objectives |\n| 2 | **Risk Analysis** | Evaluates likelihood and potential impact of identified risks (qualitative or quantitative) |\n| 3 | **Risk Treatment** | Develops strategies: avoidance, reduction, sharing, or acceptance |\n| 4 | **Risk Monitoring** | Tracks identified risks and effectiveness of responses on an ongoing basis |\n| 5 | **Risk Reporting** | Communicates risk information to stakeholders via dashboards, heat maps, or reports |"
      },
      {
        "name": "Risk Assessment Frequency",
        "definition": "Risk assessment frequency refers to how often an organization conducts its risk assessment process. The right frequency depends on the organization's nature, industry, and risk environment.",
        "analogy": "*Imagina que eres el guardia de un edificio: a veces revisas porque algo pasó (ad hoc), a veces haces rondas fijas cada hora (recurring), a veces haces una sola revisión antes de un evento especial (one-time), y a veces tienes cámaras que monitorean en tiempo real (continuous).*",
        "tables": [
          {
            "headers": [
              "Type",
              "When It Happens",
              "Example"
            ],
            "rows": [
              [
                "**Ad-hoc**",
                "As needed, triggered by a specific event or situation",
                "New product launch, regulatory change, natural disaster"
              ],
              [
                "**Recurring**",
                "At regular scheduled intervals (annually, quarterly, monthly)",
                "Annual penetration testing, quarterly credit risk review"
              ],
              [
                "**One-time**",
                "For a specific project or initiative; not repeated",
                "Implementing a new IT system, major organizational change"
              ],
              [
                "**Continuous**",
                "Ongoing real-time monitoring enabled by technology",
                "Cybersecurity threat monitoring, real-time data analysis"
              ]
            ]
          }
        ],
        "list_items": [
          "**Ad-hoc** → triggered by an event; *may be repeated* if the same type of situation arises again.",
          "**One-time** → tied to a specific project; *not repeated* under any circumstances."
        ],
        "spanish_words": [],
        "raw_content": "**Risk assessment frequency** refers to how often an organization conducts its risk assessment process. The right frequency depends on the organization's nature, industry, and risk environment.\n\n> *Imagina que eres el guardia de un edificio: a veces revisas porque algo pasó (ad hoc), a veces haces rondas fijas cada hora (recurring), a veces haces una sola revisión antes de un evento especial (one-time), y a veces tienes cámaras que monitorean en tiempo real (continuous).*\n\n### The 4 Types of Assessment Frequency\n\n| Type | When It Happens | Example |\n| --- | --- | --- |\n| **Ad-hoc** | As needed, triggered by a specific event or situation | New product launch, regulatory change, natural disaster |\n| **Recurring** | At regular scheduled intervals (annually, quarterly, monthly) | Annual penetration testing, quarterly credit risk review |\n| **One-time** | For a specific project or initiative; not repeated | Implementing a new IT system, major organizational change |\n| **Continuous** | Ongoing real-time monitoring enabled by technology | Cybersecurity threat monitoring, real-time data analysis |\n\n⚠️ **Key distinction — Ad-hoc vs. One-time:**\n- **Ad-hoc** → triggered by an event; *may be repeated* if the same type of situation arises again.\n- **One-time** → tied to a specific project; *not repeated* under any circumstances."
      },
      {
        "name": "Risk Identification",
        "definition": "Risk identification is the proactive process of recognizing potential threats and vulnerabilities that could affect an organization's operations or objectives — regardless of how likely or unlikely they may seem.",
        "analogy": "*Es como hacer una lista de todo lo que podría salir mal antes de un viaje largo: llantas ponchadas, lluvia, accidentes, que se te olvide el pasaporte. Identificarlos no significa que van a pasar, pero te permite prepararte.*",
        "tables": [],
        "list_items": [
          "Techniques include: brainstorming, checklists, interviews, and scenario analysis.",
          "All risks — even unlikely ones — should be documented and analyzed for impact and likelihood.",
          "Risks span categories: **operational, financial, strategic, and reputational**."
        ],
        "spanish_words": [],
        "raw_content": "**Risk identification** is the proactive process of recognizing potential threats and vulnerabilities that could affect an organization's operations or objectives — regardless of how likely or unlikely they may seem.\n\n> *Es como hacer una lista de todo lo que podría salir mal antes de un viaje largo: llantas ponchadas, lluvia, accidentes, que se te olvide el pasaporte. Identificarlos no significa que van a pasar, pero te permite prepararte.*\n\n- Techniques include: brainstorming, checklists, interviews, and scenario analysis.\n- All risks — even unlikely ones — should be documented and analyzed for impact and likelihood.\n- Risks span categories: **operational, financial, strategic, and reputational**."
      },
      {
        "name": "Business Impact Analysis (BIA)",
        "definition": "A Business Impact Analysis (BIA) evaluates the potential effects of disruption to an organization's critical business functions and processes. It answers: what happens if this breaks, and how fast do we need it back?",
        "analogy": "*Es el análisis que hace un hospital antes de instalar un nuevo sistema: ¿qué pasa si el sistema de registros médicos falla? ¿Cuántas horas podemos operar sin él? ¿Cuántos datos podemos permitirnos perder? Esas respuestas definen los objetivos de recuperación.*",
        "tables": [
          {
            "headers": [
              "Metric",
              "Full Name",
              "What It Measures",
              "Example"
            ],
            "rows": [
              [
                "**RTO**",
                "Recovery Time Objective",
                "Max acceptable downtime before severe business impact",
                "E-commerce site must be restored within 2 hours"
              ],
              [
                "**RPO**",
                "Recovery Point Objective",
                "Max acceptable data loss measured in time",
                "Financial system must recover data up to the last 15 minutes"
              ],
              [
                "**MTTR**",
                "Mean Time to Repair",
                "Average time required to repair a failed component or system",
                "Machine repaired in an average of 4 hours across 5 failures"
              ],
              [
                "**MTBF**",
                "Mean Time Between Failures",
                "Average time between system failures (reliability indicator)",
                "Machine fails once every ~72 days (5 times/year)"
              ]
            ]
          }
        ],
        "list_items": [
          "**Lower MTTR** = faster recovery = less disruption.",
          "**Higher MTBF** = more reliable system = less frequent failures.",
          "**RTO** focuses on *time to restore*; **RPO** focuses on *how much data loss is tolerable*."
        ],
        "spanish_words": [],
        "raw_content": "A **Business Impact Analysis (BIA)** evaluates the potential effects of disruption to an organization's critical business functions and processes. It answers: *what happens if this breaks, and how fast do we need it back?*\n\n> *Es el análisis que hace un hospital antes de instalar un nuevo sistema: ¿qué pasa si el sistema de registros médicos falla? ¿Cuántas horas podemos operar sin él? ¿Cuántos datos podemos permitirnos perder? Esas respuestas definen los objetivos de recuperación.*\n\n### BIA Key Metrics\n\n| Metric | Full Name | What It Measures | Example |\n| --- | --- | --- | --- |\n| **RTO** | Recovery Time Objective | Max acceptable downtime before severe business impact | E-commerce site must be restored within 2 hours |\n| **RPO** | Recovery Point Objective | Max acceptable data loss measured in time | Financial system must recover data up to the last 15 minutes |\n| **MTTR** | Mean Time to Repair | Average time required to repair a failed component or system | Machine repaired in an average of 4 hours across 5 failures |\n| **MTBF** | Mean Time Between Failures | Average time between system failures (reliability indicator) | Machine fails once every ~72 days (5 times/year) |\n\n- **Lower MTTR** = faster recovery = less disruption.\n- **Higher MTBF** = more reliable system = less frequent failures.\n- **RTO** focuses on *time to restore*; **RPO** focuses on *how much data loss is tolerable*."
      },
      {
        "name": "Risk Register",
        "definition": "A risk register (also called a risk log) is the central document that records all identified risks, their details, and how they are being managed. It is shared among stakeholders and drives accountability.",
        "analogy": "*Es como el historial clínico de una organización: cada riesgo tiene su expediente con diagnóstico (descripción), gravedad (impacto), probabilidad (likelihood), pronóstico (outcome) y el médico responsable (risk owner). Sin este registro, cada área trata sus riesgos de forma aislada.*",
        "tables": [
          {
            "headers": [
              "Field",
              "Description"
            ],
            "rows": [
              [
                "**Risk Description**",
                "Clear, concise explanation of the risk"
              ],
              [
                "**Risk Impact**",
                "Potential consequences if the risk occurs (Low / Medium / High)"
              ],
              [
                "**Risk Likelihood**",
                "Probability of occurrence (scale: rare → almost certain, or 1–5)"
              ],
              [
                "**Risk Outcome**",
                "The direct result if the risk materializes"
              ],
              [
                "**Risk Level / Threshold**",
                "Combined impact + likelihood score → determines priority (High / Medium / Low)"
              ],
              [
                "**Cost**",
                "Financial impact if the risk occurs or the cost to mitigate it"
              ],
              [
                "**Key Risk Indicators (KRIs)**",
                "Predictive metrics that signal increasing risk exposure before it escalates"
              ],
              [
                "**Risk Owner**",
                "The person or group accountable for monitoring and managing the risk"
              ]
            ]
          },
          {
            "headers": [
              "Type",
              "Behavior",
              "Common In"
            ],
            "rows": [
              [
                "**Expansionary**",
                "Willing to take on more risk for higher returns",
                "Aggressive, growth-oriented businesses"
              ],
              [
                "**Conservative**",
                "Prefers less risk even at the cost of lower returns",
                "Organizations prioritizing stability"
              ],
              [
                "**Neutral**",
                "Balanced approach between risk and return",
                "General-purpose organizations"
              ]
            ]
          }
        ],
        "list_items": [
          "Example: In a bank, a spike in the number of loan defaults is a KRI for credit risk — it signals action is needed before losses become critical."
        ],
        "spanish_words": [],
        "raw_content": "A **risk register** (also called a *risk log*) is the central document that records all identified risks, their details, and how they are being managed. It is shared among stakeholders and drives accountability.\n\n> *Es como el historial clínico de una organización: cada riesgo tiene su expediente con diagnóstico (descripción), gravedad (impacto), probabilidad (likelihood), pronóstico (outcome) y el médico responsable (risk owner). Sin este registro, cada área trata sus riesgos de forma aislada.*\n\n### Core Fields of a Risk Register\n\n| Field | Description |\n| --- | --- |\n| **Risk Description** | Clear, concise explanation of the risk |\n| **Risk Impact** | Potential consequences if the risk occurs (Low / Medium / High) |\n| **Risk Likelihood** | Probability of occurrence (scale: rare → almost certain, or 1–5) |\n| **Risk Outcome** | The direct result if the risk materializes |\n| **Risk Level / Threshold** | Combined impact + likelihood score → determines priority (High / Medium / Low) |\n| **Cost** | Financial impact if the risk occurs or the cost to mitigate it |\n| **Key Risk Indicators (KRIs)** | Predictive metrics that signal increasing risk exposure before it escalates |\n| **Risk Owner** | The person or group accountable for monitoring and managing the risk |\n\n### Risk Appetite — 3 Types\n\n**Risk appetite** is the amount and type of risk an organization is *willing to pursue* to achieve its strategic objectives.\n\n| Type | Behavior | Common In |\n| --- | --- | --- |\n| **Expansionary** | Willing to take on more risk for higher returns | Aggressive, growth-oriented businesses |\n| **Conservative** | Prefers less risk even at the cost of lower returns | Organizations prioritizing stability |\n| **Neutral** | Balanced approach between risk and return | General-purpose organizations |\n\n**Risk tolerance** is the *maximum amount* of risk an organization is prepared to accept before action is required.\n\n> *Diferencia clave: el risk appetite es cuánto riesgo quieres buscar activamente. El risk tolerance es el límite máximo que puedes aguantar antes de tener que actuar.*\n\n### Key Risk Indicators (KRIs)\n\n**KRIs** are forward-looking metrics that provide early warning signals of rising risk exposure. They are tied to the organization's risk appetite and objectives.\n\n- Example: In a bank, a spike in the number of loan defaults is a KRI for credit risk — it signals action is needed before losses become critical."
      },
      {
        "name": "Qualitative Risk Analysis",
        "definition": "Qualitative risk analysis assesses and prioritizes risks using descriptive, categorical scales rather than hard numbers. It relies on expert judgment and experience.",
        "analogy": "*Es como calificar el peligro de una tormenta sin medirla con instrumentos: \"riesgo alto de inundación\" basado en la experiencia del meteorólogo. No necesitas datos exactos para tomar decisiones, solo categorías claras.*",
        "tables": [
          {
            "headers": [
              "Rating",
              "Likelihood",
              "Impact"
            ],
            "rows": [
              [
                "**Low**",
                "Unlikely to occur",
                "Minor damage; essential functions still operational"
              ],
              [
                "**Medium**",
                "Possible",
                "Significant damage or loss to assets"
              ],
              [
                "**High**",
                "Likely or almost certain",
                "Major damage; essential functions cannot be performed"
              ]
            ]
          }
        ],
        "list_items": [
          "The **combined rating** of Likelihood × Impact determines the **risk priority**.",
          "Outputs are used to guide risk treatment decisions."
        ],
        "spanish_words": [],
        "raw_content": "**Qualitative risk analysis** assesses and prioritizes risks using descriptive, categorical scales rather than hard numbers. It relies on expert judgment and experience.\n\n> *Es como calificar el peligro de una tormenta sin medirla con instrumentos: \"riesgo alto de inundación\" basado en la experiencia del meteorólogo. No necesitas datos exactos para tomar decisiones, solo categorías claras.*\n\n### Likelihood × Impact Framework\n\n| Rating | Likelihood | Impact |\n| --- | --- | --- |\n| **Low** | Unlikely to occur | Minor damage; essential functions still operational |\n| **Medium** | Possible | Significant damage or loss to assets |\n| **High** | Likely or almost certain | Major damage; essential functions cannot be performed |\n\n- The **combined rating** of Likelihood × Impact determines the **risk priority**.\n- Outputs are used to guide risk treatment decisions."
      },
      {
        "name": "Quantitative Risk Analysis",
        "definition": "Quantitative risk analysis uses numerical measurements and statistical methods to evaluate risk. It produces concrete financial estimates for each risk.",
        "analogy": "*Es como el actuario de una aseguradora que calcula exactamente cuánto dinero espera perder por accidentes de tráfico al año basándose en estadísticas. No dice \"es un riesgo alto\", dice \"esperamos perder $2,500 al año por este riesgo específico\".*",
        "tables": [
          {
            "headers": [
              "Term",
              "Acronym",
              "Formula",
              "What It Represents"
            ],
            "rows": [
              [
                "**Exposure Factor**",
                "EF",
                "—",
                "Percentage of the asset lost in a single event (0–100%)"
              ],
              [
                "**Single Loss Expectancy**",
                "SLE",
                "`Asset Value × EF`",
                "Dollar value of a single loss event"
              ],
              [
                "**Annualized Rate of Occurrence**",
                "ARO",
                "`1 / years between events`",
                "How many times per year the threat is expected to occur"
              ],
              [
                "**Annualized Loss Expectancy**",
                "ALE",
                "`SLE × ARO`",
                "Expected total financial loss per year from this risk"
              ]
            ]
          }
        ],
        "list_items": [
          "A vendor offers a better server (crashes once every 10 years) for $50,000 with a 3-year life.",
          "New ALE = $5,000 × 0.1 = $500/year → saves $2,000/year",
          "Extra cost = $40,000 → would take 20 years to break even → **not worth it**",
          "This is how quantitative analysis drives real-world investment decisions."
        ],
        "spanish_words": [],
        "raw_content": "**Quantitative risk analysis** uses numerical measurements and statistical methods to evaluate risk. It produces concrete financial estimates for each risk.\n\n> *Es como el actuario de una aseguradora que calcula exactamente cuánto dinero espera perder por accidentes de tráfico al año basándose en estadísticas. No dice \"es un riesgo alto\", dice \"esperamos perder $2,500 al año por este riesgo específico\".*\n\n### The 4 Core Components\n\n| Term | Acronym | Formula | What It Represents |\n| --- | --- | --- | --- |\n| **Exposure Factor** | EF | — | Percentage of the asset lost in a single event (0–100%) |\n| **Single Loss Expectancy** | SLE | `Asset Value × EF` | Dollar value of a single loss event |\n| **Annualized Rate of Occurrence** | ARO | `1 / years between events` | How many times per year the threat is expected to occur |\n| **Annualized Loss Expectancy** | ALE | `SLE × ARO` | Expected total financial loss per year from this risk |\n\n### Worked Example\n\nA company has a server worth **$10,000**. The exposure factor for a server crash is **50%**, and the server crashes **once every 2 years**.\n\n```\nSLE = $10,000 × 50%       = $5,000\nARO = 1 / 2 years         = 0.5\nALE = $5,000 × 0.5        = $2,500/year\n```\n\n- A vendor offers a better server (crashes once every 10 years) for $50,000 with a 3-year life.\n- New ALE = $5,000 × 0.1 = $500/year → saves $2,000/year\n- Extra cost = $40,000 → would take 20 years to break even → **not worth it**\n- This is how quantitative analysis drives real-world investment decisions."
      },
      {
        "name": "Risk Management Strategies",
        "definition": "Once risks are identified and analyzed, the organization must decide how to treat each risk. There are four primary strategies.",
        "analogy": "*Imagina que descubres que el techo de tu casa tiene una gotera: puedes ignorarla si es mínima (aceptar), contratar un seguro (transferir), mudarte de casa para evitar el problema (evitar), o reparar el techo ahora (mitigar). Cada opción tiene un costo y una justificación.*",
        "tables": [
          {
            "headers": [
              "Strategy",
              "What It Means",
              "Common Methods"
            ],
            "rows": [
              [
                "**Transfer (Sharing)**",
                "Shift financial responsibility to another party",
                "Insurance policies, contract indemnity clauses"
              ],
              [
                "**Accept**",
                "Acknowledge the risk and take no action to prevent it",
                "Exemption (excluded from a rule), Exception (avoids rule under specific conditions)"
              ],
              [
                "**Avoid**",
                "Change plans to eliminate the risk entirely",
                "Not launching a risky product, not operating in an unstable region"
              ],
              [
                "**Mitigate**",
                "Reduce the likelihood or impact of the risk",
                "Safety training, cybersecurity controls, redundancy systems"
              ]
            ]
          }
        ],
        "list_items": [
          "**Transfer** does not eliminate the risk — it shifts the *financial consequences*. Reputational risk stays with the original party.",
          "**Accept → Exemption**: The party is excluded from a rule entirely and operates without its protections.",
          "**Accept → Exception**: The party is normally subject to the rule but avoids it under specific defined conditions.",
          "**Avoidance** is chosen when the risk is too severe to accept or transfer.",
          "**Mitigation** is the *most common* strategy in practice."
        ],
        "spanish_words": [],
        "raw_content": "Once risks are identified and analyzed, the organization must decide **how to treat each risk**. There are four primary strategies.\n\n> *Imagina que descubres que el techo de tu casa tiene una gotera: puedes ignorarla si es mínima (aceptar), contratar un seguro (transferir), mudarte de casa para evitar el problema (evitar), o reparar el techo ahora (mitigar). Cada opción tiene un costo y una justificación.*\n\n### The 4 Strategies\n\n| Strategy | What It Means | Common Methods |\n| --- | --- | --- |\n| **Transfer (Sharing)** | Shift financial responsibility to another party | Insurance policies, contract indemnity clauses |\n| **Accept** | Acknowledge the risk and take no action to prevent it | Exemption (excluded from a rule), Exception (avoids rule under specific conditions) |\n| **Avoid** | Change plans to eliminate the risk entirely | Not launching a risky product, not operating in an unstable region |\n| **Mitigate** | Reduce the likelihood or impact of the risk | Safety training, cybersecurity controls, redundancy systems |\n\n### Key Notes on Each Strategy\n\n- **Transfer** does not eliminate the risk — it shifts the *financial consequences*. Reputational risk stays with the original party.\n- **Accept → Exemption**: The party is excluded from a rule entirely and operates without its protections.\n- **Accept → Exception**: The party is normally subject to the rule but avoids it under specific defined conditions.\n- **Avoidance** is chosen when the risk is too severe to accept or transfer.\n- **Mitigation** is the *most common* strategy in practice."
      },
      {
        "name": "Risk Monitoring and Reporting",
        "definition": "Risk monitoring and risk reporting are the final and ongoing steps of the risk management lifecycle. They ensure the process remains dynamic and responsive over time.",
        "analogy": "*Son como los instrumentos del panel de un avión y el reporte que el piloto envía a la torre de control: los instrumentos monitorean en tiempo real si algo cambia (velocidad, altitud, temperatura), y el reporte comunica el estado del vuelo a quienes necesitan saberlo para tomar decisiones.*",
        "tables": [
          {
            "headers": [
              "Term",
              "Definition"
            ],
            "rows": [
              [
                "**Residual Risk**",
                "The risk that *remains after* mitigation, transference, or acceptance controls have been applied to the inherent risk"
              ],
              [
                "**Control Risk**",
                "A measure of how much *less effective* a security control has become over time (e.g., antivirus becoming less effective as malware evolves)"
              ]
            ]
          },
          {
            "headers": [
              "Purpose",
              "Why It Matters"
            ],
            "rows": [
              [
                "**Informed Decision Making**",
                "Guides resource allocation, timelines, and strategy"
              ],
              [
                "**Risk Mitigation**",
                "Enables proactive action before risks escalate"
              ],
              [
                "**Stakeholder Communication**",
                "Manages expectations; demonstrates that risks are under control"
              ],
              [
                "**Regulatory Compliance**",
                "In many industries, risk reporting is legally required"
              ]
            ]
          }
        ],
        "list_items": [
          "**Tracks** identified risks continuously throughout the project or operation lifecycle.",
          "**Identifies** residual risks and new emerging risks.",
          "**Evaluates** whether current risk response plans are working.",
          "Communicates results of risk identification, assessment, response, and monitoring to **stakeholders**.",
          "Delivered as dashboards, heat maps, or formal reports.",
          "Serves four key organizational purposes:"
        ],
        "spanish_words": [],
        "raw_content": "**Risk monitoring** and **risk reporting** are the final and ongoing steps of the risk management lifecycle. They ensure the process remains dynamic and responsive over time.\n\n> *Son como los instrumentos del panel de un avión y el reporte que el piloto envía a la torre de control: los instrumentos monitorean en tiempo real si algo cambia (velocidad, altitud, temperatura), y el reporte comunica el estado del vuelo a quienes necesitan saberlo para tomar decisiones.*\n\n### Risk Monitoring\n\n- **Tracks** identified risks continuously throughout the project or operation lifecycle.\n- **Identifies** residual risks and new emerging risks.\n- **Evaluates** whether current risk response plans are working.\n\n**Two important sub-concepts identified during monitoring:**\n\n| Term | Definition |\n| --- | --- |\n| **Residual Risk** | The risk that *remains after* mitigation, transference, or acceptance controls have been applied to the inherent risk |\n| **Control Risk** | A measure of how much *less effective* a security control has become over time (e.g., antivirus becoming less effective as malware evolves) |\n\n### Risk Reporting\n\n- Communicates results of risk identification, assessment, response, and monitoring to **stakeholders**.\n- Delivered as dashboards, heat maps, or formal reports.\n- Serves four key organizational purposes:\n\n| Purpose | Why It Matters |\n| --- | --- |\n| **Informed Decision Making** | Guides resource allocation, timelines, and strategy |\n| **Risk Mitigation** | Enables proactive action before risks escalate |\n| **Stakeholder Communication** | Manages expectations; demonstrates that risks are under control |\n| **Regulatory Compliance** | In many industries, risk reporting is legally required |"
      }
    ]
  },
  {
    "sectionId": "S10",
    "sectionTitle": "Section 10: Third-party Vendor Risks",
    "concepts": [
      {
        "name": "Third-party Vendor Risk — Overview",
        "definition": "Third-party vendor risk refers to the potential security and operational challenges introduced by external entities that an organization collaborates with — vendors, suppliers, or service providers.",
        "analogy": "*Es como cuando contratas a un contratista para remodelar tu casa: él tiene acceso a tu hogar, tus llaves, quizás a tu caja fuerte. Si ese contratista no es de confianza, tú eres el que pierde.*",
        "tables": [
          {
            "headers": [
              "Objective",
              "Description"
            ],
            "rows": [
              [
                "**OBJ 2.2**",
                "Explain common threat vectors and attack surfaces"
              ],
              [
                "**OBJ 2.3**",
                "Explain various types of vulnerabilities"
              ],
              [
                "**OBJ 5.3**",
                "Explain processes for third-party risk assessment and management"
              ]
            ]
          }
        ],
        "list_items": [
          "A hardware provider whose components contain vulnerabilities",
          "A software supplier whose application has a hidden backdoor",
          "A service provider (MSP) with access to sensitive data but weak security protocols"
        ],
        "spanish_words": [],
        "raw_content": "**Third-party vendor risk** refers to the potential security and operational challenges introduced by external entities that an organization collaborates with — vendors, suppliers, or service providers.\n\n> *Es como cuando contratas a un contratista para remodelar tu casa: él tiene acceso a tu hogar, tus llaves, quizás a tu caja fuerte. Si ese contratista no es de confianza, tú eres el que pierde.*\n\nIntegrating external partners expands the **attack surface** of the organization. Risks span a wide spectrum:\n\n- A hardware provider whose components contain vulnerabilities\n- A software supplier whose application has a hidden backdoor\n- A service provider (MSP) with access to sensitive data but weak security protocols\n\n**Relevant exam objectives:**\n\n| Objective   | Description                                                      |\n| ----------- | ---------------------------------------------------------------- |\n| **OBJ 2.2** | Explain common threat vectors and attack surfaces                |\n| **OBJ 2.3** | Explain various types of vulnerabilities                         |\n| **OBJ 5.3** | Explain processes for third-party risk assessment and management |"
      },
      {
        "name": "Supply Chain Risks",
        "definition": "The supply chain encompasses hardware manufacturers, software developers, and service providers. Each represents a potential vulnerability point.",
        "analogy": "*Imagina que un fabricante de autos compra piezas de cien proveedores distintos. Si uno de esos proveedores entrega piezas defectuosas o manipuladas, el auto completo puede fallar — aunque el fabricante haya hecho todo bien.*",
        "tables": [],
        "list_items": [
          "Devices like routers and switches are composed of **hundreds of components** sourced from various suppliers",
          "Any component can be tampered with or sourced from untrustworthy vendors",
          "Counterfeit or aftermarket hardware may contain modified code, embedded **Trojans**, or remote access backdoors",
          "The **Trusted Foundry Program** (used by the DoD) ensures chips are manufactured securely and perform only their designated functions",
          "Software used in enterprise networks must be:",
          "**Open-source** software allows full source code review",
          "Even proprietary software (e.g., Microsoft Office) can be scanned with vulnerability assessment tools",
          "Are their cybersecurity protocols robust enough to protect your data?",
          "Can they support a full **incident response** or **forensic investigation** if breached?",
          "Do they maintain confidentiality and integrity of your data?"
        ],
        "spanish_words": [],
        "raw_content": "The **supply chain** encompasses hardware manufacturers, software developers, and service providers. Each represents a potential vulnerability point.\n\n> *Imagina que un fabricante de autos compra piezas de cien proveedores distintos. Si uno de esos proveedores entrega piezas defectuosas o manipuladas, el auto completo puede fallar — aunque el fabricante haya hecho todo bien.*\n\n### Hardware Manufacturers\n\n- Devices like routers and switches are composed of **hundreds of components** sourced from various suppliers\n- Any component can be tampered with or sourced from untrustworthy vendors\n- Counterfeit or aftermarket hardware may contain modified code, embedded **Trojans**, or remote access backdoors\n- The **Trusted Foundry Program** (used by the DoD) ensures chips are manufactured securely and perform only their designated functions\n\n> ⚠️ **Budget-friendly secondary market hardware** carries a high risk of counterfeit or tampered devices — always source from trusted, verified suppliers.\n\n### Software Developers and Providers\n\n- Software used in enterprise networks must be:\n  - Properly **licensed** and **authentic**\n  - Free of known **vulnerabilities or bugs**\n  - Scanned with **antivirus/anti-malware** before deployment\n- **Open-source** software allows full source code review\n- Even proprietary software (e.g., Microsoft Office) can be scanned with vulnerability assessment tools\n\n### Service Providers and MSPs\n\n**Managed Service Providers (MSPs)** often have access to sensitive organizational data and infrastructure. Key security questions to ask:\n\n- Are their cybersecurity protocols robust enough to protect your data?\n- Can they support a full **incident response** or **forensic investigation** if breached?\n- Do they maintain confidentiality and integrity of your data?\n\n> *Un MSP es como un administrador de condominios: tiene llave de todos los apartamentos. Si ese administrador es descuidado, todos los residentes están en riesgo.*\n\n⚠️ **Core principle:** An organization is only as strong as the **weakest link** in its supply chain."
      },
      {
        "name": "Supply Chain Attacks",
        "definition": "A supply chain attack targets a weaker link in the supply chain to gain access to a more secure primary target — rather than attacking a well-fortified organization directly.",
        "analogy": "*En lugar de intentar romper la puerta blindada del banco, el atacante compra la empresa que fabrica las cajas fuertes y les pone una cerradura falsa desde la fábrica.*",
        "tables": [
          {
            "headers": [
              "Component",
              "Amount"
            ],
            "rows": [
              [
                "Manufacturing subsidies on US soil",
                "$39 billion"
              ],
              [
                "Investment tax credit (manufacturing equipment)",
                "25%"
              ],
              [
                "Research and workforce training",
                "$13 billion"
              ]
            ]
          },
          {
            "headers": [
              "Pillar",
              "Description"
            ],
            "rows": [
              [
                "**Vendor Due Diligence**",
                "Rigorous evaluation of vendor cybersecurity posture and their own supply chain practices"
              ],
              [
                "**Regular Monitoring and Audits**",
                "Continuous monitoring and periodic audits for early detection of suspicious activity"
              ],
              [
                "**Education and Collaboration**",
                "Sharing threat intelligence with the broader ecosystem; joint defense strategies"
              ],
              [
                "**Contractual Safeguards**",
                "Embedding cybersecurity requirements and legal repercussions into vendor contracts"
              ]
            ]
          }
        ],
        "list_items": [
          "**Best case:** Device malfunction and network failures",
          "**Worst case:** An always-on backdoor installed in your own network hardware",
          "Attackers infiltrated the **SolarWinds Orion** software update system",
          "Distributed malware to thousands of clients — including US government agencies — via a legitimate software update",
          "Bypassed even the most robust perimeter defenses by exploiting trusted update infrastructure"
        ],
        "spanish_words": [],
        "raw_content": "A **supply chain attack** targets a weaker link in the supply chain to gain access to a more secure primary target — rather than attacking a well-fortified organization directly.\n\n> *En lugar de intentar romper la puerta blindada del banco, el atacante compra la empresa que fabrica las cajas fuertes y les pone una cerradura falsa desde la fábrica.*\n\n### Hardware-based Supply Chain Attacks\n\n**Chip Washing** — Involves repackaging a microchip with a less expensive or malware-embedded counterfeit chip.\n\n- **Best case:** Device malfunction and network failures\n- **Worst case:** An always-on backdoor installed in your own network hardware\n\n**Pre-installed Rootkits** — Deliberate embedding of rootkits in devices by overseas suppliers, providing backdoor access once the device is activated on the network.\n\n### Software-based Supply Chain Attacks — SolarWinds (2021)\n\nThe **SolarWinds attack** is one of the most significant software-based supply chain attacks on record:\n\n- Attackers infiltrated the **SolarWinds Orion** software update system\n- Distributed malware to thousands of clients — including US government agencies — via a legitimate software update\n- Bypassed even the most robust perimeter defenses by exploiting trusted update infrastructure\n\n> *SolarWinds demostró que no tienes que romper la puerta principal. Si infectas al cartero, el veneno llega a miles de hogares al mismo tiempo.*\n\n### The CHIPS Act (2022)\n\nThe **Chips and Science Act of 2022** is a US federal statute that allocated approximately **$280 billion** to reduce reliance on foreign-made semiconductors:\n\n| Component                                       | Amount      |\n| ----------------------------------------------- | ----------- |\n| Manufacturing subsidies on US soil              | $39 billion |\n| Investment tax credit (manufacturing equipment) | 25%         |\n| Research and workforce training                 | $13 billion |\n\nGoal: strengthen the domestic semiconductor supply chain and minimize geopolitical supply chain risk.\n\n### Mitigating Supply Chain Attacks — Four Pillars\n\n| Pillar                            | Description                                                                              |\n| --------------------------------- | ---------------------------------------------------------------------------------------- |\n| **Vendor Due Diligence**          | Rigorous evaluation of vendor cybersecurity posture and their own supply chain practices |\n| **Regular Monitoring and Audits** | Continuous monitoring and periodic audits for early detection of suspicious activity     |\n| **Education and Collaboration**   | Sharing threat intelligence with the broader ecosystem; joint defense strategies         |\n| **Contractual Safeguards**        | Embedding cybersecurity requirements and legal repercussions into vendor contracts       |"
      },
      {
        "name": "Vendor Assessment",
        "definition": "A vendor assessment is a structured process to evaluate the security, reliability, and performance of external entities before and during a partnership.",
        "analogy": "*Es como hacer una auditoría antes de contratar a un contador externo para tu empresa: no basta con que diga que es confiable, necesitas ver sus certificaciones, su historial y sus prácticas.*",
        "tables": [
          {
            "headers": [
              "Entity Type",
              "Description",
              "Example"
            ],
            "rows": [
              [
                "**Vendor**",
                "Provides goods or services",
                "Microsoft, Oracle (software)"
              ],
              [
                "**Supplier**",
                "Produces or delivers product components",
                "Chip manufacturer, memory supplier"
              ],
              [
                "**MSP**",
                "Manages IT services on behalf of the organization",
                "AWS, Google Cloud"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "A **vendor assessment** is a structured process to evaluate the security, reliability, and performance of external entities before and during a partnership.\n\n> *Es como hacer una auditoría antes de contratar a un contador externo para tu empresa: no basta con que diga que es confiable, necesitas ver sus certificaciones, su historial y sus prácticas.*\n\n### Primary Entities Subject to Vendor Assessment\n\n| Entity Type  | Description                                       | Example                            |\n| ------------ | ------------------------------------------------- | ---------------------------------- |\n| **Vendor**   | Provides goods or services                        | Microsoft, Oracle (software)       |\n| **Supplier** | Produces or delivers product components           | Chip manufacturer, memory supplier |\n| **MSP**      | Manages IT services on behalf of the organization | AWS, Google Cloud                  |\n\n### Penetration Testing of Vendors\n\nSimulated cyberattacks against vendor systems to identify exploitable vulnerabilities — validates that the vendor takes their own cybersecurity posture seriously, since **their risk becomes your risk**.\n\n### Right to Audit Clause\n\nA contractual provision granting the organization the right to **evaluate the vendor's internal processes** and verify compliance with agreed-upon standards.\n\n> *\"Confía pero verifica\" — el Right to Audit Clause es el mecanismo formal para hacer eso con tus proveedores.*\n\n### Internal Audits\n\nThe vendor's own **self-assessment** against industry standards. Evidence of consistent internal audits signals commitment to security — but may be insufficient without external validation.\n\n### Independent Assessments\n\nEvaluations conducted by **neutral third-party entities** (e.g., ISO) with no stake in the organization's operations. Provides objective validation against global benchmarks.\n\n> *Un auditor interno del banco puede pasar por alto problemas. Un auditor externo independiente no tiene razón para hacerlo.*\n\n### Supply Chain Analysis\n\nA deep-dive into the vendor's **entire supply chain** — assessing the security and reliability of every link, not just the vendor's direct practices. Scrutinizes all source locations for counterfeit parts or tampered products."
      },
      {
        "name": "Vendor Selection and Monitoring",
        "definition": "Choosing the right vendor is similar to hiring: you evaluate competency, cultural fit, and alignment with organizational goals.",
        "analogy": "*Un cuestionario de vendor es como una aplicación de trabajo detallada: permite comparar a todos los candidatos con el mismo conjunto de criterios.*",
        "tables": [],
        "list_items": [
          "Financial stability",
          "Operational history",
          "Client testimonials",
          "On-the-ground security practices"
        ],
        "spanish_words": [],
        "raw_content": "Choosing the right vendor is similar to hiring: you evaluate competency, cultural fit, and alignment with organizational goals.\n\n### Vendor Selection Process\n\n**Due Diligence** — A rigorous evaluation that goes beyond credentials, covering:\n\n- Financial stability\n- Operational history\n- Client testimonials\n- On-the-ground security practices\n\n**Conflict of Interest** — Arises when personal or financial relationships could bias the vendor selection process. Organizations must require disclosures and exclude conflicted parties from decision-making.\n\n**Vendor Questionnaires** — Comprehensive documents completed by potential vendors covering operations, capabilities, and compliance. Enables standardized comparison across vendors.\n\n> *Un cuestionario de vendor es como una aplicación de trabajo detallada: permite comparar a todos los candidatos con el mismo conjunto de criterios.*\n\n**Rules of Engagement** — Guidelines that govern the terms of interaction with potential vendors: communication protocols, data sharing policies, and negotiation boundaries.\n\n### Vendor Monitoring\n\nOnce selected, monitoring ensures the vendor consistently meets organizational expectations over time.\n\n**Performance Reviews** — Periodic evaluations of vendor deliverables against contracted standards and objectives.\n\n**Feedback Loops** — Two-way communication channels where both parties share feedback, driving collaborative improvement over time."
      },
      {
        "name": "Contracts and Agreements",
        "definition": "Contracts are the formal framework that defines the rights, obligations, and expectations of both parties in a business relationship.",
        "analogy": "*Un contrato es el mapa de la relación: sin él, cada parte puede tener una idea diferente del destino. Con él, ambos saben exactamente a dónde van y quién conduce.*",
        "tables": [
          {
            "headers": [
              "Agreement",
              "Acronym",
              "Purpose"
            ],
            "rows": [
              [
                "**Basic Contract**",
                "—",
                "Establishes roles, responsibilities, and repercussions; foundation of any business relationship"
              ],
              [
                "**Service Level Agreement**",
                "SLA",
                "Defines the standard of service a client can expect; specifies penalties for non-compliance"
              ],
              [
                "**Memorandum of Agreement**",
                "MOA",
                "Formal document outlining specific responsibilities and roles of collaborating parties"
              ],
              [
                "**Memorandum of Understanding**",
                "MOU",
                "Less binding; declares mutual intent to explore a partnership without fine details"
              ],
              [
                "**Master Service Agreement**",
                "MSA",
                "Blanket agreement covering general terms across multiple transactions/proyects; supplemented by individual work orders"
              ],
              [
                "**Statement of Work**",
                "SOW / Scope of Work",
                "Specifies deliverables, timelines, and milestones for a particular project. Provides detailed information about specific task, deliverables, and tomelines for a project."
              ],
              [
                "**Non-disclosure Agreement**",
                "NDA",
                "Ensures sensitive information shared during negotiations remains confidential between parties"
              ],
              [
                "**Business Partnership Agreement**",
                "BPA",
                "Outlines profit sharing, decision-making, ownership of IP, and exit strategies for joint ventures"
              ]
            ]
          },
          {
            "headers": [
              "",
              "MOA",
              "MOU"
            ],
            "rows": [
              [
                "**Binding level**",
                "More formal and binding",
                "Less binding"
              ],
              [
                "**Scope**",
                "Specific responsibilities and roles",
                "Broad mutual intent"
              ],
              [
                "**Use case**",
                "Joint campaigns with defined ownership",
                "Exploring a future partnership"
              ]
            ]
          }
        ],
        "list_items": [
          "The **MSA** sets overarching terms (payment structure, confidentiality) for a recurring relationship",
          "The **SOW** provides project-specific details (deliverables, timeline, milestones) under the MSA umbrella"
        ],
        "spanish_words": [],
        "raw_content": "Contracts are the formal framework that defines the rights, obligations, and expectations of both parties in a business relationship.\n\n> *Un contrato es el mapa de la relación: sin él, cada parte puede tener una idea diferente del destino. Con él, ambos saben exactamente a dónde van y quién conduce.*\n\n### Types of Contracts and Agreements\n\n| Agreement                          | Acronym             | Purpose                                                                                                                                                                   |\n| ---------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Basic Contract**                 | —                   | Establishes roles, responsibilities, and repercussions; foundation of any business relationship                                                                           |\n| **Service Level Agreement**        | SLA                 | Defines the standard of service a client can expect; specifies penalties for non-compliance                                                                               |\n| **Memorandum of Agreement**        | MOA                 | Formal document outlining specific responsibilities and roles of collaborating parties                                                                                    |\n| **Memorandum of Understanding**    | MOU                 | Less binding; declares mutual intent to explore a partnership without fine details                                                                                        |\n| **Master Service Agreement**       | MSA                 | Blanket agreement covering general terms across multiple transactions/proyects; supplemented by individual work orders                                                    |\n| **Statement of Work**              | SOW / Scope of Work | Specifies deliverables, timelines, and milestones for a particular project. Provides detailed information about specific task, deliverables, and tomelines for a project. |\n| **Non-disclosure Agreement**       | NDA                 | Ensures sensitive information shared during negotiations remains confidential between parties                                                                             |\n| **Business Partnership Agreement** | BPA                 | Outlines profit sharing, decision-making, ownership of IP, and exit strategies for joint ventures                                                                         |\n\n> Combination example: \n> \n> NDA\n> └── MSA (marco general)\n>     ├── SLA (estándares de servicio)\n>     ├── SOW Proyecto 1 — Pen Test Q1\n>     ├── SOW Proyecto 2 — Auditoría Q2\n>     └── SOW Proyecto 3 — Incident Response Q3\n> \n> Y si en algún momento las dos empresas deciden hacer algo juntas (co-desarrollar una herramienta, por ejemplo), agregan un BPA encima de todo eso para regular la propiedad compartida del resultado.\n> \n> \n\n### Key Distinctions\n\n**MOA vs. MOU:**\n\n|                   | MOA                                    | MOU                            |\n| ----------------- | -------------------------------------- | ------------------------------ |\n| **Binding level** | More formal and binding                | Less binding                   |\n| **Scope**         | Specific responsibilities and roles    | Broad mutual intent            |\n| **Use case**      | Joint campaigns with defined ownership | Exploring a future partnership |\n\n**MSA vs. SOW:**\n\n- The **MSA** sets overarching terms (payment structure, confidentiality) for a recurring relationship\n- The **SOW** provides project-specific details (deliverables, timeline, milestones) under the MSA umbrella\n\n> *El MSA es el contrato marco de una empresa con su proveedor de servicios. El SOW es la orden de trabajo específica para cada proyecto individual.*\n\n**NDA Use Case:**\nA startup sharing proprietary technology with a potential investor would require an NDA to prevent that information from reaching competitors — even if the investor ultimately declines the opportunity.\n\n**BPA / Joint Venture:**\nUsed when two entities pool resources for mutual benefit. Clarifies intellectual property ownership, revenue distribution, and exit strategies."
      },
      {
        "name": "Key Terms",
        "definition": "Third-party vendor risk: Security and operational risks introduced by external entities in the supply chain",
        "analogy": "",
        "tables": [
          {
            "headers": [
              "Term",
              "Definition"
            ],
            "rows": [
              [
                "**Third-party vendor risk**",
                "Security and operational risks introduced by external entities in the supply chain"
              ],
              [
                "**Supply chain attack**",
                "Attack targeting a weaker supplier to compromise a more secure primary target"
              ],
              [
                "**Chip washing**",
                "Repackaging a microchip with a counterfeit or malware-embedded chip"
              ],
              [
                "**Trusted Foundry Program**",
                "DoD program ensuring chips are manufactured securely and free of unauthorized functions"
              ],
              [
                "**SolarWinds attack**",
                "2021 software supply chain attack distributing malware via a legitimate software update"
              ],
              [
                "**CHIPS Act (2022)**",
                "US legislation investing ~$280B to onshore semiconductor manufacturing and reduce supply chain risk"
              ],
              [
                "**Vendor assessment**",
                "Process to evaluate vendor security, reliability, and compliance"
              ],
              [
                "**Right to audit clause**",
                "Contractual right to inspect a vendor's internal processes and verify compliance"
              ],
              [
                "**Penetration testing (vendor)**",
                "Simulated cyberattack against vendor systems to validate their security posture"
              ],
              [
                "**MSP**",
                "Managed Service Provider — manages IT services on behalf of another organization"
              ],
              [
                "**SLA**",
                "Service Level Agreement — defines expected service standards and penalties for non-compliance"
              ],
              [
                "**MOA**",
                "Memorandum of Agreement — formal, specific roles and responsibilities between parties"
              ],
              [
                "**MOU**",
                "Memorandum of Understanding — non-binding declaration of intent to collaborate"
              ],
              [
                "**MSA**",
                "Master Service Agreement — blanket terms across multiple transactions"
              ],
              [
                "**SOW**",
                "Statement of Work — project-specific deliverables, timelines, and milestones"
              ],
              [
                "**NDA**",
                "Non-disclosure Agreement — confidentiality commitment for sensitive shared information"
              ],
              [
                "**BPA**",
                "Business Partnership Agreement — governs joint ventures including IP ownership and profit sharing"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "| Term                             | Definition                                                                                          |\n| -------------------------------- | --------------------------------------------------------------------------------------------------- |\n| **Third-party vendor risk**      | Security and operational risks introduced by external entities in the supply chain                  |\n| **Supply chain attack**          | Attack targeting a weaker supplier to compromise a more secure primary target                       |\n| **Chip washing**                 | Repackaging a microchip with a counterfeit or malware-embedded chip                                 |\n| **Trusted Foundry Program**      | DoD program ensuring chips are manufactured securely and free of unauthorized functions             |\n| **SolarWinds attack**            | 2021 software supply chain attack distributing malware via a legitimate software update             |\n| **CHIPS Act (2022)**             | US legislation investing ~$280B to onshore semiconductor manufacturing and reduce supply chain risk |\n| **Vendor assessment**            | Process to evaluate vendor security, reliability, and compliance                                    |\n| **Right to audit clause**        | Contractual right to inspect a vendor's internal processes and verify compliance                    |\n| **Penetration testing (vendor)** | Simulated cyberattack against vendor systems to validate their security posture                     |\n| **MSP**                          | Managed Service Provider — manages IT services on behalf of another organization                    |\n| **SLA**                          | Service Level Agreement — defines expected service standards and penalties for non-compliance       |\n| **MOA**                          | Memorandum of Agreement — formal, specific roles and responsibilities between parties               |\n| **MOU**                          | Memorandum of Understanding — non-binding declaration of intent to collaborate                      |\n| **MSA**                          | Master Service Agreement — blanket terms across multiple transactions                               |\n| **SOW**                          | Statement of Work — project-specific deliverables, timelines, and milestones                        |\n| **NDA**                          | Non-disclosure Agreement — confidentiality commitment for sensitive shared information              |\n| **BPA**                          | Business Partnership Agreement — governs joint ventures including IP ownership and profit sharing   |"
      }
    ]
  },
  {
    "sectionId": "S11",
    "sectionTitle": "Section 11: Governance and Compliance",
    "concepts": [
      {
        "name": "Governance Overview",
        "definition": "The strategic leadership, structures, and processes that ensure an organization's IT infrastructure aligns with its business objectives — encompassing rules, responsibilities, and practices that guide IT resource management.",
        "analogy": "*Es como la constitución de un país: no dice exactamente cómo hacer cada cosa del día a día, pero establece los principios, valores y estructuras de poder que determinan cómo se toman todas las demás decisiones.*",
        "tables": [
          {
            "headers": [
              "Output",
              "Description"
            ],
            "rows": [
              [
                "**Guidelines**",
                "Non-mandatory recommended approaches for handling situations"
              ],
              [
                "**Policies**",
                "High-level commitments and intentions (e.g., data protection, ethical conduct)"
              ],
              [
                "**Standards**",
                "Specific mandatory rules tied to a policy; often set by industry or regulatory bodies"
              ],
              [
                "**Procedures**",
                "Step-by-step instructions that implement policies and standards consistently"
              ]
            ]
          },
          {
            "headers": [
              "Area",
              "Purpose"
            ],
            "rows": [
              [
                "**Risk Management**",
                "Identify, assess, and manage potential security risks"
              ],
              [
                "**Strategic Alignment**",
                "Ensure IT strategy supports business objectives"
              ],
              [
                "**Resource Management**",
                "Enable efficient and effective use of IT assets"
              ],
              [
                "**Performance Measurement**",
                "Monitor and measure IT process effectiveness"
              ]
            ]
          }
        ],
        "list_items": [
          "**Technology** — e.g., adoption of cloud services requires updated access policies",
          "**Regulations** — e.g., new data protection laws require policy revisions",
          "**Cultural shifts** — e.g., rise of remote work requires new secure access procedures"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** The strategic leadership, structures, and processes that ensure an organization's IT infrastructure aligns with its business objectives — encompassing rules, responsibilities, and practices that guide IT resource management.\n\n> *Es como la constitución de un país: no dice exactamente cómo hacer cada cosa del día a día, pero establece los principios, valores y estructuras de poder que determinan cómo se toman todas las demás decisiones.*\n\nGovernance is the **first component of the GRC triad** — Governance, Risk, and Compliance.\n\n### What Governance Shapes\n\n| Output | Description |\n| --- | --- |\n| **Guidelines** | Non-mandatory recommended approaches for handling situations |\n| **Policies** | High-level commitments and intentions (e.g., data protection, ethical conduct) |\n| **Standards** | Specific mandatory rules tied to a policy; often set by industry or regulatory bodies |\n| **Procedures** | Step-by-step instructions that implement policies and standards consistently |\n\n### Why Governance Matters\n\n| Area | Purpose |\n| --- | --- |\n| **Risk Management** | Identify, assess, and manage potential security risks |\n| **Strategic Alignment** | Ensure IT strategy supports business objectives |\n| **Resource Management** | Enable efficient and effective use of IT assets |\n| **Performance Measurement** | Monitor and measure IT process effectiveness |\n\n### Monitoring and Revision\n\nGovernance frameworks must evolve as three forces change:\n\n- **Technology** — e.g., adoption of cloud services requires updated access policies\n- **Regulations** — e.g., new data protection laws require policy revisions\n- **Cultural shifts** — e.g., rise of remote work requires new secure access procedures\n\n> *Imagina una empresa de software que en 2015 se mueve a la nube, en 2018 enfrenta el GDPR y en 2020 adopta el trabajo remoto. Su marco de gobernanza debe actualizarse en cada una de esas olas, o quedará obsoleto y expuesto.*"
      },
      {
        "name": "Governance Structures",
        "definition": "The organizational bodies and frameworks that hold decision-making authority and accountability over IT and security operations.",
        "analogy": "*Son las diferentes \"ramas del gobierno\" de una empresa: así como un país tiene ejecutivo, legislativo y judicial, una organización tiene junta directiva, comités especializados y entes regulatorios externos que la vigilan.*",
        "tables": [
          {
            "headers": [
              "Structure",
              "Description",
              "Example"
            ],
            "rows": [
              [
                "**Board of Directors**",
                "Elected by shareholders; sets strategic direction, establishes policies, makes major decisions",
                "Tech company board with industry experts guiding market strategy"
              ],
              [
                "**Committees**",
                "Subgroups of the board focused on specific areas; allow detailed attention to complex domains",
                "Audit committee, governance committee, **cybersecurity committee**"
              ],
              [
                "**Government Entities**",
                "External bodies that establish laws and regulations organizations must comply with",
                "FTC (consumer protection), SEC (financial), CISA (cybersecurity)"
              ],
              [
                "**Centralized Structure**",
                "Decision-making concentrated at top management; consistent policies, slower local response",
                "Large corporation maintaining uniform policies across all branches"
              ],
              [
                "**Decentralized Structure**",
                "Decision-making distributed throughout the organization; faster local decisions, risk of inconsistency",
                "Tech startup encouraging departmental autonomy and innovation"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The organizational bodies and frameworks that hold decision-making authority and accountability over IT and security operations.\n\n> *Son las diferentes \"ramas del gobierno\" de una empresa: así como un país tiene ejecutivo, legislativo y judicial, una organización tiene junta directiva, comités especializados y entes regulatorios externos que la vigilan.*\n\n### Structure Types\n\n| Structure | Description | Example |\n| --- | --- | --- |\n| **Board of Directors** | Elected by shareholders; sets strategic direction, establishes policies, makes major decisions | Tech company board with industry experts guiding market strategy |\n| **Committees** | Subgroups of the board focused on specific areas; allow detailed attention to complex domains | Audit committee, governance committee, **cybersecurity committee** |\n| **Government Entities** | External bodies that establish laws and regulations organizations must comply with | FTC (consumer protection), SEC (financial), CISA (cybersecurity) |\n| **Centralized Structure** | Decision-making concentrated at top management; consistent policies, slower local response | Large corporation maintaining uniform policies across all branches |\n| **Decentralized Structure** | Decision-making distributed throughout the organization; faster local decisions, risk of inconsistency | Tech startup encouraging departmental autonomy and innovation |\n\n> *La diferencia entre centralizado y descentralizado es como comparar una cadena de restaurantes (todos los Big Mac saben igual porque todo se decide desde arriba) versus una cooperativa de chefs locales (cada uno decide su menú, lo que genera creatividad pero también variabilidad).*"
      },
      {
        "name": "Policies",
        "definition": "High-level guidelines that outline an organization's commitments and intentions toward specific actions — they define the \"what\" and \"why,\" not the step-by-step \"how.\"",
        "analogy": "*Una política es como las reglas del hogar: \"en esta casa no se fuma.\" No te dice exactamente dónde poner el letrero o qué pasa si alguien viola la regla — eso lo definen los estándares y procedimientos. La política solo establece la intención.*",
        "tables": [
          {
            "headers": [
              "Policy",
              "Purpose"
            ],
            "rows": [
              [
                "**Acceptable Use Policy (AUP)**",
                "Defines do's and don'ts for users interacting with organizational IT systems; prevents legal issues and security threats"
              ],
              [
                "**Information Security Policy**",
                "Governs protection of information assets (data classification, access control, encryption, physical security)"
              ],
              [
                "**Business Continuity Policy**",
                "Outlines how critical operations will continue during/after a disruption"
              ],
              [
                "**Disaster Recovery Policy**",
                "Specifies how IT systems and data will be recovered after a disaster (backups, restoration steps, alternate sites)"
              ],
              [
                "**Incident Response Policy**",
                "Plans for detecting, reporting, assessing, responding to, and learning from security incidents"
              ],
              [
                "**SDLC Policy**",
                "Guides software development through all stages: requirements → design → coding → testing → deployment → maintenance; includes secure coding standards"
              ],
              [
                "**Change Management Policy**",
                "Controls how changes to IT systems are requested, approved, implemented, and reviewed to minimize disruption"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** High-level guidelines that outline an organization's commitments and intentions toward specific actions — they define the \"what\" and \"why,\" not the step-by-step \"how.\"\n\n> *Una política es como las reglas del hogar: \"en esta casa no se fuma.\" No te dice exactamente dónde poner el letrero o qué pasa si alguien viola la regla — eso lo definen los estándares y procedimientos. La política solo establece la intención.*\n\n### Key Policy Types\n\n| Policy | Purpose |\n| --- | --- |\n| **Acceptable Use Policy (AUP)** | Defines do's and don'ts for users interacting with organizational IT systems; prevents legal issues and security threats |\n| **Information Security Policy** | Governs protection of information assets (data classification, access control, encryption, physical security) |\n| **Business Continuity Policy** | Outlines how critical operations will continue during/after a disruption |\n| **Disaster Recovery Policy** | Specifies how IT systems and data will be recovered after a disaster (backups, restoration steps, alternate sites) |\n| **Incident Response Policy** | Plans for detecting, reporting, assessing, responding to, and learning from security incidents |\n| **SDLC Policy** | Guides software development through all stages: requirements → design → coding → testing → deployment → maintenance; includes secure coding standards |\n| **Change Management Policy** | Controls how changes to IT systems are requested, approved, implemented, and reviewed to minimize disruption |\n\n> *El AUP es como el contrato que firmas cuando te conectas al Wi-Fi de un hotel: define qué puedes y qué no puedes hacer con ese recurso compartido. Viola las reglas y pierdes el acceso — o algo peor.*"
      },
      {
        "name": "Standards",
        "definition": "Specific, often mandatory rules that must be followed to implement a policy — more granular than policies and frequently defined by an industry body or regulatory authority.",
        "analogy": "*Si la política dice \"protege los datos del cliente,\" el estándar dice exactamente cómo: \"usa AES-256 para datos en reposo y TLS 1.2 o superior para datos en tránsito.\" La política pone el objetivo; el estándar pone el método obligatorio.*",
        "tables": [
          {
            "headers": [
              "Model",
              "Description",
              "Typical Use"
            ],
            "rows": [
              [
                "**DAC** (Discretionary Access Control)",
                "Resource owner decides who can access it",
                "Standard enterprise environments"
              ],
              [
                "**MAC** (Mandatory Access Control)",
                "Labels/classifications determine access",
                "Government, military"
              ],
              [
                "**RBAC** (Role-Based Access Control)",
                "Access based on job roles within the org",
                "Most corporate environments"
              ]
            ]
          },
          {
            "headers": [
              "Standard",
              "Typical Use Case"
            ],
            "rows": [
              [
                "**AES** (Advanced Encryption Standard)",
                "Data at rest — strong security, efficient performance"
              ],
              [
                "**RSA**",
                "Data in transit — public key infrastructure for secure communications"
              ]
            ]
          }
        ],
        "list_items": [
          "Minimum length: **8–12 characters**",
          "Mix of: uppercase, lowercase, numbers, special characters",
          "Regular rotation: every **60–90 days**",
          "Prohibit reuse for a defined number of iterations",
          "Use **password hashing and salting** to protect stored credentials",
          "**Least Privilege** — users get only the minimum access needed to do their job",
          "**Separation of Duties** — no single individual has complete control over a critical process",
          "**Perimeter security:** fences, gates, guards",
          "**Surveillance:** CCTV systems",
          "**Access control mechanisms:** biometric scanners, keycards",
          "**Environmental controls:** fire suppression, HVAC, power redundancy",
          "**Secure areas:** server rooms and data centers with stricter access and monitoring"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** Specific, often mandatory rules that must be followed to implement a policy — more granular than policies and frequently defined by an industry body or regulatory authority.\n\n> *Si la política dice \"protege los datos del cliente,\" el estándar dice exactamente cómo: \"usa AES-256 para datos en reposo y TLS 1.2 o superior para datos en tránsito.\" La política pone el objetivo; el estándar pone el método obligatorio.*\n\n### Password Standards\n\nRequirements that enforce password robustness and resistance to brute-force attacks:\n\n- Minimum length: **8–12 characters**\n- Mix of: uppercase, lowercase, numbers, special characters\n- Regular rotation: every **60–90 days**\n- Prohibit reuse for a defined number of iterations\n- Use **password hashing and salting** to protect stored credentials\n\n### Access Control Standards\n\n| Model | Description | Typical Use |\n| --- | --- | --- |\n| **DAC** (Discretionary Access Control) | Resource owner decides who can access it | Standard enterprise environments |\n| **MAC** (Mandatory Access Control) | Labels/classifications determine access | Government, military |\n| **RBAC** (Role-Based Access Control) | Access based on job roles within the org | Most corporate environments |\n\nKey principles enforced by access control standards:\n\n- **Least Privilege** — users get only the minimum access needed to do their job\n- **Separation of Duties** — no single individual has complete control over a critical process\n\n### Physical Security Standards\n\n- **Perimeter security:** fences, gates, guards\n- **Surveillance:** CCTV systems\n- **Access control mechanisms:** biometric scanners, keycards\n- **Environmental controls:** fire suppression, HVAC, power redundancy\n- **Secure areas:** server rooms and data centers with stricter access and monitoring\n\n### Encryption Standards\n\n| Standard | Typical Use Case |\n| --- | --- |\n| **AES** (Advanced Encryption Standard) | Data at rest — strong security, efficient performance |\n| **RSA** | Data in transit — public key infrastructure for secure communications |"
      },
      {
        "name": "Procedures",
        "definition": "A checklist or step-by-step guide for detecting and responding to a specific type of incident — ensures consistency and speed regardless of who executes it.",
        "analogy": "*Si la política dice \"haz backups\" y el estándar dice \"usa AES-256,\" el procedimiento dice: cada lunes a las 2 AM, ejecuta el script X, verifica el checksum, almacena en el servidor Y, y manda el reporte al equipo Z. Es la receta completa.*",
        "tables": [
          {
            "headers": [
              "Phase",
              "Key Activities"
            ],
            "rows": [
              [
                "**Onboarding**",
                "Orientation, role-specific training, system access provisioning, team integration"
              ],
              [
                "**Offboarding**",
                "Retrieve company property, **disable system access**, conduct exit interview, gather feedback"
              ]
            ]
          }
        ],
        "list_items": [
          "Always plan for **rollback** if the change causes negative results",
          "Schedule disruptive changes during a designated **maintenance window**",
          "Test significant changes before full deployment",
          "Cybersecurity incident response (e.g., ransomware, phishing, data breach)",
          "IT operations (e.g., server failure, DDoS)",
          "Customer service escalations"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** Step-by-step instructions that describe exactly how to perform a specific task consistently and in compliance with policies and standards — the operational \"how-to.\"\n\n> *Si la política dice \"haz backups\" y el estándar dice \"usa AES-256,\" el procedimiento dice: cada lunes a las 2 AM, ejecuta el script X, verifica el checksum, almacena en el servidor Y, y manda el reporte al equipo Z. Es la receta completa.*\n\n### Change Management Procedures\n\nA systematic approach to implementing organizational or IT changes with minimal disruption:\n\n1. Identify the need for change and assess potential impacts\n2. Develop an implementation plan (who, what, resources)\n3. Implement in stages to allow issues to surface gradually\n4. Conduct a post-change review and document lessons learned\n\nAdditional considerations:\n- Always plan for **rollback** if the change causes negative results\n- Schedule disruptive changes during a designated **maintenance window**\n- Test significant changes before full deployment\n\n### Onboarding and Offboarding Procedures\n\n| Phase | Key Activities |\n| --- | --- |\n| **Onboarding** | Orientation, role-specific training, system access provisioning, team integration |\n| **Offboarding** | Retrieve company property, **disable system access**, conduct exit interview, gather feedback |\n\n> *El offboarding es tan crítico como el onboarding desde el punto de vista de seguridad. Un empleado que se va con acceso activo a los sistemas es una puerta abierta — intencional o no.*\n\n### Playbooks\n\n* **Definition:** A checklist or step-by-step guide for detecting and responding to a specific type of incident — ensures consistency and speed regardless of who executes it.\n\nPlaybooks are used for:\n- Cybersecurity incident response (e.g., ransomware, phishing, data breach)\n- IT operations (e.g., server failure, DDoS)\n- Customer service escalations\n\nPlaybooks typically include: resources required · steps to execute · expected outcomes · escalation paths"
      },
      {
        "name": "Governance Considerations",
        "definition": "The regulatory, legal, industry-specific, and geographical factors that an organization must account for when designing and maintaining its governance framework.",
        "analogy": "*Gobernar una empresa global es como jugar ajedrez en varios tableros simultáneamente: las reglas del juego cambian dependiendo del país, la industria y hasta la ciudad donde operas.*",
        "tables": [
          {
            "headers": [
              "Scope",
              "Example"
            ],
            "rows": [
              [
                "**Local**",
                "City zoning laws prohibiting certain business operations in residential areas"
              ],
              [
                "**Regional**",
                "**CCPA** (California) — consumer data rights for California residents"
              ],
              [
                "**National**",
                "**ADA** (USA) — accessibility requirements for employees and customers"
              ],
              [
                "**Global**",
                "**GDPR** (EU) — applies to any company worldwide that handles EU citizen data"
              ]
            ]
          }
        ],
        "list_items": [
          "Non-compliance leads to: **fines, sanctions, reputational damage**",
          "Example: **GDPR** (EU) — governs data collection, storage, and use for EU citizens worldwide",
          "Key legal risk: **litigation** from businesses, customers, or employees",
          "Causes: breach of contract, product liability, employment disputes",
          "Example: **Agile methodologies** (Scrum, Kanban) in software development — not legally required but industry standard",
          "Organizations that ignore industry standards risk competitive disadvantage"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** The regulatory, legal, industry-specific, and geographical factors that an organization must account for when designing and maintaining its governance framework.\n\n> *Gobernar una empresa global es como jugar ajedrez en varios tableros simultáneamente: las reglas del juego cambian dependiendo del país, la industria y hasta la ciudad donde operas.*\n\n### Regulatory Considerations\n\nOrganizations must comply with regulations that vary by industry and location:\n\n- Non-compliance leads to: **fines, sanctions, reputational damage**\n- Example: **GDPR** (EU) — governs data collection, storage, and use for EU citizens worldwide\n\n### Legal Considerations\n\nCover areas beyond regulation: contract law, intellectual property, corporate law, employment law.\n\n- Key legal risk: **litigation** from businesses, customers, or employees\n- Causes: breach of contract, product liability, employment disputes\n\n### Industry Considerations\n\nIndustry-specific standards and best practices that may not be legally binding but set competitive expectations:\n\n- Example: **Agile methodologies** (Scrum, Kanban) in software development — not legally required but industry standard\n- Organizations that ignore industry standards risk competitive disadvantage\n\n### Geographical Considerations\n\n| Scope | Example |\n| --- | --- |\n| **Local** | City zoning laws prohibiting certain business operations in residential areas |\n| **Regional** | **CCPA** (California) — consumer data rights for California residents |\n| **National** | **ADA** (USA) — accessibility requirements for employees and customers |\n| **Global** | **GDPR** (EU) — applies to any company worldwide that handles EU citizen data |\n\n> *El GDPR es el ejemplo perfecto de una regulación global: aunque tu empresa esté en Costa Rica, si tienes un cliente en Alemania y manejas sus datos, el GDPR te aplica. Las fronteras físicas ya no definen los límites legales.*\n\n⚠️ Key challenge: **Conflict of laws** — different jurisdictions may have contradictory requirements; organizations need deep legal understanding of each market they operate in."
      },
      {
        "name": "Compliance",
        "definition": "The adherence to laws, regulations, standards, and internal policies applicable to an organization's operations — demonstrated through monitoring and reporting.",
        "analogy": "*Compliance es como la revisión técnica vehicular: no basta con que tu carro funcione bien; tienes que poder demostrárselo a una autoridad externa con documentación y evidencia. Sin el sticker, no circula.*",
        "tables": [
          {
            "headers": [
              "Type",
              "Who Sees It",
              "Example"
            ],
            "rows": [
              [
                "**Internal**",
                "Compliance department, internal auditors",
                "Financial institution reporting all transactions above threshold to internal compliance officer"
              ],
              [
                "**External**",
                "Regulatory bodies, third-party auditors, customers",
                "Pharmaceutical company submitting Good Manufacturing Practice (GMP) reports to the FDA"
              ]
            ]
          },
          {
            "headers": [
              "Component",
              "Description"
            ],
            "rows": [
              [
                "**Due Diligence**",
                "Exhaustive review of operations to identify potential compliance risks"
              ],
              [
                "**Due Care**",
                "The steps taken to mitigate identified compliance risks"
              ],
              [
                "**Attestation**",
                "Formal declaration by a responsible party that processes and controls are compliant"
              ],
              [
                "**Acknowledgement**",
                "Recognition and acceptance of compliance requirements by all relevant parties"
              ],
              [
                "**Internal Monitoring**",
                "Regular internal review of operations against internal policies"
              ],
              [
                "**External Monitoring**",
                "Third-party audits to verify compliance with external regulations or standards"
              ]
            ]
          }
        ],
        "list_items": [
          "**Streamlined data collection** — eliminates manual gathering and human error",
          "**Real-time monitoring** — flags violations as they occur (e.g., unauthorized access to patient records)",
          "**Automated reporting** — generates compliance reports on-demand (e.g., flagging suspicious bank transactions for AML review)"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** The adherence to laws, regulations, standards, and internal policies applicable to an organization's operations — demonstrated through monitoring and reporting.\n\n> *Compliance es como la revisión técnica vehicular: no basta con que tu carro funcione bien; tienes que poder demostrárselo a una autoridad externa con documentación y evidencia. Sin el sticker, no circula.*\n\n### Compliance Reporting\n\n| Type | Who Sees It | Example |\n| --- | --- | --- |\n| **Internal** | Compliance department, internal auditors | Financial institution reporting all transactions above threshold to internal compliance officer |\n| **External** | Regulatory bodies, third-party auditors, customers | Pharmaceutical company submitting Good Manufacturing Practice (GMP) reports to the FDA |\n\n### Compliance Monitoring Components\n\n| Component | Description |\n| --- | --- |\n| **Due Diligence** | Exhaustive review of operations to identify potential compliance risks |\n| **Due Care** | The steps taken to mitigate identified compliance risks |\n| **Attestation** | Formal declaration by a responsible party that processes and controls are compliant |\n| **Acknowledgement** | Recognition and acceptance of compliance requirements by all relevant parties |\n| **Internal Monitoring** | Regular internal review of operations against internal policies |\n| **External Monitoring** | Third-party audits to verify compliance with external regulations or standards |\n\n> *Due diligence es revisar el historial de crédito antes de firmar el préstamo. Due care es no gastar más de lo que puedes pagar una vez que ya lo tienes. Uno es investigar el riesgo; el otro es actuar responsablemente para mitigarlo.*\n\n### Role of Automation in Compliance\n\nAutomated compliance systems provide:\n- **Streamlined data collection** — eliminates manual gathering and human error\n- **Real-time monitoring** — flags violations as they occur (e.g., unauthorized access to patient records)\n- **Automated reporting** — generates compliance reports on-demand (e.g., flagging suspicious bank transactions for AML review)"
      },
      {
        "name": "Non-Compliance Consequences",
        "definition": "The legal, financial, reputational, and operational penalties an organization faces when it fails to adhere to applicable laws, regulations, or contractual obligations.",
        "analogy": "*Incumplir con las regulaciones de ciberseguridad es como manejar sin seguro: mientras no pase nada, parece que ahorras dinero. Pero cuando ocurre el accidente, el costo es exponencialmente mayor — y en algunos casos, te quitan la licencia para siempre.*",
        "tables": [
          {
            "headers": [
              "Consequence",
              "Description",
              "Real-World Example"
            ],
            "rows": [
              [
                "**Fines**",
                "Monetary penalties from regulatory bodies",
                "GDPR: up to **€20M or 4% of global annual turnover** (whichever is higher); British Airways fined £183M for a breach affecting 500,000 customers"
              ],
              [
                "**Sanctions**",
                "Operational restrictions or bans imposed by regulators",
                "Chinese government sanctioned companies for violating cybersecurity law — warnings, fines, income confiscation"
              ],
              [
                "**Reputational Damage**",
                "Long-term public trust loss; stock price decline",
                "Equifax 2017 breach: 147M records exposed, stock dropped **30%+** in weeks"
              ],
              [
                "**Loss of License**",
                "Revocation of operating license or certification",
                "NY DFS revoked a Bitcoin company's license for failing to meet cybersecurity requirements"
              ],
              [
                "**Contractual Impacts**",
                "Breach of client or partner contracts; legal disputes, penalties, or termination",
                "Software firm violating data protection regulations sued by clients; contracts terminated"
              ]
            ]
          }
        ],
        "list_items": [
          "Understanding and adhering to all relevant laws and regulations",
          "Implementing robust cybersecurity measures",
          "Regularly reviewing and updating compliance programs",
          "Maintaining audit trails and documentation for attestation"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** The legal, financial, reputational, and operational penalties an organization faces when it fails to adhere to applicable laws, regulations, or contractual obligations.\n\n> *Incumplir con las regulaciones de ciberseguridad es como manejar sin seguro: mientras no pase nada, parece que ahorras dinero. Pero cuando ocurre el accidente, el costo es exponencialmente mayor — y en algunos casos, te quitan la licencia para siempre.*\n\n### Consequence Types\n\n| Consequence | Description | Real-World Example |\n| --- | --- | --- |\n| **Fines** | Monetary penalties from regulatory bodies | GDPR: up to **€20M or 4% of global annual turnover** (whichever is higher); British Airways fined £183M for a breach affecting 500,000 customers |\n| **Sanctions** | Operational restrictions or bans imposed by regulators | Chinese government sanctioned companies for violating cybersecurity law — warnings, fines, income confiscation |\n| **Reputational Damage** | Long-term public trust loss; stock price decline | Equifax 2017 breach: 147M records exposed, stock dropped **30%+** in weeks |\n| **Loss of License** | Revocation of operating license or certification | NY DFS revoked a Bitcoin company's license for failing to meet cybersecurity requirements |\n| **Contractual Impacts** | Breach of client or partner contracts; legal disputes, penalties, or termination | Software firm violating data protection regulations sued by clients; contracts terminated |\n\n> *Equifax es el caso de estudio perfecto de consecuencias en cascada: primero el daño reputacional, luego las demandas, luego las investigaciones regulatorias, y finalmente una multa de $575 millones con la FTC. No cumplir no solo duele hoy — duele por años.*\n\n### Prevention\n\nOrganizations avoid non-compliance consequences by:\n- Understanding and adhering to all relevant laws and regulations\n- Implementing robust cybersecurity measures\n- Regularly reviewing and updating compliance programs\n- Maintaining audit trails and documentation for attestation"
      },
      {
        "name": "Key Terms",
        "definition": "GRC: Governance, Risk, and Compliance — the strategic triad for organizational security management",
        "analogy": "",
        "tables": [
          {
            "headers": [
              "Term",
              "Meaning"
            ],
            "rows": [
              [
                "**GRC**",
                "Governance, Risk, and Compliance — the strategic triad for organizational security management"
              ],
              [
                "**AUP**",
                "Acceptable Use Policy — defines permitted and prohibited use of IT resources"
              ],
              [
                "**SDLC**",
                "Software Development Lifecycle — structured process guiding software from concept to retirement"
              ],
              [
                "**DAC**",
                "Discretionary Access Control — owner determines access permissions"
              ],
              [
                "**MAC**",
                "Mandatory Access Control — access determined by labels/classifications"
              ],
              [
                "**RBAC**",
                "Role-Based Access Control — access determined by job role"
              ],
              [
                "**GDPR**",
                "General Data Protection Regulation — EU regulation governing personal data of EU citizens"
              ],
              [
                "**CCPA**",
                "California Consumer Privacy Act — state-level data rights for California residents"
              ],
              [
                "**ADA**",
                "Americans with Disabilities Act — national law requiring accessibility accommodations"
              ],
              [
                "**Due Diligence**",
                "Exhaustive review to identify compliance risks"
              ],
              [
                "**Due Care**",
                "Actions taken to mitigate identified risks"
              ],
              [
                "**Attestation**",
                "Formal declaration of compliance by responsible party"
              ],
              [
                "**Playbook**",
                "Step-by-step incident response or operational guide"
              ],
              [
                "**Least Privilege**",
                "Principle limiting user access to only what is needed for their role"
              ],
              [
                "**Separation of Duties**",
                "Principle preventing any single person from controlling an entire critical process"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "| Term | Meaning |\n| --- | --- |\n| **GRC** | Governance, Risk, and Compliance — the strategic triad for organizational security management |\n| **AUP** | Acceptable Use Policy — defines permitted and prohibited use of IT resources |\n| **SDLC** | Software Development Lifecycle — structured process guiding software from concept to retirement |\n| **DAC** | Discretionary Access Control — owner determines access permissions |\n| **MAC** | Mandatory Access Control — access determined by labels/classifications |\n| **RBAC** | Role-Based Access Control — access determined by job role |\n| **GDPR** | General Data Protection Regulation — EU regulation governing personal data of EU citizens |\n| **CCPA** | California Consumer Privacy Act — state-level data rights for California residents |\n| **ADA** | Americans with Disabilities Act — national law requiring accessibility accommodations |\n| **Due Diligence** | Exhaustive review to identify compliance risks |\n| **Due Care** | Actions taken to mitigate identified risks |\n| **Attestation** | Formal declaration of compliance by responsible party |\n| **Playbook** | Step-by-step incident response or operational guide |\n| **Least Privilege** | Principle limiting user access to only what is needed for their role |\n| **Separation of Duties** | Principle preventing any single person from controlling an entire critical process |"
      }
    ]
  },
  {
    "sectionId": "S12",
    "sectionTitle": "Section 12: Asset and Change Management",
    "concepts": [
      {
        "name": "Asset and Change Management Overview",
        "definition": "Asset management is the systematic process of developing, operating, maintaining, and selling assets in a cost-effective manner; change management is a structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state.",
        "analogy": "*Imagina que tu empresa es una cocina de restaurante. La gestión de activos es el inventario de cada cuchillo, olla y licuadora — quién lo tiene, dónde está y cuándo fue revisado. La gestión de cambios es el proceso formal para aprobar que el chef principal cambie la receta estrella sin que el caos se apodere de la cocina.*",
        "tables": [
          {
            "headers": [
              "Pillar",
              "Purpose",
              "Security Benefit"
            ],
            "rows": [
              [
                "**Asset Management**",
                "Identify, catalog, and monitor all digital assets",
                "Reduces vulnerabilities; ensures consistent security protocols"
              ],
              [
                "**Change Management**",
                "Control how system modifications are executed",
                "Prevents security gaps and misconfigurations from untested changes"
              ]
            ]
          },
          {
            "headers": [
              "Objective",
              "Statement"
            ],
            "rows": [
              [
                "**1.3**",
                "Explain the importance of change management processes and the impact to security"
              ],
              [
                "**4.1**",
                "Apply common security techniques to computing resources (given a scenario)"
              ],
              [
                "**4.2**",
                "Explain security implications of proper hardware, software, and data asset management"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Asset management is the systematic process of developing, operating, maintaining, and selling assets in a cost-effective manner; change management is a structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state.\n\n> *Imagina que tu empresa es una cocina de restaurante. La gestión de activos es el inventario de cada cuchillo, olla y licuadora — quién lo tiene, dónde está y cuándo fue revisado. La gestión de cambios es el proceso formal para aprobar que el chef principal cambie la receta estrella sin que el caos se apodere de la cocina.*\n\n### Why Both Matter in Cybersecurity\n\n| Pillar | Purpose | Security Benefit |\n| --- | --- | --- |\n| **Asset Management** | Identify, catalog, and monitor all digital assets | Reduces vulnerabilities; ensures consistent security protocols |\n| **Change Management** | Control how system modifications are executed | Prevents security gaps and misconfigurations from untested changes |\n\n### Objectives Covered (SY0-701)\n\n| Objective | Statement |\n| --- | --- |\n| **1.3** | Explain the importance of change management processes and the impact to security |\n| **4.1** | Apply common security techniques to computing resources (given a scenario) |\n| **4.2** | Explain security implications of proper hardware, software, and data asset management |"
      },
      {
        "name": "Acquisition and Procurement",
        "definition": "Acquisition is the act of obtaining goods and services; procurement is the broader end-to-end process of sourcing and obtaining those goods and services, including all upstream evaluation steps.",
        "analogy": "*Acquisition es el momento en que recibes la pizza en la puerta. Procurement es todo lo que pasó antes: elegir la pizzería, comparar precios, revisar ingredientes, hacer el pedido y confirmar el pago.*",
        "tables": [
          {
            "headers": [
              "Method",
              "Best For",
              "Notes"
            ],
            "rows": [
              [
                "**Company Credit Card**",
                "Low-cost, urgent items (ink, paper)",
                "Transaction limits and item types set per employee role"
              ],
              [
                "**Individual Purchase / Reimbursement**",
                "Emergency or no-card situations",
                "Employee pays out-of-pocket; submits receipts for reimbursement"
              ],
              [
                "**Purchase Order (PO)**",
                "Large or expensive acquisitions",
                "Formal document from purchasing dept; not a payment — a legally binding promise to pay"
              ]
            ]
          }
        ],
        "list_items": [
          "Alignment with company goals and budget",
          "Security and compatibility assessment against existing infrastructure",
          "Multi-level authorization (e.g., ITPR process used by the US Navy)",
          "Compatibility testing with current systems",
          "Security checks and configuration hardening",
          "End-user training on the new product",
          "Integration into existing organizational workflows"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** Acquisition is the act of obtaining goods and services; procurement is the broader end-to-end process of sourcing and obtaining those goods and services, including all upstream evaluation steps.\n\n> *Acquisition es el momento en que recibes la pizza en la puerta. Procurement es todo lo que pasó antes: elegir la pizzería, comparar precios, revisar ingredientes, hacer el pedido y confirmar el pago.*\n\n### Purchase Options\n\n| Method | Best For | Notes |\n| --- | --- | --- |\n| **Company Credit Card** | Low-cost, urgent items (ink, paper) | Transaction limits and item types set per employee role |\n| **Individual Purchase / Reimbursement** | Emergency or no-card situations | Employee pays out-of-pocket; submits receipts for reimbursement |\n| **Purchase Order (PO)** | Large or expensive acquisitions | Formal document from purchasing dept; not a payment — a legally binding promise to pay |\n\n### Internal Approval Process\n\nBefore hardware or software can be purchased, organizations commonly require:\n\n- Alignment with company goals and budget\n- Security and compatibility assessment against existing infrastructure\n- Multi-level authorization (e.g., ITPR process used by the US Navy)\n\n### Post-Procurement Steps\n\nAfter approval, the procurement process continues with:\n\n- Compatibility testing with current systems\n- Security checks and configuration hardening\n- End-user training on the new product\n- Integration into existing organizational workflows"
      },
      {
        "name": "Mobile Asset Deployments",
        "definition": "Mobile device deployment models define how personal and company-owned devices (smartphones, tablets, wearables) are managed and integrated into an organization's network.",
        "analogy": "*Elegir un modelo de dispositivos es como decidir si los empleados de un restaurante usan su propio uniforme (BYOD), uno que la empresa les da pero pueden usar en casa (COPE), o uno que elijen de un catálogo aprobado (CYOD).*",
        "tables": [
          {
            "headers": [
              "Model",
              "Full Name",
              "Who Owns the Device",
              "Personal Use Allowed",
              "Key Benefit",
              "Key Risk"
            ],
            "rows": [
              [
                "**BYOD**",
                "Bring Your Own Device",
                "Employee",
                "Yes",
                "Lower cost for employer; employee uses one device",
                "Reduced corporate control; security enforcement difficult"
              ],
              [
                "**COPE**",
                "Corporate-Owned, Personally Enabled",
                "Organization",
                "Yes",
                "Full MDM control; standardized models",
                "Higher upfront cost; employee privacy concerns"
              ],
              [
                "**CYOD**",
                "Choose Your Own Device",
                "Organization",
                "Generally No",
                "Employee has choice; limited support scope",
                "Higher upfront cost; employees may need two devices"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Mobile device deployment models define how personal and company-owned devices (smartphones, tablets, wearables) are managed and integrated into an organization's network.\n\n> *Elegir un modelo de dispositivos es como decidir si los empleados de un restaurante usan su propio uniforme (BYOD), uno que la empresa les da pero pueden usar en casa (COPE), o uno que elijen de un catálogo aprobado (CYOD).*\n\n### The Three Deployment Models\n\n| Model | Full Name | Who Owns the Device | Personal Use Allowed | Key Benefit | Key Risk |\n| --- | --- | --- | --- | --- | --- |\n| **BYOD** | Bring Your Own Device | Employee | Yes | Lower cost for employer; employee uses one device | Reduced corporate control; security enforcement difficult |\n| **COPE** | Corporate-Owned, Personally Enabled | Organization | Yes | Full MDM control; standardized models | Higher upfront cost; employee privacy concerns |\n| **CYOD** | Choose Your Own Device | Organization | Generally No | Employee has choice; limited support scope | Higher upfront cost; employees may need two devices |\n\n### Model Selection Criteria\n\nThree key factors when choosing a deployment model:\n\n1. **Cost** — BYOD has hidden security/compatibility costs; COPE/CYOD have high upfront but lower ongoing support costs\n2. **Security** — CYOD offers the best corporate control and full MDM integration\n3. **Employee Satisfaction** — BYOD and CYOD offer more choice; COPE has less employee flexibility"
      },
      {
        "name": "Asset Management — Assignment, Accounting, and Tracking",
        "definition": "A Mobile Device Management solution is a centralized platform that allows organizations to securely manage and monitor employee mobile devices, enforce corporate policies, push updates, and remotely lock or wipe devices.",
        "analogy": "*Gestionar activos tecnológicos es como administrar una biblioteca: cada libro (activo) tiene un número de catálogo, está asignado a una sección, y se registra quién lo tiene prestado y cuándo fue revisado por última vez.*",
        "tables": [
          {
            "headers": [
              "Concept",
              "Description"
            ],
            "rows": [
              [
                "**Ownership / Allocation**",
                "Each asset is formally assigned to a person or department"
              ],
              [
                "**Classification**",
                "Assets are categorized by function, value, or sensitivity to guide maintenance and replacement decisions"
              ]
            ]
          },
          {
            "headers": [
              "Concept",
              "Description"
            ],
            "rows": [
              [
                "**Asset Monitoring**",
                "Maintains an inventory of every asset — specs, location, assigned user, last serviced"
              ],
              [
                "**Asset Tracking**",
                "Extends monitoring with GPS/software tracking of physical location, status, and condition"
              ],
              [
                "**Enumeration**",
                "Identifies and counts connected assets using scanners and tools; detects unauthorized devices"
              ]
            ]
          }
        ],
        "list_items": [
          "Enforce corporate security policies across all managed devices",
          "Push software patches and applications to thousands of devices simultaneously",
          "Remotely lock or wipe a lost or stolen device",
          "Ensure consistency and standardization across a diverse device ecosystem"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** Asset management involves the systematic governance and lifecycle tracking of all organizational assets, including assignment of ownership, classification, monitoring, and enumeration of every asset from acquisition to disposal.\n\n> *Gestionar activos tecnológicos es como administrar una biblioteca: cada libro (activo) tiene un número de catálogo, está asignado a una sección, y se registra quién lo tiene prestado y cuándo fue revisado por última vez.*\n\n### Assignment and Accounting\n\n| Concept | Description |\n| --- | --- |\n| **Ownership / Allocation** | Each asset is formally assigned to a person or department |\n| **Classification** | Assets are categorized by function, value, or sensitivity to guide maintenance and replacement decisions |\n\n### Monitoring and Tracking\n\n| Concept | Description |\n| --- | --- |\n| **Asset Monitoring** | Maintains an inventory of every asset — specs, location, assigned user, last serviced |\n| **Asset Tracking** | Extends monitoring with GPS/software tracking of physical location, status, and condition |\n| **Enumeration** | Identifies and counts connected assets using scanners and tools; detects unauthorized devices |\n\n### Mobile Device Management (MDM)\n\n* **Definition:** A Mobile Device Management solution is a centralized platform that allows organizations to securely manage and monitor employee mobile devices, enforce corporate policies, push updates, and remotely lock or wipe devices.\n\n> *Un MDM es como el mando a distancia central de una sala de cine: desde un solo lugar puedes encender y apagar cada pantalla, actualizar el contenido y, si alguien se lleva una pantalla sin permiso, apagarla remotamente.*\n\n**MDM Capabilities:**\n\n- Enforce corporate security policies across all managed devices\n- Push software patches and applications to thousands of devices simultaneously\n- Remotely lock or wipe a lost or stolen device\n- Ensure consistency and standardization across a diverse device ecosystem"
      },
      {
        "name": "Asset Disposal and Decommissioning",
        "definition": "Data retention defines how long specific types of data must be stored before disposal, balancing regulatory requirements, business needs, and security risk.",
        "analogy": "*Desechar un disco duro sin sanearlo es como tirar una libreta de contraseñas en la basura sin desgarrarla. El proceso de disposición segura garantiza que nadie que encuentre ese disco pueda leer lo que había en él.*",
        "tables": [
          {
            "headers": [
              "Method",
              "How It Works",
              "Notes"
            ],
            "rows": [
              [
                "**Overwriting (Multiple Passes)**",
                "Replaces existing data with random series of bits; repeated 1, 7, or 35 times",
                "More passes = higher classification data; does not destroy the device"
              ],
              [
                "**Degaussing**",
                "Strong magnetic field disrupts magnetic domains on HDD or tape",
                "Permanently destroys data and the device's ability to store data again"
              ],
              [
                "**Secure Erase**",
                "Firmware-level purge of all data blocks",
                "Precursor to Cryptographic Erase; some flaws discovered over time"
              ],
              [
                "**Cryptographic Erase (CE)**",
                "Data is pre-encrypted; disposal destroys only the encryption keys",
                "Fastest method (30–60 seconds); device can be repurposed safely"
              ]
            ]
          }
        ],
        "list_items": [
          "Shredding, pulverizing, melting, incinerating the physical storage media",
          "Regulatory mandates (financial records, medical records)",
          "Historical analysis, trend prediction, dispute resolution",
          "Storage costs scale with volume",
          "More stored data = larger attack surface",
          "Data management complexity increases"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** Asset disposal and decommissioning is the structured process of safely retiring digital assets — including sanitizing or destroying stored data and certifying that disposal has occurred — in accordance with regulatory requirements.\n\n> *Desechar un disco duro sin sanearlo es como tirar una libreta de contraseñas en la basura sin desgarrarla. El proceso de disposición segura garantiza que nadie que encuentre ese disco pueda leer lo que había en él.*\n\n**Reference Standard:** NIST Special Publication 800-88 — *Guidelines for Media Sanitization*\n\n### Sanitization Methods\n\n| Method | How It Works | Notes |\n| --- | --- | --- |\n| **Overwriting (Multiple Passes)** | Replaces existing data with random series of bits; repeated 1, 7, or 35 times | More passes = higher classification data; does not destroy the device |\n| **Degaussing** | Strong magnetic field disrupts magnetic domains on HDD or tape | Permanently destroys data and the device's ability to store data again |\n| **Secure Erase** | Firmware-level purge of all data blocks | Precursor to Cryptographic Erase; some flaws discovered over time |\n| **Cryptographic Erase (CE)** | Data is pre-encrypted; disposal destroys only the encryption keys | Fastest method (30–60 seconds); device can be repurposed safely |\n\n### Destruction Methods\n\nUsed when sanitization is insufficient (e.g., top secret data):\n\n- Shredding, pulverizing, melting, incinerating the physical storage media\n\n### Certification\n\n* **Definition:** Certification is documented proof that data or hardware has been securely sanitized or destroyed, creating an audit trail for regulatory compliance.\n\n> *La certificación de disposición es como el recibo del depósito en un incinerador: no solo deshiciste el documento confidencial, sino que tienes prueba de cuándo, cómo y quién lo hizo.*\n\n### Data Retention\n\n* **Definition:** Data retention defines how long specific types of data must be stored before disposal, balancing regulatory requirements, business needs, and security risk.\n\n> *La retención de datos es como saber cuánto tiempo debes guardar tus declaraciones de impuestos. No guardas todo para siempre, pero tampoco botas todo de inmediato — hay plazos legales y prácticos que debes respetar.*\n\n**Why Retain Data?**\n- Regulatory mandates (financial records, medical records)\n- Historical analysis, trend prediction, dispute resolution\n\n**Why Not Retain Everything?**\n- Storage costs scale with volume\n- More stored data = larger attack surface\n- Data management complexity increases\n\n> ⚠️ **Key principle:** *The more you store, the more you must secure.*"
      },
      {
        "name": "Change Management",
        "definition": "Change management is the orchestrated strategy to transition teams, departments, or entire organizations from their existing state to a more secure and desirable future state through controlled, structured, and approved processes.",
        "analogy": "*La gestión de cambios es como solicitar un permiso de construcción antes de remodelar tu casa. No puedes simplemente tumbar una pared sin planos aprobados, un inspector, y asegurarte de que no hay tuberías o cables detrás de ella.*",
        "tables": [
          {
            "headers": [
              "Role",
              "Responsibility"
            ],
            "rows": [
              [
                "**Change Advisory Board (CAB)**",
                "Body of representatives from across the organization that evaluates, approves, and schedules proposed changes"
              ],
              [
                "**Change Owner**",
                "Individual or team that initiates the change request; advocates for the change and details its benefits and challenges"
              ],
              [
                "**Stakeholder**",
                "Any person with a vested interest in the change — directly impacted or involved in its assessment/implementation"
              ]
            ]
          }
        ],
        "list_items": [
          "What could go wrong?",
          "What are the immediate and long-term effects on operations, reputation, and users?",
          "Are there unforeseen challenges?"
        ],
        "spanish_words": [],
        "raw_content": "* **Definition:** Change management is the orchestrated strategy to transition teams, departments, or entire organizations from their existing state to a more secure and desirable future state through controlled, structured, and approved processes.\n\n> *La gestión de cambios es como solicitar un permiso de construcción antes de remodelar tu casa. No puedes simplemente tumbar una pared sin planos aprobados, un inspector, y asegurarte de que no hay tuberías o cables detrás de ella.*\n\n### Key Roles in Change Management\n\n| Role | Responsibility |\n| --- | --- |\n| **Change Advisory Board (CAB)** | Body of representatives from across the organization that evaluates, approves, and schedules proposed changes |\n| **Change Owner** | Individual or team that initiates the change request; advocates for the change and details its benefits and challenges |\n| **Stakeholder** | Any person with a vested interest in the change — directly impacted or involved in its assessment/implementation |\n\n### Impact Analysis\n\nBefore implementing any change, answer:\n\n- What could go wrong?\n- What are the immediate and long-term effects on operations, reputation, and users?\n- Are there unforeseen challenges?"
      },
      {
        "name": "Change Management Process Steps",
        "definition": "The change management process is a structured five-step workflow that governs how proposed changes are evaluated, executed, validated, and recorded across an organization.",
        "analogy": "*El proceso de gestión de cambios es como una receta de cocina profesional: no improvisas, sigues pasos en orden, verificas el resultado al final y anotas lo que aprendiste para la próxima vez.*",
        "tables": [
          {
            "headers": [
              "Step",
              "Name",
              "Description"
            ],
            "rows": [
              [
                "1",
                "**Prepare**",
                "Assess the current state; identify inefficiencies; gather resources; engage stakeholders"
              ],
              [
                "2",
                "**Create a Vision**",
                "Define the desired future state and explain the reasons for the change; build stakeholder buy-in"
              ],
              [
                "3",
                "**Implement**",
                "Execute the plan; conduct training; communicate continuously; address concerns"
              ],
              [
                "4",
                "**Verify**",
                "Measure effectiveness against objectives; use surveys, metrics, and interviews; address discrepancies"
              ],
              [
                "5",
                "**Document**",
                "Create a historical record of the change — what was done, when, and why"
              ]
            ]
          },
          {
            "headers": [
              "Practice",
              "Purpose"
            ],
            "rows": [
              [
                "**Scheduled Maintenance Windows**",
                "Pre-defined time slots for changes to minimize disruption (e.g., Saturdays midnight–4 a.m.)"
              ],
              [
                "**Backout Plan**",
                "Predetermined rollback strategy if the change fails; returns systems to their previous stable state"
              ],
              [
                "**Testing Results**",
                "Post-implementation validation that desired outcomes were achieved and no new issues were introduced"
              ],
              [
                "**Standard Operating Procedures (SOPs)**",
                "Step-by-step documented instructions ensuring consistency, reducing errors across implementations"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** The change management process is a structured five-step workflow that governs how proposed changes are evaluated, executed, validated, and recorded across an organization.\n\n> *El proceso de gestión de cambios es como una receta de cocina profesional: no improvisas, sigues pasos en orden, verificas el resultado al final y anotas lo que aprendiste para la próxima vez.*\n\n### The Five Steps\n\n| Step | Name | Description |\n| --- | --- | --- |\n| 1 | **Prepare** | Assess the current state; identify inefficiencies; gather resources; engage stakeholders |\n| 2 | **Create a Vision** | Define the desired future state and explain the reasons for the change; build stakeholder buy-in |\n| 3 | **Implement** | Execute the plan; conduct training; communicate continuously; address concerns |\n| 4 | **Verify** | Measure effectiveness against objectives; use surveys, metrics, and interviews; address discrepancies |\n| 5 | **Document** | Create a historical record of the change — what was done, when, and why |\n\n### Critical Supporting Practices\n\n| Practice | Purpose |\n| --- | --- |\n| **Scheduled Maintenance Windows** | Pre-defined time slots for changes to minimize disruption (e.g., Saturdays midnight–4 a.m.) |\n| **Backout Plan** | Predetermined rollback strategy if the change fails; returns systems to their previous stable state |\n| **Testing Results** | Post-implementation validation that desired outcomes were achieved and no new issues were introduced |\n| **Standard Operating Procedures (SOPs)** | Step-by-step documented instructions ensuring consistency, reducing errors across implementations |"
      },
      {
        "name": "Technical Implications of Changes",
        "definition": "Technical implications of changes refer to the broad downstream effects a single system modification can have across interconnected systems, configurations, applications, and security controls.",
        "analogy": "*Cambiar una configuración en un sistema corporativo es como mover una pieza en un móvil colgante: aunque solo tocas una parte, todo lo demás se mueve. Tienes que saber qué está conectado a qué antes de jalar cualquier hilo.*",
        "tables": [
          {
            "headers": [
              "Element",
              "Description"
            ],
            "rows": [
              [
                "**Allow Lists**",
                "Specifies entities permitted to access a resource; must be reviewed before any change"
              ],
              [
                "**Deny Lists / Block Lists**",
                "Specifies entities blocked from a resource; adding/removing IPs can inadvertently expose or restrict services"
              ],
              [
                "**Restricted Activities**",
                "Certain operations (e.g., shutting down a sensitive server) may be off-limits; must be identified before a change is approved"
              ],
              [
                "**Downtime**",
                "Even minor changes risk causing downtime; estimate impact and schedule within maintenance windows"
              ],
              [
                "**Service / Application Restarts**",
                "Required for many changes; can disrupt active users, cause data loss in transit, or create processing backlogs"
              ],
              [
                "**Legacy Applications**",
                "Older software is less flexible and more sensitive to changes; minor updates elsewhere can cause crashes"
              ],
              [
                "**Dependencies**",
                "Modern systems are interconnected; a change in one area can cascade across multiple systems and partner architectures"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Technical implications of changes refer to the broad downstream effects a single system modification can have across interconnected systems, configurations, applications, and security controls.\n\n> *Cambiar una configuración en un sistema corporativo es como mover una pieza en un móvil colgante: aunque solo tocas una parte, todo lo demás se mueve. Tienes que saber qué está conectado a qué antes de jalar cualquier hilo.*\n\n### Key Technical Considerations\n\n| Element | Description |\n| --- | --- |\n| **Allow Lists** | Specifies entities permitted to access a resource; must be reviewed before any change |\n| **Deny Lists / Block Lists** | Specifies entities blocked from a resource; adding/removing IPs can inadvertently expose or restrict services |\n| **Restricted Activities** | Certain operations (e.g., shutting down a sensitive server) may be off-limits; must be identified before a change is approved |\n| **Downtime** | Even minor changes risk causing downtime; estimate impact and schedule within maintenance windows |\n| **Service / Application Restarts** | Required for many changes; can disrupt active users, cause data loss in transit, or create processing backlogs |\n| **Legacy Applications** | Older software is less flexible and more sensitive to changes; minor updates elsewhere can cause crashes |\n| **Dependencies** | Modern systems are interconnected; a change in one area can cascade across multiple systems and partner architectures |"
      },
      {
        "name": "Documenting Changes",
        "definition": "Documenting changes is the process of creating and maintaining clear records of all implemented changes — including version control, updated diagrams, revised policies, and closed change tickets — to ensure accountability and provide a reference for future operations.",
        "analogy": "*Documentar un cambio es como llevar la bitácora de un barco: no importa cuánto confíes en tu memoria, el capitán que viene después de ti necesita saber exactamente qué ruta se tomó, qué ocurrió y qué decisiones se tomaron en el camino.*",
        "tables": [
          {
            "headers": [
              "Component",
              "Purpose"
            ],
            "rows": [
              [
                "**Version Control**",
                "Tracks and manages changes to documents, software, and files; allows rollback to a previous stable state"
              ],
              [
                "**Updated Diagrams**",
                "Network and system diagrams must reflect the new state post-change; outdated diagrams cause misconfigurations"
              ],
              [
                "**Revised Policies and Procedures**",
                "If a change reveals gaps or issues, update SOPs to prevent recurrence — continuous improvement"
              ],
              [
                "**Updated Change Requests / Trouble Tickets**",
                "Closes the loop; provides a clear timeline, informs stakeholders, and creates a historical audit record"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "* **Definition:** Documenting changes is the process of creating and maintaining clear records of all implemented changes — including version control, updated diagrams, revised policies, and closed change tickets — to ensure accountability and provide a reference for future operations.\n\n> *Documentar un cambio es como llevar la bitácora de un barco: no importa cuánto confíes en tu memoria, el capitán que viene después de ti necesita saber exactamente qué ruta se tomó, qué ocurrió y qué decisiones se tomaron en el camino.*\n\n### Documentation Components\n\n| Component | Purpose |\n| --- | --- |\n| **Version Control** | Tracks and manages changes to documents, software, and files; allows rollback to a previous stable state |\n| **Updated Diagrams** | Network and system diagrams must reflect the new state post-change; outdated diagrams cause misconfigurations |\n| **Revised Policies and Procedures** | If a change reveals gaps or issues, update SOPs to prevent recurrence — continuous improvement |\n| **Updated Change Requests / Trouble Tickets** | Closes the loop; provides a clear timeline, informs stakeholders, and creates a historical audit record |\n\n> ⚠️ **Common mistake:** Believing you'll \"remember\" the changes without writing them down. In enterprise-scale networks spanning multiple continents, undocumented changes directly cause misconfigurations and team misunderstandings."
      },
      {
        "name": "Key Terms",
        "definition": "Asset Management: Systematic governance of organizational assets across their entire lifecycle",
        "analogy": "",
        "tables": [
          {
            "headers": [
              "Term",
              "Definition"
            ],
            "rows": [
              [
                "**Asset Management**",
                "Systematic governance of organizational assets across their entire lifecycle"
              ],
              [
                "**Change Management**",
                "Structured process to implement system changes in a controlled, approved manner"
              ],
              [
                "**BYOD**",
                "Bring Your Own Device — employee uses personal device for work"
              ],
              [
                "**COPE**",
                "Corporate-Owned, Personally Enabled — company device with personal use allowed"
              ],
              [
                "**CYOD**",
                "Choose Your Own Device — employee selects from a pre-approved company device list"
              ],
              [
                "**MDM**",
                "Mobile Device Management — centralized platform for managing and securing mobile devices"
              ],
              [
                "**CAB**",
                "Change Advisory Board — cross-organizational body that evaluates and approves proposed changes"
              ],
              [
                "**Change Owner**",
                "Individual or team initiating and advocating for a proposed change"
              ],
              [
                "**Stakeholder**",
                "Any person vested in or affected by a proposed change"
              ],
              [
                "**Impact Analysis**",
                "Pre-change assessment of potential risks, disruptions, and downstream effects"
              ],
              [
                "**Backout Plan**",
                "Rollback strategy to restore systems to their previous state if a change fails"
              ],
              [
                "**SOP**",
                "Standard Operating Procedure — step-by-step instructions for executing a specific task"
              ],
              [
                "**Sanitization**",
                "Process of making data inaccessible and irretrievable from a storage medium"
              ],
              [
                "**Degaussing**",
                "Using a magnetic field to destroy data on magnetic storage media"
              ],
              [
                "**Cryptographic Erase (CE)**",
                "Sanitization by destroying encryption keys rather than the underlying data"
              ],
              [
                "**Certification**",
                "Documented proof that asset disposal or data destruction was properly completed"
              ],
              [
                "**Data Retention**",
                "Policy defining how long data must be stored before it can be disposed of"
              ],
              [
                "**Version Control**",
                "System that tracks and manages changes to files and software over time"
              ],
              [
                "**Enumeration**",
                "Identifying and counting assets connected to a network using scanners and tools"
              ],
              [
                "**Acquisition**",
                "The act of obtaining goods or services"
              ],
              [
                "**Procurement**",
                "The full end-to-end process of sourcing, evaluating, and obtaining goods or services"
              ],
              [
                "**Purchase Order (PO)**",
                "Formal document authorizing a specific purchase; a legally binding payment promise"
              ],
              [
                "**Legacy Application**",
                "Older software still in use that is sensitive to change due to limited support and flexibility"
              ],
              [
                "**Dependency**",
                "A relationship where one system or application relies on another to function correctly"
              ],
              [
                "**Allow List**",
                "A list specifying which entities are permitted to access a resource"
              ],
              [
                "**Deny List / Block List**",
                "A list specifying which entities are blocked from accessing a resource"
              ]
            ]
          }
        ],
        "list_items": [],
        "spanish_words": [],
        "raw_content": "| Term | Definition |\n| --- | --- |\n| **Asset Management** | Systematic governance of organizational assets across their entire lifecycle |\n| **Change Management** | Structured process to implement system changes in a controlled, approved manner |\n| **BYOD** | Bring Your Own Device — employee uses personal device for work |\n| **COPE** | Corporate-Owned, Personally Enabled — company device with personal use allowed |\n| **CYOD** | Choose Your Own Device — employee selects from a pre-approved company device list |\n| **MDM** | Mobile Device Management — centralized platform for managing and securing mobile devices |\n| **CAB** | Change Advisory Board — cross-organizational body that evaluates and approves proposed changes |\n| **Change Owner** | Individual or team initiating and advocating for a proposed change |\n| **Stakeholder** | Any person vested in or affected by a proposed change |\n| **Impact Analysis** | Pre-change assessment of potential risks, disruptions, and downstream effects |\n| **Backout Plan** | Rollback strategy to restore systems to their previous state if a change fails |\n| **SOP** | Standard Operating Procedure — step-by-step instructions for executing a specific task |\n| **Sanitization** | Process of making data inaccessible and irretrievable from a storage medium |\n| **Degaussing** | Using a magnetic field to destroy data on magnetic storage media |\n| **Cryptographic Erase (CE)** | Sanitization by destroying encryption keys rather than the underlying data |\n| **Certification** | Documented proof that asset disposal or data destruction was properly completed |\n| **Data Retention** | Policy defining how long data must be stored before it can be disposed of |\n| **Version Control** | System that tracks and manages changes to files and software over time |\n| **Enumeration** | Identifying and counting assets connected to a network using scanners and tools |\n| **Acquisition** | The act of obtaining goods or services |\n| **Procurement** | The full end-to-end process of sourcing, evaluating, and obtaining goods or services |\n| **Purchase Order (PO)** | Formal document authorizing a specific purchase; a legally binding payment promise |\n| **Legacy Application** | Older software still in use that is sensitive to change due to limited support and flexibility |\n| **Dependency** | A relationship where one system or application relies on another to function correctly |\n| **Allow List** | A list specifying which entities are permitted to access a resource |\n| **Deny List / Block List** | A list specifying which entities are blocked from accessing a resource |"
      }
    ]
  }
];