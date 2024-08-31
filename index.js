const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
const cors = require('cors');
// Para cargar variables de entorno desde un archivo .env
require('dotenv').config();
const port = process.env.PORT

// Middleware para utilizar las rutas
app.use(cors());

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Middleware para analizar el cuerpo de las solicitudes URL-encoded
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});