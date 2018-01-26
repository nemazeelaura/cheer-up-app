'use strict'
//require api Key
//Require request library
const request = require('request');
const keys = require('../env.js');


function getQuotes(req, res){
    request('http://quotes.rest/quote/random.json?api_key=' + keys.key, function (error, response, body) {
    // call back
    let info = JSON.parse(body);
    res.send(info);
  });
    
}



module.exports= {

	getQuotes: getQuotes
}






