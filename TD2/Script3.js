function Conway(initNumber){
    console.log(initNumber);
    var tab = initNumber.toString().split('');
    var resultTab = []
    times = 0
    for(let j = 0 ; j < tab.length ; j++){
        times = testTimes(tab,tab[j])
    }
    for(let i = 0 ; i < tab.length ; i = i+2){
        resultTab[i] = times;
        resultTab[i+1] = tab[i]
    }
    return resultTab;
}


function testTimes(tab,number){
    var times = 0
    for(let i = 0 ; i < tab.length ; i ++){
            if(tab[i] == number){
                times++;
            }  
    }
    return times;
}

console.log(Conway(225))