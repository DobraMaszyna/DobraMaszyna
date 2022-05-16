import { useState, useEffect } from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import SearchBar from './SearchBar';
import NavIcon from './NavIcon';
import SearchedProducts from './SearchedProducts/Index';

import { useDispatch } from 'react-redux';
import { changeState } from '../../redux/menu';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [defaultNavState, setDefaultNavState] = useState(true);

  const dispatch = useDispatch();

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
      <div className='NavContainer'>
        <Link href='/'>
          <a>
            <h1 className='logo'>Logo312</h1>
          </a>
        </Link>
        <SearchBar />
        <button className='search'>
          <p>Wyszukaj</p>
          <img src='https://img.icons8.com/dotty/80/000000/search.png' />
        </button>
        <ul>
          <NavIcon imgSrc='https://img.icons8.com/dotty/80/000000/scales.png' />
          <Link href='/cart'>
            <a>
              <NavIcon imgSrc='https://img.icons8.com/dotty/80/000000/shopping-cart.png' />
            </a>
          </Link>
          <NavIcon imgSrc='https://img.icons8.com/dotty/80/000000/like.png' />
        </ul>
        <button className='bars' onClick={() => dispatch(changeState())}>
          <img src='https://img.icons8.com/dotty/80/000000/menu-rounded.png' />
        </button>
      </div>
      <SearchedProducts defaultNavState={defaultNavState} />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 150;
  height: ${(props) => (props.defaultNavState ? '75px' : '58px')};
  box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.1);
  transition: height 0.25s ease-in-out;
  background-color: #fff;

  .NavContainer {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 150;
    width: 100%;
    height: 100%;
    padding-inline: 5vmin;

    div {
      display: none;
    }

    ul {
      width: 30%;
      display: flex;
      justify-content: space-between;
      list-style: none;
    }

    .search {
      display: flex;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: transparent;
      margin-left: 30px;
      border: none;

      img {
        width: 100%;
      }
    }

    .bars {
      display: block;
      width: 42px;
      height: 42px;
      background-color: transparent;
      border: none;

      img {
        width: 100%;
      }
    }

    a {
      text-decoration: none;
      color: black;
    }

    @media (min-width: 768px) {
      .bars {
        display: none;
      }

      .search {
        display: none;
      }

      div:nth-child(2) {
        display: flex;
      }

      ul {
        width: 17%;
        margin-left: auto;
      }
    }
  }
`;

export default Navbar;
