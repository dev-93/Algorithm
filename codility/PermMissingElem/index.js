function solution(A) {
    if(!A.length) return 1;

    A.sort((a,b) => a-b);
    
    if (A[0] === 2) {
        return 1;
    };
    
    for (let i = 0; i < A.length; i++) {
        if(A[i] + 1 !== A[i+1]) {
            return A[i] + 1;
        }
    }
}