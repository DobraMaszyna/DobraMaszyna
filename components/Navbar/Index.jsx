import { useState, useEffect } from "react";
import Link from "next/link";

import styled from "styled-components";

import SearchBar from "./SearchBar";
import NavIcon from "./NavIcon";
import SearchedProducts from "./SearchedProducts/Index";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [defaultNavState, setDefaultNavState] = useState(true);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
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
      <div className="NavContainer">
        <SearchBar />

        <ul>
          <NavIcon imgSrc="https://img.icons8.com/dotty/80/000000/scales.png" />
          <Link href="/cart">
            <a>
              <NavIcon imgSrc="https://img.icons8.com/dotty/80/000000/shopping-cart.png" />
            </a>
          </Link>
          <NavIcon imgSrc="https://img.icons8.com/dotty/80/000000/like.png" />
        </ul>
      </div>
      <SearchedProducts defaultNavState={defaultNavState} />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  position: fixed;
  flex-direction: column;
  display: flex;
  width: 100%;
  max-width: 100vw;

  @media (max-width: 768px) {
  }

  .NavContainer {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: ${(props) => (props.defaultNavState ? "75px" : "58px")};
    padding: 0 2% 0 20%;
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
  }
`;

export default Navbar;
