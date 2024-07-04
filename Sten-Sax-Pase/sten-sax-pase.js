
let play = confirm("Vill du spela sten/sax/påse?");

while(play) {
    let player1 = prompt("Skriv in sten/sax/påse");
    let player2 = prompt("Skriv in sten/sax/påse");

    if(player1 == "sten" && player2 == "sten") {
        alert("Lika!");
    }
    else if(player1 == "sten" && player2 == "sax") {
        alert("Spelare 1 vann!");
    }
    else if(player1 == "sten" && player2 == "påse") {
        alert("Spelare 2 vann!");
    }
    else if(player1 == "sax" && player2 == "sten"){
        alert("Spelare 2 vann!");
    }
    else if(player1 == "sax" && player2 == "sax"){
        alert("Lika!");
    }
    else if(player1 == "sax" && player2 == "påse"){
        alert("Spelare 1 vann!");
    }
    else if(player1 == "påse" && player2 == "sten"){
        alert("Spelare 1 vann!");
    }
    else if(player1 == "påse" && player2 == "sax"){
        alert("Spelare 2 vann!");
    }
    else if(player1 == "påse" && player2 == "påse"){
        alert("Lika!");
    }


    play = confirm("Vill du spela igen?");
}

