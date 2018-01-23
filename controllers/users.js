const passport = require('passport');


// GET / //render message in views when go to '/signup' up page
function getSignup(request, response) {
	response.render('signup.ejs', { message: request.flash('signupMessage') });
}


// POST /from passport.js signup calling method authenticate and telling it to use local-signup
function postSignup(request, response, next) {
let signupStrategy = passport.authenticate('local-signup', {
	  successRedirect : '/',   //if success direct to /
	  failureRedirect : '/signup', //if failure direct to /signup
	  failureFlash : true
	});

	return signupStrategy(request, response, next);
}
// GET /login
function getLogin(request, response, next) { 
	response.render('login.ejs', { message: request.flash('loginMessage') });
}

// POST /login 
function postLogin(request, response, next) {
    var loginProperty = passport.authenticate('local-login', {
      successRedirect : '/',
      failureRedirect : '/login',
      failureFlash : true
    });

    return loginProperty(request, response, next);	
}

// GET /logout
function getLogout(request, response) {  
	request.logout();
  response.redirect('/');
}

// Restricted page
function secret(request, response){
  response.render('secret.ejs');
}

// GET homepage/
function home(req, res) {  
  res.render('index.ejs');
}


module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret,
  home: home
}