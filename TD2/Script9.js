function interestCalc(){
    var sommeDepart = 100
    for(let i = 1; i <= 20; i++){
        sommeDepart+= sommeDepart*0.043
    }
    console.log(sommeDepart)
}

interestCalc()