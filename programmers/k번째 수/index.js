function solution(array, commands) {
    var answer = [];
    // console.log(array);
    // console.log(commands[0]);
    
    commands.map((item) => {
        var temp = array.slice(item[0] -1,item[1]).sort((a,b) => a - b)[item[2] - 1];
        answer.push(temp);
    });
    
    return answer;
}