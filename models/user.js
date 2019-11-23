const mongoose = require('mongoose');

const userobj = {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
};

const UserSchema = mongoose.Schema(userobj);

module.exports = mongoose.model('user', UserSchema);
