function a() {
    return console.log('a');
}

for (let i = 0; i < 5; i++) {
    a()
}

function b(param=6) {
    return console.log(param);
}

b()
