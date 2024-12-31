// reference type
// objects are what's called the reference types in Js

// primitive types: numbers, string, booleans, null, undefined
// reference type which is a non-primitive type

// arrays are just objects

// console.log([] === []); // false
// console.log([1] === [1]); // false

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

console.log(object1 === object2); // true
console.log(object1 === object3); // false

object1.value = 15;

console.log(object1.value); // 15
console.log(object2.value); // 15
console.log(object3.value); // 10

// context vs scope

// context tells you were we are within the object

function b() {
  let a = 4;
}

// console.log("a", a); // Uncaught ReferenceError: a is not defined

// this means what is the object environment that were in right now
// this just refers you what object is inside of

// console.log(this);
// console.log(this === window); // true
// this.alert("hello");
// window.alert();

/*
function a() {
  console.log(this);
}

a();
*/

// console.log(window.a());

const object4 = {
  a: function () {
    console.log(this); // { a: f }
  },
};

object4.a();

// instantiation: when you make a copy of an object and reuse the code

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("player", this); // player Wizard {name: 'Abbas', type: 'Software Engineer'}
  }
  play() {
    console.log(`WEEEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Abbas", "Software Engineer");
// const wizard2 = new Wizard("Ahmad", "Data Analyst");

wizard1.play(); // WEEEEEEEEE I'm a Software Engineer
wizard1.introduce(); // Hi I am Abbas, I'm a Software Engineer

// wizard2.play(); // WEEEEEEEEE I'm a Data Analyst
// wizard2.introduce(); // Hi I am Ahmad, I'm a Data Analyst

// Classical Inheritance
/*
var player = function (name, type) {
  this.name = name;
  this.type = type;
};

Player.prototype.introduce = function () {
  console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
};

var wizard1 = new Player("Abbas", "Software Engineer");
var wizard2 = new Player("Ahmad", "Data Analyst");

wizard1.play = function () {
  console.log(`WEEEEEEEEE I'm a ${this.type}`);
};

wizard2.play = function () {
  console.log(`WEEEEEEEEE I'm a ${this.type}`);
};
*/
