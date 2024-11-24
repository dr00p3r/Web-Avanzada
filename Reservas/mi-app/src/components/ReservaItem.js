import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReservaItem from './ReservaItem';

const API_URL = '/api/reservas';

function ReservaList() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => setReservas(response.data));
  }, []);

  const deleteReserva = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setReservas(reservas.filter((reserva) => reserva.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <Link to="/nueva">Crear nueva reserva</Link>
      <ul>
        {reservas.map((reserva) => (
          <ReservaItem key={reserva.id} reserva={reserva} onDelete={deleteReserva} />
        ))}
      </ul>
    </div>
  );
}

export default ReservaList;
