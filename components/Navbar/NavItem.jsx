import styled from 'styled-components';

import CompareIcon from '../../assets/Icons/CompareIcon';

const NavItem = ({ title, icon, color }) => {
  return (
    <NavItemStyled color={color}>
      <p className='title'>
        <span className='icon'>{icon}</span>
        {title}
      </p>
    </NavItemStyled>
  );
};

const NavItemStyled = styled.button`
  ${(props) => console.log(props.color, props.color === 'purple')}
  height: 50px;
  margin: 25px;
  background-color: transparent;
  border: none;
  .title {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) =>
        props.color === 'purple'
          ? '#f0f'
          : props.color === 'blue'
          ? props.theme.blue
          : props.theme.red}
      .icon {
      margin-right: 23px;
    }
  }
`;

export default NavItem;
