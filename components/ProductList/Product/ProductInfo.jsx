import styled from 'styled-components';

const ProductInfo = () => {
  return (
    <ProductInfoStyled>
      <h2>MODEL</h2>
      <h3>MARKA</h3>

      <h3>Stara Cena</h3>
      <h1>Nowa Cena</h1>
    </ProductInfoStyled>
  );
};

const ProductInfoStyled = styled.div`
  width: 40%;
  height: 100%;
  background-color: red;
  h1 {
  }
`;

export default ProductInfo;
