// Memory efficient
function heavyDuty (index) {
    const bigArray = new Array(7000).fill('😊')
    console.log('created!')
    return bigArray[index]
}

console.log(heavyDuty(688))
console.log(heavyDuty(688))
console.log(heavyDuty(688))

const getHeavyDuty = heavyDuty2()

console.log(getHeavyDuty(688))
console.log(getHeavyDuty(700))
console.log(getHeavyDuty(800))

function heavyDuty2 () {
    const bigArray = new Array(7000).fill('😊')
    console.log('created Again!')
    return function(index) {
        return bigArray[index]
    }
}

// Encapsulation
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;

    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => { 
        timeWithoutDestruction = -1;    
        return '💥' 
    } 
    setInterval(passTime, 1000)
    return {
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
console.log(ohno.totalPeaceTime());
