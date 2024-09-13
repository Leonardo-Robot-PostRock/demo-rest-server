const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usersPath = '/api/users';

		//Conectar a base de datos
		this.connectToDB();

		//Middlewares
		this.middlewares();

		//Rutas de mi aplicación
		this.routes();
	}

	async connectToDB() {
		await dbConnection();
	}

	routes() {
		this.app.use(this.usersPath, require('../routes/users.routes'))
	}

	middlewares() {
		//CORS
		this.app.use(cors());

		//Lectura y parseo del body
		this.app.use(express.json())

		//Directorio público
		this.app.use(express.static('public'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Servidor corriendo en puerto', this.port);
		});
	}
}

module.exports = Server;
