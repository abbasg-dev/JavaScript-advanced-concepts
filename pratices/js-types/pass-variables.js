/*
    - Pass by value means copy the value and create that value somewhere else in memory
    - Pass by reference means that the new variable adopts a memory address of 
      an initial variable. Since both variables refer to the same memory address, 
      changes in one variable will affect another one.
*/

// var a = 5;
// var b = a;

// b++;

// // console.log(a);
// // console.log(b);

let obj1 = {
    name: 'Abbas',
    password: '123'
};
let obj2 = obj1;

obj2.password = '12345';

// console.log(obj1);
// console.log(obj2);

var c = [1,2,3,4,5];
// var d = c;
var d = [].concat(c);
d.push(12345);
// console.log('d = ', d);
// console.log('c = ', c);

let obj3 = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};
let clone1 = Object.assign({}, obj3);
let clone2 = {...obj3};
let superClone = JSON.parse(JSON.stringify(obj3));

obj3.c.deep = 'hahahah';
console.log('obj3: ', obj3);
console.log('clone1: ', clone1);
console.log('clone2: ', clone2);
console.log('super clone: ', superClone);
