import React, { useState } from 'react';
import API_FORM from './form';
import Inputs from './inputs.jsx';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

export default function FrmLogin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const login = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post(
            'https://web-avanzada-1.onrender.com/login',
            formData,  { withCredentials: true }
            );
            if (response.status == 200){
                navigate('/');
            }
        } 
        catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.error || 'Error al iniciar sesión');
            } else {
                console.error(error);
                setErrorMessage('Error de conexión con el servidor');
            }
        }
    };

    return (
        <API_FORM data={{
            onSubmit: (e) => login(e),
            msg: 'Iniciar Sesión'
        }}>
            <Inputs.TxtInput name={'username'} label={'Usuario'} onChange={handleChange} value={formData.username}/>
            <Inputs.PasswordInput name={'password'} label={'Contraseña'} onChange={handleChange} value={formData.password}/>
            {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
        </API_FORM>
    );
}
