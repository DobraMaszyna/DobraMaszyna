import styled from 'styled-components';

const TopSide = ({ cartValue }) => {
  return (
    <TopSideStyled>
      <h1>Twój koszyk:</h1>
      <h2>
        Razem: <span>{cartValue} zł</span>
      </h2>
    </TopSideStyled>
  );
};

const TopSideStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 200px;
  justify-content: space-between;
  padding: 0 10%;
  border-bottom: 1px solid ${(props) => props.theme.colors.purplePrimary};

  h1 {
    font-size: 40px;
  }
  h2 {
    display: flex;
    flex-direction: column;
    font-size: 25px;
    span {
      font-size: 60px;
      line-height: 0.85;
      color: ${(props) => props.theme.colors.purplePrimary};
    }
  }
`;

export default TopSide;
