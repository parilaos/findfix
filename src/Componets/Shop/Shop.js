import React from 'react';

const shop = ( props ) => (
    <div className="card">
         <div className="card-body">
         <h5 className="card-title"> {props.name} </h5>
         <p className="card-text">{props.address}</p>
        </div>
    </div>
);

export default shop;