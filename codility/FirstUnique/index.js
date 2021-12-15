function solution(A) {
    let element = new Set();
    
    for(let i in A){
        !element.has(A[i]) ? element.add(A[i]) : element.delete(A[i]);
    }

    const result = [...element];

    return result.length ? result[0] : -1;
}