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
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
        console.log(this);
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest for in the world made';
    }
}

// const fiona = new Elf('Fiona', 'ninja stars');
const dolby = new Elf('Dolby', 'cloth', 'house');

// console.log(fiona);
// const ogre = { ...fiona }
// console.log(ogre);
// console.log(ogre.__proto__);
// console.log(fiona.__proto__);
// console.log(fiona === ogre);

console.log(dolby.attack());
const shrek = new Ogre('shrek', 'club', 'green');
console.timeLog(shrek);
