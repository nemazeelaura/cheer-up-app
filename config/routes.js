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



function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/');
}

// i found this on stack overflow.. path.resolve was getting an error about my path
let path = require('path');

router.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.ejs'));
});

router.get('/api', function(req, res){
      db.Quote.find({}, function(err, quote){
            res.json(quote);
      }
    );
});

<<<<<<< HEAD
router.route('/')
  .get(usersController.home)


=======
>>>>>>> parent of 21787b6... added logo to index.html
router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route('/logout')
  .get(usersController.getLogout)

router.route('/secret')
  .get(authenticatedUser, usersController.secret)



module.exports = router;

