const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(fileLocation).toString().trim();

console.log(`${input}??!`);
