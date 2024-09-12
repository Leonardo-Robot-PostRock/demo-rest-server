const { response } = require('express');

const usersGet = (req, res) => {
    res.json({
        msg: 'get API - controller',
    });
};

module.exports = {
    usersGet
}