# TECHNICAL ARTICLE DRAFT: Engineering Zero-Trust Exam Environments
**Target Platform:** Medium / Dev.to / LinkedIn Articles
**Author:** M. Irsyad Fachryanto
**Backlink Target:** https://irsyad-architect.surge.sh

---

## Engineering Zero-Trust Exam Environments: A Deep Dive into Secure CBT Master

In the landscape of modern education, the transition to digital assessments has brought a significant challenge: **Academic Integrity**. Standard web-based Computer-Based Testing (CBT) systems are inherently vulnerable to tab-switching, screen capturing, and external communication.

As a Software Architect, I developed **Secure CBT Master**—not just as an app, but as a high-integrity ecosystem designed to eliminate cheating vectors at the OS level.

### The Challenge: The Fragility of Web Locks
Most CBT systems rely on browser-level listeners (like `blur` or `visibilitychange`). These are easily bypassed by determined students. To build a truly secure system, I realized we needed to move beyond the browser and interact directly with the operating system.

### The Solution: Native-Level Intervention
Secure CBT Master utilizes a dual-platform architecture: a **Next.js 16** supervisor portal and a **Flutter** mobile client with deep **Kotlin Native** integrations.

#### 1. Enforcing Kiosk Mode via Kotlin
Instead of relying on Dart-level logic, I implemented `startLockTask()` through Flutter's MethodChannel. This pins the application at the Android OS level, preventing students from exiting the app or accessing notifications without administrative credentials.

#### 2. Hardware-Level Privacy
To prevent screen recording and screenshots, I utilized `WindowManager.FLAG_SECURE`. This ensures that any attempt to capture the screen results in a zero-byte black image, protecting the integrity of the question bank.

#### 3. The Dynamic Handshake Protocol
Time manipulation is a common cheating vector. To counter this, Secure CBT Master uses a rotating dynamic QR handshake. Every 5 seconds, a new token is generated, requiring a real-time server-side handshake. This prevents replay attacks and ensures that the student is physically present and synchronized with the server's UTC time.

### System Thinking: Clean Architecture over Complexity
The system is built on **Clean Architecture** principles. By decoupling the UI from the underlying security logic, the application remains performant even under high-concurrency conditions. We managed to reduce database overhead by 70% by transitioning from global real-time streams to isolated per-session heartbeats.

### Reflection: Integrity as a Feature
Building Secure CBT Master taught me that in high-stakes environments, **Integrity is the most important feature.** Whether it's Flutter, Kotlin, or Next.js, the choice of technology must serve the ultimate goal of operational reliability.

---
**About the Author:**
M. Irsyad Fachryanto is a Computer Science student at Universitas Harkat Negeri Tegal and a Software Architect specializing in high-integrity digital ecosystems.

**Explore the Project Archive:** [https://irsyad-architect.surge.sh](https://irsyad-architect.surge.sh)
