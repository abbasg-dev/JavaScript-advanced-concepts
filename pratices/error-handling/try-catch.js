// Error - Native Error Constructor Function
// throw - Used to define our errors

throw Error;
throw new Error();
throw "string";
throw true;
new SyntaxError();
new ReferenceError();

// try catch block - Used to catch any type of synchronous errors

try {
  setTimeout(function () {
    fakevariable;
  }, 1000);
} catch (e) {
  console.log("got it", e);
}
