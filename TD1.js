"use strict"
// function Print1To10() {   // Quest1
//     for (let i = 1; i <= 10; i++) {
//         console.log(i)
//     }
// };

// Print1To10()

// function PrintOddTo100() { // Quest2
//     for (let i = 1; i <= 50; i++) {
//         console.log(2 * i)
//     }
// };
// console.log("--------------------------------------------")
// PrintOddTo100()


// function PrintMultip7() { //Quest3
//     for (let i = 0; i <= 9; i++) {
//         console.log(7 * i)
//     }
// };
// console.log("--------------------------------------------")
// PrintMultip7()

function PrintMultip1To10() { //Quest4
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            console.log(j * i)
        }
    }
};
console.log("--------------------------------------------")
PrintMultip1To10()

function PrintSum(nbr) { //Quest5
    if (nbr >= 1){
        let result = nbr + PrintSum(nbr - 1);
        return result
    }
    else
        return 0;
};
console.log("--------------------------------------------")
console.log(PrintSum(10))

function PrintFact(nbr) { //Quest6
    if (nbr >= 1){
        let result = nbr * PrintFact(nbr - 1);
        return result
    }
    else
        return 1;
};
console.log("--------------------------------------------")
console.log(PrintFact(10))

