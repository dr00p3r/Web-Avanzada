const express = require('express');
const ReservaController = require('../controllers/reservas.controller');
const router = express.Router();

router.get('/', ReservaController.obtenerTodas);
router.post('/', ReservaController.crear); // Debe existir esta ruta
router.get('/:id', ReservaController.obtenerPorId);
router.put('/:id', ReservaController.actualizar);
router.delete('/:id', ReservaController.eliminar);

module.exports = router;
