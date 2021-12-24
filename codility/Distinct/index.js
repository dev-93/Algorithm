function solution(A) {
    const unique = new Set(A);
    return [...unique].length;
}
