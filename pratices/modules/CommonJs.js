// CommonJS
// Modules are meant to be loaded synchronously
// Browserify (Module Bundler)
// No global namespace pollution and order doesn't matter anymore

var module1 = require("module1"); // .fight;
var module2 = require("module2"); // .importedFunc2;

function fight() {}

module1.exports = {
  fight: fight,
};

// AMD Asynchronous Module Definition
// Load scripts or modules asynchronously where the code can't rally wait until a module has finished loading.
// RequireJS (Module Loader)
define(["module1", "module2"], function (module1Import, module2Import) {
  var module1 = module1Import; // .fight
  var module2 = module2Import; // .importedFunc2

  function dance() {}

  return {
    dance: dance,
  };
});

// CommonJS and AMD solves the issues dependency resolution and the pollution of the global scope

// UMD Universal Module Definition
