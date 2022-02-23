const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

let arrX = [];
let arrY = [];

let x;
let y;

for (let i = 0; i < 3; i++) {
  arrX.push(Number(input[i].split(" ")[0]));
  arrY.push(Number(input[i].split(" ")[1]));
}

arrX = arrX.sort();
arrY = arrY.sort();

x = arrX[1] === arrX[0] ? arrX[2] : arrX[0];
y = arrY[1] === arrY[0] ? arrY[2] : arrY[0];

console.log(`${x} ${y}`);
