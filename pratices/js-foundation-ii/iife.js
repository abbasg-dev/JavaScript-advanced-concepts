// IFEE - Immediately Invoked Function Expression
/*
    a way to execute functions immediately, as soon as they are created.
    IIFEs are very useful because they don’t pollute the global object, 
    and they are a simple way to isolate variables declarations.
*/
(function() {
    var a = 1;
})();

// function(){}(); // SyntaxError: Function statements require a function name

console.log(a);
