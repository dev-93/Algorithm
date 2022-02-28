const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

let [n, m, b] = input.shift().split(" ").map(Number);

const arr = input.flatMap((v) => {
  return v.split(" ").map(Number);
});

const map = new Map();

for (let i = 0; i < n * m; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}

let maxCount = Number.NEGATIVE_INFINITY;
let maxNumber = Number.NEGATIVE_INFINITY;
let minCount = Number.POSITIVE_INFINITY;
let minNumber = Number.POSITIVE_INFINITY;
const avg = Math.round(arr.reduce((acc, cur) => acc + cur) / arr.length);

for (let entry of map) {
  if (entry[1] < minCount) {
    minCount = entry[1];
    minNumber = entry[0];
  }

  if (entry[1] > maxCount) {
    maxCount = entry[1];
    maxNumber = entry[0];
  }
}

let time = 0;

arr.forEach((v, i) => {
  if (minCount > b) {
    arr[i] = arr[i] + time;
    time--;
    b--;
  } else {
    if (v > avg) {
      time = (v - avg) * 2;
    } else {
      time = avg - v;
      arr[i] = arr[i] + time;
    }
  }
});

// console.log(time);
// console.log(Math.max(...arr));

console.log(minCount, b, time, avg);
