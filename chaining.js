var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('output.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('output.txt.gz'));
  
console.log("File Compressed.");