function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


const pointsToReach = parseInt(prompt("Enter points to reach:"));
const knockOutNumber = parseInt(prompt("Enter knock-out number:"));
let currentPoints = 0;
while(currentPoints < pointsToReach) {
    let throw1 = getRandomIntInclusive(1, 6);
    let throw2 = getRandomIntInclusive(1, 6);
    let sum = throw1 + throw2;
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