function solution(S) {
    if(!S.length || S.length % 2 === 0) {
        return -1;
    };

    if(S.length === 1) {
        return 0;
    };

    return Math.floor(S.length / 2);
};