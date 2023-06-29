// Javascript runtime refers to where your javascript code is executed when you run it
console.log('1');
setTimeout(() => {console.log('2'), 1000});
console.log('3');

console.log('1');
setTimeout(() => {console.log('2'), 0});
console.log('3');
