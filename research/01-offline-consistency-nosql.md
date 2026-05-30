# RESEARCH_NOTE_01: Offline-First Consistency in NoSQL

### Question
Can distributed booking systems maintain sequence integrity under 30% packet loss without increasing Firestore write overhead?

### Hypothesis
Using a client-side **Vector Clock** combined with a **Write-Ahead Log (WAL)** in Hive will allow for deterministic conflict resolution upon reconnection, bypassing the need for expensive server-side transaction polling.

### Experiment
- **Environment:** Flutter (Hive Storage) + Firestore.
- **Variable:** Simulated 2s jitter and 30% packet loss.
- **Mechanism:** Every booking write is appended with a `(client_id, sequence_num, server_drift_offset)`.

### Findings
1. **Clock Drift is Fatal:** Simple local timestamps caused 15% booking overlaps. 
2. **Correction:** Server-side timestamp handshake at session start reduced overlaps to <1%.
3. **Bottleneck:** In-memory state prediction creates a "UI jump" if the server rejects the sequence.

### Next Steps
Explore **CRDT (Conflict-free Replicated Data Types)** implementation for specific booking slots to eliminate the "Last Write Wins" race condition.
