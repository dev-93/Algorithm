const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [N, K] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array.from({ length: N }, (_, i) => i + 1);
const answer = [];

while (arr.length) {
  for (let i = 0; i < K; i++) {
    arr.push(arr.shift());
  }

  answer.push(arr.pop());
}

console.log(`<${answer.join(", ")}>`);
