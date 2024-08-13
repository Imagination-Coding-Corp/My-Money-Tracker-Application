const router = require('express').Router();

router.get('/main', (req, res) => {
    res.json('Hello Folks');
});