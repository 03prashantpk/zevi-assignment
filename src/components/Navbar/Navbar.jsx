import "./Navbar.scss";
import Logo from '/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink to="/products" activeClassName="active">Products</NavLink>
           <img src={Logo} alt="" />
        </nav>
    );
}

export default Navbar;