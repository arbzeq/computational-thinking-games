

for(let i = 1; i <= 100; i++) {
    console.log(i);
    let toWrite = "";
    if(i % 3 == 0){
        toWrite += "Fizz";
    }
    if(i % 5 == 0){
        toWrite += "Buzz";
    }

    console.log(toWrite);

}