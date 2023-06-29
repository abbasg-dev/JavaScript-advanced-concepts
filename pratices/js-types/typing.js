/*
    statically typed language - check the types and look for type errors during compile time
    dynamically typed language - check the types and look for type errors during runtime
*/

// dynamic typing
var name; // variables have not types
name = 'Abbas'; // values have types
name = 34 // variables change type dynamically
console.log(name); // 34

/*
    strongly typed language - enforce the behavior of types and do not allow variables to mix with variables other types easily
    weakly typed language - allow types to change or interact with other types more easily         
*/

// weak typing
var a = 13; // number declaration
a += '1'; // a = 14
var b = 'thirteen'; // string declaration
