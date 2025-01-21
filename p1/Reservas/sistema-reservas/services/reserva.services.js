const ReservaRepository = require('../repositories/reserva.repository');

class ReservaService {
  async obtenerTodas() {
    return await ReservaRepository.obtenerTodas();
  }

  async crear(reserva) {
    return await ReservaRepository.crear(reserva);
  }

  async obtenerPorId(id) {
    return await ReservaRepository.obtenerPorId(id);
  }

  async actualizar(id, datos) {
    return await ReservaRepository.actualizar(id, datos);
  }

  async eliminar(id) {
    return await ReservaRepository.eliminar(id);
  }
}

module.exports = new ReservaService();
