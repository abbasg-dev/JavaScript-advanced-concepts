/*
JavaScript Modules Evolution:

Initial Struggles: Modules were initially difficult to understand, requiring a structured mental model for simplification.

Early Practices (Inline Scripts): JavaScript was embedded in HTML using <script> tags, leading to:

Lack of reusability.
Global namespace pollution.

External Script Files: JavaScript moved to external files using <script>, but still had issues with:
Manual script ordering.
Global namespace pollution.
*/

// Immediately Invoked Function Expressions (IIFE): Wrapped code in a function to avoid global namespace pollution, but dependencies still needed manual ordering.

// js1 first file loaded
var myApp = {}(
  // js2
  function () {
    myApp.add = function (a, b) {
      return a + b;
    };
  }
)();

// jQuery uses this: allows us to use $

// Browserify and CommonJS
// Introduced module.exports and require(). Browserify bundled files, reducing pollution and managing dependencies, but required additional tools.

// CommonJS + Browserify
// js1
module.exports = function add(a, b) {
  return a + b;
};

// js2
var add = require("./add");

/*
Modern Solution (ES6 Modules): Introduced import and export syntax, solving key problems like:
Clear, structured modules.
Readable and reusable code.
Supported by modern browsers.
*/

// ES6 + Webpack2
//js1
export const add = (a, b) => a + b;
//or
export default function add() {
  return a + b;
}

//js2
import { add } from "./add";
// or
import add from "./add";

/*
Webpack: A bundler that processes ES6 modules into a single file, supporting ES6 syntax and simplifying dependency management.
Current State: JavaScript now has a robust module system, with tools like Webpack enabling efficient development.
*/

//webpack
/*
module.exports {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}
*/

// Key Takeaway
// JavaScript's evolution from inline scripts to ES6 modules has solved major issues like dependency management and namespace pollution, providing a clean system for modern development.
