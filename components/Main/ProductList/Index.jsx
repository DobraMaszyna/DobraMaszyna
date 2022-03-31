import styled from "styled-components";

import Product from "./Product/Index";

const ProductList = ({ products }) => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <Product
          product={product.name}
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
  min-height: 100vh;
  padding: 0px 5%;
  box-sizing: border-box;
`;

export default ProductList;
