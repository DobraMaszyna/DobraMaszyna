import styled from 'styled-components';

const Main = () => {
  return (
    <MainStyled>
      <ContentContainer></ContentContainer>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  float: right;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
`;

export default Main;
