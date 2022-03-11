function testBisextil(year){
    if( (year%4 == 0 && year%100 != 0) || year%400 == 0)
        return true;
    return false;
}

console.log(testBisextil(2024))
console.log(testBisextil(2000))
console.log(testBisextil(2022))