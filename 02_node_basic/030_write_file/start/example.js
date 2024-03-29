// console.log('hello, node.js');

const fs = require("fs");
const path = require("path");

// console.log(__filename);

const distPath = path.resolve(__dirname, '..', 'dist', 'hello.txt');
console.log(distPath);

fs.writeFileSync(distPath, "hello, node.js");
