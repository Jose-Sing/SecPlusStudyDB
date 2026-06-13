# 🛡️ CompTIA Security+ — Section 8

## Cryptographic Solutions | Study Summary

> **Keywords:** Cryptography · Encryption · Symmetric · Asymmetric · Hashing · PKI · Digital Certificates · Blockchain · Obfuscation · Quantum Computing

---

## 📚 Table of Contents

1. [Cryptography Fundamentals](#1-cryptography-fundamentals)
2. [Symmetric vs Asymmetric Encryption](#2-symmetric-vs-asymmetric-encryption)
3. [Symmetric Algorithms](#3-symmetric-algorithms)
4. [Asymmetric Algorithms](#4-asymmetric-algorithms)
5. [Hashing](#5-hashing)
6. [Increasing Hash Security](#6-increasing-hash-security)
7. [Public Key Infrastructure (PKI)](#7-public-key-infrastructure-pki)
8. [Digital Certificates](#8-digital-certificates)
9. [Blockchain](#9-blockchain)
10. [Encryption Tools](#10-encryption-tools)
11. [Obfuscation](#11-obfuscation)
12. [Cryptographic Attacks](#12-cryptographic-attacks)
13. [Quick Reference Cheatsheet](#13-quick-reference-cheatsheet)

---

## 1. Cryptography Fundamentals

**Cryptography** is the practice of writing and solving codes to hide the true meaning of information. **Encryption** converts plaintext into ciphertext so only someone with the correct key can reverse it.

> *Es como escribir un mensaje con tinta invisible: solo quien tiene la luz ultravioleta correcta (la clave) puede leerlo.*

### Data States

| State               | Description                              | Example                                 |
| ------------------- | ---------------------------------------- | --------------------------------------- |
| **Data at Rest**    | Inactive data stored on a device         | Files on a hard drive                   |
| **Data in Transit** | Data moving across a network or in RAM   | Email crossing the internet             |
| **Data in Use**     | Data actively being processed by the CPU | Calculations happening in the processor |

### Algorithm vs. Key

| Concept       | Role                                                | Analogy                            |
| ------------- | --------------------------------------------------- | ---------------------------------- |
| **Algorithm** | Mathematical formula for encryption/decryption      | The type of lock mechanism         |
| **Key**       | The piece of information that determines the output | The actual key that opens the lock |

⚠️ **The strength of encryption comes from the KEY, not the algorithm.** Most algorithms are publicly reviewed and open-source. Security relies entirely on keeping the key secret.

### Key Length & Rotation

- Longer keys = exponentially stronger (128-bit → 256-bit is not 2× stronger, it's squared).
- **Key rotation** — changing keys regularly — is a best practice. Many organizations rotate TLS keys annually; some cloud providers auto-rotate every 90 days.

> *Si la clave es como la combinación de tu caja fuerte, rotarla es como cambiar la combinación cada cierto tiempo para que nadie que la haya visto pueda usarla en el futuro.*

---

## 2. Symmetric vs Asymmetric Encryption

### Core Comparison

| Property             | Symmetric                                     | Asymmetric                                  |
| -------------------- | --------------------------------------------- | ------------------------------------------- |
| **Keys used**        | 1 shared secret key                           | 2 keys: public + private                    |
| **Also called**      | Private key encryption                        | Public key cryptography                     |
| **Speed**            | 100–1,000× faster                             | Slower                                      |
| **Key distribution** | ⚠️ Challenge — must share secret securely     | ✅ No key distribution problem               |
| **Non-repudiation**  | ❌ No — anyone with the key could have sent it | ✅ Yes — only the private key owner can sign |
| **Common use**       | Bulk data encryption                          | Key exchange, digital signatures            |

> *Simétrico es como tener una copia de la llave de la casa: cualquiera que tenga la copia puede entrar, y no sabes quién tomó el laptop. Asimétrico es como un buzón: cualquiera puede depositar cartas (llave pública), pero solo tú puedes sacarlas (llave privada).*

### Hybrid Approach (Best of Both Worlds)

Asymmetric encryption is used to **securely exchange a symmetric key**, and then symmetric encryption handles the **bulk of data transfer**. This is how HTTPS/TLS works.

### Stream vs Block Ciphers

| Type              | How it works                                              | Typical use                                |
| ----------------- | --------------------------------------------------------- | ------------------------------------------ |
| **Stream cipher** | Encrypts bit by bit using XOR with a keystream            | Real-time audio/video streaming            |
| **Block cipher**  | Breaks input into fixed-length blocks (64, 128, 256 bits) | File encryption, most symmetric algorithms |

> *Stream cipher es como traducir un libro palabra por palabra al mismo tiempo que lo lees. Block cipher es como traducir capítulo por capítulo.*



![9829e987-6d29-43a5-aa48-9bb0ee130394](file:///C:/Users/LENOVO/Pictures/Typedown/9829e987-6d29-43a5-aa48-9bb0ee130394.png)

---

## 3. Symmetric Algorithms

> 💡 **Exam tip:** You don't need to memorize specific block/key sizes — focus on identifying each algorithm, whether it's still in use, and its relative strength.

### Identification & Effectiveness Guide

| Algorithm    | Type       | Key Size         | Block Size | Status        | Notes                                                                                |
| ------------ | ---------- | ---------------- | ---------- | ------------- | ------------------------------------------------------------------------------------ |
| **DES**      | Block      | 56-bit effective | 64-bit     | ❌ Obsolete    | Broken by modern computing. Used 1970s–early 2000s.                                  |
| **3DES**     | Block      | ~112-bit         | 64-bit     | ⚠️ Deprecated | Encrypt → Decrypt → Encrypt using 3 keys. Slow but stronger than DES.                |
| **IDEA**     | Block      | 128-bit          | 64-bit     | ⚠️ Niche      | Used in PGP. Entered the AES contest but didn't win.                                 |
| **AES**      | Block      | 128/192/256-bit  | 128-bit    | ✅ Standard    | The de facto standard. US government approved. Also called Rijndael.                 |
| **Blowfish** | Block      | 32–448-bit       | 64-bit     | ⚠️ Legacy     | Designed as DES replacement. Not widely adopted. Open source.                        |
| **Twofish**  | Block      | 128/192/256-bit  | 128-bit    | ⚠️ Available  | AES finalist. Open source. Not widely used today.                                    |
| **RC4**      | **Stream** | 40–2,048-bit     | N/A        | ❌ Weak        | Used in SSL and WEP — both now considered insecure. Only stream cipher in this list. |
| **RC5**      | Block      | Up to 2,048-bit  | Variable   | ⚠️ Legacy     | Stronger than RC4 but not widely used.                                               |
| **RC6**      | Block      | Up to 2,048-bit  | 128-bit    | ⚠️ Legacy     | AES finalist. Based on RC5 but didn't win.                                           |

> *AES es el ganador indiscutible — es el algoritmo que protege desde tu disco duro cifrado hasta las conexiones de tu banco. Los demás son historia o contexto.*

⚠️ **RC4 is the only stream cipher in this list** — all others are block ciphers.

---

## 4. Asymmetric Algorithms

### Identification & Use Case Guide

| Algorithm                | Primary Use                                  | Key Point                                                                                                                         |
| ------------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Diffie-Hellman (DH)**  | Key exchange (VPN tunnels, IPSec)            | Allows two parties to create a shared secret over an insecure channel. Vulnerable to on-path/MITM attacks without authentication. |
| **RSA**                  | Key exchange, encryption, digital signatures | Based on the difficulty of factoring large prime numbers. 1,024–4,096-bit keys. Powers RSA tokens (MFA).                          |
| **ECC (Elliptic Curve)** | Encryption for mobile/low-power devices      | ~6× more efficient than RSA at the same security level. 256-bit ECC ≈ 2,048-bit RSA.                                              |

> *Diffie-Hellman es como acordar un código secreto gritando en una plaza pública — todos te oyen, pero nadie puede descifrar qué acordaron. RSA es el candado del internet. ECC es RSA pero en versión ligera para dispositivos móviles.*

### ECC Variants

| Variant   | Full Name                                  | Purpose                                              |
| --------- | ------------------------------------------ | ---------------------------------------------------- |
| **ECDH**  | Elliptic Curve Diffie-Hellman              | Key exchange using ECC                               |
| **ECDHE** | Elliptic Curve Diffie-Hellman Ephemeral    | Uses a different key per session for forward secrecy |
| **ECDSA** | Elliptic Curve Digital Signature Algorithm | Used by the US government for digital signatures     |

### How to Identify Which Algorithm to Use

```
Need to exchange keys securely?           → Diffie-Hellman (or ECDH for mobile)
Need encryption + digital signatures?     → RSA
Using a mobile/tablet/IoT device?         → ECC
Government digital signatures?            → ECDSA
```

![77970e34-9cba-4463-b553-2777849d0885](file:///C:/Users/LENOVO/Pictures/Typedown/77970e34-9cba-4463-b553-2777849d0885.png)



---

## 5. Hashing

Hashing is a **one-way** cryptographic function: input → fixed-length digest. There is **no way to reverse** it to get the original input.

> *Es como hacer jugo de naranja: puedes convertir naranjas en jugo, pero no puedes reconstruir las naranjas desde el jugo.*

The digest acts as a **digital fingerprint** — even a single character change produces a completely different hash (Avalanche Effect).

### Hashing Algorithms

| Algorithm        | Digest Size     | Status             | Notes                                                                                       |
| ---------------- | --------------- | ------------------ | ------------------------------------------------------------------------------------------- |
| **MD5**          | 128-bit         | ❌ Broken           | Prone to collisions. Still used for quick integrity checks only.                            |
| **SHA-1**        | 160-bit         | ❌ Deprecated       | Fewer collisions than MD5 but still considered weak.                                        |
| **SHA-2 family** | 224–512-bit     | ✅ Current standard | Includes SHA-224, SHA-256, SHA-384, SHA-512.                                                |
| **SHA-3**        | 224–512-bit     | ✅ Modern           | Uses 120 rounds (vs. 64–80 for SHA-2). More secure computation.                             |
| **RIPEMD-160**   | 160-bit         | ⚠️ Open source alt | Competitor to SHA. Not widely adopted.                                                      |
| **HMAC**         | Varies (paired) | ✅ Integrity + Auth | Paired with other algorithms: HMAC-SHA256, HMAC-MD5. Provides integrity AND authentication. |

> *MD5 y SHA-1 son como contraseñas débiles de los 90s — todo el mundo sabe que están rotos pero algunos todavía los usan por costumbre.*

### Digital Signatures — Clarification ⚠️

> **El flujo del cifrado asimétrico se INVIERTE según el objetivo:**

| Goal                                                     | Who acts        | Key used                  | Result                                           |
| -------------------------------------------------------- | --------------- | ------------------------- | ------------------------------------------------ |
| **Confidentiality** (only receiver can read)             | Sender encrypts | **Receiver's PUBLIC key** | Only receiver can decrypt with their private key |
| **Non-repudiation / Authentication** (prove who sent it) | Sender signs    | **Sender's PRIVATE key**  | Anyone can verify with sender's public key       |

**Digital Signature = Hash encrypted with sender's private key**

```
Flow:
1. Hash the message (e.g., SHA-256)          → produces digest
2. Encrypt digest with SENDER's private key  → digital signature
3. Encrypt message with RECEIVER's public key → confidentiality
4. Receiver: decrypt message → decrypt signature with SENDER's public key → compare hashes
```

> *Firmar un documento digitalmente es como estampar tu anillo de sello personal en cera. Tu anillo (llave privada) es único — nadie más puede producir ese sello. Cualquiera puede verificar el sello mirando el escudo (llave pública), pero solo tú pudiste haberlo creado.*

**Algorithms used for digital signatures:** DSA, RSA, ECDSA.



![21e7d098-cfc0-4ad6-9a7c-00382bfa88e2](file:///C:/Users/LENOVO/Pictures/Typedown/21e7d098-cfc0-4ad6-9a7c-00382bfa88e2.png)

---

## 6. Increasing Hash Security

### Hash Attacks

| Attack              | Description                                                                         | Defense                                             |
| ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Pass-the-Hash**   | Attacker reuses stolen hash to authenticate without knowing the plain-text password | Trusted OS policies, MFA, least privilege, patching |
| **Birthday Attack** | Attacker finds two inputs with the same hash (collision) using probability theory   | Use longer hash algorithms (SHA-256+)               |

> *Pass-the-Hash: Es como robar una fotocopia de tu llave en vez de la llave original — la fotocopía funciona igual para abrir la puerta. Birthday Attack: Con solo 23 personas en un cuarto, hay 50% de probabilidad de que dos compartan cumpleaños — la probabilidad de colisión crece más rápido de lo que intuitivamente esperamos.*

### Defensive Techniques

| Technique                | What it does                                                                            | Protects against                                |
| ------------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **Key Stretching**       | Runs the weak key through the algorithm multiple times, creating a longer, stronger key | Brute force                                     |
| **Salting**              | Adds a random value to the password before hashing                                      | Rainbow tables, dictionary attacks, brute force |
| **Nonce**                | Adds a unique number-used-once to the auth process                                      | Replay attacks                                  |
| **Login attempt limits** | Locks account after N failed attempts (e.g., 3)                                         | Password guessing                               |

> *El salt es como agregar una pimienta aleatoria a cada contraseña antes de hashearla: aunque dos usuarios tengan el mismo password, sus hashes serán completamente distintos.*

---

## 7. Public Key Infrastructure (PKI)

PKI is the entire **system** (hardware, software, policies, people) built around asymmetric encryption that enables secure communications at scale.

> *Si la criptografía de clave pública es el motor, PKI es el automóvil completo con GPS, seguro y placas incluidas.*

### How HTTPS Uses PKI (Hybrid Flow)

```
1. Browser requests diontraining.com
2. Browser gets server's public key from Certificate Authority (CA)
3. Browser generates a random shared secret key (e.g., 51363)
4. Browser encrypts shared secret using server's PUBLIC key → sends it
5. Server decrypts with its PRIVATE key → now both know 51363
6. Symmetric tunnel (AES) established using 51363 as shared secret
7. 🔒 Padlock appears — secure communication begins
```

### Key Escrow

Secure third-party storage of private keys for recovery purposes. Required for scenarios like: employee leaves with encrypted data, key is lost, or legal investigation.

⚠️ **Risk:** If the escrow is compromised, all stored data is exposed. Access should require at least two administrators (separation of duties).

---

## 8. Digital Certificates

A digital certificate is a **digitally signed electronic document** that binds a public key to an identity. Standard protocol: **X.509**.

### Certificate Types

| Type                             | Description                                  | When to use                                      |
| -------------------------------- | -------------------------------------------- | ------------------------------------------------ |
| **Standard**                     | Covers one specific domain                   | Single server/domain                             |
| **Wildcard**                     | Covers all subdomains (`*.diontraining.com`) | Multiple subdomains under same root domain       |
| **SAN (Subject Alternate Name)** | Covers multiple different domains            | `diontraining.com` AND `jasondion.com`           |
| **Single-sided**                 | Only the server authenticates                | Most websites (standard HTTPS)                   |
| **Dual-sided**                   | Both server AND client authenticate          | High-security environments                       |
| **Self-signed**                  | Signed by the entity itself, not a CA        | Internal/test environments only ⚠️ Browser warns |
| **Third-party**                  | Signed by a trusted CA                       | All public-facing websites                       |

### PKI Components

| Component                             | Role                                                                                                                                   |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Certificate Authority (CA)**        | Trusted third party that issues and signs certificates. Maintains publicly accessible public keys.                                     |
| **Registration Authority (RA)**       | Accepts certificate requests, validates identity, forwards to CA                                                                       |
| **Certificate Signing Request (CSR)** | Block of encoded text sent to CA to request a certificate. Private key is NEVER included.                                              |
| **Root of Trust / Chain of Trust**    | Hierarchy from root CA → intermediate CA → end-entity certificate. Each level vouches for the one below.                               |
| **Certificate Revocation List (CRL)** | Full list of all revoked certificates maintained by the CA                                                                             |
| **OCSP**                              | Online Certificate Status Protocol — checks revocation status of a single cert by serial number. Faster than CRL but lacks encryption. |
| **OCSP Stapling**                     | Server periodically fetches its own OCSP record and includes it in the TLS handshake — eliminates extra connection at auth time        |
| **Public Key Pinning**                | Server delivers a set of trusted public keys in HTTP headers — browser rejects any certificate not matching                            |
| **Key Escrow Agent**                  | Stores backup copies of private keys                                                                                                   |
| **Key Recovery Agent**                | Software that restores lost/corrupted keys from backup                                                                                 |

> *La CA es como un notario público del internet: su firma en un certificado le dice al mundo "yo verifico que esta persona/servidor es quien dice ser".*

---

## 9. Blockchain

A **shared, immutable ledger** for recording transactions across a decentralized peer-to-peer network.

> *Imagina un libro de contabilidad del que todo el mundo tiene una copia idéntica. Para alterar una entrada, tendrías que alterar la copia de TODAS las personas al mismo tiempo — prácticamente imposible.*

### Structure

Each **block** contains:

- Previous block's hash (creates the chain)
- Timestamp
- Transaction hashes (organized in a Merkle tree)
- Root hash

### Key Concepts

| Concept                                 | Description                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Public Ledger**                       | Record-keeping system with anonymous participant identities and transparent transaction history              |
| **Smart Contracts / Digital Contracts** | Self-executing code that automatically triggers actions when conditions are met. Tamper-proof once deployed. |
| **Permissioned Blockchain**             | Private blockchain for business use (e.g., IBM supply chain)                                                 |
| **Cryptocurrency**                      | Financial application of blockchain (Bitcoin, Ethereum)                                                      |

### Applications

- Supply chain transparency (trace food from farm to store)
- Digital contracts (smart contracts on Ethereum)
- Voting systems, property transfer, intellectual property

---

## 10. Encryption Tools

| Tool               | Full Name                | Analogy                             | Primary Use                                                                             |
| ------------------ | ------------------------ | ----------------------------------- | --------------------------------------------------------------------------------------- |
| **TPM**            | Trusted Platform Module  | Personal vault embedded in hardware | Secures hardware cryptographic keys; used with BitLocker                                |
| **HSM**            | Hardware Security Module | Bank vault                          | Manages and protects keys for mission-critical/financial operations. Tamper-proof.      |
| **KMS**            | Key Management System    | Key lifecycle manager               | Centralized generation, distribution, rotation, and destruction of cryptographic keys   |
| **Secure Enclave** | —                        | Fortress inside the processor       | Isolated co-processor for biometric data (Face ID, Touch ID). Data never leaves device. |

> *TPM es el candado de tu laptop. HSM es la bóveda del banco. KMS es el administrador que lleva el inventario de todos los candados y sabe cuándo cambiarlos. El Secure Enclave es la caja fuerte dentro de tu teléfono donde vive tu huella digital.*

---

## 11. Obfuscation

Obfuscation hides information — not always by encrypting it, but by concealing its existence or true form.

### Three Techniques

| Technique                      | Definition                                                                                     | Real-world Example                                                                                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Steganography**              | Hiding secret data inside an ordinary file (image, audio, text) so its existence is undetected | Embedding a message in specific pixel color values of a photo                                              |
| **Tokenization**               | Replacing sensitive data with a non-sensitive token. Real data stored in a secure vault.       | Credit card number replaced by a random token at point of sale                                             |
| **Data Masking / Obfuscation** | Disguising real data with fake but realistic-looking data                                      | Showing only last 4 digits of a credit card; replacing real customer names with fictional ones for testing |

> *Steganography: el espía que pone "Encuéntrame a las seis" codificado en la primera letra de cada palabra de un clasificado. Tokenization: el cajero que solo ve un token inútil — el número real de tu tarjeta vive en otra caja fuerte. Data Masking: el desarrollador que practica con datos que parecen reales pero son inventados.*

⚠️ **Steganography ≠ encryption.** The data is hidden, not encrypted. If someone knows where to look, they can extract it without a key.

---

## 12. Cryptographic Attacks

### Downgrade Attack (Version Rollback Attack)

Forces a system to use an **older, weaker cryptographic protocol** than the one it normally supports, exploiting known vulnerabilities in that older version.

> *Es como convencer a dos personas que hablan inglés y español a que solo hablen por telégrafo morse porque el atacante no puede entender inglés ni español.*

**Famous example:** POODLE attack — forced systems to revert to SSL 3.0 (insecure) despite TLS being available.

**Defenses:**

- Remove support for legacy protocols
- Version intolerance checks (start by claiming only the latest version is supported)

### Collision Attack (Birthday Attack)

Finds two different inputs that produce the **same hash digest**. Undermines integrity verification.

> *El paradox del cumpleaños: solo necesitas 23 personas para tener 50% de probabilidad de que dos compartan cumpleaños. El punto: las colisiones ocurren más rápido de lo que intuitivamente pensamos.*

- MD5 is especially vulnerable (128-bit output = limited unique values)
- MD5 was proven to produce collisions → rendered unsuitable for certificates
- **Defense:** Use longer hash algorithms (SHA-256, SHA-3)

### Quantum Computing Threat

Quantum computers use **qubits** (which can represent multiple states simultaneously via superposition) to solve complex math problems exponentially faster than classical computers.

> *Una computadora clásica prueba combinaciones de uno en uno como abrir cerraduras en fila. Una computadora cuántica es como abrir todas las cerraduras al mismo tiempo.*

| Aspect                 | Classical Computer                    | Quantum Computer                                                |
| ---------------------- | ------------------------------------- | --------------------------------------------------------------- |
| Bit type               | Binary (0 or 1)                       | Qubit (multiple states simultaneously)                          |
| RSA/ECC threat         | Safe (factoring large primes is hard) | ⚠️ Proven breakable — factors primes rapidly                    |
| Symmetric (AES) threat | Manageable                            | Partially mitigated by doubling key size                        |
| Current status         | Ubiquitous                            | Prototype/R&D only; practical use ~2030 (gov); ~2040 (consumer) |

**Post-Quantum Cryptography (NIST selections, 2022):**

| Purpose                  | Recommended Algorithm            | Notes                                                     |
| ------------------------ | -------------------------------- | --------------------------------------------------------- |
| General encryption       | **CRYSTALS-Kyber**               | Based on lattice problems; equivalent strength to AES-256 |
| Digital signatures       | **CRYSTALS-Dilithium** (primary) | Lattice-based                                             |
| Digital signatures (alt) | **FALCON**                       | Lattice-based                                             |
| Digital signatures (alt) | **SPHINCS+**                     | Hash-based                                                |

---

## 13. Quick Reference Cheatsheet

### Encryption Classification

```
Symmetric  (1 key, both encrypt & decrypt) → DES, 3DES, AES, Blowfish, RC4, RC5, RC6
Asymmetric (public + private key pair)     → Diffie-Hellman, RSA, ECC

Stream cipher (bit by bit)  → RC4
Block cipher  (fixed blocks) → All others listed above
```

### Algorithm Status at a Glance

```
✅ Use now:    AES (symmetric), RSA, ECC/ECDSA, SHA-256, SHA-3, HMAC
⚠️ Avoid:     3DES, Blowfish, RC4, SHA-1, MD5 (legacy/broken)
❌ Obsolete:  DES, RC4 in WEP/SSL contexts
🔮 Future:    CRYSTALS-Kyber, CRYSTALS-Dilithium, FALCON, SPHINCS+
```

### Asymmetric Key Usage Rules

```
Encrypt for someone (confidentiality)     → use RECEIVER's PUBLIC key
Sign/prove identity (non-repudiation)     → use SENDER's PRIVATE key
Verify a signature                        → use SENDER's PUBLIC key
Decrypt a message addressed to you        → use YOUR PRIVATE key
```

### Hashing Defenses

```
Key Stretching → multiple hash rounds → defeats brute force
Salting        → random value added   → defeats rainbow tables, dictionary attacks
Nonce          → number used once     → defeats replay attacks
Login limits   → lock after N tries   → defeats guessing attacks
```

### PKI Chain of Trust

```
Root CA → Intermediate CA → End-Entity Certificate
(grandfather)  (father)        (you)
```

### Obfuscation Quick Map

```
Steganography → hides existence of data (in an image/file)
Tokenization  → replaces sensitive data with meaningless token
Data Masking  → disguises data with fake-but-realistic values
```

### Cryptographic Attacks

```
Downgrade Attack  → force to older protocol (POODLE: SSL 3.0)
Collision Attack  → two inputs → same hash (Birthday Attack)
Quantum Threat    → breaks RSA/ECC via prime factoring; AES mitigated by doubling key size
```

---

*CompTIA Security+ | Section 8 — Cryptographic Solutions | OBJ 1.4 · 2.3 · 2.4*
