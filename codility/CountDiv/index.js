function solution(A, B, K) {
    const devideA = Math.floor((A-1) / K);
    const devideB = Math.floor(B / K);
    const result = devideB - devideA;
    
    return result;
}