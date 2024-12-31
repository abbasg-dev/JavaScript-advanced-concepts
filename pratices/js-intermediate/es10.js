// flat() is a method that we can use on arrays, flattens a nested array.
// we can tell it how many layers to flatten the array

const array1 = [1, 2, 3, 4, 5];
array1.flat(); // [1, 2, 3, 4, 5]

const array2 = [1, [2, 3], [4, 5]];
array2.flat(); // [1, 2, 3, 4, 5]

const array3 = [1, 2, [3, 4, [5]]];
array3.flat(1); // [1, 2, 3, 4, [5]]
array3.flat(2); // [1, 2, 3, 4, 5]

const fruits = [
  ["🍎", "🍌"],
  "🍉",
  "🍇",
  ["🍓", "🍊"],
  [[[["🍋"]]], "🍍"],
  ["🍑", "🍈"],
];
fruits.flat(50); // ['🍎', '🍌', '🍉', '🍇', '🍓', '🍊', '🍋', '🍍', '🍑', '🍈'];

const entries = ["bob", "sally", , , , "cindy"];
entries.flat(); // ['bob', 'sally','cindy']

// flatMap() allows us to use flat function and the map function or method on array

const fruitsBasket = fruits.flatMap((produce) => produce + "🍋");
console.log(fruitsBasket); // ['🍎,🍌🍋', '🍉🍋', '🍇🍋', '🍓,🍊🍋', '🍋,🍍🍋', '🍑,🍈🍋']

const userEmail = "     abbas@test.com";
const userEmail2 = "abbas@test     ";

console.log(userEmail.trimStart()); // abbas@test.com
console.log(userEmail2.trimEnd()); // abbas@test

// formEntries it transform a list of key value pairs into an object

const userProfiles = [
  ["abbas", 23],
  ["ahmad", 30],
  ["sami", 18],
];

const obj = Object.fromEntries(userProfiles); // {abbas: 23, ahmad: 30, sami: 18}
console.log(Object.entries(obj));

/*
[
  ["abbas", 23],
  ["ahmad", 30],
  ["sami", 18],
];
*/

// try catch block allows us to try a piece of code and if there's any errors to catch them

try {
  // 4 + 5; // 9
  true + "hi"; // "truehi"
  // bob + "hi"; // you messed up upReferenceError: bob is not defined
} catch (error) {
  console.log("you messed up", error);
}
