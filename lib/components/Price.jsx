import styled from 'styled-components';

const Price = ({ priceBefore, price }) => {
  return (
    <PriceStyled>
      <p>
        {priceBefore}
        {priceBefore % 1 === 0 && '.00'} zł
      </p>
      <h1>
        {price}
        {price % 1 === 0 && '.00'} zł
      </h1>
    </PriceStyled>
  );
};

const PriceStyled = styled.div`
  text-align: right;

  p {
    color: #c6c9f8;
    font-size: 1.5625vw;
  }

  h1 {
    color: #8e94f2;
    font-size: 3.125vw;
  }
`;

export default Price;
