function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

let totalThrows = 0;
let currentNumberToThrow = 1;
while(currentNumberToThrow < 7) {
    let currentThrow = getRandomIntInclusive(1, 6);
    
    totalThrows += 1;
    if(currentThrow == currentNumberToThrow) {
        alert(`You needed to throw ${currentNumberToThrow} and you threw ${currentThrow}. \n` +
        'Well done! \n' +
        `You have thrown ${totalThrows} times.`);
        currentNumberToThrow += 1;
    }
    else {
        alert(`You needed to throw ${currentNumberToThrow} and you threw ${currentThrow}. \n` +
        'Let\'s try again. \n' +
        `You have thrown ${totalThrows} times.`);
    }
    
}

alert(`You threw ${totalThrows} to complete the game. Done!`);