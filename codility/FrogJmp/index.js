function solution(X, Y, D) {
    let count = 0;

    while(X < Y) {
        X += D;
        count ++;
    };

    return count;
}