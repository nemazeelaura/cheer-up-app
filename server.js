/*
*** main configuration file for my Express app.  ***
 
File: server.js
The server.js file is where your node server startup code will live.
NPM looks for a file named server.js (or app.js) when you start it.
*/
// --- Require the stuff we need for our app ---
// - import the contents from another JavaScript files.
// - file extension '.js' is assumed by default.
//   If you don’t' give an extension node will resort to looking for your filename with either a .js, .json, or .node extension
const express = require('express');
const mongoose = require('mongoose');
const app = express(); // --- Create the express app
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// connect to db models
let db = require('./models');

mongoose.connect('mongodb://localhost/project2');// MongoDB, by default, runs on port 27017

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded( {extended: true } ));
app.use(bodyParser.json());


//found this on stack overflow was having trouble finding public directory
let path = require('path');
app.use(express.static(path.join(__dirname + '/public')));

// Set the views folder and the view engine.
// Tells Express to use the "ejs" templating engine.
app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(session({ secret: 'hey'}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());

require('./config/passport')(passport);

app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

let routes = require('./config/routes');// used in passport

app.use(routes);


// --- Start up your node server on port 3000 ---
// The process.env declaration provides an access to variables defined in the current development environment.
app.listen(process.env.PORT || 3000, function() {
    console.log('listening on port 3000');
});
