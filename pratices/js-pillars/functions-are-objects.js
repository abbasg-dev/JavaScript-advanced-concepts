// invoking functions

function one () {
    return console.log(1);
}

one();

const obj = {
    two: function () {
        return console.log(2);
    },
    three () {
        return console.log(3);
    }
}

obj.two();
obj.three();

function four () {
    return console.log(4);
}

four.call();

const five = new Function('return 5');

console.log(five());

function woohooo () {
    console.log('woohooo')
}

console.log(woohooo.name)
