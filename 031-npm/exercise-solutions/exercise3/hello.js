import { Command } from "commander";
const program = new Command();

program.option("-n, --name <name>", "your name");
program.parse();

const options = program.opts();

// console.log(options);
// console.log(options.name);

console.log(`Hello, ${options.name}!`);
