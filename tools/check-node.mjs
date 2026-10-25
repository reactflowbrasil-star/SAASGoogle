import { readFileSync } from "node:fs";

const required = readFileSync(new URL("../.nvmrc", import.meta.url), "utf8").trim();
const current = process.versions.node;

const majorCurrent = parseInt(current.split(".")[0], 10);
const majorRequired = parseInt(required.split(".")[0], 10);

if (current === required || majorCurrent >= majorRequired) {
  console.log(`Node ${current}`);
  process.exit(0);
}

console.error(
  `Repository development requires Node ${required}. Current: ${current}. Run: nvm install && nvm use`,
);
process.exit(1);
