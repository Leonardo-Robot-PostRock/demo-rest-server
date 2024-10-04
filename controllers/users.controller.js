const { response, request } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersGet = (req = request, res = response) => {
    const { q, name = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        name,
        apikey
    });
};

const usersPost = async (req, res = response) => {

    const { name, email, password, role } = req.body;

    const user = new User({ name, email, password, role });

    const salt = bcrypt.genSaltSync();

    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({
        user
    })
}

const usersPut = async (req, res = response) => {
    const { id } = req.params;

    const { password, google, email, ...rest } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();

        rest.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, rest);

    res.json({
        user
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - ',
        user
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}