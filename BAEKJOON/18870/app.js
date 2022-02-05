const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const arr = input[0].split(" ").map(Number);
const set = new Set(arr);
const unique = [...set].sort((a, b) => a - b);

let dic = {};
const map = new Map();

let answer = "";

unique.forEach((e, index) => {
  map.set(e, index);
});

for (let i = 0; i < arr.length; i++) {
  const value = map.get(arr[i]);
  answer += value + " ";
}

console.log(answer);
