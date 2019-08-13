/* 

testing:
1. node http-serverjs
2. open browser and navigate URL
  https://localhost:3000
   or
   1. CURL https://localhost:3000

   */

 var http = require('http');
 var PORT = process.env.PORT || 3000;
 
 var server = http.createServer(function(req,res){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write('<!DOCTYPE html>' +
                  '<html>' + 
                  '<head>' +
                  '<meta charset="utf-8" />' +
                  '<title> My Node.js page!</title>' +
                  '</head>' +
                  '<body>' +
                  '<h1> This is my first HTML page thru Node !</h1>' +
                  '</body>' +
                  '</html>' );
});

 
 server.listen(PORT);
 console.log("server is listening on 3000 port");
