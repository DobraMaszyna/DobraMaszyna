import styled from 'styled-components';
import ProductList from '../ProductList/Index';

const Main = ({ products }) => {
  return (
    <MainStyled>
      <ContentContainer>
        <ProductList products={products} />
      </ContentContainer>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  float: right;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  width: 92%;
  height: 100%;
  margin-right: auto;
  border-radius: 41px 41px 0 0;
  background-color: #fff;
`;

export default Main;
