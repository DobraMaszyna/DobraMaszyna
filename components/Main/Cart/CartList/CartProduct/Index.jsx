import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../../../redux/cart';

import SmallActionBtn from '../../../../../lib/components/SmallActionBtn';
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
          <SmallActionBtn icon='https://img.icons8.com/dotty/80/7D7D7D/like.png' />
          <SmallActionBtn icon='https://img.icons8.com/dotty/80/7D7D7D/scales.png' />
        </div>
      </div>
      <div className='PaymantContainer'>
        <div className='PriceContainer'>
          <Price price={price} priceBefore={priceBefore} />
        </div>
        <CartSelectQuantity />
      </div>
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
  height: 250px;
  width: 95%;
  padding-left: 5%;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  justify-content: space-around;

  .prodImg {
    height: 55%;
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
    //padding-bottom: 34px;
    font-size: 16px;
  }

  .delete {
    width: 40px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    transform: translateY(-25%);
    height: 300px;

    .prodImg {
      height: 45%;
    }

    .cartProdName {
      font-size: 20px;
    }

    .PriceContainer {
      font-size: 14px;
    }

    .PaymantContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;

export default CartProduct;
