const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(fileLocation).toString().trim();

let num = Number(input);
let count = 1;

while (true) {
  num -= count;
  if (num <= 0) {
    num += count;
    break;
  }
  count++;
}

if (count % 2 === 1) {
  console.log(`${count - (num - 1)}/${1 + (count - 1)}`);
} else {
  console.log(`${1 + (num - 1)}/${count - (num - 1)}`, 1);
}
