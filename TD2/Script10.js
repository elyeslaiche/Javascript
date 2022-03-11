function grainDeRiz(){
    var tab = []    
    var nbr = 1;
    for(var i=1; i<=64; i++){
        tab.push(nbr)
        console.log(`le nombre de grain de riz a la case ${i} est : ${nbr}`)
        nbr *=2
        
    }
    console.log(tab[63])
}

grainDeRiz()