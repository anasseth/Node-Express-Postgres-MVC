module.exports = app => {
    const movieController = require("../Controller/movie.controller.js");
    var router = require("express").Router();

    router.get('/', (req, res) => {
        movieController.getAllMovies().then(data => res.json(data));
    });
    router.post('/', (req, res) => {
        movieController.createMovie(req.body).then(data => res.json(data));
    });
    router.put('/', (req, res) => {
        movieController.updateMovie(req.body).then(data => res.json(data));
    });
    router.delete('/:id', (req, res) => {
        movieController.deleteMovie(req.params.id).then(data => res.json(data));
    });

    app.use('/api/movie', router);
};