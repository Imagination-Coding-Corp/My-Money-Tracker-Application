const router = require('express').Router();
const apiRoutes = require('./api');
const testRoute = require('./testRoute');

router.use('./api', apiRoutes);

router.use('./', testRoute);

module.exports = router;