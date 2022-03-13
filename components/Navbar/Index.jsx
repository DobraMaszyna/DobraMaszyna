import styled from 'styled-components';
import SearchBar from './SearchBar';
import NavItem from './NavItem';

import CompareIcon from '../../assets/Icons/CompareIcon';
import CartIcon from '../../assets/Icons/CartIcon';
import HearthIcon from '../../assets/Icons/HearthIcon';

const Navbar = () => {
  return (
    <NavbarStyled>
      <SearchBar />
      <NavItem title='Porównaj' icon={<CompareIcon />} color='purple' />
      <NavItem title='Koszyk' icon={<CartIcon />} />
      <NavItem title='Polubione' icon={<HearthIcon />} />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100px;
`;

export default Navbar;
