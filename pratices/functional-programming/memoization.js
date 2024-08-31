// Caching is a way to store values so you can use them later on
// Caching is just a way for us to speed up programs and hold some piece of data in an easily accessible

// Memoization is a specific form of caching that involves caching the return value
// Memoization is simply a way to remember a solution to a sub problem, so you don't have to calculate it again

function addTo80(n) {
  console.log("long time");
  return n + 80;
}

// console.log(addTo80(5));

function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();

console.log("1", memoized(5));
console.log("2", memoized(5));
