function solution(S, P, Q) {
    const result = [];

    for(let i = 0; i < P.length; i++) {
        const pIndex = P[i];
        const qIndex = Q[i];
        
        const newStrings = S.slice(pIndex, qIndex + 1);

        switch(true) {
            case (newStrings.indexOf('A') !== -1):
                result.push(1);
                break;
            case (newStrings.indexOf('C') !== -1):
                result.push(2);
                break;
            case (newStrings.indexOf('G') !== -1):
                result.push(3);
                break;
            case (newStrings.indexOf('T') !== -1):
                result.push(4);
                break;
        }
    };

    return result;
}