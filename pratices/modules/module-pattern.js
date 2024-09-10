// What are programs? Simply way to modify data that allows us to have more maintainable code
// What are Modules? Gives us a better way to organize variables and functions so that we can group thee variables and functions that make sense together in terms of organizing things
// Tight coupling? A lot of things having to depend on one another.
// Polluting the global namespace causes possible memory leaks,

// Using IIFE (Immediately invoked function expression) we're able to create a function scope that mimics a module scope.
// Module Pattern, reveal whatever we need

// Global Scope

// Module Scope
// We can combine multiple functions together, but not pollute our global namespace.
// Can be used to share the variables between different functions.
// We can share things without having to go through the global scope.
// We can be explicit which of the variables, classes or functions in the module should be available.

// Pros
// Maintainability
// Reusability

// Cons
// Polluting the global namespace
// Name clashes

// Functional Scope

// Block Scope - let and const

var fightModule = function () {
  var harry = "potter";
  var voldemort = "He who must not be named";

  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }

  return {
    fight: fight,
  };
};
