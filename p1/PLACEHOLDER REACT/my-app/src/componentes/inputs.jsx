import React from 'react';

function TxtInput({ name, label, maxlength = -1, onChange, value }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input 
                type="text"
                id={name} 
                name={name}
                maxLength={maxlength}
                className="form-control" 
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

function PasswordInput({ name, label, maxlength = -1, onChange, value}) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type="password"
                id={name}
                name={name}
                maxLength={maxlength}
                className="form-control"
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

function DateInput({ name, label, max, onChange, value}) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type="date"
                id={name}
                name={name}
                max={max}
                className="form-control"
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default {TxtInput, PasswordInput, DateInput};