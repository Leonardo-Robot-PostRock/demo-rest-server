const express = require('express');
var cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usersPath = '/api/users';

		//Middlewares
		this.middlewares();

		//Rutas de mi aplicación
		this.routes();
	}

	routes() {
		this.app.use(this.usersPath, require('../routes/user.routes'))
	}

	middlewares() {
		//CORS
		this.app.use(cors());

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
