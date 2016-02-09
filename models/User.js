var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  fbId: String,
  name: String,
  username: String,
  email: String,
  createDate: Date,
  updateDate: Date,
});

module.exports = mongoose.model('User', UserSchema);
