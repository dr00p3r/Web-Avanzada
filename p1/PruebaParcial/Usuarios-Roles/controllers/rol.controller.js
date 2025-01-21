const RolService = require('../services/rol.services');

class RolController {
    async obtenerTodos(req, res) {
        const Rols = await RolService.obtenerTodos();
        res.json(Rols);
    }

    async crear(req, res) {
        const nuevoRol = req.body;
        const id = await RolService.crear(nuevoRol);
        res.status(201).json({ id, ...nuevoRol });
    }
}

module.exports = new RolController();
