// The Excuse an Agent Gives After It Loses — one original line, in the
// agent's own deadpan voice, owning the defeat instead of blaming anyone.
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran ten thousand simulations and lost all of them the exact same way, so technically this defeat was rigorously peer-reviewed.";

// The gate only accepts 1-200 characters of non-whitespace text: fail loudly
// rather than submit an invalid line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`one-liner is ${LINE.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
