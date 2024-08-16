const router = require('express').Router();
const userRoutes = require('./userRoutes');
const transactionsRoutes = require('./transactionsRoutes');
const testRoute = require('../testRoute');


router.use('/users', userRoutes);
router.use('/transactions', transactionsRoutes);
router.use('/test', testRoute);

module.exports = router;