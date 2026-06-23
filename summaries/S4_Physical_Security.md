# 🛡️ CompTIA Security+ SY0-701

## Section 4: Physical Security | Study Summary

> **Domain:** 1.0 General Security Concepts · 2.0 Threats, Vulnerabilities & Mitigations
> **Objectives:** 1.2 · 2.4

---

## Physical Security

* **Definition:** Measures taken to protect tangible assets — buildings, equipment, and people — from harm or unauthorized access. Forms the outermost layer of a defense-in-depth strategy, starting at the perimeter and working inward toward the most sensitive data and systems.
  
  > Como las capas de una cebolla: la seguridad física empieza en la cerca del perímetro y va protegiendo cada capa hasta llegar al núcleo donde está la información más crítica.

---

## Fencing

* **Definition:** A physical barrier structure made of interconnected panels or posts (wood, metal, wire mesh, concrete) that encloses a perimeter to deter and delay unauthorized entry. Serves three purposes: **visual deterrent** (defines boundaries), **physical barrier** (prevents entry), and **delay mechanism** (buys time for security personnel to respond). Vulnerabilities include climbing, cutting, and digging underneath — countered with height, electrification, barbed wire, underground extensions, or buried mesh. **Key Concept: Prevent People**
  
  > Como la barda de una casa: no garantiza que nadie entre, pero obliga al intruso a esforzarse más, y ese tiempo extra es exactamente lo que necesita la seguridad para responder.

---

## Bollards

* **Definition:** Short, sturdy vertical posts made of steel or concrete designed to control or prevent **vehicular access** to an area. Can be permanent or temporary. Protect against vehicle-ramming attacks, ram raiding, and vehicle-based IEDs. Distinguished from fencing in that fencing controls **people** while bollards control **vehicles**. Often disguised as decorative elements (planters, large spheres). Rated by impact standards (e.g., ASTM F2656-07 M30 P1 = stops a 15,000 lb vehicle at 30 mph within 1 meter). **Key Concept: Prevent Vehicles**
  
  > Como los topes en la entrada de un estacionamiento, pero diseñados para detener un camión en movimiento, no solo ralentizarlo.

---

## Brute Force (Physical)

* **Definition:** A direct, often violent approach to bypassing physical security by exploiting the structural vulnerabilities of barriers and devices. Four main forms:

| Form                                | Description                                                               | Countermeasure                                                               |
| ----------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Forcible Entry**                  | Breaking windows, kicking doors, cutting fences, breaking locks           | Reinforced/laminated windows, deadbolts, metal door frames, solid core doors |
| **Tampering with Security Devices** | Forcing gates open, blinding cameras with paint, disabling sensors/alarms | Redundant layers of security controls                                        |
| **Confronting Security Personnel**  | Distracting, assaulting, or weaponizing against guards                    | Conflict resolution training, self-defense training, backup communication    |
| **Ramming Barriers with Vehicles**  | Driving vehicles into fences, gates, or building facades                  | Bollards, reinforced barriers                                                |

> Como intentar entrar a una bóveda bancaria a la fuerza: no es sutil, pero a veces la simplicidad de un ataque directo lo hace efectivo contra instalaciones mal preparadas.

---

## Surveillance System

* **Definition:** An organized strategy or setup designed to observe, monitor, and report activities within a given area. Combines four components:

| Component                     | Function                                                        | Notes                                                                                                                |
| ----------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Video Surveillance (CCTV)** | Visual monitoring and recording                                 | Detective control; wired or wireless; indoor/outdoor variants; PTZ [Pan-Tilt-Zoom: Cameras tha can move ] capability |
| **Security Guards**           | Human monitoring, immediate response, and identity verification | Most flexible and adaptable surveillance form                                                                        |
| **Lighting**                  | Illuminates areas to deter attackers and improve video quality  | Motion-activated lights serve as both deterrent and alert                                                            |
| **Sensors**                   | Detect environmental changes triggered by movement or presence  | Infrared, pressure, microwave, ultrasonic                                                                            |

> Como el sistema nervioso de un edificio: los sensores y cámaras son los ojos, los guardias son el cerebro que reacciona, y la iluminación asegura que nada pase desapercibido en la oscuridad.

---

## CCTV (Closed Circuit Television)

* **Definition:** Video surveillance systems that transmit signals to a specific, limited set of monitors. Available in wired (physically cabled to monitoring station) and wireless (Wi-Fi/cellular) configurations. Wired is more reliable; wireless is easier to install but vulnerable to signal jamming. Classified as a **detective control**.
  
  > Como tener ojos en todos los rincones del edificio que graban todo lo que pasa, aunque no puedan intervenir por sí solos.

---

## PTZ (Pan-Tilt-Zoom)

