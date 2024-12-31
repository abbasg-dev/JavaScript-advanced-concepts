const str = "ztm is the best of the best";

// Replaces all occurrences of a specified substring or pattern in a string.
const b = str.replaceAll("best", "worst");

// Replaces only the first occurrence of a specified substring or pattern in a string.
const c = str.replace("best", "worst");

console.log(b); // 'ztm is the worst of the worst'
console.log(str); // 'ztm is the best of the best'
console.log(c); // 'ztm is the worst of the best'
