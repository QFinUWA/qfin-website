import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
// Style of the navbar
export const Nav = styled.nav`
  // position: sticky;
  position: relative;
  background: #24CC54;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px calc((100vw - 1000px) / 2);
  z-index: 12;
  padding: 4px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-rows: 3rem auto;
    place-items: center;
    height: 100%;
  }
`;

// Colour of text on nav bar
export const NavLink = styled(Link)`
  color: #313131;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: auto;
  text-decoration: none;
  padding: 0 1rem;
  height: 50px;
  cursor: pointer;

  &.active {
    color: #000000;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 100%;
    width: 300px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const NavQFin = styled(Link)`
  color: #313131;
  font-size:15pt;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #000000;
  }
`;

// Icon for the hamburger menu
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  background: #24CC54;
  height: 2rem;
  position: absolute;
  top: 0.75rem;
  right: 1.5rem;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Sign in button UNUSED RN
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-family: Segoe UI;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Sign in button style UNUSED RN
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const BurgerNavMenu = styled.div`
  position: absolute;
  justify-items: center;
  float: right;
  background-color: rgba(97, 97, 102, 0.9);
  width: 100%;
  display: none;
  grid-auto-rows: 50px;
  place-items: center;
  grid-gap: 0.5rem;
  padding: ${({ burgerOpen }) => !burgerOpen ? '0' : '1rem 0'};
  z-index: 10;
  max-height: ${({ burgerOpen }) => !burgerOpen ? '0' : '100vh'};
  overflow: hidden;
  transition: 600ms;

  @media screen and (max-width: 768px) {
    display: grid;
  }
`;
