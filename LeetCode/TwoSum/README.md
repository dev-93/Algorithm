# 문제

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## example

- Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

- Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

- Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]

## Constraints:

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.

## 풀이

```javascript
const twoSum = function (nums, target) {
  const N = nums.length;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
```

### [풀이](https://leetcode.com/submissions/detail/631374472/)

- **time complexity: O(N\*log(N)) or O(N)**
- 주어진 배열안에서 고유한 값의 수를 반환하는 것인데, 배열안에 중복제거를 사용한 방법은 Set을 이용하여 중복제거를 하였다. 이후 object를 spread operator를 이용하여 나열한 뒤, 배열의 길이를 리턴하였다.