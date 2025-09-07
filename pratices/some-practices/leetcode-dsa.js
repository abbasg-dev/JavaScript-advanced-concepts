// DSA – LeetCode Medium Level Questions

/*
Letter Combinations of a Phone Number:
Generate all possible letter combinations based on a digit string using classic phone keypad mapping.

Example:
Input: "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

function letterCombinations(digits) {
  if (!digits.length) return [];

  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];

  function backtrack(index, path) {
    if (index === digits.length) {
      res.push(path.join("")); // join array to string
      return;
    }

    for (let char of phoneMap[digits[index]]) {
      path.push(char); // choose
      backtrack(index + 1, path); // explore
      path.pop(); // un-choose (backtrack)
    }
  }

  backtrack(0, []);
  return res;
}

console.log(letterCombinations("23"));

/*
Combination Sum:
Find all unique combinations from an array that sum up to a target value. Elements can be reused.

Example:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
*/

function combinationSum(candidates, target) {
  const res = [];

  function backtrack(start, path, total) {
    if (total === target) {
      res.push([...path]); // copy the path
      return;
    }
    if (total > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]); // choose
      backtrack(i, path, total + candidates[i]); // not i+1 since reuse is allowed
      path.pop(); // un-choose
    }
  }

  backtrack(0, [], 0);
  return res;
}

console.log(combinationSum([2, 3, 6, 7], 7));
