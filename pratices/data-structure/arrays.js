// Arrays sometimes called lists, organizes items sequentially one after another in memory. Stored in contiguous memory that is on order.
// Arrays in javascript are just objects with integer based keys that act like indexes

const strings = ["a", "b", "c", "d"];
//4*4 = 16 bytes of storage

console.log(strings[2]); //c

//push - adds new items to the end of an array
strings.push("e"); // O(1)
console.log(strings); // ['a', 'b', 'c', 'd', 'e']

//pop - removes the last element of an array
strings.pop();
strings.pop(); // O(1)

console.log(strings); // ['a', 'b', 'c']

//unshift - add an item at the beginning of the array
strings.unshift("x"); // O(n)
console.log(strings); // ['x', 'a', 'b', 'c']

//splice - adds and/or removes array elements
strings.splice(2, 0, "alien"); // O(n/2)
console.log(strings); // ['x', 'a', 'alien', 'b', 'c']

/*
static
fixed in size, specify the number of elements the array will hold ahead of time

Lookup O(1)
Push O(1)
Insert O(n)
Delete O(n)

dynamic
allow us to copy and rebuild an array at a new location
expands as you add more elements, so you don't need to determine the size ahead of time.

Lookup O(1)
append* O(1)
Insert O(n)
Delete O(n)

*can be O(n)
*/

/*
Advantages
- Fast lookups
- Fast push/pop
- Ordered

Disadvantages
- Slow inserts
- Slow deletes
- Fixed size*
*/
