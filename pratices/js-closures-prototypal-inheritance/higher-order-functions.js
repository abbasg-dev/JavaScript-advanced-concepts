function letAbbasLogin () {
    let array = [];
    for (let i = 0; i < 100000000; i++) {
        array.push(i);
    }
    return console.log('Access Granted to Abbas');
}

function letEvaLogin () {
    let array = [];
    for (let i = 0; i < 10000; i++) {
        array.push(i);
    }
    return console.log('Access Granted to Eva')
}

letAbbasLogin()
letEvaLogin()

const giveAccessToUser = (name) => console.log('Access Greanted to ' + name)

function authentication (verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }
    return giveAccessToUser(person.name);
}
function sing (person) {
    return console.log('lalalalal my name is ' + person.name);
}
function letPerson(person, fn) { // ++ tell it what data to user + function
    if (person.level === 'admin') {
        return fn(person)
    } else if (person.level === 'user') {
        return fn(person)
    }
}
letPerson({ level: 'user', name: 'Abbas' }, sing);
