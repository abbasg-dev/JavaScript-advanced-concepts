// scope - what is the variable access of a function
'use strict'
function weird () {
    var height = 50;
    return height;
}

var heyhey = function /* doodle */ () { // ReferenceError: doodle is not defined
    // do something
    // doodle(); // RangeError: Maximum call stack size exceeded
    return 'heyhey';
}

weird(); // 50
heyhey(); // heyhey
