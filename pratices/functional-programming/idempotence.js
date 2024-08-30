// Idempotence
// The idea is a function that always returns or does what we expect it to do

function notGood(num) {
  console.log(num);
}

notGood(5); // 5

console.log(Math.abs(Math.abs(-50))); // 50
