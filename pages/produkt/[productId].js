import styled from 'styled-components';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addViewedProduct } from '../../redux/recentlyViewed';

import LeftSideInfo from '../../components/Main/ProductDetails/LeftSideInfo/Index';
import RightSideInfo from '../../components/Main/ProductDetails/RightSideInfo/Index';
import MoreInfo from '../../components/Main/ProductDetails/MoreInfo/Index';

import getProductInfo from '../../lib/api/getProductInfo';

const ProductPage = ({ productInfo }) => {
  const dispatch = useDispatch();
  const recentlyViewed = useSelector(
    (state) => state.recentlyViewed.recentlyViewed
  );

  useEffect(() => {
    if (
      recentlyViewed.filter((product) => product._id === productInfo._id)
        .length === 0
    )
      dispatch(
        addViewedProduct({
          _id: productInfo._id,
          name: productInfo.name,
          producer: productInfo.producer,
          price: productInfo.price,
          priceBefore: productInfo.priceBefore,
        })
      );
  }, []);

  return (
    <ProductViewStyled>
      <div className='topContainer'>
        <LeftSideInfo
          productName={productInfo.name}
          producer={productInfo.producer}
          params={productInfo.params}
        />
        <RightSideInfo product={productInfo} />
      </div>
      <MoreInfo productInfo={productInfo} />
    </ProductViewStyled>
  );
};

const ProductViewStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow-x: hidden;

  .name {
    position: absolute;
  }

  .topContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    .topContainer {
      flex-direction: row;
    }
  }
`;

export const getServerSideProps = async (context) => {
  const productInfo = await getProductInfo(context.query.productId);

  return {
    props: { productInfo },
  };
};

export default ProductPage;
