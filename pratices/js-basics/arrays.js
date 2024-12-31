var list = ["tiger", "cat", "bear", "bird"];
//console.log(list[0]);
console.log(list);
//console.log(list[0][2]);

list.shift(); // tiger
console.log(list);

list.pop(); //bird
console.log(list);

list.push("elephant");
console.log(list);

// concat - Concatenates two or more arrays
const myList = list.concat(["bee", "deer"]);
console.log(myList);

var myNewList = myList.concat(["monkey"]);

console.log(myNewList);

list.sort();
console.log(list);

var numbers = [1, 2, 3, 4];
var booleans = [true, false, true];

var functionsList = [
  function apple() {
    console.log("apple");
  },
];
console.log(functionsList);

var mixedList = [
  "apples",
  "3",
  undefined,
  true,
  function apple() {
    console.log("apples");
  },
];
console.log(mixedList);
