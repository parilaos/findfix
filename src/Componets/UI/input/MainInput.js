import React from 'react';

const mainInput = (props) => {
    return (
        <div>
            <p className="lead">{props.text}</p>
                <input type="text" className="form-control" id={props.id}  
                 onChange={props.changed}
                 placeholder={props.placeholder} />
        </div>
    );
}

export default mainInput;