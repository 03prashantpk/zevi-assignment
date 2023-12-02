import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";
import Logo from '/logo.png';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isProductPage = location.pathname.includes('/product');
    // alert(isProductPage);

    return (
        <nav className="Navbar">
            {isProductPage && <SearchBar />}
            <img src={Logo} alt="logo" />
        </nav>
    );
}

export default Navbar;
