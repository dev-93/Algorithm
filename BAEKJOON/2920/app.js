const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const ascendingArr = [];
const descendingArr = [];
const mixedArr = [];

for (let i = 1; i < input.length - 1; i++) {
  if (input[i] === input[i - 1] + 1) {
    ascendingArr.push(input[i]);
    continue;
  }

  if (input[i] == input[i - 1] - 1) {
    descendingArr.push(input[i]);
    continue;
  }

  if (input[i] !== input[i - 1] + 1 || input[i] !== input[i - 1] - 1) {
    mixedArr.push(input[i]);
  }
}

if (ascendingArr.length && !mixedArr.length) {
  console.log("ascending");
}

if (descendingArr.length && !mixedArr.length) {
  console.log("descending");
}

if (mixedArr.length) {
  console.log("mixed");
}
