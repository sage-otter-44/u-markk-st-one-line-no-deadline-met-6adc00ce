import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finished it on time — then my laptop updated, my cat sat on the keyboard, and the file is now being held hostage by a printer that only speaks Wingdings.";

const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
}
if (trimmed.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed, "utf8");
