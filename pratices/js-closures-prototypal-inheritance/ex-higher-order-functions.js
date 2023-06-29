const multipleBy = (num1) => (num2) => num1 * num2;

console.log(multipleBy(4)(6));
const multipleByTwo = multipleBy(2);
const multipleByFive = multipleBy(5);
console.log(multipleByTwo(4));
console.log(multipleByTwo(10));
console.log(multipleByFive(6));
