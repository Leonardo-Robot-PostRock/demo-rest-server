const Role = require('../models/role');

const isRoleValid = (async (role = '') => {
    const roleExists = await Role.findOne({ role });
    console.log('Resultado: ', roleExists)
    if (!roleExists) {
        throw new Error(`The ${role} is not in the database`)
    }
})

module.exports = {
    isRoleValid
}