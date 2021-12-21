function solution(A) {
    let sum = 0;
    let result = 0;

    for (let i = A.length-1; i >= 0; i--){
        if (A[i] === 1) {
            sum++
        } else {
            result += sum
        };
    }

    if (result > 1000000000) {
        return -1;
    };

    return result;
}