import styled from 'styled-components';

import Product from './Product/Index';

const ProductList = ({ products }) => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <Product
          product={product.product}
          producer={product.producer}
          image={product.image}
          price={product.price}
          priceBefore={product.priceBefore}
        />
      ))}
    </ProductListStyled>
  );
};

const ProductListStyled = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0px 100px;
  box-sizing: border-box;
`;

export default ProductList;
