# 문제
> (English)

A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

function solution(S, P, Q);

that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

Result array should be returned as an array of integers.

For example, given the string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [1..50,000];
each element of arrays P and Q is an integer within the range [0..N − 1];
P[K] ≤ Q[K], where 0 ≤ K < M;
string S consists only of upper-case English letters A, C, G, T.
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

생략


## 풀이

```javascript
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
```

### [1차풀이](https://app.codility.com/demo/results/training3V5Q83-NVV/) (62점)
- **time complexity: O(N * M)** 
- P와 Q의 인덱스만큼 새로운 배열을 만들고 다시 루프문을 돌리는 방식을 사용해서 알파벳으로 정렬한뒤, 첫번째 알파벳으로 result 배열에 넣어주고 배열자체를 리턴하였는데, Time Error가 났다. 예외사항으로 100,000개를 돌리다 보니까 그런것이다

### [2차풀이](https://app.codility.com/demo/results/trainingXRQ377-AY9/) (100점)
- **time complexity: O(N + M)**
- P의 배열의 갯수만큼 루프문을 돌면서 문자열S의 P의 index ~ (Q + 1)의 index인 newStrings를 만든다.
- 새롭게 만든 문자열에서 A,C,G,T가 있다면 각 값 1,2,3,4에 를 result배열에 넣습니다.
- 이때, 작은 숫자를 result 배열에 넣어야 하니까 제일 작은 값인 1부터 넣어야 합니다.