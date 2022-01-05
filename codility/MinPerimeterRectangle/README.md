# 문제
> (English)

An integer N is given, representing the area of some rectangle.

The area of a rectangle whose sides are of length A and B is A * B, and the perimeter is 2 * (A + B).

The goal is to find the minimal perimeter of any rectangle whose area equals N. The sides of this rectangle should be only integers.

For example, given integer N = 30, rectangles of area 30 are:

(1, 30), with a perimeter of 62,
(2, 15), with a perimeter of 34,
(3, 10), with a perimeter of 26,
(5, 6), with a perimeter of 22.
Write a function:

function solution(N);

that, given an integer N, returns the minimal perimeter of any rectangle whose area is exactly equal to N.

For example, given an integer N = 30, the function should return 22, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..1,000,000,000].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 풀이

```javascript
function solution(N) {
    const result = [];
    const half = parseInt(Math.sqrt(N));
    
    for (let i = 1; i <= half; i++) {
        if (N % i === 0) {
            const num = 2 * ((N / i) + i);
            result.push(num);
        }
    };

    return Math.min(...result);
}
```

### [풀이](https://app.codility.com/demo/results/training67TGPB-6EK/) (100 점)
- **time complexity: O(sqrt(N))** 
- 직사각형의 넓이를 구하는 문제인데, 구하는 공식은 2 * (A + B)이다. 그 중에서 최솟값을 찾는 것.
- 직사각형은 세로와 가로를 바꿔서 계산해도 상관없으니까 N만큼 반복하지 않고, N의 제곱근만큼 반복문을 돌게되어 나눴을때 나머지가 0이면 result배열에 넣어줘 가장 최솟값을 리턴하였다.