const AsientoRepository = require('../repositories/asiento.repository');

class AsientoService {
    async obtenerTodos() {
        return await AsientoRepository.obtenerTodos();
    }

    async crear(asiento) {
        return await AsientoRepository.crear(asiento);
    }

    async obtenerPorId(id) {
        return await AsientoRepository.obtenerPorId(id);
    }

    async actualizar(id, datos) {
        return await AsientoRepository.actualizar(id, datos);
    }

    async eliminar(id) {
        return await AsientoRepository.eliminar(id);
    }

    async reservar(datos) {
        const asiento = this.obtenerPorId(datos.numero);
        asiento.disponible = 0;
        asiento.reservadoPor = datos.reservadoPor;
        return await this.actualizar(datos.numero, asiento);
    }

    async liberar(datos) {
        const asiento = this.obtenerPorId(datos.numero);
        asiento.disponible = 1;
        asiento.reservadoPor = null;
        return await this.actualizar(datos.numero, asiento);
    }
}

module.exports = new AsientoService();
