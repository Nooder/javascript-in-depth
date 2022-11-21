const fs = require("fs-extra"); // CommonJS
// import fs from 'fs-extra';

const file = "hello.txt";

fs.outputFileSync(file, "Hello, from NodeJS!");
