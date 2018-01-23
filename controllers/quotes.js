'use strict'
//require api Key
//Require request library
const request = require('request');
const keys = require('env.js');


function getQuotes(quote){
    request('http://quotes.rest/quote/random.json?api_key=' + keys.key + '', function (error, response, body) {
    // call back
    let info = JSON.parse(body);
    console.log(info);

  });
    
}



module.exports=getQuotes;


// '&cx='+ keys.id + '&q=' + title +




