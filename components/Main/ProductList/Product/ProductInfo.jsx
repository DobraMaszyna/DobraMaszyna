import styled from 'styled-components';

const ProductInfo = ({ product, producer, image }) => {
  return (
    <ProductInfoStyled>
      <img src={image} alt='' />
      <div className='defaultInfo'>
        <h1 className='product_model'>{product}</h1>
        <h2 className='product_producer'>{producer}</h2>
      </div>
    </ProductInfoStyled>
  );
};

const ProductInfoStyled = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  text-align: left;

  img {
    height: 223px;
  }

  .defaultInfo {
    height: 100%;
    margin-top: 20%;
    margin-left: 2%;

    h1 {
      width: 100%;
      font-size: 25px;
    }
    h2 {
      width: 100%;
      font-weight: lighter;
      font-size: 15px;
    }
  }

  .product_prize_before {
    text-decoration: line-through;
    font-weight: normal;
  }
`;

export default ProductInfo;
