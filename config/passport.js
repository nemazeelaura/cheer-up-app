var LocalStrategy   = require('passport-local').Strategy;
 var User            = require('../models/user');

 module.exports = function(passport) {

  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
        callback(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
     usernameField : 'email',
     passwordField : 'password',
     passReqToCallback : true
  }, function(req, email, password, callback) {
    // Find a user with this e-mail
    User.findOne({ 'local.email' :  email }, function(err, user) {
      if (err) return callback(err);

      // If there already is a user with this email
      if (user) {
        return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
      } else {
      // There is no user registered with this email
        // Create a new user
        var newUser            = new User();
        newUser.local.email    = email;
        newUser.local.password = newUser.encrypt(password);

        newUser.save(function(err) {
          if (err) throw err;
          return callback(null, newUser);
        });
      }
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, callback) {
    // Search for a user with this email
    User.findOne({ 'local.email' :  email }, function(err, user) {
      if (err) {
        return callback(err);
      }

      // If no user is found
      if (!user) {
        return callback(null, false, req.flash('loginMessage', 'No user found.'));
      }
      // Wrong password
      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      }

      return callback(null, user);
    });
  }));
};

// const LocalStrategy = require('passport-local').Strategy;
// let User = require('../models/user');// connecting to dabase

// //strategy for the sign up 
// //when the server recieves the sign up params
// //the job of saving the user data into the database, hashing the password
// //and validating the data will be delegated to the strategy allocated for this part of authentication

// module.exports = function(passport) {
// 	 console.log('howdy passport page');

// //when a user signs in serializeUser is called to keep a user logged in serialize their user.id to save it to their session
// passport.serializeUser(function(user, callback) {
//     callback(null, user.id);  //first argument done callback, second what we want serialized
//   });

//  //called when there is a value for passport in the session cookie
//  passport.deserializeUser(function(id, callback) { //user id value stored in cookie
//     User.findById(id, function(err, user) { //search for user using this id 
//         callback(err, user); //then callback the user object will be stored in request passed to all controller method calls
//     });
//   });
    
// passport.use('local-signup', new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallBack: true
//   }, function(req, email, password, callback) {
//     // Find a user with this e-mail
//     //customize the passport new account signup functionality.
//     //checking to see if the user already has an account with the given username.
//     User.findOne({ 'local.email' :  email }, function(err, user) {
//       if (err) return callback(err);

//       // If there already is a user with this email
//       if (user) {
// 				return callback(null, false);
//       } else {
//       // There is no user registered with this email
// 				// Create a new user
// 				var newUser            = new User();
// 				newUser.local.email    = email;
// 				newUser.local.password = newUser.encrypt(password);
//         console.log(newUser);

// 				newUser.save(function(err) {
// 				  if (err) throw err;
// 				  return callback(null, newUser);
// 				});
//       }
//     });
// }));

// passport.use('local-login', new LocalStrategy({
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true
//   }, function(req, email, password, callback) {
//     // Search for a user with this email
//     User.findOne({ 'local.email' :  email}, function(err, user) {
//       if (err) {
//         return callback(err);
//       }

//       // If no user is found
//       if (!user) {
//         return callback(null, false, req.flash('loginMessage', 'User not in system... Signup'));
//       }
//       // Wrong password
//       if (!user.validPassword(password)) {
//         return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
//       }

//       return callback(null, user);
//     });
//   }));
// };