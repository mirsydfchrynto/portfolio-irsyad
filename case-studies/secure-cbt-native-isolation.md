# CASE_STUDY: Secure CBT Native Isolation

### Context
Standard digital exams allow students to cheat via hardware overlays, screenshots, or split-screen browsers.

### Constraints
- Android 9-13 (Fragmented APIs)
- Non-rooted student devices
- Low memory overhead

### Architecture Decision: The Native Bridge
Instead of a pure Flutter solution, I architected a Kotlin-layer interceptor.

**Process Flow:**
1. Flutter triggers `MethodChannel("security_service")`.
2. Kotlin invokes `startLockTask()` (Enterprise-grade pinning without MDM).
3. Window flags are modified: `FLAG_SECURE` is set.
4. Android SystemUI is suppressed.

### Trade-offs
Increased complexity in the build pipeline (NDK/Native code), but achieved 100% screenshot blocking which is impossible in pure Dart.

### Results
Deployed for 100+ students with 0 recorded bypasses via software methods.
