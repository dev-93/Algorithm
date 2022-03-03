# 문제

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

## 풀이

```javascript
var countConsistentStrings = function (allowed, words) {
  const N = words.length;
  let count = 0;

  for (let i = 0; i < N; i++) {
    const arr = words[i].split("");
    count++;

    for (let j = 0; j < arr.length; j++) {
      const temp = words[i][j];

      if (allowed.indexOf(temp) === -1) {
        count--;
        break;
      }
    }
  }

  return count;
};
```

### [풀이](https://leetcode.com/submissions/detail/652589277/)
