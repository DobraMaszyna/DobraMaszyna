import styled from 'styled-components';

const NavItem = ({ title, icon, color }) => {
  return (
    <NavItemStyled color={color}>
      <p>
        <span>{icon}</span>
        {title}
      </p>
    </NavItemStyled>
  );
};

const NavItemStyled = styled.button`
  height: 50px;
  margin: 25px;
  background-color: transparent;
  border: none;

  p {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) =>
      props.color === 'purple'
        ? props.theme.colors.purple
        : props.color === 'blue'
        ? props.theme.colors.blue
        : props.theme.colors.red};
    span {
      margin-right: 23px;
    }
  }
`;

export default NavItem;
