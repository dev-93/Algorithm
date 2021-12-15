function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!A.length) return 0;

    A.sort((a,b) => a-b);

    for (let i = 0; i < A.length; i++) {
        if(A[i] + 1 !== A[i+1]) {
            return A[i] + 1;
        }
    }
}