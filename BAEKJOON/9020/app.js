const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [N, ...temp] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const input = temp.map(Number);
const arr = [];

input.sort((a, b) => a - b);

function solution(n) {
  arr.splice(0, 2, false, false);

  for (let i = 2; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((e) => e);
}

const answer = [];
const result = solution(input[input.length - 1]);

input.forEach((v, index) => {
  let tempArr = [];

  for (let i = 0; i < result.length; i++) {
    let min = Number.POSITIVE_INFINITY;
    for (let j = 0; j < result.length; j++) {
      if (result[i] + result[j] === v && i <= j) {
        if (min > Math.abs(result[j] - result[i])) {
          min = Math.abs(result[j] - result[i]);
          tempArr.push([result[i], result[j]]);
        }
      }
    }
  }

  tempArr.sort((a, b) => Math.abs(a[1] - a[0]) - Math.abs(b[1] - b[0]));
  tempArr = tempArr[0];

  answer.push(tempArr);
});

answer.forEach((v) => {
  console.log(v[0], v[1]);
});
