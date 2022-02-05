const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(fileLocation).toString().trim();
let result = 1;

for (let i = input; i > 1; i--) {
  result = result * i;
}

console.log(result);
