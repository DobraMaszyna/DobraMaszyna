import styled from 'styled-components';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import NavItem from '../../Navbar/NavItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faCodeCompare,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  return (
    <ProductStyled>
      <div className='card'>
        <ProductImages />
        <ProductInfo />
      </div>
      <div className='userAction'>
      <NavItem
        title='Porównaj'
        icon={<FontAwesomeIcon size='l' icon={faCodeCompare} />}
        color='blue'
      />
      <NavItem
        title='Koszyk'
        icon={<FontAwesomeIcon size='l' icon={faCartShopping} />}
        color='purple'
      />
      <NavItem
        title='Polubione'
        icon={<FontAwesomeIcon size='l' icon={faHeart} />}
        color='red'
      />
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 380px;

  .card {
    display: flex;
    width: 85%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 4px 122px 8px rgba(0, 0, 0, 0.03);
    border-radius: 16px;
    overflow: hidden;
  }

  .userAction{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-items: center;
  }
`;

export default Product;
