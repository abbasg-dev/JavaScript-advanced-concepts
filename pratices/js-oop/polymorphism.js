// With polymorphism you can treat numerous different types as if they are on type
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

class Elf extends Character {
  // sub class
  constructor(name, weapon, type) {
    super(name, weapon); // it calls the constructor in the base class, super is referring to the super class
    this.type = type;
  }
  attack(cry) {
    return "attack with " + cry;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon); // Character
    this.color = color;
  }
  attack() {
    return "arghhhhh";
  }
  makeFort() {
    return "strongest fort in the world made";
  }
}

// new keyword to create instances of a class, instance is creating a version of a class
const dolby = new Elf("Dolby", "cloth", "house");

const shrek = new Ogre("shrek", "club", "green");
console.log(dolby.attack("weeee")); // attack with weeee
console.log(shrek.attack()); // arghhhhh
