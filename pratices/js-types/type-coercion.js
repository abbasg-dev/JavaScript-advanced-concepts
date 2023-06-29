// Type coercion means the languge converting from certain type to another type

// console.log(1 == '1'); // true
// console.log(1 === '1'); // false

// if (1) {
//     console.log(5);
// }

console.log(-0 === +0); // true
console.log(Object.is(-0,+0)); // false
console.log(NaN === NaN); // false

console.log(false == ""); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log("" == 0); // true
console.log("" == []); // true
console.log("" == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false

// Note: false = 0, true = 1
