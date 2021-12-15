function solution(A) {
    const countNum = A.reduce(function (allCounts, num) {
        if (num in allCounts) {
            allCounts[num]++;
        } else {
            allCounts[num] = 1;
        }
        return allCounts;
    }, {});

    for(let key in countNum){
        if(Number(countNum[key]) === 1) {
            return Number(key);
        }
    };
}