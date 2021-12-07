import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import Projects from './pages/projects';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import MyFooter from './components/MyFooter';
import Banner from './components/Banner';

  
function App() {
  return (
    <Router>
      <Banner />
      <h1>This website is under construction. Please check back later.</h1>
    </Router>
  );
}
  
export default App;