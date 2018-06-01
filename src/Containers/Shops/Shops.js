import React, { Component } from 'react'
import Shop from '../../Componets/Shop/Shop';

class Shops extends Component {
    state = {
        shops : sessionStorage.getItem('shops')
    }

    render () {
        
        let elemnt = this.state.shops.map(shops => {
            return <Shop key={shops} />
        });

        return (
            {elemnt}
        );
    }
}

export default Shops