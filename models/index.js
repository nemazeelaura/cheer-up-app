const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URI ||'mongodb://localhost/project2');

//export models
module.exports.Quote = require('./quote.js');
module.exports.User = require('./user.js');
 