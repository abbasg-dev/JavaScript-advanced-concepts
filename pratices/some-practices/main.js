function outerFunction() {
  const outerVar = 10;
  return function innerFunction() {
    return outerVar;
  };
}

const inner = outerFunction();
const result = inner();
console.log(result); // 10

// innerFunction forms a closure, capturing the variable outerVar from outerFunction's scope
// so when inner() is called, it still has access to outerVar, returning 10.

var obj = {
  a: 1,
  b: 2,
  c: 3,
};

function updateObject(obj) {
  obj.a = 10;
  obj.b = 20;
  obj.c = 30;
}

updateObject(obj);

console.log(obj.a); // Output will be 10
console.log(obj.b); // Output will be 20
console.log(obj.c); // Output will be 30

// create a function that reverse an array

function reverseArray(arr) {
  console.log(arr);
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const reversed = reverseArray(originalArray);
console.log(reversed); // [5, 4, 3, 2, 1]

let arr = [1, [2, 3, [4, 5, [6, 7]]], [8, 9]];
console.log(arr.flat(4)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// use reduce function to sum the total of array values

const a = [1, 2, 3, 4];
const sum = a.reduce((total, currentValue) => total + currentValue, 0);
console.log(sum); // 10

let obj1 = {
  name: "ABC",
  email: "abc@test.com",
  address: {
    city: "Pune",
  },
};

let obj2 = { ...obj1 };
obj2.name = "XYZ";
obj2.address.city = "Mumbai";

console.log(obj1); // { name: 'ABC', email: 'abc@test.com', address: { city: 'Mumbai' } }
console.log(obj2); // { name: 'XYZ', email: 'abc@test.com', address: { city: 'Mumbai' } }

// The spread operator ({...obj}) creates a shallow copy, so obj2.address still references the
// same nested object as obj.address, causing changes in obj2.address.city to reflect in obj.address.city.

function Sum(x) {
  function innerSum(y) {
    if (y === undefined) {
      return x;
    } else {
      return Sum(x + y);
    }
  }
  return innerSum;
}

console.log(Sum(1)(2)(3)()); // 6

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement,
  };
}

const counter = createCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

let k = "";
if (k) {
  console.log("inside");
} else {
  console.log("Outside");
}

// the console will display "Outside" because the empty string k is a falsy value (empty),
// causing the else block to run.

const x = 9;
// x = 8; // TypeError: Assignment to constant variable. we cannot redeclare const variable

// const y = { a: 1 };
// y.a = 2;

// console.log(y); // { a: 2 }

const y = {
  a: 1,
  b: 2,
};

const z = y;
z.a = 2;

console.log(y);
// { a: 2, b: 2 }
// Since z and y both refer to the same object, this change is reflected in both z and y.

console.log(z);
// { a: 2, b: 2 }

console.log(1 + 2 + "3"); // 33
console.log(3 > 2 > 1); // false

let myArray = [];
console.log(typeof myArray); // object

console.log(typeof []); // object

console.log(null == undefined); // true
// the loose equality (==) allows type coercion and considers them equivalent

console.log(null === undefined); // false
// the strict equality (===) checks both value and type, and null and undefined are different types

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([7, 11, 15, 2], 9)); // [3, 0]
console.log(twoSum([3, 2, 4], 9)); // [1, 2]
console.log(twoSum([3, 3], 9)); // [0, 1]

const twoSum1 = (nums, target, map = new Map()) =>
  nums.reduce(
    (acc, num, i) =>
      map.has(target - num)
        ? [map.get(target - num), i]
        : map.set(num, i) && acc,
    []
  );

console.log(twoSum1([7, 11, 15, 2], 9)); // [3, 0]
console.log(twoSum1([3, 2, 4], 6)); // [1, 2]
console.log(twoSum1([3, 3], 6)); // [0, 1]
