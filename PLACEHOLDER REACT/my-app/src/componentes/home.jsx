import {React, useEffect, useState} from 'react';
import FrmLogin from './login';
import FrmRegister from './reg_form';
import { BrowserRouter as Router, Route, Routes, useNavigate  } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function Home(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomeActions/>} />
                <Route path="/register" element={<FrmRegister />} />
                <Route path="/login" element={<FrmLogin />} />
            </Routes>
        </Router>
    );
}

async function checkLoginStatus() {
    try {
        const response = await axios.get(`${BASE_URL}${process.env.REACT_APP_TOKEN_CHECK_ENDPOINT}`, { withCredentials: true });
        console.log(response);
        return response.data.token ? true : false;
    } catch (error) {
        console.error(error);
        return false;
    }
}


function HomeActions(){

    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.post(
                'https://web-avanzada-1.onrender.com/logout',
                {},
                { withCredentials: true }
            );
            setIsLoggedIn(false);
            navigate('/')
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(''); 
    const [isLoading, setIsLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const loggedIn = await checkLoginStatus();
                setIsLoggedIn(loggedIn);
                if (loggedIn) {
                    const response = await axios.get(
                        `${BASE_URL}${process.env.REACT_APP_USER_INFO_ENDPOINT}`,
                        { withCredentials: true }
                    );
                    setUsername(response.data.username);
                }
            } catch (error) {
                console.error('Error al obtener datos del usuario:', error);
            } finally {
                setIsLoading(false); // Finaliza la carga
            }
        };

        fetchUserData();
    }, []);

    if (isLoading) {
        return <div className="text-center mt-5">Cargando...</div>;
    }

    if(!isLoggedIn){
        return(
            <div className="container text-center mt-5">
                <div className="mt-4">
                    <div className="mb-3">
                        <button onClick={() => navigate('/register')}
                            className="btn btn-primary btn-lg"> Registrarse </button>
                    </div>
                    <div className="mb-3">
                        <button onClick={() => navigate('/login')} 
                            className="btn btn-secondary btn-lg"> Iniciar Sesión </button>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="container text-center mt-5">
                <div className="mt-4">
                    <div className="mb-3">
                        <h1> Hola, {username} </h1>
                    </div>
                    <div className="mb-3">
                        <button onClick={() => logout()} 
                            className="btn btn-secondary btn-lg"> Cerrar Sesión </button>
                    </div>
                </div>
            </div>
        );
    }


}

