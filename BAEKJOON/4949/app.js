const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('.');

input.pop();
input.pop();
const result = [];

input.forEach(v => {
    const stack = [];
    const filtered = v.split('').filter(q => q === "(" || q === ")" || q === "[" || q === "]"); 

    filtered.forEach(t => {
        if (t === ")" && stack[stack.length - 1] === "(" || t === "]" && stack[stack.length - 1] === "[") {
            stack.pop();
        } else {
            stack.push(t);
        }
    });

    result.push(stack.length > 0 ? "no" : "yes" );
})

console.log(result.join('\n'));