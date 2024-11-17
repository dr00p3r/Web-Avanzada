const AXIOS = require('axios');
import API_FORM from './form';
import e from 'express';
import {txtInput, dateInput, passwordInput} from './inputs';

export default function frmLogin() {
    actualDate = new Date();
    
    const login = async (e) => {
        e.preventDefault(); 
        try {
            const response = await AXIOS.post(
            'https://web-avanzada-1.onrender.com/login',
            formData
            );
        } 
        catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <API_FORM data={{
            onSubmit: login(e),
            msg: 'Iniciar Sesión'
        }}>
            <txtInput name={'username'} label={'Usuario'} value={formData.username}></txtInput>
            <passwordInput name={'password'} label={'Contraseña'} value={formData.password}></passwordInput>
        </API_FORM>
    );
}
