/*
    Call Stack + Memory Heap

    Call-stack is a mechanism for an interpreter to keep track of its place in a script 
    that calls multiple functions.
    What function is currently being run and what functions are called from within that function.

    Memory heap is a place to store and write information.
    That is to allocate, use and release memory.
*/
const number = 610; // allocate memory for number
const string = 'some text' // allocate memory for a string

function subtractTwo(num) {
    const human = { // allocate memory for an object ... and it's values
        first: 'Abbas',
        last:'Ghaith'
    }
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate();

// callstack
