import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import Projects from './pages/projects';
import Teams from './pages/team';
import Sponsors from './pages/sponsors';
import SignUp from './pages/signup';
import MyFooter from './components/MyFooter';
import Banner from './components/Banner';
import ScrollButton from './components/ScrollButton';


function App() {
  return (
    <>
      <HashRouter>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qfin-website" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Events />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/sponsors' element={<Sponsors />} />
          <Route path='/team' element={<Teams />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <ScrollButton />
      </HashRouter>
      <MyFooter />
    </>
  );
}

export default App;