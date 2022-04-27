import styled from 'styled-components';

import Product from './Product/Index';

const ProductList = ({ products }) => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </ProductListStyled>
  );
};

const ProductListStyled = styled.ul`
  width: 100;
  min-height: 100vh;
  padding: 0px 2vmin;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export default ProductList;
