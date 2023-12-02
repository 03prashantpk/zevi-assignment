// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/SearchBarPage/Search';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/products" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
