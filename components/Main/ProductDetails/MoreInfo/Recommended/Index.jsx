import styled from 'styled-components';
import RecomendetProduct from './RecomendetProduct';

const Recommended = ({ recommended }) => {
  return (
    <RecommendedStyled id='Polecane' className='card'>
      <h1>Polecane</h1>
      <ul>
        <RecomendetProduct
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <RecomendetProduct
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <RecomendetProduct
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
      </ul>
    </RecommendedStyled>
  );
};

const RecommendedStyled = styled.section`
  margin-inline: auto;
  margin-block: 50px;
  width: 100%;
  padding: 50px;
  background: white;

  h1 {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-around;
  }
`;

export default Recommended;
