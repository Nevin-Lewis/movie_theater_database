const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Users extends Model {}

Users.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        undeerscored: true,
        modelName: 'users'
    }

);

module.exports = Users