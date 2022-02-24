# 문제

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

## 풀이

```javascript
const targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  const arr = [];
  nums.filter((v, i) => v === target && arr.push(i));

  return arr;
};
```

### [풀이](https://leetcode.com/submissions/detail/647993788/)
