import styled from 'styled-components';

import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';

import ProductActions from './ProductActions';

const Product = ({ product, producer, image, price, priceBefore }) => {
  return (
    <ProductStyled>
      <div className='card'>
        <ProductImages image={image} />
        <ProductInfo
          product={product}
          producer={producer}
          price={price}
          priceBefore={priceBefore}
        />
      </div>
      <ProductActions />
    </ProductStyled>
  );
};

const ProductStyled = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 380px;
  margin-bottom: 30px;

  .card {
    display: flex;
    width: 85%;
    height: 100%;
    background-color: #fff;
    border-radius: 16px;
    overflow: hidden;
  }

  .ActionsContainer {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`;

export default Product;
