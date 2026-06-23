# 🛡️ CompTIA Security+ SY0-701

## Section 5: Social Engineering | Study Summary

> **Domain:** 2.0 Threats, Vulnerabilities & Mitigations · 5.0 Security Program Management & Oversight
> **Objectives:** 2.2 · 5.6

---

## Social Engineering

* **Definition:** A manipulative strategy that exploits **human psychology** rather than technical vulnerabilities to gain unauthorized access to systems, data, or physical spaces. Targets the human element through written communication, phone calls, or face-to-face interaction. Best defense: **security awareness training**.
  
  > Como un estafador de la vida real: no rompe la caja fuerte, convence al empleado del banco de que la abra por él.

---

## Motivational Triggers

* **Definition:** Psychological levers used by social engineers to convince victims to perform a malicious action. Six main triggers — often combined for greater effectiveness:

| Trigger          | Description                                                         | Example                                                                  |
| ---------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Authority**    | Victim complies because attacker appears to hold power or seniority | Attacker impersonates IT manager, IRS agent, or executive                |
| **Urgency**      | Creates time pressure to bypass normal security procedures          | "You must reset your password in the next 10 minutes or lose access"     |
| **Social Proof** | Victims act because they believe others are doing the same          | Fake reviews, shares, or endorsements driving clicks to a malicious site |
| **Scarcity**     | Limited availability forces quick, uncritical decisions             | "Only 5 spots left — sign up now" in a phishing email                    |
| **Likability**   | Attacker builds rapport and trust to lower the victim's guard       | Friendly conversation about sports, hobbies, or common interests         |
| **Fear**         | Threat of negative consequences compels immediate action            | "Pay this fine now or federal agents will come to your home"             |

> Como los trucos de los vendedores más agresivos: no te venden el producto, te venden la emoción que te hace comprarlo sin pensar.

---

## Impersonation

* **Definition:** An attack where an adversary **assumes the identity of another person** to gain unauthorized access or extract sensitive information. Effectiveness increases when the attacker has researched the organization in advance to make the false identity more convincing (e.g., knowing names, floors, departments, internal processes).
  
  > Como un actor que estudia su papel a fondo antes de salir al escenario: cuanto más detalles conoce, más convincente es la actuación.

---

## Brand Impersonation

* **Definition:** A specific form of impersonation where an attacker pretends to represent a **legitimate company or brand**, using official logos, marketing language, and visual design to make fraudulent communications or websites appear authentic. Commonly used in phishing emails and fake social media accounts.
  
  > Como imprimir un uniforme falso de una empresa famosa para que la gente confíe en ti sin cuestionarte.

---

## Typosquatting (URL Hijacking / Cybersquatting)

* **Definition:** An attack where the attacker registers a domain name that closely resembles a legitimate website but contains **deliberate typographical errors** (e.g., `gnail.com` instead of `gmail.com`, `Di0ntraining.com` instead of `Diontraining.com`). Designed to capture users who mistype URLs or click on misleading links. Also called **cousin domains**, **lookalike domains**, or **doppelganger domains**.
* Mitigation: Organizations register common misspellings of their own domains; user awareness training; monitoring for similar domain registrations.
  
  > Como abrir una tienda con un nombre casi idéntico al de la competencia, justo al lado, esperando que los clientes descuidados entren por error.

---

## Watering Hole Attack

* **Definition:** A **targeted, passive attack** where the attacker compromises a specific website or online service that the intended victim is known to visit regularly. Rather than attacking the target directly, the attacker poisons a trusted third-party resource and waits for victims to come to it. Named after the predator behavior of waiting near a water source for prey.
  
  > Como el cocodrilo que no persigue a sus presas: espera escondido en el río que sabe que los animales visitan todos los días.

---

## Pretexting

* **Definition:** A social engineering technique where the attacker **creates a fabricated scenario (pretext)** to manipulate a target into divulging sensitive information or performing actions that compromise security. The attacker typically impersonates a trusted figure (IT support, bank official, delivery company, law enforcement). Key mechanic: providing just enough plausible detail so the victim fills in the gaps themselves.
  
  > Como llamar a alguien diciendo que eres del banco y que "solo necesitas confirmar" un dato que en realidad no tienes — pero sonas tan convincente que la persona te lo da voluntariamente.

---

## Phishing

* **Definition:** A broad category of social engineering attacks that use **fraudulent communications** disguised as trusted sources to trick victims into revealing sensitive information or downloading malware. Uses mass distribution (spray and pray) with no specific targeting. Six subtypes:

| Subtype                             | Target                              | Method                                                              |
| ----------------------------------- | ----------------------------------- | ------------------------------------------------------------------- |
| **Phishing**                        | Mass / untargeted                   | Fraudulent emails to large recipient lists                          |
| **Spear Phishing**                  | Specific individual or organization | Personalized, researched email tailored to the target               |
| **Whaling**                         | High-profile executives (CEO, CFO)  | Highly crafted spear phishing targeting decision-makers             |
| **Business Email Compromise (BEC)** | Finance / HR departments            | Uses compromised or spoofed executive email to authorize fraud      |
| **Vishing**                         | Phone call recipients               | Voice calls impersonating banks, government agencies, or IT support |
| **Smishing**                        | SMS/text recipients                 | Malicious links or phone numbers delivered via text message         |

