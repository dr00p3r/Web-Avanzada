require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const usuarioRouter = require('./routes/usuario.routes');
const rolRouter = require('./routes/rol.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/usuarios', usuarioRouter);
app.use('/api/roles', rolRouter);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
