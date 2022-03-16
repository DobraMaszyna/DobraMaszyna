import styled from 'styled-components';

const ProductImages = ({ image }) => {
  return (
    <ProductImagesStyled>
      <ProductLogoStyled src='https://getlogo.net/wp-content/uploads/2019/07/bernina-international-logo-vector.png' />
      <ProductImageStyled src={image} />
    </ProductImagesStyled>
  );
};

const ProductImagesStyled = styled.div`
  width: 60%;
  height: 100%;
  display: grid;
  align-items: center;
  position: relative;
`;

const ProductLogoStyled = styled.img`
  width: 12%;
  position: absolute;
  margin: 5%;
  top: 0;
  left: 0;
`;

const ProductImageStyled = styled.img`
  width: 50%;
  margin 2% auto 10% 30%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ProductImages;
