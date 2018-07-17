import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import Shop from '../../Componets/Shop/Shop';

class Shops extends Component {
  
    render () {

        let shopRowItem = null;
        let singleShopitem = null;
        let shopRow =[];
        let element = null;
        const data = JSON.parse(sessionStorage.getItem('shops')); //τα δεδομένα
        console.log(data.length);
       
        singleShopitem =  (Object.values(data).map((el,i) => {return (
            <div key={i}>
                <Shop id={el._id} rating={el.stars} name={el.shop_name} route={el.route} street_number={el.street_number} locality={el.locality} postal_code={el.postal_code}/>
            </div>)})); // μετατρεπω τα δεδομενα σε jsx array
    

        shopRowItem = (Object.values(data).map((el,i) => {return (
                <div key={i} className="col-6">
                    <Shop id={el._id} rating={el.stars} name={el.shop_name} route={el.route} street_number={el.street_number} locality={el.locality} postal_code={el.postal_code}/></div>)})); // μετατρεπω τα δεδομενα σε jsx array
        for (var k = 0; k< data.length;k +=2) {
            shopRow.push(shopRowItem.slice(k,k+2));
        } //χωρίζω αυτό το array ανα 2       console.log(shopRow);
        
       element= shopRow.map((item, i) => {return (<div key={i} className="row">{item}</div>)} ) //μετατρέπω σε row ανα 2
        
       if (data.length === 0) {
            element = singleShopitem = <h4 style={{marginTop : "100px", lineHeight : "1.6"}}> Δυστυχώς δεν βρέθηκαν τεχνικοί στην περιοχή σου <br />δοκίμασε σε μία άλλη περιοχή </h4>;
        }
        
        return (
        <div>
            <MediaQuery query="(max-device-width: 1224px)">

                <div className="container">
                <div style={{textAlign: 'left'}}><span style={{fontWeight:"500"}}>Περιοχή :</span> {sessionStorage.getItem('locality')}<span style={{fontSize : "10px"}}> ({data.length} αποτελέσματα)</span></div>
                    {singleShopitem}
                </div>
            </MediaQuery>
             <MediaQuery query="(min-device-width: 1224px)">
            <div className="container">
            <div style={{textAlign: 'left'}}><span style={{fontWeight:"500"}}>Περιοχή :</span> {sessionStorage.getItem('locality')}<span style={{fontSize : "10px"}}> ({data.length} αποτελέσματα)</span></div>
                {element}
            </div>
            </MediaQuery>
        </div>
        )
    }
}

export default Shops