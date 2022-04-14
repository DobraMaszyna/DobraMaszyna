import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import styled from 'styled-components';

import CartList from '../../components/Main/Cart/CartList/Index';
import TopSide from '../../components/Main/Cart/TopSide/Index';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cart);

  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    setCartValue(0);

    if (cartValue === 0) {
      cartProducts.map((prod) =>
        setCartValue((prevState) => prevState + prod.price)
      );
    }
  }, [cartProducts]);

  return (
    <CartStyled>
      <TopSide cartValue={cartValue} />
      <CartList cartProducts={cartProducts} />
    </CartStyled>
  );
};

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  border-radius: 40px;
`;

export default Cart;
