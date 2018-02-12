const expect = require('chai').expect;
const request = require('request');
const keys = require('../env.js');
const Quote = require('../models/quote');// reference for model
// mongoose.connect( process.env.MONGOD_URI || 'mongodb://localhost/project2');



describe('Quote', function () {
    describe('Constructor', function () {
        let quote = new Quote({ quote: 'quote', author: 'author'});
    it("should create a new object", function() {   
      expect(quote.quote).to.equal('quote');
    });
    
    it("should have a quote", function () {
    	expect(quote.quote).to.not.be.empty;
    });

    it("should have an author", function () {
    	expect(quote.author).to.not.be.empty;
    });

    });
});

