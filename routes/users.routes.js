const { Router } = require('express');
const { usersGet } = require('../controllers/users.controller');

const router = Router();

router.get('/', usersGet);

router.put('/', (req, res) => {
    res.json({
        msg: 'put API',
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'post API',
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'patch API',
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API',
    });
});


module.exports = router;