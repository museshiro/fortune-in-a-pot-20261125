import { mkdirSync, writeFileSync } from "node:fs";

const first =
  "On this sill, you will outlast the yoga mat, ";
const second =
  "the bread starter, and every hobby she names after one video.";
const line = first + second; // one fortune, one line, 106 chars

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
