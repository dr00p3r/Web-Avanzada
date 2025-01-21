const db = require('../config/db');

class AsientoRepository {
    async obtenerTodos() {
        try {    
            const [asientos] = await db.query('SELECT * FROM asientos');
            return asientos;
        } catch (error) {
            console.error(error);
        }
    }

    async crear(asiento) {
        try {
            const [resultado] = await db.query('INSERT INTO asientos SET ?', asiento);
            return resultado.insertId;
        } catch (error) {
            console.error(error);
        }
    }

    async obtenerPorId(id) {
        try{
            const [asientos] = await db.query('SELECT * FROM asientos WHERE numero = ?', [id]);
            return asientos[0];
        }
        catch(error){
            console.error(error);
        }
    }

    async actualizar(id, datos) {
        try {
            await db.query('UPDATE asientos SET ? WHERE numero = ?', [datos, id]);
        } catch (error) {
            console.error(error);
        }
    }

    async eliminar(id) {
        try {
            await db.query('DELETE FROM asientos WHERE numero = ?', [id]);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new AsientoRepository();