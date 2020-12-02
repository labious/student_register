//Reference to the express module
var express = require('express');
var bodyParser = require('body-parser');
//express app object
var app = express();
// port variable
var port = 5176;

//create a reference to the entry point for index.html
app.get('/', function(req, res){
    res.sendFile( __dirname + "/" + "index.html" );
});
//create reference to test file
app.use(express.static(__dirname + '/public'));

//tell the app to listen on port for requests
app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});


// app.get creates a route for endpoint named '/test.html ' 
app.get('/login.html', function(req, res){
    res.sendFile( __dirname + "/" + "login.html" );
});
app.get('/signup.html', function(req, res){
    res.sendFile( __dirname + "/" + "signup.html" );
});



//route to respond to process_get
app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    const response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 });
