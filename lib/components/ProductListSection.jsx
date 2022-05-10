import styled from 'styled-components';

import Product from './Product';

const ProductListSection = ({ products, title }) => {
  return (
    <ProductListSectionStyled>
      <h1>{title}</h1>
      <ul>
        {products.map((product) => (
          <Product
            productName={product.name}
            price={product.price}
            productProducer={product.producer}
          />
        ))}
      </ul>
    </ProductListSectionStyled>
  );
};

const ProductListSectionStyled = styled.section`
  margin-top: 150px;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 20%;
    list-style: none;
    width: 100%;
    margin-top: 15px;

    li {
      box-sizing: content-box;
      padding: 20px;
      margin-bottom: 40px;
      box-shadow: 0px 0px 2px rgba(142, 148, 242, 0.56);
      border-radius: 10px;
    }
  }
`;

export default ProductListSection;
