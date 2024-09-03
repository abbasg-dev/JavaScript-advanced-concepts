// Object spread operator

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
};

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);

// finally - it allows us to do something finally after a promise has finished

const urls1 = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4",
];

Promise.all(
  urls1.map((url) => {
    return fetch(url).then(people.json());
  })
)
  .then((array) => {
    throw Error;
    console.log("1", array[0]);
    console.log("2", array[1]);
    console.log("3", array[2]);
    console.log("4".array[3]);
  })
  .catch((err) => console.log("ughhhhh fix it!", err))
  .finally(() => console.log("extra"));

// for await of
// it allows us to loop through our async, await calls.
// iterate over the await promises that we're going to have.
// it allows us to loop through these multiple promises

const urls2 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls2.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log("users", users);
    console.log("users", posts);
    console.log("users", albums);
  } catch (err) {
    console.log("oooooops", err);
  }
};

const getData2 = async function () {
  const arrayOfPromises = url2.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
