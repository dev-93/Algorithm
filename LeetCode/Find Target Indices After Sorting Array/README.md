# 문제

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

## 풀이

```javascript
const targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === target) {
      ans.push(i);
      i++;
    }
    if (ans.length) break;
  }
  return ans;
};
```

### [풀이](https://leetcode.com/submissions/detail/648001020/)
