import React from 'react';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservaList from './components/ReservaList';
import ReservaForm from './components/ReservaForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Sistema de Reservas</h1>
        <Routes>
          <Route path="/" element={<ReservaList />} />
          <Route path="/nueva" element={<ReservaForm />} />
          <Route path="/editar/:id" element={<ReservaForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
