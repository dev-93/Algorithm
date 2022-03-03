const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const map = new Map();

for (let i = 0; i < n; i++) {
  map.set(input[i], 1);
}

let answer = [];

for (let i = n; i <= n + m; i++) {
  if (map.has(input[i])) {
    answer.push(input[i]);
  }
}

answer.sort();

console.log(`${answer.length}\n${answer.join("\n")}`);
