const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(fileLocation).toString().trim();

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }

  if (0 > input) {
    console.log(-1);
    break;
  }

  count++;
  input -= 3;
}
