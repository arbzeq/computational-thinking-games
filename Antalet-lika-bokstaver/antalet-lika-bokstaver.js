let word1 = prompt("Skriv in ett ord:");
let word2 = prompt("Skriv in ett annat ord:");

let smallestWord = Math.min(word1.length, word2.length);

let sameLetters = 0;
for(let i = 0; i < smallestWord; i++) {
    
    if(word1[i] == word2[i]){
        sameLetters++;
    }

}
console.log(sameLetters);