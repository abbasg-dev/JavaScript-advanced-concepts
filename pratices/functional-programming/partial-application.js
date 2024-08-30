// Partial application is the process of producing a function with a smaller number of parameters.
// It means taking a function, applying some of its arguments into the function.
// On the second call, expect all the arguments.

const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
const result = partialMultiplyBy5(4, 10);
console.log(result); // 200
