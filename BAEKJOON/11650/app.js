const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

const N = Number(input.shift());
const temp = input.filter((v, i) => i >= 0).map((v) => v.split(' '));

let answer = "";

temp.sort((a,b) => {
    if(a[0] === b[0]) {
        return a[1] - b[1]
    } else {
        return a[0] - b[0]
    }
}).forEach(v => {
    answer += `${v[0]} ${v[1]}\n`
})

console.log(answer)