import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Search from '../Search/Search';
import Locality from '../Locality/Locality';
import Shops from '../Shops/Shops';
import Signup from '../Signup/Signup';
import Details from '../Details/Details';
import Login from '../Login/Login';
import Forgot from '../Forgot/Forgot';
import Reset from '../Reset/Reset';
import Dashboard from '../Dashboard/Dashboard';


class Main extends Component {
 render() {
     return (
    <Fragment>
      <Route path="/details" component = {Details} />  
      <Route path="/login"  component ={ Login } />
      <Route path="/forgot" component = { Forgot } />
      <Route path="/reset/:token"  component ={ Reset } />
      <Route path="/dashboard" component = { Dashboard } />
      <Route path="/signup" component = { Signup }/>
      <Route path="/search" component = { Search } />
      <Route path="/shops" component = { Shops } />
      <Route path="/" exact component ={ Locality } />
      <Route path='/partner' component={() => window.location = 'https://partner.findfix.gr'}/>

    </Fragment>
     );
 }
}


  export default Main;