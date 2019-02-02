var express = require("express");
var catalogcontroller = require('./controllers/catalogcontrollers');
var app = express();

//set up template engine
app.set('view engine','ejs');
//static files
app.use(express.static('.'));
// fire controllers
catalogcontroller(app);
//listen to the port;
app.listen(4200);
console.log('you are here on port 4200');