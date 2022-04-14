import styled from 'styled-components';

const CartActionBtn = ({ icon }) => {
  return (
    <CartActionBtnStyled>
      <img className='cartActionIcon' src={icon} alt='' />
    </CartActionBtnStyled>
  );
};

const CartActionBtnStyled = styled.div`
  position: relative;
  border: 1px solid #7d7d7d;
  border-radius: 1000px;
  width: 35px;
  height: 35px;

  .cartActionIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
  }
`;

export default CartActionBtn;
