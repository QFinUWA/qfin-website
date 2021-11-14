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

  const [burgerOpen, setBurgerOpen] = React.useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
    console.log("BURGER")
  }

  return (
    <>
      <Nav>
        <NavQFin className="QFin" to="/home" activestyle="true">
          QFin UWA
        </NavQFin>
        <Bars className="burger" onClick={toggleBurger}/>
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
            Team
          </NavLink>
          <NavLink to='/blogs' activestyle="true">
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activestyle="true">
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;