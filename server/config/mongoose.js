var mongoose = require('mongoose');
// Connects Mongoose to MongoDB
mongoose.connect('mongodb://localhost/AuthorsDB');
mongoose.Promise = global.Promise;

module.exports = mongoose;