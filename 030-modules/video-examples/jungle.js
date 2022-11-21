// import { printMonkey as PM } from "./monkey.js"; // es modules
// import PM, { monkey, tiger } from "./monkey.js";
// const printMonkey = require("monkey.js"); // commonjs
// import * as Everything from "./monkey.js";

// console.log(monkey);
// PM();
// console.log(monkey);
// console.log(tiger);

console.log(Everything);

Everything.default();

console.log(Everything.monkey);
console.log(Everything.tiger);

await Promise.resolve(2);
