// Require the Mongose Module
const mongoose = require('../config/mongoose');

// Create your Mongoose Schemas
var GenericSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"], minlength: [3, "Author must contain 3 letters"]},
    description: { type: String, required: [true, "Description is required"], minlength: [3, "A description must contain 3 letters"]},
}, {timestamps: true });

// We are setting this Schema in our Models as 'Quote'
mongoose.model('Generic', GenericSchema);

// We are retrieving this Schema from our Models, named 'Quote'
module.exports = mongoose.model('Generic');