import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../../../redux/cart';

import Price from '../../../../lib/components/Price';
import Availability from '../../../../lib/components/Availability';
import Delivery from './Delivery';
import ActionBtn from '../../../../lib/components/ActionBtn';

const RightSideInfo = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    cartProducts.filter((prod) => prod._id === product._id).length === 0
      ? setIsInCart(false)
      : setIsInCart(true);
  }, [cartProducts]);

  return (
    <PaymentStyled className='card'>
      <Price price={product.price} priceBefore={product.priceBefore} />
      <Availability
        title='Dostępny'
        icon='https://img.icons8.com/dotty/80/2ecc71/ok.png'
      />
      <ul>
        <Delivery
          title='Dostawa w ciągu 7 dni'
          icon='https://img.icons8.com/dotty/80/C6C9F8/today.png'
        />
        <Delivery
          title='Darmowa dostawa'
          icon='https://img.icons8.com/dotty/80/C6C9F8/delivery.png'
        />
      </ul>
      {isInCart ? (
        <ActionBtn
          onClick={() => dispatch(removeProduct(product._id))}
          style={{
            color: '#ff5757',
            margin: '5px auto',
            width: '90%',
          }}
          title='Usuń z koszyka'
          btnClass='silver'
          icon='https://img.icons8.com/dotty/80/ff5757/filled-trash.png'
        />
      ) : (
        <ActionBtn
          onClick={() => dispatch(addProduct(product))}
          style={{ margin: '5px auto', width: '90%' }}
          title='Do koszyka'
          btnClass='purple'
          icon='https://img.icons8.com/external-icongeek26-outline-icongeek26/64/ffffff/external-cart-ecommerce-icongeek26-outline-icongeek26.png'
        />
      )}
      <ActionBtn
        style={{ margin: '5px auto', width: '90%' }}
        title='Polub'
        btnClass='silver'
        icon='https://img.icons8.com/dotty/80/000000/like.png'
      />
    </PaymentStyled>
  );
};

const PaymentStyled = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 20px;
  padding: 30px;

  ul {
    margin: 10px 0;
  }

  @media (min-width: 768px) {
    width: 20%;
    min-width: 300px;
    padding: 50px;

    ul {
      margin: 50px 0;
    }
  }
`;

export default RightSideInfo;
