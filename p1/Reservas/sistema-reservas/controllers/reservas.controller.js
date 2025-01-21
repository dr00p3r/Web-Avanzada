const ReservaService = require('../services/reserva.services');

class ReservaController {
  async obtenerTodas(req, res) {
    const reservas = await ReservaService.obtenerTodas();
    res.json(reservas);
  }

  async crear(req, res) {
    const nuevaReserva = req.body;
    const id = await ReservaService.crear(nuevaReserva);
    res.status(201).json({ id, ...nuevaReserva });
  }
  
  async obtenerPorId(req, res) {
    const reserva = await ReservaService.obtenerPorId(req.params.id);
    if (!reserva) {
      return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    }
    res.json(reserva);
  }

  async actualizar(req, res) {
    await ReservaService.actualizar(req.params.id, req.body);
    res.json({ mensaje: 'Reserva actualizada' });
  }

  async eliminar(req, res) {
    await ReservaService.eliminar(req.params.id);
    res.json({ mensaje: 'Reserva eliminada' });
  }
}

module.exports = new ReservaController();
