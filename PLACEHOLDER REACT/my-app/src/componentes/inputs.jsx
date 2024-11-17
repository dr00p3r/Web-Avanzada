import React from 'react';

function TxtInput({ name, label, maxlength = -1 }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input 
                type="text"
                id={name} 
                name={name}
                maxLength={maxlength} // Propiedad corregida: debería ser `maxLength` con mayúscula
                className="form-control" // form-control aplica el estilo de Bootstrap al input
            />
        </div>
    );
}

function PasswordInput({ name, label, maxlength = -1 }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type="password"
                id={name}
                name={name}
                maxLength={maxlength}
                className="form-control"
            />
        </div>
    );
}

function DateInput({ name, label, max }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type="date"
                id={name}
                name={name}
                max={max}
                className="form-control"
            />
        </div>
    );
}

export default {TxtInput, PasswordInput, DateInput};