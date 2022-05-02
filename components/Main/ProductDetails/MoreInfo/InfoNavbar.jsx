import styled from 'styled-components';

const InfoNavbar = ({ title }) => {
  return <InfoNavbarStyled>{title}</InfoNavbarStyled>;
};

const InfoNavbarStyled = styled.button`
  width: calc(100% / 7);
  display: inline-block;
  padding: 20px;
  border-radius: 3px;
  border: none;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
  border-bottom: 2px solid ${(props) => props.theme.colors.purplePrimary};
  background: transparent;

  &:hover {
    background: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: ${(props) => props.theme.colors.purplePrimary};
  }
`;

export default InfoNavbar;
