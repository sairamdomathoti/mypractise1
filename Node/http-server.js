/* 

testing:
1. node http-serverjs
2. open browser and navigate URL
  https://localhost:4000
   or
   1. CURL https://localhost:4000

   */

 var http = require('http');
 
 var server = http.createServer(function(req,res){
        res.writeHead(200);
        res.end("Welcome to Node");
 });

 server.listen(4000);
 console.log("server is listening on 4000 port");
