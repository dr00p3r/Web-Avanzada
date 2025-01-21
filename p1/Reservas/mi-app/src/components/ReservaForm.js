import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = '/api/reservas';

function ReservaForm() {
  const [reserva, setReserva] = useState({
    tipo: '',
    nombre_cliente: '',
    fecha: '',
    hora: '',
    detalles: '',
  });
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/${id}`).then((response) => setReserva(response.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`${API_URL}/${id}`, reserva).then(() => navigate('/'));
    } else {
      axios.post(API_URL, reserva).then(() => navigate('/'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Editar Reserva' : 'Nueva Reserva'}</h2>
      <input type="text" name="tipo" placeholder="Tipo" value={reserva.tipo} onChange={handleChange} />
      <input type="text" name="nombre_cliente" placeholder="Nombre Cliente" value={reserva.nombre_cliente}
      onChange={handleChange} />
      <input type="date" name="fecha" value={reserva.fecha} onChange={handleChange} />
      <input type="time" name="hora" value={reserva.hora} onChange={handleChange} />
      <textarea name="detalles" placeholder="Detalles" value={reserva.detalles} onChange={handleChange}></textarea>
      <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}

export default ReservaForm;
