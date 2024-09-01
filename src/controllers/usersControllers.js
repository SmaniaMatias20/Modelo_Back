const users = require('../models/usersModels'); // Asegúrate de que esta ruta sea correcta

// Función para listar usuarios
const listUsers = (req, res) => {
    try {
        res.json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
};

// Exportar funciones como un objeto
module.exports = {
    listUsers
};
