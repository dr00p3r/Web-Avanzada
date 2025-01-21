const db = require('../config/db');

class RolRepository {
    async obtenerTodos() {
        try {    
            const [roles] = await db.query('SELECT * FROM roles');
            return roles;
        } catch (error) {
            console.error(error);
        }
    }

    async crear(Rol) {
        try {
            const [resultado] = await db.query('INSERT INTO roles SET ?', Rol);
            return resultado.insertId;
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = new RolRepository();