require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const asientoRouter = require('./routes/asiento.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:3001'
}));
// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/asientos', asientoRouter);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
