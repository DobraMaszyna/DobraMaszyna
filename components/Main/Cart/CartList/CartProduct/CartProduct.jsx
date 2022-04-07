import styled from "styled-components";

const CartProduct = ({ name }) => {
  return <CartProductStyled>{name}</CartProductStyled>;
};

const CartProductStyled = styled.div`
  display: flex;
`;

export default CartProduct;
