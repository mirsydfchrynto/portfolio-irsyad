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
- **Primary Accent:** #0070f3 (Electric Blue).
- **Secondary Accent:** #ff0055 (System Rose - used for critical failures or highlights).
- **Logic:** Colors must be rare and intentional. Blue signals intelligence and authority; Rose signals critical state or intensity.

### 2.2 Typography
- **Display:** Space Grotesk (Variable). Used for high-impact, giant headers.
- **Sans:** SF Pro Display / Inter. Used for narrative reading and editorial content.
- **Mono:** JetBrains Mono. Used for metadata, system logs, and code artifacts.
- **Rules:** 
  - Giant type must be bold and tightly kerned (`tracking-tighter`).
  - Monospaced text must always accompany high-level titles to provide "System Integrity" context.

### 2.3 Visual Components
- **The Brutal Card:** 2px high-contrast borders, sharp corners, and deep inky shadows (`shadow-2xl`). Hover states must translate the card and enhance border brightness.
- **Glassmorphism:** Used only for navigation or overlays. Background blur must be high (12px+) with extremely low opacity backgrounds (3-5%).
- **Architectural Grid:** A 80px background grid with 20px sub-grids to provide a sense of structure and scale.

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

### 4.1 Refactor Summary: Elite Migration
The portfolio has been successfully migrated from a "Standard Dev" aesthetic to "Supreme Architect" mode.

**Key Changes:**
1.  **Identity Pivot:** Replaced all Rose-400 primary accents with Electric Blue (#0070f3).
2.  **Typography Overhaul:** Implemented `giant-type` (clamp-based responsive scales) for cinematic impact.
3.  **Hero Reconstruction:** Added scroll-driven scale and opacity transforms using Framer Motion `useScroll`.
4.  **Terminal Console Fidelity:** Updated `KernelTerminalExplorer` and `CodeWorkspace` with 2px borders, grid overlays, and real-time WIB clock synchronization.
5.  **Engineering Journal:** Transformed `ProjectDetailsModal` into a multi-section narrative article with custom SVG architecture diagrams for every major project.

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