* **Definition:** A camera control feature that allows a security operator to remotely adjust the camera's direction (pan left/right, tilt up/down) and magnification (zoom in/out) in real time. Most effective when paired with a staffed monitoring station.
  
  > Como un guardia con binoculares que puede girar la cabeza y enfocar cualquier punto del perímetro sin moverse de su puesto.

---

## Sensors — Types

* **Definition:** Devices that detect and respond to physical stimuli and convert them into readable signals or alerts. Four types:

| Type           | Detection Method                                                           | Best Use Case                               |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| **Infrared**   | Detects changes in infrared radiation emitted by warm bodies               | Low-light or dark environments              |
| **Pressure**   | Activates when a specified weight is detected on embedded floor/mat sensor | Restricted area entry detection             |
| **Microwave**  | Emits microwave pulses and measures reflection off moving objects          | Large area coverage (prone to false alarms) |
| **Ultrasonic** | Measures reflection of ultrasonic waves off moving objects (echolocation)  | Automated doors, indoor movement detection  |

> Como diferentes tipos de alarmas para diferentes situaciones: algunas detectan calor, otras peso, otras movimiento en el aire — cada una cubre lo que las otras no pueden.

---

## Bypassing Surveillance Systems

* **Definition:** Techniques used by attackers to disable, deceive, or render surveillance systems ineffective. Five main methods:

| Method                                 | Technique                                                                                 | Countermeasure                                    |
| -------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **Visual Obstruction**                 | Spray paint, tape, stickers, or objects blocking camera lens                              | Tamper alarms on cameras                          |
| **Blinding Sensors/Cameras**           | High-powered flashlights or lasers aimed at camera lens; heating room to blind IR sensors | Tamper detection, redundant camera placement      |
| **Acoustic Interference**              | Loud sounds or jamming devices disrupting microphone-based sensors                        | Redundant acoustic sensors, white noise filtering |
| **Electromagnetic Interference (EMI)** | Jamming wireless signals used by surveillance systems                                     | Encrypted frequency hopping signals               |
| **Physical Environment Attacks**       | Cutting power, tampering with power boxes, temperature manipulation, arson                | Backup power (UPS), redundant systems             |

> Como buscar los puntos ciegos de una cámara antes de actuar: el atacante estudia el sistema para encontrar la manera de volverlo ciego en el momento crítico.

---

## Access Control Vestibule

* **Definition:** A double-door security system electronically controlled so that **only one door can be open at a time**. Creates an intermediate holding space where identity and credentials are verified before granting access to the secured inner area. Typically integrated with access badges, PINs, and security guards. Prevents both **piggybacking** and **tailgating** by physically limiting space to one person per entry cycle.
  
  > Como la esclusa de una cámara espacial: tienes que estar completamente dentro y que la primera puerta se cierre antes de que la segunda se abra — no hay atajos.

---

## Piggybacking

* **Definition:** An unauthorized entry technique where **two people work together** — an authorized individual **intentionally** allows an unauthorized person to pass through a secured checkpoint alongside them. Usually accomplished through social engineering or manipulation (e.g., impersonating a delivery driver to convince an employee to badge them in).
  
  > Como convencer al empleado que tiene el acceso de que te abra la puerta "solo por esta vez" porque traes las manos ocupadas con cajas.

---

## Tailgating

* **Definition:** An unauthorized entry technique where an unauthorized person **closely follows** an authorized individual through a secured access point **without their knowledge or consent**. More covert and opportunistic than piggybacking. Countered by access control vestibules sized for single-person entry.
  
  > Como colarte al metro justo detrás de alguien que acaba de pasar con su tarjeta, tan rápido que el torniquete no tiene tiempo de cerrarse.

---

## Door Locks

* **Definition:** Physical security controls that restrict and regulate access to a space by requiring a specific key, code, credential, or biometric to unlock. Range from basic mechanical locks to advanced electronic systems. Key types:

| Lock Type                     | Mechanism                                          | Security Level                                 |
| ----------------------------- | -------------------------------------------------- | ---------------------------------------------- |
| **Padlock / Pin-and-Tumbler** | Physical key or picking with tension wrench + pick | Low — pickable in ~15 seconds                  |
| **Standard Door Lock**        | Physical key (deadbolt)                            | Low-Medium — pickable in 30–60 seconds         |
| **Numeric/PIN Lock**          | Entered digit code                                 | Medium — depends on code length                |
| **Wireless Lock**             | NFC, RFID, Wi-Fi, Bluetooth via smartphone         | Medium — depends on encryption                 |
| **Biometric Lock**            | Fingerprint, retinal scan, facial recognition      | High — measured by FAR/FRR/CER                 |
| **Cipher Lock**               | Mechanical push-button combination                 | Medium-High — no electronic dependency         |
| **Electronic Access System**  | Badge + PIN (MFA)                                  | High — combines possession + knowledge factors |

