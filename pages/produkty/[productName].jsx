import { useRouter } from "next/router";

import styled from "styled-components";

const ProductPage = () => {
  const router = useRouter();

  return (
    <ProductViewStyled>
      <h1>{router.asPath}</h1>
    </ProductViewStyled>
  );
};

const ProductViewStyled = styled.div``;

export default ProductPage;
