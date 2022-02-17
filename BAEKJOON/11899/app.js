const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("");

const N = input.length;
const stack = [];

for (let i = 0; i < N; i++) {
  if (input[i] === ")" && stack[stack.length - 1] === "(") {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}

console.log(stack.length);
