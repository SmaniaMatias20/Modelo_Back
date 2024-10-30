const express = require("express");
const router = express.Router();
const usersControllers = require('../Controllers/usersControllers');

// Ruta para listar todos los usuarios
router.get("/obtenerUsuarios", usersControllers.obtenerUsuarios);


module.exports = router;
