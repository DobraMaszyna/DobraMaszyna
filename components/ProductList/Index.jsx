import styled from 'styled-components';
import Product from './Product/Index';

const ProductList = () => {
  return (
    <ProductListStyled>
      <Product />
    </ProductListStyled>
  );
};

const ProductListStyled = styled.ul`
  width: 100%;
  padding: 80px 100px;
  box-sizing: border-box;
`;

export default ProductList;
