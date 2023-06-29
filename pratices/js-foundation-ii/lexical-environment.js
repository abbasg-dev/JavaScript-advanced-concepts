// lexical environment means where is that variable or function written in our code

function printName () {
    return 'Abbas Ghaith'
}

function findName () {
    function a () { // function a is lexically inside function findName

    }
    return printName();
}

function sayMyName () {
    return findName()
}

window.sayMyName();
