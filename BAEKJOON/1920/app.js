const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const N = input[1].split(" ");
const M = input[3].split(" ");

const map = new Map();

let answer = "";

N.forEach((v) => {
  map.set(v, 1);
});

M.forEach((v) => {
  const value = map.get(v);
  if (value) {
    answer += 1 + "\n";
  } else {
    answer += 0 + "\n";
  }
});

console.log(answer);
