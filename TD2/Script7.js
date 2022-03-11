function lanceDe(x, n, effect){
    var De = []
    var resultTab = 0
    for (var i = 1; i <= n; i++){ // construction du dé
        De.push(i) 
    }
    for(let i = 1; i <=x; i++){ 
        resultTab += De[Math.floor(Math.random() * n)]
    }    
    return resultTab+effect
}

console.log(lanceDe(50,10,20))