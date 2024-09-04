const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 6000));

const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));

// Promise.all only resolves if both promises resolve here
// Promise.all has to have all promises resolve and not throw any errors
Promise.all([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((e) => console.log("something failed", e));

// Promise.allSettled doesn't care about resolve and reject, unlike Promise.all
// Promise.allSettled runs all promises, regardless of whether they reject or not
// Promise only comes back when all promises that have been added to it are complete
Promise.allSettled([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((e) => console.log("something failed", e));
