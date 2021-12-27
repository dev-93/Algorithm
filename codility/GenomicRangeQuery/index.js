function solution(S, P, Q) {
    const result = [];
    
    for(let i = 0; i < P.length; i++) {
        const pIndex = P[i];
        const qIndex = Q[i];
        const newArr = [];
        
        for (let j = pIndex; j < qIndex + 1; j++) {
            newArr.push(S[j]);
        }

        newArr.sort();

        switch(newArr[0]) {
            case "A": 
                result.push(1);
                break;
            case "C": 
                result.push(2);
                break;
            case "G": 
                result.push(3);
                break;
            case "T": 
                result.push(4);
                break;
            default:
                new Error("error")
        }
    }

    return result;
}