/*
  Prototype
  - Are the mechanism by which JavaScript objects inherits features from one another
  - Every object has a prototype
  - Prototype chain ends with object.prototype
  - Only functions have the prototype property
  - In JavaScript arrays and functions are just objects
*/

/*
  - Prototype is just an object that another object inherit from, it saves memory.
  - Object.prototype (default prototype) objects going to inherit from.
  - When we create a method, it has a prototype
*/

// You can define inheritance hierarchy by strategically using prototypes to pass information to the children.

// to check if an object for a prototype using in
let car = {
  type: "bmw",
};
console.log("type" in car); // true
console.log(car.type !== undefined); // true
console.log(car); // { type: 'bmw' }

let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

// console.log(dragon.fight());

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

const singLizard = dragon.sing.bind(lizard);

// console.log(singLizard());

lizard.__proto__ = dragon;

// console.log(lizard.sing());

// console.log(lizard.fight());

// lizard.dance();

// console.log(lizard.isPrototypeOf(dragon))

// It will only check directly on the object and will not check the prototype
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// lizard.haha()

// console.log(lizard.haha)

let human = {
  mortal: true,
};
let socrates = Object.create(human);
socrates.age = 45;
// console.log(socrates.mortal); true
// console.log(human.isPrototypeOf(socrates)); true
