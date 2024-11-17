const AXIOS = require('axios');
import API_FORM from './form';
import e from 'express';
import {txtInput, dateInput, passwordInput} from './inputs';

export default function frmRegister() {
    actualDate = new Date();
    
    const register = async (e) => {
        e.preventDefault(); 
        try {
            const response = await AXIOS.post(
            'https://web-avanzada-1.onrender.com/register',
            formData
            );
        } 
        catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    return (
        <API_FORM data={{
            onSubmit: register(e),
            msg: 'Registrar'
        }}>
            <txtInput name={'name'} label={'Nombre'} value={formData.name}></txtInput>
            <txtInput name={'username'} label={'Usuario'} value={formData.username}></txtInput>
            <passwordInput name={'password'} label={'Contraseña'} value={formData.password}></passwordInput>
            <dateInput name={'date'} label={'Fecha de nacimiento'} value={formData.bornDate}></dateInput>
        </API_FORM>
    );
}
