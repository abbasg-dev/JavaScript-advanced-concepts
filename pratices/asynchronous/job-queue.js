// Job Queue - Microtask Queue
// A native way to handle asynchronous code instead of just using callbacks.
// Similar to the Task Queue or the Callback stack Queue, just a little smaller but has a high priority than Task Queue.

// Callback Queue - Task Queue
setTimeout(() => {
  console.log("1", "is the loneliest number");
}, 0);
setTimeout(() => {
  console.log("2", "can be as bad as one");
}, 10);

//2 Job Queue - Microtask Queue
Promise.resolve("hi").then((data) => console.log("2", data));

// 3
console.log("3", "is a crowd");
