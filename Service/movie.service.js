const MovieRepository = require('../Repository/movie.repository');

class MovieService {
    constructor() { }
    async getAllMovies() {
        return await MovieRepository.getAllMovies();
    }
    async createMovie(movie) {
        return await MovieRepository.createMovie(movie);
    }
    async updateMovie(movie) {
        return await MovieRepository.updateMovie(movie);
    }
    async deleteMovie(movieId) {
        return await MovieRepository.deleteMovie(movieId);
    }
}

module.exports = new MovieService();