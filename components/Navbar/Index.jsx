import { useState, useEffect } from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import SearchBar from './SearchBar';
import NavElement from './NavElement';
import SearchedProducts from './SearchedProducts/Index';

import { useDispatch } from 'react-redux';
import { changeState } from '../../redux/menu';

const Navbar = () => {
  const dispatch = useDispatch();

  const [scrollY, setScrollY] = useState(0);
  const [defaultNavState, setDefaultNavState] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isOverResult, setIsOverResult] = useState(false);

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

  //---Handlers---

  const searchQueryHandler = (query) => {
    setSearchQuery(query);
  };

  const inputFocusHandler = () => {
    setIsFocused(!isFocused);
  };

  const mouseHoverHandler = () => {
    setIsOverResult(!isOverResult);
  };

  return (
    <>
      <NavbarStyled defaultNavState={defaultNavState}>
        <div className='NavContainer'>
          <Link href='/'>
            <a>
              <h1 className='logo'>Logo312</h1>
            </a>
          </Link>
          <SearchBar
            onInputFocus={inputFocusHandler}
            changeSearchQuery={searchQueryHandler}
          />
          <button className='search'>
            <p>Wyszukaj</p>
            <img src='https://img.icons8.com/dotty/80/000000/search.png' />
          </button>
          <ul>
            <Link href='/koszyk'>
              <a>
                <NavElement
                  title='Koszyk'
                  imgSrc='https://img.icons8.com/dotty/80/000000/shopping-cart.png'
                />
              </a>
            </Link>
            <Link href='/polubione'>
              <a>
                <NavElement
                  title='Polubione'
                  imgSrc='https://img.icons8.com/dotty/80/000000/like.png'
                />
              </a>
            </Link>
          </ul>
          <button className='bars' onClick={() => dispatch(changeState())}>
            <img src='https://img.icons8.com/dotty/80/000000/menu-rounded.png' />
          </button>
        </div>
      </NavbarStyled>
      {isFocused || isOverResult ? (
        <SearchedProducts
          searchQuery={searchQuery}
          defaultNavState={defaultNavState}
          onMouseHover={mouseHoverHandler}
        />
      ) : null}
    </>
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
      width: 25%;
      display: flex;
      justify-content: space-between;
      list-style: none;
    }

    p {
      display: none;
    }

    .search {
      display: flex;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: transparent;
      border: none;
      margin-left: 18%;

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
        width: 15%;
        margin-left: auto;
      }
    }

    @media (min-width: 1100px) {
      p {
        display: block;
      }
    }
  }
`;

export default Navbar;
