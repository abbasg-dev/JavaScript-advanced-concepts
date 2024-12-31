// string padding
// padStart() and padEnd() are string methods that add padding to the beginning or end of a string, respectively, until it reaches a specified length.

console.log("Turtle".padStart(10)); //    Turtle
console.log("Turtle".padEnd(10)); //Turtle

// trailing commands in functions, parameter lists and calls

const fun = (a, b, c, d) => {
  console.log(a); // 1
};

fun(1, 2, 3, 4);

// Object.values
// Object.entries
// Object.keys

let obj = {
  username0: "Abbas",
  username1: "Ahmad",
  username2: "Mike",
};

// returns an array of the object's keys
Object.keys(obj).forEach((key, index) => {
  // username0 Abbas
  // username1 Ahmad
  // username2 Mike
  console.log(key, obj[key]);
});

// get the value
Object.values(obj).forEach((value) => {
  // Abbas
  // Ahmad
  // Mike
  console.log(value);
});

// get both property and value or key and value, you can do whatever you want with it and use forEach, map, reduce, filter etc.
Object.entries(obj).forEach((value) => {
  // ['username0', Abbas]
  // ['username1', Ahmad]
  // ['username2', Mike]
  console.log(value);
});

Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("username", "");
});
// [Abbas0, Ahmad1, Mike2]
