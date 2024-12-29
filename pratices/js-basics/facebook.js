var database = [
  {
    username: "abbas",
    password: "supersecret",
  },
  {
    username: "sara",
    password: "123",
  },
  {
    username: "ahmad",
    password: "777",
  },
];

var newsFeed = [
  {
    username: "Ahmad",
    timeline: "So tired from all that learning",
  },
  {
    username: "Sally",
    timeline: "Javascript is sooo cool!",
  },
  {
    username: "Sara",
    timeline: "Javascript is preeetyy cool!",
  },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);
