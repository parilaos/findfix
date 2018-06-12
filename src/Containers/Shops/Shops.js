import React, { Component } from 'react'
import Shop from '../../Componets/Shop/Shop';

class Shops extends Component {
  
    render () {
        let element = null
        const data = JSON.parse(sessionStorage.getItem('shops'));
        console.log(data);
        element = (<div>{Object.values(data).map((el,i) => {return (<Shop key={i} value={el.locality} />)})}</div>);
        // Object.values(data).map((el, index) => {console.log(el.locality + '\  '+ index)})
        return (
            <div className="loop-container">
            {element}
        </div>
        )
    }
}

export default Shops