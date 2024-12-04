const AsientoService = require('../services/asiento.services');

class AsientoController {
    async obtenerTodos(req, res) {
        const Asientos = await AsientoService.obtenerTodos();
        console.log(Asientos);
        res.json(Asientos);
    }

    async crear(req, res) {
        const nuevoAsiento = req.body;
        const id = await AsientoService.crear(nuevoAsiento);
        res.status(201).json({ id, ...nuevoAsiento });
    }
    
    async obtenerPorId(req, res) {
        const asiento = await AsientoService.obtenerPorId(req.params.id);
        if (!asiento) {
        return res.status(404).json({ mensaje: 'Asiento no encontrado' });
        }
        res.json(asiento);
    }

    async actualizar(req, res) {
        await AsientoService.actualizar(req.params.id, req.body);
        res.json({ mensaje: 'Asiento actualizado' });
    }

    async eliminar(req, res) {
        await AsientoService.eliminar(req.params.id);
        res.json({ mensaje: 'Asiento eliminado' });
    }

    async reservar(req, res) {
        await AsientoService.reservar(req.body);
        res.json({ mensaje: 'Asiento reservado' });
    }

    async liberar(req, res) {
        await AsientoService.liberar(req.body);
        res.json({ mensaje: 'Asiento liberado' });
    }
}

    
module.exports = new AsientoController();
