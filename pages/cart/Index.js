import styled from 'styled-components';

import { useSelector } from 'react-redux';

import CartList from '../../components/Main/Cart/CartList/Index';
import TopSide from '../../components/Main/Cart/TopSide/Index';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  return (
    <CartStyled>
      <TopSide />
      <CartList />
    </CartStyled>
  );
};

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 40px;
`;

export default Cart;
