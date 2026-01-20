import { createInterface } from "node:readline";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("Pokedex > ");
  rl.prompt();
}