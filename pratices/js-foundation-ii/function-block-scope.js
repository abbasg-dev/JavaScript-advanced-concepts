// function scope
// vs
// block scope

/*
    function scope: Each function creates a new scope.
    Variables defined inside a function are not accessible (visible) from outside the function.
    Variables declared with var, let and const are quite similar when declared inside a function.
*/

if (5 > 4) {
    var secret = '12345';
}

secret;
