import React, { Component } from 'react'
import Shop from '../../Componets/Shop/Shop';

class Shops extends Component {
  
    render () {
        let shopRowItem = null;
        let shopRow =[];
        let element = null;
        const data = JSON.parse(sessionStorage.getItem('shops'));
        shopRowItem = (Object.values(data).map((el,i) => {return (<Shop key={i} name={el.shop_name} address={el.route}/>)}));
        for (var k = 0; k< data.length;k +=2) {
            shopRow.push(shopRowItem.slice(k,k+2));
        }

    element = (<div className="row">
                    <div className="col-6">
                        {shopRow}
                    </div>
                </div>);

        // Object.values(data).map((el, index) => {console.log(el.locality + '\  '+ index)})
        return (
            <div className="container">
                {element}
            </div>
        )
    }
}

export default Shops