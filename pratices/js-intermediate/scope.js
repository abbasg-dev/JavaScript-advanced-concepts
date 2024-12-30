// scope means variable access, what variables do I have access to when a code is running
// by default in JavaScript you are in the root scope, which is the window object (parent scope)

function aa() {
  console.log("test");
}

// functions have access to any variable in the root scope

var b = "Can I access this?";

function bb() {
  // var a = "hello";
  // console.log(a);
  // console.log(b);
  b = "hello";
}

// console.log(a); // this will throw an error because a is not defined in the root scope

// console.log(bb()); // Can I access this?
// console.log(b); // Can I access this?
// console.log(bb()); // undefined
// console.log(b); // hello

// Root Scope (window)
// var fun = 5;
/*
function funFunction() {
  // child scope
  var fun = "helloooo";
  console.log(1, fun);
}

function funerFunction() {
  // child scope
  var fun = "Bye";
  console.log(2, fun);
}
*/
function funestFunction() {
  // child scope
  // fun = "AHHHHH";
  // console.log(3, fun);
  console.log(fun);
}
/*
console.log("window", fun);
funFunction();
funerFunction();
funestFunction();

console.log(fun); // AHHHHH
*/

funestFunction();
