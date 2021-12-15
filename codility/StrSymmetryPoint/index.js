function solution(S) {
    if(S.length === 1) {
        return 0;
    };

    if(!S.length || S.length % 2 === 0) {
        return -1;
    };

    let missCount = 0;

    for (let i = 0; i< S.length; i++) {
        if(S[i] !== S[S.length -1 -i]) {
            missCount ++;
        };
    };

    if(!missCount) {
        return Math.floor(S.length / 2);
    } else {
        return -1;
    };
}