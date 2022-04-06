import styled from 'styled-components';

const TopSide = () => {
  return (
    <TopSideStyled>
      <h1>Twój koszyk:</h1>
      <h2>Razem: 1999zł</h2>
    </TopSideStyled>
  );
};

const TopSideStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 200px;
  justify-content: space-between;

  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 60px;
  }
`;

export default TopSide;
