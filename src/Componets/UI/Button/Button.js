import React from 'react';


const button = (props) => (
    <button
        className="btn btn-lg btn-primary btn-block"
        onClick={props.clicked}>{props.children}</button>
);

export default button;