const Quote =require('./models/quote');
const mongoose =require('mongoose');
// mongoose.connect( process.env.MONGODB_URI ||
//                   process.env.MONGOLAB_URI ||
//                   process.env.MONGOHQ_URL ||
//                   “mongodb://localhost/project2”);

mongoose.connect('mongodb://localhost/project2');

let seedQuote = Quote.create({
    quote: 'Change the world by being yourself',
    author: 'Amy Poehler'

   },  function(err, quote) {
	   console.log(quote);
	   process.exit();
   }

);

