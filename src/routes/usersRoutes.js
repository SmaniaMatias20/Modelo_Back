const express = require("express");
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

// Ruta para listar todos los usuarios
router.get("/listUsers", usersControllers.listUsers);


module.exports = router;
