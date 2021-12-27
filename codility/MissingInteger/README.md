# 문제
> (English)

This is a demo task.
Write a function:
function solution(A);
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

N 정수의 배열 A가 주어지면 A에서 발생하지 않는 가장 작은 양의 정수(0보다 큼)를 반환합니다.
예를 들어 A = [1, 3, 6, 4, 1, 2]가 주어지면 함수는 5를 반환해야 합니다.
A = [1, 2, 3]이 주어지면 함수는 4를 반환해야 합니다.
A = [−1, −3]이 주어지면 함수는 1을 반환해야 합니다.
다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [1..100,000] 범위 내의 정수입니다.
배열 A의 각 요소는 [−1,000,000..1,000,000] 범위의 정수입니다.

## 풀이
### [1차풀이](https://app.codility.com/demo/results/trainingA4HJM7-V73/) (100점)
- **time complexity: O(N) or O(N * log(N))** 
- 문제에서 0보다 큰 양의 정수중 가장 작은 값을 리턴해야한다고 주어졌다.
- 리턴되는 값은 최소 1이상 이어야 한다. 처음 min 값을 1로 초기화 시킨다.
- 오름차순으로 정렬한 뒤, map을 이용한 루프문을 돌면서 num이 0보다 크고 min과 같다면 min에 1씩 더한뒤 리턴한다.
- ES6 이상 문법을 활용하려고 풀려고 노력하였다.