import styled from 'styled-components';

const NavIcon = ({ imgSrc }) => {
  return (
    <NavIconsStyled>
      <img src={imgSrc} alt='' />
    </NavIconsStyled>
  );
};

const NavIconsStyled = styled.li`
  img {
    width: 32px;
  }
`;

export default NavIcon;
