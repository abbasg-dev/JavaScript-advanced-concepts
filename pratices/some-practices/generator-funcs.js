function* gen() {
  console.log("a");
  console.log("b");
}

const g = gen();
// console.log(g); // Object [Generator] {}

g.next();

// console.log(g);

// a
// b
// Object [Generator] {}

function* gen1(i) {
  yield i;
  yield i + 10;
}

const g1 = gen1(5);

// console.log(g1); // Object [Generator] {}

const g1Obj = g1.next();

console.log(g1Obj); // { value: 5, done: false }

const j1Obj = g1.next();

console.log(j1Obj); // { value: 15, done: false }
console.log(g1.next()); // { value: undefined, done: true }

function* gen2(i) {
  yield i;
  yield i + 10;
  return 25;
}

const g2 = gen2(5);

console.log(g2); // Object [Generator] {}
console.log(g2.next()); // { value: 5, done: false }
console.log(g2.next()); // { value: 15, done: false }
console.log(g2.next()); // { value: 25, done: true }

// generator functions, ability to pause functions
