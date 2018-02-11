const expect = require('chai').expect;
const request = require('request');
const keys = require('../env.js');
const Quote = require('../models/quote');



describe('Server', function () {
    it('will pass when all is good to go', function () {
        expect(true).to.be.true;
    });
});



// want to test external api

// // will get random quote of the day
// function getQuoteOfDay(req, res){
//    request('http://quotes.rest/quote/random.json?api_key=' + keys.key, function (error, response, body) {
//     // call back
//     let info = JSON.parse(body);
//     res.send(info);
//  });
// }