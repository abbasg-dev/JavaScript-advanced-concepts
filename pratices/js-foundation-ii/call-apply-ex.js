const array = [1,2,3];

function getMaxNumber(arr){
    return {
        apply: Math.max.apply(null, arr),
        call: Math.max.call(null, ...arr)
    }
}
console.log(getMaxNumber(array)) // should return 3
