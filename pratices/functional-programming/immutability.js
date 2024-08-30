// Immutability
// means not changing the data, not changing the state

const obj = { name: "Abbas" };
function clone(obj) {
  return { ...obj }; // this is pure.
}

function updateName() {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}

const updatedName = updatedName(obj);

console.log(obj, updatedName); // { name: 'Abbas' } { name: 'Nana' }
