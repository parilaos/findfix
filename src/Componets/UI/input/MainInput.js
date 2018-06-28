import React from 'react';
import MediaQuery from 'react-responsive';

const mainInput = (props) => {
    return (
    <div>
        <MediaQuery query="(max-device-width: 1224px)">
            <div className="form-group">
                <input type="text" className="form-control" aria-label="Περιοχή ή Τ.Κ." aria-describedby="basic-addon2"
                id={props.id}  
                onChange={props.changed}
                placeholder={props.placeholder} />
            </div>
                <button className="btn btn-findfix btn-block" type="button">Επόμενο</button>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1224px)">
            <div className="input-group">
                <input type="text" className="form-control" aria-label="Περιοχή ή Τ.Κ." aria-describedby="basic-addon2"
                id={props.id}  
                onChange={props.changed}
                placeholder={props.placeholder} />
                <div className="input-group-append">
                    <button className="btn btn-findfix" type="button">Επόμενο</button>
                </div>
            </div>
        </MediaQuery>
    </div>
    );
}

export default mainInput;