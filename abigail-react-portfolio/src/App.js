import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div>
    <Header/>
    <Routes> 
      <Route 
        path='/'
        element={<AboutMe/>}
      />
      <Route 
        path='/contact'
        element={<Contact/>}
      />
      <Route 
        path='/portfolio'
        element={<Portfolio/>}
      />
            <Route 
        path='/resume'
        element={<Resume/>}
      />
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
