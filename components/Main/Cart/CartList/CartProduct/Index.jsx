import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../../../redux/cart';

import CartActionBtn from './CartActionBtn';
import Price from '../../../../../lib/components/Price';
import CartSelectQuantity from './CartSelectQuantity';

const CartProduct = ({ name, producer, price, priceBefore, pid }) => {
  const dispatch = useDispatch();

  return (
    <CartProductStyled>
      <img className='prodImg' src={`/productImages/${name}.jpeg`} alt='' />

      <div>
        <h1 className='cartProdName'>{name}</h1>
        <h2 className='cartProdProducer'>{producer}</h2>

        <div className='ActionBtnContainer'>
          <CartActionBtn icon='https://img.icons8.com/dotty/80/7D7D7D/like.png' />
          <CartActionBtn icon='https://img.icons8.com/dotty/80/7D7D7D/scales.png' />
        </div>
      </div>
      <div className='PriceContainer'>
        <Price price={price} priceBefore={priceBefore} />
      </div>
      <CartSelectQuantity />
      <motion.img
        className='delete'
        src='https://img.icons8.com/dotty/80/ff5757/filled-trash.png'
        alt=''
        onClick={() => dispatch(removeProduct(pid))}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </CartProductStyled>
  );
};

const CartProductStyled = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 90%;
  padding-left: 5%;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  justify-content: space-around;

  .prodImg {
    height: 75%;
    margin-right: 2%;
  }

  .cartProdName {
    font-size: 25px;
    font-weight: 700;
  }

  .cartProdProducer {
    font-size: 18px;
    font-weight: 300;
  }

  .ActionBtnContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin: 10px 0;
  }

  .PriceContainer {
    display: flex;
    height: 100%;
    align-items: center;
    padding-bottom: 34px;
    font-size: 16px;
  }

  .delete {
    width: 43px;
    cursor: pointer;
  }
`;

export default CartProduct;
