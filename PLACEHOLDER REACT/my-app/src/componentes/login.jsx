import API_FORM from './form';
import Inputs from './inputs.jsx';
import axios from 'axios';

export default function FrmLogin() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        date: ''
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

        console.log(formData);

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
            onSubmit: login,
            msg: 'Iniciar Sesión'
        }}>
            <Inputs.TxtInput name={'username'} label={'Usuario'} onChange={handleChange} value={formData.username}/>
            <Inputs.PasswordInput name={'password'} label={'Contraseña'} onChange={handleChange} value={formData.password}/>
        </API_FORM>
    );
}
