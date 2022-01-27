const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

const N = Number(input.shift());
const set = new Set(input);
const newArr = [...set];

let answer = "";
newArr.sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(v => answer += v+"\n");

console.log(answer);