function solution(array, commands) {
    const answer = [];
    
    commands.forEach((el) => {
        const sliceArr = array.slice(el[0] -1, el[1]);
        sliceArr.sort((a,b) => a - b);
        answer.push(sliceArr[el[2] - 1]);
    })
    
    return answer;
}