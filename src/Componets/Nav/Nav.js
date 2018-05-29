import React from 'react';
import NavigationItems from '../Nav/navigationItems/NavigationItems';


const nav =(props) => (

<nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-between">
  <div className="container">
  <a className="navbar-brand">FindFix</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <NavigationItems />  
  </div>
  </div>
</nav>

);

export default nav