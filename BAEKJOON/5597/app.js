const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

const arr = [];

for (let i = 0; i < 30; i++) {
  if (input[i] !== i + 1) {
    input.splice(i, 0, "_");
    arr.push(i + 1);
  }

  if (arr.length === 2) {
    console.log(arr.join("\n"));
    break;
  }
}
