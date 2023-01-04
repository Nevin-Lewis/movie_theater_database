const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connections');


/** Adds a model for movies */
class Movies extends Model {}

Movies.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.INTEGER,
        references: {
          mode: 'genres',
          key: 'id',
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      run_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        isNumeric: true,

      },
      reviews: {
        type: DataTypes.INTEGER,
        references: {
          model: 'reviews',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'movies',
    },

);

module.exports = Movies;
