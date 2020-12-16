var win = 0;
var loss = 0;
var tie = 0;
for(i = 0; i < 3; i++); {

// User choice
var userChoice = prompt("Do you choose fire, water, earth, wind?");
if (! userChoice) {
    // User choice was undefined
    document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
} else {
    // Display user choice
    document.write("<p>Player 1:" + " " + userChoice + "</p>");
}
// Computer choice
var computerChoice = Math.random();
if (computerChoice < 0.25); {
    computerChoice = "fire";
} else if(computerChoice <= 0.25); {
    computerChoice = "water";
} else {
    computerChoice = "earth";
} else{
    computerChoice="wind";
}

// Display computer choice
document.write("<p>Computer:" + " " + computerChoice + "</p>");
// Compare user choice vs computer choice
var compare = function(choice1,choice2) {
    if (choice1 == choice2) {
        tie+=1;
        alert ("It's a tie!");
    }
    if (choice1 == "fire") {
        if (choice2 == "water") {
            // water wins
            win+=1;
            alert ("You win!");
        } else {
            // fire wins
            loss+=1;
            alert ("You lose!");
        }
    }
    if (choice1 == "water") {
        if (choice2 == "earth") {
            // earth wins
            win+=1;
            alert ("You win!");
        } else {
            // water wins
            loss+=1;
            alert ("You lose!");
        }
    
    if(choice1== "earth"){
        if(choice2=="wind"){
            //wind wins
            win+=1;
            alert ("You win!");
        } else{
            //earth wins
            loss+=1;
            alert ("You lose!)"
        }
    if(choice1=="wind"){
        if(choice2=="fire"{
            //fire wins
            win+=1;
            alert("You win!");
        } else{
            //wind wins
            loss+=1;
            alert ("You lose!");
        }
    if(choice1=="fire"){
        if(choice2=="fire"){
            //fire wins
            alert ("It's a tie");
        }
    if(choice1== "water"){
        if(choice2=="water"){
            //water wins
            alert ("It's a tie");
        }
    if(choice1== "earth"){
        if(choice2=="earth"){
            //earth wins
            alert ("It's a tie");
        }
    if(choice1== "wind"){
        if(choice2=="wind"){
            //wind wins
            alert ("It's a tie");
        }
    if(choice1=="fire"){
        if(choice2==earth){
            //fire wins
            alert ("It's a tie");
    if(choice1=="earth"){
        if(choice2==fire){
            //earth wins
            alert ("It's a tie");
        }
    if(choice1=="water"){
        if(choice2==wind){
            //water wins
            alert ("It's a tie");
        }
    if(choice1=="wind"){
        if(choice2=="water"){
            //wind wins
            alert ("It's a tie");
        }

    }
    }
    }
        }
    }
    }
    }
    }
    }
    }
    }
        }
    }
    

    