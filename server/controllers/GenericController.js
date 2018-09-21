const mongoose = require('../config/mongoose');

// Create your Mongoose Schemas
var ReviewSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"], minlength: [3, "Nombre must contain 3 letters"]},
    rating: {type: String, required: [true, "Rating is required"]},
    review: { type: String, required: [true, "Review is required"], minlength: [3, "A review must contain 3 letters"]},
}, {timestamps: true});

var MovieSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"], minlength: [3, "Title must contain 3 letters"]},
    reviews: [ReviewSchema]
}, {timestamps: true });

// We are setting this Schema in our Models as 'Quote'
const Review = mongoose.model('Review', ReviewSchema);
const Movie = mongoose.model('Movie', MovieSchema);

// We are retrieving this Schema from our Models, named 'Quote'



module.exports = {
    index: function(req, res) {
        Movie.find({}, function (err, stuff) {
            if(err) {
                console.log("Returned error", err);
                res.json({message:false, error: err});
            }
            else {
                console.log("You successfully hit your API");
                res.json({message: true, data: stuff});
            }
        })
    },

    create: function(req, res) {
        console.log("Data passing", req.body);
        Movie.create(req.body, function(err, stuff) {
            if(err) {
                console.log("There was an error creating", err);
                res.json({message: false, error:err});
            }
            else {
                console.log("You successfully created stuff");
                res.json({message: true, data:stuff});
            }
        })
    },

    show: function(req, res) {
        console.log("Looking for the one stuff", req.params.id);
        Movie.findOne({_id: req.params.id}, function(err, stuff) {
            if(err) {
                console.log("This is the error: ", err);
                res.json({message:false, error:err});
            }
            else {
                console.log("You found your stuff");
                res.json({message: true, data: stuff})
            }
        })
    },

    update: function(req, res) {
        console.log("Trying to update with this data: ", req.params.id);
        Movie.updateOne({_id: req.params.id}, {$set: req.body}, {runValidators: true, context: 'query'}, function(err, stuff) {
            if(err) {
                console.log("We were unable to update the stuff");
                res.json({message:false, error:err});
            }
            else {
                console.log("we were able to update the author");
                res.json({message: true, data: stuff})
            }
        })
    },

    delete: function(req, res) {
        console.log("Trying to delete this stuff", req.params.id);
        Movie.remove({_id: req.params.id}, function(err, stuff) {
            if(err) {
                console.log("You were not able to delete!", err);
                res.json({message:false, error:err});
            }
            else {
                console.log("You deleted the stuff");
                res.json({message:true, data:stuff})
            
            }
        })
    },

    Rindex: function(req, res) {
        Review.find({}, function (err, stuff) {
            if(err) {
                console.log("Returned error for reviews", err);
                res.json({message:false, error: err});
            }
            else {
                console.log("You successfully hit your API for reviews");
                res.json({message: true, data: stuff});
            }
        })
    },

    Rcreate: function(req, res) {
        console.log("Data passing un hurrrr", req.body);
        Review.create(req.body, function(err, stuff) {
            if(err) {
                console.log("There was an error creating for Reviews", err);
                res.json({message: false, error:err});
            }
            else {
                Movie.updateOne({title: req.body.title}, {$push:{reviews:stuff}}, function(err, data){
                    if(err) {
                        console.log("This is an error", err)
                        res.json({message:false, error:err})
                    }
                    else {
                        console.log("let's hope it works");
                        console.log("You successfully created stuff for Reviews");
                        res.json({message: true, data:stuff});
                    }
                })

            }
        })
    },

    Screate: function(req, res) {
        console.log("whats the data going to be for review", req.params.id);
        Review.create(req.body, function(err, stuff) {
            if(err) {
                console.log("There was an error creating for Reviews onlyyyyy", err);
                res.json({message: false, error:err});
            }
            else {
                Movie.updateOne({_id: req.params.id}, {$push: {reviews:stuff}}, function(err, data) {
                    if(err) {
                        console.log("This is an error", err)
                        res.json({message:false, error:err})
                    }
                    else {
                        console.log("let's hope it works");
                        console.log("You successfully created stuff for Reviews");
                        res.json({message: true, data:stuff});
                    }
                })

            }
        })
    }




}