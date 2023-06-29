/*
    Lexical - were it is written
    Scope - what variable we have access to
    Closures
        - It is an inner function that has access to the other function's variables
        - It’s a combination of a function and the lexical environment in which it was declared
*/
function a () {
    let grandpa = 'Kassem'
    return function b () {
        let father = 'Hussein'
        let random = 5434765879
        return function c () {
            let son = 'Abbas'
            return console.log(`${grandpa} > ${father} > ${son}`);
        }
    }
}

a()()();

const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`);
boo('hi')('abbas')('ghaith')

const booString = boo('hi');
//3 years
const booStringName = booString();
