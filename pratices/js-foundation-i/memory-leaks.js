// a memory leak is an allocated piece of memory that the JavaScript engine is unable to reclaim.

// Global Variable
var a = 1;
var b = 1;
var c = 1;

// Event listeners
var element = document.getElementById('button');
element.addEventListener('click', onClick);

// setInterval
setInterval(() => {
    // referencing objects..
});