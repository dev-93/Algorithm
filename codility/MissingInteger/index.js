function solution(A) {
    let min = 1;
    A.sort((a,b) => a - b);

    A.map(num => {
        if (num > 0 && num === min) {
            min++ ;
        }
    })

    return min;
}