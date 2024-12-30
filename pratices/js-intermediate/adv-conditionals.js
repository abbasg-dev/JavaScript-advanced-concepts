// condition ? expr1: expr2

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(false) ? "You may enter" : "Access Denied";

// console.log(answer);

var answer =
  "Your account # is " + (isUserValid(true) ? "1234" : "not available");

function condition() {
  if (isUserValid(true)) {
    return "You may enter";
  } else {
    return "Access denied";
  }
}

var answer2 = condition();

// console.log(answer);
// console.log(answer2);

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

console.log(window.moveCommand("forward")); // you encounter a monster
console.log(window.moveCommand("back")); // you arrived home
console.log(window.moveCommand("right")); // you found a river
console.log(window.moveCommand("left")); // you run into a troll
console.log(window.moveCommand(1336123)); // please enter a valid direction
