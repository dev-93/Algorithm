# 문제

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

## 풀이

```javascript
var countMatches = function (items, ruleKey, ruleValue) {
  const find = (num) => {
    let sum = 0;

    items.forEach((v) => {
      const matchLength = v.filter(
        (value, i) => i === num && value === ruleValue
      ).length;

      if (matchLength > 0) {
        sum++;
      }
    });

    return sum;
  };

  switch (ruleKey) {
    case "type":
      return find(0);
      break;
    case "color":
      return find(1);
      break;
    case "name":
      return find(2);
      break;
  }
};
```

### [풀이](https://leetcode.com/submissions/detail/645896329/)
