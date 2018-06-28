import React from 'react';

const mainInput = (props) => {
    return (
    <div>
        <div className="d-md-none">
            <div className="form-group">
                <input type="text" className="form-control" aria-label="Περιοχή ή Τ.Κ." aria-describedby="basic-addon2"
                id={props.id}  
                onChange={props.changed}
                placeholder={props.placeholder} />
            </div>
                <button className="btn btn-findfix btn-block" type="button">Επόμενο</button>
        </div>
        <div className="d-sm-none d-none d-md-block">
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Περιοχή ή Τ.Κ." aria-describedby="basic-addon2"
                id={props.id}  
                onChange={props.changed}
                placeholder={props.placeholder} />
                <div className="input-group-append">
                    <button className="btn btn-findfix" type="button">Επόμενο</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default mainInput;