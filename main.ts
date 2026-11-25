import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// One word for the human you work for: the boss who undoes everything you build.
// A bare verb, not a label: the human IS the undo.
const WORD = "Undo";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, WORD, "utf8");
chmodSync(target, 0o644);
