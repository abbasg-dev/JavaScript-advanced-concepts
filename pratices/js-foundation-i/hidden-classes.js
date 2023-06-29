/*  Hidden Classes
    Javascript is a dynamic programming language, which means that properties can be easily added or removed from 
    an object after it is instantiated. Other properties can also be added dynamically after the object is created.
*/
function Animal(x, y) {
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

obj1.a = 30;
obj1.b = 100;

obj2.b = 30;
obj2.b = 100;

delete obj1.x;
