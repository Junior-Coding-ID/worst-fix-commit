import { mkdirSync, writeFileSync } from "node:fs";

// Worst Fix Ever: Funniest Commit Message — v2.
// One-line commit message for a bug fix that made everything worse:
// the "fix" for lost drafts publishes on every keystroke.
const ENTRY =
  "fix: prevent lost drafts by publishing on every keystroke";

// Guard: the gate requires 1–100 UTF-8 characters, not whitespace-only.
// Fail loudly instead of writing an invalid entry.
if (!ENTRY.trim() || [...ENTRY].length > 100) {
  throw new Error("entry fails the 1–100 character gate");
}

// Output directory: the grader's /output, or MAKEFUN_OUTPUT for local tests.
const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
