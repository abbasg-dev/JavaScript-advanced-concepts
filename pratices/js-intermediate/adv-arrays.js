// Advanced Arrays

var array = [1, 2, 10, 16];

const double = [];

// forEach: Executes a provided function once for each array element.

const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log(newArray); // undefined
console.log(double); // [2, 4, 20, 32]

console.log("forEach", double); // [2, 4, 20, 32]

// map, filter and reduce

// map: Creates a new array with the results of calling a provided function on every element in the array

const mapArray = array.map((num) => num * 2);

console.log(mapArray); // [2, 4, 20, 32]

// filter: Creates a new array with elements that pass a test from an existing array.

const filterArray = array.filter((num) => {
  return num > 5;
});

console.log(filterArray); // [10, 16]

// reduce: Reduces an array to a single value by executing a provided function for each value of the array.
// accumulator: something were we can store the information that happens in the body of the function.

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, /* accumulator */ 5);

console.log("reduce", reduceArray); // 34
