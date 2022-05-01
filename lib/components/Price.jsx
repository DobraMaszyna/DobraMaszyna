import styled from 'styled-components';

const Price = ({ priceBefore, price }) => {
  return (
    <PriceStyled>
      {priceBefore === 10 ||
        (priceBefore === price && (
          <p>
            {priceBefore}
            {priceBefore % 1 === 0 && '.00'} zł
          </p>
        ))}
      <h1>
        {price}
        {price % 1 === 0 && '.00'} zł
      </h1>
    </PriceStyled>
  );
};

const PriceStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: space-around;
  height: 4.5rem;

  p {
    color: #c6c9f8;
    font-size: 1em;
    text-decoration: line-through;
  }

  h1 {
    color: #8e94f2;
    font-size: 2em;
    line-height: 0.5;
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: 1.5em;
    }

    h1 {
      font-size: 2.8em;
    }
  }
`;

export default Price;
