// Google Question, return the first recurring character

//Given an array = [2,5,1,2,3,5,1,2,4];
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4];
//It should return 1

//Given an array = [2,3,4,5];
//It should return undefined

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2)

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    // console.log(map);
  }
  return undefined;
} // O(n)

const result1 = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(result1); // 2

const result2 = firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(result2); // 2

// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
