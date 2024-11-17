import FrmLogin from './login';
import FrmRegister from './reg_form';
import { BrowserRouter as Router, Route, Routes, useNavigate  } from 'react-router-dom';
import axios from 'axios';

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

async function HomeActions(){
    const userToken = await axios.get(process.env.COOKIE_ROUTE);
    console.log(userToken);

    const navigate = useNavigate();

    return(
        <div className="container text-center mt-5">
            <h1>HOLIII</h1>
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
            <div id='frmContainer'></div>
        </div>
    );


}