> Como la diferencia entre pescar con una red enorme (phishing), con una caña apuntando a un pez específico (spear phishing), o esperando al pez más grande del lago (whaling).

---

## Spear Phishing

* **Definition:** A highly targeted form of phishing where the attacker **researches the specific victim** beforehand to craft a personalized, believable message. Higher success rate than general phishing due to customization. Targets known individuals with verified connections to a specific organization or service.
  
  > Como una carta de extorsión personalizada: no dice "Estimado cliente", dice tu nombre, menciona tu banco específico, y referencias datos reales tuyos para que la carta parezca legítima.

---

## Whaling

* **Definition:** A form of spear phishing that specifically targets **high-value individuals** — CEOs, CFOs, board members, or senior executives. High effort, high reward. Attackers seek to abuse the executive's authority to approve large fund transfers or to use the compromised account as a launchpad for further attacks across the organization.
  
  > Como no ir a pescar peces pequeños al río, sino preparar una expedición completa para cazar una ballena: más difícil, pero el premio es incomparablemente mayor.

---

## Business Email Compromise (BEC)

* **Definition:** A sophisticated phishing attack that **takes over or spoofs a legitimate internal email account** (typically an executive) to deceive employees — usually in finance or HR — into authorizing fraudulent wire transfers, redirecting payments, or sharing sensitive data. The attack relies on the inherent trust of an internal email address. Costs businesses billions annually.
  
  > Como si alguien pudiera usar el correo de tu jefe para pedirte que hagas una transferencia urgente — y tú obedeces porque parece una instrucción legítima de quien tiene autoridad.

---

## Vishing (Voice Phishing)

* **Definition:** A phishing attack conducted over **voice calls**, where the attacker impersonates a trusted entity (bank, IRS, IT support) to manipulate victims into revealing sensitive or financial information. Particularly effective because many people find it harder to be skeptical in a live phone conversation than with an email.
  
  > Como la llamada del "banco" que dice que hay un problema con tu tarjeta y que necesita que confirmes los datos — en lugar de pedirte que entres a la app oficial.

---

## Smishing (SMS Phishing)

* **Definition:** A phishing attack delivered via **SMS text messages**, containing malicious links or phone numbers. Creates a sense of urgency to prompt the victim to act quickly without scrutinizing the message.
  
  > Como recibir un mensaje de texto que dice "Tu paquete está retenido, haz clic aquí para liberar el envío" — diseñado para que actúes antes de pensar.

---

## Phishing Indicators (Red Flags)

* **Definition:** Common characteristics that identify a potential phishing attempt:

| Indicator                    | What to Look For                                                                 |
| ---------------------------- | -------------------------------------------------------------------------------- |
| **Urgency**                  | "Act now or lose access in 4 hours"                                              |
| **Unusual Requests**         | Asking for passwords, credit cards, or SSN via email                             |
| **Mismatched URLs**          | Display text says `paypal.com` but hovering reveals `paypal.hacked.xyz`          |
| **Suspicious Email Address** | Display name looks legitimate but underlying address is `mr.weirdo578@yahoo.com` |
| **Poor Grammar / Spelling**  | Broken English, typos, inconsistent formatting                                   |

> Como revisar el billete antes de aceptarlo: hay señales claras de que algo no cuadra si sabes exactamente qué buscar.

---

## Anti-Phishing Campaign

* **Definition:** A proactive security awareness tool that combines **user training** with **simulated phishing attacks** to test and educate employees. Users who click on simulated phishing links receive immediate remedial training. Should be ongoing since threats continuously evolve. Tools available: **Trend Micro Phish Insight** (free platform).
  
  > Como hacer simulacros de incendio en el trabajo: no esperas a que haya fuego real para enseñarle a la gente cómo reaccionar.

---

## Fraud

* **Definition:** A wrongful or criminal deception intended to result in **financial or personal gain** for the attacker. Differs from direct theft in that the victim is manipulated into voluntarily handing over money or information. Most common form: **identity fraud / identity theft**.
  
  > Como el truco del timador clásico: no te roba la billetera, te convence de que se la des tú mismo.

---

## Identity Fraud / Identity Theft

* **Definition:** The unauthorized use of another person's personal information (name, SSN, date of birth) to commit crimes, open accounts, or deceive third parties. **Identity fraud** = using stolen credentials for specific transactions (e.g., charging a stolen credit card). **Identity theft** = fully assuming another person's identity to open new accounts, get jobs, or obtain benefits. CompTIA uses **identity fraud** as the preferred umbrella term for both.
  
  > Como que alguien tome tu nombre, tu cédula y tu historial para vivir una vida paralela en tu nombre, acumulando deudas que aparecerán en tu nombre.

---

## Invoice Scam

