function API_FORM({children, data}){

    return(
        <form id="frmSign" className="form container mt-5" onSubmit={data.onSubmit}>
            <div className='form-container card p-4 shadow-sm'>
                {children}
                <button className='button-submit btn btn-primary w-100 mt-3'>{data.msg}</button>
            </div>
        </form>
    );
}

export default API_FORM;