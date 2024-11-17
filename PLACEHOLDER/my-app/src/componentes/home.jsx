import frmLogin from './login';
import frmRegister from './reg_form';

export default function Home({data}){
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
                        <button onClick={<frmRegister></frmRegister>} className="btn btn-primary btn-lg"> Registrarse </button>
                    </div>
                    <div className="mb-3">
                        <button onClick={<frmLogin></frmLogin>} className="btn btn-secondary btn-lg"> Iniciar Sesión </button>
                    </div>
                </div>
            </div>
        );
    }
}


