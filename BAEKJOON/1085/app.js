const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [x, y, w, h] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let min = Number.POSITIVE_INFINITY;

const xMinusZero = x - 0;
const yMinusZero = y - 0;
const xMinusW = w - x;
const hMinusy = h - y;

if (xMinusZero < min) {
  min = xMinusZero;
}
if (yMinusZero < min) {
  min = yMinusZero;
}
if (xMinusW < min) {
  min = xMinusW;
}
if (hMinusy < min) {
  min = hMinusy;
}

console.log(min);
