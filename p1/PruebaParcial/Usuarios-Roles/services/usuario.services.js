const UsuarioRepository = require('../repositories/usuario.repository');

class UsuarioService {
    async obtenerTodos() {
        return await UsuarioRepository.obtenerTodos();
    }

    async crear(Usuario) {
        return await UsuarioRepository.crear(Usuario);
    }

    async obtenerPorId(id) {
        return await UsuarioRepository.obtenerPorId(id);
    }

    async actualizar(id, datos) {
        return await UsuarioRepository.actualizar(id, datos);
    }

    async eliminar(id) {
        return await UsuarioRepository.eliminar(id);
    }
}

module.exports = new UsuarioService();
