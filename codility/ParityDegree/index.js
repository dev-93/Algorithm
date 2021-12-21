// 1차 풀이

function solution(N) {
    let maximumIndex = 0;

    if(N === 1) {
        return 0;
    }

    for(let i = 0; i < N ; i++) {
        const power = Math.pow(2, i);

        if (N % power === 0) {
            maximumIndex = i;
        };

        if(power > N) {
            return maximumIndex;
        };
    }
}

// 2차 풀이

function solution(N) {
    let maximumIndex = 0;

    for(let i = 0; i < N ; i++) {
        const power = Math.pow(2, i);
        
        if (N % power === 0) {
            maximumIndex = i;
        };

        if(power > N) {
            return maximumIndex;
        };
    }

    return maximumIndex;
}