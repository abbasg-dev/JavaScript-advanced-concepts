// Functions are first class citizens in JS

var stuff = function () {}

function a (fn) {
    fn()
}

a (function () { console.log('hi there') });
function b () {
    return function c () { console.log('bye') }
}

var d = b ()
d()
