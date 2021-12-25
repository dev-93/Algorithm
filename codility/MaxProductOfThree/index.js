function solution(A) {
    const result = [];

    A.sort((a,b) => a-b);

    result.push(A[A.length - 1] * A[A.length - 2] * A[A.length - 3]);
    result.push(A[0] * A[1] * A[A.length - 1]);
    
    return Math.max(...result);
}