import styled from "styled-components";

const InfoNavbar = ({ title }) => {
  return <InfoNavbarStyled>{title}</InfoNavbarStyled>;
};

const InfoNavbarStyled = styled.button`
  width: calc(100% / 7);
  display: inline-block;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
`;

export default InfoNavbar;
