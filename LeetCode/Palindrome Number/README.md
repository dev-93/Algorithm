# 문제

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

## example

- Example 1:
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.

- Example 2:
  Input: x = -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

- Example 3:
  Input: x = 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

## Constraints:

- -2^31 <= x <= 2^(31 - 1)

## 풀이

```javascript
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const arr = x.toString().split("");
  const N = arr.length;

  for (let i = 0; i < N; i++) {
    if (arr[i] !== arr[N - 1 - i]) {
      return false;
    }
  }

  return true;
};
```

### [풀이](https://leetcode.com/submissions/detail/631402806/)
