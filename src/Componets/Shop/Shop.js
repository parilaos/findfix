import React from 'react';
import Rating from '../UI/Rating/Rating';

const shop = ( props ) => (
    <div className="ff-card">
         <div className="ff-card-body">
            <div className="ff-card-title"> 
                <div className="float-left">
                    {props.name} 
                </div>
                <div className="clearfix float-right">
                    <Rating />
                </div>
            </div>
            <div className="ff-card-text">
                <div className="float-left">
                    {props.route}  {props.street_number} <br /> {props.locality} , {props.postal_code}
                </div>
                <div className="clearfix float-right">
                    <button className="btn-service">θέλω επισκευή</button>
                </div>
            </div>
        </div>
    </div>
);

export default shop;