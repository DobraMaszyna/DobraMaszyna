import styled from 'styled-components';

import ActionBtn from './ActionBtn';
import ProductInfo from './ProductInfo';

const Product = ({ product, producer, image, price, priceBefore }) => {
  return (
    <ProductStyled>
      <ProductInfo
        product={product}
        producer={producer}
        price={price}
        priceBefore={priceBefore}
        image={image}
      />
      <div className='RightSide'>
        <div className='ActionBtnsContainer'>
          <ActionBtn
            title='Do koszyka'
            btnClass='purple'
            icon='https://img.icons8.com/external-icongeek26-outline-icongeek26/64/ffffff/external-cart-ecommerce-icongeek26-outline-icongeek26.png'
          />
          <ActionBtn
            title='Do koszyka'
            btnClass='silver'
            icon='https://img.icons8.com/ios/50/000000/like--v1.png'
          />
        </div>
        <div className='PriceContainer'>
          <p>
            {priceBefore}
            {priceBefore % 1 === 0 && '.00'} zł
          </p>
          <h1>
            {price}
            {price % 1 === 0 && '.00'} zł
          </h1>
        </div>
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 303px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};

  .RightSide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    height: 100%;
    padding: 25px 0;
    text-align: right;

    .PriceContainer {
      margin-top: auto;

      p {
        font-size: 20px;
        color: ${(props) => props.theme.colors.purpleLighter};
        text-decoration: line-through;
      }

      h1 {
        font-size: 50px;
        color: ${(props) => props.theme.colors.purplePrimary};
      }
    }
  }
`;

export default Product;
