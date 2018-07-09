import React from 'react';
import Rating from '../UI/Rating/Rating';

const shop = ( props ) => (
    <div className="ff-card">
         {/* <div className="ff-card-body">
            <div className="ff-card-title"> 
                <div className="float-left">
                   
                </div>
                <div className="clearfix float-right">
                    
                </div>
            </div>
            <div className="ff-card-text">
                <div className="float-left">
                    
                </div>
               
            </div>
        </div> */}
        <div className="d-flex flex-row">
            <div className="shop_logo">
                <img src="../img/logo.png" alt="shop logo" height="80"/>
            </div>
            <div className="shop_info">
                <div className="d-flex flex-column">
                    <div className="p-2 shop_title">{props.name}</div>
                    <div className="p-2">  <Rating /> </div>
                    <div className="p-2 shop_address">{props.route} {props.street_number} , {props.locality} , {props.postal_code}  </div>
                </div>  
            </div>
            <div>
                <button className="btn-service">θέλω επισκευή</button>
            </div>
        </div>
    </div>
);

export default shop;