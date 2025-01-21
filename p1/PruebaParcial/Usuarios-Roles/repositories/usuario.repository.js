const db = require('../config/db');

class UsuarioRepository {
    async obtenerTodos() {
        try {    
            const [usuarios] = await db.query('SELECT * FROM usuarios');
            return usuarios;
        } catch (error) {
            console.error(error);
        }
    }

    async crear(usuario) {
        try {
            const [resultado] = await db.query('INSERT INTO usuarios SET ?', usuario);
            return resultado.insertId;
        } catch (error) {
            console.error(error);
        }
    }

    async obtenerPorId(id) {
        try{
            const [usuarios] = await db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id]);
            return usuarios[0];
        }
        catch(error){
            console.error(error);
        }
    }

    async actualizar(id, datos) {
        try {
            await db.query('UPDATE usuarios SET ? WHERE id_usuario = ?', [datos, id]);
        } catch (error) {
            console.error(error);
        }
    }

    async eliminar(id) {
        try {
            await db.query('DELETE FROM usuarios WHERE id_usuario = ?', [id]);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new UsuarioRepository();