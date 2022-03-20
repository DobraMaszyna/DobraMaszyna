import styled from 'styled-components';

import ProductList from './ProductList/Index';
import SortOptions from './SortOptions';

const Main = ({ products }) => {
  return (
    <MainStyled>
      <div className='ContentContainer card'>
        <SortOptions />
        <ProductList products={products} />
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  float: right;
  width: 100%;
  height: 100%;

  .ContentContainer {
    width: 92%;
    height: 100%;
    margin: auto;
    border-radius: 41px 41px 0 0;
    padding: 0 90px;
  }
`;

export default Main;
