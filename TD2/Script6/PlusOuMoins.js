const prompt = require("prompt-sync")();

function randomNumber(){
   return Math.floor(Math.random() * 50);
}

function guessTheNumber(){
    var input = 'first Try'
    var goalNumber = randomNumber();
    console.log(goalNumber)
    do{  
        if(input == 'first Try')
            input = prompt("Guess the number: ");
        else{
            if(input > goalNumber)
                input = prompt("Too high try again : ");
            else
                input = prompt("Too low try again : ");
        }
        
    }
    while(parseInt(input) != goalNumber && !isNaN(parseInt(input)));
    console.log("you win");
}

guessTheNumber()