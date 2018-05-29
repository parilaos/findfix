import React from 'react';


const input = ( props ) => {
    let inputElement = null;

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className="form-control"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className="form-control"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className="form-control"
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className="form-control"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
    let labelElement = null;
    if(!props.label === null) {
       labelElement = <label>{props.label}</label>
    }
    return (
        <div className="form-group"> 
            {labelElement}   
            {inputElement}
        </div>
    );

};

export default input;