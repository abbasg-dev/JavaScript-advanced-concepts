console.log("Before setTimeout");

setTimeout(() => {
  console.log("Inside setTimeout - After 2000 millisecond");
}, 2000);

const promise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

promise
  .then((res) => {
    console.log(res);
    setTimeout(() => {
      console.log("Inside promise setTimeout");
    });
    return "New Promise value";
  })
  .then((res) => console.log(res));

console.log("After setTimeout");

// Before setTimeout
// After setTimeout
// Promise resolved
// New Promise value
// Inside promise setTimeout
// Inside setTimeout - After 2000 millisecond

/*
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
*/
// Output: 0, 1, 2, 3, 4
