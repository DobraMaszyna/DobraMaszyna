import styled from 'styled-components';

const ProductInfo = () => {
  return (
    <ProductInfoStyled>
      <h1>bernette Sew&Go 8</h1>
      <h2>Bernia AG</h2>

      <h3><s>2100.00 zł</s></h3>
      <h4>1899.00 zł</h4>
    </ProductInfoStyled>
  );
};

const ProductInfoStyled = styled.div`
  width: 40%;
  height: 100%;

  h1 {
    margin-top: 12%;
    width: 100%;
    text-align: center;
    font-size: 2rem;
  }
  h2{
    text-align: center;
    padding-right: 28%;
    width: 100%;
    font-weight: lighter;
  }
  h3{
    margin-top: 15%;
    width: 100%;
    text-align: center;
    color: #F28D94;
    font-size: 1.5rem;
    padding-right: 18%
  }
  h4{
    width: 100%;
    text-align: center;
    color: #8E94F2;
    font-size: 3rem;
  }
`;

export default ProductInfo;
