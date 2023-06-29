var favouriteFood = undefined;
console.log(favouriteFood); // undefined
var foodThoughts = undefined;
console.log(foodThoughts); // undefined

favouriteFood = 'grapes';

console.log(favouriteFood); // grapes

foodThoughts = function () {
    var favouriteFood = undefined;
    console.log('Original favourite food: ' + favouriteFood); // undefined

    favouriteFood = 'sushi';

    console.log('New favourite food: ' + favouriteFood); // sushi
}

foodThoughts();
