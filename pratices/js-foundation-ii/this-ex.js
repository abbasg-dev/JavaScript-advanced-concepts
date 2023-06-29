var b = {
    name: 'abbas',
    say() {
        console.log(this);
    }
}
var c = {
    name: 'ali',
    say() {
        return function () {
            console.log(this);
        }
    }
}
var d = {
    name: 'hassan',
    say() {
        return () => console.log(this);
    }
}
// d.say()();

// bind() method is used to bind character.getCharacter to character
const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
//How Would you fix this
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' 
