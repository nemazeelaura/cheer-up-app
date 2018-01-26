const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
// const db = require('mongodb').MongoClient;

// mongoose.connect('mongodb://localhost/project2');// MongoDB, by default, runs on port 27017


let User = mongoose.Schema ({
    local: {
      email : String,
      password : String
    }

});

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User); 