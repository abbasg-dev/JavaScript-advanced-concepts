/*
    undefined - absence of definition
    null - absence of value
    functions and arrays are objects
*/
const types = {
    // Primitive - a data that only represents a single value
    "5": typeof 5,
    "true": typeof true,
    "To be or not to be": typeof 'To be or not to be',
    "undefined": typeof undefined,
    "null": typeof null,
    "Symbol('just me')": typeof Symbol('just me'),
    // Non-Primitive - doesn't contain the actual value directly
    "{}": typeof {} ,
    "[]": typeof [],
    "function()": typeof function(){}
}
console.log(types);

function a() {
    return 5;
}
a.hi = 'hahahhaha';
console.log(a.hi);
