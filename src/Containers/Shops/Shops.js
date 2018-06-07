import React, { Component } from 'react'
import Shop from '../../Componets/Shop/Shop';

class Shops extends Component {
  
    render () {
        const data = sessionStorage.getItem('shops');
        console.log(data);
        Object.values(data).map((el,key) => {console.log(el + ' / ' + key);})
        return (
            <div className="loop-container">
            {
                // data.map((key, el) => 
                //         { Object.entries(el).map(([key, value]) => {return(<div key={key}>{console.log(value)}</div>)})} )
            }
        </div>
        )
    }
}

export default Shops