import styled from 'styled-components';

const ProductInfo = ({ product, producer, price, priceBefore }) => {
  return (
    <ProductInfoStyled>
      <div>
        <h1 className='product_model'>{product}</h1>
        <h2 className='product_producer'>{producer}</h2>
      </div>

      <div>
        {price !== priceBefore && (
          <h3 className='product_prize_before'>{priceBefore} zł</h3>
        )}
        <h4 className='product_prize_after'>{price} zł</h4>
      </div>
    </ProductInfoStyled>
  );
};

const ProductInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 100%;
  text-align: left;
  padding: 5%;

  h1 {
    width: 100%;
    font-size: 30px;
  }
  h2 {
    width: 100%;
    font-weight: lighter;
    font-size: 20px;
  }
  h3 {
    width: 100%;
    color: #f28d94;
    font-size: 25px;
  }

  h4 {
    width: 100%;
    color: #8e94f2;
    font-size: 55px;
  }

  .product_prize_before {
    text-decoration: line-through;
    font-weight: normal;
  }
`;

export default ProductInfo;
