var mongoose = require('mongoose');
// Connects Mongoose to MongoDB
mongoose.connect('mongodb://localhost/BeltDB');
mongoose.Promise = global.Promise;

module.exports = mongoose;