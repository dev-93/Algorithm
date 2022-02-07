const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input);

const diff = input[1] - input[0];
let res = "";

for (let i = 2; i < input.length; i++) {
  const prev = input[i - 1];
  const cur = input[i];
  if (cur - prev !== diff) {
    res = "mixed";
    break;
  }
}
console.log(res ? res : diff > 0 ? "ascending" : "descending");
