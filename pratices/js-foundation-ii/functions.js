/*
    call () 
    apply () 
    bind ()
*/

const wizard = {
    name: 'Abbas',
    health: 50,
    heal (num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Jad',
    health: 30,
}

console.log('1', archer);
const healArcher = wizard.heal.bind(archer, 100, 30)
healArcher();
console.log('2', archer);

// call and apply are useful for borrowing methods from an object
// bind is useful for us to call function later on with a certain context
