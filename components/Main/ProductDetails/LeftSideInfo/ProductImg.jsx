import styled from "styled-components";

const ProductImg = ({ img }) => {
  return <ProductImgStyled src={img}></ProductImgStyled>;
};

const ProductImgStyled = styled.img`
  width: 50%;
`;

export default ProductImg;
