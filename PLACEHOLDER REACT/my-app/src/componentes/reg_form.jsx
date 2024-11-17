import API_FORM from './form';
import Inputs from './inputs.jsx';
import axios from 'axios';

export default function FrmRegister() {
    let actualDate = new Date();
    
    const register = async (e) => {
        e.preventDefault(); 

        let formData = new FormData(document.getElementById("frmSign"));

        try {
            const response = await axios.post(
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
            onSubmit: (e) => register(e),
            msg: 'Registrar'
        }}>
            <Inputs.TxtInput name={'name'} label={'Nombre'}/>
            <Inputs.TxtInput name={'username'} label={'Usuario'}/>
            <Inputs.PasswordInput name={'password'} label={'Contraseña'}/>
            <Inputs.DateInput name={'date'} label={'Fecha de nacimiento'} max={actualDate}/>
        </API_FORM>
    );
}
