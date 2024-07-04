function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function throwDie(n) {
    console.log(`throwDie started with n = ${n}`);
    let dieContainer = [];
    for(let i = 0; i < n; i++) { //throw it n times
        let currentThrow = getRandomIntInclusive(1, 6);
        console.log(`Die number ${i+1} was thrown with value ${currentThrow}`);
        dieContainer.push(currentThrow);
    }

    let maxThrowThisRound = Math.max(...dieContainer);
    return maxThrowThisRound;

}

function findMaxPlayer(numberArray){
    let maxValue = 0;
    let maxPlayer= 0;
    for(let i = 0; i < numberArray.length; i++) {
        let currentSum = numberArray[i];
        if(currentSum > maxValue) {
            maxValue = currentSum;
            maxPlayer = i + 1;
        }
    }

    return maxPlayer;



}
const numberOfPlayers = parseInt(prompt("Enter number of players:"));

let sumContainer = [];
for(let i = 1; i <= numberOfPlayers; i++) {
    let sumIndex = i-1;
    console.log(`Player ${i} is now playing.`)
    sumContainer.push(0);
    for(let j = 3; j > 0; j--) {
        let maxThrowThisRound = throwDie(j);
        console.log(`The maximum die had value ${maxThrowThisRound}`);
        
        sumContainer[sumIndex] = sumContainer[sumIndex] + maxThrowThisRound;
        console.log(`Current sumContainer is ${sumContainer}`);
        
    }
    
    console.log(`Player ${i} gathered ${sumContainer[sumIndex]} points in total!`)
}

bestPlayer = findMaxPlayer(sumContainer);
console.log(`The highest scoring player is ${bestPlayer} with a score of ${sumContainer[bestPlayer - 1]}`);