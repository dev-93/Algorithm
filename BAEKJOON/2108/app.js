const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...nums] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

nums.sort((a, b) => a - b);

const result = nums.reduce((acc, cur) => acc + cur) / N;
const mid = nums[Math.floor(N / 2)];
const min = nums[0];
const max = nums[N - 1];

const map = new Map();
let maxCount = 1;
const maxArr = [];

for (let num of nums) {
  if (map.has(num)) {
    map.set(num, map.get(num) + 1);
    maxCount = Math.max(maxCount, map.get(num));
  } else {
    map.set(num, 1);
  }
}

for (let entry of map) {
  if (entry[1] === maxCount) {
    maxArr.push(entry[0]);
  }
}

console.log(Math.round(result) === -0 ? 0 : Math.round(result));
console.log(mid);
console.log(maxArr.length >= 2 ? maxArr[1] : maxArr[0]);
console.log(Math.abs(max - min));
