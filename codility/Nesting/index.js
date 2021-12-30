function solution(S) {
    if(S.length === 1) {
        return 1;
    };

    const result = [];

    for (let i = 0; i < S.length; i++ ) {
        const element = S[i];

        if(element === "(") {
            result.push(element);
        } else {
            if (result[result.length -1] === "(") {
                result.pop();
            } else {
                result.push(element);
            }
        }
    }

    return result.length ? 0 : 1;
}