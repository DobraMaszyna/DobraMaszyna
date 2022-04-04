import styled from "styled-components";
import ProductImg from "./ProductImg";

const LeftSideInfo = () => {
  return (
    <LeftSideInfoStyled>
      <ProductImg />
    </LeftSideInfoStyled>
  );
};

const LeftSideInfoStyled = styled.div`
  width: 70%;
`;

export default LeftSideInfo;
