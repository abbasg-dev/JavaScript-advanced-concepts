// 'this' is the object that the function is a property of
// 1- Gives methods access to their object
// 2- Execute same code for multiple objects

// obj.someFunc(this);

const obj = {
    name: 'Abbas',
    sing: function () {
        return 'lalala ' + this.name;
    },
    singAgain () {
        return this.sing() + '!';
    }
}

obj.sing(); // lalala Abbas
obj.singAgain(); // lalala Abbas!

function importantPerson () {
    console.log(this.name);
}

const name = 'Abbas';

const obj1 = {
    name: 'Ali',
    importantPerson: importantPerson
}

const obj2 = {
    name: 'Ahmad',
    importantPerson: importantPerson
}

console.log(name); // Abbas
importantPerson(); // undefined - this is actually because of hoisting!
obj1.importantPerson(); // Ali
obj2.importantPerson(); // Ahmad
