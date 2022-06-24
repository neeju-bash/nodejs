var http=require('http')
var fs=require('fs')

var server=http.createServer(function(req,res)
{
console.log('request was made' + req.url);
res.writeHead(200,{'content-type':'text/plain'});
var myReadeStream=fs.createReadStream('output.txt','utf8');
myReadeStream.pipe(res);

});
server.listen(5000);
console.log("listening to port 5000");

/*pipe is used to automate the listening to reader stream and writing to writer stream it automatically fech
the data from reader stream and sent to write stream here to res*/