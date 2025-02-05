import React, { useState } from 'react';
import API_FORM from './form';
import Inputs from './inputs.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FrmRegister() {
    const actualDate = new Date();
    const formattedDate = actualDate.toISOString().split('T')[0];
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        bornDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const register = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post(
            'https://web-avanzada-1.onrender.com/register',
            formData
            );
            useNavigate('/');
        } 
        catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    return (
        <API_FORM data={{
            onSubmit: (e) => register(e),
            msg: 'Registrar'
        }}>
            <Inputs.TxtInput name={'name'} label={'Nombre'} onChange={handleChange} value={formData.name}/>
            <Inputs.TxtInput name={'username'} label={'Usuario'} onChange={handleChange} value={formData.username}/>
            <Inputs.PasswordInput name={'password'} label={'Contraseña'} onChange={handleChange} value={formData.password}/>
            <Inputs.DateInput name={'bornDate'} label={'Fecha de nacimiento'} max={formattedDate} onChange={handleChange} value={formData.bornDate}/>
        </API_FORM>
    );
}
