function flattenObject(obj) {
  let result = {};

  function recurse(current) {
    for (let key in current) {
      if (typeof current[key] === "object" && current[key] !== null) {
        recurse(current[key]); // Go deeper
      } else {
        result[key] = current[key]; // Store value
      }
    }
  }

  recurse(obj);
  return result;
}

// Example usage
let obj = {
  a: {
    b: 1,
    c: 2,
    d: {
      e: 1,
    },
  },
};

console.log(flattenObject(obj)); // { b: 1, c: 2, e: 1 }
