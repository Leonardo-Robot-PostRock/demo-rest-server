const Role = require('../models/role');
const User = require('../models/user');

const isRoleValid = (async (role = '') => {
    const roleExists = await Role.findOne({ role });
    console.log('Resultado: ', roleExists)
    if (!roleExists) {
        throw new Error(`The ${role} is not in the database`)
    }
})

const checkEmailExists = async (email = '') => {
    const emailExists = await User.findOne({ email });

    if (emailExists) {
        throw new Error(`The email: ${email} already exists.`)
    }
}

module.exports = {
    isRoleValid,
    checkEmailExists
}