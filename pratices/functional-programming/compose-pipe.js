// Arity simply means the number of arguments a function takes

// Composability is a system design principle that deals with the relationship between components.
// Pipe chains functions left-to-right, passing the result of each as input to the next.

// ex - fn1(fn2(fn3(50)));

// compose(fn1, fn2, fn3)(n);
// pipe(fn3, fn2, fn1)(n);

const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-50)); // 150
