const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Users extends Model {}

Users.init(
    {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[10],
        },
    }
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