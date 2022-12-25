module.exports = (sequelize, DataTypes, Model) => {

    class Mutations extends Model { }
    db = {};

    Mutations.init({
        // Model attributes are defined here
        controller_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mutation_script: {
            type: DataTypes.JSON,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updateddate: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'mutations'
    });

    return Mutations;
}