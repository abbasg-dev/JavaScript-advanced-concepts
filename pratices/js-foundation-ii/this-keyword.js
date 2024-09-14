// 'this' is the object that the function is a property of
// 1- Gives methods access to their object
// 2- Execute same code for multiple objects

// this is a keyword that is used to reference the object that is executing the current function.
// Used to reference to whatever object is calling the current object.

// Arrow function is a JavaScript shorthand for regular functions but they don't exactly work the same way as regular functions do when it comes to scoping.
// Arrow functions don't have their own 'this' scope.
// In arrow function will inherit the 'this' scope of the nearest surrounding (containing) regular functions.
// If you don't have regular functions it will inherit the global scope.

// obj.someFunc(this);

const obj = {
  name: "Abbas",
  sing: function () {
    return "lalala " + this.name;
  },
  singAgain() {
    return this.sing() + "!";
  },
};

obj.sing(); // lalala Abbas
obj.singAgain(); // lalala Abbas!

function importantPerson() {
  console.log(this.name);
}

const name = "Abbas";

const obj1 = {
  name: "Ali",
  importantPerson: importantPerson,
};

const obj2 = {
  name: "Ahmad",
  importantPerson: importantPerson,
};

console.log(name); // Abbas
importantPerson(); // undefined - this is actually because of hoisting!
obj1.importantPerson(); // Ali
obj2.importantPerson(); // Ahmad
