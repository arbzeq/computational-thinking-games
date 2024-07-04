function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function throwDie(n) {
    for(let j = 0; i < 3; i++) { //throw it 3 times
        let currentThrow = getRandomIntInclusive(1, 6);
        
        dieContainer.push(currentThrow);
    }

}

const numberOfPlayers = parseInt(prompt("Enter number of players:"));

let sumContainer = [];
for(let i = 1; i <= numberOfPlayers; i++) {
    let currentPlayerPoints = 0;
    let dieContainer = [];
    
    let highestThrow = Math.max(dieContainer);
    console.log(`Player ${i} highest throw was ${currentThrow}`)

    sumContainer.push(currentPlayerPoints);

    
    
}

while(currentPoints < pointsToReach) {
    let throw1 = getRandomIntInclusive(1, 6);
    let throw2 = getRandomIntInclusive(1, 6);
    let throw3 = getRandomIntInclusive(1, 6);
    let highestThrow = Math.max(throw1, throw2, throw3);
    

    let stringToPrint = `You threw ${throw1} and ${throw2} `+
        `for a total of ${sum}.\n`;
    if(sum == knockOutNumber) {

        currentPoints -= sum;
        stringToPrint += 'It was the knockout number.\n'+
        `Your currently have ${currentPoints} points.`;
    }
    else {
        currentPoints += sum;
        stringToPrint += 'Added this to your current points.\n'+
        `Your currently have ${currentPoints} points.`;
    }
    console.log(stringToPrint);
}

console.log(`You finished the game with ${currentPoints} points!`)