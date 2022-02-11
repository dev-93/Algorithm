const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const N = input[1].split(" ");
const M = input[3].split(" ");

const set = new Set(N);
let answer = "";

M.forEach((v) => {
  if (set.has(v)) {
    answer += `1 `;
  } else {
    answer += `0 `;
  }
});

console.log(answer);
