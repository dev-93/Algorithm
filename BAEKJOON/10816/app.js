const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const arr1 = input[1].split(" ").map(Number);
const arr2 = input[3].split(" ").map(Number);

const N = Number(input[0]);
const M = Number(input[2]);

const map = new Map();

let answer = [];

for (let i = 0; i < N; i++) {
  if (map.get(arr1[i])) {
    map.set(arr1[i], map.get(arr1[i]) + 1);
  } else {
    map.set(arr1[i], 1);
  }
}

for (let i = 0; i < M; i++) {
  if (map.has(arr2[i])) {
    answer.push(map.get(arr2[i]));
  } else {
    answer.push(0);
  }
}

console.log(answer.join(" "));
