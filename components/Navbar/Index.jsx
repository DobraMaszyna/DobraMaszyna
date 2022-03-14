import styled from 'styled-components';
import SearchBar from './SearchBar';
import NavItem from './NavItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faCodeCompare,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <NavbarStyled>
      <SearchBar />
      <NavItem
        title='Porównaj'
        icon={<FontAwesomeIcon size='xl' icon={faCodeCompare} />}
        color='blue'
      />
      <NavItem
        title='Koszyk'
        icon={<FontAwesomeIcon size='xl' icon={faCartShopping} />}
        color='purple'
      />
      <NavItem
        title='Polubione'
        icon={<FontAwesomeIcon size='xl' icon={faHeart} />}
        color='red'
      />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: 100px;
  padding: 0 2% 0 20%;
`;

export default Navbar;
