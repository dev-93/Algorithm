function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(const key in participant) {
        if (participant[key] !== completion[key]) {
            return participant[key];
        }
    }
}