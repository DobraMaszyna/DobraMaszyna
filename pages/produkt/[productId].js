import styled from 'styled-components';

import LeftSideInfo from '../../components/Main/ProductDetails/LeftSideInfo/Index';
import RightSideInfo from '../../components/Main/ProductDetails/RightSideInfo/Index';

import getProductInfo from '../../lib/api/getProductInfo';

const ProductPage = ({ productInfo }) => {
  return (
    <ProductViewStyled>
      <LeftSideInfo
        productName={productInfo.name}
        producer={productInfo.producer}
      />
      <RightSideInfo
        price={productInfo.price}
        priceBefore={productInfo.priceBefore}
      />
    </ProductViewStyled>
  );
};

const ProductViewStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  .name {
    position: absolute;
  }
`;

export const getServerSideProps = async (context) => {
  const productInfo = await getProductInfo(context.query.productId);

  return {
    props: { productInfo },
  };
};

export default ProductPage;
