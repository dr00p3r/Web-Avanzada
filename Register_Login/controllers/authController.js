const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const register = async (req, res) => {
    const { name, username, password, bornDate } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const answer = await User.create({name, username, password: hashedPassword, bornDate});
        res.send(answer);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ error: "El nombre de usuario ya está en uso" });
        }
        res.status(500).json({ error: "Error del servidor" });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Contraseña incorrecta" });

        const token = jwt.sign({ id: user._id , username: user.username}, 
            process.env.JWT_SECRET, { expiresIn: '3h' });

        res.cookie('userToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 3 * 60 * 60 * 1000,
        });
        
        res.status(200).json({message: "Inicio de sesión exitoso" });
    } catch (err) {
        res.status(500).json({ error: "Error del servidor" });
    }
};

const verifyToken = (req, res, next) => {
    const token = req.cookies.userToken;
    console.log(token);
    if (!token) return res.status(403).json({ error: "Acceso denegado" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).json({ error: "Token inválido" });
    }
};

module.exports = { register, login, verifyToken };
