//new binding this
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Abbas', 28)
console.log(person1)

// implicit binding
const person = {
    name: 'Ahmad',
    age: 26,
    hi () {
        console.log('hi' + this.name);
    }
}
