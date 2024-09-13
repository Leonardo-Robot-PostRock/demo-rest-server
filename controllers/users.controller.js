const { response, request } = require('express');
const User = require('../models/user');

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
    const body = req.body;

    const user = new User(body);

    await user.save();

    res.json({
        user
    })
}

const usersPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'put API - controller',
        id
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}