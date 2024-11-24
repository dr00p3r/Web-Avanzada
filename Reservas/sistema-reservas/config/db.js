require('dotenv').config();
const mysql = require('mysql2');

// Crear el pool de conexión a la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Verificar la conexión al inicializar
pool.getConnection((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// Exportar el pool para que pueda ser usado en otras partes de la aplicación
module.exports = pool.promise();