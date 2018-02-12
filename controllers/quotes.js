'use strict'
//require api Key
//Require request library
const request = require('request');
const keys = require('../env.js');
const Quote = require('../models/quote');


// Get random quote of the day
function getQuoteOfDay(req, res){
   request('http://quotes.rest/quote/random.json?api_key=' + keys.key, function (error, response, body) {
    let info = JSON.parse(body);
    res.send(info);
 });
}

// POST to db 
function createQuoteOfDay(req, res) {
  let quoteNew = req.body.newQuoteText;
  let authorNew = req.body.author;
  console.log('quote from post' + quoteNew);

  let quote = Quote.create({quote: quoteNew, author: authorNew}, function(err, newQuote) {

    if (err) res.json({
      message: 'Could not create quote: ' + err
    });
    console.log('quote saved to database');
    res.redirect('/api/quotes');
  });
}

// GET quote by id
function getQuoteId(req, res) {
  let id = req.params.id;
   Quote.findById({_id: id}, function(err, quote) {
    if(err) res.json({message: 'Could not find quote b/c:' + err});
    res.render('/api/quotes/edit', {quote: quote});
  });
}

// GET quote by id and update
function updateQuote(req, res) {
  let id = req.params.id;
   Quote.findById({_id: id}, function(err, quote) {
    if(err) res.json({message: 'Could not find quote b/c:' + err});
    if(req.body.quote) quote.quote=req.body.quote;

    quote.save(function(err){
      if (err) res.json({messsage: 'Could not update quote b/c: ' + err});

      res.redirect('/api');
    });
  });
}

// Delete the quote by id
function deleteQuote(req, res) {
  let id = req.params.id;
  console.log(id);

  Quote.remove({_id: id}, function(err) {
    if(err) res.json({message: 'Could not delete quote b/c: ' + err});
     res.json('quote deleted');
    // res.redirect('/api/quotes');
  });
}

module.exports= {

	getQuoteOfDay: getQuoteOfDay,
	createQuoteOfDay: createQuoteOfDay,
  getQuoteId: getQuoteId,
  updateQuote: updateQuote,
  deleteQuote: deleteQuote
}
















































// old code -----------------------------------------
// function getQuotes(req, res){
//    request('http://quotes.rest/quote/random.json?api_key=' + keys.key, function (req, res, body) {
//     // call back

//     if (body.totalResults) {


//     let info = JSON.parse(body);


//     let quotes = {
//         quote: info.data[0].quote,
//         author: info.data[0].author  
//       };

//     let quotesInfo = new Quote();
//         quotesInfo.name = info.data[0].quote, 
//         quotesInfo.author = info.data[0].author 

//         quotesInfo.save();

//         res.send(quotes);
	
// 	}

//   });

// }

// function getImages(req, res){
//     request('http://quotes.rest/quote/image/search?api_key=' + keys.key, function (error, response, body) {
//     // call back
//     res.send(body);
//   });
    
// }




// const https = require('https');

// const url = 'http://quotes.rest/quote/random.json?api_key=' + keys.key;

// https.get(url, res => {
// 	res.setEncoding('utf8');
// 	let body = "";
// 	res.on('data', data => {
// 		body += data;
// 	});

// 	res.on('end', () => {
//       body = JSON.parse(body);
//       console.log(

//       	`quote: ${body.results[0].quote} -`,
//       	`author: ${body.results[0].author}`

//     );
//   });
// });


















// var options = window.location.search.slice(1)
//                       .split('&')
//                       .reduce(function _reduce (/*Object*/ a, /*String*/ b) {
//                         b = b.split('=');
//                         a[b[0]] = decodeURIComponent(b[1]);
//                         return a;
//                       }, {});

