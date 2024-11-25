const UsuarioService = require('../services/usuario.services');

class UsuarioController {
    async obtenerTodos(req, res) {
        const Usuarios = await UsuarioService.obtenerTodos();
        res.json(Usuarios);
    }

    async crear(req, res) {
        const nuevoUsuario = req.body;
        const id = await UsuarioService.crear(nuevoUsuario);
        res.status(201).json({ id, ...nuevoUsuario });
    }
    
    async obtenerPorId(req, res) {
        const usuario = await UsuarioService.obtenerPorId(req.params.id);
        if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.json(Usuario);
    }

    async actualizar(req, res) {
        await UsuarioService.actualizar(req.params.id, req.body);
        res.json({ mensaje: 'Usuario actualizado' });
    }

    async eliminar(req, res) {
        await UsuarioService.eliminar(req.params.id);
        res.json({ mensaje: 'Usuario eliminado' });
    }
}

module.exports = new UsuarioController();
