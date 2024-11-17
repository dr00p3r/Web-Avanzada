import API_FORM from './form';
import Inputs from './inputs.jsx';
import axios from 'axios';

export default function FrmLogin() {
    
    const login = async (e) => {
        e.preventDefault(); 

        let formData = new FormData(document.getElementById("frmSign"));

        try {
            const response = await axios.post(
            'https://web-avanzada-1.onrender.com/login',
            formData
            );
            console.log(response);
        } 
        catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <API_FORM data={{
            onSubmit: (e) => login(e),
            msg: 'Iniciar Sesión'
        }}>
            <Inputs.TxtInput name={'username'} label={'Usuario'}/>
            <Inputs.PasswordInput name={'password'} label={'Contraseña'}/>
        </API_FORM>
    );
}
