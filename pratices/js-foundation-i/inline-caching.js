// inline caching - optimize property access
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: 'Abbas',
    lastName: 'Ghaith',
}

findUser(userData);
