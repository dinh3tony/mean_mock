// Require the Mongose Module
const mongoose = require('../config/mongoose');

// Create your Mongoose Schemas
var ReviewSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"], minlength: [3, "Name must contain 3 letters"]},
    rating: {type: String, required: true},
    review: { type: String, required: [true, "Review is required"], minlength: [3, "A review must contain 3 letters"]},
}, {timestamps: true});

var MovieSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"], minlength: [3, "Title must contain 3 letters"]},
    reviews: [ReviewSchema]
}, {timestamps: true });

// We are setting this Schema in our Models as 'Quote'
mongoose.model('Review', ReviewSchema);
mongoose.model('Movie', MovieSchema);

// We are retrieving this Schema from our Models, named 'Quote'
module.exports = mongoose.model('Movie');