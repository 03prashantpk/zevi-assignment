import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";
import Logo from '/logo.png';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isProductPage = location.pathname.includes('/product');
    // alert(isProductPage);

    return (
        <nav className="Navbar">
            {isProductPage && <SearchBar />}
            <Link to="/products"><h1>Product</h1></Link>
            <img src={Logo} alt="logo" />
        </nav>
    );
}

export default Navbar;
