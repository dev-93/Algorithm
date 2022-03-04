const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [n, ...arr] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(/\s/);

const stringN = arr[0].length;

const answer = [];

for (let i = 0; i < stringN; i++) {
  let str = arr[0][i];
  for (let j = 0; j < n; j++) {
    if (arr[j][i] !== str) {
      str = "?";
    }
  }

  answer.push(str);
}

console.log(answer.join(""));
