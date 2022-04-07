import styled from "styled-components";

import CartProduct from "./CartProduct/Index";

const CartList = ({ cartProducts }) => {
  return (
    <CartListStyled>
      {cartProducts.map((product) => (
        <CartProduct name={product.name} />
      ))}
    </CartListStyled>
  );
};

const CartListStyled = styled.ul`
  display: flex;
  flex-direction: column;
`;

export default CartList;
