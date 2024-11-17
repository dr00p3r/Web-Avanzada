const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const register = async (req, res) => {
    console.log(req.body);
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

        const isMatch = await bcrypt.compare(password, USER.password);
        if (!isMatch) return res.status(400).json({ error: "Contraseña incorrecta" });

        const token = jwt.sign({ id: user._id , username: user.username}, 
            process.env.JWT_SECRET, { expiresIn: '3h' });
        
        res.status(200).json({ token, message: "Inicio de sesión exitoso" });
    } catch (err) {
        res.status(500).json({ error: "Error del servidor" });
    }
};

module.exports = { register, login };
