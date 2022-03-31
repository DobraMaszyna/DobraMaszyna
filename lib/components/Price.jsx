import styled from "styled-components";

const Price = ({ priceBefore, price }) => {
  return (
    <PriceStyled>
      <p>
        {priceBefore}
        {priceBefore % 1 === 0 && ".00"} zł
      </p>
      <h1>
        {price}
        {price % 1 === 0 && ".00"} zł
      </h1>
    </PriceStyled>
  );
};

const PriceStyled = styled.div`
  p {
    color: #c6c9f8;
    font-size: 30px;
  }

  h1 {
    color: #8e94f2;
    font-size: 60px;
  }
`;

export default Price;
