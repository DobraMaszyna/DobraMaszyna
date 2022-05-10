import styled, { css } from 'styled-components';

import SmallActionBtn from './SmallActionBtn';

const Product = ({ productName, price, productProducer }) => {
  return (
    <ProductStyled>
      <div className='image-container'>
        <img src={`/productImages/${productName}.jpeg`} />
      </div>

      <div className='text-info'>
        <h1>{productName}</h1>
        <h2 className='producer'>{productProducer}</h2>

        <div className='bottom-container'>
          <h2 className='price'>{price}zł</h2>

          <div className='btn-container'>
            <SmallActionBtn icon='https://img.icons8.com/dotty/80/7D7D7D/like.png' />
            <SmallActionBtn icon='https://img.icons8.com/dotty/80/7D7D7D/scales.png' />
          </div>
        </div>
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.li(
  ({ theme }) => css`
    width: 200px;
    margin-inline: 30px;

    .image-container {
      display: flex;
      flex-direction: column;
      height: 55%;
      justify-content: space-around;

      img {
        width: 95%;
        margin-inline: auto;
      }
    }

    .text-info {
      position: relative;
      margin-inline: auto;
      height: 50%;

      .bottom-container {
        display: flex;
        align-items: center;

        .btn-container {
          display: flex;
          width: 50%;
          justify-content: space-around;
          margin-left: auto;
          margin-block: 20px;
        }
      }

      h1 {
        margin-top: 20px;
        margin-bottom: 5px;
        font-size: 1.2rem;
      }

      .producer {
        font-weight: 200;
        font-size: 1rem;
        text-align: left;
      }

      .price {
        font-size: 1.9rem;
        color: ${theme.colors.purplePrimary};
      }
    }
  `
);

export default Product;
