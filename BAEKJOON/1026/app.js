const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const N = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);
const M = input[2]
  .split(" ")
  .sort((a, b) => b - a)
  .map(Number);

let sum = 0;

for (let i = 0; i < input[0]; i++) {
  sum += N[i] * M[i];
}

console.log(sum);
