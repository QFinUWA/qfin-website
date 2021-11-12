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
import MyFooter from './components/myFooter';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/team' element={<Teams/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      <MyFooter />
    </Router>
  );
}
  
export default App;