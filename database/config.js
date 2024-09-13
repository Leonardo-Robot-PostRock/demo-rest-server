const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
    } catch (error) {
        throw new Error('Error al iniciar la base de datos: ', error);
    }

    console.log('Base de datos online')
}

module.exports = {
    dbConnection
}