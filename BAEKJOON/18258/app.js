const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().split('\n');

input.shift();

const N = input.length;
let answer = "";
const stack = [];

input.forEach((v, i) => {
    const temp = v.split(" ");
    switch(temp[0]) {
        case 'front' :
            stack.length < 1 ? answer += -1 : answer += stack[0];
            break;
        case 'back' :
            stack.length < 1 ? answer += -1 : answer += stack[stack.length -1];
            break;
        case 'size' :
            answer += stack.length;
            break;
        case 'pop' :
            stack.length < 1 ? answer += -1 : answer += stack.shift();
            break;
        case 'empty' :
            stack.length < 1 ? answer += 1 : answer += 0;
            break;
        default : 
            stack.push(temp[1]);
            break;
    }
    if(i !== N - 1 && temp[0] !== 'push'){
        answer+='\n'
    }
})

console.log(answer);