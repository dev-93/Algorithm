const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

input.shift();

const stack = [];

input.forEach((v,i) => {
    if(+v === 0) {
        stack.pop();
    } else {
        stack.push(+v);
    }
});

if(stack.length > 0) {
    const sum = stack?.reduce((acc, cur) => acc + cur);
    console.log(sum);
} else {
    console.log(0);
}


