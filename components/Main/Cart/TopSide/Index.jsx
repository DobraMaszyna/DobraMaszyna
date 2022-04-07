import styled from "styled-components";

const TopSide = () => {
  return (
    <TopSideStyled>
      <h1>Twój koszyk:</h1>
      <h2>
        Razem: <span>1999zł</span>
      </h2>
    </TopSideStyled>
  );
};

const TopSideStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 200px;
  justify-content: space-between;
  padding: 0 10%;

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
