/*
    An execution context is an abstract concept of an environment where the Javascript code is evaluated 
    and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.
*/

function printName () {
    return 'Abbas Ghaith'
}

function findName () {
    return printName()
}

function sayMyName () {
    return findName()
}

sayMyName();
