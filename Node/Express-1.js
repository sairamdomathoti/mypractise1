/* 

* Express is a minimal and flexibl node.js web application
* Intsall: $ npm install express --save
Testing:
$ node Express-1.js
2. Open browser and navigate URL
http://localhost:5000
or 1. CURL http://localhost:5000

   */

 var express = require('express');
 var app = express();
 
 app.get('/', function(req,res){
  res.send('Welcome to Express');
 });


 app.get('/hello', function(req,res){
  res.send('Hello Express');
 });

 app.listen(5000,function(){
  console.log("App is listening on 5000 port");
 });

 
