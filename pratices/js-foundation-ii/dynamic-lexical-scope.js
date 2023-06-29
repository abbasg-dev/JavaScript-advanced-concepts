/*
    In dynamic scoping, you search in the local function first, 
    then you search in the function that called the local function, 
    then you search in the function that called that function, 
    and so on, up the call-stack.

    Lexical scope is based on where variables and blocks of scope are authored.
*/
const a = function () {
    console.log('a', this);
    const b = function () {
        console.log('b', this);
        const c = {
            hi: function () {
                console.log('c', this);
            }
        }
        c.hi();
    }
    b();
}

a();

const obj = {
    name: 'Abbas',
    sing () {
        console.log(this);
        var self = this;
        var anotherFunc = function () {
            console.log(self);
        }
        return anotherFunc;
    }
}

obj.sing()();
