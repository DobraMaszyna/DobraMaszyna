import styled from 'styled-components';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../redux/cart';

import ActionBtn from '../../../../lib/components/ActionBtn';
import ProductInfo from './ProductInfo';
import Price from '../../../../lib/components/Price';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <ProductStyled>
      <ProductInfo
        product={product.name}
        producer={product.producer}
        image={product.image}
        pid={product._id}
      />

      <div className='RightSide'>
        <div className='ActionBtnsContainer'>
          <ActionBtn
            onClick={() => dispatch(addProduct(product))}
            style={{ float: 'right' }}
            title='Do koszyka'
            btnClass='purple'
            icon='https://img.icons8.com/external-icongeek26-outline-icongeek26/64/ffffff/external-cart-ecommerce-icongeek26-outline-icongeek26.png'
          />
          <ActionBtn
            style={{ float: 'right' }}
            title='Polub'
            btnClass='silver'
            icon='https://img.icons8.com/ios/50/000000/like--v1.png'
          />
        </div>
        <Price price={product.price} priceBefore={product.priceBefore} />
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 303px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};

  .RightSide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    height: 100%;
    padding: 25px 0;
    text-align: right;
  }
`;

export default Product;
