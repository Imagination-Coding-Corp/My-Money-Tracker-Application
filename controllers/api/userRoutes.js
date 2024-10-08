const router = require('express').Router();
const {User, Transactions} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { user_name:
            req.body.user_name}});

    if(!userData) {
        res
        .status(400)
        .json({ message: 'You entered an incorrect username or password, check again'});
        return;
    }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'You are now logged in'});
    });
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/logout', (req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/', async(req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        if(!userData) {
            res.status(404).json({message: 'No user with this info exists'});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;