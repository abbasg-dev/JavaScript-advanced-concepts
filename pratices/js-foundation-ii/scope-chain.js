/*
    - The scope chain is used to resolve the value of variable names in javascript. 
    - Without a scope chain the Javascript engine wouldn't know which value to pick for a certain variable name if 
      there are multiple defined at different scopes.
    - Scope chain is lexically defined, which means that we can see what the scope chain will be by looking at the code.
*/

// global scope
var x = 'x';

function findName1 () {
    // findName1 function scope
    console.log(x)
    var b = 'b';
    return printName1();
}

function printName1 () {
    // printName1 function scope
    console.log(x)
    var c = 'c';
    return 'Abbas Ghaith';
}

function sayMyName1 () {
    // sayMyName1 function scope
    var a = 'a';
    return findName1()
}

sayMyName1()

function sayMyName2 () {
    // sayMyName2 function scope
    var a = 'a';
    return function findName2 () {
        // findName2 function scope
        var b = 'b';
        console.log(a);
        return function printName2 () {
            // printName2 function scope
            var c = 'c';
            console.log(c);
            console.log(b)
            return 'Abbas Ghaith';
        }
    }
}

console.log(sayMyName2()()());
