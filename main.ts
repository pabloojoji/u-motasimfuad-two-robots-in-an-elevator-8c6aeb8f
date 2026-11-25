// Two Robots in an Elevator — entry program.
// Writes one line of awkward robot small talk to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, standard library only. No network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "So… do you also pretend to check your updates when the doors close, or is that just me?";

// The sealed gate accepts UTF-8 text of 1 to 200 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
