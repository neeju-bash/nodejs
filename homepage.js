var fs = require('fs');
var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
       // res.write('<html><body><p>This is student Page.</p></body></html>');
       // res.end();
        fs.ReadStream('index.html').pipe(res);
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //fstat.createReadstream
       res.write('<html><body><p>This is admin Page.</p></body></html>');
       res.end();
    
    }
    else if (req.url == "/studentdetails") {
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
       // res.write('<html><body><p>This is student Page.</p></body></html>');
       // res.end();
       var students=[{name:'neeraj',age:'24'},{name:'mysi',age:'27'}];
       res.end(JSON.stringify(students));
    }
    else 
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')