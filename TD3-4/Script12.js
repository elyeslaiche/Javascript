function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function ShuffleCards(){
    let arrayValue = ["As", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Roi", "Dame", "Valet"];
    let arrayColor = ["Carreau", "Coeur", "Pique", "Trefle"];
    let countColor = 0;
    let resultTab = [];
    let j = 0
    for(let i = 1; i <= 52; i++){
        resultTab.push(arrayValue[j] +" de "+ arrayColor[countColor]);
        j++;
        if(i%13 == 0 && i != 0){
            countColor++;
            j = 0;
        }
    }
    //shuffle(resultTab);
    for(let card of resultTab){
        console.log(card);
    }
}


ShuffleCards()