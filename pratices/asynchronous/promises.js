// A promise is an object that may produce a single value some time in the future, either a resolved value, or a reason that it's not resolved (rejected)
// A promise maybe in one of three possible states, fulfilled (resolved), rejected or pending
// .catch will catch any error that the promise may have
// .fetch simply returns a promise
// promise can only succeed or fail once
// reacting to something that happens asynchronously

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject("Error, it broke");
  }
});

// promise
//   .then((result) => result + "!")
//   .then((result2) => result2 + "?")
//   .catch(() => console.log("error!"))
//   .then((result3) => {
//     console.log(result3 + "!");
//   });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HIII");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "POOKIE");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Is it me you are looking for?");
});
Promise.all([promise, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));
