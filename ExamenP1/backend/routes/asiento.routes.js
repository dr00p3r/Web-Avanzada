const express = require('express');

const AsientoController = require("../controllers/asiento.controller");

const router = express.Router(); 

router.get('/', AsientoController.obtenerTodos);
router.post('/reservar/', AsientoController.reservar);
router.post('/liberar/', AsientoController.liberar);

router.post('/', AsientoController.crear);
router.get('/:id', AsientoController.obtenerPorId);
router.put('/:id', AsientoController.actualizar);
router.delete('/:id', AsientoController.eliminar);


module.exports = router;
