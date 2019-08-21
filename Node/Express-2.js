/* 
* Access different URLs using express routes
* http://localhost:5000 : redirects to the index.html page in /public
   */

 var express = require('express');
 var app = express();
 
 // middleware for handling JSON, RAM, text and URL encoded form data.
 var bodyParser = require('body-parser');

 // Create application/x-www-form-urlencoded parser.
 var urlencodedParser = bodyParser.urlencoded({extended: false});

/* Access with : http://localhost:5000/users */

 app.get('/users',function (req,res){
  console.log("****************Request Info********************");
  console.log(req);
  console.log("****************Response Info********************");
  console.log(res);
  res.send("Logged the request and response");
 });

 /* Access with : http://localhost:5000/users/1234?name="sairam" */
 app.get('/users/:id/:name',function (req,res){
    var id = req.params.id;
    var name = req.params.name;
    res.send("'You asked for user id '" + id + " 'and passed the name = '" + name + "'");
       });
 
/* Serviing Static files
to access static files from public directory
Access with : http://localhost:5000/img1.png
*/
app.use(express.static(__dirname + '/public'));


/* Access with : http://localhost:5000/get-form.html */
app.get('/form-get', function(req,res){
    response ={
            first_name:req.query.first_name,
            last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


/* Access with : http://localhost:5000/post-form.html */
app.post('/form-post', urlencodedParser, function(req,res){
    response ={
            first_name:req.query.first_name,
            last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/file-upload', function (req,res){
    res.send("Not _ impletmented");
});


app.listen(5000, function (){
    console.log("App listenening on port 5000");
});
