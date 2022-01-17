import React, { useEffect } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavQFin,
  BurgerNavMenu,
} from './NavbarElements';

const Navbar = () => {

  const [burgerOpen, setBurgerOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const onWindowResize = () => setIsMobile(window.innerWidth < 768);

  useEffect(() => {
    onWindowResize();
    window.onresize = onWindowResize;
  }, []);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  }

  const closeBurger = () => {
    setBurgerOpen(false);
  }

  return (
    <>
      <Nav>
        <NavQFin className="QFin" to="/home" onClick={closeBurger} activestyle="true">
          QFin UWA
        </NavQFin>
        {isMobile &&
          <Bars className="burger" onClick={toggleBurger}/>
        }
        {(!isMobile) &&
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
            <NavLink to='/sign-up' activestyle="true">
              Sign Up
            </NavLink>
          </NavMenu>
        }
      </Nav>
      {(burgerOpen && isMobile) &&
          <BurgerNavMenu>
            <NavLink to='/about'  onClick={toggleBurger} activestyle="true">
              About
            </NavLink>
            <NavLink to='/projects' onClick={toggleBurger} activestyle="true">
              Projects
            </NavLink>
            <NavLink to='/events' onClick={toggleBurger} activestyle="true">
              Events
            </NavLink>
            <NavLink to='/team' onClick={toggleBurger} activestyle="true">
              Team
            </NavLink>
            <NavLink to='/sign-up' onClick={toggleBurger} activestyle="true">
              Sign Up
            </NavLink>
          </BurgerNavMenu>
        }
    </>
  );
};
  
export default Navbar;