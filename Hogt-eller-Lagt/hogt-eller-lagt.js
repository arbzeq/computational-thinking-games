let secretNumber = 20;
let done = false;

let number;
while(!done) {
    number = prompt("Skriv in ett tal mellan 1 och 100");
    if(number > secretNumber) {
        alert("För högt!");
    }
    else if(number < secretNumber){
        alert("För lågt!");
    }
    else {
        alert(`Du hittade det hemliga numret ${secretNumber}`);
        done = true;
        
    }
    
}