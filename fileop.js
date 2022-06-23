var fs=require('fs');
var readMe=fs.readFileSync('export.txt','utf8');
//synchrouno=us operation blocks the execution of code until fully read
fs.writeFileSync('exportnew.txt',readMe);

fs.readFile('exportnew.txt','utf8',function(err,data){
//not blocking the code asynchrounus
    console.log(data);
});
console.log('execute code while reading file')
