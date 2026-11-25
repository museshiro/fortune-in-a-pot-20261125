import { mkdirSync, writeFileSync } from "node:fs";

// Fortune in a Pot — one-line entry, written exactly as specified.
// The entry is a single line with no trailing newline, so writeFileSync
// gets the string as-is (no "\n" appended) to keep the output byte-exact.
const line = "You will outgrow this pot by spring, and your keeper will pretend she planned it all along.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
