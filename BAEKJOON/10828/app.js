const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

input.shift();

const stack = [];
const result = [];

input.forEach((v,i) => {
    const command = v.split(' ');
    switch(command[0]) {
        case "pop" :
            result.push(stack.pop() || -1);
            break;
        case "size" :
            result.push(stack.length);
            break;
        case "empty" :
            result.push(stack[0] ? 0 : 1);
            break;
        case "top" :
            result.push(stack[stack.length - 1] || -1);
            break;
        default: 
            stack.push(+command[1]);
            break;
    }
});

console.log(result.join("\n"))
