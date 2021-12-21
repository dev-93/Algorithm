function solution(N, A) {
    const makeArr = Array(N);
    const resultArr = makeArr.fill(0,0,N);
    let maxNumber = 0; 

    for(let i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            resultArr[A[i] - 1] += 1;
        } else {
            resultArr.fill(maxNumber,0,N);
        }

        if( resultArr[A[i] - 1] > maxNumber ) {
            maxNumber = resultArr[A[i] - 1];
        };
    };

    return resultArr;
}