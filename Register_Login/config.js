// Nos conectamos a la base de datos/

const MONGOOSE = require('mongoose');
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.mhpiaao.mongodb.net/API_AWD?retryWrites=true&w=majority&appName=Cluster0`;

const DB = async function connect_db() {
    try{
        return await MONGOOSE.connect(URI);
    }catch(err){
        console.error(`Error en la conexión: ${err}`);
    }
}

module.exports = DB;