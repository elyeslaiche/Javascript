const hashFiles = require('hash-files');
const fs = require('fs')

function hashArg(){
    let tab = [];
    let content =[];
    for(let i = 2; i < process.argv.length; i++){
        tab.push(process.argv[i])
    }

    for(let file of tab){  
        content.push(file + " " + hashFiles.sync({files: file, algorithm:'md5'}) + " " + hashFiles.sync({files: file}));
    }

    var fileFinal = fs.createWriteStream('checksumStat.txt');
    fileFinal.on('error', function(err) { /* error handling */ });
    content.forEach(function(v) { fileFinal.write(v + "\n"); });
    fileFinal.end();
}

function CompFile(file1, file2){
    console.log("\nmd5: ")
    console.log( hashFiles.sync({files: file1, algorithm:'md5'}) === hashFiles.sync({files: file2, algorithm:'md5'}))
    console.log("\nsha1: ")
    console.log( hashFiles.sync({files: file1}) === hashFiles.sync({files: file2}))
}

hashArg()
CompFile(process.argv[2], process.argv[3])
CompFile(process.argv[2], process.argv[2])