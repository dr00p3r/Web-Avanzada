// Levantamos el servidor.
const express = require('express');
const cookieParser = require('cookie-parser');
const DB = require('./config.js');
const {login, register, verifyToken} = require('./controllers/authController.js');
const app = express();

app.use(cookieParser());

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

app.get('/get-token', verifyToken, (req, res) => {
    const token = req.cookies.userToken;
    if (!token) {
        return res.status(404).json({ error: "Token no encontrado" });
    }
    res.status(200).json({ token });
});