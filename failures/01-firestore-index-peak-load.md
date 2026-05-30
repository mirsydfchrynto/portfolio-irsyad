# FAILURE_LOG_01: Firestore Index Latency at Scale

### Problem
During the *Geges Smart Barber* launch (100+ concurrent users), the queue filtering hung, resulting in duplicate bookings.

### Wrong Assumption
Assumed that Firestore Composite Indexes would propagate in <1s for new tenant registrations.

### Failure
New tenants were able to create bookings before their specific shop indexes were ready, causing the query to return empty results despite data being present.

### Fix
Implemented a **State-Driven Fallback**:
1. Try indexed query.
2. If `failed-precondition` (missing index) or empty result on new shop, fetch raw collection.
3. Apply filtering in-memory using a Dart helper.

### Lesson
Never rely 100% on DB-level filtering for critical UX on dynamic schemas. In-memory sorting is a mandatory safety net.
