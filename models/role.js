const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, 'Role is mandatory']
    }
})

const role = mongoose.model('Role', RoleSchema);

module.exports = role;