const Generic = require('../controllers/GenericController')
var path = require('path');

module.exports = function(app) {
    app.get('/stuff', function(req, res) {
        Generic.index(req, res);
    })

    app.post('/new', function(req, res) {
        Generic.create(req, res);
    })

    app.get('/show/:id', function(req, res) {
        Generic.show(req, res);
    })

    app.put('/edit/:id', function(req, res) {
        Generic.update(req,res);
    })

    app.delete('/delete/:id', function(req, res) {
        Generic.delete(req, res)
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}