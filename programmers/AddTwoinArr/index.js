function solution(numbers) {
    const result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(i !== j) {
                result.push(numbers[i] + numbers[j]);
            }
        }    
    };
    
    const unique = new Set(result);
    
    return [...unique].sort((a,b) => a - b);
}