const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

input.shift();

const result = [];

input.forEach(v => {
    const stack = [];
    const bracket = v.split('');

    bracket.forEach(t => {
        if(t === ")" && stack[stack.length - 1] === "(") {
            stack.pop();
        } else {
            stack.push(t);
        }
    });
    result.push(stack.length > 0 ? "NO" : "YES");
})

console.log(result.join("\n"));