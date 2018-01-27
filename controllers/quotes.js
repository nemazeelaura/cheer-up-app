'use strict'
//require api Key
//Require request library
const request = require('request');
const keys = require('../env.js');
const quotes = require('../models/quote');



function getQuotes(req, res){
   request('http://quotes.rest/quote/random.json?api_key=' + keys.key, function (error, response, body) {
    // call back
    let info = JSON.parse(body);
    res.send(info);
 });
}




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














module.exports= {

	getQuotes: getQuotes
	// getImages: getImages
}




// var options = window.location.search.slice(1)
//                       .split('&')
//                       .reduce(function _reduce (/*Object*/ a, /*String*/ b) {
//                         b = b.split('=');
//                         a[b[0]] = decodeURIComponent(b[1]);
//                         return a;
//                       }, {});

