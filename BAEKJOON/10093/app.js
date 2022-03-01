const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [A, B] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = [];

if (A < B) {
  console.log(B - A - 1);
  for (let i = A + 1; i < B; i++) {
    arr.push(i);
  }
} else if (B < A) {
  console.log(A - B - 1);
  for (let i = B + 1; i < A; i++) {
    arr.push(i);
  }
} else {
  console.log(0);
}

console.log(arr.join(" "));
