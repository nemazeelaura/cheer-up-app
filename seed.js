const Quote =require('./models/quote');
const mongoose =require('mongoose');
// mongoose.connect( process.env.MONGODB_URI ||
//                   process.env.MONGOLAB_URI ||
//                   process.env.MONGOHQ_URL ||
//                   “mongodb://localhost/project2”);

mongoose.connect('mongodb://localhost/project2');

let seedQuote = Quote.create({
    quote: 'I am a seed quote',
    author: 'author name'

   }, function(err, quote) {
	   console.log(quote);
	   process.exit();
   }

);

