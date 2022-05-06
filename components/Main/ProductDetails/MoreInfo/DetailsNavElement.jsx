import styled from 'styled-components';

const DetailsNavElement = ({ title, href }) => {
  return (
    <DetailsNavElementStyled href={`#${href}`}>{title}</DetailsNavElementStyled>
  );
};

const DetailsNavElementStyled = styled.a`
  width: calc(100% / 7);
  display: inline-block;
  padding: 20px;
  border-radius: 3px;
  border: none;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
  background: transparent;
  text-decoration: none;
  color: black;

  &:hover {
    background: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: ${(props) => props.theme.colors.purplePrimary};
  }
`;

export default DetailsNavElement;
