import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../../../redux/cart';

import ActionBtn from '../../../../lib/components/ActionBtn';
import ProductInfo from './ProductInfo';
import Price from '../../../../lib/components/Price';
import { BrowserView } from 'react-device-detect';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    cartProducts.filter((prod) => prod._id === product._id).length === 0
      ? setIsInCart(false)
      : setIsInCart(true);
  }, [cartProducts]);

  return (
    <ProductStyled>
      <ProductInfo
        product={product.name}
        producer={product.producer}
        image={product.image}
        pid={product._id}
      />

      <div className='RightSide'>
        <BrowserView>
          <div className='ActionBtnsContainer'>
            {isInCart ? (
              <ActionBtn
                onClick={() => dispatch(removeProduct(product._id))}
                style={{ float: 'right', color: '#ff5757' }}
                title='Usuń z koszyka'
                btnClass='silver'
                icon='https://img.icons8.com/dotty/80/ff5757/filled-trash.png'
              />
            ) : (
              <ActionBtn
                onClick={() => dispatch(addProduct(product))}
                style={{ float: 'right' }}
                title='Do koszyka'
                btnClass='purple'
                icon='https://img.icons8.com/external-icongeek26-outline-icongeek26/64/ffffff/external-cart-ecommerce-icongeek26-outline-icongeek26.png'
              />
            )}

            <ActionBtn
              style={{ float: 'right' }}
              title='Polub'
              btnClass='silver'
              icon='https://img.icons8.com/ios/50/000000/like--v1.png'
            />
          </div>
        </BrowserView>
        <Price price={product.price} priceBefore={product.priceBefore} />
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 303px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};

  .RightSide {
    display: flex;
    justify-content: space-between;
    width: 40%;
    height: 100%;
    padding: 25px 0;
    text-align: right;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    .RightSide {
      flex-direction: column;
    }
  }
`;

export default Product;
