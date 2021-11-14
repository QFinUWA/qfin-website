import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavQFin,
  //NavBtn,
  //NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavQFin className="QFin" to="/home" activestyle="true">
          QFin UWA
        </NavQFin>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activestyle="true">
            About
          </NavLink>
          <NavLink to='/projects' activestyle="true">
            Projects
          </NavLink>
          <NavLink to='/events' activestyle="true">
            Events
          </NavLink>
          <NavLink to='/team' activestyle="true">
            Teams
          </NavLink>
          <NavLink to='/blogs' activestyle="true">
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activestyle="true">
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;