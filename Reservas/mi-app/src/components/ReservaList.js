import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';//permite crear enlaces de navegacion de la interfaza
import axios from 'axios';//Para hacer solicitudes HTTP la backend

const API_URL = '/api/reservas';//define el URL para interactuar con el API reservas

function ReservaList(){
    //reservas almacenas la lista de reservas obtenidas de la api-
    //setReservas para actualizar el estado
    const[reservas, setReservas] = useState([]);

//usese efect: 
    useEffect( ()=>{
        axios.get(API_URL).then((response) => {
            setReservas(response.data)
        }
        );
    }, []);

    //eliminar rezserva
    const deleteReserva = (id) =>{
        axios.delete(`${API_URL}/${id}`).then( ()=>{
            setReservas(reservas.filter((reserva)=> reserva.id !==id));
        });  
    };


        return(
        <div>
            <h2>Lista Reservas</h2>
            <Link to ="/nueva"> Crear nueva reserva</Link>
            <ul>
                { reservas.map((reserva)=>(
                    <li key={reserva.id_reserva}>
                        {reserva.nombre_cliente}- {reserva.fecha}-{reserva.hora}

                        <Link to={`/editar/${reserva.id_reserva}`}>Editar</Link>
                        <button onClick={()=>deleteReserva(reserva.id_reserva)}>Eliminar</button>
                    </li>
                ))

                }

            </ul>

        </div>);        
};

export default ReservaList;
