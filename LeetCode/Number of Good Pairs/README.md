# 문제

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

## 풀이

```javascript
var numIdenticalPairs = function (nums) {
  const N = nums.length;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (i < j && nums[i] === nums[j]) {
        sum++;
      }
    }
  }

  return sum;
};
```

### [풀이](https://leetcode.com/submissions/detail/643248150/)
