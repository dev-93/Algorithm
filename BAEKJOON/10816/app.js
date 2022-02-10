const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const N = input[1].split(" ").map(Number);
const M = input[3].split(" ").map(Number);

const map = new Map();

let answer = [];

N.forEach((v) => {
  const value = map.get(v);
  if (value) {
    map.set(v, value + 1);
  } else {
    map.set(v, 1);
  }
});

M.forEach((v) => {
  const value = map.get(v);
  if (value) {
    answer.push(value);
  } else {
    answer.push(0);
  }
});

console.log(answer.join(" "));
