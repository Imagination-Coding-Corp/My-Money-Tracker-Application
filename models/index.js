const User = require('./user');
const Transactions = require('./transaction');

User.hasMany(Transactions, {
    foreignKey: 'user_id',
});

Transactions.hasOne(User, {
    foreignKey: 'user_id',
});

module.exports = {User, Transactions};