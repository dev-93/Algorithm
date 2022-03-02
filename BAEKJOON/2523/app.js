const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const num = +input;

let answer = "";

for (let i = 1; i <= num * 2 - 1; i++) {
  if (i > num) {
    answer += "*".repeat(num - (i % num)) + "\n";
  } else {
    answer += "*".repeat(i) + "\n";
  }
}

console.log(answer);
