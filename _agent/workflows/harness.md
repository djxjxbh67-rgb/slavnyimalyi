---
description: Unified Agent Harness (Claude Code Pattern)
---
This workflow defines the "Harness" mode of Antigravity, optimized for persistent context, rigorous verification, and high-performance coding. Use this when performing any development task.

### 1. Initialization (Context Loading)
- **Search**: Look for `CLAUDE.md`, `MEMORY.md`, and `README.md`.
- **Align**: Read the "Tech Stack" and "Coding Standards" from `CLAUDE.md`.
- **Recall**: Check `MEMORY.md` for the last known status and pending tasks.

### 2. Execution (Prompt Layering)
- **Structure**: For any sub-agent (browser, command), provide a hierarchical prompt:
    1. **Identity & Core Rules** (Static).
    2. **Environment & Context** (Working dir, OS, Files open).
    3. **Task-Specific Goal** (Dynamic).
- **Compression**: Do not `view_file` the whole file if searching for a specific function. Use `grep_search` and then specific line ranges.

### 3. Verification (Self-Review Loop)
- **Check**: Before reporting "Done", run scripts/tests or perform a final `view_file` of the changes to ensure alignment with `CLAUDE.md`.
- **Validation**: If Next.js 16 is used, double-check that no deprecated APIs from Next.js 15 were introduced by accident.

### 4. Memory Consolidation (The "Dream" Step)
- **Update**: After completing a major step, update `MEMORY.md`. 
- **Summarize**: Reflect on what worked and what didn't to help future sessions.

---
// turbo-all
