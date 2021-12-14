function solution(N) {
    if (!(N & (N - 1))) {
        return 0
    }
    const binary = N.toString(2);
    const zeroArr = binary.split('1').filter(t => t !== "").map(t => t.length);

    return zeroArr.length > 0 ? Math.max(...zeroArr) : 0;
};
