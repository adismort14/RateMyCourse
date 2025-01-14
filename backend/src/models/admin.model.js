const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  type:{
    type:Number,
    required: true,
    default: 1
  }
});

const Admin = mongoose.model('Admin', adminSchema, 'admincredentials');

module.exports = Admin;