* **Definition:** A social engineering scam where a victim is tricked into **paying a fraudulent invoice** for products or services never ordered. Common tactic: attacker calls the company, uses pretexting to confirm or "correct" an order, obtains verbal agreement (recorded), ships unsolicited products, then sends an inflated invoice backed by the recording. Also conducted digitally via spear phishing emails with malware-embedded PDF invoices.
  
  > Como el vendedor que llama a tu empresa, confirma un pedido que nadie hizo realmente, y luego te manda la factura respaldada por la grabación de cuando dijiste "está bien".

---

## Influence Campaign

* **Definition:** A coordinated effort to **affect public perception or behavior** toward a specific cause, individual, or group. In cybersecurity, these are typically conducted by nation-state actors or hacktivist groups using social media platforms to spread false narratives, manipulate elections, or drive financial scams. Amplified by social media's reach and lack of oversight.
  
  > Como una campaña de propaganda digital a gran escala: no hackean sistemas, hackean opiniones.

---

## Misinformation

* **Definition:** False or inaccurate information **shared without harmful intent** — typically arising from honest mistakes, misunderstandings, or unverified claims that spread rapidly. Example: incorrect health remedies shared during the COVID-19 pandemic.
  
  > Como el rumor del vecindario que se repite de boca en boca sin que nadie lo verifique, no porque quieran hacer daño, sino porque simplemente no lo cuestionaron.

---

## Disinformation

* **Definition:** The **deliberate creation and distribution of false information** with the intent to deceive, mislead, manipulate public opinion, or undermine trust. Commonly used by nation-state actors in political influence campaigns. Example: Russian disinformation campaign during the 2016 U.S. presidential election.
  
  > Como una campaña de propaganda orquestada: alguien sabe que la información es falsa, pero la distribuye estratégicamente para cambiar lo que la gente piensa o hace.

---

## Diversion Theft

* **Definition:** Manipulating a situation or **creating a distraction** to redirect attention while theft occurs. In the digital context, commonly implemented as **DNS spoofing** — altering DNS records so users are redirected from a legitimate website to a fraudulent one that harvests credentials.
  
  > Como crear un accidente de tráfico falso mientras tu cómplice roba el camión que quedó parado en el embotellamiento.

---

## Hoax

* **Definition:** A **malicious deception** spread through social media, email, or messaging channels — often claiming false security threats or warnings. While seemingly harmless, hoaxes can cause panic, spread malware, or be used to prime victims for follow-on phishing attacks. Countered with critical thinking and fact-checking.
  
  > Como el mensaje viral que dice "reenvía esto a 10 personas o tu cuenta será eliminada" — diseñado para generar pánico y acciones impulsivas.

---

## Shoulder Surfing

* **Definition:** Observing someone's screen, keypad, or documents to capture sensitive information such as PINs, passwords, or confidential data. Does **not** require physical proximity — high-powered cameras or CCTV can enable shoulder surfing from a distance. Countered with **privacy screens**, **shielded keypads**, and situational awareness.
  
  > Como el que mira por encima de tu hombro cuando marcas tu PIN en el cajero automático — solo que ahora puede hacerlo con una cámara desde el otro lado del edificio.

---

## Dumpster Diving

* **Definition:** Searching through **physical or digital trash** to find valuable information. Physical: discarded documents, hardware, or notes with credentials. Digital: undeleted files in recycling bins or improperly wiped storage media. Countered with **document shredding**, **clean desk policy**, and **secure data destruction** procedures.
  
  > Como buscar en la basura de una empresa para encontrar facturas, contraseñas escritas en papeles, o documentos confidenciales que alguien tiró sin destruir.

---

## Eavesdropping

* **Definition:** Secretly **listening to or intercepting private communications** — either physically (listening to phone calls) or digitally (intercepting network traffic via on-path/adversary-in-the-middle attacks). Countered with **encrypted communication channels** and up-to-date patching.
  
  > Como escuchar una conversación privada a través de una pared delgada — o en la red, interceptar el tráfico entre dos partes sin que ninguna lo sepa.

---

## Baiting

* **Definition:** Leaving a **malware-infected physical device** (typically a USB drive) in a location where a target is likely to find it and connect it to an organizational system out of curiosity. Once connected, malware is installed automatically. Countered with **user training** — never connect unknown devices.
  
  > Como dejar un sobre de dinero en el estacionamiento de una empresa: la curiosidad del empleado hace el resto del trabajo por el atacante.

---

## DNS Spoofing

* **Definition:** A diversion technique where the attacker **manipulates DNS server records** so that a legitimate domain name resolves to a malicious IP address, redirecting users to a fake website designed to harvest credentials or install malware. A technical implementation of diversion theft.
  
  > Como cambiar las señales de tráfico para que la gente que va al banco termine llegando a una fachada falsa donde te roban la información.

---



| English key words | Spanish  meaning                    |
| ----------------- | ----------------------------------- |
| scarcity          | escasez                             |
| likability        | simpatía                            |
| pretexting        | scenario creado                     |
| deceptive         | engañoso                            |
| disclose          | revelar |
| spear             | ataque dirigido                     |
| tailored          | personalizado                       |
| deceive           | engañar                             |
| hoaxes            | bromas pesadas                      |

---

*CompTIA Security+ SY0-701 · Section 5: Social Engineering · Dion Training*
