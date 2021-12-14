function solution(P, C) {
    let result;
    const perCourt = 2 * C;
    
    if (P >= perCourt) {
        result = C
    } else {
        result = parseInt(P / 2);
    }

    return result;
}
