const Role = require('../models/role');
const User = require('../models/user');

const isRoleValid = (async ( role = '' ) => {
    const roleExists = await Role.findOne({ role });

    if (!roleExists) {
        throw new Error(`The ${role} is not in the database`)
    }
})

const checkEmailExists = async ( email = '' ) => {
    const emailExists = await User.findOne({ email });

    if (emailExists) {
        throw new Error(`The email: ${email} already exists.`)
    }
}

const checkUserByIdExists = async ( id ) => {
    const userExists = await User.findById(id);

    if (!userExists) {
        throw new Error(`The id, ${id} doesn't exist`);
    }
}

module.exports = {
    isRoleValid,
    checkEmailExists,
    checkUserByIdExists
}