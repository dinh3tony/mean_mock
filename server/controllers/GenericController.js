const Generic = require('../models/models');

module.exports = {
    index: function(req, res) {
        Generic.find({}, function (err, stuff) {
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
        Generic.create(req.body, function(err, stuff) {
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
        Generic.findOne({_id: req.params.id}, function(err, stuff) {
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
        Generic.updateOne({_id: req.params.id}, {$set: req.body}, {runValidators: true, context: 'query'}, function(err, stuff) {
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
        Generic.remove({_id: req.params.id}, function(err, stuff) {
            if(err) {
                console.log("You were not able to delete!", err);
                res.json({message:false, error:err});
            }
            else {
                console.log("You deleted the stuff");
                res.json({message:true, data:stuff})
            
            }
        })
    }
}