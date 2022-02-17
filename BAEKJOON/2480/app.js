const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [a, b, c] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ");

if (a === b && a === c && b === c) {
  console.log(10000 + a * 1000);
} else if (a !== b && a !== c && b !== c) {
  console.log(Math.max(a, b, c) * 100);
} else {
  const map = new Map();
  let twiceNum = 0;

  [a, b, c].forEach((v) => {
    if (map.has(v)) {
      twiceNum = v;
    } else {
      map.set(v, 1);
    }
  });

  console.log(1000 + twiceNum * 100);
}
