import styled, { css } from 'styled-components';

const RecomendetProduct = ({ productName, price, productProducer }) => {
  return (
    <RecomendetProductStyled>
      <img src={`/productImages/${productName}.jpeg`} />

      <div className='text-info'>
        <h1>{productName}</h1>
        <h2 className='producer'>{productProducer}</h2>

        <h2 className='price'>{price}zł</h2>
      </div>
    </RecomendetProductStyled>
  );
};

const RecomendetProductStyled = styled.li(
  ({ theme }) => css`
    width: 20%;
    height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-inline: 10px;

    img {
      width: 100%;
    }

    .text-info {
      position: relative;
      margin-inline: auto;
      height: 100%;

      h1 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 1.1rem;
      }

      .producer {
        font-weight: 200;
        font-size: 0.8rem;
        text-align: left;
      }

      .price {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 1.5rem;
        color: ${theme.colors.purplePrimary};
      }
    }
  `
);

export default RecomendetProduct;
