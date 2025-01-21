// Levantamos el servidor.
const express = require('express');
const cookieParser = require('cookie-parser');
const DB = require('./config.js');
const {login, register, verifyToken, getUserInfo} = require('./controllers/authController.js');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'https://web-avanzada-eight.vercel.app',
    credentials: true
}));

app.use(cookieParser());

const port = 5000;

async function connect_db() {
    await DB();
}

connect_db();

app.use(express.json());

app.listen(port, ()=>{
    console.log('Serv Levantado.');
});

app.get("/", (req, res)=>{
    res.send('Servidor Levantado.');
});

app.post(`/login`, login);

app.post(`/register`, register);

app.get('/get-token', verifyToken, (req, res) => {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(404).json({ error: "Token no encontrado" });
    }
    res.status(200).json({ token });
});

app.post('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
    });
    res.status(200).json({ message: 'Sesión cerrada exitosamente' });
});

app.get('/user-info', verifyToken, getUserInfo);