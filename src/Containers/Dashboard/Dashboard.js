import React, { Component } from 'react';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

class Dashboard extends Component {


state = {
  
}


render () {
    if (!cookies.get('token')) {
        this.props.history.replace('/login')
    }
    
    return (
        <div>
            <div className="container">
                <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-s-12 col-xs-12">
                    <h4>Dashboard</h4>
                    
                </div>
            </div>
        </div>
    );
}
}

  export default Dashboard;