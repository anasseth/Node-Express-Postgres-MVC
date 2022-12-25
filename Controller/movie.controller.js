const MovieService = require('../Service/movie.service');
const logger = require('../Logger/api.logger');

class MovieController {
    async getAllMovies() {
        logger.info('\n Controller: getAllMovies \n')
        return await MovieService.getAllMovies();
    }
    async createMovie(movie) {
        logger.info('\n Controller: createMovie \n', movie);
        return await MovieService.createMovie(movie);
    }
    async updateMovie(movie) {
        logger.info('\n Controller: updateMovie \n', movie);
        return await MovieService.updateMovie(movie);
    }
    async deleteMovie(movieId) {
        logger.info('\n Controller: deleteMovie \n', movieId);
        return await MovieService.deleteMovie(movieId);
    }
}
module.exports = new MovieController();