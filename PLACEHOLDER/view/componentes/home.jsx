const AXIOS = require('axios');
import 'bootstrap/dist/css/bootstrap.min.css';


function Home({data}){
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
                        <button onClick='' className="btn btn-primary btn-lg">Registrar</button>
                    </div>
                    <div className="mb-3">
                        <button onClick='' className="btn btn-secondary btn-lg">Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        );
    }
}

let userCookie = await AXIOS.get('/get-cookie', { withCredentials: true });
console.log(userCookie);
ReactDOM.render(<Home logIn = {false} username = {userCookie.username}/>, document.getElementById('root'));


