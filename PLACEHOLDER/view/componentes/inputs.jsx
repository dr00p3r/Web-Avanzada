export default function txtInput(nombreInput, label, value, pattern='') {
    return (
        <div className="form-group">
        <label htmlFor={nombreInput}>{label}</label>
        <input
            type="text"
            className="form-control"
            id={nombreInput}
            name={nombreInput}
            value={value}
            pattern={pattern}
            required
        />
        </div>
    );
}

export default function passwordInput(nombreInput, label, value, pattern='') {
    return (
        <div className="form-group">
        <label htmlFor={nombreInput}>{label}</label>
        <input
            type="password"
            className="form-control"
            id={nombreInput}
            name={nombreInput}
            value={value}
            pattern={pattern}
            required
        />
        </div>
    );
}


export default function dateInput(nombreInput, label, value, max) {
    return (
        <div className="form-group">
        <label htmlFor={nombreInput}>{label}</label>
        <input
            type="date"
            className="form-control"
            id={nombreInput}
            name={nombreInput}
            value={value}
            max={max}
            required
        />
        </div>
    );
}