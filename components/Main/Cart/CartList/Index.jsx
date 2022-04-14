import styled from 'styled-components';

import CartProduct from './CartProduct/Index';

const CartList = ({ cartProducts }) => {
  return (
    <CartListStyled className='card'>
      {cartProducts.map((product) => (
        <CartProduct
          name={product.name}
          producer={product.producer}
          price={product.price}
          priceBefore={product.priceBefore}
          pid={product._id}
        />
      ))}

      {cartProducts.length === 0 && (
        <h1 className='isEmptyMessage'>
          Twój koszyk jest pusty
          <span>
            <img
              src='https://img.icons8.com/dotty/80/8E94F2/shopping-cart.png'
              alt=''
            />
          </span>
        </h1>
      )}
    </CartListStyled>
  );
};

const CartListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 50vh;
  margin-top: 70px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 100px;
  overflow-x: hidden;

  .isEmptyMessage {
    display: flex;
    align-items: center;
    margin: auto;

    img {
      margin-left: 30px;
    }
  }
`;

export default CartList;
