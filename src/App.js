import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Frameworks from './components/Frameworks';
import AWS from './components/AWS';

function App() {
  return (
    <>
      <Router>
        <div
          style={{
            height: '100vh',
            position: 'relative',
          }}
        >
          <Header />
          <Routes>
            <Route exact path="/frameworks" element={<Frameworks />} />
            <Route exact path="/aws" element={<AWS />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
