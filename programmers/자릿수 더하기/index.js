function solution(n){
    return (n + '').split('').reduce((acc,cur) => Number(acc) + Number(cur), 0);
}