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

//explicit binding
const person2 = {
    name: 'Amjad',
    age: 24,
    hi: function () {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}

person2.hi();

// arrow function
const person3 = {
    name: 'Ahmad',
    age: 27,
    hi: function () {
        var inner = () => {
            console.log('hi' + this.name)
        }
        return inner();
    }
}

person3.hi();
