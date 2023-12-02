// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/SearchSearchBar/Search';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Product';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
