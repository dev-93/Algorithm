const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = [];
const map = new Map();

for (let i = 1; i <= N; i++) {
  const [url, pw] = input[i].split(" ");
  map.set(url, pw);
}

for (let i = N + 1; i <= N + M; i++) {
  if (map.has(input[i])) {
    arr.push(map.get(input[i]));
  }
}

console.log(arr.join("\n"));
