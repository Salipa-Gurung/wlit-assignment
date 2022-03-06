var http = require('http')
const convert = require('./module/converter')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type':'text/plain'})
    res.end("we are wlit fellows 2022")
}).listen(8080);

console.log(convert(2048));