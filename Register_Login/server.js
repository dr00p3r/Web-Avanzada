// Levantamos el servidor.
const express = require('express');
const DB = require('./config.js');
const {login, register} = require('./controllers/authController.js');
const app = express();

const port = 3000;

async function connect_db() {
    await DB();
}

connect_db();

app.use(express.json());

app.listen(port, ()=>{
    console.log('Serv Levantado.');
});

app.get("/", (req, res)=>{
    res.send('Serv Levantado.');
});

app.post(`/login`, login);

app.post(`/register`, register);