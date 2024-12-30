// let + const

// var is function-scoped or global-scoped
// let is block-scoped

/*
const player = "mario";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log("inside: ", wizardLevel);
}

console.log("outside: ", wizardLevel);
*/

// const a = function () {
//     console.log("a");
// }

/*
const obj = {
  player: "mario",
  experience: 100,
  wizardLevel: false,
};

obj.wizardLevel = true;
console.log(obj);
*/

// Destructing

/*
const obj = {
  player: "mario",
  experience: 100,
  wizardLevel: false,
};
*/

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// const { player, experience } = obj;
// let { wizardLevel } = obj;

// Object properties

// const name = "abbas ghaith";

const a = "Mike";
const b = true;
const c = {};

/*
const obj = {
  [name]: "hello",
  [1 + 2]: "hihi",
};
*/

const obj = {
  a,
  b,
  c,
};

// Template strings

// const name = "Abbas";
// const age = 28;
// const pet = "horse";

// const greeting = "Hello " + name + " you seem to be doing" + greeting + "!";

/*
const greetingBest = `Hello ${name} you seem to be ${
  age - 10
}. What a lovely ${pet} you have.`;

console.log(greetingBest);
*/

// default arguments

function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} you seem to be ${
    age - 10
  }. What a lovely ${pet} you have.`;
}

console.log(greet());
console.log(greet("abbas", 30, "rabbit"));

// Symbol
// Symbol value is used as an identifier, mostly for object properties

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

console.log(sym2 === sym3); // false

// arrow functions

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;

console.log(add(4, 2)); // 6
console.log(add2(4, 2)); // 6
