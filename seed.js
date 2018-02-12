const Quote =require('./models/quote');
const mongoose =require('mongoose');


mongoose.connect( process.env.MONGOD_URI || 'mongodb://localhost/project2');

// quote to seed database
let seedQuote = Quote.create({
    quote: 'Change the world by being yourself',
    author: 'Amy Poehler'

   },  function(err, quote) {
	   console.log(quote);
	   process.exit();
   }

);

