// async function is a function that returns a promise
// the benefit of async await is that it makes code easier to read
// the goal with async await is to make code look synchronous

// await says, hey, pause this function until I have something for you

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then(console.log);

async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls
    .map((url) => {
      fetch(url).then((resp) => resp.json());
    })
    .then((array) => {
      console.log("users", array[0]);
      console.log("posts", array[1]);
      console.log("albums", array[2]);
    })
    .catch("oops")
);

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("oops", err);
  }
};
