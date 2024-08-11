const { Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');
const { types } = require('pg');

class Transaction extends Model {}

Transaction.init(
    {
     id:{
        type: Datatypes.INTEGER,
        allownull: false,
        primarykay: true,
        autoIncrement: true,
        },
    transaction_name: {
        type: Datatypes.STRING,
        allowNull: false
    },
    transaction_description: {
        type: Datatypes.STRING,
        allowNull: false
    },
    transaction_price: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: Datatypes.TIME,
        allowNull: false
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'Transaction',
    }
);

module.exports = Transaction;