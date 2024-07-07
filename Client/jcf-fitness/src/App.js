// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import OnlineCoaching from './components/OnlineCoaching/OnlineCoaching.jsx';
import Transformations from './components/Transformation/Transformation.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Register from './components/Register/Register.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Header className='header' />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/online-coaching" element={<OnlineCoaching />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
