import styled from "styled-components";

import LeftSideInfo from "../../components/Main/ProductDetails/LeftSideInfo/Index";
import RightSideInfo from "../../components/Main/ProductDetails/RightSideInfo/Index";

const ProductPage = () => {
  return (
    <ProductViewStyled>
      <RightSideInfo />
      <LeftSideInfo />
    </ProductViewStyled>
  );
};

const ProductViewStyled = styled.div``;

export default ProductPage;
