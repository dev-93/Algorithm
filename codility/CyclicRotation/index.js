function solution(A, K) {
    if(A.length === 0) {
        return [];
    };
    
    if(A.length === K) {
        return A;
    };

    for (let i = 0; i < K; i++) {
        const lastEle = A.pop();
        A.unshift(lastEle);
    };

    return A;
}