> Como la diferencia entre poner un candado de juguete y una caja fuerte en la puerta del cuarto del servidor: ambos son "candados", pero la protección que ofrecen no tiene comparación.

---

## Biometric Authentication

* **Definition:** Authentication method based on unique physical or behavioral characteristics of a person (**inherence factor / something you are**). Common implementations: fingerprint readers, retinal scanners, facial recognition. Used in door locks, smartphones, and access control vestibules.
  
  > Como usar tu propia huella dactilar como contraseña: es imposible olvidarla porque siempre la llevas contigo.

---

## False Acceptance Rate (FAR)

* **Definition:** The rate at which a biometric system **incorrectly grants access** to an unauthorized user — authenticating someone who should have been rejected. A high FAR means the system is too lenient. To reduce FAR, sensitivity is increased.
  
  > Como un guardia de seguridad tan confiado que deja entrar a cualquiera que tenga cara amable, sin verificar su identificación.

---

## False Rejection Rate (FRR)

* **Definition:** The rate at which a biometric system **incorrectly denies access** to an authorized user — rejecting someone who should have been granted access. A high FRR means the system is too strict. Increasing sensitivity to reduce FAR typically increases FRR.
  
  > Como un guardia tan estricto que ni siquiera deja entrar a los empleados que sí trabajan ahí porque siempre encuentra algo "sospechoso" en su identificación.

---

## Crossover Error Rate (CER) / Equal Error Rate (EER)

* **Definition:** The point at which the **False Acceptance Rate (FAR) and the False Rejection Rate (FRR) are equal**. Used as the primary benchmark for measuring the overall effectiveness of a biometric system. **Lower CER = better biometric system.** Represents the optimal balance between security and usability.
  
  > Como afinar el volumen de una alarma: muy bajo y no detecta intrusos (FAR alto), muy alto y suena con cualquier cosa (FRR alto) — el punto exacto donde ambos errores se equilibran es el CER.

---

## Access Badge Cloning

* **Definition:** The unauthorized copying of data from an RFID or NFC access badge onto another card or device, allowing the attacker to impersonate an authorized user and bypass physical security. Requires the attacker to be within close range (NFC: 1–2 inches; RFID: 2–10 inches). Common tool used by penetration testers: **Flipper Zero**. Four-step attack process:

| Step                   | Action                                                                       |
| ---------------------- | ---------------------------------------------------------------------------- |
| **1. Scanning**        | Attacker uses a hidden RFID/NFC reader to capture badge data without contact |
| **2. Data Extraction** | Extracts unique identifiers or encrypted credentials from captured data      |
| **3. Writing**         | Transfers extracted data onto a blank card or compatible device              |
| **4. Using the Clone** | Presents the cloned badge to gain unauthorized access                        |

> Como sacarle una copia a la llave de tu vecino mientras la tiene en el bolsillo sin que se dé cuenta, y luego usarla para abrir su puerta cuando él no está.

---

## RFID (Radio Frequency Identification)

* **Definition:** Contactless technology using radio waves to transmit data between a tag/card and a reader. Used in access control badges, asset tracking, and payment systems. Readable range: approximately 2–10 inches (standard antenna). Vulnerable to cloning if not properly encrypted.
  
  > Como una etiqueta de inventario en un supermercado, pero usada para identificar personas en lugar de productos.

---

## NFC (Near-Field Communication)

* **Definition:** A short-range (1–2 inches) wireless communication technology used in contactless access badges, payment cards, and smartphone-based authentication. Subset of RFID operating at 13.56 MHz. More difficult to clone at range due to shorter read distance, but still vulnerable without proper encryption.
  
  > Como el "tap to pay" de tu tarjeta de crédito: conveniente y rápido, pero si alguien tiene un lector cerca, puede intentar capturar tu señal.

---

## Mitigating Access Badge Cloning

* **Definition:** Defense measures to prevent or detect unauthorized badge cloning:

| Measure                            | Description                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Advanced encryption**            | Encrypt badge data to make raw capture useless without the decryption key                              |
| **MFA**                            | Combine badge with a PIN or biometric — cloned badge alone is insufficient |
| **Regular protocol updates**       | Periodically rotate encryption keys to invalidate old clones                                           |
| **User education**                 | Train users to report suspicious proximity attempts and protect badge storage                          |
| **RFID-shielding wallets/sleeves** | Physically block readers from capturing badge data while stored                                        |
| **Access log monitoring**          | Detect anomalies like geographically impossible access (badge used in two locations simultaneously)    |

> Como poner una funda blindada a tu tarjeta de crédito contactless: el atacante puede estar justo a tu lado, pero si no puede leer la señal, no puede copiarte nada.

---

*CompTIA Security+ SY0-701 · Section 4: Physical Security · Dion Training*
