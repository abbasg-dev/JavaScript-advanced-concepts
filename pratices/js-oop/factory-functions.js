// factory functions are functions that act like factories they create objects for us
const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function createElf(name, weapon) {
    // Creates an object that has the specified prototype or that has null prototype
    let newElf = Object.create(elfFunctions)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones')
// peter.attack = elfFunctions.attack
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
// sam.attack = elfFunctions.attack
console.log(sam.attack())
