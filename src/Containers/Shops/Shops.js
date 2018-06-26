import React, { Component } from 'react'
import Shop from '../../Componets/Shop/Shop';

class Shops extends Component {
  
    render () {

        let shopRowItem = null;
        let shopRow =[];
        let element = null;
        const data = JSON.parse(sessionStorage.getItem('shops')); //τα δεδομένα
        shopRowItem = (Object.values(data).map((el,i) => {return (<div key={i} className="col-6"><Shop  name={el.shop_name} address={el.route}/></div>)})); // μετατρεπω τα δεδομενα σε jsx array
        for (var k = 0; k< data.length;k +=2) {
            shopRow.push(shopRowItem.slice(k,k+2));
        } //χωρίζω αυτό το array ανα 2       console.log(shopRow);
        
       element= shopRow.map((item, i) => {return (<div key={i} className="row">{item}</div>)} ) //μετατρέπω σε row ανα 2
        return (
            <div className="container">
                {element}
            </div>
        )
    }
}

export default Shops