// HOF
// Means it's a function that does one of two things
// Either takes one or more functions as arguments or returns a function as a result, often called a callback.
// A function that returns a function

const hof = (fn) => fn(5);
hof(function a(x) {
  return x;
});

// Closure
// still have access to the variable
// be careful not to modify the state
const closure = function () {
  let count = 55;
  return function getCounter() {
    return count;
  };
};

const getCounter = closure();
console.log(getCounter()); // 55
