import Link from 'next/Link';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductInfo = ({ product, producer, image, pid }) => {
  return (
    <ProductInfoStyled>
      <img src='/img/test.jpg' alt='' />
      <div className='defaultInfo'>
        <Link href={`produkt/${pid}`}>
          <motion.a
            whileHover={{ textDecoration: 'underline' }}
            className='product_model'>
            {product}
          </motion.a>
        </Link>
        <h2 className='product_producer'>{producer}</h2>
      </div>
    </ProductInfoStyled>
  );
};

const ProductInfoStyled = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  text-align: left;

  img {
    width: 40%;
  }

  .defaultInfo {
    height: 100%;
    margin-top: 20%;
    margin-left: 2%;

    a {
      font-weight: bold;
      width: 100%;
      font-size: 25px;
      cursor: pointer;
    }

    h2 {
      width: 100%;
      font-weight: lighter;
      font-size: 15px;
    }
  }

  .product_prize_before {
    text-decoration: line-through;
    font-weight: normal;
  }
`;

export default ProductInfo;
