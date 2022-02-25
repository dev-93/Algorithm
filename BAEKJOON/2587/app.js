const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

console.log(input.reduce((acc, cur) => acc + cur) / input.length);
console.log(input[Math.floor(input.length / 2)]);
