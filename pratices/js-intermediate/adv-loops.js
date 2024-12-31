const basket = ["apples", "oranges", "grapes"];

const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

basket = {
  0: "apples",
  1: "oranges",
  2: "grapes",
};

for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

basket.forEach((item) => {
  console.log(item);
});

// for of doesn't work with objects, they aren't iterable
// iterating - arrays, strings

for (item of basket) {
  console.log(item);
}

for (item of "basket") {
  console.log(item);
}

// for in - loop over innumerable properties and innumerable property names of an object
// enumerating - objects
// it allows us to see the properties

for (item in detailedBasket) {
  console.log(item);
}

// you can think of arrays like objects

for (item in basket) {
  console.log(item);
}
