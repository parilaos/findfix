import React from 'react';

const inputButton = (props) => {
    return (
            <input type="button" className="btn btn-outline-findfix choose" id={props.id}  
            onClickCapture ={props.choice}
            value={props.value} />
        
    );
}

export default inputButton;