import { useState, useEffect } from 'react';

import styled from 'styled-components';

import SearchBar from './SearchBar';
import NavIcon from './NavIcon';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [defaultNavState, setDefaultNavState] = useState(true);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
  }

  useEffect(() => {
    if (scrollY === 0) {
      setDefaultNavState(true);
    } else {
      setDefaultNavState(false);
    }
  }, [scrollY]);

  return (
    <NavbarStyled defaultNavState={defaultNavState}>
      <SearchBar />

      <ul>
        <NavIcon imgSrc='https://img.icons8.com/dotty/80/000000/scales.png' />
        <NavIcon imgSrc='https://img.icons8.com/dotty/80/000000/shopping-cart.png' />
        <NavIcon imgSrc='https://img.icons8.com/dotty/80/000000/like.png' />
      </ul>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-width: 100vw;
  height: ${(props) => (props.defaultNavState ? '75px' : '58px')};
  padding: 0 2% 0 20%;
  margin-bottom: 70px;
  background-color: #fff;
  box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: height 0.25s ease-in-out;

  ul {
    display: flex;
    width: 15%;
    justify-content: space-around;
    list-style: none;
    margin-left: auto;
  }
`;

export default Navbar;
