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
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "attack with " + this.weapon;
  }
}

// extend and set the prototype that is __proto to point to Character
// Elf has a prototype chain up to Character
// extend classes to have there is own unique things like properties or even methods
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

console.log(dolby.makeFort()); // dolby.makeFort is not a function
// const fiona = new Elf('Fiona', 'ninja stars');
const dolby = new Elf("Dolby", "cloth", "house");

// console.log(fiona);
// const ogre = { ...fiona }
// console.log(ogre);
// console.log(ogre.__proto__);
// console.log(fiona.__proto__);
// console.log(fiona === ogre);

console.log(dolby.attack()); // attack with cloth
const shrek = new Ogre("shrek", "club", "green");
console.log(shrek); // Ogre { name: 'shrek', weapon: 'club', color: 'green' }
shrek.makeFort(); // strongest fort in the world made
