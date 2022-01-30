const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

let N = +input[0];
const stack = [];
let answer = [];
let count = 1;

for (let i = 1; i <= N; i++) {
    stack.push(i);
    answer.push('+');

    while(stack[stack.length - 1] === +input[count]) {
        stack.pop();
        answer.push("-");
        count ++;
    };
}

console.log(!stack.length ? answer.join('\n') : "NO");