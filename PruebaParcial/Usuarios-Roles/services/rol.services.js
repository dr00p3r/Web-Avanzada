const RolRepository = require('../repositories/rol.repository');

class RolService {
    async obtenerTodos() {
        return await RolRepository.obtenerTodos();
    }

    async crear(Usuario) {
        return await RolRepository.crear(Usuario);
    }

}

module.exports = new RolService();
