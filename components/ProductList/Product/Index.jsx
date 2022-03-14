import styled from 'styled-components';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';

const Product = () => {
  return (
    <ProductStyled>
      <div className='card'>
        <ProductImages />
        <ProductInfo />
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 380px;

  .card {
    display: flex;
    width: 85%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 4px 122px 8px rgba(0, 0, 0, 0.03);
    border-radius: 16px;
    overflow: hidden;
  }
`;

export default Product;
