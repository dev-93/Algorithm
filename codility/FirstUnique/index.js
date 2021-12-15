function solution(A) {
    let element = new Set();
    const deletedStore = [];
    
    for(let i in A){
        if(!element.has(A[i])) {
            if (deletedStore.indexOf(A[i]) === -1) {
                element.add(A[i]);
            }
        } else {
            deletedStore.push(A[i]);
            element.delete(A[i]);
        };
    };

    const result = [...element];

    return result.length ? result[0] : -1;
}