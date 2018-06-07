import React, { Component } from 'react'
import Shop from '../../Componets/Shop/Shop';

class Shops extends Component {
    state = {
        shops : sessionStorage.getItem('shops')
    }

    render () {
        
    //     let element = null;
    //     let data = Array.from(this.state.shops);
    //     console.log(data);
    //     element =(data.map( shops => {return ( <Shop key={shops} value={data}/>)})
    // );
        return (
           <div>sasdasdasdasdasdasdas</div>
                );
    }
}

export default Shops