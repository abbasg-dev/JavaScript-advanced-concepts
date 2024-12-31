// means the act of looking over code understanding what's doing and figuring out why it is not acting as expected

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, array) => {
  // console.log("array: ", array);
  // console.log("accumulator: ", accumulator);
  debugger; // stop, go to the function and see what's happening step by step
  return accumulator.concat(array);
}, []);

console.log(flattened); //  [0, 1, 2, 3, 4, 5]
