import styled from 'styled-components';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ProductInfo = ({ product, producer, image, pid }) => {
  return (
    <Link href={`produkt/${pid}`}>
      <ProductInfoStyled>
        <img src='/img/test.jpg' alt='' />
        <div className='defaultInfo'>
          <motion.p
            whileHover={{ textDecoration: 'underline' }}
            className='product_model'>
            {product}
          </motion.p>

          <h2 className='product_producer'>{producer}</h2>
        </div>
      </ProductInfoStyled>
    </Link>
  );
};

const ProductInfoStyled = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  text-align: left;
  cursor: pointer;

  img {
    width: 250px;
  }

  .defaultInfo {
    height: 100%;
    margin-top: 20%;
    margin-left: 2%;

    p {
      font-weight: bold;
      width: 100%;
      font-size: 25px;
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
