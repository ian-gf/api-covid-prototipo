const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', 3000)
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use(require('./routes/rutas'));
app.use(require('./routes/admin'));

//Empezando el servidor
app.listen(app.get('port'));
console.log("El servidor está corriendo!");