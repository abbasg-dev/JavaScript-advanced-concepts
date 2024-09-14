// Inheritance
// What it is
// Tight Coupling
// Fragile Base Class Problem
// Hierarchy

/*
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}
*/

class Character {
  // base class (super class)
  // # -> private
  #age = 28;
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  _attack() {
    return "attack with " + this.weapon;
  }

  attack() {
    return "attack with " + this.#age;
  }
}

// extend and set the prototype that is __proto to point to Character
// Elf has a prototype chain up to Character
// extend classes to have there is own unique things like properties or even methods
// inheriting something from a higher class
// inheritance link up the prototype chain
class Elf extends Character {
  // sub class
  constructor(name, weapon, type) {
    super(name, weapon); // it calls the constructor in the base class, super is referring to the super class
    this.type = type;
    console.log(this); // Elf { name: 'Dolby', weapon: 'cloth', type: 'house' }
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon); // Character
    this.color = color;
  }
  makeFort() {
    return "strongest fort in the world made";
  }
}

// console.log(dolby.makeFort()); // dolby.makeFort is not a function
// new keyword to create instances of a class, instance is creating a version of a class
// const fiona = new Elf('Fiona', 'ninja stars');
const dolby = new Elf("Dolby", "cloth", "house");

// console.log(fiona);
// const ogre = { ...fiona }
// console.log(ogre);
// console.log(ogre.__proto__);
// console.log(fiona.__proto__);
// console.log(fiona === ogre);

// console.log(dolby.attack()); // attack with cloth
const shrek = new Ogre("shrek", "club", "green");
// console.log(shrek); // Ogre { name: 'shrek', weapon: 'club', color: 'green' }
// console.log(shrek.makeFort()); // strongest fort in the world made
console.log(shrek._attack()); // attack with club
shrek._attack = false;
console.log(shrek._attack()); // shrek._attack is not a function

// Ogre is a constructor function
console.log(Ogre.isPrototypeOf(shrek)); // false
console.log(Ogre.prototype.isPrototypeOf(shrek)); // true
console.log(Character.prototype.isPrototypeOf(Ogre)); // false
console.log(Character.prototype.isPrototypeOf(Ogre.prototype)); // true

// instanceof operator used to see if an object is of a particular type
// using instanceof we want to make sure we are working with an object that is of a correct datatype

console.log(dolby instanceof Elf); // true
console.log(dolby instanceof Ogre); // false
console.log(dolby instanceof Character); // true
