# PORTFOLIO ARCHITECT SUPREME: FOUNDATIONAL MANDATES

This document serves as the absolute architectural and design authority for the `portfolio-irsyad` project. It defines the "Elite Architect" persona, the visual philosophy, and technical standards that must be strictly maintained in every subsequent modification.

---

## 1. CORE PERSONA: THE SUPREME ARCHITECT
The developer behind this project is not just a coder; they are a **System Architect & Digital Experience Designer**. 
- **Tone:** Professional, direct, authoritative, and obsessive about reliability.
- **Mission:** Transform a standard portfolio into a cinematic, high-integrity technical archive.

---

## 2. DESIGN PHILOSOPHY (V4.2.0)
The visual language is defined by the intersection of **Neo-Brutalism**, **Premium Minimalism**, and **High-Integrity Cybernetics**.

### 2.1 Color Palette
- **95% Monochrome:** #020203 (Deepest Black) and #FFFFFF (Pure White).
- **Signature Accent:** #E31B23 (Architect Red - 2005 Edition).
- **Logic:** Colors are symbolic of Identity (Red), Engineering (Black), and Clarity (White). Red appears only at moments that deserve extreme attention.

### 2.2 Typography
- **Display:** Space Grotesk (Variable). Used for high-impact, giant headers.
- **Sans:** SF Pro Display / Inter. Used for narrative reading and editorial content.
- **Mono:** JetBrains Mono. Used for metadata, system logs, and code artifacts.
- **Rules:** 
  - Giant type must be bold and tightly kerned (`tracking-tighter`).
  - Monospaced text must always accompany high-level titles to provide "System Integrity" context.
  - Birth Year "2005" is a core visual anchor.

### 2.3 Visual Components
- **The Brutal Card:** 2px high-contrast borders, sharp corners, and deep inky shadows (`shadow-2xl`). Hover states must translate the card and enhance border brightness.
- **Glassmorphism:** Used only for navigation or overlays. Background blur must be high (12px+) with extremely low opacity backgrounds (3-5%).
- **Architectural Grid:** A 80px background grid with 20px sub-grids to provide a sense of structure and scale.
- **Cinematic Storytelling:** Scrolling feels like scene transitions. Every section builds anticipation.

---

## 3. TECHNICAL STANDARDS

### 3.1 Stack
- **Framework:** Next.js 16 (App Router + Turbopack).
- **Styling:** Tailwind CSS 4.
- **Motion:** Framer Motion (Cubic-bezier easing: `[0.16, 1, 0.3, 1]`).
- **Icons:** Lucide React (Refined, standard stroke).

### 3.2 Component Architecture
- **Server Components by Default:** Keep the main bundle lean.
- **Client Components:** Limited to interactive consoles (`KernelTerminalExplorer`, `CodeWorkspace`) and modals.
- **Scalability:** Every new section must follow the `brutal-card` and `section-reveal` pattern.

---

## 4. PROJECT ARCHITECTURE REPORT (MAY 31, 2026)

### 4.1 Refactor Summary: God-Mode V5 (2005 Pivot)
The portfolio has been pivoted to a high-integrity "Signature Red" identity, anchoring the user's personal brand to their birth year (2005).

**Key Changes:**
1.  **Identity Pivot:** Replaced all System Rose (#ff0055) and Electric Blue accents with Signature Red (#E31B23).
2.  **2005 Branding:** Integrated "Est. 2005" as a core visual identifier across the Hero and Navbar.
3.  **Typography Overhaul:** Maintained `giant-type` with tighter kerning for cinematic impact.
4.  **Terminal Console Fidelity:** Updated `KernelTerminalExplorer` and `CodeWorkspace` with the new Red theme.
5.  **Engineering Journal:** Focused on "High-Integrity" narrative.

### 4.2 Component Audit
- **Navbar:** Elite glassmorphism with real-time WIB clock and location tracking.
- **Kernel Console:** 10/10 Fidelity. Simulates a real-time system monitor.
- **Code Workspace:** Syntax-highlighted artifacts showcasing Kotlin/Dart interop and Firestore optimisations.
- **Labs Grid:** 3-column brutalist grid for exploration projects.
- **Case Studies:** Narrative-driven "Deep Dives" focusing on constraints, logic maps, and technical reflections.

---

## 5. FUTURE ROADMAP (PROPOSED)
- [ ] **Interaction Obsession:** Implement magnetic button effects on all primary CTAs.
- [ ] **Depth Perception:** Add parallax layering to the Hero image identity.
- [ ] **Scene Transitions:** Implement a "Glitch-In" loader for the initial site entry.
- [ ] **Responsive Audit:** Ensure the `giant-type` doesn't break on foldable devices.
- [ ] **System Audio:** Sub-audible UI clicks (mechanical keyboard sound) on hover.

---

## 6. PERMANENT MEMORY & SAFETY
- **Git Snapshots:** ALWAYS branch before major refactors (`refactor/feature-name`).
- **No Data Loss:** Content lives in `src/config/portfolioData.ts`. Never hardcode raw data into page components.
- **Integrity Check:** `npm run lint` and `tsc` must pass before any production deployment.

---

**AUTHORIZED BY: SUPREME ARCHITECT AGENT**
**STATE: PRODUCTION_READY**
**V4.2.0 STABLE**
