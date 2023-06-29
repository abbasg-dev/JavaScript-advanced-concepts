// block scope - variables declared inside a { } block cannot be accessed from outside the block

function loop () {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i);
}

loop();
