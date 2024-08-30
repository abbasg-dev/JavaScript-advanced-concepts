// no side effects
// very easy to test, compose and it avoid a lot of bugs because we have no mutations, no shared state

// input --> output (no matter what my input, if they're the same, it's always going to give the same output)
// referential transparency means it doesn't have any effect on the program

const array = [1, 2, 3];

// function mutateArray(arr) {
//   arr.pop();
// }

// function mutateArray2(arr) {
//   arr.forEach((item) => {
//     arr.push(1);
//   });
// }

function removeLastItem(arr) {
  // local variable
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
}

// mutateArray(array);
// mutateArray2(array);

const array2 = removeLastItem(array);
// console.log(array2); // [ 1, 2 ]
// mutateArray2(array);
const array3 = multiplyBy2(array);
// console.log(array3); // [ 2, 4, 6 ]
// console.log(array); // [ 1, 2, 3 ]

console.log(array, array2, array3); // [ 1, 2, 3 ] [ 1, 2 ] [ 2, 4, 6 ]

function a(num1, num2) {
  return num1 + num2;
}

function b(num) {
  return num * 2;
}

console.log(b(7)); // 14
