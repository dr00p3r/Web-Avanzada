const express = require('express');

const RolController = require("../controllers/rol.controller");

const router = express.Router();

router.get('/', RolController.obtenerTodos);
router.post('/', RolController.crear);

module.exports = router;
