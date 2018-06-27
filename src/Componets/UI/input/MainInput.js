import React from 'react';

const mainInput = (props) => {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Περιοχή ή Τ.Κ." aria-describedby="basic-addon2"
            id={props.id}  
            onChange={props.changed}
            placeholder={props.placeholder} />
            <div className="input-group-append">
                <button className="btn btn-findfix" type="button">Επόμενο</button>
            </div>
        </div>
    );
}

export default mainInput;