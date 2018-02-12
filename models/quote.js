const mongoose = require('mongoose');

//quote model
const Quote = mongoose.Schema({
	quote: String,
	author: String
});

module.exports = mongoose.model('Quote', Quote);


