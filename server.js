//Importing the Express framework
const express = require("express");

// Importing mongoose
const mongoose = require("mongoose");

// Setting the port for the app to run on 
const PORT = 8080;

//Assigning Express to an object so we can use the functions
const app = express();

//Setting the Express app to use the static folder
app.use(express.static(__dirname + "/client/static"));

//Setting the Express app to accept POST requests
app.use(express.urlencoded({extended: true}));

//Setting the Express app to use the EJS view enging and setting the directory for the views
// No EJS will be used for this API
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/client/views');

// Pulling the Models and Schemas 
require('./server/config/mongoose.js')

// Pulling the routes from the routes module
require('./server/config/routes.js')(app)

//This sets the Express app to listen to port 8000 on our localhost
app.listen(PORT, () => console.log("Running on port: "+PORT));

