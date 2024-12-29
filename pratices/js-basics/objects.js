// Objects are collections of property
// Function inside an object is a method

var user = {
  name: "Abbas",
  age: 28,
  hobby: "Soccer",
  isMarried: false,
  spells: ["abrakadra", "shazam", "boo"],
  shout: function () {
    console.log("AHHHHH!"); //AHHHHH!
  },
};

var list = ["apple", "banana", "orange"];

console.log(list); //["apple", "banana", "orange"]
console.log(list[1]); //banana
console.log(user.name); //Abbas
console.log(user.age); //28
console.log(user.hobby); //Soccer
console.log(user.isMarried); //false

user.favouriteFood = "Pizza";
console.log(user);

user.isMarried = true;
console.log(user);

var users = [
  {
    username: "ahmad",
    password: "toor",
  },
  {
    username: "amjad",
    password: "123",
  },
];

console.log(users);

console.log(user.spells); //['abrakadra', 'shazam', 'boo']
console.log(user.spells[1]); //shazam

console.log(users[0].password); //toor

console.log(user.shout());

console.info("hello"); //hello
console.error("ahhh"); //ahhh

var user2 = {};
console.log(user2); //{}

var list2 = [];
console.log(list2); //[]

console.log(list[0]); //apple

console.log(user2[0]); //undefined

var a;

console.log(a); //undefined

var emptyObj = {};
var nullObj = null;

console.log(emptyObj); //{}
console.log(nullObj); //null

// nullObj.name = "Sara"; //Uncaught TypeError: Cannot set properties of null
emptyObj.name = "Sara";
console.log(emptyObj); //{name: "Sara"}
