var fs=require('fs');
var readMe=fs.readFileSync('export.txt','utf8');
console.log(readMe);