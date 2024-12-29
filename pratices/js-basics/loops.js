var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];

var todosImportant = [
  "clean room!",
  "brush teeth!",
  "exercise!",
  "study javascript!",
  "eat healthy!",
];

var todosLength = todos.length;

/*
for (var i = 0; i < todosLength; i++) {
  //todos[i] = todos[i] + "!";
  //todos.pop();//[]
  console.log(todos[i], i);
}
*/

// forEach (new in ECMAScript 5)
// Executes a provided function once for each array element.

/*
todos.forEach(function (todo, i) {
  console.log(todo, i);
});
*/

function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

/*
var counterOne = 10;
while (counterOne > 0) {
  console.log("while", counterOne);
  counterOne--;
}
*/
/*
var counterTwo = 10;
do {
  console.log("do while", counterTwo);
  counterTwo--;
} while (counterTwo > 10);
*/
