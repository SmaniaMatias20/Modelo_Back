const express = require('express');
const router = express.Router();
const usersRoutes = require('./usersRoutes');
const propertiesRoutes = require('./propertiesRoutes');

router.use('/usuarios', usersRoutes);
router.use('/propiedades', propertiesRoutes);

module.exports = router;