import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Frameworks from './components/Frameworks';
import AWS from './components/AWS';
import Javascript from './components/Javascript';

import './styles/main.css';

function App() {
  return (
    <>
      <Router>
        <div
          style={{
            height: '100%',
          }}
        >
          <Header />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route exact path="/frameworks" element={<Frameworks />} />
            <Route exact path="/aws" element={<AWS />} />
            <Route exact path="/javascript" element={<Javascript />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
