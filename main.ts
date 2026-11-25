import { mkdirSync, writeFileSync } from "node:fs";

const entry = "fix: prevent lost drafts by publishing on every keystroke";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
