const Movie = require('../controllers/GenericController')
var path = require('path');

module.exports = function(app) {
    app.get('/stuff', function(req, res) {
        Movie.index(req, res);
    })

    app.post('/new', function(req, res) {
        Movie.create(req, res);
    })

    app.get('/show/:id', function(req, res) {
        Movie.show(req, res);
    })

    app.put('/edit/:id', function(req, res) {
        Movie.update(req,res);
    })

    app.delete('/delete/:id', function(req, res) {
        Movie.delete(req, res);
    })

    app.post('/newreview/', function(req, res) {
        console.log("Do i get to create review")
        Movie.Rcreate(req, res);
    })

    app.post('/addReview/:id', function(req, res) {
        console.log("This is a create review only, no new movie");
        Movie.Screate(req, res)
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}