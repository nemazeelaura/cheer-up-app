const express = require('express');
const router = express.Router();
//parses info from post
const bodyParser = require('body-parser');
//connect to database models
let db = require('../models');
//manipulates post methods
const methodOverride = require('method-override');
const passport = require('passport');
const usersController = require('../controllers/users');
let quoteController = require('../controllers/quotes');



function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/');
}

router.get('/api', function(req, res){
      db.Quote.find({}, function(err, quote){
        console.log(quote);
            res.json(quote);
      }
    ); 
});

router.route('/api/quotes')
  .get(quoteController.getQuoteOfDay)
  .post(quoteController.createQuoteOfDay)

router.route('/api/quotes/:id').delete(quoteController.deleteQuote)   

// router.route('/api/quotes/edit').save(quoteController.getQuoteId)




router.route('/')
  .get(usersController.home)


router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route('/logout')
  .get(usersController.getLogout)

router.route('/user')
  .get(authenticatedUser, usersController.userProfile)



module.exports = router;
