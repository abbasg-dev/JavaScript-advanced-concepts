// factory functions are functions that act like factories they create objects for us
// You don't prefix it with the 'new' keyword

// const elfFunctions = {
//     attack() {
//         return 'attack with ' + this.weapon
//     }
// }

// function createElf(name, weapon) {
//     // Creates an object that has the specified prototype or that has null prototype
//     let newElf = Object.create(elfFunctions)
//     newElf.name = name;
//     newElf.weapon = weapon;
//     return newElf;
// }

// const peter = createElf('Peter', 'stones')
// peter.attack = elfFunctions.attack
// console.log(peter.attack())
// const sam = createElf('Sam', 'fire')
// sam.attack = elfFunctions.attack
// console.log(sam.attack())

// Constructor Functions
/*
  Constructor functions are typically capitalize
  to use a constructor function the "new" keyword must be used

  Functions that are constructed and invoked with the new keyword and typically capitalized.
  The new keyword actually changes the meaning of this for the constructor

  When you call a function as a constructor, when you prefix it with the 'new' keyword, then inside of the function
  the keyword 'this' refers to the new object we're creating.
*/
/*
  new Object() - This constructor is going to have a prototype.
  When we create a new object using a constructor, the prototype is transferred to the new object.
  You can access the prototype using the .getPrototypeOf() method
*/

// The main reason when you want to create a prototype object
// is when you have multiple objects that are similar in nature
// but might have some minor differences between them.

// functions have prototypes and those are transferred to any instances created when we call that function as a constructor

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  // var a = 5;
  // console.log('this', this)
}

// console.log(Elf.prototype);
Elf.prototype.attack = function () {
  return "attack with " + this.weapon;
};

// Elf.prototype.build = function() {
//     // return 'house';
//     const self = this;
//     function building() {
//         return self.name + ' builds a house'
//     }
//     return building();
//     // return building().bind(this);
// }

const peter = new Elf("Peter", "stones");
// console.log(peter.attack())
// console.log(peter.__proto__);
console.log(peter.attack());

// Use getPrototypeOf to access the prototype of the peter object
const peterPrototype = Object.getPrototypeOf(peter);
console.log(peterPrototype); // { attack: [Function (anonymous)] }

// Create a new prototype object with a different method
const newPrototype = {
  defend: function () {
    return this.name + " defends with a shield";
  },
};

// Use setPrototypeOf to set the new prototype for peter
Object.setPrototypeOf(peter, newPrototype);

// Now peter has the new prototype method "defend"
console.log(peter.defend()); // Peter defends with a shield

// The original "attack" method from the old prototype is no longer accessible
console.log(peter.attack); // undefined

const sam = new Elf("sam", "fire");
// console.log(sam.name);
console.log(sam.attack()); // attack with fire

// Use setPrototypeOf to set the same new prototype for sam
Object.setPrototypeOf(sam, newPrototype);
console.log(sam.defend()); // Sam defends with a shield

// const Elf1 = new Function('name', 'weapon',
//     `this.name = name;
//     this.weapon = weapon;`
// )

// const sarah = new Elf1('Sarah', 'fireworks');
