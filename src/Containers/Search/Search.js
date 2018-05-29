import React, { Component } from 'react';
import Choose from '../../Componets/Choose/Choose';

import { Brands }  from '../../Config/Brands';
import { Category } from '../../Config/Category';

class Search extends Component {


    state= {
        searchComponents : {
            // salad: 'paris',
            bacon: 'georg',
            // cheese: 7,
            meat: [Brands]
        }
}

render () {

    return (
        <Choose searchComponents={this.state.searchComponents} />
  );
     
}
}


export default Search;