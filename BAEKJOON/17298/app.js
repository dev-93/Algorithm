const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n')[1].split(" ").map((a) => +a);

let stack = [];
const N = input.length;
let result = new Array(N).fill(-1);

for (let i = 0; i < N; i++) {
	while (stack.length && input[stack[stack.length - 1]] < input[i]) {
		result[stack.pop()] = input[i];
	}
	stack.push(i);
}
console.log(result.join(" "));