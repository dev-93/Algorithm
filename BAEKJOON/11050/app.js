const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [a, b] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

const result = factorial(a) / (factorial(b) * factorial(a - b));

console.log(result);
