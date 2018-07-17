import React from 'react';
import Rating from '../UI/Rating/Rating';

const shop = ( props ) => (
    <div className="ff-card">
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
                <button className="btn-service"  data-toggle="collapse" data-target={"#collapse"+props.id} >θέλω επισκευή</button>
            </div> 
        </div>
        <div className="collapse" id={"collapse"+props.id}>
            <div className="card card-body">
                <button type="button" className="btn btn-outline-primary btn-lg btn-block">Παραλαβή απο το χώρο μου</button>
                <button type="button" className="btn btn-outline-primary btn-lg btn-block">Επισκευή στον χώρο μου</button>
                <button type="button" className="btn btn-outline-primary btn-lg btn-block">Επίσκεψη στο κατάστημα</button>
                <div class="d-flex justify-content-end" style={{marginTop : "20px"}}>Περισσότερες πληροφορίες...</div>
            </div>
        </div>
       
    </div>
);

export default shop;