// curring is the technique of translating the evaluation of a function that takes multiple arguments

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);

// 10 years
const result1 = curriedMultiplyBy5(4);
const result2 = curriedMultiplyBy5(4);
const result3 = curriedMultiplyBy5(4);

console.log(result1, result2, result3); // 20 20 20
