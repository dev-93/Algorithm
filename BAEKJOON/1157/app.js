const fileLocation = "./input.txt";
// const fileLocation = "/dev/stdin";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

function solution(input) {
    const answer = new Array(26).fill(0);
    input = input[0].toUpperCase();

    for(let i = 0; i < input.length; i++) {
        answer[input[i].charCodeAt(0)-65] += 1;
    };

    const max = Math.max(...answer);
    return answer.filter(v => v === max).length === 1 ?
        String.fromCharCode(answer.findIndex(value => value === max) + 65)
        : '?';
}

console.log(solution(input));