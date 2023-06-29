// Variable Environment - JavaScript allocates memory to the variables and functions
function two () {
    var isValid; // undefined
}

function one () {
    var isValid = true; // local env
    two(); // new execution content
}

var isValid = false;
one();

// two(); -- undefined
// one(); -- true
// global() -- false
