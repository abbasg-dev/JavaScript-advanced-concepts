// ES2020

// BigInt is used when we want to use a number that's larger than MAX_SAFE_INTEGER and we want to do some calculations with it
// we can do regular numbers as well as long as we enter n

console.log(typeof 4); // number
console.log(typeof true); // boolean
console.log(typeof 8757687687687687686587658658756); // number
console.log(typeof 1n); // bigint
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 10); // 9007199254741000
console.log(9007199254741000 - 1); // 9007199254741000
console.log(9007199254741000n - 1n); // 9007199254740999n
console.log(9007199254740991n + 10n); // 9007199254741001n
console.log(1n + 2n); // 3n
console.log(typeof 3n); // "bigint"

// Nullish Coalescing Operator ??
// Can often be used instead of || operator
// || operator works by checking if truth

let ahmad_pokemon = {
  tom: {
    species: "Mouse Pokemon",
    height: 0.8,
    weight: 30,
    power: 0,
  },
};

let power = ahmad_pokemon?.tom?.power || "no power";
console.log(power); // no power

// instead of the || operator doesn't check if a value is false
// instead it checks if it's null or undefined

let power1 = ahmad_pokemon?.tom?.power ?? "no power";
console.log(power); // no power

// Optional Chaining Operator ?.
// works on objects and checking their properties

let will_pokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
  },
};

let abbas_pokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.8,
    weight: 30,
  },
};

// let weight = will_pokemon.pikachu.weight;
// console.log("weight: ", weight); // 6

// let weight2 = abbas_pokemon.seemba.weight;
// console.log("weight: ", weight2); // 6

/*
if (abbas_pokemon && abbas_pokemon.pikachu && abbas_pokemon.pikachu.wight) {
  let weight2 = will_pokemon.pikachu.weight;
} else {
  let weight2 = undefined;
  console.log(weight2); // undefined
}
*/

let weight3 = abbas_pokemon?.pikachu?.weight;
console.log(weight3); // 30

// globalThis
// Unifies the global object across different platforms (browser, Node.js, etc.).

// Browser Context:
// globalThis refers to the window object.
console.log(globalThis); //window object.
console.log(globalThis === window); // true

// Node.js Context:
// globalThis refers to the global object, Node.js's equivalent of window.

// ES2020 Standard:
// Introduced globalThis for consistency across environments.
// Enables a unified codebase for browser and non-browser platforms.

// Properties:
// globalThis has platform-specific properties (e.g., browser-specific vs. Node.js-specific).

// Requirements:
// A modern version of Node.js is required to use globalThis.
