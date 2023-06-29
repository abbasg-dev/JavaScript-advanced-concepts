// Function Expression
var canada = () => {
    console.log('cold');
}
// Function Declaration
function india () {
    console.log(arguments); // [Arguments] {}
    console.log('warm');
}

// Function Invocation/Call/Execution
canada();
india();

function marry(person1, person2) {
    console.log(arguments); // [Arguments] { '0': 'Tim', '1': 'Tina' }
    console.log(Array.from(arguments)); // [ 'Tim', 'Tina' ]
    return `${person1} is now married to ${person2}`;
}

function marry2(...args) {
    console.log(args); // [ 'Tim', 'Tina' ]
    console.log(Array.from(arguments)); // [ 'Tim', 'Tina' ]
    return `${args[0]} is now married to ${args[1]}`;
}

marry('Tim', 'Tina');
marry2('Tim', 'Tina');