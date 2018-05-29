import React from 'react';
import { Link } from 'react-router-dom';

const navigationItems = (props) => (
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/login">Σύνδεση</Link>
        </li>
    </ul>
)

export default navigationItems;