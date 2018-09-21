// ############### ALL THE REQUIRES ###############

// Require the Express Module
var express = require('express');

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');


// Require path
var path = require('path');

// ############### ALL THE APPS ###############// 

// Create an Express App
var app = express();
app.use(express.static( __dirname + '/public/dist/public' ));

// Integrate the different body-parser with our App
app.use(bodyParser.json());



require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})