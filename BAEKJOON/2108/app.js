const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n').map(v => +v);

const N = input.shift();
const map = new Map();
let max = Number.NEGATIVE_INFINITY;
let sum = 0;

input.sort((a, b) => a - b);

for(let i = 0; i < N; i++) {
    sum += input[i];

    if(map.has(input[i])) {
        const value = map.get(input[i]) + 1;
        map.set(input[i], value);
    } else {
        map.set(input[i], 1);
    }

    max = Math.max(max, map.get(input[i]));
}

const maxArr = [];

for (let entry of map) {
    if (entry[1] === max) maxArr.push(entry[0]);
}

const AverageSum = Math.round(sum / N);
const mid = input[Math.floor(N / 2)];
const maxCount = maxArr.length >=2 ? maxArr[1] : maxArr[0];
const diff = Math.abs(input[N-1] - input[0]);

console.log(AverageSum);
console.log(mid);
console.log(maxCount);
console.log(diff);