var http=require('http')
var fs=require('fs')

var server=http.createServer(function(req,res)
{
console.log('request was made' + req.url);
res.writeHead(200,{'content-type':'text/html'});
var myReadeStream=fs.createReadStream('index.html','utf8');
myReadeStream.pipe(res);

});
server.listen(5000);
console.log("listening to port 5000");