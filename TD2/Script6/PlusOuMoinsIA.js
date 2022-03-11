const prompt = require("prompt-sync")();

function randomNumber(){
   return Math.floor(Math.random() * 50);
}

function guessTheNumberIA(){
    var input = 'first Try'
    var goalNumber = randomNumber();
    var NewMaxVal = 50
    console.log(goalNumber)
    do{  
        if(input == 'first Try')
            input = 25
        else{
            if(input > goalNumber){
                NewMaxVal = input
                input = input/2;
            }
            else
                if(input + input/2 < NewMaxVal)
                    input += input/2;
                else
                    input += 1
        }
        console.log(input)
    }
    while(parseInt(input) != goalNumber && !isNaN(parseInt(input)));
    console.log("you win");
}

guessTheNumberIA()