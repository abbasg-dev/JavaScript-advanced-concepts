/*
    In JavaScript, a variable can be declared after it has been used.
    In other words; a variable can be used before it has been declared.
*/
console.log('1---------');
console.log(teddy); // undefined
console.log(sing()); // ohhhh la la la
// console.log(sing2()); // TypeError: sing2 is not a function
// console.log(sing2); // ReferenceError: sing2 is not defined
var teddy = 'bear';

// function expression
var sing2 = function () {
    console.log('uhhh la la la');
}

console.log(sing2()); // uhhh la la la

// function declaration
function sing () {
    console.log('ohhhh la la la');
}
