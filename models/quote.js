const mongoose = require('mongoose');


const Quote = mongoose.Schema({
	quote: String,
	author: String
});

module.exports = mongoose.model('Quote', Quote);


