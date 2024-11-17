import FrmLogin from './login';
import FrmRegister from './reg_form';
import { BrowserRouter as Router, Route, Routes, useNavigate  } from 'react-router-dom';
import axios from 'axios';

export default function Home(){
    const userToken = axios.get(process.env.COOKIE_ROUTE);
    console.log(userToken);

    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomeActions data={
                    {
                        logIn: false,
                        username: 'guest'
                    }}/>} />
                <Route path="/register" element={<FrmRegister />} />
                <Route path="/login" element={<FrmLogin />} />
            </Routes>
        </Router>
    );
}

function HomeActions({data}){
    const navigate = useNavigate();
    if(data.logIn){
        return(
            <h1 className="container text-center mt-5">HOLIII {data.username}!</h1>
        );
    }else{
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

}

