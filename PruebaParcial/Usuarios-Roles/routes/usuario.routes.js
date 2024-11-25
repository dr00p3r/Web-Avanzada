const express = require('express');

const UsuarioController = require("../controllers/usuario.controller");

const router = express.Router(); 

router.get('/', UsuarioController.obtenerTodos);
router.post('/', UsuarioController.crear);
router.get('/:id', UsuarioController.obtenerPorId);
router.put('/:id', UsuarioController.actualizar);
router.delete('/:id', UsuarioController.eliminar);


module.exports = router;
