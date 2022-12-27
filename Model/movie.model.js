module.exports = (sequelize, DataTypes, Model) => {
    class Movies extends Model { }
    db = {};
    Movies.init({
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        original_title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        original_language: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.STRING,
            allowNull: true
        },
        overview: {
            type: DataTypes.STRING,
            allowNull: true
        },
        video: {
            type: DataTypes.STRING,
            allowNull: true
        },
        popularity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        vote_average: {
            type: DataTypes.STRING,
            allowNull: true
        },
        vote_count: {
            type: DataTypes.STRING,
            allowNull: true
        },
        poster_path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        backdrop_path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        release_date: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updateddate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        createdby: {
            type: DataTypes.STRING,
            allowNull: true
        },
        updatedby: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'movies'
    });
    return Movies;
}