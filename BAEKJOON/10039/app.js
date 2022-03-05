const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

  console.log(input.reduce((acc, cur) => {
    if (cur < 40) {
      cur = 40;
    }
    return acc + cur
  },0) / 5);