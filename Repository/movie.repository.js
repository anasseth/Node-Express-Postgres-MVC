const { connect } = require('../Config/db.config');
const logger = require('../Logger/api.logger');

class MovieRepository {
    db = {};
    constructor() {
        this.db = connect();
    }

    async getAllMovies() {
        try {
            const controllerName = 'getAllMovies';
            // Getting the Mutation Script For Specific Controller Name
            const params = await this.db.mutations.findOne({ where: { controller_name: controllerName } });
            let columnSpecObject = JSON.parse(JSON.parse(params.dataValues.mutation_script));
            Object.keys(columnSpecObject).forEach(key => {
                if (columnSpecObject[key] === false) {
                    delete columnSpecObject[key];
                    return;
                }
            }
            );
            const columnNames = Object.keys(columnSpecObject).join(',')
            // Exceuting Main Get Logic
            const movies = await this.db.sequelize.query(`SELECT ${columnNames} FROM movies`);
            return movies;

        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async createMovie(movie) {
        let data = {};
        try {
            let controllerName = 'createMovie';
            // Getting the Mutation Script For Specific Controller Name
            const params = await this.db.mutations.findOne({ where: { controller_name: controllerName } });
            let columnSpecObject = JSON.parse(JSON.parse(params.dataValues.mutation_script));
            let propertyNamesArray = Object.keys(columnSpecObject);
            // Exceuting Main Create Logic
            for (let index = 0; index < propertyNamesArray.length; index++) {
                if (
                    columnSpecObject[propertyNamesArray[index]] == true
                    &&
                    (!movie[propertyNamesArray[index]] || movie[propertyNamesArray[index]] == "")
                ) {
                    return `Error ! ${propertyNamesArray[index]} is missing. Please provide a valid value`
                }
            }
            movie.createdate = new Date().toISOString();
            data = await this.db.movies.create(movie);
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        }
        return data;
    }

    async updateMovie(movie) {
        let data = {};
        try {
            let controllerName = 'updateMovie';
            // Getting the Mutation Script For Specific Controller Name
            const params = await this.db.mutations.findOne({ where: { controller_name: controllerName } });
            let columnSpecObject = JSON.parse(JSON.parse(params.dataValues.mutation_script));
            let propertyNamesArray = Object.keys(columnSpecObject);
            // Exceuting Main Update Logic
            for (let index = 0; index < propertyNamesArray.length; index++) {
                if (
                    columnSpecObject[propertyNamesArray[index]] == true
                    &&
                    (!movie[propertyNamesArray[index]] || movie[propertyNamesArray[index]] == "")
                ) {
                    console
                    console.log("Movie Missing Property : ", movie[propertyNamesArray[index]])
                    return `Error ! ${propertyNamesArray[index]} property is missing. Please provide a valid value`
                }
            }
            movie.updateddate = new Date().toISOString();
            data = await this.db.movies.update({ ...movie }, {
                where: {
                    id: movie.id
                }
            });
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        }
        return "Movie Updated Successfully !";
    }

    async deleteMovie(movieId) {
        let data = {};
        try {
            // Excecuting Main Delete Logic
            data = await this.db.movies.destroy({
                where: {
                    id: movieId
                }
            });
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        }
        return "Movie Deleted Successfully !";
    }

    async deleteMovieSpecificProperty(movieId) {
        let data = {};
        try {
            let controllerName = 'deleteMovieSpecificProperty';
            // Getting the Mutation Script For Specific Controller Name
            const params = await this.db.mutations.findOne({ where: { controller_name: controllerName } });
            let deleteSpecObject = JSON.parse(JSON.parse(params.dataValues.mutation_script));
            // Excecuting Main Delete Logic
            data = await this.db.movies.destroy({
                where: {
                    id: movieId
                }
            });
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        }
        return data;
    }

}

module.exports = new MovieRepository();