// factory functions are functions that act like factories they create objects for us
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
*/
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    // var a = 5;
    // console.log('this', this)
}

// console.log(Elf.prototype);
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon;
}

// Elf.prototype.build = function() {
//     // return 'house';
//     const self = this;
//     function building() {
//         return self.name + ' builds a house'
//     }
//     return building();
//     // return building().bind(this);
// }

const peter = new Elf('Peter', 'stones');
// console.log(peter.attack())
// console.log(peter.__proto__);
console.log(peter.attack());
const sam = new Elf('sam', 'fire');
// console.log(sam.name);
console.log(sam.attack());

// const Elf1 = new Function('name', 'weapon', 
//     `this.name = name;
//     this.weapon = weapon;`
// )

// const sarah = new Elf1('Sarah', 'fireworks');
