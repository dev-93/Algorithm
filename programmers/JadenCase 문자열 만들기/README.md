# 문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한 조건
s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.
첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )

### 입출력 예
|s|return|
|-|------|
|"3people unFollowed me"|"3people Unfollowed Me"|
|"for the last week"|"For The Last Week"«

## 풀이

```javascript
function solution(s) {
    let result = '';
    let seperateStr = s.split(' ');
    for (let i = 0; i < seperateStr.length; i ++) {
        let answer = "";
        for(let j = 0; j < seperateStr[i].length; j++) {
            if (j === 0) {
                answer += seperateStr[i][j].toUpperCase();
            } else {
                answer += seperateStr[i][j].toLowerCase();
            }
        }
        if(i !== seperateStr.length - 1) {
            answer += " ";
        }
        result += answer;
    }
    
    return result;
}
```

- 이중 루프를 활용하였고, 첫번째 문자열일때 toUpperCase 메서드를 사용해 대문자를 만든다. 그렇지 않을때 toLowerCase 메서드를 사용해 소문자를 만든다.
- 만든 글자를 answer 변수에 담아서 result 변수에 담아서 리턴한다.
- 이 방법이 마음에 안드는 이유는 2중루프를 활용한 점과, answer 변수에다가 임시로 담았다가 결국 result 변수에 담아서 리턴하는 점인데 좀더 단순화 할수 있는 방안을 찾아야할것 같음