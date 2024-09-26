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

    const emailExists = await User.findOne({ email });

    if (emailExists) {
        return res.status(400).json({
            msg: 'El correo especificado ya ha sido registrado'
        })
    }

    const salt = bcrypt.genSaltSync();

    user.password = bcrypt.hashSync(password, salt);

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