const passport = require('passport');


// GET / //render message in views when go to '/signup' up page
function getSignup(request, response, next) {
	response.render('signup.ejs', { message: request.flash('signupMessage') });
}


// POST /from passport.js signup calling method authenticate and telling it to use local-signup
function postSignup(request, response, next) {
let signupStrategy = passport.authenticate('local-signup', {
	  successRedirect : '/',   //if success direct to /
	  failureRedirect : '/signup', //if failure direct to /signup
	  failureFlash : true
	});
  console.log(response);
	return signupStrategy(request, response, next);

}
// GET /login
function getLogin(request, response, next) { 
	response.render('login.ejs', { message: request.flash('loginMessage') });
}

// POST /login 
function postLogin(request, response, next) {
    let loginProperty = passport.authenticate('local-login', {
      successRedirect : '/',
      failureRedirect : '/login',
      failureFlash : true
    });

    return loginProperty(request, response, next);	
}

// GET /logout
function getLogout(request, response, next) {  
	request.logout();
  response.redirect('/');
}

// Restricted page
function userProfile(request, response, next){
  response.render('secret.ejs');
  response.json({secret: "Woooah secret!"});
}
// GET homepage/
function home(request, response, next) {  
  response.render('index.ejs');
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  userProfile: userProfile,
  home: home
}